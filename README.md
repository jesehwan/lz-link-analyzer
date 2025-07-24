# 🔍 Link Analyzer

광고 클릭 추적 링크를 분석하여 숨겨진 데이터를 추출하는 웹 서비스입니다.

![Link Analyzer Screenshot](https://via.placeholder.com/800x400?text=Link+Analyzer+Screenshot)

## ✨ 주요 기능

- 🔗 **링크 분석**: Microsoft/Dable 광고 네트워크의 클릭 추적 링크 분석
- 🗜️ **LZ-String 압축 해제**: URL에 숨겨진 압축된 데이터 추출
- 📊 **시각적 결과**: 요약, 상세, 원본 데이터를 탭으로 구분하여 표시
- 📱 **반응형 디자인**: 모바일과 데스크톱 모두 지원
- 🎯 **샘플 테스트**: 내장된 샘플 링크로 즉시 테스트 가능
- ⚡ **서버리스**: Vercel Functions로 빠른 응답 속도

## 🚀 빠른 시작

### 온라인 사용 (권장)

👉 **[Live Demo](https://your-app-name.vercel.app)**

### 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/your-username/lz-link-analyzer.git
cd lz-link-analyzer

# 의존성 설치
npm install

# TypeScript 빌드
npm run build

# 개발 서버 시작
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 📖 사용법

1. **링크 입력**: 광고 추적 링크를 텍스트 상자에 붙여넣기
2. **분석 실행**: "분석하기" 버튼 클릭
3. **결과 확인**: 3개 탭에서 결과 확인
   - **요약**: 핵심 정보 (목적지, 광고비, 성과지표)
   - **상세**: 디코딩된 URL과 압축 문자열
   - **원본**: 전체 JSON 데이터

### 지원 링크 형식

```
https://msft-ssp-apac.adnxs.com/click2?e=...&clickenc=...
```

## 🛠️ 기술 스택

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **압축 해제**: LZ-String
- **배포**: Vercel
- **언어**: TypeScript

## 📁 프로젝트 구조

```
lz-link-analyzer/
├── public/              # 프론트엔드 파일
│   ├── index.html      # 메인 HTML
│   ├── style.css       # 스타일시트
│   └── script.js       # 클라이언트 JavaScript
├── src/                # TypeScript 소스
│   ├── decompressor.ts # LZ-String 디코딩 로직
│   └── decompress.ts   # CLI 버전
├── server.js           # Express 서버
├── vercel.json         # Vercel 배포 설정
└── package.json        # 프로젝트 설정
```

## 🔍 동작 원리

1. **URL 파라미터 추출**: `clickenc` 파라미터에서 인코딩된 데이터 추출
2. **이중 URL 디코딩**: 두 번의 URL 디코딩으로 원본 형태 복원
3. **압축 문자열 추출**: `q` 파라미터에서 LZ-String 압축 데이터 추출
4. **압축 해제**: LZ-String 알고리즘으로 JSON 데이터 복원
5. **결과 표시**: 사용자 친화적 형태로 데이터 시각화

## 🌐 Vercel 배포

### 자동 배포 (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 저장소 연결
3. 자동 배포 완료

### 수동 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 📊 추출 가능한 데이터

### 기본 정보
- 요청 시간 및 만료 시간
- 사용자 언어 설정
- 광고 채널 및 슬롯 정보

### 광고 경제 데이터
- 입찰가 (USD)
- 클릭당 비용 (CPC)
- 예측 클릭률 (CTR)
- 경쟁 타입 및 수익률

### 최종 목적지
- 실제 뉴스 기사 URL
- 기사 제목 (한글 자동 추출)

## ⚖️ 법적 고지

이 도구는 **교육 및 연구 목적**으로만 사용되어야 합니다.

- ✅ 광고 투명성 연구
- ✅ 디지털 마케팅 교육
- ✅ 데이터 구조 분석
- ❌ 무단 데이터 수집
- ❌ 개인정보 침해
- ❌ 상업적 악용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- 이슈: [GitHub Issues](https://github.com/your-username/lz-link-analyzer/issues)
- 이메일: your-email@example.com

---

**Made with ❤️ for Ad Transparency**