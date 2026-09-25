import { SHAPES, smooth } from "../bottle/shapes";
import { GLASS, LIQUID } from "../bottle/materials";
import type { Wine } from "../data/wines";

const cache = new Map<string, string>();

/** 병 실루엣 SVG (셀러 목록·결과 목록용). 실제 병 윤곽을 그대로 쓴다.
 *  아직 못 맞힌 와인(known=false)은 병 모양도 단서라 모든 와인에 같은 잠긴 병을 그린다. */
export function bottleIcon(w: Wine, h = 64, known = true): string {
  if (!known) return lockedIcon(h);
  const key = `${w.id}:${h}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const def = SHAPES[w.shape];
  const pts = smooth(def.pts);
  const top = def.top + (def.sparkling ? 2.6 : 0.1);
  const scale = (h - 2) / 36;
  const maxR = Math.max(...pts.map((p) => p[0]));
  const width = Math.ceil(maxR * 2 * scale + 4);
  const cx = width / 2;
  const Y = (y: number) => h - 1 - y * scale;
  const right = pts.filter((p) => p[1] >= 0).map(([r, y]) => `${(cx + r * scale).toFixed(1)},${Y(y).toFixed(1)}`);
  const left = pts
    .filter((p) => p[1] >= 0)
    .slice()
    .reverse()
    .map(([r, y]) => `${(cx - r * scale).toFixed(1)},${Y(y).toFixed(1)}`);
  const g = GLASS[w.glass];
  const clear = !g.opaque && ["flint", "halfwhite"].includes(w.glass);
  const body = clear ? LIQUID[w.liquid].color : g.tint;
  const capY = Y(w.capsule.to ?? def.top - 5);
  const capTop = Y(top);
  const capR = 1.9 * scale;
  const svg = `<svg class="bicon" width="${width}" height="${h}" viewBox="0 0 ${width} ${h}" aria-hidden="true">
<polygon points="${[...right, ...left].join(" ")}" fill="${body}" stroke="rgba(255,255,255,0.25)" stroke-width="0.6"/>
<rect x="${(cx - capR).toFixed(1)}" y="${capTop.toFixed(1)}" width="${(capR * 2).toFixed(1)}" height="${(capY - capTop).toFixed(1)}" rx="1" fill="${w.capsule.color}"/>
<rect x="${(cx - def.R * scale * 0.85).toFixed(1)}" y="${Y(w.label.y1).toFixed(1)}" width="${(def.R * scale * 1.7).toFixed(1)}" height="${((w.label.y1 - w.label.y0) * scale).toFixed(1)}" fill="rgba(245,236,215,0.9)"/>
</svg>`;
  cache.set(key, svg);
  return svg;
}

/** 못 맞힌 와인: 보르도형 윤곽에 물음표 하나 */
function lockedIcon(h: number): string {
  const key = `locked:${h}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const pts = smooth(SHAPES.bordeaux.pts).filter((p) => p[1] >= 0);
  const scale = (h - 2) / 36;
  const maxR = Math.max(...pts.map((p) => p[0]));
  const width = Math.ceil(maxR * 2 * scale + 4);
  const cx = width / 2;
  const Y = (y: number) => h - 1 - y * scale;
  const right = pts.map(([r, y]) => `${(cx + r * scale).toFixed(1)},${Y(y).toFixed(1)}`);
  const left = pts
    .slice()
    .reverse()
    .map(([r, y]) => `${(cx - r * scale).toFixed(1)},${Y(y).toFixed(1)}`);
  const svg = `<svg class="bicon" width="${width}" height="${h}" viewBox="0 0 ${width} ${h}" aria-hidden="true">
<polygon points="${[...right, ...left].join(" ")}" fill="#3b322d" stroke="rgba(255,255,255,0.25)" stroke-width="0.6"/>
<text x="${cx.toFixed(1)}" y="${Y(8).toFixed(1)}" text-anchor="middle" font-size="${(9 * scale).toFixed(1)}" font-weight="700" fill="rgba(217,181,106,0.75)">?</text>
</svg>`;
  cache.set(key, svg);
  return svg;
}
