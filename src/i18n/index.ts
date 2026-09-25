// 언어 선택: 저장된 선택 → 브라우저 언어 → 시간대(접속 지역) → 영어
import { UI, LANG_NAMES, type Dict, type Lang, type UIKey } from "./ui";
import { GRAPE_EN, REGION_EN, grapeLabel } from "../data/lang";
import { regionOf, type Trivia, type Wine, type WineType } from "../data/wines";
import type { FamilyId } from "../bottle/shapes";

export type { Lang, UIKey };
export { LANG_NAMES };

const KEY = "blind-bottle:lang";
const SUPPORTED = Object.keys(UI) as Lang[];

const TZ: [RegExp, Lang][] = [
  [/^Asia\/Seoul/, "ko"],
  [/^Asia\/(Tokyo)/, "ja"],
  [/^Asia\/(Shanghai|Hong_Kong|Taipei|Macau|Chongqing|Harbin|Urumqi)/, "zh"],
  [/^Europe\/(Paris|Brussels|Luxembourg|Monaco)|^America\/Montreal/, "fr"],
  [/^Europe\/(Berlin|Vienna|Zurich|Busingen)/, "de"],
  [/^Europe\/(Rome|San_Marino|Vatican)/, "it"],
  [/^Europe\/(Madrid)|^Atlantic\/Canary|^America\/(Mexico_City|Bogota|Lima|Santiago|Argentina|Buenos_Aires|Caracas|Montevideo|Asuncion|La_Paz|Guayaquil|Havana|Panama|Costa_Rica|Guatemala)/, "es"],
  [/^Europe\/Lisbon|^Atlantic\/(Madeira|Azores)|^America\/(Sao_Paulo|Bahia|Fortaleza|Recife|Manaus|Belem)/, "pt"],
];

function detect(): Lang {
  try {
    const saved = localStorage.getItem(KEY) as Lang | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    // 저장소를 못 쓰면 감지로 넘어간다
  }
  for (const l of navigator.languages ?? [navigator.language]) {
    const code = l.toLowerCase().split("-")[0] as Lang;
    if (SUPPORTED.includes(code)) return code;
  }
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  for (const [re, l] of TZ) if (re.test(tz)) return l;
  return "en";
}

let current: Lang = detect();
document.documentElement.lang = current;

export const lang = () => current;

export function setLang(l: Lang) {
  current = l;
  document.documentElement.lang = l;
  try {
    localStorage.setItem(KEY, l);
  } catch {
    // 무시
  }
}

export function t(key: UIKey, vars?: Record<string, string | number>): string {
  let s = (UI[current] as Dict)[key] ?? UI.en[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(typeof v === "number" ? v.toLocaleString(current) : v));
  return s;
}

// ───────────────────────── 와인 정보 현지화

/** 언어별 와인 해설·전용 문제 (없으면 그 언어에서는 전용 문제를 내지 않는다) */
export interface WineText {
  producer?: string;
  fact: string;
  quiz?: Trivia[];
}

const loaders = import.meta.glob<{ default: Record<string, WineText> }>("./wines/*/index.ts");
const loaded: Partial<Record<Lang, Record<string, WineText>>> = {};

async function loadOne(l: Lang) {
  if (loaded[l]) return;
  const load = loaders[`./wines/${l}/index.ts`];
  if (!load) return;
  try {
    loaded[l] = (await load()).default;
  } catch {
    loaded[l] = {};
  }
}

/** 고른 언어의 해설·전용 문제를 불러온다. 생산자 원어 표기는 영어 파일에 있어 함께 불러 둔다. */
export async function loadWineTexts(l: Lang = current) {
  if (l === "ko") return;
  await Promise.all([loadOne(l), loadOne("en")]);
}

const COUNTRY_CODE: Record<string, string> = {
  프랑스: "FR",
  이탈리아: "IT",
  스페인: "ES",
  포르투갈: "PT",
  독일: "DE",
  오스트리아: "AT",
  헝가리: "HU",
  미국: "US",
  호주: "AU",
  뉴질랜드: "NZ",
  칠레: "CL",
  아르헨티나: "AR",
  남아프리카공화국: "ZA",
  캐나다: "CA",
  레바논: "LB",
  이스라엘: "IL",
  그리스: "GR",
  조지아: "GE",
  일본: "JP",
  중국: "CN",
  우루과이: "UY",
  영국: "GB",
  슬로베니아: "SI",
  크로아티아: "HR",
  몰도바: "MD",
  스위스: "CH",
  브라질: "BR",
  멕시코: "MX",
  아르메니아: "AM",
  루마니아: "RO",
  불가리아: "BG",
  세르비아: "RS",
  북마케도니아: "MK",
  튀르키예: "TR",
  키프로스: "CY",
  룩셈부르크: "LU",
  체코: "CZ",
  슬로바키아: "SK",
  페루: "PE",
  인도: "IN",
  대한민국: "KR",
};

const regionNames = new Map<Lang, Intl.DisplayNames>();
export function countryName(ko: string): string {
  if (current === "ko") return ko;
  const code = COUNTRY_CODE[ko];
  if (!code) return ko;
  let dn = regionNames.get(current);
  if (!dn) {
    try {
      dn = new Intl.DisplayNames([current], { type: "region" });
      regionNames.set(current, dn);
    } catch {
      return code;
    }
  }
  return dn.of(code) ?? ko;
}

export function typeName(ty: WineType) {
  return t(`t_${ty}` as UIKey);
}

export function familyName(f: FamilyId) {
  return t(`f_${f}` as UIKey);
}

export function familyAbout(f: FamilyId) {
  return t(`f_${f}_a` as UIKey);
}

const textOf = (w: Wine): WineText | undefined => loaded[current]?.[w.id];

/** 원어 이름. 부르고뉴처럼 같은 밭 이름을 여러 생산자가 쓰면 생산자를 앞에 붙여 구분한다 */
export function originalFull(w: Wine) {
  return w.maker && !w.original.includes(w.maker) ? `${w.maker} ${w.original}` : w.original;
}

/** 화면에 보일 와인 이름 */
export function wineName(w: Wine) {
  return current === "ko" ? w.name : originalFull(w);
}

/** 이름 아래 작은 글씨 (한국어일 때만 원어) */
export function wineSub(w: Wine) {
  return current === "ko" ? originalFull(w) : undefined;
}

export function producerOf(w: Wine) {
  if (current === "ko") return w.producer;
  return textOf(w)?.producer ?? loaded.en?.[w.id]?.producer ?? w.maker ?? w.original;
}

// 라벨용 표기(Appellation … Contrôlée 에 들어가는 이름)와 화면에 보일 산지 이름이 다른 것들
const REGION_SHOW: Record<string, string> = {
  론: "Rhône",
  생테밀리옹: "Saint-Émilion",
  발폴리첼라: "Valpolicella",
  키안티: "Chianti",
  헤레스: "Jerez",
  뮈스카데: "Muscadet",
  "포르투갈 북부": "Norte",
};
const regionShow = (ko: string) => REGION_SHOW[ko] ?? REGION_EN[ko] ?? ko;

export function regionName(w: Wine) {
  if (current === "ko") return regionOf(w);
  const a = regionShow(w.area);
  const s = w.sub ? regionShow(w.sub) : "";
  return s && s !== a ? `${a} · ${s}` : a;
}

export function grapeName(w: Wine) {
  if (current === "ko") return w.grape;
  return grapeLabel(w.grape) || w.grape.split(/[·,]/).map((g) => GRAPE_EN[g.trim()] ?? g.trim()).join(" · ");
}

export function factOf(w: Wine) {
  if (current === "ko") return w.fact;
  return textOf(w)?.fact ?? "";
}

export function quizOf(w: Wine): Trivia[] {
  if (current === "ko") return w.quiz ?? [];
  return textOf(w)?.quiz ?? [];
}

/** 첫 글자 힌트 */
export function initialOf(w: Wine) {
  const first = w.original.replace(/^(Château|Domaine|Clos|Bodegas?|Tenuta|Castello|Weingut|Quinta|Viña|Cantina|Maison|Schloss)\s+/, "").replace(/[^\p{L}\p{N}]/gu, "")[0] ?? "";
  return current === "ko" ? `${[...w.name][0]}… (${first}…)` : `${first}…`;
}
