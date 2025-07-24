# 코드 설명 가이드 - 초보자를 위한 자세한 설명

이 문서는 개발 지식이 많지 않은 분들도 이해할 수 있도록 코드를 자세히 설명합니다.

## 1. 메인 분석 로직 (`api/analyze.js`)

### 전체 구조
```javascript
module.exports = async (req, res) => {
    // 여기에 모든 로직이 들어갑니다
};
```
- `module.exports`는 이 파일을 다른 곳에서 사용할 수 있게 내보내는 방법입니다
- `async`는 비동기 함수라는 뜻으로, 시간이 걸리는 작업을 처리할 수 있습니다
- `req`는 요청(request), `res`는 응답(response)을 나타냅니다

### CORS 설정 (4-7줄)
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
```
**쉬운 설명**: 웹 브라우저에서 다른 도메인의 서버에 요청을 보낼 때 발생하는 보안 제한을 해제하는 설정입니다. 
- `*`는 "모든 도메인에서 접근 허용"이라는 뜻입니다

### URL에서 데이터 추출 (34-40줄)
```javascript
const clickencMatch = url.match(/clickenc=([^&]*)/);
```
**쉬운 설명**: 
- `url.match()`는 문자열에서 특정 패턴을 찾는 함수입니다
- `/clickenc=([^&]*)/`는 정규표현식이라고 하는 패턴입니다
- 이것은 "clickenc=" 다음에 오는 "&" 문자 전까지의 모든 문자를 찾습니다

### 이중 URL 디코딩 (42-45줄)
```javascript
const encoded = clickencMatch[1];
const decoded1 = decodeURIComponent(encoded);
const decoded2 = decodeURIComponent(decoded1);
```
**쉬운 설명**:
- URL에서 특수문자는 %20, %3A 같은 형태로 인코딩됩니다
- 추적 링크는 보안상 이유로 두 번 인코딩되어 있어서 두 번 디코딩해야 합니다
- `decodeURIComponent()`는 이런 인코딩을 원래대로 되돌리는 함수입니다

### 압축된 데이터 추출 (49-56줄)
```javascript
const qMatch = decoded2.match(/q=([^&]*)/);
const compressedString = qMatch[1];
```
**쉬운 설명**:
- 디코딩된 URL에서 "q=" 파라미터를 찾습니다
- 이 파라미터 값이 실제로 압축된 데이터입니다

## 2. 압축 해제 클래스 (`lib/decompressor.js`)

```javascript
class LzDecompressor {
  decompress(compressed) {
    console.log(decompressFromEncodedURIComponent(compressed));
    return JSON.parse(decompressFromEncodedURIComponent(compressed));
  }
}
```

**쉬운 설명**:
- `class`는 관련된 함수들을 묶어놓은 설계도 같은 것입니다
- `decompressFromEncodedURIComponent()`는 LZ-String 라이브러리의 함수로, 압축된 데이터를 원본으로 되돌립니다
- `JSON.parse()`는 문자열로 된 JSON 데이터를 실제 객체로 변환합니다

## 3. 프론트엔드 JavaScript (`public/script.js`)

### 분석 함수
```javascript
async function analyzeLink() {
    const url = document.getElementById('urlInput').value.trim();
    
    if (!url) {
        alert('URL을 입력해주세요.');
        return;
    }
```

**쉬운 설명**:
- `document.getElementById()`는 웹 페이지에서 특정 ID를 가진 요소를 찾는 함수입니다
- `.value`는 입력 필드에 사용자가 입력한 값을 가져옵니다
- `.trim()`은 앞뒤 공백을 제거합니다

### 서버에 요청 보내기
```javascript
const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
});
```

**쉬운 설명**:
- `fetch()`는 서버에 HTTP 요청을 보내는 함수입니다
- `method: 'POST'`는 데이터를 서버로 보내는 방식입니다
- `JSON.stringify()`는 JavaScript 객체를 JSON 문자열로 변환합니다

### 결과 표시
```javascript
const data = await response.json();
document.getElementById('results').innerHTML = formatResults(data.data);
```

**쉬운 설명**:
- `response.json()`은 서버에서 받은 JSON 응답을 JavaScript 객체로 변환합니다
- `innerHTML`은 HTML 요소의 내용을 변경하는 속성입니다

## 4. HTML 구조 (`public/index.html`)

### 입력 영역
```html
<textarea id="urlInput" placeholder="https://msft-ssp-apac.adnxs.com/click2?e=..."></textarea>
<button id="analyzeBtn">분석하기</button>
```

**쉬운 설명**:
- `textarea`는 여러 줄의 텍스트를 입력할 수 있는 입력 필드입니다
- `placeholder`는 입력 필드가 비어있을 때 보여주는 안내 문구입니다
- `button`은 클릭 가능한 버튼을 만듭니다

### 결과 표시 영역
```html
<div id="results"></div>
```

**쉬운 설명**:
- `div`는 HTML에서 영역을 나누는 태그입니다
- JavaScript에서 이 영역에 분석 결과를 표시합니다

## 5. 핵심 처리 과정 요약

1. **사용자 입력**: 웹 페이지에서 추적 링크 입력
2. **데이터 전송**: JavaScript가 서버 API로 링크 전송
3. **URL 파싱**: 서버에서 clickenc 파라미터 추출
4. **이중 디코딩**: URL 디코딩을 두 번 수행
5. **압축 데이터 추출**: q 파라미터에서 압축된 문자열 추출
6. **압축 해제**: LZ-String 라이브러리로 원본 데이터 복원
7. **결과 반환**: JSON 형태로 클라이언트에 결과 전송
8. **화면 표시**: 웹 페이지에서 결과를 사용자에게 보여줌

## 6. 자주 사용되는 프로그래밍 개념

- **비동기 처리 (async/await)**: 시간이 걸리는 작업을 기다리는 방법
- **정규표현식**: 문자열에서 패턴을 찾는 도구
- **JSON**: 데이터를 주고받을 때 사용하는 표준 형식
- **API**: 서로 다른 프로그램이 소통하는 방법
- **CORS**: 웹 보안 정책 중 하나