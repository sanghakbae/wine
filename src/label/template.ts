// 자동 라벨 — 와인 속성(국가·산지·종류·등급)과 시드로 레이아웃·색·서체·문양을 골라 그린다.
// 전용 디자인이 없는 와인은 모두 이 템플릿으로 그려진다.
import type { Wine } from "../data/wines";
import { COUNTRY_EN, grapeLabel, regionLabel } from "../data/lang";
import { SHAPES } from "../bottle/shapes";
import type { FontKey, Foil, Painter } from "./painter";
import { rng } from "./painter";
import * as E from "./emblems";

export type Layout =
  | "chateau"
  | "burgundy"
  | "champagne"
  | "german"
  | "italian"
  | "iberian"
  | "port"
  | "modern"
  | "dark"
  | "minimal"
  | "art";

export type EmblemKey = "chateau" | "crest" | "crown" | "grapes" | "leaf" | "star" | "sun" | "mountains" | "eagle" | "lion" | "medallion" | "vine" | "none";

export interface LabelStyle {
  layout: Layout;
  paper: string;
  ink: string;
  accent: string;
  foil: Foil | null;
  font: FontKey;
  emblem: EmblemKey;
  variant: number;
  /** 샴페인 라벨 모양 */
  cut?: "rect" | "shield" | "oval" | "round";
}

const PAPERS_CREAM = ["#f3ead6", "#efe4cb", "#f6efe0", "#eadcc0", "#f7f2e6"];
const PAPERS_WHITE = ["#fbfaf6", "#f7f6f1", "#ffffff", "#f4f2ec"];
const DARKS = ["#141414", "#1b1f2e", "#2a0f14", "#10231a", "#231a12"];
const COLORED = ["#7a1522", "#1f3a5f", "#2f4a2c", "#c9a24e", "#e2b53a", "#b8562a", "#5a2a5e", "#23676a", "#d86f4f", "#394a8c"];
const INKS = ["#1b1410", "#2a1a14", "#3a0f14", "#1a2330", "#0f2418"];

function pick<T>(r: () => number, arr: T[]): T {
  return arr[Math.floor(r() * arr.length)];
}

function hashNum(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function styleFor(w: Wine): LabelStyle {
  const r = rng("style:" + w.id);
  const variant = hashNum(w.id);
  const fam = SHAPES[w.shape].family;
  const newWorld = ["미국", "호주", "뉴질랜드", "칠레", "아르헨티나", "남아프리카공화국", "캐나다", "우루과이", "중국", "일본", "브라질", "멕시코", "영국"].includes(w.country);
  let s: LabelStyle;
  if (fam === "champagne" || (w.type === "sparkling" && w.country !== "이탈리아")) {
    const dark = r() < 0.45;
    s = {
      layout: "champagne",
      paper: dark ? pick(r, [...DARKS, "#0c1a3a", "#e8e0cc"]) : pick(r, [...PAPERS_CREAM, ...PAPERS_WHITE, ...COLORED.slice(0, 3)]),
      ink: dark ? "#f3e6c0" : pick(r, INKS),
      accent: pick(r, ["#8e1520", "#1a2330", "#c9a24e"]),
      foil: pick(r, ["gold", "gold", "silver", null] as (Foil | null)[]),
      font: pick(r, ["script", "roman", "didone"] as FontKey[]),
      emblem: pick(r, ["crest", "crown", "star", "medallion", "none"] as EmblemKey[]),
      variant,
      cut: pick(r, ["rect", "shield", "oval", "round"] as const),
    };
  } else if (w.country === "프랑스" && w.area === "보르도") {
    s = {
      layout: "chateau",
      paper: pick(r, PAPERS_CREAM),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#7a1522", "#1a2330", "#9c7428"]),
      foil: r() < 0.45 ? "gold" : null,
      font: pick(r, ["roman", "roman", "didone", "serif", "script"] as FontKey[]),
      emblem: r() < 0.8 ? "chateau" : pick(r, ["crest", "crown", "lion"] as EmblemKey[]),
      variant,
    };
  } else if (w.country === "프랑스" && ["부르고뉴", "론", "루아르", "쥐라"].includes(w.area)) {
    s = {
      layout: r() < 0.85 ? "burgundy" : "minimal",
      paper: pick(r, [...PAPERS_CREAM, ...PAPERS_WHITE]),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#7a1522", "#1a2330", "#9c7428", "#2f4a2c"]),
      foil: r() < 0.25 ? "gold" : null,
      font: pick(r, ["roman", "serif", "didone", "gothic", "roman"] as FontKey[]),
      emblem: pick(r, ["crest", "grapes", "none", "vine", "medallion"] as EmblemKey[]),
      variant,
    };
  } else if (w.country === "독일" || w.country === "오스트리아") {
    s = {
      layout: r() < 0.8 ? "german" : "minimal",
      paper: pick(r, PAPERS_WHITE),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#1a2330", "#9c7428"]),
      foil: r() < 0.3 ? "gold" : null,
      font: pick(r, ["gothic", "gothic", "serif", "roman"] as FontKey[]),
      emblem: pick(r, ["eagle", "crest", "crest", "grapes"] as EmblemKey[]),
      variant,
    };
  } else if (w.country === "이탈리아") {
    s = {
      layout: r() < 0.75 ? "italian" : pick(r, ["minimal", "modern"] as Layout[]),
      paper: pick(r, [...PAPERS_CREAM, ...PAPERS_WHITE]),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#7a1522", "#1a2330", "#9c7428"]),
      foil: r() < 0.4 ? "gold" : null,
      font: pick(r, ["script", "roman", "didone", "serif"] as FontKey[]),
      emblem: pick(r, ["crest", "crown", "grapes", "star", "sun", "none"] as EmblemKey[]),
      variant,
    };
  } else if (w.type === "fortified") {
    s = {
      layout: "port",
      paper: pick(r, [...PAPERS_CREAM, ...PAPERS_WHITE]),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#b3141c", "#1a2330"]),
      foil: r() < 0.5 ? "gold" : null,
      font: pick(r, ["roman", "didone", "serif"] as FontKey[]),
      emblem: pick(r, ["crest", "crown", "star"] as EmblemKey[]),
      variant,
    };
  } else if (["스페인", "포르투갈"].includes(w.country)) {
    s = {
      layout: "iberian",
      paper: pick(r, PAPERS_CREAM),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#b3141c", "#1a2330", "#9c7428"]),
      foil: r() < 0.55 ? "gold" : null,
      font: pick(r, ["roman", "didone", "serif", "script"] as FontKey[]),
      emblem: pick(r, ["crest", "crown", "star", "lion"] as EmblemKey[]),
      variant,
    };
  } else if (newWorld) {
    const lay = pick(r, ["modern", "modern", "modern", "dark", "minimal", "art"] as Layout[]);
    const dark = lay === "dark";
    s = {
      layout: lay,
      paper: dark ? pick(r, DARKS) : r() < 0.2 ? pick(r, COLORED) : pick(r, [...PAPERS_WHITE, ...PAPERS_CREAM]),
      ink: dark ? "#efe3c4" : pick(r, INKS),
      accent: pick(r, ["#8e1520", "#1f3a5f", "#9c7428", "#2f4a2c", "#b8562a"]),
      foil: dark ? pick(r, ["gold", "silver", "copper"] as Foil[]) : r() < 0.3 ? "gold" : null,
      font: pick(r, ["didone", "serif", "sans", "roman", "grotesk"] as FontKey[]),
      emblem: pick(r, ["leaf", "mountains", "sun", "star", "grapes", "medallion", "none"] as EmblemKey[]),
      variant,
    };
  } else {
    // 그 밖의 나라: 특정 나라의 원산지 문구(프랑스·스페인식)가 찍히지 않는 레이아웃만 쓴다
    s = {
      layout: pick(r, ["modern", "dark", "minimal"] as Layout[]),
      paper: pick(r, PAPERS_CREAM),
      ink: pick(r, INKS),
      accent: pick(r, ["#8e1520", "#1a2330", "#9c7428"]),
      foil: r() < 0.4 ? "gold" : null,
      font: pick(r, ["roman", "didone", "serif"] as FontKey[]),
      emblem: pick(r, ["crest", "grapes", "chateau", "star"] as EmblemKey[]),
      variant,
    };
  }
  // 이름이 밝은 색 종이에 올라가면 잉크를 밝게
  if (isDark(s.paper) && isDark(s.ink)) s.ink = "#f1e6c8";
  return { ...s, ...(w.style ?? {}) };
}

function isDark(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return r * 0.3 + g * 0.59 + b * 0.11 < 110;
}

const PREFIXES = ["Château", "Domaine", "Clos", "Bodegas", "Bodega", "Tenuta", "Castello", "Weingut", "Quinta", "Viña", "Cantina", "Maison", "Schloss", "Bodegas"];

/** "Château Lafite Rothschild" → { pre: "Château", main: "Lafite Rothschild" } */
function splitName(name: string) {
  for (const p of PREFIXES) {
    if (name.startsWith(p + " ")) return { pre: p, main: name.slice(p.length + 1) };
  }
  return { pre: "", main: name };
}

function drawEmblem(p: Painter, st: LabelStyle, w: Wine, cx: number, cy: number, size: number, color: string) {
  const ink = { color, foil: st.foil };
  switch (st.emblem) {
    case "chateau":
      return E.chateau(p, cx, cy, size * 1.6, ink, st.variant);
    case "crest":
      return E.crest(p, cx, cy, size, ink, st.variant, st.foil ? undefined : undefined);
    case "crown":
      return E.crown(p, cx, cy, size * 0.8, ink);
    case "grapes":
      return E.grapes(p, cx, cy, size, ink, st.accent);
    case "leaf":
      return E.leaf(p, cx, cy, size * 1.1, [st.accent, "#c9a24e", "#b8562a"], st.foil);
    case "star":
      return E.star(p, cx, cy, size * 0.45, ink, st.variant % 2 ? 8 : 5, st.variant % 2 ? 0.38 : 0.45);
    case "sun":
      return E.sun(p, cx, cy, size, ink);
    case "mountains":
      return E.mountains(p, cx, cy + size * 0.3, size * 2.2, ink, st.variant, st.variant % 2 === 0);
    case "eagle":
      return E.eagle(p, cx, cy, size, ink);
    case "lion":
      return E.lion(p, cx, cy, size * 0.9, ink);
    case "medallion": {
      const initials = splitName(w.original).main.replace(/[^A-Za-zÀ-ÿ ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
      return E.medallion(p, cx, cy, size, initials || "V", ink);
    }
    case "vine":
      return E.vineRule(p, cx - size * 1.6, cx + size * 1.6, cy, size * 0.25, ink);
    default:
      return;
  }
}

export function templateFront(w: Wine): (p: Painter) => void {
  const st = styleFor(w);
  const region = regionLabel(w.area, w.sub);
  const grape = grapeLabel(w.grape);
  const country = COUNTRY_EN[w.country] ?? "";
  const { pre, main } = splitName(w.labelName ?? w.original);
  const maker = w.maker;
  const cls = w.cls;
  const inkFoil = st.foil;
  const isChampagne = w.area === "샹파뉴";

  return (p) => {
    const vintage = p.vintage ?? "";
    const W = p.W;
    const H = p.H;
    const cx = W / 2;
    const ink = st.ink;
    const nameFont = st.font;
    switch (st.layout) {
      case "chateau": {
        p.paper(st.paper, { aged: 0.35 });
        p.frame(22, 22, W - 44, H - 44, ink, 3, inkFoil);
        p.frame(36, 36, W - 72, H - 72, ink, 1.2, inkFoil);
        if (st.emblem === "chateau") E.chateau(p, cx, H * 0.24, 620, { color: ink }, st.variant);
        else drawEmblem(p, st, w, cx, H * 0.22, 200, ink);
        let y = H * 0.44;
        if (st.variant % 3 !== 0) {
          p.text("GRAND VIN", cx, y, { font: "roman", size: 30, color: st.accent, spacing: 0.3, kind: "deco" });
          y += H * 0.07;
        } else y += H * 0.03;
        if (pre) {
          p.text(pre.toUpperCase(), cx, y, { font: "roman", size: 40, color: ink, spacing: 0.18, kind: "name" });
          y += H * 0.075;
        }
        p.text(nameFont === "script" ? main : main.toUpperCase(), cx, y, { font: nameFont, size: nameFont === "script" ? 110 : 76, weight: 700, color: ink, maxWidth: 860, kind: "name", foil: st.variant % 4 === 0 ? inkFoil ?? undefined : undefined });
        y += H * 0.085;
        // 등급·퀴베명(cls)은 이름·산지 둘 다의 단서라 어느 쪽을 가려도 가리고, 기본 문구는 산지(보르도) 단서라 산지와 함께 가린다
        p.text(cls ?? "GRAND VIN DE BORDEAUX", cx, y, { font: "roman", size: 26, color: st.accent, spacing: 0.12, maxWidth: 800, kind: cls ? "both" : "info" });
        y += H * 0.065;
        p.text(`APPELLATION ${region.toUpperCase()} CONTRÔLÉE`, cx, y, { font: "roman", size: 23, color: ink, spacing: 0.08, maxWidth: 840, kind: "info" });
        p.text(vintage, cx, H * 0.86, { font: "didone", size: 66, weight: 700, color: ink, foil: inkFoil ?? undefined, kind: "deco" });
        p.text("MIS EN BOUTEILLE AU CHÂTEAU", cx, H * 0.935, { font: "roman", size: 19, color: ink, spacing: 0.15, kind: "info" });
        break;
      }
      case "burgundy": {
        p.paper(st.paper, { aged: 0.25 });
        p.frame(28, 28, W - 56, H - 56, ink, 2, inkFoil);
        let y = H * 0.12;
        if (maker) {
          p.text(maker.toUpperCase(), cx, y, { font: "roman", size: 34, color: ink, spacing: 0.12, maxWidth: 860, kind: "name" });
        }
        if (st.emblem !== "none") drawEmblem(p, st, w, cx, H * 0.26, 150, st.accent);
        y = H * 0.46;
        p.text(nameFont === "script" || nameFont === "gothic" ? main : main.toUpperCase(), cx, y, { font: nameFont, size: nameFont === "script" ? 120 : 92, weight: 700, color: ink, maxWidth: 880, kind: "name" });
        y += H * 0.1;
        if (cls) p.text(cls.toUpperCase(), cx, y, { font: "roman", size: 34, color: st.accent, spacing: 0.25, kind: "both" });
        y += H * 0.08;
        p.text(`Appellation ${region} Contrôlée`, cx, y, { font: "serif", size: 34, italic: true, color: ink, maxWidth: 860, kind: "info" });
        p.text(vintage, cx, H * 0.78, { font: "didone", size: 56, color: ink, kind: "deco" });
        p.text(country, cx, H * 0.9, { font: "roman", size: 22, color: ink, spacing: 0.2, kind: "info" });
        break;
      }
      case "champagne": {
        p.paper(st.paper, { aged: 0.05, grain: 0.3, rough: 0.55 });
        const txt = isDark(st.paper) ? "#f3e6c0" : ink;
        const cut = st.cut ?? "rect";
        const border = (lw: number, inset: number) =>
          p.draw((c, i) => {
            c.strokeStyle = i(txt);
            c.lineWidth = lw;
            c.beginPath();
            cutPath(c, cut, W, H, inset);
            c.stroke();
          }, inkFoil ?? "gold");
        border(6, 26);
        border(2, 42);
        drawEmblem(p, { ...st, foil: inkFoil ?? "gold" }, w, cx, H * 0.2, 150, txt);
        p.text(isChampagne ? "CHAMPAGNE" : region.toUpperCase(), cx, H * 0.36, { font: "roman", size: 38, color: txt, spacing: 0.35, kind: "info", foil: inkFoil ?? undefined, maxWidth: 760 });
        p.text(main, cx, H * 0.53, { font: nameFont, size: nameFont === "script" ? 130 : 84, weight: 700, color: txt, maxWidth: 800, kind: "name", foil: inkFoil ?? undefined });
        p.text(cls ?? "BRUT", cx, H * 0.69, { font: "roman", size: 40, color: txt, spacing: 0.3, kind: cls ? "both" : "info" });
        p.text(isChampagne ? `${region.toUpperCase()} — FRANCE` : country.toUpperCase(), cx, H * 0.8, { font: "roman", size: 22, color: txt, spacing: 0.2, maxWidth: 700, kind: "info" });
        p.cutout((c) => cutPath(c, cut, W, H, 0));
        break;
      }
      case "german": {
        p.paper(st.paper, { aged: 0.08 });
        p.frame(24, 24, W - 48, H - 48, st.accent, 3, inkFoil);
        drawEmblem(p, st, w, cx, H * 0.17, 180, ink);
        p.text(maker ?? main, cx, H * 0.36, { font: st.font, size: 70, color: ink, maxWidth: 860, kind: "name" });
        if (maker) p.text(main, cx, H * 0.49, { font: "serif", size: 60, weight: 600, color: ink, maxWidth: 860, kind: "name" });
        p.text(`${grape}${cls ? " " + cls : ""}`, cx, H * 0.61, { font: "serif", size: 46, italic: true, color: st.accent, maxWidth: 860, kind: "info" });
        p.text(region, cx, H * 0.71, { font: "roman", size: 34, color: ink, spacing: 0.25, kind: "info" });
        p.text(vintage, cx, H * 0.81, { font: "didone", size: 52, color: ink, kind: "deco" });
        p.text("Gutsabfüllung · Qualitätswein", cx, H * 0.91, { font: "serif", size: 26, color: ink, kind: "info" });
        break;
      }
      case "italian": {
        p.paper(st.paper, { aged: 0.3 });
        p.frame(30, 30, W - 60, H - 60, st.accent, 5, inkFoil);
        p.frame(46, 46, W - 92, H - 92, ink, 1.2);
        drawEmblem(p, st, w, cx, H * 0.2, 170, st.accent);
        p.text(nameFont === "script" ? main : main.toUpperCase(), cx, H * 0.42, { font: nameFont, size: nameFont === "script" ? 124 : 84, weight: 700, color: ink, maxWidth: 860, kind: "name", foil: st.variant % 3 === 0 ? inkFoil ?? undefined : undefined });
        p.text(region.toUpperCase(), cx, H * 0.56, { font: "roman", size: 44, color: st.accent, spacing: 0.2, maxWidth: 820, kind: "info" });
        p.text(cls ?? "Denominazione di Origine Controllata", cx, H * 0.64, { font: "serif", size: 28, italic: true, color: ink, maxWidth: 820, kind: cls ? "both" : "info" });
        p.text(vintage, cx, H * 0.75, { font: "didone", size: 54, color: ink, kind: "deco" });
        if (maker) p.text(maker, cx, H * 0.85, { font: "serif", size: 34, color: ink, maxWidth: 820, kind: "name" });
        p.text(country, cx, H * 0.925, { font: "roman", size: 20, color: ink, spacing: 0.2, kind: "info" });
        break;
      }
      case "iberian": {
        p.paper(st.paper, { aged: 0.4 });
        p.rect(0, 0, W, H * 0.06, st.accent);
        p.rect(0, H * 0.94, W, H * 0.06, st.accent);
        p.frame(40, H * 0.09, W - 80, H * 0.82, ink, 1.5, inkFoil);
        drawEmblem(p, st, w, cx, H * 0.24, 170, ink);
        p.text(nameFont === "script" ? main : main.toUpperCase(), cx, H * 0.45, { font: nameFont, size: nameFont === "script" ? 116 : 74, weight: 700, color: ink, maxWidth: 850, kind: "name" });
        p.text((cls ?? "RESERVA").toUpperCase(), cx, H * 0.56, { font: "roman", size: 40, color: st.accent, spacing: 0.3, maxWidth: 800, kind: cls ? "both" : "info", foil: inkFoil ?? undefined });
        p.text(`Denominación de Origen ${region}`, cx, H * 0.65, { font: "serif", size: 32, italic: true, color: ink, maxWidth: 820, kind: "info" });
        p.text(vintage, cx, H * 0.76, { font: "didone", size: 54, color: ink, kind: "deco" });
        p.text(country, cx, H * 0.86, { font: "roman", size: 22, color: ink, spacing: 0.2, kind: "info" });
        break;
      }
      case "port": {
        p.paper(st.paper, { aged: 0.3 });
        p.frame(26, 26, W - 52, H - 52, st.accent, 6);
        drawEmblem(p, st, w, cx, H * 0.17, 140, st.accent);
        p.text(main.toUpperCase(), cx, H * 0.36, { font: nameFont, size: 88, weight: 700, color: st.accent, maxWidth: 860, kind: "name" });
        // 스타일(빈티지·토니·피노…)은 와인마다 적힌 cls 만 쓴다 (짐작한 기본값이 토니 포트에 VINTAGE PORT 처럼 틀린 단서가 됐다)
        if (cls) p.text(cls.toUpperCase(), cx, H * 0.52, { font: "roman", size: 50, color: ink, spacing: 0.2, maxWidth: 820, kind: "both", foil: inkFoil ?? undefined });
        p.text(region, cx, H * 0.64, { font: "serif", size: 38, italic: true, color: ink, kind: "info" });
        if (!w.nv) p.text(vintage, cx, H * 0.76, { font: "didone", size: 54, color: ink, kind: "deco" });
        p.text(country, cx, H * 0.9, { font: "roman", size: 22, color: ink, spacing: 0.2, kind: "info" });
        break;
      }
      case "dark": {
        p.paper(st.paper, { aged: 0.1, grain: 0.2, rough: 0.5 });
        p.frame(30, 30, W - 60, H - 60, ink, 3, inkFoil);
        drawEmblem(p, { ...st, emblem: st.emblem === "none" ? "medallion" : st.emblem }, w, cx, H * 0.22, 170, ink);
        p.text(main.toUpperCase(), cx, H * 0.47, { font: nameFont === "script" ? "roman" : nameFont, size: 80, weight: 700, color: ink, foil: inkFoil ?? undefined, maxWidth: 860, spacing: 0.08, kind: "name" });
        p.text(grape.toUpperCase(), cx, H * 0.6, { font: "roman", size: 32, color: ink, spacing: 0.2, maxWidth: 820, kind: "info" });
        p.text(region.toUpperCase(), cx, H * 0.69, { font: "roman", size: 30, color: ink, spacing: 0.2, maxWidth: 820, kind: "info" });
        p.text(vintage, cx, H * 0.8, { font: "didone", size: 52, color: ink, foil: inkFoil ?? undefined, kind: "deco" });
        p.text(country, cx, H * 0.9, { font: "grotesk", size: 20, color: ink, spacing: 0.15, kind: "info" });
        break;
      }
      case "minimal": {
        p.paper(st.paper, { aged: 0.05, grain: 0.3 });
        const big = main.length < 10 ? 200 : 120;
        p.text(nameFont === "script" ? main : main.toUpperCase(), cx, H * 0.4, { font: nameFont, size: big, weight: 900, color: ink, maxWidth: 880, kind: "name" });
        if (maker) p.text(maker, cx, H * 0.58, { font: "serif", size: 38, color: ink, maxWidth: 820, kind: "name" });
        p.text([region, grape].filter(Boolean).join(" · "), cx, H * 0.72, { font: "grotesk", size: 30, color: ink, maxWidth: 860, kind: "info" });
        p.text(vintage, cx, H * 0.83, { font: "grotesk", size: 36, color: ink, kind: "deco" });
        p.text(country, cx, H * 0.92, { font: "grotesk", size: 18, color: ink, spacing: 0.2, kind: "info" });
        break;
      }
      case "art": {
        p.paper(PAPERS_WHITE[0], { aged: 0 });
        E.abstractArt(p, 50, 50, W - 100, H * 0.48, [st.paper, st.accent, "#e2b53a", "#23676a", "#d86f4f", "#f4f2ec", "#1b1f2e"], st.variant);
        p.text(main, cx, H * 0.66, { font: nameFont === "sans" ? "sans" : "didone", size: 84, weight: 700, color: "#1b1410", maxWidth: 860, kind: "name" });
        p.text(grape, cx, H * 0.76, { font: "serif", size: 38, italic: true, color: "#1b1410", maxWidth: 840, kind: "info" });
        p.text(`${region} · ${vintage}`, cx, H * 0.85, { font: "grotesk", size: 28, color: "#1b1410", maxWidth: 840, kind: "info" });
        p.text(country, cx, H * 0.93, { font: "grotesk", size: 18, color: "#1b1410", spacing: 0.2, kind: "info" });
        break;
      }
      case "modern":
      default: {
        p.paper(st.paper, { aged: 0.05, grain: 0.35 });
        const txt = isDark(st.paper) ? "#f6efdf" : ink;
        if (st.variant % 2) p.frame(34, 34, W - 68, H - 68, txt, 2, inkFoil);
        if (st.emblem !== "none") drawEmblem(p, st, w, cx, H * 0.24, 190, isDark(st.paper) ? "#f6efdf" : st.accent);
        p.text(nameFont === "script" || nameFont === "serif" ? main : main.toUpperCase(), cx, H * 0.5, { font: nameFont, size: nameFont === "script" ? 120 : 82, weight: 700, color: txt, maxWidth: 860, kind: "name", spacing: nameFont === "sans" ? 0.05 : 0 });
        if (maker) p.text(maker.toUpperCase(), cx, H * 0.6, { font: "grotesk", size: 26, color: txt, spacing: 0.2, maxWidth: 820, kind: "name" });
        p.text(grape.toUpperCase(), cx, H * 0.69, { font: "grotesk", size: 34, weight: 700, color: txt, spacing: 0.12, maxWidth: 840, kind: "info" });
        p.text(region.toUpperCase(), cx, H * 0.77, { font: "grotesk", size: 26, color: txt, spacing: 0.18, maxWidth: 840, kind: "info" });
        p.text(vintage, cx, H * 0.86, { font: "didone", size: 44, color: txt, kind: "deco" });
        p.text(country, cx, H * 0.93, { font: "grotesk", size: 18, color: txt, spacing: 0.2, kind: "info" });
      }
    }
  };
}

function cutPath(c: CanvasRenderingContext2D, cut: string, W: number, H: number, inset: number) {
  const x0 = inset;
  const y0 = inset;
  const x1 = W - inset;
  const y1 = H - inset;
  if (cut === "oval") {
    c.ellipse(W / 2, H / 2, W / 2 - inset, H / 2 - inset, 0, 0, Math.PI * 2);
  } else if (cut === "round") {
    c.roundRect(x0, y0, x1 - x0, y1 - y0, Math.min(W, H) * 0.18);
  } else if (cut === "shield") {
    c.moveTo(x0, y0 + H * 0.08);
    c.quadraticCurveTo(W / 2, y0 - H * 0.02, x1, y0 + H * 0.08);
    c.lineTo(x1, H * 0.6);
    c.quadraticCurveTo(x1, y1 - H * 0.05, W / 2, y1);
    c.quadraticCurveTo(x0, y1 - H * 0.05, x0, H * 0.6);
    c.closePath();
  } else {
    c.rect(x0, y0, x1 - x0, y1 - y0);
  }
}
