// 번역용 원문 추출: 모든 와인의 한국어 해설·생산자·전용 문제를 JSON 으로 뽑는다.
//   node scripts/export-i18n-source.mjs            → 전체를 표준 출력으로
//   node scripts/export-i18n-source.mjs <폴더>      → 데이터 파일별로 <폴더>/src_<파일>.json
import { build } from "esbuild";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const dir = mkdtempSync(join(tmpdir(), "wine-src-"));
const entry = join(dir, "entry.ts");
writeFileSync(entry, `export { WINES } from ${JSON.stringify(join(process.cwd(), "src/data/wines.ts"))};\nexport { PARTS } from ${JSON.stringify(join(process.cwd(), "src/data/more/index.ts"))};\n`);
const out = join(dir, "wines.mjs");
await build({ entryPoints: [entry], bundle: true, format: "esm", platform: "node", outfile: out, logLevel: "error" });
const { WINES, PARTS } = await import(pathToFileURL(out).href);
rmSync(dir, { recursive: true, force: true });
const row = (w) => ({ id: w.id, name: w.name, original: w.original, maker: w.maker ?? null, producer: w.producer, country: w.country, fact: w.fact, quiz: w.quiz ?? [] });

const target = process.argv[2];
if (!target) {
  process.stdout.write(JSON.stringify(WINES.map(row), null, 1));
} else {
  mkdirSync(target, { recursive: true });
  const inParts = new Set(Object.values(PARTS).flat().map((w) => w.id));
  const all = { base: WINES.filter((w) => !inParts.has(w.id)), ...PARTS };
  for (const [name, list] of Object.entries(all)) {
    const ids = new Set(WINES.map((w) => w.id));
    writeFileSync(join(target, `src_${name}.json`), JSON.stringify(list.filter((w) => ids.has(w.id)).map(row), null, 1));
    console.log(name, list.length);
  }
}
