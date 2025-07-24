// 샘플 링크 데이터
const sampleLinks = {
    1: "https://msft-ssp-apac.adnxs.com/click2?e=wqT_3QKhAfBDoQAAAAMAxBkFAQioo4bEBhD98umHmpbq4mUYv_upifnT4YRcIIrajQ0omAIwoXk4swRAr_7J5gFI8opOUABaA1VTRGIBBZBoAXABeJmgZ4ABrIsGiAEBkAECmAEFoAECqQF2GmmpvB3FP7EBEQosuQEAAABguB7lP8EBERQAyRUKNNgBjr0C4AEA8AEA-AEA/s=a6cb5592f47499179b1303e10c72cfb165a7601d/bcr=AAAAAAAA8D8=/pp=0.16/bn=99756/clickenc=https%3A%2F%2Fad-log.dable.io%2Fservices%2Farticle.kr.msn.com%252Fxandr%2Fusers%2F6631979946173169087%2Fcampaigns%2FVvkrGxW0OfvL%2Fcontents%2FgpGKoX6lOHD0%2Fclick_redirect%3Fq%3DN4IgTgpgjgrhDOAXA%252BoglgWwiAXCAjAOwCsAzKQEz4AcAnAGzUUUgA0IEAHgA5qQAmuEABUAFjAAEAKRgAbCRQAsCgAwViElfhzFtpehIDiAWWEBqFZZUSAFAGEA9g7D80AOwCGiCPwkBVNzQANwgweA95YUwIAEo2EG4PAHNsPHx4sA83AGshFQzoOCRkNEE8UkVCfFpaQipCSkVaRXpyeIAjUuRIeG4HN3gIErKQTv5uhGIkmBUofFIMfiSoWXp8bHZ4BxgwAGNUkABBQ-wpQgAvNwBleMQHRAjkRJShdPYdtCFRRERueBwAPQAgDuoIAdBh4G4wbsHBgAdkHABabJgAFuCDA%252BAA%252B6iUIAgCkAFE7ASAEK0AmHajE0nUGm0GlEskE2gqVl2JHEw7k4is9lEgAirJ51FJJIJ1EUHK5RJ5ZIo5IFwsZ5PFdJZtEFsvl7NofKFrPoksphv1Mtp5JZh2lZulYtlKr5qrlStZwuZrNIVNtpK1kpUjvdrNNwuo3vNnsOpLJnMt1GN1A9fsI-Pj0tocajqepxJZZL1Wet%252BAtErJxsjTtZ1ABHjASOOpwu1wA-A5dqUALyibiQtwAMl2QS7tAgo-aHl2ADMKA0VIoVLsVB4IO1SO06jViD4Z7t6P2IGhOxR8u9BmBkLIskkhIj4rtRFkMbIhLPFNRCE1qPEsIhRA4RkIMFFDBN4QAeJJSlfT8Py-eJ3BCNw7jAABPYYhD7GE4QRZFUQAHzfWDGXieBZHuV4Oi6bgwDQfY8lA%252BgmkIeJ%252BF6ZBf3-cYQjCNB%252BiEIIAOyDxkCCUhkE4LJ%252BAvDBEFkXR2LE9p4GQDxuG4WQUInNxkCndpdmQXZ2n4ChkFYi9kBPdQVDqUh5ksZAVP4XZJJM0yICnDw5EQSjxl2HYwCEPwrkFeCMG4dC8AachFDIedaHwFQ1kYGhaBYnxaK8HwIpABw-CJAAFeh6CgbJiBudguG8vBgAAHRAWEwogdB0H6VAUO4CA6pwChWDqsYnho-YuuIYhaDBEgiv0ahetGKjBqGTIcmG0bxuISbGBm3ZuF2LrSFqTbtuQYFkHgdpdv2uqtv04EHBOs7cAoekZu2xALzGLqVFAhcaiK57dlegyIjQD6wX0fBiAoRk-oBjAAIgWRkG2X4YEQEGRv1eLFBm-h3M82QUCnCAvB2IZYRgJDdumuqXovTIWp0iJZAnXZsi6164Gx3GvJO17MqSFCurqsBezqmbhYwAyKdwIhCBmqc0Hx0JkHaMiWay2EkIgKWcHwGb%252Buo2ihgwGBhoYip8AXLQWnfRQsb6ubDZOtAkgwDwQfiucKFIQhLCqRR8ADvWungR9XDcJJui8XiQYXRQqGqKb6GIRLbJmvtUGSUpBZAYFVwaxJ6xo7ikQoUW6s8u5UFEMB7lk9wI6SGuYG4Lr8AAX3iJJ%252BGo3AVHYNBlOBOtuF7-vlK13ZUO4bwyhUNugA",
    2: "https://msft-ssp-apac.adnxs.com/click2?e=wqT_3QKfAfBDnwAAAAMAxBkFAQilvIbEBhDQsLHc-6aFxVkYv_upifnT4YRcINu2nA0omAIwoXk4swRA8r_r5gFI8opOUABaA1VTRGIBBYhoAXABeJmgZ4ABAIgBAZABApgBBaABAqkB3Esao3VU6T-xAREKKLkBAAAAQArX4z_BFR4AyRUKNNgBjr0C4AEA8AEA-AEA/s=e14294c5ba8dff39a63751de635e859ebfb5430c/bcr=AAAAAAAA8D8=/pp=0.79/bn=0/clickenc=https%3A%2F%2Fad-log.dable.io%2Fservices%2Fkr.msn.com%252Fxandr%2Fusers%2F6631979946173169087%2Fcampaigns%2FnRmM7k81PfQ6%2Fcontents%2Fr26qrrlpNCn5%2Fclick_redirect%3Fq%3DN4IgTgpgjgrhDOAXA%252BoglgWwiAXCAjAOwCsAzKQEzEAMAnKQGyMgA0IEAHgA5qQAmuEABUAFjAAEAKRgAbcRQAs86lXEqcChTjLiA4gFkhAamqnq4gBQBhAPY2wfNADsAhogh9xAVSdoAbhBg8C5yQpgQAJSsIFwuAObYePjRYC5OANaC1CnQcEjIaAJ4CsQUDAxU%252BPi0ZMSEhKSEFBTRAEaFyJDwXDZO8BAFRSDtfJ0IpACeDPWlHBh8cfAiNlDZbPA2MGAAxokgAIL7%252BJIuHBQAotGINoghyLEJgslsW2iCIoiIXPA4APS-AHcgQA6DDwJzA7Y2DC-dI2AC06TAvycEAB8F%252BNxEgV%252BAFJzlZcQAOCi4-aE84AITJhGJtHxhNotNo1AZxIUuNoVnh%252BOp%252B1pRIp1PoZI5532uMppDJ1B5BM552JRN5xIltAUcollOV2rZtAAIpKxXyBdyVeSjebWfsNfgKPCzOkMHLCUSObrxZLpW69czWfKfVzNZLWUT-YzFftiMHdZSNXrDR6tdLKdH8VrWTVfi4wPDDsdThcAPw2baFAC8AOcXAoADMuLd4OlWjmAGTbPwV6h8CgQbbd2u0bZ8QgKWuECAuUh8MdDhTUYguBgQVqtYitiBocuEaIwfpgZAyNJxQRw6LbERpVEyQQUeoUIkNZ4gLCIZZDQjAhTA5%252B3OKFW970fUhn2cAInGuMAJkGQQwQhKEYThREwAAHzvJpgOfeAZBuJ42g6LgwDQXYsmBQhaHwYgGGiPhumQV932QAIgjQXpBD8Gw%252BHSFwmNIZAODSPgDwwRAZGIfB6L41p4GQFwuC4GQJhbJxkFXGTa1abZkG2Voe2QWitOQCgVBoJoQNIUxkGQJwbGCLBthkNAIAgoSbC4Ky%252BAgWsXFkRB8NGbYtjAQQvAAZX1aJMHcgC8AYEpqloO8SjvYg6jdBQiRojxiLcDwYLwbYKDAAArfBKRqPwYGiTg-LwYAAB0QAQrgIHQdBelQCYWsanAKBYRqRnuIjdh6llSGBBhKLDfB%252BuGAjhoGVIMlG6hxsm4hptm7YuG2HqFGaLaduQAFkHgVo9oOxrtq0gEbFO87cH2vrGp2xADxGHrqGBCh8AUO1CFm16D22EI0E%252B4FUqJO0SkB7Y3voziIBkZBNi%252BGBEHBhgiVqIlZs87zfOQWtJ0QLYBihGAIJ6xpYfh7Cbk6NxWPB%252Bg6n2gGrtibSqdwKpaFmsAuAwbmMdwN1ZsG1o7HyJYXE8nqZsa2s0Bkdx3pw7Z0jyqEIOc0WcEVl9wVQeJCh6xqq1cXMiOY%252BEKEa2afOuVARDAG5ROcOJkDiN2YC4BWAF9ojiPhCNwag2DQGSARzLhw8jmTnO2KCGw8cOA6AA",
    3: "https://msft-ssp-apac.adnxs.com/click2?e=wqT_3QKhAfBDoQAAAAMAxBkFAQjuvIbEBhDz0obSpNHrq0kYkcmoiZ3f_dB8INy2nA0omAIwoXk4swRAqZ2i8QFI8opOUABaA1VTRGIBBZBoAXABeJmgZ4ABrIsGiAEBkAECmAEFoAECqQFVpMLYQpCjP7EBEQoouQEAAADgUbjeP8EVHgDJFQo02AGOvQLgAQDwAQD4AQA./s=ca2d9bee3b9614042a1e1ab89254814ac54b0291/bcr=AAAAAAAA8D8=/pp=0.04/bn=99756/clickenc=https%3A%2F%2Fad-log.dable.io%2Fservices%2Fkr.msn.com%252Fxandr%2Fusers%2F0%2Fcampaigns%2FoZPoOPyxrIP9%2Fcontents%2FqQ9qj9pZLhGW%2Fclick_redirect%3Fq%3DN4IgTgpgjgrhDOAXA%252BoglgWwiAXCAjAOwCsAzKQEzH4BsNhALBSADQgQAeADmpACa4QAFQAWMAAQApGABtxFBvIAMVcSpwMaOJTXEBxALJCA1ErNLxACgDCAe1tg%252BaAHYBDRBD7iAqs7QA3CDB4VzkhTAgASlYQLlcAc2w8fBiwV2cAa0ElVOg4JGQ0ATwATgAOJTLiGloqhjLCKmIFGIAjIuRIeC5bZ3gIQuKQdr5OhHxWhgB3GXipjD54%252BAArEoYSmPhbGDAAYySQAEFD-ElXGjAACRjEW0RQ5DjEwRS2HbRBEURELngcAHp-lNgQA6DDwZwg3a2DD-DK2AC0GTA-2cECm8H%252BdxEQX%252BAFIAKLWPElYh4soMQkAIRJpDxh0pRJJABE8VSGAjqeSKCSypyCYc2UoSSVCcSSqyKvziWUeVSaNLuWzGcTDoRyUpFaTyYKBWyyvr%252BTSqcK1lySgSScKCTSyjSGVqyRTzXSHWLlSzCYKqQaTYrZR6CazteyuVSeWtFYdhc6meHefzvXSqcS9VT8EKtayfYTJZSTWH1X6uYdfaKbfSy-9XGAEcdTucrgB%252BWy7IoAXimLi4FAAZlx7vAMq0awAyXb%252BDtKPgUCC7ae9kq7PiMXuECCuUh8BiL3YMJTEc4QVqtYijiBoduEGIwfpgZAydLxQTwmK7ETpNEyQQUQiNBqUDEWCICIthDIQIIMCCrwgPc8RFD%252Bf4UABzBsC4gTOLcYAAJ6DII4KQtCsLwkiYAAD6-v%252BhCAWw8AyHcLxtB0XBgGg%252BzZCCSikLKMF8N0yDAaBoyBMEaC9II-hgRkrjIP4pDIBw6R8PeGCIDImgCfJrTwMgJ46b2rS7MguytDOyB8UZyAUCoxBKI0pD4KQZjIMgrh8LsSkUC5fAQL2riyIgTGjLsOxgII3gAMrMjEmBcHheDNBSZQUsQJT0EQ%252BBcQwJAxD5TgeR4owIXgACavYzAAahgAAyrgABrPmwnCBXgwAADogERXAQOg6C9Kg2HdR1OAUCwHUjI8rH7MNNCkCChBpdlhBjcMzFTQMaSZDNc0LTQS0rbsXC7MNChKAdR3IFMyDwK0J37udRlTLY123bgp0rUdiD3iMw1KJxFA0MQZT4CUH27F9xmhGgv2cXtZTkGUYMQxgYEQDIyDbD8MCIDD%252BAVDQJTIStPl%252BQFyC9huiA7AM0IwJhw2UOdMm7PTuD4L%252BK1gFwGDGazOCEGd40dK09gFPAH4%252BcN%252BArb2aAyB4330bsGSeMZvQeHz0tC6MLFsQMGAwMNEGEDQOhkEoeOkvgDC0CtE26-s11oPEGCuDDJSkGljBULKlD4LQy3a9dEsuPEnTuGJMOyjoIMVHjs1x6QK0EagCRFMNHVdm4tasSJCKkB1K3%252BbcqAiGAdxqaHyDxOXMBcFLAC%252BMTxHwLG4GdIBoDpUw1lw7doTpEDOLsOEDp47cN0AA"
};

// DOM 요소들
const urlInput = document.getElementById('urlInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const btnText = document.querySelector('.btn-text');
const spinner = document.querySelector('.spinner');
const resultsSection = document.getElementById('results');
const errorSection = document.getElementById('error');

// 탭 관련 요소들
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// 샘플 버튼들
const sampleBtns = document.querySelectorAll('.sample-btn');

// 이벤트 리스너 등록
analyzeBtn.addEventListener('click', analyzeLink);
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        analyzeLink();
    }
});

// 탭 이벤트 리스너
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// 샘플 버튼 이벤트 리스너
sampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const sampleNum = btn.dataset.sample;
        urlInput.value = sampleLinks[sampleNum];
        urlInput.focus();
    });
});

// JSON 복사 버튼
document.getElementById('copyJson').addEventListener('click', copyJsonToClipboard);

// 메인 분석 함수
async function analyzeLink() {
    const url = urlInput.value.trim();
    
    if (!url) {
        showError('URL을 입력해주세요.');
        return;
    }
    
    // UI 상태 변경
    setLoadingState(true);
    hideResults();
    hideError();
    
    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });
        
        const result = await response.json();
        
        if (result.success) {
            displayResults(result.data);
        } else {
            showError(result.error);
        }
        
    } catch (error) {
        showError('서버 연결 오류: ' + error.message);
    } finally {
        setLoadingState(false);
    }
}

// 결과 표시 함수
function displayResults(data) {
    hideError();
    
    // 요약 탭 데이터 채우기
    updateSummaryTab(data.decompressedData);
    
    // 상세 탭 데이터 채우기
    updateDetailedTab(data);
    
    // 원본 데이터 탭 채우기
    updateRawTab(data.decompressedData);
    
    // 결과 섹션 표시
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// 요약 탭 업데이트
function updateSummaryTab(data) {
    // 최종 목적지
    const finalDestElement = document.getElementById('finalDestination');
    const finalDestLinkElement = document.getElementById('finalDestinationLink');
    
    if (data.uri) {
        const title = extractTitleFromUrl(data.uri);
        finalDestElement.textContent = title;
        finalDestLinkElement.href = data.uri;
        finalDestLinkElement.style.display = 'inline-block';
    } else {
        finalDestElement.textContent = '정보 없음';
        finalDestLinkElement.style.display = 'none';
    }
    
    // 광고 정보
    document.getElementById('bidPrice').textContent = data.bid_price ? `$${data.bid_price}` : '-';
    document.getElementById('currency').textContent = data.bid_curr || '-';
    document.getElementById('channel').textContent = data.channel || '-';
    document.getElementById('userLang').textContent = data.user_lang || '-';
    
    // 성과 지표
    const extData = parseExtData(data.ext);
    document.getElementById('pctr').textContent = extData.pctr_bid ? (extData.pctr_bid * 100).toFixed(2) + '%' : '-';
    document.getElementById('cpc').textContent = extData.cpc || '-';
    document.getElementById('competition').textContent = extData.competition_type || '-';
    document.getElementById('requestTime').textContent = data.request_time ? 
        new Date(parseInt(data.request_time)).toLocaleString('ko-KR') : '-';
}

// 상세 탭 업데이트
function updateDetailedTab(data) {
    document.getElementById('decodedUrl').textContent = data.decodedUrl || '-';
    document.getElementById('compressedString').textContent = data.compressedString || '-';
}

// 원본 데이터 탭 업데이트
function updateRawTab(data) {
    const jsonElement = document.getElementById('rawJson');
    const formattedJson = JSON.stringify(data, null, 2);
    jsonElement.textContent = formattedJson;
    
    // Prism.js로 하이라이팅
    if (typeof Prism !== 'undefined') {
        Prism.highlightElement(jsonElement);
    }
}

// 유틸리티 함수들
function extractTitleFromUrl(url) {
    try {
        const decodedUrl = decodeURIComponent(url);
        const match = decodedUrl.match(/\/([^\/]+)\/ar-[A-Z0-9]+/);
        if (match) {
            return decodeURIComponent(match[1]).replace(/-/g, ' ');
        }
        return '제목을 추출할 수 없음';
    } catch {
        return '제목을 추출할 수 없음';
    }
}

function parseExtData(extString) {
    try {
        return JSON.parse(extString || '{}');
    } catch {
        return {};
    }
}

function switchTab(tabName) {
    // 탭 버튼 상태 변경
    tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // 탭 패널 상태 변경
    tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === `${tabName}-tab`);
    });
}

function setLoadingState(isLoading) {
    analyzeBtn.disabled = isLoading;
    btnText.style.display = isLoading ? 'none' : 'inline';
    spinner.style.display = isLoading ? 'inline-block' : 'none';
}

function showError(message) {
    hideResults();
    document.getElementById('errorMessage').textContent = message;
    errorSection.style.display = 'block';
    errorSection.scrollIntoView({ behavior: 'smooth' });
}

function hideError() {
    errorSection.style.display = 'none';
}

function hideResults() {
    resultsSection.style.display = 'none';
}

function copyJsonToClipboard() {
    const jsonText = document.getElementById('rawJson').textContent;
    const copyBtn = document.getElementById('copyJson');
    
    navigator.clipboard.writeText(jsonText).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '복사됨!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 수동으로 복사해주세요.');
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔍 Link Analyzer 초기화 완료');
    urlInput.focus();
});