import { defineConfig, type Plugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import pkg from "./package.json" with { type: "json" };

// 개발 모드 전용: 브라우저 창이 가려져 있어도 캔버스를 PNG 로 떠서 확인할 수 있게 한다.
function snapshot(): Plugin {
  return {
    name: "dev-snapshot",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__snap", (req, res) => {
        const chunks: Buffer[] = [];
        req.on("data", (c) => chunks.push(c));
        req.on("end", () => {
          const body = Buffer.concat(chunks).toString();
          const name = (new URL(req.url ?? "", "http://x").searchParams.get("name") ?? "snap").replace(/[^\w-]/g, "");
          const dir = process.env.SNAP_DIR ?? join(process.cwd(), ".snaps");
          mkdirSync(dir, { recursive: true });
          writeFileSync(join(dir, `${name}.png`), Buffer.from(body.replace(/^data:image\/png;base64,/, ""), "base64"));
          res.end("ok");
        });
      });
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [
    snapshot(),
    // 홈 화면 설치 + 오프라인. 개발 서버에서는 꺼져 있다.
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["favicon-32.png", "apple-touch-icon.png", "icon.svg"],
      manifest: {
        id: "./",
        name: "블라인드 보틀 · Blind Bottle",
        short_name: "Blind Bottle",
        description: "병 모양과 라벨만 보고 맞히는 3D 와인 퀴즈",
        lang: "ko",
        start_url: "./",
        scope: "./",
        display: "standalone",
        orientation: "any",
        background_color: "#120d0c",
        theme_color: "#120d0c",
        categories: ["games", "education", "food"],
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        // 글꼴은 woff2 만 (woff 는 같은 글꼴의 구형 포맷)
        globPatterns: ["**/*.{js,css,html,woff2,png,svg,webmanifest}"],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        navigateFallback: "index.html",
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    target: "es2022",
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // 한 파일이 너무 크지 않게: three.js · 와인 데이터 · 게임 코드를 따로 받는다 (병렬로 받고, 데이터만 바뀌어도 three 는 캐시에 남는다)
        manualChunks(id) {
          if (id.includes("node_modules/three")) return "three";
          const part = id.match(/\/src\/data\/more\/(\w+)\.ts$/);
          if (part && part[1] !== "index") return `wines-${part[1]}`;
          return undefined;
        },
      },
    },
  },
});
