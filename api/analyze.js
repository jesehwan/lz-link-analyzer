const { LzDecompressor } = require('../lib/decompressor');

module.exports = async (req, res) => {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS 요청 처리 (CORS preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // POST 요청만 허용
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            success: false 
        });
    }

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
};