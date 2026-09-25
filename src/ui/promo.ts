// 홍보 배너: 첫 화면 왼쪽 위 버튼을 누르면 배너 이미지(PNG)를 클립보드에 복사한다.
// 이미지 복사가 안 되는 브라우저는 홍보 문구+링크를, 그것도 안 되면 이미지 파일을 내려받게 한다.
import { WINES } from "../data/wines";
import { lang, t } from "../i18n";

export const SITE_URL = "https://wine.sanghak.kr";

const W = 1200;
const H = 630;
const GOLD = "#d9b56a";
const plain = (s: string) => s.replace(/<[^>]+>/g, "");

/** 글자 사이를 벌려 쓴다 (canvas letterSpacing 은 오래된 사파리에 없다). 반환값: 쓴 폭 */
function spaced(c: CanvasRenderingContext2D, text: string, x: number, y: number, gap: number, draw = true): number {
  const chars = Array.from(text);
  const width = chars.reduce((s, ch) => s + c.measureText(ch).width, 0) + gap * (chars.length - 1);
  if (draw) {
    let cx = x;
    for (const ch of chars) {
      c.fillText(ch, cx, y);
      cx += c.measureText(ch).width + gap;
    }
  }
  return width;
}

/** 폭에 맞을 때까지 글자 크기를 줄인다 */
function fitFont(c: CanvasRenderingContext2D, font: (px: number) => string, text: string, max: number, px: number, gapEm = 0, min = 12) {
  for (; px > min; px -= 1) {
    c.font = font(px);
    if (spaced(c, text, 0, 0, px * gapEm, false) <= max) break;
  }
  return px;
}

/** 1200×630 배너 (링크 미리보기 비율). bottle: 3D 무대에서 잘라 온 병 그림 */
export function drawBanner(bottle: HTMLCanvasElement | null): HTMLCanvasElement {
  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const c = cv.getContext("2d")!;
  const sans = getComputedStyle(document.documentElement).fontFamily || "sans-serif";

  // 배경: 무대처럼 오른쪽에 따뜻한 조명, 가장자리는 어둡게
  c.fillStyle = "#120d0c";
  c.fillRect(0, 0, W, H);
  let g = c.createRadialGradient(W * 0.76, H * 0.46, 20, W * 0.76, H * 0.46, W * 0.62);
  g.addColorStop(0, "#6e5446");
  g.addColorStop(0.35, "#3a2620");
  g.addColorStop(1, "#120d0c");
  c.fillStyle = g;
  c.fillRect(0, 0, W, H);
  g = c.createLinearGradient(0, 0, W * 0.6, 0);
  g.addColorStop(0, "rgba(90,14,30,0.55)");
  g.addColorStop(1, "rgba(90,14,30,0)");
  c.fillStyle = g;
  c.fillRect(0, 0, W, H);

  // 병: 가장자리를 부드럽게 지워 배경에 녹인다
  if (bottle && bottle.width > 0 && bottle.height > 0) {
    const bh = H * 1.02;
    const bw = Math.min(W * 0.46, (bottle.width / bottle.height) * bh);
    const bx = W * 0.76 - bw / 2;
    const by = (H - bh) / 2;
    const tmp = document.createElement("canvas");
    tmp.width = Math.round(bw);
    tmp.height = Math.round(bh);
    const tc = tmp.getContext("2d")!;
    // 병 그림 가운데를 기준으로 잘라 폭을 맞춘다
    const sw = Math.min(bottle.width, (bw / bh) * bottle.height);
    tc.drawImage(bottle, (bottle.width - sw) / 2, 0, sw, bottle.height, 0, 0, tmp.width, tmp.height);
    // 타원 마스크: 가운데는 그대로, 네 변에 닿기 전에 투명해진다
    tc.globalCompositeOperation = "destination-in";
    tc.translate(tmp.width / 2, tmp.height / 2);
    tc.scale(tmp.width / tmp.height, 1);
    const m = tc.createRadialGradient(0, 0, tmp.height * 0.28, 0, 0, tmp.height * 0.5);
    m.addColorStop(0, "rgba(0,0,0,1)");
    m.addColorStop(1, "rgba(0,0,0,0)");
    tc.fillStyle = m;
    tc.fillRect(-tmp.height / 2, -tmp.height / 2, tmp.height, tmp.height);
    c.drawImage(tmp, bx, by);
  }

  // 글자 (왼쪽 기둥)
  const x = 72;
  const maxW = 600;
  c.textBaseline = "alphabetic";
  c.shadowColor = "rgba(0,0,0,0.55)";
  c.shadowBlur = 18;

  // 머리글: ─ WINE QUIZ · 1,285 ─
  c.fillStyle = GOLD;
  c.font = `600 22px "Cinzel", serif`;
  const eyebrow = `WINE QUIZ · ${WINES.length.toLocaleString(lang())}`;
  c.fillRect(x, 150 - 8, 48, 2);
  const ew = spaced(c, eyebrow, x + 66, 150, 22 * 0.36);
  c.fillRect(x + 66 + ew + 18, 150 - 8, 48, 2);

  // 워드마크
  const mark = "BLIND BOTTLE";
  const px = fitFont(c, (p) => `700 ${p}px "Cinzel", serif`, mark, maxW, 84, 0.08);
  g = c.createLinearGradient(0, 250 - px, 0, 250);
  g.addColorStop(0, "#f8e7ad");
  g.addColorStop(0.55, GOLD);
  g.addColorStop(1, "#9c7428");
  c.fillStyle = g;
  spaced(c, mark, x - 3, 250, px * 0.08);

  // 이 언어의 이름 (영어면 워드마크와 같으니 뺀다)
  let y = 250;
  const name = t("appName");
  if (name.toUpperCase() !== mark) {
    y += 58;
    c.fillStyle = "#f3e7d2";
    const np = fitFont(c, (p) => `600 ${p}px "Playfair Display", ${sans}`, name, maxW, 38, 0.12);
    spaced(c, name, x, y, np * 0.12);
  }

  // 소개 문구 (길면 두 줄)
  c.shadowBlur = 10;
  c.fillStyle = "#e1d2b8";
  const tag = plain(t("tagline", { n: WINES.length }));
  const tagFont = (p: number) => `500 ${p}px ${sans}`;
  c.font = tagFont(27);
  const lines = wrap(c, tag, maxW);
  y += 62;
  for (const line of lines.slice(0, 2)) {
    c.fillText(line, x, y);
    y += 38;
  }

  // 주소 알약
  c.shadowBlur = 0;
  const host = SITE_URL.replace(/^https?:\/\//, "");
  c.font = `700 28px ${sans}`;
  const pw = c.measureText(host).width + 64;
  const py = Math.max(y + 22, 468);
  roundRect(c, x, py, pw, 60, 30);
  c.fillStyle = "rgba(142,26,42,0.92)";
  c.fill();
  c.lineWidth = 2;
  c.strokeStyle = "rgba(217,181,106,0.75)";
  c.stroke();
  c.fillStyle = "#fff4dc";
  c.textBaseline = "middle";
  c.fillText(host, x + 32, py + 31);
  return cv;
}

function wrap(c: CanvasRenderingContext2D, text: string, max: number): string[] {
  // 낱말 단위로 자르되, 한 낱말이 한 줄보다 길면(띄어쓰기가 없는 일본어·중국어) 글자 단위로 자른다.
  // " · " 는 앞 낱말에 붙여 줄 머리에 오지 않게 한다
  const words = text
    .replace(/ · /g, "\u00a0· ")
    .split(/( +)/)
    .flatMap((w) => (c.measureText(w).width > max ? Array.from(w) : [w]));
  const out: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line + w;
    if (line && c.measureText(next.trimEnd()).width > max) {
      out.push(line.trimEnd());
      line = w.trimStart();
    } else line = next;
  }
  if (line.trim()) out.push(line.trimEnd());
  return out;
}

function roundRect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

export const promoText = () => `🍷 ${t("appName")} — ${plain(t("tagline", { n: WINES.length }))}\n${SITE_URL}`;

/**
 * 배너 복사. 클릭 처리 안에서 바로 불러야 한다 (사파리는 클립보드 쓰기를 누른 그 순간에만 허락한다).
 * 반환값: 무엇을 했는지
 */
export async function copyBanner(bottle: HTMLCanvasElement | null): Promise<"image" | "text" | "file" | "fail"> {
  const banner = drawBanner(bottle);
  const png = new Promise<Blob>((ok, no) => banner.toBlob((b) => (b ? ok(b) : no(new Error("toBlob"))), "image/png"));
  try {
    if (typeof ClipboardItem === "undefined" || !navigator.clipboard?.write) throw new Error("no image clipboard");
    // Blob 대신 Promise 를 넘겨야 사파리가 사용자 동작으로 인정한다
    await navigator.clipboard.write([new ClipboardItem({ "image/png": png })]);
    return "image";
  } catch {
    // 이미지 복사가 막히면 문구+링크
  }
  try {
    await navigator.clipboard.writeText(promoText());
    return "text";
  } catch {
    // 클립보드를 전혀 못 쓰면 파일로 내려받는다
  }
  try {
    const url = URL.createObjectURL(await png);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blind-bottle-banner.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    return "file";
  } catch {
    return "fail";
  }
}
