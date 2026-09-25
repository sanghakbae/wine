// 라벨 캔버스 그리기 도구.
// 디자인 좌표는 가로 1000 단위, 세로는 라벨 실제 비율(H)을 따른다.
// 컬러 캔버스와 별개로 금속·거칠기 캔버스(mr)를 함께 칠해서 금박 글씨가 실제로 반짝이게 한다.
//   mr 캔버스: G = 거칠기, B = 금속도 (three.js roughnessMap / metalnessMap 규약)

export type TextKind = "name" | "info" | "deco";
export type FontKey = "roman" | "serif" | "didone" | "script" | "sans" | "gothic" | "grotesk";
export type Foil = "gold" | "silver" | "copper" | "red" | "pewter";

export interface Hide {
  /** 와인·생산자 이름 */
  name: boolean;
  /** 산지·품종·등급처럼 문제의 답이 될 수 있는 글자 */
  info: boolean;
}

const FONTS: Record<FontKey, string> = {
  roman: '"Cinzel", "Trajan Pro", "Times New Roman", serif',
  serif: '"Cormorant Garamond", Garamond, Georgia, serif',
  didone: '"Playfair Display", Didot, Georgia, serif',
  script: '"Great Vibes", "Snell Roundhand", cursive',
  sans: '"Oswald", "Arial Narrow", sans-serif',
  gothic: '"UnifrakturMaguntia", "Old English Text MT", serif',
  grotesk: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

export const FONT_LOADS = [
  '400 40px "Cinzel"',
  '700 40px "Cinzel"',
  '400 40px "Cormorant Garamond"',
  '600 40px "Cormorant Garamond"',
  'italic 400 40px "Cormorant Garamond"',
  '400 40px "Playfair Display"',
  '700 40px "Playfair Display"',
  '900 40px "Playfair Display"',
  'italic 400 40px "Playfair Display"',
  '400 40px "Great Vibes"',
  '400 40px "Oswald"',
  '600 40px "Oswald"',
  '400 40px "UnifrakturMaguntia"',
];

const FOIL_BASE: Record<Foil, string[]> = {
  gold: ["#a67c2e", "#f1d98a", "#b88f3a", "#f6e3a1", "#9c7428"],
  silver: ["#9ea3a8", "#f2f4f6", "#b4b9be", "#ffffff", "#8f959b"],
  copper: ["#9a5a33", "#e7a67c", "#a8663c", "#f0b893", "#8a4e2b"],
  red: ["#8e1520", "#d8404a", "#a01c26", "#e25a60", "#861219"],
  pewter: ["#6f7479", "#c9cdd1", "#80868b", "#dfe2e5", "#62676c"],
};

export interface TextOpts {
  font?: FontKey;
  size: number;
  weight?: number | string;
  italic?: boolean;
  color?: string;
  foil?: Foil;
  align?: CanvasTextAlign;
  kind?: TextKind;
  /** 자간 (글자 크기 대비 비율) */
  spacing?: number;
  /** 이보다 넓으면 가로로만 눌러 맞춘다 */
  maxWidth?: number;
  stroke?: string;
  strokeWidth?: number;
  /** 세로 기준 — 기본은 글자 가운데 */
  baseline?: CanvasTextBaseline;
}

/** 라벨마다 같은 무늬가 나오도록 쓰는 시드 난수 */
export function rng(seed: string | number) {
  let h = typeof seed === "number" ? seed : 2166136261;
  if (typeof seed === "string") for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Draw = (c: CanvasRenderingContext2D, ink: (css: string) => string | CanvasGradient) => void;

export class Painter {
  readonly W = 1000;
  readonly H: number;
  readonly ctx: CanvasRenderingContext2D;
  readonly mr: CanvasRenderingContext2D;
  readonly hide: Hide;
  readonly rand: () => number;
  /** 디자인 단위 → 캔버스 픽셀 배율 */
  readonly s: number;
  /** 종이 기본 거칠기 (0~1) */
  private paperRough = 0.82;

  /** 이번에 찍을 빈티지 (NV 면 null) */
  readonly vintage: string | null;

  constructor(canvas: HTMLCanvasElement, mrCanvas: HTMLCanvasElement, H: number, hide: Hide, seed: string, vintage: string | null) {
    this.H = H;
    this.vintage = vintage;
    this.s = canvas.width / this.W;
    this.ctx = canvas.getContext("2d")!;
    this.mr = mrCanvas.getContext("2d")!;
    this.hide = hide;
    this.rand = rng(seed);
    for (const c of [this.ctx, this.mr]) {
      c.setTransform(this.s, 0, 0, this.s, 0, 0);
      c.imageSmoothingEnabled = true;
      c.imageSmoothingQuality = "high";
    }
    this.mr.fillStyle = this.mrStyle(this.paperRough, 0);
    this.mr.fillRect(0, 0, this.W, H);
  }

  private mrStyle(rough: number, metal: number) {
    return `rgb(0,${Math.round(rough * 255)},${Math.round(metal * 255)})`;
  }

  /** 금박 그라디언트 (라벨 전체에 비스듬히) */
  foilInk(tone: Foil): CanvasGradient {
    const g = this.ctx.createLinearGradient(0, 0, this.W, this.H * 0.6);
    const cs = FOIL_BASE[tone];
    cs.forEach((c, i) => g.addColorStop(i / (cs.length - 1), c));
    return g;
  }

  /**
   * 그리기 한 덩어리. foil 이면 컬러 캔버스엔 금박색, mr 캔버스엔 금속으로 두 번 칠한다.
   * 일반 잉크는 컬러 캔버스에만 칠한다 (종이 거칠기를 그대로 쓴다).
   */
  draw(fn: Draw, foil?: Foil | null, gloss?: number) {
    const c = this.ctx;
    c.save();
    if (foil) {
      const ink = this.foilInk(foil);
      fn(c, () => ink);
    } else {
      fn(c, (css) => css);
    }
    c.restore();
    if (foil || gloss !== undefined) {
      const m = this.mr;
      m.save();
      const st = foil ? this.mrStyle(0.28, 1) : this.mrStyle(gloss!, 0);
      fn(m, () => st);
      m.restore();
    }
  }

  /** 종이 바탕: 색 + 미세한 섬유·얼룩 + 가장자리 그늘 */
  paper(color: string, o: { grain?: number; aged?: number; rough?: number; x?: number; y?: number; w?: number; h?: number } = {}) {
    const { x = 0, y = 0, w = this.W, h = this.H } = o;
    const c = this.ctx;
    c.save();
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
    const grain = o.grain ?? 0.5;
    const n = Math.round((w * h) / 900 * grain);
    for (let i = 0; i < n; i++) {
      const px = x + this.rand() * w;
      const py = y + this.rand() * h;
      const dark = this.rand() < 0.5;
      c.fillStyle = dark ? `rgba(60,40,20,${0.035 + this.rand() * 0.05})` : `rgba(255,255,255,${0.05 + this.rand() * 0.06})`;
      c.fillRect(px, py, 1 + this.rand() * 2.5, 1 + this.rand() * 2.5);
    }
    // 섬유
    c.lineWidth = 0.8;
    for (let i = 0; i < n / 25; i++) {
      const px = x + this.rand() * w;
      const py = y + this.rand() * h;
      const a = this.rand() * Math.PI;
      const l = 6 + this.rand() * 16;
      c.strokeStyle = `rgba(90,70,40,${0.04 + this.rand() * 0.05})`;
      c.beginPath();
      c.moveTo(px, py);
      c.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l);
      c.stroke();
    }
    const aged = o.aged ?? 0.25;
    if (aged > 0) {
      const g = c.createRadialGradient(x + w / 2, y + h / 2, Math.min(w, h) * 0.3, x + w / 2, y + h / 2, Math.max(w, h) * 0.75);
      g.addColorStop(0, "rgba(120,90,40,0)");
      g.addColorStop(1, `rgba(120,90,40,${aged * 0.45})`);
      c.fillStyle = g;
      c.fillRect(x, y, w, h);
    }
    c.restore();
    if (o.rough !== undefined) {
      this.paperRough = o.rough;
      this.mr.fillStyle = this.mrStyle(o.rough, 0);
      this.mr.fillRect(x, y, w, h);
    }
  }

  /** 라벨 모양 밖을 투명하게 비운다 (방패·타원 라벨) */
  cutout(shape: (c: CanvasRenderingContext2D) => void) {
    for (const c of [this.ctx, this.mr]) {
      c.save();
      c.globalCompositeOperation = "destination-in";
      c.beginPath();
      shape(c);
      c.fillStyle = "#000";
      c.fill();
      c.restore();
    }
  }

  rect(x: number, y: number, w: number, h: number, color: string, foil?: Foil | null, r = 0) {
    this.draw((c, ink) => {
      c.fillStyle = ink(color);
      c.beginPath();
      if (r > 0) c.roundRect(x, y, w, h, r);
      else c.rect(x, y, w, h);
      c.fill();
    }, foil);
  }

  frame(x: number, y: number, w: number, h: number, color: string, lw: number, foil?: Foil | null, r = 0) {
    this.draw((c, ink) => {
      c.strokeStyle = ink(color);
      c.lineWidth = lw;
      c.beginPath();
      if (r > 0) c.roundRect(x, y, w, h, r);
      else c.rect(x, y, w, h);
      c.stroke();
    }, foil);
  }

  line(x1: number, y1: number, x2: number, y2: number, color: string, lw: number, foil?: Foil | null) {
    this.draw((c, ink) => {
      c.strokeStyle = ink(color);
      c.lineWidth = lw;
      c.beginPath();
      c.moveTo(x1, y1);
      c.lineTo(x2, y2);
      c.stroke();
    }, foil);
  }

  /** 장식 괘선: 가운데 마름모를 둔 가로줄 */
  rule(cx: number, y: number, w: number, color: string, lw = 2, foil?: Foil | null) {
    this.draw((c, ink) => {
      c.strokeStyle = ink(color);
      c.fillStyle = ink(color);
      c.lineWidth = lw;
      c.beginPath();
      c.moveTo(cx - w / 2, y);
      c.lineTo(cx - 14, y);
      c.moveTo(cx + 14, y);
      c.lineTo(cx + w / 2, y);
      c.stroke();
      c.beginPath();
      c.moveTo(cx - 9, y);
      c.lineTo(cx, y - 6);
      c.lineTo(cx + 9, y);
      c.lineTo(cx, y + 6);
      c.closePath();
      c.fill();
    }, foil);
  }

  fontCss(o: TextOpts) {
    return `${o.italic ? "italic " : ""}${o.weight ?? 400} ${o.size}px ${FONTS[o.font ?? "serif"]}`;
  }

  measure(str: string, o: TextOpts): number {
    const c = this.ctx;
    c.save();
    c.font = this.fontCss(o);
    const w = this.rawWidth(c, str, o);
    c.restore();
    return w;
  }

  private rawWidth(c: CanvasRenderingContext2D, str: string, o: TextOpts) {
    const sp = (o.spacing ?? 0) * o.size;
    if (!sp) return c.measureText(str).width;
    let w = 0;
    for (const ch of str) w += c.measureText(ch).width + sp;
    return w - sp;
  }

  /** 글자 한 줄. kind 가 가려지는 종류면 뿌옇게 번진 덩어리로 그린다. */
  text(str: string, x: number, y: number, o: TextOpts) {
    const kind = o.kind ?? "deco";
    const hidden = (kind === "name" && this.hide.name) || (kind === "info" && this.hide.info);
    const c = this.ctx;
    c.save();
    c.font = this.fontCss(o);
    let w = this.rawWidth(c, str, o);
    c.restore();
    const sx = o.maxWidth && w > o.maxWidth ? o.maxWidth / w : 1;
    w *= sx;
    const align = o.align ?? "center";
    const left = align === "center" ? x - w / 2 : align === "right" || align === "end" ? x - w : x;
    const baseline = o.baseline ?? "middle";

    const paint = (cc: CanvasRenderingContext2D, fill: string | CanvasGradient, ox: number, oy: number) => {
      cc.font = this.fontCss(o);
      cc.textBaseline = baseline;
      cc.textAlign = "left";
      cc.save();
      cc.translate(ox, oy);
      cc.scale(sx, 1);
      const sp = (o.spacing ?? 0) * o.size;
      const run = (fnc: (s: string, px: number) => void) => {
        if (!sp) return fnc(str, 0);
        let px = 0;
        for (const ch of str) {
          fnc(ch, px);
          px += cc.measureText(ch).width + sp;
        }
      };
      if (o.stroke) {
        cc.strokeStyle = o.stroke;
        cc.lineWidth = o.strokeWidth ?? 2;
        cc.lineJoin = "round";
        run((s, px) => cc.strokeText(s, px, 0));
      }
      cc.fillStyle = fill;
      run((s, px) => cc.fillText(s, px, 0));
      cc.restore();
    };

    if (!hidden) {
      this.draw((cc, ink) => paint(cc, ink(o.color ?? "#1b1410"), left, y), o.foil);
      return;
    }

    // 가림: 아주 작은 캔버스에 그렸다가 늘려서 글자 모양이 뭉개진 얼룩만 남긴다
    const pad = o.size * 0.35;
    const bw = w + pad * 2;
    const bh = o.size * 1.6;
    const top = baseline === "middle" ? y - bh / 2 : baseline === "top" || baseline === "hanging" ? y - pad : y - o.size * 1.05;
    const glyphPx = 2.2;
    const k = glyphPx / (o.size * this.s);
    const tw = Math.max(2, Math.ceil(bw * this.s * k));
    const th = Math.max(2, Math.ceil(bh * this.s * k));
    const blob = (fill: string | CanvasGradient, target: CanvasRenderingContext2D) => {
      const tiny = document.createElement("canvas");
      tiny.width = tw;
      tiny.height = th;
      const t = tiny.getContext("2d")!;
      t.setTransform(this.s * k, 0, 0, this.s * k, 0, 0);
      const baseY = baseline === "middle" ? bh / 2 : baseline === "top" || baseline === "hanging" ? pad : o.size * 1.05;
      paint(t, fill, pad, baseY);
      // 한 번 더 키웠다 줄여 번짐을 부드럽게
      const mid = document.createElement("canvas");
      mid.width = tw * 4;
      mid.height = th * 4;
      const m = mid.getContext("2d")!;
      m.imageSmoothingQuality = "high";
      m.drawImage(tiny, 0, 0, mid.width, mid.height);
      target.save();
      target.globalAlpha = 0.9;
      target.drawImage(mid, left - pad, top, bw, bh);
      target.restore();
    };
    if (o.foil) {
      blob(this.foilInk(o.foil), this.ctx);
      blob(this.mrStyle(0.3, 1), this.mr);
    } else {
      blob(o.color ?? "#1b1410", this.ctx);
    }
  }

  /** 여러 줄 (가운데 정렬) */
  lines(strs: string[], x: number, y: number, lh: number, o: TextOpts) {
    strs.forEach((s, i) => this.text(s, x, y + i * lh, o));
  }

  /** 원호를 따라 휘어진 글자 (메달·인장) */
  arcText(str: string, cx: number, cy: number, radius: number, o: TextOpts & { start?: number; bottom?: boolean }) {
    const kind = o.kind ?? "deco";
    const hidden = (kind === "name" && this.hide.name) || (kind === "info" && this.hide.info);
    this.draw((c, ink) => {
      c.font = this.fontCss(o);
      c.textAlign = "center";
      c.textBaseline = "middle";
      const sp = (o.spacing ?? 0.1) * o.size;
      const widths = [...str].map((ch) => c.measureText(ch).width + sp);
      const total = widths.reduce((a, b) => a + b, 0);
      const dir = o.bottom ? -1 : 1;
      let a = (o.start ?? -Math.PI / 2) - (dir * total) / radius / 2;
      [...str].forEach((ch, i) => {
        const half = widths[i] / 2 / radius;
        a += dir * half;
        c.save();
        c.translate(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
        c.rotate(a + (dir * Math.PI) / 2);
        if (hidden) {
          c.globalAlpha = 0.85;
          c.fillStyle = ink(o.color ?? "#1b1410");
          c.beginPath();
          c.ellipse(0, 0, widths[i] * 0.55, o.size * 0.32, 0, 0, Math.PI * 2);
          c.fill();
        } else {
          c.fillStyle = ink(o.color ?? "#1b1410");
          c.fillText(ch, 0, 0);
        }
        c.restore();
        a += dir * half;
      });
    }, o.foil);
  }

  /** 테두리 무늬를 둘러 찍는 도우미: 정해진 간격으로 fn 을 반복 */
  repeatAlong(x0: number, y0: number, x1: number, y1: number, step: number, fn: (x: number, y: number) => void) {
    const len = Math.hypot(x1 - x0, y1 - y0);
    const n = Math.max(1, Math.round(len / step));
    for (let i = 0; i <= n; i++) fn(x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n);
  }
}
