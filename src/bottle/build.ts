import * as THREE from "three";
import type { LabelPlace, Wine } from "../data/wines";
import { Painter, type Hide } from "../label/painter";
import { designFor } from "../label/designs/index";
import { glassMaterials, liquidMaterial, GLASS } from "./materials";
import { SHAPES, insetProfile, radiusAt, smooth, wallOf, type Pt, type ShapeDef } from "./shapes";

const SEG = 128;
const PX_PER_CM = 88;

const v2 = (pts: Pt[]) => pts.map(([r, y]) => new THREE.Vector2(r, y));

/** 복스보이텔·마테우스처럼 옆이 납작한 병: 몸통 쪽 z 를 줄인다 */
function flatten(geo: THREE.BufferGeometry, def: ShapeDef) {
  const f = def.flatten;
  if (!f) return;
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const nor = geo.attributes.normal as THREE.BufferAttribute | undefined;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const t = THREE.MathUtils.smoothstep(y, f.y0, f.y1);
    const k = f.k + (1 - f.k) * t;
    pos.setZ(i, pos.getZ(i) * k);
    if (nor) {
      const n = new THREE.Vector3(nor.getX(i), nor.getY(i), nor.getZ(i) / k).normalize();
      nor.setXYZ(i, n.x, n.y, n.z);
    }
  }
  pos.needsUpdate = true;
  if (nor) nor.needsUpdate = true;
}

/** 벽 윤곽을 따라 y0~y1 구간을 감싸는 띠 (라벨·캡슐·철망·짚) */
function band(wall: Pt[], y0: number, y1: number, off: number, arcDeg: number, turnDeg = 0, steps = 36) {
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i < steps; i++) {
    const y = y0 + ((y1 - y0) * i) / (steps - 1);
    pts.push(new THREE.Vector2(radiusAt(wall, y) + off, y));
  }
  const arc = THREE.MathUtils.degToRad(arcDeg);
  const seg = Math.max(8, Math.round((SEG * arcDeg) / 360));
  return new THREE.LatheGeometry(pts, seg, THREE.MathUtils.degToRad(turnDeg) - arc / 2, arc);
}

export interface LabelSurface {
  place: LabelPlace;
  canvas: HTMLCanvasElement;
  mr: HTMLCanvasElement;
  tex: THREE.CanvasTexture;
  mrTex: THREE.CanvasTexture;
  H: number;
  draw: (p: Painter) => void;
}

export interface BuiltBottle {
  group: THREE.Group;
  height: number;
  width: number;
  setHide(h: Hide): void;
  dispose(): void;
}

function labelSize(wall: Pt[], place: LabelPlace) {
  const rMid = radiusAt(wall, (place.y0 + place.y1) / 2);
  const wCm = (place.arc / 360) * Math.PI * 2 * rMid;
  const hCm = place.y1 - place.y0;
  return { wCm, hCm };
}

function makeSurface(wall: Pt[], place: LabelPlace, draw: (p: Painter) => void): LabelSurface {
  const { wCm, hCm } = labelSize(wall, place);
  const canvas = document.createElement("canvas");
  canvas.width = Math.min(2048, Math.round(wCm * PX_PER_CM));
  canvas.height = Math.min(2048, Math.round(hCm * PX_PER_CM));
  const mr = document.createElement("canvas");
  mr.width = canvas.width;
  mr.height = canvas.height;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const mrTex = new THREE.CanvasTexture(mr);
  mrTex.anisotropy = 8;
  return { place, canvas, mr, tex, mrTex, H: (1000 * hCm) / wCm, draw };
}

function paint(s: LabelSurface, hide: Hide, seed: string, vintage: string | null) {
  const c = s.canvas.getContext("2d")!;
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.clearRect(0, 0, s.canvas.width, s.canvas.height);
  const p = new Painter(s.canvas, s.mr, s.H, hide, seed, vintage);
  s.draw(p);
  s.tex.needsUpdate = true;
  s.mrTex.needsUpdate = true;
}

function labelMesh(wall: Pt[], def: ShapeDef, s: LabelSurface, off: number) {
  const geo = band(wall, s.place.y0, s.place.y1, off, s.place.arc, s.place.turn ?? 0);
  flatten(geo, def);
  const front = new THREE.MeshStandardMaterial({
    map: s.tex,
    roughnessMap: s.mrTex,
    metalnessMap: s.mrTex,
    roughness: 1,
    metalness: 1,
    alphaTest: 0.5,
    transparent: false,
    envMapIntensity: 1.1,
  });
  const back = new THREE.MeshStandardMaterial({ map: s.tex, color: "#9c958a", alphaTest: 0.5, side: THREE.BackSide, roughness: 0.9 });
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, front), new THREE.Mesh(geo, back));
  return g;
}

function capsuleMesh(wall: Pt[], def: ShapeDef, wine: Wine) {
  const cap = wine.capsule;
  const top = def.top;
  const to = cap.to ?? top - 5;
  const pts: Pt[] = [[radiusAt(wall, to) + 0.01, to - 0.001]];
  const n = 40;
  for (let i = 0; i <= n; i++) {
    const y = to + ((top - to) * i) / n;
    pts.push([radiusAt(wall, Math.min(y, top - 0.05)) + 0.06, y]);
  }
  if (def.sparkling) {
    // 포일 속 코르크 머리
    pts.push([1.7, top + 0.35], [1.95, top + 1.0], [1.98, top + 1.7], [1.78, top + 2.25], [1.3, top + 2.55], [0.5, top + 2.62], [0, top + 2.63]);
  } else {
    const rt = radiusAt(wall, top - 0.05) + 0.06;
    pts.push([rt * 0.97, top + 0.06], [rt * 0.6, top + 0.09], [0, top + 0.1]);
  }
  const geo = new THREE.LatheGeometry(v2(pts), SEG);
  const mat = new THREE.MeshStandardMaterial({
    color: cap.color,
    metalness: cap.metal ?? 0.5,
    roughness: cap.rough ?? 0.38,
    envMapIntensity: 1.2,
  });
  const group = new THREE.Group();
  group.add(new THREE.Mesh(geo, mat));
  if (def.sparkling) {
    // 뮈즐레 뚜껑(플라크)
    const plaque = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.25, 0.12, 48),
      new THREE.MeshStandardMaterial({ color: "#d9bf72", metalness: 1, roughness: 0.25 }),
    );
    plaque.position.y = top + 2.66;
    group.add(plaque);
  }
  return group;
}

function strawTexture() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#c79a52";
  g.fillRect(0, 0, 256, 256);
  for (let x = 0; x < 256; x += 4) {
    const l = 150 + Math.random() * 60;
    g.fillStyle = `rgb(${l + 40},${l + 10},${l - 60})`;
    g.fillRect(x, 0, 3, 256);
    g.fillStyle = "rgba(80,50,20,0.35)";
    g.fillRect(x + 3, 0, 1, 256);
  }
  for (let y = 0; y < 256; y += 32) {
    g.fillStyle = "rgba(90,60,25,0.55)";
    g.fillRect(0, y, 256, 3);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(10, 3);
  return t;
}

function meshTexture() {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000";
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = "#fff";
  g.lineWidth = 7;
  g.beginPath();
  g.moveTo(0, 64);
  g.lineTo(64, 0);
  g.lineTo(128, 64);
  g.lineTo(64, 128);
  g.closePath();
  g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(34, 26);
  return t;
}

export function buildBottle(wine: Wine, hide: Hide, vintage: string | null): BuiltBottle {
  const def = SHAPES[wine.shape];
  const wall = wallOf(def);
  const group = new THREE.Group();
  const disposables: { dispose(): void }[] = [];
  const track = <T extends { dispose(): void }>(x: T) => (disposables.push(x), x);

  // 유리
  const glassGeo = track(new THREE.LatheGeometry(v2(smooth(def.pts)), SEG));
  flatten(glassGeo, def);
  const glassMats = glassMaterials(wine.glass).map(track);
  glassMats.forEach((m, i) => {
    const mesh = new THREE.Mesh(glassGeo, m);
    mesh.renderOrder = 10 + i;
    group.add(mesh);
  });

  // 와인
  if (!GLASS[wine.glass].opaque) {
    const liqGeo = track(new THREE.LatheGeometry(v2(insetProfile(def, 0.36)), 72));
    flatten(liqGeo, def);
    group.add(new THREE.Mesh(liqGeo, track(liquidMaterial(wine.liquid))));
  }

  // 라벨
  const d = designFor(wine);
  const surfaces: LabelSurface[] = [];
  const addSurface = (place: LabelPlace, draw: (p: Painter) => void, off: number) => {
    const s = makeSurface(wall, place, draw);
    surfaces.push(s);
    track(s.tex);
    track(s.mrTex);
    const m = labelMesh(wall, def, s, off);
    m.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        track(o.geometry);
        track(o.material as THREE.Material);
      }
    });
    group.add(m);
  };
  addSurface(wine.label, d.front, 0.04);
  if (wine.neck && d.neck) addSurface(wine.neck, d.neck, 0.075);
  if (d.decal && d.decalPlace) addSurface(d.decalPlace, d.decal, 0.025);

  // 캡슐
  const cap = capsuleMesh(wall, def, wine);
  cap.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      track(o.geometry);
      track(o.material as THREE.Material);
    }
  });
  group.add(cap);

  // 장식
  for (const ex of wine.extras ?? []) {
    if (ex === "straw") {
      const pts = insetProfile({ ...def, fill: 10.4 }, -0.32).slice(0, -1);
      const geo = track(new THREE.LatheGeometry(v2(pts), SEG));
      const mat = track(new THREE.MeshStandardMaterial({ map: track(strawTexture()), roughness: 0.9, side: THREE.DoubleSide }));
      group.add(new THREE.Mesh(geo, mat));
      const rim = new THREE.Mesh(
        track(new THREE.TorusGeometry(radiusAt(wall, 10.3) + 0.32, 0.28, 10, 96)),
        track(new THREE.MeshStandardMaterial({ color: "#b3813f", roughness: 0.85 })),
      );
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 10.3;
      group.add(rim);
    } else if (ex === "mesh") {
      const geo = track(band(wall, 0.6, def.neckY - 0.4, 0.16, 360, 0, 60));
      const mat = track(
        new THREE.MeshStandardMaterial({
          color: "#d8b25a",
          metalness: 1,
          roughness: 0.3,
          alphaMap: track(meshTexture()),
          alphaTest: 0.5,
          side: THREE.DoubleSide,
        }),
      );
      group.add(new THREE.Mesh(geo, mat));
    }
  }

  const seed = wine.id;
  const setHide = (h: Hide) => surfaces.forEach((s) => paint(s, h, seed, vintage));
  setHide(hide);

  let width = 0;
  for (const [r] of def.pts) width = Math.max(width, r * 2);
  return {
    group,
    height: def.top + (def.sparkling ? 2.7 : 0.1),
    width,
    setHide,
    dispose: () => disposables.forEach((x) => x.dispose()),
  };
}
