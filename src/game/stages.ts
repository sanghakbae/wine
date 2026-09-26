// 레벨 진행 기록의 모양과 합치는 규칙 (기기 캐시·서버 저장이 함께 쓴다)
import { MAX_POINTS, STAGES, STAGE_ROUNDS, type Level } from "./quiz";

/** 한 단계의 레벨 진행: c[i] = Lv.i+1 에서 가장 많이 맞힌 수, s[i] = 그 레벨 최고 점수 */
export interface StageProg {
  c: number[];
  s: number[];
}
export type Stages = Record<Level, StageProg>;

/** 단계 하나의 요약 (랭킹에 오르는 값): 클리어한 레벨 수, 별, 클리어한 레벨 최고 점수의 합 */
export interface Summary {
  cleared: number;
  stars: number;
  pts: number;
}

export const LEVEL_IDS: Level[] = ["easy", "normal", "hard"];
const zeros = () => Array.from({ length: STAGES }, () => 0);
export const emptyStages = (): Stages => ({ easy: { c: zeros(), s: zeros() }, normal: { c: zeros(), s: zeros() }, hard: { c: zeros(), s: zeros() } });

/** 저장된 값(기기·서버)을 믿을 수 있는 정수 범위로 */
export const clampInt = (v: unknown, max: number) => {
  const n = Math.floor(Number(v));
  return Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : 0;
};

/** 두 진행을 레벨마다 큰 값으로 합친다 (기록은 줄어들지 않는다) */
export function mergeStages(a: Partial<Record<Level, Partial<StageProg>>> | undefined, into: Stages): Stages {
  for (const l of LEVEL_IDS) {
    const p = a?.[l];
    if (!p) continue;
    for (let i = 0; i < STAGES; i++) {
      into[l].c[i] = Math.max(into[l].c[i], clampInt(p.c?.[i], STAGE_ROUNDS));
      into[l].s[i] = Math.max(into[l].s[i], clampInt(p.s?.[i], STAGE_ROUNDS * MAX_POINTS));
    }
  }
  return into;
}

