# 기술 개념 설명서

## 1. LZ-String 압축 알고리즘

### 개념
LZ-String은 JavaScript에서 사용할 수 있는 문자열 압축 라이브러리입니다. 웹 환경에서 데이터 크기를 줄여 전송 효율성을 높이기 위해 사용됩니다.

### 특징
- **손실 없는 압축**: 원본 데이터를 완전히 복원 가능
- **웹 친화적**: URL에 포함 가능한 문자만 사용
- **빠른 처리**: JavaScript 환경에서 실시간 압축/해제 가능

### 사용 예시
```javascript
// 압축
const compressed = compressToEncodedURIComponent("긴 문자열 데이터");

// 압축 해제  
const original = decompressFromEncodedURIComponent(compressed);
```

## 2. 클릭 추적 시스템

### 동작 원리
1. **사용자 클릭**: 광고나 링크를 클릭
2. **추적 서버 경유**: 직접 목적지로 가지 않고 추적 서버를 거침
3. **데이터 수집**: 클릭 시간, 사용자 정보, 참조 페이지 등 수집
4. **최종 리다이렉트**: 실제 목적지로 사용자 전송

### 데이터 포함 이유
- **분석 목적**: 광고 효과 측정, 사용자 행동 분석
- **과금 근거**: 클릭당 과금(CPC) 모델에서 결제 근거
- **타겟팅**: 향후 맞춤형 광고 제공을 위한 데이터

## 3. URL 인코딩/디코딩

### URL 인코딩이 필요한 이유
- **특수문자 처리**: URL에는 특정 문자(공백, 한글, 특수기호)를 직접 사용할 수 없음
- **데이터 무결성**: 네트워크 전송 중 데이터 손실 방지
- **표준 준수**: HTTP 프로토콜 표준을 따르기 위함

### 인코딩 예시
```
원본: "https://example.com/search?q=한글 검색어"
인코딩: "https%3A//example.com/search%3Fq%3D%ED%95%9C%EA%B8%80%20%EA%B2%80%EC%83%89%EC%96%B4"
```

### 이중 인코딩
추적 링크에서는 보안과 데이터 보호를 위해 인코딩을 두 번 수행합니다:
```
원본 → 1차 인코딩 → 2차 인코딩 → 전송
수신 → 1차 디코딩 → 2차 디코딩 → 원본 복원
```

## 4. 서버리스 아키텍처 (Vercel Functions)

### 전통적인 서버 vs 서버리스
- **전통적 서버**: 24시간 실행되는 서버에 코드 배포
- **서버리스**: 요청이 올 때만 함수가 실행됨

### 서버리스의 장점
- **비용 효율성**: 사용한 만큼만 과금
- **자동 확장**: 트래픽에 따라 자동으로 처리 용량 조절
- **관리 불필요**: 서버 관리, 보안 업데이트 등을 제공업체가 처리

### Vercel Functions 구조
```javascript
// api/함수명.js
module.exports = (req, res) => {
    // 요청 처리 로직
    res.json({ result: "처리 결과" });
};
```

## 5. 정규표현식 (Regular Expression)

### 개념
문자열에서 특정 패턴을 찾거나 추출하기 위한 표현 방법입니다.

### 본 프로젝트에서 사용된 정규표현식
```javascript
// clickenc 파라미터 추출
/clickenc=([^&]*)/
```

### 패턴 분석
- `clickenc=`: "clickenc=" 문자열과 정확히 일치
- `([^&]*)`: 괄호는 그룹을 의미, `[^&]*`는 "&" 문자가 아닌 모든 문자를 0개 이상 매치

## 6. CORS (Cross-Origin Resource Sharing)

### 문제 상황
웹 브라우저는 보안상 다른 도메인의 서버에 직접 요청을 보내는 것을 제한합니다.

### 해결 방법
서버에서 CORS 헤더를 설정하여 특정 도메인의 접근을 허용합니다:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
```

## 7. JSON (JavaScript Object Notation)

### 특징
- **인간이 읽기 쉬운**: 텍스트 기반의 데이터 형식
- **언어 독립적**: 거의 모든 프로그래밍 언어에서 지원
- **웹 표준**: 웹 API에서 가장 널리 사용되는 데이터 형식

### 구조 예시
```json
{
    "success": true,
    "data": {
        "originalUrl": "...",
        "decodedUrl": "...",
        "compressedString": "...",
        "decompressedData": {
            "key1": "value1",
            "key2": "value2"
        }
    }
}
```

## 8. 비동기 프로그래밍 (Async/Await)

### 필요성
네트워크 요청, 파일 읽기 등 시간이 걸리는 작업을 처리할 때 프로그램이 멈추지 않도록 하기 위함입니다.

### 사용 방법
```javascript
// 옛날 방식 (콜백)
fetchData(function(result) {
    processData(result, function(processed) {
        console.log(processed);
    });
});

// 현대적 방식 (async/await)
async function processData() {
    const result = await fetchData();
    const processed = await processData(result);
    console.log(processed);
}
```

## 9. 모듈 시스템

### CommonJS (Node.js)
```javascript
// 내보내기
module.exports = { 함수명, 클래스명 };

// 가져오기
const { 함수명 } = require('./파일경로');
```

### ES6 Modules (브라우저)
```javascript
// 내보내기
export { 함수명, 클래스명 };

// 가져오기
import { 함수명 } from './파일경로.js';
```

## 10. 환경별 차이점

### 개발 환경 (로컬)
- **빠른 테스트**: 코드 변경 후 즉시 결과 확인 가능
- **디버깅 용이**: 상세한 로그와 오류 정보 확인 가능
- **제한 없음**: 모든 기능과 라이브러리 사용 가능

### 프로덕션 환경 (Vercel)
- **성능 최적화**: 실제 사용자를 위한 최적화된 환경
- **제한 사항**: 실행 시간, 메모리 사용량 등의 제한
- **보안 강화**: 민감한 정보 보호를 위한 추가 보안 조치