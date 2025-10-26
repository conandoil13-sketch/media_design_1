// ================= 데이터 =================
const books = Array.from({ length: 20 }, (_, i) => ({
    title: `책 제목 ${i + 1}`,
    author: `작가 ${i + 1}`,
    synopsis: `이것은 ${i + 1}번 작품의 시놉시스입니다.`,
    image: `./assets/images/book${String(i + 1).padStart(2, "0")}.png`,
    qr: `./assets/qrcode/qr${String(i + 1).padStart(2, "0")}.png`,
}));

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
    const bookCount = Math.random() > 0.5 ? 3 : 4;

    for (let j = 0; j < bookCount; j++) {
        if (cursor >= shuffled.length) break;
        const data = shuffled[cursor++];

        const book = document.createElement("div");
        book.className = "book";
        book.dataset.index = String(cursor - 1); // 데이터 바인딩

        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.title;
        img.loading = "eager";

        book.appendChild(img);
        col.appendChild(book);
    }

    grid.appendChild(col);
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
        if (qrImage) qrImage.src = data.qr;
        updateInfo(data);
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
setTimeout(() => {
    location.reload();
}, 900000); // 15분 후 새로고침
