import { FAMILIES, SHAPES, type FamilyId } from "../bottle/shapes";
import { pickVintage } from "../data/vintage";
import { WINES, type Trivia, type Wine, type WineType } from "../data/wines";
import { GRAPE_EN, REGION_EN } from "../data/lang";
import type { Hide } from "../label/painter";
import { SIGNATURE } from "../label/designs/signature";
import { countryName, familyName, hasProducer, grapeName, initialOf, producerOf, quizOf, regionName, t, typeName, wineName, wineSub, type UIKey } from "../i18n";

export type QType = "name" | "country" | "region" | "grape" | "type" | "producer" | "shape" | "trivia";
export type Level = "easy" | "normal" | "hard";

/** 단계별 보기 수·보기로 쓰는 와인 등급(1 대중적·2 유명·3 애호가용)·힌트 값. 레벨별 출제 비중은 아래 CURVE */
export const LEVELS: Record<Level, { options: number; tiers: number[]; hintCost: number }> = {
  easy: { options: 4, tiers: [1, 2], hintCost: 20 },
  normal: { options: 4, tiers: [1, 2, 3], hintCost: 30 },
  hard: { options: 6, tiers: [1, 2, 3], hintCost: 40 },
};

/** 단계(입문·애호가·소믈리에)마다 레벨 10개, 레벨마다 25문제 */
export const STAGES = 10;
export const STAGE_ROUNDS = 25;
/** 25문제 중 이만큼 맞히면 클리어 (다음 레벨이 열린다) · ★★ · ★★★ */
export const CLEAR_AT = 18;
export const STAR2_AT = 22;
export const STAR3_AT = 25;
export const starsFor = (correct: number) => (correct >= STAR3_AT ? 3 : correct >= STAR2_AT ? 2 : correct >= CLEAR_AT ? 1 : 0);
/** 한 문제 최고 점수 (기본 100 + 연속 정답 보너스 최대 50) — 레벨 최고 점수는 이것 × 25 */
export const MAX_POINTS = 150;

type Tiers = Record<number, number>;
/** 레벨 1 → 10 으로 가며 등급별 출제 비중·보기의 헷갈림이 바뀐다 (입문 Lv.1 이 가장 쉽고 소믈리에 Lv.10 이 가장 어렵다) */
const CURVE: Record<Level, { from: Tiers; to: Tiers; similar: [number, number] }> = {
  easy: { from: { 1: 1, 2: 0.05, 3: 0 }, to: { 1: 1, 2: 0.7, 3: 0 }, similar: [0, 0.35] },
  normal: { from: { 1: 0.7, 2: 1, 3: 0.15 }, to: { 1: 0.25, 2: 1, 3: 0.8 }, similar: [0.35, 0.7] },
  hard: { from: { 1: 0.15, 2: 0.9, 3: 1 }, to: { 1: 0.05, 2: 0.45, 3: 1 }, similar: [0.7, 1] },
};
const BASE: Record<Level, number> = { easy: 0, normal: 10, hard: 20 };

interface Spec {
  weight: Tiers;
  /** 0 = 보기를 아무 와인에서, 1 = 가장 비슷한 와인에서 */
  similar: number;
  /** 0 = 이름·나라·종류 위주, 1 = 산지·품종·생산자·상식 위주 (30레벨 전체에 걸쳐 오른다) */
  adv: number;
}

function spec(level: Level, stage: number): Spec {
  const c = CURVE[level];
  const k = (Math.min(STAGES, Math.max(1, stage)) - 1) / (STAGES - 1);
  const lerp = (a: number, b: number) => a + (b - a) * k;
  return {
    weight: { 1: lerp(c.from[1], c.to[1]), 2: lerp(c.from[2], c.to[2]), 3: lerp(c.from[3], c.to[3]) },
    similar: lerp(c.similar[0], c.similar[1]),
    adv: (BASE[level] + stage - 1) / (3 * STAGES - 1),
  };
}

export const levelName = (l: Level) => t(`lvl_${l}` as UIKey);
export const levelAbout = (l: Level) => t(`lvl_${l}_about` as UIKey);
export const qtypeLabel = (q: QType) => t(`q_${q}` as UIKey);

export interface Option {
  label: string;
  sub?: string;
}

export type HintKey = "country" | "region" | "grape" | "initial" | "type";
export const hintLabel = (h: HintKey) => t(`h_${h}` as UIKey);

export interface Question {
  wine: Wine;
  qtype: QType;
  prompt: string;
  options: Option[];
  answer: number;
  hide: Hide;
  vintage: string | null;
  hints: HintKey[];
}

export function hintText(w: Wine, h: HintKey): string {
  switch (h) {
    case "country":
      return countryName(w.country);
    case "region":
      return regionName(w);
    case "grape":
      return grapeName(w);
    case "type":
      return typeName(w.type);
    case "initial":
      return initialOf(w);
  }
}

function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

const firstGrape = (g: string) => g.split(/[·,]/)[0].trim();
/** 품종 구성 (순서만 다른 "카베르네 소비뇽 · 메를로" 와 "메를로 · 카베르네 소비뇽" 은 같다) */
const grapeSet = (g: string) =>
  g
    .split(/[·,]/)
    .map((x) => x.trim())
    .sort()
    .join("|");
const TYPES: WineType[] = ["red", "white", "rose", "sparkling", "sweet", "fortified"];

/**
 * 종류 문제에서 오답으로 내면 안 되는 종류: 스파클링·스위트·주정강화는 색(레드·화이트·로제)과 겹치고
 * (스파클링 로제에 "로제", 소테른에 "화이트"), 주정강화는 대개 달다 (포트에 "스위트")
 */
function alsoTrue(w: Wine): WineType[] {
  if (w.type !== "sparkling" && w.type !== "sweet" && w.type !== "fortified") return [];
  const color: WineType = ["red", "redLight", "port"].includes(w.liquid) ? "red" : ["rose", "rosePale"].includes(w.liquid) ? "rose" : "white";
  return w.type === "fortified" ? [color, "sweet"] : [color];
}

// ── 라벨에 보이는 이름이 답을 드러내는지
// 이름을 묻지 않는 문제는 라벨의 이름을 보여 주므로, 이름에 산지·품종이 들어 있으면 그 문제는 답이 보인다
// (예: "Robert Mondavi Napa Valley Cabernet Sauvignon" 의 산지, "Montes Alpha Syrah" 의 품종).
const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
/** 라벨에 적히거나 보기·해설에 뜨는 이름 전부 (원어 이름·라벨 이름·생산자) */
const labelText = (w: Wine) => fold(`${w.original} ${w.labelName ?? ""} ${w.maker ?? ""}`);
function hasWord(hay: string, word: string) {
  const k = fold(word).trim();
  if (k.length < 3) return false;
  const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${esc}($|[^a-z0-9])`).test(hay);
}
/** 같은 품종의 다른 이름 (라벨에는 나라마다 다르게 적힌다) */
const GRAPE_ALIAS: Record<string, string[]> = {
  syrah: ["shiraz"],
  shiraz: ["syrah"],
  grenache: ["garnacha", "cannonau"],
  garnacha: ["grenache"],
  zinfandel: ["primitivo"],
  primitivo: ["zinfandel"],
  "pinot gris": ["pinot grigio"],
  "pinot grigio": ["pinot gris"],
};
/** 산지 이름(원어) → 그 산지가 있는 나라. 와인 이름에 같은 나라의 다른 산지가 들어 있어도 나라·산지의 단서가 된다 (La Marca Prosecco) */
let PLACE_COUNTRY: Map<string, string> | null = null;
function placeCountry() {
  if (PLACE_COUNTRY) return PLACE_COUNTRY;
  PLACE_COUNTRY = new Map();
  for (const x of WINES)
    for (const k of [x.area, x.sub]) {
      const en = k ? REGION_EN[k] : "";
      if (en && en.length >= 4) PLACE_COUNTRY.set(en, x.country);
    }
  for (const [word, c] of [
    ["Port", "포르투갈"],
    ["Porto", "포르투갈"],
    ["Sherry", "스페인"],
    ["Jerez", "스페인"],
    ["Prosecco", "이탈리아"],
    ["Chianti", "이탈리아"],
    ["Tokaji", "헝가리"],
  ] as const)
    PLACE_COUNTRY.set(word, c);
  return PLACE_COUNTRY;
}

const nameShowsCache = new Map<string, { region: boolean; grape: boolean }>();
/** 이름에 이 와인의 산지(또는 같은 나라의 다른 산지 = 나라·산지의 단서)·품종이 적혀 있는지 */
function nameShows(w: Wine) {
  let r = nameShowsCache.get(w.id);
  if (r) return r;
  const hay = labelText(w);
  const places = [w.sub ? REGION_EN[w.sub] : "", REGION_EN[w.area] ?? ""].filter(Boolean);
  for (const [word, c] of placeCountry()) if (c === w.country) places.push(word);
  const grapes = w.grape
    .split(/[·,]/)
    .map((g) => GRAPE_EN[g.trim().replace(/\s*(블렌드|등.*)$/, "")] ?? "")
    .filter(Boolean)
    .flatMap((g) => {
      const k = fold(g);
      // "Cabernet" 만 적혀 있어도 카베르네 소비뇽이라는 걸 안다: 긴 첫 단어도 본다
      const first = k.split(" ")[0];
      return [k, ...(GRAPE_ALIAS[k] ?? []), ...(first.length >= 6 && first !== k ? [first] : [])];
    });
  r = { region: places.some((x) => hasWord(hay, x)), grape: grapes.some((x) => hasWord(hay, x)) };
  nameShowsCache.set(w.id, r);
  return r;
}
/** 이 와인에 이 유형을 내도 답이 라벨 이름에 보이지 않는지 */
function fair(w: Wine, q: QType) {
  const n = nameShows(w);
  if (q === "region" || q === "country") return !n.region;
  if (q === "grape") return !n.grape;
  return true;
}

/** 문제로 낼 수 있는 유형과 비중 (와인마다 다르고, 레벨이 오를수록 산지·품종·생산자·상식 문제가 늘어난다) */
function qtypesFor(w: Wine, level: Level, adv: number): [QType, number][] {
  const easy = 1 - adv * 0.7;
  const out: [QType, number][] = [
    ["name", 2],
    ["country", 1.5 * easy + 0.2],
    ["region", 0.6 + adv * 1.4],
    ["grape", 0.3 + adv * 1.2],
  ];
  if (level !== "hard") out.push(["type", easy]);
  if (w.producerQ && hasProducer(w)) out.push(["producer", 0.2 + adv * 1.8]);
  if (SHAPES[w.shape].family) out.push(["shape", 0.5 + adv * 0.5]);
  if (quizOf(w).length) out.push(["trivia", 0.5 + adv * 3]);
  return out.filter(([q]) => fair(w, q));
}

function pickWeighted<T>(items: [T, number][]): T {
  let total = 0;
  for (const [, w] of items) total += w;
  let r = Math.random() * total;
  for (const [x, w] of items) {
    r -= w;
    if (r <= 0) return x;
  }
  return items[items.length - 1][0];
}

function valueOf(w: Wine, q: QType): string {
  switch (q) {
    case "name":
      return wineName(w);
    case "country":
      return countryName(w.country);
    case "region":
      return regionName(w);
    case "grape":
      return grapeName(w);
    case "type":
      return typeName(w.type);
    case "producer":
      return producerOf(w);
    case "shape":
      return familyName(SHAPES[w.shape].family!);
    case "trivia":
      return "";
  }
}

/** 헷갈리는 정도: 높을수록 비슷한 와인 */
function similarity(a: Wine, b: Wine): number {
  let s = 0;
  if (a.country === b.country) s += 2;
  if (a.area === b.area) s += 3;
  if (a.sub && a.sub === b.sub) s += 2;
  if (a.type === b.type) s += 2;
  if (SHAPES[a.shape].family === SHAPES[b.shape].family) s += 2;
  if (a.glass === b.glass) s += 1;
  if (firstGrape(a.grape) === firstGrape(b.grape)) s += 1;
  return s + Math.random() * 2.5;
}

function distractors(w: Wine, q: QType, n: number, similar: number, tiers: number[]): Option[] {
  const correct = valueOf(w, q);
  // 생산자 보기는 생산자 이름이 있는 와인에서만 (없으면 producerOf 가 와인 이름을 돌려줘 티가 난다)
  const pool = WINES.filter((x) => x.id !== w.id && (q !== "producer" || hasProducer(x)));
  const seen = new Set([correct]);
  const out: Option[] = [];
  const push = (label: string, sub?: string) => {
    if (!label || seen.has(label) || out.length >= n) return;
    if (q === "grape" && (firstGrape(label) === firstGrape(correct) || grapeSet(label) === grapeSet(correct))) return;
    // "보르도" 와 "보르도 · 소테른" 처럼 한쪽이 다른 쪽의 세부 산지면 둘 다 맞는 답이 된다
    if (q === "region" && (correct.startsWith(`${label} · `) || label.startsWith(`${correct} · `))) return;
    seen.add(label);
    out.push({ label, sub });
  };

  if (q === "type") {
    const skip = alsoTrue(w);
    for (const ty of shuffle(TYPES)) if (!skip.includes(ty)) push(typeName(ty));
    return out;
  }
  if (q === "shape") {
    for (const f of shuffle(Object.keys(FAMILIES) as FamilyId[])) push(familyName(f));
    return out;
  }

  // 레벨이 높을수록 비슷한 와인에서 보기를 뽑는다 (가장 비슷한 와인 몇 개 중에서 고를지가 점점 좁아진다)
  const ranked =
    similar < 0.15
      ? shuffle(pool)
      : shuffle(
          pool
            .map((x) => ({ x, s: similarity(w, x) * (1 + similar * 0.6) }))
            .sort((a, b) => b.s - a.s)
            .slice(0, Math.round(400 - 370 * similar))
            .map((o) => o.x),
        );
  const tierOk = (x: Wine) => tiers.includes(x.tier);
  for (const x of ranked) if (tierOk(x)) push(valueOf(x, q), q === "name" ? wineSub(x) : undefined);
  for (const x of shuffle(pool)) push(valueOf(x, q), q === "name" ? wineSub(x) : undefined);
  return out;
}

const BY_ID = new Map(WINES.map((w) => [w.id, w]));

function pickWine(weight: Tiers, used: Set<string>): Wine {
  // 등급별 비중에 맞춰 뽑는다 (등급마다 와인 수가 달라도 비중이 유지되게 등급 수로 나눈다)
  const count: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  for (const w of WINES) count[w.tier]++;
  // 한 판에 같은 생산자가 몰리지 않게 (몬테스만 네 병 같은 판) 이미 나온 생산자는 빼고 뽑는다
  const makers = new Set([...used].map((id) => BY_ID.get(id)?.producer));
  const fresh = WINES.filter((w) => weight[w.tier] > 0 && !used.has(w.id) && !makers.has(w.producer));
  const pool = fresh.length ? fresh : WINES.filter((w) => weight[w.tier] > 0 && !used.has(w.id));
  const wOf = (w: Wine) => weight[w.tier] / Math.max(1, count[w.tier]);
  let total = 0;
  for (const w of pool) total += wOf(w);
  let r = Math.random() * total;
  for (const w of pool) {
    r -= wOf(w);
    if (r <= 0) return w;
  }
  return pool[pool.length - 1] ?? WINES[Math.floor(Math.random() * WINES.length)];
}

/** 단계·레벨의 난이도에 맞춰 문제 하나를 무작위로 낸다 (한 판 안에서 같은 와인은 다시 나오지 않는다) */
export function makeQuestion(level: Level, stage: number, used: Set<string>, recentTypes: QType[]): Question {
  const sp = spec(level, stage);
  const w = pickWine(sp.weight, used);
  // 같은 유형이 연달아 나오지 않게
  let types = qtypesFor(w, level, sp.adv);
  const last = recentTypes[recentTypes.length - 1];
  if (last && types.some(([q]) => q !== last)) types = types.filter(([q]) => q !== last);
  const qtype = pickWeighted(types);
  const qs = quizOf(w);
  const trivia = qtype === "trivia" ? qs[Math.floor(Math.random() * qs.length)] : undefined;
  // 오답 보기도 이 레벨에 자주 나오는 등급의 와인에서 (입문 초반에 낯선 와인이 오답이면 너무 쉽게 걸러진다)
  const top = Math.max(sp.weight[1], sp.weight[2], sp.weight[3]);
  const tiers = [1, 2, 3].filter((t) => sp.weight[t] >= top * 0.25 || t === w.tier);
  return buildQuestion(w, qtype, level, trivia, sp.similar, tiers);
}

/** 한 와인에 대해 낼 수 있는 문제를 전부 (와인별 퀴즈) */
export function wineQuiz(w: Wine, level: Level): Question[] {
  const base: QType[] = ["name", "country", "region", "grape", "type"];
  if (w.producerQ && hasProducer(w)) base.push("producer");
  if (SHAPES[w.shape].family) base.push("shape");
  const qs = base.filter((q) => fair(w, q)).map((q) => buildQuestion(w, q, level));
  for (const tr of quizOf(w)) qs.push(buildQuestion(w, "trivia", level, tr));
  // 이름 문제는 맨 앞, 나머지는 섞는다
  return [qs[0], ...shuffle(qs.slice(1))];
}

/** similar: 오답 보기를 얼마나 비슷한 와인에서 뽑을지 (기본값은 단계 중간 레벨 수준) */
export function buildQuestion(w: Wine, qtype: QType, level: Level, trivia?: Trivia, similar = spec(level, 5).similar, tiers = LEVELS[level].tiers): Question {
  const L = LEVELS[level];
  let options: Option[];
  let correct: Option;
  if (qtype === "trivia" && trivia) {
    correct = { label: trivia.a };
    options = shuffle([correct, ...trivia.x.map((label) => ({ label }))]);
  } else {
    correct = { label: valueOf(w, qtype), sub: qtype === "name" ? wineSub(w) : undefined };
    options = shuffle([correct, ...distractors(w, qtype, L.options - 1, similar, tiers)]);
  }
  const answer = options.indexOf(correct);

  // 이름·생산자를 묻는 문제는 이름을 가리고 산지 글자를 단서로 남긴다.
  // 소믈리에 난이도에서는 라벨 그림만으로 알아볼 수 있는 전용 라벨 와인에 한해 산지 글자까지 가린다.
  // 나머지 문제는 이름을 보여 주고 답이 되는 산지·품종 글자를 가린다.
  const asksName = qtype === "name" || qtype === "producer";
  // 산지 이름이 곧 와인 이름인 경우(예: "Pascal Jolivet Sancerre" 의 Appellation Sancerre)는 산지 글자도 함께 가린다
  const hide: Hide = asksName ? { name: true, info: (level === "hard" && w.id in SIGNATURE) || nameShows(w).region } : { name: false, info: true };

  const hints: HintKey[] = [];
  // 첫 글자 힌트는 와인 이름의 첫 글자라 이름 문제에만 (생산자 문제에서는 엉뚱한 글자이고 이름까지 드러낸다)
  if (qtype === "name") hints.push("initial");
  if (qtype !== "country" && qtype !== "region") hints.push("country");
  if (qtype !== "region") hints.push("region");
  if (qtype !== "grape") hints.push("grape");
  if (qtype === "shape") hints.push("type");

  const prompt = qtype === "trivia" && trivia ? trivia.q : t(`p_${qtype}` as UIKey);
  return { wine: w, qtype, prompt, options, answer, hide, vintage: pickVintage(w), hints: qtype === "trivia" ? [] : hints.slice(0, 3) };
}
