// 앱 아이콘 만들기: 게임 속 보르도 병 윤곽으로 SVG 를 그리고 rsvg-convert 로 PNG 를 뽑는다.
//   node scripts/make-icons.mjs   (public/ 에 icon.svg, icon-*.png, apple-touch-icon.png 생성)
import { build } from "esbuild";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";

const dir = mkdtempSync(join(tmpdir(), "wine-icon-"));
const out = join(dir, "shapes.mjs");
await build({ entryPoints: ["src/bottle/shapes.ts"], bundle: true, format: "esm", platform: "node", outfile: out, logLevel: "error" });
const { SHAPES, wallOf } = await import(pathToFileURL(out).href);
rmSync(dir, { recursive: true, force: true });

function bottleSvg(size, pad) {
  const def = SHAPES.bordeaux;
  // 바닥 펀트는 빼고 바깥 벽만 (아이콘에서는 바닥이 평평해야 깔끔하다)
  const pts = [[0, 0], [wallOf(def)[0][0], 0], ...wallOf(def)];
  const H = def.top + 0.1;
  const scale = (size - pad * 2) / H;
  const cx = size / 2;
  const Y = (y) => size - pad - y * scale;
  const right = pts.map(([r, y]) => `${(cx + r * scale).toFixed(2)},${Y(y).toFixed(2)}`);
  const left = pts.slice().reverse().map(([r, y]) => `${(cx - r * scale).toFixed(2)},${Y(y).toFixed(2)}`);
  const R = def.R * scale;
  const capTop = Y(H);
  const capBot = Y(def.top - 5);
  const capR = 1.62 * scale;
  const l0 = Y(13.4);
  const l1 = Y(4.2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
<defs>
  <radialGradient id="bg" cx="50%" cy="42%" r="70%">
    <stop offset="0" stop-color="#5a3b30"/><stop offset="0.55" stop-color="#2a1a17"/><stop offset="1" stop-color="#120b0a"/>
  </radialGradient>
  <linearGradient id="glass" x1="0" x2="1">
    <stop offset="0" stop-color="#0b120a"/><stop offset="0.28" stop-color="#23391d"/><stop offset="0.36" stop-color="#6f8c62"/><stop offset="0.44" stop-color="#1d3019"/><stop offset="1" stop-color="#070b06"/>
  </linearGradient>
  <linearGradient id="cap" x1="0" x2="1">
    <stop offset="0" stop-color="#5a1420"/><stop offset="0.35" stop-color="#b8324a"/><stop offset="1" stop-color="#3d0c15"/>
  </linearGradient>
</defs>
<rect width="${size}" height="${size}" fill="url(#bg)"/>
<ellipse cx="${cx}" cy="${size - pad * 0.9}" rx="${R * 1.9}" ry="${R * 0.28}" fill="#000" opacity="0.45"/>
<polygon points="${[...right, ...left].join(" ")}" fill="url(#glass)"/>
<rect x="${cx - capR}" y="${capTop}" width="${capR * 2}" height="${capBot - capTop}" rx="${capR * 0.25}" fill="url(#cap)"/>
<rect x="${cx - R * 0.92}" y="${l0}" width="${R * 1.84}" height="${l1 - l0}" rx="${R * 0.05}" fill="#f3ead6"/>
<rect x="${cx - R * 0.8}" y="${l0 + (l1 - l0) * 0.08}" width="${R * 1.6}" height="${(l1 - l0) * 0.84}" fill="none" stroke="#b88f3a" stroke-width="${Math.max(1, size / 200)}"/>
<g transform="translate(${cx - (l1 - l0) * 0.3} ${l0 + (l1 - l0) * 0.18}) scale(${((l1 - l0) * 0.64) / 100})">
  <path d="M22,30 C22,8 78,8 78,32 C78,50 52,50 52,68 L52,72" fill="none" stroke="#7a1628" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="52" cy="92" r="9" fill="#7a1628"/>
</g>
</svg>`;
}

writeFileSync("public/icon.svg", bottleSvg(512, 56));
// 마스커블 아이콘은 가장자리가 잘려도 되도록 여백을 넉넉히
const maskDir = mkdtempSync(join(tmpdir(), "wine-mask-"));
writeFileSync(join(maskDir, "maskable.svg"), bottleSvg(512, 110));
const conv = (src, px, dst) => execFileSync("rsvg-convert", ["-w", String(px), "-h", String(px), "-o", dst, src]);
conv("public/icon.svg", 192, "public/icon-192.png");
conv("public/icon.svg", 512, "public/icon-512.png");
conv(join(maskDir, "maskable.svg"), 512, "public/icon-maskable-512.png");
conv("public/icon.svg", 180, "public/apple-touch-icon.png");
conv("public/icon.svg", 32, "public/favicon-32.png");
rmSync(maskDir, { recursive: true, force: true });
console.log("icons written");
