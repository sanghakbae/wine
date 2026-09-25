// 와인 한 병을 짧게 적기 위한 도우미. 빠진 값(라벨 자리·캡슐·유리색·와인색)은 병 모양과 종류로 채운다.
import { SHAPES, type ShapeId } from "../bottle/shapes";
import type { Capsule, Extra, GlassKey, LabelPlace, LiquidKey, Trivia, Wine, WineType } from "./wines";
import type { LabelStyle } from "../label/template";

export const LABEL_AT: Record<ShapeId, LabelPlace> = {
  bordeaux: { y0: 4.2, y1: 13.4, arc: 128 },
  bordeauxHeavy: { y0: 4.4, y1: 14.2, arc: 126 },
  sherry: { y0: 4.0, y1: 12.8, arc: 124 },
  port: { y0: 4.8, y1: 13.2, arc: 124 },
  burgundy: { y0: 2.6, y1: 10.9, arc: 118 },
  champagne: { y0: 5.4, y1: 12.4, arc: 104 },
  cristal: { y0: 5.8, y1: 12.0, arc: 110 },
  domPerignon: { y0: 6.2, y1: 12.6, arc: 88 },
  ruinart: { y0: 5.2, y1: 10.8, arc: 96 },
  belleEpoque: { y0: 5.4, y1: 12.0, arc: 100 },
  flute: { y0: 2.8, y1: 11.8, arc: 112 },
  icewine: { y0: 4.0, y1: 13.2, arc: 150 },
  tokaji: { y0: 3.4, y1: 11.6, arc: 140 },
  fiasco: { y0: 9.6, y1: 13.2, arc: 104 },
  bocksbeutel: { y0: 3.0, y1: 11.4, arc: 78 },
  mateus: { y0: 4.2, y1: 12.2, arc: 76 },
  skittle: { y0: 5.0, y1: 11.4, arc: 96 },
};

/** 캡슐이 내려오는 높이 기본값 */
function capsuleTo(shape: ShapeId): number | undefined {
  const d = SHAPES[shape];
  if (d.sparkling) return d.neckY - 2;
  if (shape === "flute") return 29.5;
  if (shape === "icewine") return 27.6;
  if (shape === "fiasco") return 26.6;
  if (shape === "bocksbeutel") return 19.5;
  if (shape === "mateus") return 21.2;
  if (shape === "skittle") return 26.8;
  return undefined;
}

const RED_LIGHT = ["피노 누아", "가메", "네비올로"];

function defaultGlass(type: WineType, shape: ShapeId, country: string): GlassKey {
  if (SHAPES[shape].sparkling) return "champagne";
  if (type === "red") return shape === "burgundy" ? "deadleaf" : "green";
  if (type === "rose") return "flint";
  if (type === "sweet") return "flint";
  if (type === "fortified") return shape === "port" ? "black" : "green";
  if (shape === "flute") return country === "독일" || country === "프랑스" ? "mosel" : "flint";
  return "halfwhite";
}

function defaultLiquid(type: WineType, grape: string, shape: ShapeId): LiquidKey {
  switch (type) {
    case "red":
      return RED_LIGHT.some((g) => grape.startsWith(g)) ? "redLight" : "red";
    case "white":
      return grape.includes("소비뇽 블랑") || grape.includes("리슬링") || grape.includes("알바리뇨") ? "whiteGreen" : "white";
    case "rose":
      return "rosePale";
    case "sparkling":
      return "sparkling";
    case "sweet":
      return "golden";
    case "fortified":
      return shape === "port" ? "port" : "fino";
  }
}

export interface Row {
  id: string;
  name: string;
  original: string;
  producer: string;
  country: string;
  area: string;
  sub?: string;
  grape: string;
  type: WineType;
  tier: 1 | 2 | 3;
  shape: ShapeId;
  fact: string;
  quiz: Trivia[];
  /** 캡슐 색 (#rrggbb) */
  cap?: string;
  capsule?: Capsule;
  glass?: GlassKey;
  liquid?: LiquidKey;
  label?: LabelPlace;
  producerQ?: boolean;
  maker?: string;
  cls?: string;
  nv?: boolean;
  since?: number;
  labelName?: string;
  extras?: Extra[];
  style?: Partial<LabelStyle>;
}

export function mk(r: Row): Wine {
  const sparkling = SHAPES[r.shape].sparkling;
  return {
    id: r.id,
    name: r.name,
    original: r.original,
    producer: r.producer,
    producerQ: r.producerQ,
    country: r.country,
    area: r.area,
    sub: r.sub,
    grape: r.grape,
    type: r.type,
    tier: r.tier,
    shape: r.shape,
    glass: r.glass ?? defaultGlass(r.type, r.shape, r.country),
    liquid: r.liquid ?? defaultLiquid(r.type, r.grape, r.shape),
    capsule: r.capsule ?? {
      color: r.cap ?? (r.type === "red" ? "#6a1822" : "#d8c9a0"),
      metal: sparkling ? 0.85 : 0.5,
      rough: sparkling ? 0.3 : undefined,
      to: capsuleTo(r.shape),
    },
    label: r.label ?? LABEL_AT[r.shape],
    extras: r.extras,
    fact: r.fact,
    quiz: r.quiz,
    maker: r.maker,
    cls: r.cls,
    nv: r.nv,
    since: r.since,
    labelName: r.labelName,
    style: r.style,
  };
}
