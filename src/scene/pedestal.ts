import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";

// 받침대: 윤을 낸 검은 대리석 상판(병이 비친다) + 선반 가공한 월넛 받침 + 황동 띠

/** 값 노이즈 (대리석 결·나뭇결용) */
function makeNoise(seed: number) {
  const P = new Uint8Array(512);
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const perm = Array.from({ length: 256 }, (_, i) => i).sort(() => rnd() - 0.5);
  for (let i = 0; i < 512; i++) P[i] = perm[i & 255];
  const V = new Float32Array(256).map(() => rnd());
  const fade = (t: number) => t * t * (3 - 2 * t);
  const n2 = (x: number, y: number) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;
    const h = (a: number, b: number) => V[P[(P[a & 255] + b) & 255]];
    const u = fade(xf);
    const v = fade(yf);
    const a = h(xi, yi) + (h(xi + 1, yi) - h(xi, yi)) * u;
    const b = h(xi, yi + 1) + (h(xi + 1, yi + 1) - h(xi, yi + 1)) * u;
    return a + (b - a) * v;
  };
  return (x: number, y: number, oct = 5) => {
    let sum = 0;
    let amp = 0.5;
    let f = 1;
    for (let o = 0; o < oct; o++) {
      sum += n2(x * f, y * f) * amp;
      amp *= 0.5;
      f *= 2.03;
    }
    return sum;
  };
}

function marbleTextures(size = 1024) {
  const noise = makeNoise(7);
  const color = document.createElement("canvas");
  color.width = color.height = size;
  const rough = document.createElement("canvas");
  rough.width = rough.height = size;
  const g = color.getContext("2d")!;
  const r = rough.getContext("2d")!;
  const img = g.createImageData(size, size);
  const rimg = r.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      const t = noise(u * 1.6, v * 1.6, 5);
      // 한 방향으로 흐르는 굵은 결 + 가지 치는 가는 결
      const vein1 = Math.pow(1 - Math.abs(Math.sin((u * 1.3 + v * 0.7 + t * 1.8) * Math.PI)), 26) * (0.35 + noise(u * 3 + 5, v * 3, 3));
      const vein2 = Math.pow(1 - Math.abs(Math.sin((u * 0.6 - v * 1.5 + noise(u * 2.2 + 3, v * 2.2, 4) * 1.6) * Math.PI * 1.5)), 60) * 0.8;
      const cloud = noise(u * 5 + 11, v * 5, 5);
      const base = 16 + cloud * 8;
      const vv = Math.min(1, vein1 * 0.9 + vein2 * 0.5);
      const i = (y * size + x) * 4;
      img.data[i] = base + vv * 22;
      img.data[i + 1] = base + vv * 21;
      img.data[i + 2] = base + 1 + vv * 20;
      img.data[i + 3] = 255;
      // 결 부분은 살짝 덜 반짝인다
      rimg.data[i] = 0;
      rimg.data[i + 1] = 30 + vv * 60 + cloud * 20;
      rimg.data[i + 2] = 0;
      rimg.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  r.putImageData(rimg, 0, 0);
  const map = new THREE.CanvasTexture(color);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  const roughMap = new THREE.CanvasTexture(rough);
  return { map, roughMap };
}

function walnutTexture() {
  const noise = makeNoise(21);
  const W = 1024;
  const H = 256;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d")!;
  const img = g.createImageData(W, H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const u = x / W;
      const v = y / H;
      const n = noise(u * 6, v * 1.5, 5);
      const ring = 0.5 + 0.5 * Math.sin((v * 22 + n * 9 + noise(u * 30, v * 3, 3) * 1.5) * Math.PI);
      const fine = noise(u * 180, v * 6, 2);
      const k = 0.55 + ring * 0.3 + fine * 0.25;
      const i = (y * W + x) * 4;
      img.data[i] = 30 * k + 8;
      img.data[i + 1] = 21 * k + 6;
      img.data[i + 2] = 16 * k + 5;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, "rgba(0,0,0,0.8)");
  grad.addColorStop(0.3, "rgba(0,0,0,0.45)");
  grad.addColorStop(0.7, "rgba(0,0,0,0.1)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

function floorTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  grad.addColorStop(0, "rgba(0,0,0,0.85)");
  grad.addColorStop(0.35, "rgba(0,0,0,0.55)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);
  return new THREE.CanvasTexture(c);
}

export const TOP_R = 11.2;

export class Pedestal {
  readonly group = new THREE.Group();
  readonly shadow: THREE.Mesh;
  private reflector: Reflector;

  constructor(lowPower = false) {
    const dpr = Math.min(window.devicePixelRatio, 2);
    // 폰에서는 반사면을 반 해상도로 (병 밑이 살짝 비치는 정도라 티가 나지 않는다)
    const refl = Math.round((lowPower ? 512 : 1024) * dpr * 0.6);

    // 반사면 (대리석 밑에 깔고, 대리석을 반투명하게 얹어 은은하게 비치게 한다)
    this.reflector = new Reflector(new THREE.CircleGeometry(TOP_R - 0.2, 96), {
      textureWidth: refl,
      textureHeight: refl,
      color: new THREE.Color("#5a5a5a"),
      clipBias: 0.003,
    });
    this.reflector.rotation.x = -Math.PI / 2;
    this.reflector.position.y = -0.004;
    this.group.add(this.reflector);

    const { map, roughMap } = marbleTextures(lowPower ? 512 : 1024);
    const top = new THREE.Mesh(
      new THREE.CircleGeometry(TOP_R - 0.2, 96),
      new THREE.MeshPhysicalMaterial({
        map,
        roughnessMap: roughMap,
        roughness: 1,
        metalness: 0,
        clearcoat: 0.35,
        clearcoatRoughness: 0.3,
        transparent: true,
        opacity: 0.88,
        envMapIntensity: 0.35,
      }),
    );
    top.rotation.x = -Math.PI / 2;
    top.renderOrder = 1;
    this.group.add(top);

    // 반사 렌더 중에는 대리석 윗면·그림자를 숨긴다
    const orig = this.reflector.onBeforeRender.bind(this.reflector);
    this.reflector.onBeforeRender = (...args: Parameters<typeof orig>) => {
      top.visible = false;
      this.shadow.visible = false;
      orig(...args);
      top.visible = true;
      this.shadow.visible = true;
    };

    // 대리석 판 옆면 (둥글게 모서리를 깎은 판)
    const slabProfile = [
      [TOP_R - 0.2, 0],
      [TOP_R - 0.02, -0.06],
      [TOP_R + 0.12, -0.22],
      [TOP_R + 0.18, -0.45],
      [TOP_R + 0.18, -1.35],
      [TOP_R + 0.1, -1.55],
      [TOP_R - 0.1, -1.62],
    ].map(([r, y]) => new THREE.Vector2(r, y));
    const slabMap = map.clone();
    slabMap.wrapS = slabMap.wrapT = THREE.RepeatWrapping;
    slabMap.repeat.set(3, 0.2);
    const slab = new THREE.Mesh(
      new THREE.LatheGeometry(slabProfile, 128),
      new THREE.MeshPhysicalMaterial({ map: slabMap, roughness: 0.55, clearcoat: 0.2, clearcoatRoughness: 0.4, envMapIntensity: 0.3 }),
    );
    this.group.add(slab);

    // 황동 띠
    const brass = new THREE.MeshStandardMaterial({ color: "#3a2e24", metalness: 0.6, roughness: 0.6, envMapIntensity: 0.4 });
    const band = new THREE.Mesh(new THREE.CylinderGeometry(TOP_R - 0.05, TOP_R - 0.05, 0.22, 128, 1, true), brass);
    band.position.y = -1.74;
    this.group.add(band);

    // 월넛 받침 (선반 가공 윤곽)
    const baseProfile = [
      [TOP_R - 0.4, -1.85],
      [TOP_R - 0.6, -2.1],
      [TOP_R - 0.9, -2.5],
      [TOP_R - 0.95, -3.4],
      [TOP_R - 0.7, -3.75],
      [TOP_R + 0.35, -4.05],
      [TOP_R + 0.7, -4.5],
      [TOP_R + 0.78, -5.6],
      [TOP_R + 0.6, -5.95],
      [TOP_R + 0.2, -6.05],
      [0, -6.05],
    ].map(([r, y]) => new THREE.Vector2(r, y));
    const wood = walnutTexture();
    wood.repeat.set(2, 1);
    const base = new THREE.Mesh(
      new THREE.LatheGeometry(baseProfile, 128),
      new THREE.MeshPhysicalMaterial({ map: wood, roughness: 0.7, clearcoat: 0.15, clearcoatRoughness: 0.5, envMapIntensity: 0.3 }),
    );
    this.group.add(base);
    const foot = new THREE.Mesh(new THREE.TorusGeometry(TOP_R + 0.02, 0.07, 8, 160), brass);
    foot.rotation.x = Math.PI / 2;
    foot.position.y = -3.9;
    this.group.add(foot);

    // 병 밑 접지 그림자
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.012;
    this.shadow.renderOrder = 2;
    this.group.add(this.shadow);

    // 받침대가 떠 보이지 않도록 바닥에 넓은 그늘
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), new THREE.MeshBasicMaterial({ map: floorTexture(), transparent: true, depthWrite: false }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -6.06;
    this.group.add(floor);
  }

  setFootprint(width: number) {
    const w = Math.max(width, 7);
    this.shadow.scale.set(w * 1.7, w * 1.7, 1);
  }
}
