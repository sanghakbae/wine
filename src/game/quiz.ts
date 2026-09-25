import { FAMILIES, SHAPES, type FamilyId } from "../bottle/shapes";
import { pickVintage } from "../data/vintage";
import { WINES, type Trivia, type Wine, type WineType } from "../data/wines";
import type { Hide } from "../label/painter";
import { SIGNATURE } from "../label/designs/signature";
import { countryName, familyName, hasProducer, grapeName, initialOf, producerOf, quizOf, regionName, t, typeName, wineName, wineSub, type UIKey } from "../i18n";

export type QType = "name" | "country" | "region" | "grape" | "type" | "producer" | "shape" | "trivia";
export type Level = "easy" | "normal" | "hard";

/** weight: 등급(1 대중적·2 유명·3 애호가용)별 출제 비중 */
export const LEVELS: Record<Level, { options: number; tiers: number[]; weight: Record<number, number>; hintCost: number }> = {
  easy: { options: 4, tiers: [1, 2], weight: { 1: 1, 2: 0.2, 3: 0 }, hintCost: 20 },
  normal: { options: 4, tiers: [1, 2, 3], weight: { 1: 0.5, 2: 1, 3: 0.5 }, hintCost: 30 },
  hard: { options: 6, tiers: [1, 2, 3], weight: { 1: 0.3, 2: 1, 3: 1 }, hintCost: 40 },
};

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

/** 문제로 낼 수 있는 유형들 (와인마다 다르다) */
function qtypesFor(w: Wine, level: Level): QType[] {
  const out: QType[] = ["name", "name", "country", "region", "region", "grape"];
  if (level !== "hard") out.push("type");
  if (w.producerQ && hasProducer(w)) out.push("producer", "producer");
  if (SHAPES[w.shape].family) out.push("shape");
  if (quizOf(w).length) out.push("trivia", "trivia", "trivia");
  return out;
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

function distractors(w: Wine, q: QType, level: Level, n: number): Option[] {
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

  // 난이도가 높을수록 비슷한 와인에서 보기를 뽑는다
  const ranked =
    level === "easy"
      ? shuffle(pool)
      : pool
          .map((x) => ({ x, s: similarity(w, x) * (level === "hard" ? 1.6 : 1) }))
          .sort((a, b) => b.s - a.s)
          .slice(0, level === "hard" ? 40 : 80)
          .sort(() => Math.random() - 0.5)
          .map((o) => o.x);
  const tierOk = (x: Wine) => LEVELS[level].tiers.includes(x.tier);
  for (const x of ranked) if (tierOk(x)) push(valueOf(x, q), q === "name" ? wineSub(x) : undefined);
  for (const x of shuffle(pool)) push(valueOf(x, q), q === "name" ? wineSub(x) : undefined);
  return out;
}

function pickWine(level: Level, used: Set<string>): Wine {
  const L = LEVELS[level];
  // 등급별 비중에 맞춰 뽑는다 (등급마다 와인 수가 달라도 비중이 유지되게 등급 수로 나눈다)
  const count: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  for (const w of WINES) count[w.tier]++;
  const pool = WINES.filter((w) => L.weight[w.tier] > 0 && !used.has(w.id));
  const wOf = (w: Wine) => L.weight[w.tier] / Math.max(1, count[w.tier]);
  let total = 0;
  for (const w of pool) total += wOf(w);
  let r = Math.random() * total;
  for (const w of pool) {
    r -= wOf(w);
    if (r <= 0) return w;
  }
  return pool[pool.length - 1] ?? WINES[Math.floor(Math.random() * WINES.length)];
}

export function makeQuestion(level: Level, used: Set<string>, recentTypes: QType[]): Question {
  const w = pickWine(level, used);
  // 같은 유형이 연달아 나오지 않게
  let types = qtypesFor(w, level);
  const last = recentTypes[recentTypes.length - 1];
  if (last && types.some((q) => q !== last)) types = types.filter((q) => q !== last);
  const qtype = types[Math.floor(Math.random() * types.length)];
  const qs = quizOf(w);
  const trivia = qtype === "trivia" ? qs[Math.floor(Math.random() * qs.length)] : undefined;
  return buildQuestion(w, qtype, level, trivia);
}

/** 한 와인에 대해 낼 수 있는 문제를 전부 (와인별 퀴즈) */
export function wineQuiz(w: Wine, level: Level): Question[] {
  const base: QType[] = ["name", "country", "region", "grape", "type"];
  if (w.producerQ && hasProducer(w)) base.push("producer");
  if (SHAPES[w.shape].family) base.push("shape");
  const qs = base.map((q) => buildQuestion(w, q, level));
  for (const tr of quizOf(w)) qs.push(buildQuestion(w, "trivia", level, tr));
  // 이름 문제는 맨 앞, 나머지는 섞는다
  return [qs[0], ...shuffle(qs.slice(1))];
}

export function buildQuestion(w: Wine, qtype: QType, level: Level, trivia?: Trivia): Question {
  const L = LEVELS[level];
  let options: Option[];
  let correct: Option;
  if (qtype === "trivia" && trivia) {
    correct = { label: trivia.a };
    options = shuffle([correct, ...trivia.x.map((label) => ({ label }))]);
  } else {
    correct = { label: valueOf(w, qtype), sub: qtype === "name" ? wineSub(w) : undefined };
    options = shuffle([correct, ...distractors(w, qtype, level, L.options - 1)]);
  }
  const answer = options.indexOf(correct);

  // 이름·생산자를 묻는 문제는 이름을 가리고 산지 글자를 단서로 남긴다.
  // 소믈리에 난이도에서는 라벨 그림만으로 알아볼 수 있는 전용 라벨 와인에 한해 산지 글자까지 가린다.
  // 나머지 문제는 이름을 보여 주고 답이 되는 산지·품종 글자를 가린다.
  const asksName = qtype === "name" || qtype === "producer";
  const hide: Hide = asksName ? { name: true, info: level === "hard" && w.id in SIGNATURE } : { name: false, info: true };

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
