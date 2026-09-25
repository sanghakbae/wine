// 배포본 미리보기를 늘 최신으로: 소스가 바뀔 때마다 다시 빌드(vite build --watch)하면서 dist 를 띄운다.
//   node scripts/preview-watch.mjs [포트]
import { spawn } from "node:child_process";

const port = process.argv[2] ?? "4564";
const vite = "node_modules/.bin/vite";
const kids = [
  spawn(vite, ["build", "--watch"], { stdio: "inherit" }),
  spawn(vite, ["preview", "--host", "0.0.0.0", "--port", port, "--strictPort"], { stdio: "inherit" }),
];
const stop = () => {
  for (const k of kids) k.kill("SIGTERM");
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
for (const k of kids) k.on("exit", (code) => code && stop());
