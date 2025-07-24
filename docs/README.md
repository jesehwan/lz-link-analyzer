# LZ Link Analyzer - 종합 가이드

## 프로젝트 소개

LZ Link Analyzer는 Microsoft, Dable 등의 광고 네트워크에서 사용하는 클릭 추적 링크를 분석하는 웹 서비스입니다. 이러한 링크들은 LZ-String 압축을 사용하여 데이터를 인코딩하는데, 본 프로그램이 이를 디코딩하여 원본 데이터를 추출합니다.

## 폴더 구조

```
lz-link-analyzer/
├── api/                    # Vercel 서버리스 함수
│   ├── analyze.js         # 링크 분석 API 엔드포인트
│   └── health.js          # 헬스 체크 API
├── lib/                   # 공통 라이브러리
│   └── decompressor.js    # LZ-String 압축 해제 클래스
├── public/                # 웹 프론트엔드 파일
│   ├── index.html         # 메인 웹 페이지
│   ├── script.js          # 프론트엔드 JavaScript
│   └── style.css          # 스타일시트
├── cli-tools/             # 원본 CLI 도구들
│   ├── dq.js              # 메인 분석 스크립트
│   ├── dq.bat             # Windows 배치 파일
│   └── dq-simple.bat      # 간단한 실행 파일
├── src/                   # TypeScript 소스 (개발용)
│   ├── decompressor.ts    # TypeScript 버전
│   └── decompress.ts      # 압축 해제 유틸리티
└── docs/                  # 문서 폴더
    ├── README.md          # 이 파일
    ├── code-guide.md      # 코드 설명 가이드
    └── technical-concepts.md # 기술 개념 설명
```

## 주요 특징

1. **LZ-String 압축 해제**: 광고 추적 링크에 포함된 압축된 데이터를 원본으로 복원
2. **이중 URL 디코딩**: URL 인코딩이 두 번 적용된 데이터를 정확히 디코딩
3. **웹 인터페이스**: 사용자 친화적인 웹 브라우저 인터페이스 제공
4. **Vercel 배포**: 서버리스 아키텍처로 클라우드 배포
5. **실시간 분석**: 링크를 입력하면 즉시 분석 결과 제공

## 사용법

### 웹 인터페이스
1. 웹 브라우저에서 배포된 사이트 접속
2. 분석하고 싶은 추적 링크를 텍스트 영역에 붙여넣기
3. "분석하기" 버튼 클릭
4. 결과 확인

### CLI 도구 (로컬)
```bash
# Windows
dq.bat "추적링크URL"

# Node.js 직접 실행
node cli-tools/dq.js "추적링크URL"
```

## 배포 정보

- **플랫폼**: Vercel
- **아키텍처**: 서버리스 함수
- **런타임**: Node.js 18+
- **빌드**: JavaScript (TypeScript 빌드 생략)

## 지원하는 링크 형태

- Microsoft SSP (msft-ssp-apac.adnxs.com)
- Dable 추적 링크
- clickenc 파라미터가 포함된 모든 추적 링크