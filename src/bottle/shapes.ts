// 병 모양 — 모든 치수는 cm. 옆에서 본 윤곽(반지름 r, 높이 y)을 바닥 중심에서
// 바깥 벽을 따라 입구 중심까지 이어 둔 점 목록을 LatheGeometry 로 돌려 만든다.

export type Pt = [r: number, y: number];

export type ShapeId =
  | "bordeaux"
  | "bordeauxHeavy"
  | "burgundy"
  | "champagne"
  | "cristal"
  | "domPerignon"
  | "ruinart"
  | "belleEpoque"
  | "flute"
  | "icewine"
  | "tokaji"
  | "port"
  | "sherry"
  | "fiasco"
  | "bocksbeutel"
  | "mateus"
  | "skittle";

/** 병 모양 문제에 쓰는 계열. null 이면 그 병은 병 모양 문제에 나오지 않는다. */
export type FamilyId =
  | "bordeaux"
  | "burgundy"
  | "champagne"
  | "flute"
  | "fiasco"
  | "bocksbeutel"
  | "port"
  | "tokaji"
  | "flask"
  | "skittle";

export const FAMILIES: Record<FamilyId, { name: string; about: string }> = {
  bordeaux: { name: "보르도형", about: "곧은 원통 몸통에 각진 어깨. 따를 때 침전물이 어깨에 걸린다고 해서 숙성형 레드에 많이 쓴다." },
  burgundy: { name: "부르고뉴형", about: "어깨가 완만하게 흘러내리는 넓은 병. 피노 누아·샤르도네의 고향 병이다." },
  champagne: { name: "샴페인형", about: "두꺼운 유리와 깊은 펀트(바닥 홈)로 6기압 가까운 압력을 견딘다." },
  flute: { name: "플뤼트형", about: "길고 가느다란 병. 알자스와 독일 리슬링의 전통 병이다." },
  fiasco: { name: "피아스코", about: "둥근 바닥을 짚으로 감싼 토스카나 전통 병." },
  bocksbeutel: { name: "복스보이텔", about: "납작하고 둥근 병. 독일 프랑켄 지방 와인만 쓸 수 있도록 보호받는다." },
  port: { name: "포트형", about: "짙은 색 유리에 병목이 볼록한 전통 포트 병." },
  tokaji: { name: "토카이형", about: "500ml 투명 병에 목이 길다. 헝가리 토카이 스위트 와인의 전통 병이다." },
  flask: { name: "플라스크형", about: "군용 수통처럼 옆이 납작한 병." },
  skittle: { name: "퀼(볼링핀)형", about: "허리가 잘록한 곡선 병. 프로방스 로제에서 쓰인다." },
};

export interface ShapeDef {
  family: FamilyId | null;
  pts: Pt[];
  /** 입구 윗면 높이 */
  top: number;
  /** 목이 시작되는 높이 (어깨 끝) */
  neckY: number;
  /** 몸통이 끝나고 어깨가 시작되는 높이 */
  bodyTop: number;
  /** 몸통 반지름 (라벨 폭 계산용) */
  R: number;
  /** 와인이 차 있는 높이 */
  fill: number;
  /** 옆으로 납작한 병 (복스보이텔·마테우스): 몸통 쪽 z 축 배율 */
  flatten?: { k: number; y0: number; y1: number };
  /** 샴페인 계열: 코르크 머리가 포일 속에서 부풀어 있다 */
  sparkling?: boolean;
}

interface StdOpts {
  H: number;
  R: number;
  Rb?: number;
  bodyTop: number;
  neckY: number;
  neckR: number;
  /** 어깨 곡선이 몸통 쪽에서 얼마나 오래 버티는지. 클수록 둥글고 높은 어깨 */
  skew: number;
  punt: number;
  lipR: number;
  lipH: number;
  bulge?: { y: number; r: number; h: number };
  family: FamilyId | null;
  sparkling?: boolean;
  fill?: number;
}

function standard(o: StdOpts): ShapeDef {
  const { H, R, neckR, bodyTop, neckY, punt } = o;
  const Rb = o.Rb ?? R;
  const pts: Pt[] = [];
  // 바닥: 펀트(안으로 솟은 홈)와 굽
  if (punt > 0.05) {
    pts.push([0, punt], [Rb * 0.35, punt * 0.95], [Rb * 0.6, punt * 0.7], [Rb * 0.76, punt * 0.3], [Rb * 0.86, 0.08]);
  } else {
    pts.push([0, 0.12], [Rb * 0.5, 0.05], [Rb * 0.86, 0.02]);
  }
  pts.push([Rb * 0.93, 0], [Rb * 0.985, 0.18], [Rb, 0.7]);
  // 몸통 (아래 반지름에서 위 반지름으로 서서히)
  const bodySteps = Math.max(4, Math.round((bodyTop - 0.7) / 0.35));
  for (let i = 1; i <= bodySteps; i++) {
    const t = i / bodySteps;
    const y = 0.7 + (bodyTop - 0.7) * t;
    pts.push([Rb + (R - Rb) * Math.sin((t * Math.PI) / 2), y]);
  }
  // 어깨: 몸통·목 양쪽에 수직으로 이어지는 코사인 곡선. skew 로 볼록한 구간 길이를 조절
  const sh = Math.max(12, Math.round((neckY - bodyTop) / 0.3));
  for (let i = 1; i <= sh; i++) {
    const t = i / sh;
    const tt = Math.pow(t, o.skew);
    const f = 0.5 * (1 + Math.cos(Math.PI * tt));
    pts.push([neckR + (R - neckR) * f, bodyTop + (neckY - bodyTop) * t]);
  }
  // 목
  const lipY = H - o.lipH;
  const neckSteps = Math.max(6, Math.round((lipY - neckY) / 0.35));
  for (let i = 1; i <= neckSteps; i++) {
    const t = i / neckSteps;
    const y = neckY + (lipY - neckY) * t;
    let r = neckR * (1 - 0.04 * t);
    if (o.bulge) {
      const d = (y - o.bulge.y) / (o.bulge.h / 2);
      if (Math.abs(d) < 1) r += (o.bulge.r - neckR) * Math.cos((d * Math.PI) / 2) ** 2;
    }
    pts.push([r, y]);
  }
  // 입구 테두리(비드)
  pts.push([o.lipR * 0.97, lipY + 0.08], [o.lipR, lipY + 0.25], [o.lipR, H - 0.18], [o.lipR * 0.94, H], [neckR * 0.62, H], [0, H - 0.25]);
  return {
    family: o.family,
    pts,
    top: H,
    neckY,
    bodyTop,
    R,
    fill: o.fill ?? neckY + (lipY - neckY) * 0.45,
    sparkling: o.sparkling,
  };
}

function custom(family: FamilyId | null, pts: Pt[], meta: Omit<ShapeDef, "family" | "pts">): ShapeDef {
  return { family, pts, ...meta };
}

/** 원 둘레를 따라 점을 찍는다 (피아스코의 둥근 몸통). */
function arc(cx: number, cy: number, rad: number, a0: number, a1: number, n: number): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    out.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]);
  }
  return out;
}

export const SHAPES: Record<ShapeId, ShapeDef> = {
  bordeaux: standard({ family: "bordeaux", H: 30, R: 3.7, bodyTop: 19.4, neckY: 23.6, neckR: 1.45, skew: 1.55, punt: 2.2, lipR: 1.56, lipH: 0.85 }),
  bordeauxHeavy: standard({ family: "bordeaux", H: 31, R: 3.95, bodyTop: 19.8, neckY: 24.2, neckR: 1.5, skew: 1.7, punt: 3.3, lipR: 1.64, lipH: 0.9 }),
  sherry: standard({ family: "bordeaux", H: 31, R: 3.65, bodyTop: 18.4, neckY: 22.6, neckR: 1.42, skew: 1.35, punt: 1.9, lipR: 1.55, lipH: 0.85 }),
  burgundy: standard({ family: "burgundy", H: 29.5, R: 4.0, bodyTop: 12.2, neckY: 22.2, neckR: 1.45, skew: 1.0, punt: 1.8, lipR: 1.56, lipH: 0.85 }),
  champagne: standard({ family: "champagne", H: 29.2, R: 4.45, bodyTop: 13.8, neckY: 22.6, neckR: 1.55, skew: 0.95, punt: 3.4, lipR: 1.88, lipH: 0.95, sparkling: true }),
  cristal: standard({ family: "champagne", H: 29.2, R: 4.4, bodyTop: 14.5, neckY: 22.6, neckR: 1.55, skew: 1.05, punt: 0, lipR: 1.88, lipH: 0.95, sparkling: true }),
  domPerignon: standard({ family: "champagne", H: 29.2, R: 4.25, Rb: 4.5, bodyTop: 11.2, neckY: 22.3, neckR: 1.55, skew: 0.85, punt: 3.2, lipR: 1.86, lipH: 0.95, sparkling: true }),
  ruinart: standard({ family: "champagne", H: 28.4, R: 4.75, Rb: 4.15, bodyTop: 12.6, neckY: 20.4, neckR: 1.75, skew: 1.35, punt: 3.0, lipR: 2.02, lipH: 0.95, sparkling: true }),
  belleEpoque: standard({ family: "champagne", H: 29.2, R: 4.5, Rb: 4.05, bodyTop: 13.4, neckY: 22.8, neckR: 1.55, skew: 1.15, punt: 3.2, lipR: 1.86, lipH: 0.95, sparkling: true }),
  flute: standard({ family: "flute", H: 35, R: 3.85, bodyTop: 15, neckY: 26.8, neckR: 1.38, skew: 0.85, punt: 1.0, lipR: 1.5, lipH: 0.85 }),
  icewine: standard({ family: null, H: 33, R: 2.85, bodyTop: 17.5, neckY: 25.6, neckR: 1.22, skew: 0.9, punt: 0.8, lipR: 1.34, lipH: 0.8 }),
  tokaji: standard({ family: "tokaji", H: 29, R: 3.25, bodyTop: 15.8, neckY: 20.6, neckR: 1.32, skew: 1.45, punt: 1.2, lipR: 1.45, lipH: 0.8 }),
  port: standard({ family: "port", H: 30, R: 3.85, bodyTop: 18.8, neckY: 22.8, neckR: 1.5, skew: 1.5, punt: 2.8, lipR: 1.62, lipH: 0.9, bulge: { y: 25.3, r: 1.9, h: 2.0 } }),

  fiasco: custom(
    "fiasco",
    [
      [0, 0.45],
      [1.8, 0.12],
      ...arc(0, 7.1, 7.1, -Math.PI / 2 + 0.32, Math.PI / 2 - 0.62, 26).slice(0),
      [2.6, 13.9],
      [1.75, 15.1],
      [1.45, 16.4],
      [1.4, 22],
      [1.35, 30.6],
      [1.48, 30.8],
      [1.5, 31.8],
      [1.42, 32],
      [0.9, 32],
      [0, 31.8],
    ],
    { top: 32, neckY: 16.4, bodyTop: 7.1, R: 7.1, fill: 20 },
  ),

  bocksbeutel: custom(
    "bocksbeutel",
    [
      [0, 0.7],
      [2.2, 0.35],
      [3.4, 0],
      [4.6, 0.5],
      [6.1, 2.1],
      [7.0, 4.6],
      [7.25, 7.3],
      [6.95, 10.2],
      [5.95, 12.9],
      [4.2, 15.1],
      [2.4, 16.6],
      [1.6, 17.6],
      [1.42, 18.6],
      [1.38, 22.2],
      [1.52, 22.4],
      [1.54, 23.2],
      [1.42, 23.4],
      [0.9, 23.4],
      [0, 23.2],
    ],
    { top: 23.4, neckY: 18.2, bodyTop: 7.3, R: 7.25, fill: 19.6, flatten: { k: 0.5, y0: 13.5, y1: 17.8 } },
  ),

  mateus: custom(
    "flask",
    [
      [0, 0.6],
      [2.6, 0.2],
      [3.9, 0],
      [5.0, 0.6],
      [5.55, 2.4],
      [5.85, 5.8],
      [5.85, 9.8],
      [5.4, 13.2],
      [4.3, 15.9],
      [2.85, 18.0],
      [1.8, 19.5],
      [1.5, 20.6],
      [1.42, 23.8],
      [1.62, 24.1],
      [1.64, 24.9],
      [1.45, 25.1],
      [0.9, 25.1],
      [0, 24.9],
    ],
    { top: 25.1, neckY: 20.4, bodyTop: 9.8, R: 5.85, fill: 21.5, flatten: { k: 0.44, y0: 16.5, y1: 20.3 } },
  ),

  skittle: custom(
    "skittle",
    [
      [0, 1.3],
      [1.6, 1.05],
      [2.7, 0.45],
      [3.3, 0],
      [3.85, 0.55],
      [4.1, 2.6],
      [4.12, 5.4],
      [3.92, 8.8],
      [3.45, 12.4],
      [3.02, 15.6],
      [2.86, 17.6],
      [2.92, 19.3],
      [2.8, 20.9],
      [2.25, 22.6],
      [1.62, 24.0],
      [1.42, 25.4],
      [1.4, 29.6],
      [1.72, 30.0],
      [1.74, 30.8],
      [1.5, 31],
      [0.9, 31],
      [0, 30.8],
    ],
    { top: 31, neckY: 24.4, bodyTop: 5.4, R: 4.12, fill: 26 },
  ),
};

/** 바닥 굽부터 입구까지 y 가 늘어나기만 하는 바깥 벽 구간 */
export function wallOf(def: ShapeDef): Pt[] {
  const pts = smooth(def.pts);
  // 가장 낮은 점(굽)을 찾는다
  let foot = 0;
  let minY = Infinity;
  for (let i = 1; i < pts.length; i++) {
    if (pts[i][0] > 0.3 && pts[i][1] < minY) {
      minY = pts[i][1];
      foot = i;
    }
  }
  // 보간이 살짝 되돌아가는 점은 건너뛰고, 입구 윗면(가장 높은 점)에서 멈춘다
  let topIdx = foot;
  for (let i = foot; i < pts.length; i++) if (pts[i][1] > pts[topIdx][1] + 1e-6) topIdx = i;
  const out: Pt[] = [pts[foot]];
  for (let i = foot + 1; i <= topIdx; i++) {
    if (pts[i][1] <= out[out.length - 1][1] + 1e-4) continue;
    out.push(pts[i]);
  }
  return out;
}

/** 벽의 높이 y 에서의 반지름 */
export function radiusAt(wall: Pt[], y: number): number {
  if (y <= wall[0][1]) return wall[0][0];
  for (let i = 1; i < wall.length; i++) {
    const [r1, y1] = wall[i];
    if (y <= y1) {
      const [r0, y0] = wall[i - 1];
      const t = (y - y0) / (y1 - y0 || 1);
      return r0 + (r1 - r0) * t;
    }
  }
  return wall[wall.length - 1][0];
}

let profileStep = 0.22;
/** 윤곽 보간 간격(cm). 기기 성능에 맞춰 무대가 한 번 정한다 */
export function setProfileStep(step: number) {
  profileStep = step;
}

/** 제어점 사이를 구심(centripetal) Catmull-Rom 으로 메워 매끈한 윤곽을 만든다. 간격이 고르지 않아도 튀지 않는다. */
export function smooth(pts: Pt[]): Pt[] {
  const out: Pt[] = [];
  const n = pts.length;
  const knot = (a: Pt, b: Pt) => Math.max(1e-4, Math.sqrt(Math.hypot(b[0] - a[0], b[1] - a[1])));
  for (let i = 0; i < n - 1; i++) {
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p0 = i > 0 ? pts[i - 1] : ([2 * p1[0] - p2[0], 2 * p1[1] - p2[1]] as Pt);
    const p3 = i + 2 < n ? pts[i + 2] : ([2 * p2[0] - p1[0], 2 * p2[1] - p1[1]] as Pt);
    const t0 = 0;
    const t1 = t0 + knot(p0, p1);
    const t2 = t1 + knot(p1, p2);
    const t3 = t2 + knot(p2, p3);
    const per = Math.min(10, Math.max(1, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / profileStep)));
    for (let s = 0; s < per; s++) {
      const t = t1 + ((t2 - t1) * s) / per;
      const lerp = (a: Pt, b: Pt, ta: number, tb: number): Pt => {
        const k = (t - ta) / (tb - ta);
        return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
      };
      const a1 = lerp(p0, p1, t0, t1);
      const a2 = lerp(p1, p2, t1, t2);
      const a3 = lerp(p2, p3, t2, t3);
      const b1 = lerp(a1, a2, t0, t2);
      const b2 = lerp(a2, a3, t1, t3);
      const c = lerp(b1, b2, t1, t2);
      out.push([Math.max(0, c[0]), c[1]]);
    }
  }
  out.push(pts[n - 1]);
  return out;
}

/** 윤곽을 안쪽으로 t 만큼 들인다 (와인이 담긴 부피). y 가 fill 을 넘으면 거기서 수평으로 닫는다. */
export function insetProfile(def: ShapeDef, t: number): Pt[] {
  const pts = smooth(def.pts);
  const out: Pt[] = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(pts.length - 1, i + 1)];
    let dr = b[0] - a[0];
    let dy = b[1] - a[1];
    const len = Math.hypot(dr, dy) || 1;
    dr /= len;
    dy /= len;
    // 바깥 법선 = (dy, -dr)
    const r = Math.max(0, pts[i][0] - dy * t);
    const y = pts[i][1] + dr * t;
    if (i > 0 && y >= def.fill) {
      const prev = out[out.length - 1];
      const k = (def.fill - prev[1]) / (y - prev[1] || 1);
      out.push([prev[0] + (r - prev[0]) * Math.min(1, Math.max(0, k)), def.fill], [0, def.fill]);
      return out;
    }
    out.push([i === 0 ? 0 : r, y]);
  }
  return out;
}
