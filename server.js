const express = require('express');
const cors = require('cors');
const path = require('path');
const { LzDecompressor } = require('./dist/decompressor');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 링크 분석 API 엔드포인트
app.post('/api/analyze', (req, res) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({ 
                error: 'URL이 필요합니다.',
                success: false 
            });
        }

        // clickenc 파라미터 추출
        const clickencMatch = url.match(/clickenc=([^&]*)/);
        if (!clickencMatch) {
            return res.status(400).json({ 
                error: 'clickenc 파라미터를 찾을 수 없습니다.',
                success: false 
            });
        }

        // 이중 URL 디코딩
        const encoded = clickencMatch[1];
        const decoded1 = decodeURIComponent(encoded);
        const decoded2 = decodeURIComponent(decoded1);
        
        console.log('Decoded URL:', decoded2);

        // q 파라미터 추출
        const qMatch = decoded2.match(/q=([^&]*)/);
        if (!qMatch) {
            return res.status(400).json({ 
                error: 'q 파라미터를 찾을 수 없습니다.',
                success: false 
            });
        }

        const compressedString = qMatch[1];

        // LZ-String 압축 해제
        const decompressor = new LzDecompressor();
        const result = decompressor.decompress(compressedString);
        
        // 성공 응답
        res.json({
            success: true,
            data: {
                originalUrl: url,
                decodedUrl: decoded2,
                compressedString: compressedString,
                decompressedData: result
            }
        });

    } catch (error) {
        console.error('분석 오류:', error);
        res.status(500).json({ 
            error: '링크 분석 중 오류가 발생했습니다: ' + error.message,
            success: false 
        });
    }
});

// 건강 상태 확인 엔드포인트
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Link Analyzer 서버가 http://localhost:${PORT} 에서 실행중입니다.`);
    console.log(`📊 API 엔드포인트: http://localhost:${PORT}/api/analyze`);
});