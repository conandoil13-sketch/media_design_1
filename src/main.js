// ================= 데이터 =================
//const books = Array.from({ length: 20 }, (_, i) => ({
//  title: `책 제목 ${i + 1}`,
//  author: `작가 ${i + 1}`,
//  synopsis: `이것은 ${i + 1}번 작품의 시놉시스입니다.`,
//  image: `./assets/images/book${String(i + 1).padStart(2, "0")}.png`,
//  qr: `./assets/qrcode/qr${String(i + 1).padStart(2, "0")}.png`,
//}));

const books = [
    {
        title: "1", author: "강다은", synopsis: `맞잡은 손끝에서 푸름이 피어났다. 
        잿빛 세상에 번지는 작은 따스함의 기적.`, image: "", qr: "", logo: ""
    },
    { title: "2", author: "김도경", synopsis: ``, image: "", qr: "", logo: "" },
    { title: "3", author: "김도윤", synopsis: ``, image: "", qr: "", logo: "" },
    {
        title: "4", author: "김서진", synopsis: `죽음은 인간을 어디서부터 어디로 가게 만듭니까?
죽음과 상실은 동의어입니까?

영원히 답을 내지 못할 질문에 대해 말해보자. 
`, image: "./assets/images/sin_cover.png", qr: "", logo: ""
    },
    { title: "5", author: "김시우", synopsis: ``, image: "./assets/images/siu_cover.png", qr: "", logo: "" },
    {
        title: "6", author: "김아영", synopsis: `놀이공원에서 아들이 사라졌다.
찾아보지만 어디에도 보이지 않는다.
그와중 옆에 다가오는 한 광대가 있다.
그는 소년의 행방을 알까?
`, image: "./assets/images/zero_cover.png", qr: "", logo: ""
    },
    {
        title: "7", author: "김한별", synopsis: `추리부의 역사를 담은 전설의 노트가 사라졌다. 
용의자는 셋 범인은 하나!
단서들아 모아 진실을 밝혀라-범인은 과연 누구일까? 
`, image: "./assets/images/HAN_cover.png", qr: "", logo: ""
    },
    { title: "8", author: "노은빈", synopsis: `우리 집 강아지, 레오. 내게 있던 레오의 흔적들이 자꾸만 사라진다. 같이 찍은 사진도, 레오의 네임태그도. 부식된 것도 햇빛에 바랜 것도 아닌데. 엄마, 나만 이러는 게 아니지?  `, image: "", qr: "", logo: "" },
    {
        title: "9", author: "박희아", synopsis: `당신의 마지막 도전은 언제인가?

우린 언제나 도전 앞에서 
무엇이든 해낼 것처럼  자신 넘치다가도
아무것도 할 수 없을 것처럼 작아진다.
이 순간만큼은 당신에게 도전이 마냥 유쾌한 것이었으면 한다.

도전.
최고의 아이돌을 향하여
`, image: "", qr: "", logo: ""
    },
    {
        title: "10", author: "배윤아", synopsis: `
1년간 적은 스무 개의 편지.
전하지 못해 일기가 되어버린,
남겨진 편지들을 모아
연에게 보냅니다.

답장을 보내겠습니까?
`, image: "", qr: "", logo: ""
    },
    {
        title: "11", author: "알따나", synopsis: `세상을 뒤흔드는 좀비 바이러스의 시작.
모든 것이 무너져 가는 가운데,
그는 오직 하나의 목표만을 품었다 —
안전지대에 도착하는 것.
`, image: "", qr: "", logo: ""
    },
    {
        title: "12", author: "이수경", synopsis: ` 어떤 사람은 매일 같은 질문을 반복한다.
 이 길이 정말 나의 길일까.
 옆에서 누군가는 아주 단순한 말을 건넨다.
 그렇게까지 고민한다는 건 벌써 마음이 거기 가 있다는 거라고.`, image: "", qr: "", logo: ""
    },
    {
        title: "13", author: "이연우", synopsis: `살면서 두고두고 후회되는 순간들이 있습니다. 
그때 내가 더 잘했더라면, 그런일은 일어나지 않았을텐데… 하는 순간들.
만약 그때로 돌아간다면 나는 어떤 선택을 할까요?
당신은 돌아가고 싶은 순간이 있나요?
`, image: "", qr: "", logo: ""
    },
    {
        title: "14", author: "이은진", synopsis: `덜컹덜컹, 다리 길이가 달라 흔들거리는 책상을 본 적이 있나요?
제 역할을 다하고 쉬어가는 물건들의 휴양지,
달그락 다락방으로 당신을 초대합니다.
`, image: "", qr: "", logo: ""
    },
    { title: "15", author: "이지우", synopsis: `의문스러운 살인사건. 수사관은 증거를 좇지만, 모든 조각이 어쩐지 낯설게 들어맞는다.`, image: "./assets/images/caseF_cover.png", qr: "", logo: "" },
    {
        title: "16", author: "임수호", synopsis: `5명의 주인공 그리고
미스터리한 공간에서
발생한 의문의 살인사건!
이 책의 끝에는 그 모든 것의
진실이 담겨있다!

과연 당신은 그 끝에
도달할 수 있을지...!
`, image: "./assets/images/1004_cover.png", qr: "", logo: ""
    },
    {
        title: "17", author: "진온유", synopsis: `당신은 질문을 받는다.
모든 불편함이 제거된 세계, 결함 없는 새로움이 약속된 세계.
그 완벽함 속에서, 당신은 여전히 ‘당신’일 수 있을까?
`, image: "./assets/images/nonew_cover.png", qr: "", logo: ""
    },
    { title: "18", author: "차정현", synopsis: `외롭게 코딩하던 어느 밤, 느닷없이 도착한 한 통의 ‘행운의 편지’. 장난이라 생각하며 무시하려던 순간, 서랍이 달그락거리기 시작한다. 조심스레 서랍을 여는 순간— "어어,,?!". 편지가 불러온 ‘행운'은 무엇일까, 정말 '행운'일까,,? 💌`, image: "./assets/images/letter_cover.jpg", qr: "", logo: "" },
    {
        title: "19", author: "최예원", synopsis: `어느 연구소의 실험실에서 살인사건이 일어났다.
사건파일을 살펴보며 용의자 중 누가 범인인지 밝혀내보자.
`, image: "", qr: "", logo: ""
    },
    {
        title: "20", author: "최지수", synopsis: `소설 앱에서 우연히 본 이야기의 1화를 읽고
다음 화 결제를 한순간,
시스템의 숨겨진 페이지 속으로 들어와 버렸다.
그런데... 이건 단순한 시스템이 아닌 것 같다….?
어서 이곳을 벗어나야 해 !
`, image: "", qr: "", logo: ""
    },
];

// ================= 셔플(Fisher–Yates) =================
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const shuffled = shuffle(books);

// ================= DOM =================
const grid = document.getElementById("bookGrid");
const infoBox = document.getElementById("infoBox");
const qrBox = document.querySelector(".qr-box");
const qrImage = document.getElementById("qrImage");
const infoPanel = document.querySelector(".info-panel");
const titleImg = document.querySelector(".project-title"); // 작품 로고 표시 대상

if (!grid) throw new Error("#bookGrid 요소가 없습니다.");

// ================= 렌더링 =================
const columnCount = 5;
let cursor = 0;

for (let i = 0; i < columnCount; i++) {
    const col = document.createElement("div");
    col.className = "book-column";

    // 벽돌형: 각 열의 랜덤 Y 오프셋
    const offsetRange = 90; // px
    const randomOffset = Math.floor(Math.random() * offsetRange) - offsetRange / 2;
    col.style.transform =
        `rotateY(-25deg) rotateX(8deg) scale(1.02) translateZ(0) translateY(${randomOffset}px)`;

    // 홀짝 방향 반전 + 열별 지연
    const directionUp = i % 2 === 0;
    col.style.animationDirection = directionUp ? "normal" : "reverse";
    col.style.animationDelay = `${0.3 + i * 2.0}s`;

    // 각 열의 책 개수: 3 또는 4
    const bookCount = Math.random() > 0.5 ? 4 : 4;

    for (let j = 0; j < bookCount; j++) {
        if (cursor >= shuffled.length) break;
        const data = shuffled[cursor++];

        const book = document.createElement("div");
        book.className = "book";
        book.dataset.index = String(cursor - 1); // 데이터 바인딩

        const img = document.createElement("img");
        img.src = (data.image || "").trim() || ""; // 비워둔 경우도 허용
        img.alt = data.title;
        img.loading = "eager";

        book.appendChild(img);
        col.appendChild(book);
    }

    grid.appendChild(col);
}

// ================= 로고 프리로드/디코드 & 스왑 =================
const TRANSPARENT_1PX =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const logoDecodeCache = new Map(); // src -> Promise<void>
let lastLogoRequestId = 0;

function preloadAndDecode(src) {
    if (!src) return Promise.resolve();
    if (logoDecodeCache.has(src)) return logoDecodeCache.get(src);
    const p = new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.loading = "eager";
        img.src = src;
        (img.decode ? img.decode() : Promise.resolve())
            .catch(() => { })
            .finally(resolve);
    });
    logoDecodeCache.set(src, p);
    return p;
}

// 데이터에 있는 로고 전부 프리로드
books.forEach((b) => b.logo && preloadAndDecode((b.logo || "").trim()));

async function swapLogoForData(data) {
    if (!titleImg) return;
    const logo = (data.logo || "").trim();
    const reqId = ++lastLogoRequestId;

    if (!logo) {
        titleImg.classList.add("no-logo");
        titleImg.src = TRANSPARENT_1PX;
        titleImg.alt = `${data.title} 로고 없음`;
        return;
    }

    await preloadAndDecode(logo);
    if (reqId !== lastLogoRequestId) return; // 경쟁 방지

    titleImg.classList.remove("no-logo");
    titleImg.classList.add("fade-out"); // 부드러운 전환 (CSS 필요)
    requestAnimationFrame(() => {
        titleImg.src = logo;
        titleImg.alt = `${data.title} 로고`;
        requestAnimationFrame(() => titleImg.classList.remove("fade-out"));
    });
}

// ================= 스크린 좌표 기반 호버 스캐너 =================
// 화면 기준 “가상 패드” 크기(px) — 필요에 따라 조절
const PAD_X = 24;        // 좌우 확장
const PAD_TOP = 0;       // 위쪽 확장
const PAD_BOTTOM = 96;   // 아래쪽 크게 확장 (원하면 120~160)

const allBooks = () => Array.from(grid.querySelectorAll(".book"));

let activeBook = null;
let activeCol = null;
let fadeTimer = null;

// 정보 패널 갱신
function updateInfo(data) {
    if (!infoBox) return;
    infoBox.classList.add("fade");
    if (fadeTimer) clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => {
        infoBox.innerHTML = `
      <p class="sub">${data.author}</p>
      <h2 class="book-title">${data.title}</h2>
      <p class="desc">${data.synopsis}</p>
    `;
        infoBox.classList.remove("fade");
    }, 160);
}

function resetInfo() {
    if (!infoBox) return;
    infoBox.classList.add("fade");
    if (fadeTimer) clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => {
        infoBox.innerHTML = `
      <p class="sub">Media Design 1 - 05</p>
      <h2 class="book-title">Hypertext Anthology</h2>
      <p class="desc">
        디지털 환경에서 ‘읽기’는 선형적이지 않습니다.<br />
        링크를 따라가며 페이지를 건너뛰고, 자신의 선택으로 서사의 순서를 구성합니다.<br /><br />
        <strong>Hypertext Anthology</strong>는 비선형적 읽기의 구조를 직접 설계해보는 실험입니다.
      </p>
    `;
        infoBox.classList.remove("fade");
    }, 160);

    // 기본 타이틀로 복귀 (진행 중 요청 무효화)
    if (titleImg) {
        lastLogoRequestId++;
        titleImg.classList.remove("no-logo", "fade-out");
        titleImg.src = "./assets/images/title.png";
        titleImg.alt = "Project Title";
    }
}

// 포인터 좌표가 확장 패드에 들어오는지 테스트
function hitTestScreenPad(x, y) {
    let winner = null;
    let winnerArea = -1;

    for (const el of allBooks()) {
        const r = el.getBoundingClientRect();
        const left = r.left - PAD_X;
        const right = r.right + PAD_X;
        const top = r.top - PAD_TOP;
        const bottom = r.bottom + PAD_BOTTOM;

        if (x < left || x > right || y < top || y > bottom) continue;

        // 겹칠 때 더 큰 카드(가까운 시각적 대상)를 우선
        const area = r.width * r.height;
        if (area > winnerArea) {
            winner = el;
            winnerArea = area;
        }
    }
    return winner;
}

function applyHover(book) {
    if (book === activeBook) return;

    // 이전 상태 정리
    if (activeBook) activeBook.classList.remove("is-hovered");
    if (activeCol) activeCol.classList.remove("active");

    activeBook = book;
    activeCol = book ? book.closest(".book-column") : null;

    if (!book) {
        document.body.classList.remove("paused");
        grid.classList.remove("dim", "grid-top");
        infoPanel && infoPanel.classList.remove("overlay-pass");
        qrBox && qrBox.classList.remove("visible");
        resetInfo();
        if (qrImage) qrImage.src = "./assets/qrcode/default.png";
        return;
    }

    // 새 대상 적용
    book.classList.add("is-hovered");
    if (activeCol) activeCol.classList.add("active");
    document.body.classList.add("paused");
    grid.classList.add("dim", "grid-top");
    infoPanel && infoPanel.classList.add("overlay-pass");
    qrBox && qrBox.classList.add("visible");

    // 데이터 갱신
    const idx = parseInt(book.dataset.index, 10);
    const data = shuffled[idx];
    if (data) {
        if (qrImage) qrImage.src = (data.qr || "").trim() || "./assets/qrcode/default.png";
        updateInfo(data);
        swapLogoForData(data); // ← 로고 전환
    }
}

// rAF 스로틀 포인터 스캔
let rafId = 0;
let pendingEvt = null;

function scan() {
    rafId = 0;
    if (!pendingEvt) return;
    const e = pendingEvt;
    pendingEvt = null;

    const x = e.clientX;
    const y = e.clientY;

    const target = hitTestScreenPad(x, y);
    applyHover(target || null);
}

grid.addEventListener("pointermove", (e) => {
    pendingEvt = e;
    if (!rafId) rafId = requestAnimationFrame(scan);
});

// 그리드 밖으로 나가면 리셋
grid.addEventListener("pointerleave", () => applyHover(null));

// ================= 초기 렌더 플래시 제거 시퀀스 =================
document.body.classList.add("preinit");
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.body.classList.add("ready");
        requestAnimationFrame(() => {
            document.body.classList.add("anim-on");
            document.body.classList.remove("preinit");
        });
    });
});

// ================= 자동 새로고침 (30분 = 1800000ms) =================
// 전시 안정성 위해 15분 리프레시 (원하면 1800000으로)
setTimeout(() => {
    location.reload();
}, 900000);