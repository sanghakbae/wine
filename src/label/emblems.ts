// 라벨에 넣는 문양. 모두 (cx, cy) 중심, 크기 s 기준으로 그린다.
import type { Foil, Painter } from "./painter";

type Ink = { color: string; foil?: Foil | null };

/** 판화 느낌의 해칭(가는 평행선) */
function hatch(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, gap: number, lw: number) {
  c.save();
  c.beginPath();
  c.rect(x, y, w, h);
  c.clip();
  c.lineWidth = lw;
  c.beginPath();
  for (let yy = y + gap / 2; yy < y + h; yy += gap) {
    c.moveTo(x, yy);
    c.lineTo(x + w, yy);
  }
  c.stroke();
  c.restore();
}

/** 보르도 샤토 건물 판화. seed 로 탑·지붕·창 모양이 바뀐다 */
export function chateau(p: Painter, cx: number, cy: number, w: number, ink: Ink, variant = 0) {
  const r = mulberry(variant * 977 + 13);
  const h = w * 0.46;
  const baseY = cy + h / 2;
  const towers = variant % 4; // 0: 없음, 1: 오른쪽, 2: 양쪽, 3: 가운데
  const roofPointy = r() < 0.55;
  const portico = variant % 5 === 1;
  p.draw((c, i) => {
    const col = i(ink.color);
    c.strokeStyle = col;
    c.fillStyle = col;
    const lw = Math.max(1.2, w * 0.004);
    c.lineWidth = lw;
    // 땅과 나무
    c.beginPath();
    c.moveTo(cx - w * 0.5, baseY);
    c.lineTo(cx + w * 0.5, baseY);
    c.stroke();
    for (let k = 0; k < 3; k++) {
      const yy = baseY + (k + 1) * w * 0.012;
      c.globalAlpha = 0.7 - k * 0.2;
      c.beginPath();
      c.moveTo(cx - w * (0.46 - k * 0.07), yy);
      c.lineTo(cx + w * (0.46 - k * 0.07), yy);
      c.stroke();
    }
    c.globalAlpha = 1;
    const tree = (tx: number, th: number) => {
      c.beginPath();
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * Math.PI * 2;
        c.moveTo(tx + Math.cos(a) * th * 0.28, baseY - th * 0.62 + Math.sin(a) * th * 0.3);
        c.arc(tx + Math.cos(a) * th * 0.18, baseY - th * 0.62 + Math.sin(a) * th * 0.2, th * 0.2, 0, Math.PI * 2);
      }
      c.stroke();
      c.beginPath();
      c.moveTo(tx, baseY);
      c.lineTo(tx, baseY - th * 0.4);
      c.stroke();
    };
    tree(cx - w * 0.44, h * 0.8);
    tree(cx + w * 0.44, h * 0.72);

    // 본관
    const bw = w * 0.5;
    const bh = h * 0.5;
    const bx = cx - bw / 2;
    const by = baseY - bh;
    c.strokeRect(bx, by, bw, bh);
    hatch(c, bx, by, bw, bh, w * 0.018, lw * 0.5);
    // 창문
    const cols = 5 + (variant % 3) * 2;
    const ww = (bw / cols) * 0.42;
    c.save();
    c.fillStyle = "rgba(255,255,255,0.0)";
    for (let k = 0; k < cols; k++) {
      const wx = bx + (bw / cols) * (k + 0.5) - ww / 2;
      for (const row of [0.18, 0.58]) {
        c.clearRect(0, 0, 0, 0);
        c.fillStyle = col;
        c.fillRect(wx, by + bh * row, ww, bh * 0.26);
      }
    }
    c.restore();
    // 지붕
    c.beginPath();
    if (roofPointy) {
      c.moveTo(bx - w * 0.01, by);
      c.lineTo(bx + bw * 0.08, by - h * 0.16);
      c.lineTo(bx + bw * 0.92, by - h * 0.16);
      c.lineTo(bx + bw + w * 0.01, by);
    } else {
      c.moveTo(bx - w * 0.01, by);
      c.lineTo(bx + bw + w * 0.01, by);
      c.lineTo(bx + bw, by - h * 0.05);
      c.lineTo(bx, by - h * 0.05);
    }
    c.closePath();
    c.fill();
    if (portico) {
      // 기둥 현관과 박공
      const pw = bw * 0.42;
      const px = cx - pw / 2;
      c.fillStyle = col;
      c.beginPath();
      c.moveTo(px - w * 0.02, by + bh * 0.05);
      c.lineTo(cx, by - h * 0.2);
      c.lineTo(px + pw + w * 0.02, by + bh * 0.05);
      c.closePath();
      c.stroke();
      for (let k = 0; k < 4; k++) {
        const colX = px + (pw / 3) * k;
        c.fillRect(colX - w * 0.008, by + bh * 0.05, w * 0.016, bh * 0.95);
      }
    }
    // 탑
    const tower = (tx: number, tw: number, th: number) => {
      const ty = baseY - th;
      c.clearRect(0, 0, 0, 0);
      c.strokeRect(tx - tw / 2, ty, tw, th);
      hatch(c, tx - tw / 2, ty, tw, th, w * 0.012, lw * 0.5);
      c.fillRect(tx - tw * 0.15, ty + th * 0.15, tw * 0.3, th * 0.18);
      c.beginPath();
      c.moveTo(tx - tw * 0.62, ty);
      c.lineTo(tx, ty - th * 0.55);
      c.lineTo(tx + tw * 0.62, ty);
      c.closePath();
      c.fill();
      c.beginPath();
      c.moveTo(tx, ty - th * 0.55);
      c.lineTo(tx, ty - th * 0.7);
      c.stroke();
    };
    if (towers === 1) tower(bx + bw + w * 0.05, w * 0.1, h * 0.78);
    if (towers === 2) {
      tower(bx - w * 0.04, w * 0.09, h * 0.7);
      tower(bx + bw + w * 0.04, w * 0.09, h * 0.7);
    }
    if (towers === 3 && !portico) tower(cx, w * 0.12, h * 0.9);
  }, ink.foil);
}

/** 문장 방패 (가문 문장) */
export function crest(p: Painter, cx: number, cy: number, s: number, ink: Ink, variant = 0, fill?: string) {
  p.draw((c, i) => {
    const col = i(ink.color);
    c.strokeStyle = col;
    c.fillStyle = col;
    c.lineWidth = s * 0.03;
    const shield = () => {
      c.beginPath();
      c.moveTo(cx - s * 0.4, cy - s * 0.42);
      c.lineTo(cx + s * 0.4, cy - s * 0.42);
      c.lineTo(cx + s * 0.4, cy + s * 0.05);
      c.quadraticCurveTo(cx + s * 0.38, cy + s * 0.38, cx, cy + s * 0.52);
      c.quadraticCurveTo(cx - s * 0.38, cy + s * 0.38, cx - s * 0.4, cy + s * 0.05);
      c.closePath();
    };
    shield();
    if (fill) {
      c.save();
      c.fillStyle = fill;
      c.fill();
      c.restore();
    }
    c.stroke();
    c.save();
    shield();
    c.clip();
    const v = variant % 6;
    if (v === 0) {
      // 갈매기꼴(셰브런)
      c.beginPath();
      c.moveTo(cx - s * 0.45, cy + s * 0.25);
      c.lineTo(cx, cy - s * 0.12);
      c.lineTo(cx + s * 0.45, cy + s * 0.25);
      c.lineWidth = s * 0.1;
      c.stroke();
    } else if (v === 1) {
      // 4분할
      c.fillRect(cx - s * 0.4, cy - s * 0.42, s * 0.4, s * 0.47);
      c.fillRect(cx, cy + s * 0.05, s * 0.4, s * 0.5);
    } else if (v === 2) {
      // 가로띠
      c.fillRect(cx - s * 0.5, cy - s * 0.1, s, s * 0.16);
    } else if (v === 3) {
      // 세 개의 별
      for (const [dx, dy] of [
        [-0.18, -0.22],
        [0.18, -0.22],
        [0, 0.15],
      ])
        starPath(c, cx + dx * s, cy + dy * s, s * 0.1, 5), c.fill();
    } else if (v === 4) {
      // 사선
      c.beginPath();
      c.moveTo(cx - s * 0.5, cy - s * 0.5);
      c.lineTo(cx + s * 0.5, cy + s * 0.5);
      c.lineWidth = s * 0.14;
      c.stroke();
    } else {
      // 포도송이
      for (let row = 0; row < 4; row++)
        for (let k = 0; k <= 3 - row; k++) {
          c.beginPath();
          c.arc(cx + (k - (3 - row) / 2) * s * 0.13, cy - s * 0.2 + row * s * 0.12, s * 0.06, 0, Math.PI * 2);
          c.fill();
        }
    }
    c.restore();
  }, ink.foil);
}

export function starPath(c: CanvasRenderingContext2D, cx: number, cy: number, r: number, n = 5, inner = 0.45) {
  c.beginPath();
  for (let k = 0; k < n * 2; k++) {
    const a = -Math.PI / 2 + (k * Math.PI) / n;
    const rr = k % 2 ? r * inner : r;
    c.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
  }
  c.closePath();
}

export function star(p: Painter, cx: number, cy: number, r: number, ink: Ink, n = 5, inner = 0.45) {
  p.draw((c, i) => {
    c.fillStyle = i(ink.color);
    starPath(c, cx, cy, r, n, inner);
    c.fill();
  }, ink.foil);
}

export function crown(p: Painter, cx: number, cy: number, s: number, ink: Ink) {
  p.draw((c, i) => {
    c.fillStyle = i(ink.color);
    c.beginPath();
    c.moveTo(cx - s * 0.5, cy + s * 0.25);
    c.lineTo(cx - s * 0.55, cy - s * 0.2);
    c.lineTo(cx - s * 0.28, cy + s * 0.02);
    c.lineTo(cx, cy - s * 0.35);
    c.lineTo(cx + s * 0.28, cy + s * 0.02);
    c.lineTo(cx + s * 0.55, cy - s * 0.2);
    c.lineTo(cx + s * 0.5, cy + s * 0.25);
    c.closePath();
    c.fill();
    c.fillRect(cx - s * 0.5, cy + s * 0.3, s, s * 0.08);
    for (const dx of [-0.55, 0, 0.55]) {
      c.beginPath();
      c.arc(cx + dx * s, cy + (dx === 0 ? -0.4 : -0.25) * s, s * 0.06, 0, Math.PI * 2);
      c.fill();
    }
  }, ink.foil);
}

export function grapes(p: Painter, cx: number, cy: number, s: number, ink: Ink, leaf?: string) {
  p.draw((c, i) => {
    const col = i(ink.color);
    if (leaf) {
      c.fillStyle = i(leaf);
      leafPath(c, cx + s * 0.18, cy - s * 0.32, s * 0.36, -0.5);
      c.fill();
    }
    c.fillStyle = col;
    c.strokeStyle = col;
    c.lineWidth = s * 0.03;
    c.beginPath();
    c.moveTo(cx, cy - s * 0.3);
    c.quadraticCurveTo(cx - s * 0.05, cy - s * 0.45, cx - s * 0.12, cy - s * 0.5);
    c.stroke();
    const rows = [4, 4, 3, 3, 2, 1];
    rows.forEach((n, row) => {
      for (let k = 0; k < n; k++) {
        c.beginPath();
        c.arc(cx + (k - (n - 1) / 2) * s * 0.15, cy - s * 0.2 + row * s * 0.13, s * 0.075, 0, Math.PI * 2);
        c.fill();
      }
    });
  }, ink.foil);
}

export function leafPath(c: CanvasRenderingContext2D, cx: number, cy: number, s: number, rot = 0) {
  c.save();
  c.translate(cx, cy);
  c.rotate(rot);
  c.beginPath();
  // 다섯 갈래 포도잎
  const lobes = 5;
  for (let k = 0; k <= lobes * 2; k++) {
    const a = Math.PI * 0.95 + (k / (lobes * 2)) * Math.PI * 1.1 - Math.PI / 2;
    const rr = k % 2 ? s * 0.34 : s * 0.5;
    const x = Math.cos(a) * rr;
    const y = Math.sin(a) * rr;
    if (k === 0) c.moveTo(0, s * 0.1);
    c.lineTo(x, y);
  }
  c.closePath();
  c.restore();
}

export function leaf(p: Painter, cx: number, cy: number, s: number, colors: string[], foil?: Foil | null) {
  p.draw((c, i) => {
    const g = c.createLinearGradient(cx - s / 2, cy - s / 2, cx + s / 2, cy + s / 2);
    colors.forEach((col, k) => g.addColorStop(k / Math.max(1, colors.length - 1), col));
    c.fillStyle = foil ? i(colors[0]) : g;
    leafPath(c, cx, cy, s, 0);
    c.fill();
    c.strokeStyle = "rgba(0,0,0,0.25)";
    c.lineWidth = s * 0.012;
    c.beginPath();
    for (let k = 0; k < 5; k++) {
      const a = -Math.PI / 2 + (k - 2) * 0.55;
      c.moveTo(cx, cy + s * 0.08);
      c.lineTo(cx + Math.cos(a) * s * 0.4, cy + Math.sin(a) * s * 0.4);
    }
    c.stroke();
  }, foil);
}

export function sun(p: Painter, cx: number, cy: number, s: number, ink: Ink) {
  p.draw((c, i) => {
    c.fillStyle = i(ink.color);
    c.strokeStyle = i(ink.color);
    c.beginPath();
    c.arc(cx, cy, s * 0.22, 0, Math.PI * 2);
    c.fill();
    c.lineWidth = s * 0.03;
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      const r0 = s * 0.28;
      const r1 = s * (k % 2 ? 0.4 : 0.48);
      c.beginPath();
      c.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      c.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      c.stroke();
    }
  }, ink.foil);
}

export function mountains(p: Painter, cx: number, cy: number, w: number, ink: Ink, variant = 0, lines = false) {
  const r = mulberry(variant * 131 + 7);
  const peaks: [number, number][] = [];
  const n = 5 + (variant % 3);
  for (let k = 0; k <= n; k++) peaks.push([cx - w / 2 + (w * k) / n, cy - (k % 2 ? 0.1 + r() * 0.35 : 0.02 + r() * 0.1) * w * 0.5]);
  p.draw((c, i) => {
    c.fillStyle = i(ink.color);
    c.strokeStyle = i(ink.color);
    c.lineWidth = w * 0.004;
    c.beginPath();
    c.moveTo(cx - w / 2, cy);
    for (const [x, y] of peaks) c.lineTo(x, y);
    c.lineTo(cx + w / 2, cy);
    c.closePath();
    if (lines) {
      c.stroke();
      c.save();
      c.clip();
      for (let yy = cy - w * 0.3; yy < cy; yy += w * 0.018) {
        c.beginPath();
        c.moveTo(cx - w / 2, yy);
        c.lineTo(cx + w / 2, yy + w * 0.02);
        c.stroke();
      }
      c.restore();
    } else c.fill();
  }, ink.foil);
}

/** 이름 머리글자 메달 — 이름을 가릴 때는 글자도 가린다 */
export function medallion(p: Painter, cx: number, cy: number, s: number, letters: string, ink: Ink, font: "roman" | "script" | "didone" = "roman") {
  p.draw((c, i) => {
    c.strokeStyle = i(ink.color);
    c.lineWidth = s * 0.025;
    c.beginPath();
    c.arc(cx, cy, s * 0.48, 0, Math.PI * 2);
    c.stroke();
    c.lineWidth = s * 0.01;
    c.beginPath();
    c.arc(cx, cy, s * 0.42, 0, Math.PI * 2);
    c.stroke();
  }, ink.foil);
  p.text(letters, cx, cy + s * 0.03, { font, size: s * 0.42, color: ink.color, foil: ink.foil ?? undefined, kind: "name", weight: 700 });
}

/** 포도 덩굴 테두리 무늬 (가로) */
export function vineRule(p: Painter, x0: number, x1: number, y: number, s: number, ink: Ink) {
  p.draw((c, i) => {
    c.strokeStyle = i(ink.color);
    c.fillStyle = i(ink.color);
    c.lineWidth = s * 0.06;
    c.beginPath();
    const n = Math.max(2, Math.round((x1 - x0) / (s * 2)));
    for (let k = 0; k <= n * 8; k++) {
      const t = k / (n * 8);
      const x = x0 + (x1 - x0) * t;
      const yy = y + Math.sin(t * n * Math.PI * 2) * s * 0.35;
      if (k === 0) c.moveTo(x, yy);
      else c.lineTo(x, yy);
    }
    c.stroke();
    for (let k = 0; k < n; k++) {
      const x = x0 + ((x1 - x0) * (k + 0.25)) / n;
      c.beginPath();
      c.arc(x, y - s * 0.55, s * 0.18, 0, Math.PI * 2);
      c.fill();
      leafPath(c, x0 + ((x1 - x0) * (k + 0.75)) / n, y + s * 0.5, s * 0.8, Math.PI);
      c.fill();
    }
  }, ink.foil);
}

/** 독수리 (독일 VDP 문장 느낌) */
export function eagle(p: Painter, cx: number, cy: number, s: number, ink: Ink) {
  p.draw((c, i) => {
    c.fillStyle = i(ink.color);
    c.beginPath();
    // 몸통
    c.ellipse(cx, cy + s * 0.05, s * 0.1, s * 0.22, 0, 0, Math.PI * 2);
    c.fill();
    // 머리
    c.beginPath();
    c.arc(cx, cy - s * 0.22, s * 0.07, 0, Math.PI * 2);
    c.fill();
    c.beginPath();
    c.moveTo(cx + s * 0.05, cy - s * 0.24);
    c.lineTo(cx + s * 0.14, cy - s * 0.2);
    c.lineTo(cx + s * 0.05, cy - s * 0.18);
    c.fill();
    // 날개
    for (const dir of [-1, 1]) {
      c.beginPath();
      c.moveTo(cx + dir * s * 0.06, cy - s * 0.12);
      for (let k = 0; k < 5; k++) {
        const x = cx + dir * s * (0.18 + k * 0.07);
        c.lineTo(x, cy - s * (0.38 - k * 0.04));
        c.lineTo(x - dir * s * 0.03, cy - s * (0.2 - k * 0.07));
      }
      c.lineTo(cx + dir * s * 0.1, cy + s * 0.1);
      c.closePath();
      c.fill();
    }
    // 꼬리·다리
    c.beginPath();
    c.moveTo(cx - s * 0.1, cy + s * 0.22);
    c.lineTo(cx, cy + s * 0.42);
    c.lineTo(cx + s * 0.1, cy + s * 0.22);
    c.fill();
  }, ink.foil);
}

/** 사자 서 있는 문장 (간략) */
export function lion(p: Painter, cx: number, cy: number, s: number, ink: Ink) {
  p.draw((c, i) => {
    c.fillStyle = i(ink.color);
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.beginPath();
    c.moveTo(-10, 45);
    c.lineTo(-18, 20);
    c.quadraticCurveTo(-30, 0, -20, -18);
    c.lineTo(-28, -30);
    c.lineTo(-14, -26);
    c.quadraticCurveTo(-8, -48, 8, -44);
    c.lineTo(20, -46);
    c.lineTo(14, -36);
    c.quadraticCurveTo(26, -30, 18, -18);
    c.lineTo(30, -12);
    c.lineTo(18, -6);
    c.quadraticCurveTo(12, 10, 16, 22);
    c.lineTo(26, 45);
    c.lineTo(12, 45);
    c.lineTo(4, 26);
    c.lineTo(0, 45);
    c.closePath();
    c.fill();
    // 꼬리
    c.lineWidth = 4;
    c.strokeStyle = c.fillStyle;
    c.beginPath();
    c.moveTo(-18, 20);
    c.quadraticCurveTo(-42, 10, -34, -10);
    c.stroke();
    c.restore();
  }, ink.foil);
}

/** 추상 그림 (아트 라벨) */
export function abstractArt(p: Painter, x: number, y: number, w: number, h: number, palette: string[], variant: number) {
  const r = mulberry(variant * 71 + 3);
  p.draw((c) => {
    c.save();
    c.beginPath();
    c.rect(x, y, w, h);
    c.clip();
    c.fillStyle = palette[0];
    c.fillRect(x, y, w, h);
    const kind = variant % 3;
    for (let k = 0; k < 14; k++) {
      c.fillStyle = palette[1 + Math.floor(r() * (palette.length - 1))];
      c.globalAlpha = 0.55 + r() * 0.4;
      c.beginPath();
      if (kind === 0) c.arc(x + r() * w, y + r() * h, (0.05 + r() * 0.25) * w, 0, Math.PI * 2);
      else if (kind === 1) {
        const px = x + r() * w;
        const py = y + r() * h;
        c.moveTo(px, py);
        c.bezierCurveTo(px + r() * w * 0.5, py - r() * h, px - r() * w * 0.5, py + r() * h, px + (r() - 0.5) * w, py + (r() - 0.5) * h);
        c.lineWidth = 6 + r() * 30;
        c.strokeStyle = c.fillStyle;
        c.stroke();
        continue;
      } else c.rect(x + r() * w, y + r() * h, r() * w * 0.4, r() * h * 0.4);
      c.fill();
    }
    c.restore();
  });
}

export function mulberry(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
