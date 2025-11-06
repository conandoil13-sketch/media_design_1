const books = [
    {
        title: "1", author: "강다은",
        synopsis: `맞잡은 손끝에서 푸름이 피어났다. 
        잿빛 세상에 번지는 작은 따스함의 기적.`,
        image: "./assets/images/dani_cover.png",
        qr: "./assets/qrcode/dani_qr.svg",
        logo: "./assets/logo/dani_title.png",
        hooking: `따스한 이야기를 만나보세요.`
    },
    {
        title: "2",
        author: "김도경",
        synopsis: `봄바람이 불어오는 새학기♪ 한 점 두 점 설렘이 모이면 커다란 로맨스가 시작돼!
`,
        image: "./assets/images/kate_cover.png",
        qr: "./assets/qrcode/kate_qr.svg",
        logo: "./assets/logo/kate_title.png",
        hooking: `달콤한 로맨스를 즐겨보세요!(◍•ᴗ•◍)❤`
    },
    {
        title: "3",
        author: "김도윤",
        synopsis: `어느날, 실종되었던 오빠를 발견했다는 경찰의 전화가 걸려왔다.
        진짜 오빠일까? 이 별장은 뭐지?
`,
        image: "./assets/images/yoon_cover.jpg",
        qr: "./assets/qrcode/yoon_qr.svg",
        logo: "./assets/logo/yoon_title.png",
        hooking: `사라진 오빠를 찾아 나서자.`
    },
    {
        title: "4",
        author: "김서진",
        synopsis: `죽음은 인간을 어디서부터 어디로 
        가게 만듭니까?
        죽음과 상실은 동의어입니까?

        영원히 답을 내지 못할 질문에 대해 말해보자.
`,
        image: "./assets/images/sin_cover.png",
        qr: "./assets/qrcode/sin_qr.svg",
        logo: "./assets/logo/sin_title-1.png",
        hooking: `영원히 답을 내지 못할 생각에 빠져봅시다.`
    },
    {
        title: "5",
        author: "김시우",
        synopsis: `아 머리야…

머리가 깨질 듯 아파오고 
아무 기억이 나지 않는다.
여기는 어디고 오늘은 대체 며칠이지?
`,
        image: "./assets/images/siu_cover.png",
        qr: "./assets/qrcode/shu_qr.svg",
        logo: "./assets/logo/siu_title.png",
        hooking: `기억을 되찾아보세요!`
    },
    {
        title: "6",
        author: "김아영",
        synopsis: `놀이공원에서 아들이 사라졌다.
찾아보지만 어디에도 보이지 않는다.
그와중 옆에 다가오는 한 광대가 있다.
그는 소년의 행방을 알까?
`,
        image: "./assets/images/zero_cover.png",
        qr: "./assets/qrcode/zero_qr.svg",
        logo: "./assets/logo/zero_title.png",
        hooking: `사라진 아들을 찾아주세요.`
    },
    {
        title: "7",
        author: "김한별",
        synopsis: `추리부의 역사를 담은 전설의 노트가 사라졌다.
용의자는 셋 범인은 하나!
단서들아 모아 진실을 밝혀라-범인은 과연 누구일까?
`,
        image: "./assets/images/HAN_cover.png",
        qr: "./assets/qrcode/han_qr.svg",
        logo: "./assets/logo/HAN_title.png",
        hooking: `사건의 진실을 밝혀보자!`
    },
    {
        title: "8",
        author: "노은빈",
        synopsis: `우리 집 강아지, 레오. 내게 있던 레오의 흔적들이 자꾸만 사라진다. 같이 찍은 사진도, 레오의 네임태그도. 부식된 것도 햇빛에 바랜 것도 아닌데. 엄마, 나만 이러는 게 아니지?
`,
        image: "./assets/images/ian_cover.png",
        qr: "./assets/qrcode/ian_qr.svg",
        logo: "./assets/logo/urian_title.png",
        hooking: `레오를 기억해주세요.`
    },
    {
        title: "9",
        author: "박희아",
        synopsis: `당신의 마지막 도전은 언제인가?
우린 언제나 도전 앞에서
무엇이든 해낼 것처럼 자신 넘치다가도
아무것도 할 수 없을 것처럼 작아진다.
이 순간만큼은 당신에게 도전이 마냥 유쾌한 것이었으면 한다.
도전.
최고의 아이돌을 향하여
`, image: "./assets/images/heea_cover.png",
        qr: "./assets/qrcode/heea_qr.svg",
        logo: "./assets/logo/HeeA_title.png",
        hooking: `데뷔조가 되어보자!`
    },
    {
        title: "10",
        author: "배윤아",
        synopsis: `
1년간 적은 스무 개의 편지.
전하지 못해 일기가 되어버린,
남겨진 편지들을 모아
연에게 보냅니다.

답장을 보내겠습니까?
`,
        image: "./assets/images/yoonin_cover.png",
        qr: "./assets/qrcode/yoonin_qr.svg",
        logo: "./assets/logo/yoonin_title.png",
        hooking: `연에게 편지를 전해보세요!`
    },
    {
        title: "11",
        author: "알따나",
        synopsis: `세상을 뒤흔드는 좀비 바이러스의 시작.
모든 것이 무너져 가는 가운데,
그는 오직 하나의 목표만을 품었다 —
안전지대에 도착하는 것.
`, image: "./assets/images/altana_cover.png",
        qr: "./assets/qrcode/altana_qr.svg",
        logo: "./assets/logo/alttana_title.png",
        hooking: `좀비 아포칼립스 속으로!`
    },
    {
        title: "12",
        author: "이수경",
        synopsis: ` 어떤 사람은 매일 같은 질문을 반복한다.
 이 길이 정말 나의 길일까.
 옆에서 누군가는 아주 단순한 말을 건넨다.
 그렇게까지 고민한다는 건 벌써 마음이 거기 가 있다는 거라고.`,
        image: "./assets/images/8ue_cover.png",
        qr: "./assets/qrcode/8ue_qr.svg",
        logo: "./assets/logo/LovH_title.png",
        hooking: `나의 길을 고민해봅시다.`
    },
    {
        title: "13",
        author: "이연우",
        synopsis: `살면서 두고두고 후회되는 순간들이 있습니다.
그때 내가 더 잘했더라면, 그런일은 일어나지 않았을텐데… 하는 순간들.
만약 그때로 돌아간다면 
나는 어떤 선택을 할까요?
당신은 돌아가고 싶은 순간이 있나요?
`, image: "./assets/images/yeonWoo_cover.png",
        qr: "./assets/qrcode/yeonwoo_qr.svg",
        logo: "./assets/logo/2023_title.png",
        hooking: `과거로 돌아가봅시다.`
    },
    {
        title: "14",
        author: "이은진",
        synopsis: `덜컹덜컹, 다리 길이가 달라 흔들거리는 책상을 본 적이 있나요?
제 역할을 다하고 쉬어가는 물건들의 휴양지,
달그락 다락방으로 당신을 초대합니다.
`, image: "./assets/images/dust_cover.png",
        qr: "./assets/qrcode/dust_qr.svg",
        logo: "./assets/logo/eunjin_title.png",
        hooking: `달그락 다락방으로 가보자!`
    },
    {
        title: "15",
        author: "이지우",
        synopsis: `의문스러운 살인사건. 수사관은 증거를 좇지만, 모든 조각이 어쩐지 낯설게 들어맞는다.`,
        image: "./assets/images/caseF_cover.png",
        qr: "./assets/qrcode/tomo_qr.svg",
        logo: "./assets/logo/case4_title.png",
        hooking: `살인사건의 진실을 밝혀보세요!`
    },
    {
        title: "16",
        author: "임수호",
        synopsis: `5명의 주인공 그리고
미스터리한 공간에서
발생한 의문의 살인사건!
이 책의 끝에는 그 모든 것의
진실이 담겨있다!

과연 당신은 그 끝에
도달할 수 있을지...!
`, image: "./assets/images/1004_cover.png",
        qr: "./assets/qrcode/1004_qr.svg",
        logo: "./assets/logo/1004_title.png",
        hooking: `사건의 진상에 도달해보세요!`
    },
    {
        title: "17",
        author: "진온유",
        synopsis: `당신은 질문을 받는다.
        모든 불편함이 제거된 세계, 
        결함 없는 새로움이 약속된 세계.
그 완벽함 속에서, 
당신은 여전히 ‘당신’일 수 있을까?
`, image: "./assets/images/nonew_cover.png", qr: "./assets/qrcode/nonew_qr.svg", logo: "./assets/logo/nonew_title.png",
        hooking: `새로운 세계로.`
    },
    {
        title: "18",
        author: "차정현",
        synopsis: `외롭게 코딩하던 어느 밤, 느닷없이 도착한 한 통의 ‘행운의 편지’. 장난이라 생각하며 무시하려던 순간, 서랍이 달그락거리기 시작한다. 조심스레 서랍을 여는 순간— "어어,,?!". 편지가 불러온 ‘행운'은 무엇일까, 정말 '행운'일까,,? 💌`,
        image: "./assets/images/letter_cover.jpg",
        qr: "./assets/qrcode/chacha_qr.svg",
        logo: "./assets/logo/1026_title.png",
        hooking: `행운의 편지의 비밀을 밝혀보세요!`
    },
    {
        title: "19",
        author: "최예원",
        synopsis: `어느 연구소의 실험실에서 살인사건이 일어났다.
사건파일을 살펴보며 용의자 중 누가 범인인지 밝혀내보자.
`, image: "./assets/images/yewon_cover.png",
        qr: "./assets/qrcode/yewon_qr.svg",
        logo: "./assets/logo/yewon_title.png",
        hooking: `살인사건의 범인을 밝혀보세요!`
    },
    {
        title: "20",
        author: "최지수",
        synopsis: `소설 앱에서 우연히 본 이야기의 1화를 읽고
다음 화 결제를 한순간,
시스템의 숨겨진 페이지 속으로 들어와 버렸다.
그런데... 이건 단순한 시스템이 아닌 것 같다…?
어서 이곳을 벗어나야 해!
`, image: "./assets/images/jiso_cover.png", qr: "./assets/qrcode/jiso_qr.svg", logo: "./assets/logo/jisoo_title.png",
        hooking: `숨겨진 페이지의 비밀을 밝혀보자!`
    },
];
/* ===== 데이터 =====
   books 배열은 기존 걸 그대로 사용.
   각 항목에 hooking 추가 가능: { hooking: "후킹 문구" }
*/
const BOOKS = (typeof window !== "undefined" && window.books)
    ? window.books
    : (typeof books !== "undefined" ? books : []);

// 투명 1px
const PIX1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

/* ===== 셔플(원조 로직) ===== */
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
const items = shuffle(BOOKS);

/* ===== DOM ===== */
const infoBox = document.getElementById("infoBox");
const qrImg = document.getElementById("qrImage");
const hookEl = document.getElementById("hookBubble");
const logoImg = document.getElementById("titleLogo");

const imgPrev = document.querySelector(".poster.prev");
const imgCurr = document.querySelector(".poster.current");
const imgNext = document.querySelector(".poster.next");
const btnPrev = document.querySelector(".nav.prev");
const btnNext = document.querySelector(".nav.next");

/* ===== 프레임 스케일: 어떤 화면이든 1920×1080을 안깨지고 꽉 차게 ===== */
function fitFrame() {
    const W = window.innerWidth, H = window.innerHeight;
    const s = Math.min(W / 1920, H / 1080);
    document.documentElement.style.setProperty("--scale", s);
}
window.addEventListener("resize", fitFrame);
fitFrame();

/* ===== 안전 로더 ===== */
function loadTo(el, src) {
    return new Promise(res => {
        if (!src) { el.src = PIX1; return res(); }
        const im = new Image();
        im.onload = () => { el.src = src; res(); };
        im.onerror = () => { el.src = PIX1; res(); };
        im.src = src;
    });
}

/* ===== 좌측 패널 갱신(원조 스타일) ===== */
let fadeTimer = null;
function updateLeft(meta) {
    if (!infoBox) return;
    infoBox.classList.add("fade");
    if (fadeTimer) clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => {
        const desc = (meta.synopsis || "").replace(/\n/g, "<br>");
        infoBox.innerHTML = `
      <p class="sub">${meta.author || ""}</p>
      <!-- 제목 제거: <h2 class="book-title">…</h2> 없앰 -->
      <p class="desc">${desc}</p>
    `;
        infoBox.classList.remove("fade");
    }, 120);

    if (qrImg) qrImg.src = (meta.qr || "").trim() || "./assets/qrcode/default.png";
    if (hookEl) {
        const msg = (meta.hooking || "").trim();
        if (msg) { hookEl.textContent = msg; hookEl.hidden = false; }
        else { hookEl.hidden = true; }
    }

    if (logoImg) {
        const src = (meta.logo || "").trim();
        logoImg.classList.add("fade-out");
        (src ? loadTo(logoImg, src) : Promise.resolve(logoImg.src = PIX1))
            .finally(() => requestAnimationFrame(() => logoImg.classList.remove("fade-out")));
        /* ALT도 title에 의존하지 않게 */
        logoImg.alt = "작품 로고";
    }
}


/* ===== 캐러셀(정말 직관적인 절대 배치) ===== */
let idx = 0;
function at(n) { const L = items.length; return items[(n % L + L) % L] || {}; }

async function render() {
    const cur = at(idx), prv = at(idx - 1), nxt = at(idx + 1);
    await Promise.all([
        loadTo(imgPrev, (prv.image || "").trim()),
        loadTo(imgCurr, (cur.image || "").trim()),
        loadTo(imgNext, (nxt.image || "").trim()),
    ]);
    updateLeft(cur);
}

function goNext() { idx = (idx + 1) % items.length; render(); resetAuto(); }
function goPrev() { idx = (idx - 1 + items.length) % items.length; render(); resetAuto(); }

btnNext.addEventListener("click", goNext);
btnPrev.addEventListener("click", goPrev);
window.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") goNext();
    else if (e.key === "ArrowLeft") goPrev();
});

/* ===== 자동 넘김&자동 새로고침 ===== */
let autoId = null;
const AUTO_MS = 5500;        // 5.5초
const AUTORELOAD_MS = 900000; // 15분
function resetAuto() { if (autoId) clearInterval(autoId); autoId = setInterval(goNext, AUTO_MS); }
setTimeout(() => location.reload(), AUTORELOAD_MS);

/* ===== 초기화 ===== */
if (items.length === 0) {
    updateLeft({ title: "No Data" });
    loadTo(imgCurr, PIX1);
} else {
    render();
    resetAuto();
}
