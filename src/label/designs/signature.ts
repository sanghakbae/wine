// 유명 와인 전용 라벨. 실제 라벨의 인상(색·배치·상징)을 옮겨 그린다.
// 이름·생산자 글자는 kind:"name", 산지·품종·국가 글자는 kind:"info" 로 표시해야 문제에서 가려진다.
import type { Design } from "./index";
import type { Painter } from "../painter";
import * as E from "../emblems";
import { mulberry } from "../emblems";

type C = CanvasRenderingContext2D;

// ───────────────────────── 상징 그림

/** 노란발바위왈라비 (점묘) */
function wallaby(p: Painter, cx: number, cy: number, s: number) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    const body = new Path2D();
    body.moveTo(-8, -58); // 귀
    body.lineTo(-2, -76);
    body.lineTo(4, -60);
    body.quadraticCurveTo(22, -60, 26, -48); // 주둥이
    body.lineTo(34, -44);
    body.quadraticCurveTo(24, -36, 12, -36);
    body.quadraticCurveTo(22, -14, 18, 8); // 가슴
    body.quadraticCurveTo(24, 20, 16, 30); // 앞발
    body.quadraticCurveTo(30, 46, 40, 56); // 뒷발
    body.lineTo(4, 58);
    body.quadraticCurveTo(-26, 50, -24, 18); // 엉덩이
    body.quadraticCurveTo(-44, 36, -76, 62); // 꼬리
    body.quadraticCurveTo(-46, 22, -30, 0);
    body.quadraticCurveTo(-30, -40, -8, -58);
    body.closePath();
    const g = c.createLinearGradient(-60, -70, 40, 60);
    g.addColorStop(0, "#ffd21f");
    g.addColorStop(0.55, "#f7a21b");
    g.addColorStop(1, "#e2601d");
    c.fillStyle = g;
    c.fill(body);
    // 점무늬
    c.save();
    c.clip(body);
    const r = mulberry(4);
    for (let i = 0; i < 180; i++) {
      c.fillStyle = r() < 0.5 ? "rgba(255,255,255,0.8)" : "rgba(120,40,10,0.6)";
      c.beginPath();
      c.arc(-80 + r() * 130, -80 + r() * 150, 1.6 + r() * 1.6, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
    c.fillStyle = "#1a1a1a";
    c.beginPath();
    c.arc(12, -50, 2.4, 0, Math.PI * 2);
    c.fill();
    c.restore();
  });
}

/** 카시예로 델 디아블로의 악마 얼굴 */
function devil(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c, i) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = i(color);
    // 뿔
    for (const d of [-1, 1]) {
      c.beginPath();
      c.moveTo(d * 18, -30);
      c.quadraticCurveTo(d * 44, -48, d * 40, -78);
      c.quadraticCurveTo(d * 30, -52, d * 8, -40);
      c.closePath();
      c.fill();
    }
    // 얼굴 (뾰족한 턱수염)
    c.beginPath();
    c.moveTo(-34, -30);
    c.quadraticCurveTo(0, -52, 34, -30);
    c.quadraticCurveTo(40, 10, 16, 32);
    c.lineTo(0, 70);
    c.lineTo(-16, 32);
    c.quadraticCurveTo(-40, 10, -34, -30);
    c.closePath();
    c.fill();
    // 눈·입 (바탕색으로 뚫기)
    c.globalCompositeOperation = "destination-out";
    for (const d of [-1, 1]) {
      c.beginPath();
      c.moveTo(d * 6, -12);
      c.lineTo(d * 26, -20);
      c.lineTo(d * 22, -8);
      c.closePath();
      c.fill();
    }
    c.beginPath();
    c.moveTo(-16, 12);
    c.quadraticCurveTo(0, 26, 16, 12);
    c.quadraticCurveTo(0, 18, -16, 12);
    c.fill();
    c.restore();
  });
}

/** 날개 달린 천사 (몬테스·위스퍼링 에인절) */
function angel(p: Painter, cx: number, cy: number, s: number, color: string, line = false) {
  p.draw((c, i) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = i(color);
    c.strokeStyle = i(color);
    c.lineWidth = 3;
    const wing = (d: number) => {
      c.beginPath();
      c.moveTo(d * 8, -10);
      c.bezierCurveTo(d * 40, -60, d * 78, -44, d * 84, -30);
      c.bezierCurveTo(d * 70, -26, d * 72, -14, d * 60, -10);
      c.bezierCurveTo(d * 56, 2, d * 40, 4, d * 30, 6);
      c.bezierCurveTo(d * 22, 10, d * 14, 8, d * 8, 4);
      c.closePath();
      line ? c.stroke() : c.fill();
      if (line)
        for (let k = 0; k < 4; k++) {
          c.beginPath();
          c.moveTo(d * 14, -4);
          c.quadraticCurveTo(d * (30 + k * 10), -20 - k * 6, d * (46 + k * 10), -18 - k * 5);
          c.stroke();
        }
    };
    wing(-1);
    wing(1);
    // 머리·후광
    c.beginPath();
    c.arc(0, -26, 9, 0, Math.PI * 2);
    line ? c.stroke() : c.fill();
    c.beginPath();
    c.ellipse(0, -40, 12, 3.5, 0, 0, Math.PI * 2);
    c.stroke();
    // 옷자락
    c.beginPath();
    c.moveTo(-8, -16);
    c.quadraticCurveTo(-18, 30, -24, 56);
    c.lineTo(24, 56);
    c.quadraticCurveTo(18, 30, 8, -16);
    c.closePath();
    line ? c.stroke() : c.fill();
    c.restore();
  });
}

/** 오퍼스 원: 겹쳐진 두 옆얼굴 */
function profiles(p: Painter, cx: number, cy: number, s: number) {
  const face = (c: C, d: number) => {
    c.beginPath();
    c.moveTo(0, -50);
    c.bezierCurveTo(d * 18, -52, d * 26, -40, d * 26, -26);
    c.lineTo(d * 30, -14);
    c.lineTo(d * 24, -12);
    c.quadraticCurveTo(d * 28, -2, d * 22, 2);
    c.quadraticCurveTo(d * 24, 12, d * 18, 16);
    c.quadraticCurveTo(d * 16, 26, d * 4, 28);
    c.lineTo(d * 6, 50);
    c.lineTo(-d * 20, 50);
    c.quadraticCurveTo(-d * 26, 10, -d * 20, -20);
    c.quadraticCurveTo(-d * 14, -46, 0, -50);
    c.closePath();
  };
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = "#b7c7d9";
    c.save();
    c.translate(-10, 0);
    face(c, -1);
    c.fill();
    c.restore();
    c.fillStyle = "#1f3a5f";
    c.globalAlpha = 0.9;
    c.save();
    c.translate(10, 0);
    face(c, 1);
    c.fill();
    c.restore();
    c.restore();
  });
}

/** 성 베드로 초상 메달 (페트뤼스) */
function saintPeter(p: Painter, cx: number, cy: number, s: number) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = "#f3ead8";
    c.strokeStyle = "#8a1a1f";
    c.lineWidth = 3;
    c.beginPath();
    c.ellipse(0, 0, 40, 52, 0, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.save();
    c.beginPath();
    c.ellipse(0, 0, 37, 49, 0, 0, Math.PI * 2);
    c.clip();
    const ink = "#3a2718";
    c.strokeStyle = ink;
    c.fillStyle = ink;
    c.lineWidth = 1.2;
    // 후광
    c.beginPath();
    c.arc(0, -16, 20, 0, Math.PI * 2);
    c.stroke();
    // 머리·수염
    c.beginPath();
    c.ellipse(0, -14, 11, 14, 0, 0, Math.PI * 2);
    c.stroke();
    c.beginPath();
    c.moveTo(-10, -8);
    c.quadraticCurveTo(0, 18, 10, -8);
    c.quadraticCurveTo(0, 6, -10, -8);
    c.fill();
    // 어깨와 옷 주름
    c.beginPath();
    c.moveTo(-36, 50);
    c.quadraticCurveTo(-30, 8, 0, 4);
    c.quadraticCurveTo(30, 8, 36, 50);
    c.stroke();
    for (let k = -3; k <= 3; k++) {
      c.beginPath();
      c.moveTo(k * 8, 12);
      c.quadraticCurveTo(k * 9, 30, k * 10, 50);
      c.stroke();
    }
    // 열쇠 두 개
    c.lineWidth = 3;
    for (const d of [-1, 1]) {
      c.beginPath();
      c.moveTo(d * 6, 44);
      c.lineTo(d * 24, 14);
      c.stroke();
      c.beginPath();
      c.arc(d * 26, 10, 5, 0, Math.PI * 2);
      c.stroke();
    }
    c.restore();
    c.restore();
  });
}

/** 바쿠스 얼굴 (루이 자도) */
function bacchus(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.lineWidth = 3;
    c.beginPath();
    c.ellipse(0, 6, 26, 32, 0, 0, Math.PI * 2);
    c.stroke();
    // 포도잎 관
    for (let k = -2; k <= 2; k++) {
      E.leafPath(c, k * 18, -24 - Math.abs(k) * -4, 24, k * 0.35);
      c.fill();
    }
    for (let k = 0; k < 6; k++) {
      c.beginPath();
      c.arc(-30 + (k % 2) * 6, 0 + k * 7, 4, 0, Math.PI * 2);
      c.arc(30 - (k % 2) * 6, 0 + k * 7, 4, 0, Math.PI * 2);
      c.fill();
    }
    // 눈·코·입·수염
    c.beginPath();
    c.moveTo(-12, 0);
    c.quadraticCurveTo(-7, -4, -2, 0);
    c.moveTo(12, 0);
    c.quadraticCurveTo(7, -4, 2, 0);
    c.moveTo(0, 2);
    c.lineTo(-3, 14);
    c.lineTo(3, 16);
    c.moveTo(-10, 22);
    c.quadraticCurveTo(0, 28, 10, 22);
    c.stroke();
    c.beginPath();
    c.moveTo(-18, 26);
    c.quadraticCurveTo(0, 54, 18, 26);
    c.quadraticCurveTo(0, 40, -18, 26);
    c.fill();
    c.restore();
  });
}

function footprint(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.rotate(0.15);
    c.scale(s / 100, s / 100);
    c.fillStyle = color;
    c.beginPath();
    c.ellipse(0, 10, 22, 34, 0, 0, Math.PI * 2);
    c.fill();
    c.beginPath();
    c.ellipse(-2, 50, 16, 16, 0, 0, Math.PI * 2);
    c.fill();
    const toes: [number, number, number][] = [
      [-16, -36, 9],
      [-2, -44, 8],
      [11, -42, 7],
      [21, -35, 6],
      [28, -26, 5],
    ];
    for (const [x, y, r] of toes) {
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
  });
}

/** 마푸체 쿨트룬 문양 (알마비바) */
function kultrun(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.lineWidth = 4;
    c.beginPath();
    c.arc(0, 0, 46, 0, Math.PI * 2);
    c.stroke();
    // 십자 (끝이 갈라진 팔)
    for (let k = 0; k < 4; k++) {
      c.save();
      c.rotate((k * Math.PI) / 2);
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(0, -40);
      c.moveTo(0, -40);
      c.lineTo(-8, -46);
      c.moveTo(0, -40);
      c.lineTo(8, -46);
      c.stroke();
      c.restore();
      // 사분면마다 초승달·별
      c.save();
      c.rotate((k * Math.PI) / 2 + Math.PI / 4);
      if (k % 2) {
        c.beginPath();
        c.arc(0, -24, 8, 0, Math.PI * 2);
        c.fill();
      } else {
        E.starPath(c, 0, -24, 9, 4, 0.35);
        c.fill();
      }
      c.restore();
    }
    c.restore();
  });
}

/** 바로크 궁전 (마테우스) */
function palace(p: Painter, cx: number, cy: number, w: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(w / 200, w / 200);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.lineWidth = 1.6;
    // 연못
    c.beginPath();
    c.moveTo(-100, 40);
    c.lineTo(100, 40);
    c.stroke();
    for (let k = 0; k < 4; k++) {
      c.globalAlpha = 0.5 - k * 0.1;
      c.beginPath();
      c.moveTo(-90 + k * 10, 46 + k * 5);
      c.lineTo(90 - k * 10, 46 + k * 5);
      c.stroke();
    }
    c.globalAlpha = 1;
    // 양 날개
    for (const d of [-1, 1]) {
      c.strokeRect(d > 0 ? 34 : -94, -6, 60, 46);
      c.beginPath();
      c.moveTo(d * 34, -6);
      c.lineTo(d * 64, -26);
      c.lineTo(d * 94, -6);
      c.stroke();
      for (let k = 0; k < 4; k++) c.fillRect(d > 0 ? 40 + k * 13 : -88 + k * 13, 6, 6, 12);
      // 첨탑
      c.beginPath();
      c.moveTo(d * 64, -26);
      c.lineTo(d * 64, -44);
      c.stroke();
    }
    // 본관
    c.strokeRect(-34, -20, 68, 60);
    c.beginPath();
    c.moveTo(-40, -20);
    c.quadraticCurveTo(0, -60, 40, -20);
    c.stroke();
    c.fillRect(-8, 12, 16, 28);
    for (const x of [-26, 16]) c.fillRect(x, -6, 10, 14);
    // 계단
    c.beginPath();
    c.moveTo(-30, 40);
    c.lineTo(-10, 24);
    c.moveTo(30, 40);
    c.lineTo(10, 24);
    c.stroke();
    c.restore();
  });
}

function bullHead(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(-50, -40);
    c.quadraticCurveTo(-40, -20, -22, -22);
    c.quadraticCurveTo(0, -30, 22, -22);
    c.quadraticCurveTo(40, -20, 50, -40);
    c.quadraticCurveTo(46, -10, 26, -8);
    c.quadraticCurveTo(24, 20, 14, 38);
    c.quadraticCurveTo(0, 48, -14, 38);
    c.quadraticCurveTo(-24, 20, -26, -8);
    c.quadraticCurveTo(-46, -10, -50, -40);
    c.closePath();
    c.fill();
    c.globalCompositeOperation = "destination-out";
    for (const d of [-1, 1]) {
      c.beginPath();
      c.ellipse(d * 12, 0, 4, 3, 0, 0, Math.PI * 2);
      c.fill();
      c.beginPath();
      c.arc(d * 6, 32, 3, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
  });
}

function rooster(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(-6, -40);
    c.lineTo(0, -52);
    c.lineTo(6, -44);
    c.lineTo(12, -50);
    c.lineTo(14, -38);
    c.lineTo(22, -34);
    c.lineTo(14, -30);
    c.quadraticCurveTo(10, -10, 20, 0);
    c.quadraticCurveTo(40, -30, 50, -40);
    c.quadraticCurveTo(58, -10, 40, 16);
    c.quadraticCurveTo(26, 34, 6, 30);
    c.lineTo(8, 50);
    c.lineTo(0, 50);
    c.lineTo(-2, 30);
    c.quadraticCurveTo(-30, 20, -24, -6);
    c.quadraticCurveTo(-20, -30, -6, -40);
    c.closePath();
    c.fill();
    c.restore();
  });
}

/** 라투르의 탑과 사자 */
function towerLion(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.lineWidth = 2;
    // 탑 몸통 (돌 줄눈)
    c.strokeRect(-22, -10, 44, 62);
    for (let y = -2; y < 52; y += 8) {
      c.beginPath();
      c.moveTo(-22, y);
      c.lineTo(22, y);
      c.stroke();
    }
    // 흉벽
    for (let k = 0; k < 5; k++) c.fillRect(-24 + k * 10, -18, 6, 8);
    c.fillRect(-26, -10, 52, 3);
    // 문
    c.beginPath();
    c.moveTo(-7, 52);
    c.lineTo(-7, 36);
    c.arc(0, 36, 7, Math.PI, 0);
    c.lineTo(7, 52);
    c.fill();
    c.restore();
  });
  E.lion(p, cx + s * 0.02, cy - s * 0.42, s * 0.36, { color });
}

/** 기둥 현관이 있는 신고전주의 저택 (샤토 마고) */
function portico(p: Painter, cx: number, cy: number, w: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(w / 300, w / 300);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.lineWidth = 1.6;
    // 땅·나무
    c.beginPath();
    c.moveTo(-150, 60);
    c.lineTo(150, 60);
    c.stroke();
    for (const x of [-132, 132]) {
      c.beginPath();
      c.ellipse(x, 10, 16, 36, 0, 0, Math.PI * 2);
      c.stroke();
      for (let k = 0; k < 8; k++) {
        c.beginPath();
        c.moveTo(x - 12, -10 + k * 7);
        c.lineTo(x + 12, -6 + k * 7);
        c.stroke();
      }
    }
    // 양쪽 날개 건물
    for (const d of [-1, 1]) {
      const x0 = d > 0 ? 40 : -110;
      c.strokeRect(x0, 0, 70, 60);
      for (let k = 0; k < 3; k++) {
        c.fillRect(x0 + 10 + k * 20, 12, 8, 14);
        c.fillRect(x0 + 10 + k * 20, 36, 8, 16);
      }
      c.fillRect(x0 - 2, -4, 74, 4);
    }
    // 가운데 현관: 계단 + 기둥 4개 + 박공
    c.strokeRect(-40, -6, 80, 66);
    c.beginPath();
    c.moveTo(-48, -6);
    c.lineTo(0, -40);
    c.lineTo(48, -6);
    c.closePath();
    c.stroke();
    c.beginPath();
    c.moveTo(-34, -10);
    c.lineTo(0, -34);
    c.lineTo(34, -10);
    c.stroke();
    for (let k = 0; k < 4; k++) {
      const x = -30 + k * 20;
      c.fillRect(x - 3, -2, 6, 56);
      c.fillRect(x - 5, -4, 10, 3);
    }
    for (let k = 0; k < 3; k++) {
      c.beginPath();
      c.moveTo(-44 + k * 3, 54 + k * 2);
      c.lineTo(44 - k * 3, 54 + k * 2);
      c.stroke();
    }
    c.restore();
  });
}

/** 아치와 종탑 (로버트 몬다비) */
function missionArch(p: Painter, cx: number, cy: number, w: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(w / 200, w / 200);
    c.strokeStyle = color;
    c.lineWidth = 2.2;
    c.beginPath();
    c.moveTo(-100, 40);
    c.lineTo(100, 40);
    c.stroke();
    // 넓은 아치 벽
    c.beginPath();
    c.moveTo(-80, 40);
    c.lineTo(-80, -6);
    c.lineTo(-20, -6);
    c.moveTo(20, -6);
    c.lineTo(80, -6);
    c.lineTo(80, 40);
    c.stroke();
    c.beginPath();
    c.moveTo(-28, 40);
    c.lineTo(-28, 4);
    c.arc(0, 4, 28, Math.PI, 0);
    c.lineTo(28, 40);
    c.stroke();
    // 종탑
    c.strokeRect(-14, -58, 28, 30);
    c.beginPath();
    c.moveTo(-18, -58);
    c.lineTo(0, -76);
    c.lineTo(18, -58);
    c.stroke();
    c.beginPath();
    c.arc(0, -40, 6, Math.PI, 0);
    c.lineTo(6, -32);
    c.lineTo(-6, -32);
    c.closePath();
    c.stroke();
    c.beginPath();
    c.moveTo(-20, -28);
    c.lineTo(-20, -6);
    c.moveTo(20, -28);
    c.lineTo(20, -6);
    c.stroke();
    c.restore();
  });
}

/** 스페이드 에이스 (아르망 드 브리냑) */
function spadePath(c: C, cx: number, cy: number, s: number) {
  c.beginPath();
  c.moveTo(cx, cy - s * 0.5);
  c.bezierCurveTo(cx + s * 0.1, cy - s * 0.3, cx + s * 0.5, cy - s * 0.1, cx + s * 0.44, cy + s * 0.14);
  c.bezierCurveTo(cx + s * 0.38, cy + s * 0.32, cx + s * 0.14, cy + s * 0.3, cx + s * 0.06, cy + s * 0.18);
  c.quadraticCurveTo(cx + s * 0.1, cy + s * 0.4, cx + s * 0.2, cy + s * 0.5);
  c.lineTo(cx - s * 0.2, cy + s * 0.5);
  c.quadraticCurveTo(cx - s * 0.1, cy + s * 0.4, cx - s * 0.06, cy + s * 0.18);
  c.bezierCurveTo(cx - s * 0.14, cy + s * 0.3, cx - s * 0.38, cy + s * 0.32, cx - s * 0.44, cy + s * 0.14);
  c.bezierCurveTo(cx - s * 0.5, cy - s * 0.1, cx - s * 0.1, cy - s * 0.3, cx, cy - s * 0.5);
  c.closePath();
}

/** 뒤뵈프 꽃무늬 (빈티지마다 색이 바뀐다) */
function flowerField(p: Painter, x: number, y: number, w: number, h: number, seed: number) {
  const r = mulberry(seed);
  const palettes = [
    ["#e84a5f", "#ff847c", "#fecea8", "#2a9d8f"],
    ["#6a4c93", "#ff595e", "#ffca3a", "#8ac926"],
    ["#d62828", "#f77f00", "#fcbf49", "#264653"],
    ["#3a86ff", "#ff006e", "#ffbe0b", "#8338ec"],
  ];
  const pal = palettes[seed % palettes.length];
  p.draw((c) => {
    c.save();
    c.beginPath();
    c.rect(x, y, w, h);
    c.clip();
    for (let i = 0; i < 38; i++) {
      const fx = x + r() * w;
      const fy = y + r() * h;
      const fr = 18 + r() * 34;
      const col = pal[Math.floor(r() * 3)];
      c.fillStyle = pal[3];
      c.beginPath();
      c.ellipse(fx + fr * 0.6, fy + fr * 0.6, fr * 0.5, fr * 0.18, 0.8, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = col;
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * Math.PI * 2 + r();
        c.beginPath();
        c.ellipse(fx + Math.cos(a) * fr * 0.45, fy + Math.sin(a) * fr * 0.45, fr * 0.42, fr * 0.26, a, 0, Math.PI * 2);
        c.fill();
      }
      c.fillStyle = "#ffd166";
      c.beginPath();
      c.arc(fx, fy, fr * 0.2, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
  });
}

/** 페리에 주에 벨 에포크: 병에 직접 그린 아네모네 덩굴 (투명 바탕) */
function anemones(p: Painter) {
  const r = mulberry(1902);
  const W = p.W;
  const H = p.H;
  // 줄기 (금박 테두리)
  p.draw(
    (c, ink) => {
      c.strokeStyle = ink("#c9a24e");
      c.lineWidth = 7;
      c.lineCap = "round";
      for (let k = 0; k < 6; k++) {
        const x0 = W * (0.1 + k * 0.16);
        c.beginPath();
        c.moveTo(x0, H);
        c.bezierCurveTo(x0 + (r() - 0.5) * 220, H * 0.7, x0 + (r() - 0.5) * 240, H * 0.45, x0 + (r() - 0.5) * 160, H * (0.18 + r() * 0.2));
        c.stroke();
      }
    },
    "gold",
  );
  // 잎 (녹색 에나멜 + 금 테)
  const leaves: [number, number, number, number][] = [];
  for (let k = 0; k < 18; k++) leaves.push([r() * W, H * (0.3 + r() * 0.65), 40 + r() * 50, r() * Math.PI]);
  p.draw((c) => {
    for (const [x, y, s, a] of leaves) {
      c.save();
      c.translate(x, y);
      c.rotate(a);
      c.fillStyle = "#3f7a3a";
      c.beginPath();
      for (let j = 0; j < 7; j++) {
        const t = (j / 6) * Math.PI;
        c.lineTo(Math.cos(t) * s * (j % 2 ? 0.6 : 1), -Math.sin(t) * s * 0.5 * (j % 2 ? 0.6 : 1));
      }
      c.closePath();
      c.fill();
      c.restore();
    }
  });
  // 흰 아네모네 꽃
  const flowers: [number, number, number][] = [];
  for (let k = 0; k < 7; k++) flowers.push([W * (0.08 + k * 0.14 + (r() - 0.5) * 0.06), H * (0.14 + r() * 0.5), 70 + r() * 40]);
  p.draw((c) => {
    for (const [x, y, s] of flowers) {
      for (let j = 0; j < 6; j++) {
        const a = (j / 6) * Math.PI * 2 + 0.3;
        c.fillStyle = "#fbf8ef";
        c.beginPath();
        c.ellipse(x + Math.cos(a) * s * 0.42, y + Math.sin(a) * s * 0.42, s * 0.42, s * 0.3, a, 0, Math.PI * 2);
        c.fill();
        c.strokeStyle = "rgba(160,150,120,0.6)";
        c.lineWidth = 1.5;
        c.stroke();
      }
      c.fillStyle = "#e7c55c";
      c.beginPath();
      c.arc(x, y, s * 0.2, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = "#3a3a2a";
      for (let j = 0; j < 10; j++) {
        const a = (j / 10) * Math.PI * 2;
        c.beginPath();
        c.arc(x + Math.cos(a) * s * 0.14, y + Math.sin(a) * s * 0.14, 3, 0, Math.PI * 2);
        c.fill();
      }
    }
  });
}


/** 수녀 두 사람 실루엣 (블루 넌) */
function nuns(p: Painter, cx: number, cy: number, s: number, color: string) {
  p.draw((c) => {
    c.save();
    c.translate(cx, cy);
    c.scale(s / 100, s / 100);
    c.fillStyle = color;
    for (const [dx, h] of [
      [-22, 1],
      [22, 0.92],
    ] as const) {
      c.save();
      c.translate(dx, 0);
      c.scale(h, h);
      // 수도복
      c.beginPath();
      c.moveTo(-8, -26);
      c.quadraticCurveTo(-22, 10, -26, 50);
      c.lineTo(26, 50);
      c.quadraticCurveTo(22, 10, 8, -26);
      c.closePath();
      c.fill();
      // 머릿수건
      c.beginPath();
      c.moveTo(-13, -22);
      c.quadraticCurveTo(-14, -48, 0, -50);
      c.quadraticCurveTo(14, -48, 13, -22);
      c.quadraticCurveTo(0, -16, -13, -22);
      c.fill();
      c.restore();
    }
    c.restore();
  });
}

// ───────────────────────── 라벨들

const V = (p: Painter) => p.vintage ?? "";

export const SIGNATURE: Record<string, Partial<Design>> = {
  yellowtail: {
    front: (p) => {
      p.paper("#121212", { aged: 0, grain: 0.15, rough: 0.6 });
      wallaby(p, p.W / 2 - 20, p.H * 0.36, 360);
      p.text("[yellow tail]", p.W / 2, p.H * 0.7, { font: "grotesk", size: 110, weight: 700, color: "#ffffff", kind: "name", maxWidth: 880 });
      p.text("shiraz", p.W / 2, p.H * 0.8, { font: "grotesk", size: 70, weight: 700, color: "#d8323c", kind: "info" });
      p.text("SOUTH EASTERN AUSTRALIA", p.W / 2, p.H * 0.9, { font: "grotesk", size: 30, color: "#cfcfcf", spacing: 0.15, kind: "info" });
    },
  },
  casillero: {
    front: (p) => {
      p.paper("#141414", { aged: 0, grain: 0.2, rough: 0.55 });
      p.frame(30, 30, p.W - 60, p.H - 60, "#c9a24e", 3, "gold");
      devil(p, p.W / 2, p.H * 0.24, 230, "#c5202c");
      p.text("Casillero", p.W / 2, p.H * 0.47, { font: "didone", size: 104, weight: 700, color: "#f2e6c8", kind: "name" });
      p.text("del Diablo", p.W / 2, p.H * 0.57, { font: "didone", size: 84, italic: true, color: "#f2e6c8", kind: "name" });
      p.text("Reserva", p.W / 2, p.H * 0.66, { font: "script", size: 80, color: "#c9a24e", foil: "gold" });
      p.text("CABERNET SAUVIGNON", p.W / 2, p.H * 0.75, { font: "roman", size: 38, color: "#f2e6c8", spacing: 0.15, kind: "info", maxWidth: 860 });
      p.text(V(p), p.W / 2, p.H * 0.83, { font: "didone", size: 44, color: "#c9a24e", foil: "gold" });
      p.text("CONCHA Y TORO · CHILE", p.W / 2, p.H * 0.91, { font: "roman", size: 26, color: "#bbb", spacing: 0.2, kind: "info" });
    },
  },
  montes: {
    front: (p) => {
      p.paper("#f4eee0", { aged: 0.15 });
      p.frame(28, 28, p.W - 56, p.H - 56, "#1a1a1a", 2);
      angel(p, p.W / 2, p.H * 0.2, 220, "#1a1a1a", true);
      p.text("MONTES", p.W / 2, p.H * 0.42, { font: "roman", size: 120, weight: 700, color: "#141414", spacing: 0.12, kind: "name" });
      p.text("ALPHA", p.W / 2, p.H * 0.53, { font: "roman", size: 78, color: "#8e1520", spacing: 0.4, kind: "name" });
      p.rule(p.W / 2, p.H * 0.6, 420, "#141414", 2);
      p.text("Cabernet Sauvignon", p.W / 2, p.H * 0.68, { font: "serif", size: 56, italic: true, color: "#141414", kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.77, { font: "didone", size: 50, color: "#141414" });
      p.text("COLCHAGUA VALLEY · CHILE", p.W / 2, p.H * 0.88, { font: "roman", size: 26, color: "#141414", spacing: 0.18, kind: "info" });
    },
  },
  mouton: {
    front: (p) => {
      p.paper("#f5efe1", { aged: 0.15 });
      // 해마다 바뀌는 화가의 그림
      E.abstractArt(p, 40, 40, p.W - 80, p.H * 0.4, ["#f6efe0", "#1d3557", "#e63946", "#f4a261", "#2a9d8f", "#264653", "#e9c46a"], Number(p.vintage ?? 7));
      p.text("Château", p.W / 2, p.H * 0.54, { font: "script", size: 90, color: "#a67c2e", foil: "gold", kind: "name" });
      p.text("MOUTON ROTHSCHILD", p.W / 2, p.H * 0.64, { font: "roman", size: 66, weight: 700, color: "#a67c2e", foil: "gold", spacing: 0.05, kind: "name", maxWidth: 880 });
      p.text(V(p), p.W / 2, p.H * 0.74, { font: "roman", size: 56, color: "#a67c2e", foil: "gold" });
      p.text("PREMIER CRU CLASSÉ · PAUILLAC", p.W / 2, p.H * 0.83, { font: "roman", size: 26, color: "#6b5430", spacing: 0.12, kind: "info" });
      p.text("Baronne Philippine de Rothschild", p.W / 2, p.H * 0.91, { font: "serif", size: 30, italic: true, color: "#6b5430", kind: "name" });
    },
  },
  petrus: {
    front: (p) => {
      p.paper("#fbf8f1", { aged: 0.12 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#8a1a1f", 5);
      p.frame(40, 40, p.W - 80, p.H - 80, "#8a1a1f", 1.5);
      p.text("PETRUS", p.W / 2, p.H * 0.13, { font: "roman", size: 118, weight: 700, color: "#b0181f", spacing: 0.1, kind: "name" });
      saintPeter(p, p.W / 2, p.H * 0.42, 440);
      p.text("POMEROL", p.W / 2, p.H * 0.7, { font: "roman", size: 58, color: "#1b1410", spacing: 0.3, kind: "info" });
      p.text("GRAND VIN", p.W / 2, p.H * 0.78, { font: "roman", size: 32, color: "#b0181f", spacing: 0.3 });
      p.text(V(p), p.W / 2, p.H * 0.86, { font: "didone", size: 56, weight: 700, color: "#1b1410" });
      p.text("MIS EN BOUTEILLE AU CHÂTEAU", p.W / 2, p.H * 0.93, { font: "roman", size: 20, color: "#1b1410", spacing: 0.15 });
    },
  },
  opusone: {
    front: (p) => {
      p.paper("#f7f5ef", { aged: 0.05 });
      profiles(p, p.W / 2, p.H * 0.27, 340);
      p.text("OPUS ONE", p.W / 2, p.H * 0.54, { font: "roman", size: 104, color: "#1f3a5f", spacing: 0.2, kind: "name" });
      p.text("NAPA VALLEY RED WINE", p.W / 2, p.H * 0.64, { font: "roman", size: 32, color: "#1f3a5f", spacing: 0.22, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.73, { font: "roman", size: 50, color: "#1f3a5f" });
      p.text("ROBERT MONDAVI · BARON PHILIPPE DE ROTHSCHILD", p.W / 2, p.H * 0.86, { font: "roman", size: 22, color: "#1f3a5f", spacing: 0.08, kind: "name", maxWidth: 880 });
    },
  },
  gaja: {
    front: (p) => {
      p.paper("#fbfbf8", { aged: 0.02, grain: 0.2 });
      p.text("GAJA", p.W / 2, p.H * 0.44, { font: "grotesk", size: 330, weight: 900, color: "#0e0e0e", kind: "name", maxWidth: 900, spacing: -0.02 });
      p.text("BARBARESCO", p.W / 2, p.H * 0.72, { font: "grotesk", size: 44, color: "#0e0e0e", spacing: 0.35, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.82, { font: "grotesk", size: 38, color: "#0e0e0e" });
    },
  },
  veuve: {
    front: (p) => {
      p.paper("#f2a31c", { aged: 0.05, grain: 0.3, rough: 0.6 });
      p.frame(26, 26, p.W - 52, p.H - 52, "#1a1a1a", 3);
      p.text("CHAMPAGNE", p.W / 2, p.H * 0.14, { font: "roman", size: 40, color: "#1a1a1a", spacing: 0.35, kind: "info" });
      p.text("VEUVE CLICQUOT", p.W / 2, p.H * 0.36, { font: "roman", size: 96, weight: 700, color: "#1a1a1a", kind: "name", maxWidth: 880 });
      p.text("PONSARDIN", p.W / 2, p.H * 0.5, { font: "roman", size: 70, weight: 700, color: "#1a1a1a", spacing: 0.1, kind: "name" });
      p.text("BRUT", p.W / 2, p.H * 0.68, { font: "roman", size: 62, color: "#1a1a1a", spacing: 0.3 });
      p.text("REIMS · FRANCE", p.W / 2, p.H * 0.84, { font: "roman", size: 30, color: "#1a1a1a", spacing: 0.25, kind: "info" });
    },
  },
  domperignon: {
    front: (p) => {
      const shield = (c: C, inset: number) => {
        const W = p.W;
        const H = p.H;
        c.moveTo(inset, inset + H * 0.05);
        c.lineTo(W - inset, inset + H * 0.05);
        c.lineTo(W - inset, H * 0.58);
        c.quadraticCurveTo(W - inset, H - inset - H * 0.08, W / 2, H - inset);
        c.quadraticCurveTo(inset, H - inset - H * 0.08, inset, H * 0.58);
        c.closePath();
      };
      p.paper("#f3ecd8", { aged: 0.08, grain: 0.3 });
      p.draw((c, ink) => {
        c.strokeStyle = ink("#1b1a17");
        c.lineWidth = 6;
        c.beginPath();
        shield(c, 22);
        c.stroke();
      });
      E.star(p, p.W / 2, p.H * 0.18, 44, { color: "#1b1a17" });
      p.text("CUVÉE", p.W / 2, p.H * 0.3, { font: "roman", size: 34, color: "#1b1a17", spacing: 0.35 });
      p.text("Dom Pérignon", p.W / 2, p.H * 0.44, { font: "didone", size: 118, italic: true, color: "#1b1a17", kind: "name", maxWidth: 880 });
      p.text(p.vintage ? `VINTAGE ${p.vintage}` : "VINTAGE", p.W / 2, p.H * 0.58, { font: "roman", size: 40, color: "#1b1a17", spacing: 0.2 });
      p.text("CHAMPAGNE · BRUT", p.W / 2, p.H * 0.68, { font: "roman", size: 30, color: "#1b1a17", spacing: 0.25, kind: "info" });
      p.text("MOËT ET CHANDON À ÉPERNAY", p.W / 2, p.H * 0.78, { font: "roman", size: 22, color: "#1b1a17", spacing: 0.1, kind: "name" });
      p.cutout((c) => shield(c, 12));
    },
  },
  moet: {
    front: (p) => {
      p.paper("#fbf8ef", { aged: 0.03, grain: 0.3 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#c9a24e", 8, "gold");
      p.frame(44, 44, p.W - 88, p.H - 88, "#c9a24e", 2, "gold");
      E.star(p, p.W / 2, p.H * 0.16, 40, { color: "#c9a24e", foil: "gold" }, 5);
      p.text("MOËT & CHANDON", p.W / 2, p.H * 0.34, { font: "roman", size: 86, weight: 700, color: "#141414", kind: "name", maxWidth: 860 });
      p.text("Champagne", p.W / 2, p.H * 0.49, { font: "script", size: 92, color: "#141414", kind: "info" });
      p.text("IMPÉRIAL", p.W / 2, p.H * 0.64, { font: "roman", size: 60, color: "#141414", spacing: 0.3, kind: "name" });
      p.text("BRUT", p.W / 2, p.H * 0.75, { font: "roman", size: 38, color: "#a67c2e", foil: "gold", spacing: 0.3 });
      p.text("FONDÉE EN 1743", p.W / 2, p.H * 0.86, { font: "roman", size: 24, color: "#141414", spacing: 0.25 });
    },
  },
  cristal: {
    front: (p) => {
      p.rect(0, 0, p.W, p.H, "#d9b75f", "gold");
      p.frame(26, 26, p.W - 52, p.H - 52, "#5a3e10", 3);
      E.crest(p, p.W / 2, p.H * 0.24, 170, { color: "#4a3410" }, 3);
      p.text("CRISTAL", p.W / 2, p.H * 0.5, { font: "roman", size: 130, weight: 700, color: "#3a280a", spacing: 0.12, kind: "name" });
      p.text("Louis Roederer", p.W / 2, p.H * 0.66, { font: "script", size: 86, color: "#3a280a", kind: "name" });
      p.text(p.vintage ? `${p.vintage} · BRUT` : "BRUT", p.W / 2, p.H * 0.8, { font: "roman", size: 34, color: "#3a280a", spacing: 0.25 });
      p.text("CHAMPAGNE · REIMS", p.W / 2, p.H * 0.89, { font: "roman", size: 24, color: "#3a280a", spacing: 0.25, kind: "info" });
    },
  },
  armand: {
    front: (p) => {
      const s = Math.min(p.W, p.H) * 0.96;
      p.draw((c, ink) => {
        c.fillStyle = ink("#9aa0a6");
        spadePath(c, p.W / 2, p.H / 2, s);
        c.fill();
      }, "pewter");
      p.draw((c, ink) => {
        c.strokeStyle = ink("#3c4045");
        c.lineWidth = 6;
        spadePath(c, p.W / 2, p.H / 2, s * 0.9);
        c.stroke();
      });
      p.text("A", p.W / 2, p.H * 0.44, { font: "roman", size: 190, weight: 700, color: "#34383c", kind: "name" });
      p.text("ARMAND DE BRIGNAC", p.W / 2, p.H * 0.6, { font: "roman", size: 44, color: "#2c3034", spacing: 0.12, kind: "name", maxWidth: 560 });
      p.text("CHAMPAGNE", p.W / 2, p.H * 0.67, { font: "roman", size: 30, color: "#2c3034", spacing: 0.3, kind: "info" });
      p.cutout((c) => spadePath(c, p.W / 2, p.H / 2, s));
    },
  },
  pj: {
    front: (p) => {
      p.paper("#f6f1e2", { aged: 0.02, grain: 0.2 });
      p.frame(10, 10, p.W - 20, p.H - 20, "#c9a24e", 5, "gold");
      p.text("PERRIER-JOUËT", p.W / 2, p.H * 0.42, { font: "roman", size: 120, color: "#1b3a26", spacing: 0.12, kind: "name", maxWidth: 900 });
      p.text(p.vintage ? `BELLE ÉPOQUE ${p.vintage}` : "BELLE ÉPOQUE", p.W / 2, p.H * 0.76, { font: "roman", size: 70, color: "#a67c2e", foil: "gold", spacing: 0.1, kind: "name", maxWidth: 900 });
    },
    decal: (p) => anemones(p),
    decalPlace: { y0: 3.8, y1: 20.5, arc: 200 },
  },
  sassicaia: {
    front: (p) => {
      p.paper("#fbfaf6", { aged: 0.05 });
      p.frame(30, 30, p.W - 60, p.H - 60, "#1f3a5f", 2);
      E.star(p, p.W / 2, p.H * 0.24, 130, { color: "#1f3a5f" }, 8, 0.32);
      E.star(p, p.W / 2, p.H * 0.24, 70, { color: "#c9a24e", foil: "gold" }, 8, 0.4);
      p.text("SASSICAIA", p.W / 2, p.H * 0.47, { font: "roman", size: 108, weight: 700, color: "#1f3a5f", spacing: 0.1, kind: "name" });
      p.text("BOLGHERI SASSICAIA", p.W / 2, p.H * 0.58, { font: "roman", size: 34, color: "#1f3a5f", spacing: 0.2, kind: "info" });
      p.text("Denominazione di Origine Controllata", p.W / 2, p.H * 0.65, { font: "serif", size: 32, italic: true, color: "#1f3a5f" });
      p.text(V(p), p.W / 2, p.H * 0.76, { font: "roman", size: 54, color: "#1f3a5f" });
      p.text("TENUTA SAN GUIDO", p.W / 2, p.H * 0.87, { font: "roman", size: 30, color: "#1f3a5f", spacing: 0.25, kind: "name" });
    },
  },
  drc: {
    front: (p) => {
      p.paper("#f1e8d2", { aged: 0.3 });
      p.frame(28, 28, p.W - 56, p.H - 56, "#1b1410", 2);
      p.frame(40, 40, p.W - 80, p.H - 80, "#1b1410", 1);
      p.text("APPELLATION ROMANÉE-CONTI CONTRÔLÉE", p.W / 2, p.H * 0.13, { font: "roman", size: 26, color: "#1b1410", spacing: 0.06, kind: "name", maxWidth: 860 });
      p.text("ROMANÉE-CONTI", p.W / 2, p.H * 0.32, { font: "roman", size: 96, weight: 700, color: "#1b1410", kind: "name", maxWidth: 860 });
      p.text("Nº 03871", p.W / 2, p.H * 0.47, { font: "serif", size: 44, color: "#8e1520" });
      p.text("5.912 BOUTEILLES RÉCOLTÉES", p.W / 2, p.H * 0.55, { font: "roman", size: 26, color: "#1b1410", spacing: 0.1 });
      p.text(p.vintage ? `ANNÉE ${p.vintage}` : "", p.W / 2, p.H * 0.66, { font: "roman", size: 50, color: "#1b1410", spacing: 0.1 });
      p.text("Société Civile du Domaine de la Romanée-Conti", p.W / 2, p.H * 0.79, { font: "serif", size: 34, italic: true, color: "#1b1410", kind: "name", maxWidth: 860 });
      p.text("PROPRIÉTAIRE À VOSNE-ROMANÉE (CÔTE-D'OR)", p.W / 2, p.H * 0.87, { font: "roman", size: 22, color: "#1b1410", spacing: 0.06, kind: "info", maxWidth: 860 });
    },
  },
  margaux: {
    front: (p) => {
      p.paper("#f2e9d4", { aged: 0.3 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#1b1410", 3);
      portico(p, p.W / 2, p.H * 0.22, 700, "#1b1410");
      p.text("GRAND VIN", p.W / 2, p.H * 0.43, { font: "roman", size: 34, color: "#8e1520", spacing: 0.35 });
      p.text("CHÂTEAU MARGAUX", p.W / 2, p.H * 0.53, { font: "roman", size: 84, weight: 700, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text("PREMIER GRAND CRU CLASSÉ", p.W / 2, p.H * 0.62, { font: "roman", size: 30, color: "#1b1410", spacing: 0.15 });
      p.text("APPELLATION MARGAUX CONTRÔLÉE", p.W / 2, p.H * 0.69, { font: "roman", size: 26, color: "#1b1410", spacing: 0.08, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.8, { font: "didone", size: 66, weight: 700, color: "#1b1410" });
      p.text("MIS EN BOUTEILLE AU CHÂTEAU", p.W / 2, p.H * 0.91, { font: "roman", size: 20, color: "#1b1410", spacing: 0.15 });
    },
  },
  latour: {
    front: (p) => {
      p.paper("#f4ecd9", { aged: 0.25 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#1b1410", 2);
      towerLion(p, p.W / 2, p.H * 0.25, 300, "#1b1410");
      p.text("GRAND VIN", p.W / 2, p.H * 0.47, { font: "roman", size: 44, color: "#8e1520", spacing: 0.3 });
      p.text("DE", p.W / 2, p.H * 0.53, { font: "roman", size: 28, color: "#1b1410" });
      p.text("CHÂTEAU LATOUR", p.W / 2, p.H * 0.6, { font: "roman", size: 88, weight: 700, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text("PREMIER GRAND CRU CLASSÉ", p.W / 2, p.H * 0.69, { font: "roman", size: 28, color: "#1b1410", spacing: 0.15 });
      p.text("APPELLATION PAUILLAC CONTRÔLÉE", p.W / 2, p.H * 0.75, { font: "roman", size: 24, color: "#1b1410", spacing: 0.08, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.85, { font: "didone", size: 62, weight: 700, color: "#8e1520" });
    },
  },
  lafite: {
    front: (p) => {
      p.paper("#f3ead6", { aged: 0.35 });
      p.frame(22, 22, p.W - 44, p.H - 44, "#1b1410", 2);
      E.chateau(p, p.W / 2, p.H * 0.24, 640, { color: "#1b1410" }, 5);
      p.text("Château", p.W / 2, p.H * 0.47, { font: "serif", size: 60, italic: true, color: "#1b1410", kind: "name" });
      p.text("Lafite Rothschild", p.W / 2, p.H * 0.56, { font: "serif", size: 104, italic: true, weight: 600, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text(V(p), p.W / 2, p.H * 0.68, { font: "serif", size: 72, weight: 600, color: "#1b1410" });
      p.text("PAUILLAC", p.W / 2, p.H * 0.78, { font: "roman", size: 44, color: "#1b1410", spacing: 0.3, kind: "info" });
      p.text("Mis en bouteille au château", p.W / 2, p.H * 0.88, { font: "serif", size: 32, italic: true, color: "#1b1410" });
    },
  },
  hautbrion: {
    front: (p) => {
      p.paper("#f4ecd9", { aged: 0.3 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#1b1410", 2);
      E.chateau(p, p.W / 2, p.H * 0.24, 640, { color: "#1b1410" }, 2);
      p.text("CHÂTEAU", p.W / 2, p.H * 0.48, { font: "roman", size: 44, color: "#1b1410", spacing: 0.2, kind: "name" });
      p.text("HAUT-BRION", p.W / 2, p.H * 0.57, { font: "roman", size: 104, weight: 700, color: "#1b1410", kind: "name" });
      p.text("PESSAC-LÉOGNAN", p.W / 2, p.H * 0.67, { font: "roman", size: 34, color: "#8e1520", spacing: 0.2, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.79, { font: "didone", size: 62, weight: 700, color: "#1b1410" });
      p.text("MIS EN BOUTEILLE AU CHÂTEAU", p.W / 2, p.H * 0.9, { font: "roman", size: 20, color: "#1b1410", spacing: 0.15 });
    },
  },
  yquem: {
    front: (p) => {
      p.paper("#f6eedb", { aged: 0.2 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#b88f3a", 5, "gold");
      E.crown(p, p.W / 2, p.H * 0.16, 170, { color: "#b88f3a", foil: "gold" });
      p.text("Château d'Yquem", p.W / 2, p.H * 0.38, { font: "script", size: 136, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text("LUR-SALUCES", p.W / 2, p.H * 0.51, { font: "roman", size: 44, color: "#1b1410", spacing: 0.25, kind: "name" });
      p.text(V(p), p.W / 2, p.H * 0.66, { font: "roman", size: 84, weight: 700, color: "#b88f3a", foil: "gold" });
      p.text("SAUTERNES", p.W / 2, p.H * 0.78, { font: "roman", size: 40, color: "#1b1410", spacing: 0.3, kind: "info" });
      p.text("APPELLATION SAUTERNES CONTRÔLÉE", p.W / 2, p.H * 0.86, { font: "roman", size: 22, color: "#1b1410", spacing: 0.1, kind: "info" });
    },
  },
  cloudybay: {
    front: (p) => {
      p.paper("#fbfbf8", { aged: 0.02, grain: 0.2 });
      E.mountains(p, p.W / 2, p.H * 0.36, 860, { color: "#6b7f96" }, 3, true);
      p.text("CLOUDY BAY", p.W / 2, p.H * 0.52, { font: "roman", size: 96, color: "#1b2530", spacing: 0.18, kind: "name" });
      p.text("SAUVIGNON BLANC", p.W / 2, p.H * 0.64, { font: "roman", size: 40, color: "#1b2530", spacing: 0.25, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.74, { font: "roman", size: 46, color: "#1b2530" });
      p.text("MARLBOROUGH · NEW ZEALAND", p.W / 2, p.H * 0.86, { font: "roman", size: 26, color: "#1b2530", spacing: 0.2, kind: "info" });
    },
  },
  kj: {
    front: (p) => {
      p.paper("#f7f2e6", { aged: 0.08 });
      E.leaf(p, p.W / 2, p.H * 0.24, 330, ["#c0392b", "#e67e22", "#f1c40f", "#6a8f2e"]);
      p.text("KENDALL-JACKSON", p.W / 2, p.H * 0.5, { font: "serif", size: 84, weight: 600, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text("VINTNER'S RESERVE", p.W / 2, p.H * 0.6, { font: "roman", size: 40, color: "#8e1520", spacing: 0.2, kind: "name" });
      p.text("CHARDONNAY", p.W / 2, p.H * 0.71, { font: "roman", size: 52, color: "#1b1410", spacing: 0.15, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.8, { font: "serif", size: 46, color: "#1b1410" });
      p.text("CALIFORNIA", p.W / 2, p.H * 0.89, { font: "roman", size: 28, color: "#1b1410", spacing: 0.3, kind: "info" });
    },
  },
  barefoot: {
    front: (p) => {
      p.paper("#fbf9f3", { aged: 0.02 });
      footprint(p, p.W / 2, p.H * 0.28, 330, "#9b1b30");
      p.text("Barefoot", p.W / 2, p.H * 0.6, { font: "script", size: 170, color: "#1b1410", kind: "name" });
      p.text("CABERNET SAUVIGNON", p.W / 2, p.H * 0.76, { font: "grotesk", size: 44, weight: 700, color: "#9b1b30", spacing: 0.1, kind: "info" });
      p.text("CALIFORNIA", p.W / 2, p.H * 0.86, { font: "grotesk", size: 28, color: "#1b1410", spacing: 0.3, kind: "info" });
    },
  },
  almaviva: {
    front: (p) => {
      p.paper("#f3ecdc", { aged: 0.15 });
      p.frame(28, 28, p.W - 56, p.H - 56, "#1b1410", 2);
      kultrun(p, p.W / 2, p.H * 0.25, 300, "#6d1a1f");
      p.text("ALMAVIVA", p.W / 2, p.H * 0.5, { font: "roman", size: 110, color: "#1b1410", spacing: 0.15, kind: "name" });
      p.text("PUENTE ALTO", p.W / 2, p.H * 0.61, { font: "roman", size: 36, color: "#1b1410", spacing: 0.3, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.71, { font: "roman", size: 52, color: "#6d1a1f" });
      p.text("VIÑA ALMAVIVA · CONCHA Y TORO · BARON PHILIPPE DE ROTHSCHILD", p.W / 2, p.H * 0.84, { font: "roman", size: 20, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text("MAIPO VALLEY · CHILE", p.W / 2, p.H * 0.9, { font: "roman", size: 22, color: "#1b1410", spacing: 0.2, kind: "info" });
    },
  },
  sanpedro1865: {
    front: (p) => {
      p.paper("#111111", { aged: 0, grain: 0.15, rough: 0.55 });
      p.frame(28, 28, p.W - 56, p.H - 56, "#c9a24e", 2, "gold");
      p.text("1865", p.W / 2, p.H * 0.34, { font: "didone", size: 250, weight: 900, color: "#c9a24e", foil: "gold", kind: "name" });
      p.text("SINGLE VINEYARD", p.W / 2, p.H * 0.52, { font: "roman", size: 40, color: "#e9e0c8", spacing: 0.3 });
      p.text("CABERNET SAUVIGNON", p.W / 2, p.H * 0.62, { font: "roman", size: 40, color: "#e9e0c8", spacing: 0.15, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.72, { font: "didone", size: 50, color: "#c9a24e", foil: "gold" });
      p.text("VIÑA SAN PEDRO", p.W / 2, p.H * 0.83, { font: "roman", size: 30, color: "#e9e0c8", spacing: 0.25, kind: "name" });
      p.text("MAIPO VALLEY · CHILE", p.W / 2, p.H * 0.9, { font: "roman", size: 22, color: "#bbb", spacing: 0.2, kind: "info" });
    },
  },
  mateus: {
    front: (p) => {
      p.paper("#f7f1e3", { aged: 0.1 });
      p.frame(20, 20, p.W - 40, p.H - 40, "#8a1c2b", 6);
      palace(p, p.W / 2, p.H * 0.3, 760, "#5b3a22");
      p.text("MATEUS", p.W / 2, p.H * 0.62, { font: "roman", size: 130, weight: 700, color: "#8a1c2b", spacing: 0.1, kind: "name" });
      p.text("Rosé", p.W / 2, p.H * 0.76, { font: "script", size: 110, color: "#8a1c2b", kind: "name" });
      p.text("PRODUCT OF PORTUGAL", p.W / 2, p.H * 0.9, { font: "roman", size: 28, color: "#5b3a22", spacing: 0.2, kind: "info" });
    },
  },
  drloosen: {
    front: (p) => {
      p.paper("#fbfbf8", { aged: 0.02, grain: 0.2 });
      p.text("Dr. L", p.W / 2, p.H * 0.36, { font: "didone", size: 300, weight: 900, color: "#141414", kind: "name" });
      p.text("RIESLING", p.W / 2, p.H * 0.62, { font: "grotesk", size: 64, weight: 700, color: "#141414", spacing: 0.2, kind: "info" });
      p.text("MOSEL", p.W / 2, p.H * 0.72, { font: "grotesk", size: 40, color: "#141414", spacing: 0.4, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.81, { font: "grotesk", size: 38, color: "#141414" });
      p.text("Dr. Loosen · Bernkastel", p.W / 2, p.H * 0.9, { font: "serif", size: 32, italic: true, color: "#141414", kind: "name" });
    },
  },
  freixenet: {
    front: (p) => {
      p.paper("#121212", { aged: 0, grain: 0.1, rough: 0.7 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#c9a24e", 3, "gold");
      E.crest(p, p.W / 2, p.H * 0.2, 150, { color: "#c9a24e", foil: "gold" }, 1);
      p.text("FREIXENET", p.W / 2, p.H * 0.45, { font: "roman", size: 100, weight: 700, color: "#c9a24e", foil: "gold", spacing: 0.1, kind: "name" });
      p.text("CORDON NEGRO", p.W / 2, p.H * 0.58, { font: "roman", size: 52, color: "#e9e0c8", spacing: 0.25, kind: "name" });
      p.text("CAVA · BRUT", p.W / 2, p.H * 0.72, { font: "roman", size: 40, color: "#e9e0c8", spacing: 0.3, kind: "info" });
      p.text("SANT SADURNÍ D'ANOIA · ESPAÑA", p.W / 2, p.H * 0.85, { font: "roman", size: 22, color: "#bbb", spacing: 0.15, kind: "info" });
    },
  },
  jadot: {
    front: (p) => {
      p.paper("#f3e7c6", { aged: 0.25 });
      p.frame(26, 26, p.W - 52, p.H - 52, "#6b2a1a", 3);
      bacchus(p, p.W / 2, p.H * 0.22, 250, "#6b2a1a");
      p.text("LOUIS JADOT", p.W / 2, p.H * 0.47, { font: "roman", size: 96, weight: 700, color: "#1b1410", spacing: 0.08, kind: "name" });
      p.text("BOURGOGNE", p.W / 2, p.H * 0.59, { font: "roman", size: 56, color: "#6b2a1a", spacing: 0.2, kind: "info" });
      p.text("Pinot Noir", p.W / 2, p.H * 0.68, { font: "serif", size: 50, italic: true, color: "#1b1410", kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.78, { font: "didone", size: 50, color: "#1b1410" });
      p.text("MAISON FONDÉE EN 1859 · BEAUNE", p.W / 2, p.H * 0.89, { font: "roman", size: 22, color: "#1b1410", spacing: 0.12, kind: "info" });
    },
  },
  duboeuf: {
    front: (p) => {
      p.paper("#fbf8f1", { aged: 0.02 });
      flowerField(p, 30, 30, p.W - 60, p.H * 0.44, Number(p.vintage ?? 3));
      p.text("Georges Duboeuf", p.W / 2, p.H * 0.6, { font: "script", size: 120, color: "#1b1410", kind: "name" });
      p.text("BEAUJOLAIS NOUVEAU", p.W / 2, p.H * 0.73, { font: "roman", size: 46, color: "#8e1520", spacing: 0.15, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.84, { font: "didone", size: 50, color: "#1b1410" });
    },
  },
  whisperingangel: {
    front: (p) => {
      p.paper("#fbfaf6", { aged: 0.02, grain: 0.2 });
      angel(p, p.W / 2, p.H * 0.22, 220, "#6f6456", true);
      p.text("Whispering Angel", p.W / 2, p.H * 0.47, { font: "script", size: 124, color: "#2b2520", kind: "name", maxWidth: 880 });
      p.text("CÔTES DE PROVENCE", p.W / 2, p.H * 0.61, { font: "roman", size: 36, color: "#2b2520", spacing: 0.2, kind: "info" });
      p.text("ROSÉ", p.W / 2, p.H * 0.7, { font: "roman", size: 44, color: "#c9837a", spacing: 0.35 });
      p.text(V(p), p.W / 2, p.H * 0.79, { font: "roman", size: 40, color: "#2b2520" });
      p.text("CAVES D'ESCLANS", p.W / 2, p.H * 0.89, { font: "roman", size: 26, color: "#2b2520", spacing: 0.25, kind: "name" });
    },
  },
  chianti: {
    front: (p) => {
      p.paper("#f4ecd6", { aged: 0.2 });
      p.frame(16, 16, p.W - 32, p.H - 32, "#8e1520", 6);
      rooster(p, p.W * 0.18, p.H * 0.5, 260, "#141414");
      p.text("CHIANTI", p.W * 0.58, p.H * 0.42, { font: "roman", size: 150, weight: 700, color: "#8e1520", spacing: 0.08, kind: "name" });
      p.text("Denominazione di Origine Controllata e Garantita", p.W * 0.58, p.H * 0.72, { font: "serif", size: 36, italic: true, color: "#141414", maxWidth: 640 });
    },
  },
  tiopepe: {
    front: (p) => {
      p.paper("#fbf8f0", { aged: 0.08 });
      p.frame(22, 22, p.W - 44, p.H - 44, "#b3141c", 5);
      p.text("Tio Pepe", p.W / 2, p.H * 0.3, { font: "didone", size: 170, weight: 900, italic: true, color: "#b3141c", kind: "name" });
      p.text("FINO", p.W / 2, p.H * 0.5, { font: "roman", size: 84, weight: 700, color: "#141414", spacing: 0.3 });
      p.text("MUY SECO", p.W / 2, p.H * 0.6, { font: "roman", size: 36, color: "#141414", spacing: 0.3 });
      p.text("JEREZ · XÉRÈS · SHERRY", p.W / 2, p.H * 0.72, { font: "roman", size: 34, color: "#141414", spacing: 0.15, kind: "info" });
      p.text("GONZÁLEZ BYASS", p.W / 2, p.H * 0.86, { font: "roman", size: 40, color: "#b3141c", spacing: 0.2, kind: "name" });
    },
  },
  taylors: {
    front: (p) => {
      p.paper("#f7f1e2", { aged: 0.2 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#1b1410", 3);
      p.text("TAYLOR'S", p.W / 2, p.H * 0.24, { font: "roman", size: 130, weight: 700, color: "#a3161d", spacing: 0.08, kind: "name" });
      p.text("VINTAGE PORT", p.W / 2, p.H * 0.42, { font: "roman", size: 64, color: "#1b1410", spacing: 0.15 });
      p.text(V(p), p.W / 2, p.H * 0.56, { font: "didone", size: 90, weight: 700, color: "#1b1410" });
      p.text("TAYLOR, FLADGATE & YEATMAN", p.W / 2, p.H * 0.72, { font: "roman", size: 32, color: "#1b1410", spacing: 0.08, kind: "name", maxWidth: 860 });
      p.text("PORTO · PRODUCT OF PORTUGAL", p.W / 2, p.H * 0.84, { font: "roman", size: 26, color: "#1b1410", spacing: 0.15, kind: "info" });
    },
  },
  grange: {
    front: (p) => {
      p.paper("#f8f5ee", { aged: 0.05 });
      p.text("Penfolds", p.W / 2, p.H * 0.2, { font: "script", size: 150, color: "#b3141c", kind: "name" });
      p.text("GRANGE", p.W / 2, p.H * 0.42, { font: "roman", size: 140, weight: 700, color: "#141414", spacing: 0.15, kind: "name" });
      p.text("BIN 95", p.W / 2, p.H * 0.55, { font: "roman", size: 40, color: "#141414", spacing: 0.3 });
      p.text("SHIRAZ", p.W / 2, p.H * 0.65, { font: "roman", size: 44, color: "#141414", spacing: 0.3, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.76, { font: "roman", size: 54, color: "#141414" });
      p.text("SOUTH AUSTRALIA", p.W / 2, p.H * 0.88, { font: "roman", size: 26, color: "#141414", spacing: 0.25, kind: "info" });
    },
  },
  mondavi: {
    front: (p) => {
      p.paper("#f4ecd9", { aged: 0.12 });
      missionArch(p, p.W / 2, p.H * 0.25, 560, "#1b1410");
      p.text("ROBERT MONDAVI", p.W / 2, p.H * 0.5, { font: "roman", size: 84, weight: 700, color: "#1b1410", spacing: 0.06, kind: "name", maxWidth: 880 });
      p.text("WINERY", p.W / 2, p.H * 0.58, { font: "roman", size: 34, color: "#1b1410", spacing: 0.4, kind: "name" });
      p.text("NAPA VALLEY", p.W / 2, p.H * 0.68, { font: "roman", size: 40, color: "#8e1520", spacing: 0.2, kind: "info" });
      p.text("CABERNET SAUVIGNON", p.W / 2, p.H * 0.76, { font: "roman", size: 40, color: "#1b1410", spacing: 0.12, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.86, { font: "didone", size: 50, color: "#1b1410" });
    },
  },
  bikaver: {
    front: (p) => {
      p.paper("#f3ead6", { aged: 0.2 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#7d0f18", 4);
      bullHead(p, p.W / 2, p.H * 0.24, 300, "#7d0f18");
      p.text("EGRI", p.W / 2, p.H * 0.5, { font: "roman", size: 70, color: "#1b1410", spacing: 0.3, kind: "name" });
      p.text("BIKAVÉR", p.W / 2, p.H * 0.61, { font: "roman", size: 120, weight: 700, color: "#7d0f18", kind: "name" });
      p.text(V(p), p.W / 2, p.H * 0.75, { font: "didone", size: 50, color: "#1b1410" });
      p.text("PRODUCT OF HUNGARY", p.W / 2, p.H * 0.87, { font: "roman", size: 26, color: "#1b1410", spacing: 0.2, kind: "info" });
    },
  },
  bluenun: {
    front: (p) => {
      p.paper("#1f47a8", { aged: 0, grain: 0.2, rough: 0.5 });
      p.frame(24, 24, p.W - 48, p.H - 48, "#e8d9a8", 3, "gold");
      nuns(p, p.W / 2, p.H * 0.24, 230, "#f4f1e8");
      p.text("Blue Nun", p.W / 2, p.H * 0.5, { font: "script", size: 160, color: "#ffffff", kind: "name" });
      p.text("RHEINHESSEN", p.W / 2, p.H * 0.66, { font: "roman", size: 40, color: "#e8d9a8", spacing: 0.3, kind: "info" });
      p.text("Qualitätswein", p.W / 2, p.H * 0.75, { font: "serif", size: 44, italic: true, color: "#ffffff" });
      p.text("PRODUCE OF GERMANY", p.W / 2, p.H * 0.88, { font: "roman", size: 26, color: "#e8d9a8", spacing: 0.2, kind: "info" });
    },
  },
  ruinart: {
    front: (p) => {
      const arch = (c: C, inset: number) => {
        c.moveTo(inset, p.H - inset);
        c.lineTo(inset, p.H * 0.3);
        c.quadraticCurveTo(inset, inset, p.W / 2, inset);
        c.quadraticCurveTo(p.W - inset, inset, p.W - inset, p.H * 0.3);
        c.lineTo(p.W - inset, p.H - inset);
        c.closePath();
      };
      p.paper("#f7f2e4", { aged: 0.05, grain: 0.3 });
      p.draw((c, ink) => {
        c.strokeStyle = ink("#c9a24e");
        c.lineWidth = 6;
        c.beginPath();
        arch(c, 22);
        c.stroke();
      }, "gold");
      p.text("MAISON FONDÉE EN 1729", p.W / 2, p.H * 0.22, { font: "roman", size: 28, color: "#6b5430", spacing: 0.2 });
      p.text("RUINART", p.W / 2, p.H * 0.42, { font: "roman", size: 150, weight: 700, color: "#1d2b22", spacing: 0.1, kind: "name" });
      p.text("Blanc de Blancs", p.W / 2, p.H * 0.6, { font: "script", size: 110, color: "#a67c2e", foil: "gold", kind: "name" });
      p.text("CHAMPAGNE · REIMS", p.W / 2, p.H * 0.8, { font: "roman", size: 34, color: "#1d2b22", spacing: 0.25, kind: "info" });
      p.cutout((c) => arch(c, 10));
    },
  },
  ott: {
    front: (p) => {
      p.paper("#fbfaf6", { aged: 0, grain: 0.15 });
      p.text("DOMAINES OTT", p.W / 2, p.H * 0.28, { font: "roman", size: 74, color: "#2b2520", spacing: 0.3, kind: "name" });
      p.line(p.W * 0.35, p.H * 0.4, p.W * 0.65, p.H * 0.4, "#b7896e", 2);
      p.text("Château de Selle", p.W / 2, p.H * 0.52, { font: "serif", size: 80, italic: true, color: "#2b2520", kind: "name" });
      p.text("CÔTES DE PROVENCE", p.W / 2, p.H * 0.68, { font: "roman", size: 36, color: "#2b2520", spacing: 0.25, kind: "info" });
      p.text(p.vintage ? `ROSÉ · ${p.vintage}` : "ROSÉ", p.W / 2, p.H * 0.8, { font: "roman", size: 32, color: "#b7896e", spacing: 0.3 });
    },
  },
  chevalblanc: {
    front: (p) => {
      p.paper("#f6efdc", { aged: 0.2 });
      p.rect(22, 22, p.W - 44, p.H * 0.08, "#d4b24c", "gold");
      p.frame(22, 22, p.W - 44, p.H - 44, "#b88f3a", 4, "gold");
      p.text("Château", p.W / 2, p.H * 0.28, { font: "script", size: 100, color: "#1b1410", kind: "name" });
      p.text("Cheval Blanc", p.W / 2, p.H * 0.42, { font: "script", size: 160, color: "#1b1410", kind: "name", maxWidth: 880 });
      p.text("1ER GRAND CRU CLASSÉ", p.W / 2, p.H * 0.56, { font: "roman", size: 34, color: "#8e1520", spacing: 0.2 });
      p.text("SAINT-ÉMILION GRAND CRU", p.W / 2, p.H * 0.64, { font: "roman", size: 30, color: "#1b1410", spacing: 0.15, kind: "info" });
      p.text(V(p), p.W / 2, p.H * 0.78, { font: "didone", size: 70, weight: 700, color: "#b88f3a", foil: "gold" });
      p.text("MIS EN BOUTEILLE AU CHÂTEAU", p.W / 2, p.H * 0.9, { font: "roman", size: 20, color: "#1b1410", spacing: 0.15 });
    },
  },
};
