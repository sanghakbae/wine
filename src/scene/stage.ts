import * as THREE from "three";
import type { Wine } from "../data/wines";
import type { Hide } from "../label/painter";
import { buildBottle, type BuiltBottle } from "../bottle/build";
import { Pedestal } from "./pedestal";
import { QUALITY } from "./quality";
import { setProfileStep } from "../bottle/shapes";

// 무대: 회전 받침대 위의 병 한 병. 병을 돌리고(드래그), 카메라는 살짝 위아래로만 움직인다.

function studioEnvironment(renderer: THREE.WebGLRenderer) {
  // 제품 사진용 스튜디오: 어두운 방에 세로로 긴 소프트박스 두 개와 천장 조명
  const env = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), new THREE.MeshBasicMaterial({ color: "#0b0909", side: THREE.BackSide }));
  env.add(room);
  const box = (w: number, h: number, x: number, y: number, z: number, intensity: number, color = "#fff6ea") => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }));
    m.position.set(x, y, z);
    m.lookAt(0, y * 0.4, 0);
    env.add(m);
  };
  box(7, 40, -22, 4, 14, 5);
  box(5, 40, 24, 2, 8, 3.2);
  box(30, 12, 0, 30, 0, 1.6);
  box(6, 36, 6, 0, -26, 2.2, "#ffd9b0");
  box(60, 6, 0, -14, 20, 0.35);
  const pm = new THREE.PMREMGenerator(renderer);
  const tex = pm.fromScene(env, 0.02).texture;
  pm.dispose();
  return tex;
}

function backdropTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 1024;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(512, 470, 20, 512, 520, 700);
  grad.addColorStop(0, "#4a4038");
  grad.addColorStop(0.4, "#2a221e");
  grad.addColorStop(0.8, "#141010");
  grad.addColorStop(1, "#0b0909");
  g.fillStyle = grad;
  g.fillRect(0, 0, 1024, 1024);
  // 병 바로 뒤의 역광: 병 실루엣과 투명 병 속 와인 색이 살아난다
  g.save();
  g.translate(512, 512);
  g.scale(1, 1.9);
  const glow = g.createRadialGradient(0, 0, 0, 0, 0, 110);
  glow.addColorStop(0, "rgba(236,226,210,0.95)");
  glow.addColorStop(0.35, "rgba(200,184,164,0.55)");
  glow.addColorStop(1, "rgba(120,100,84,0)");
  g.fillStyle = glow;
  g.beginPath();
  g.arc(0, 0, 110, 0, Math.PI * 2);
  g.fill();
  g.restore();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Stage {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(28, 1, 1, 2000);
  private holder = new THREE.Group();
  private bottle: BuiltBottle | null = null;
  private pedestal: Pedestal;
  private backdrop: THREE.Mesh;
  private spin = 0;
  private spinVel = 0;
  private tilt = 0.12;
  private zoom = 1;
  private autoRotate = true;
  private dragging = false;
  private lastInteract = 0;
  private enter = 1;
  private targetSpin: number | null = null;
  /** 화면 아래를 가리는 패널 높이(px) — 병을 그 위쪽 가운데에 둔다 */
  bottomInset = 0;
  topInset = 0;
  /** 넓은 화면에서 오른쪽 패널 폭(px) */
  rightInset = 0;
  /** 셀러·랭킹처럼 화면을 덮는 창이 열려 있으면 그리지 않는다 */
  paused = false;
  private dpr = 1;
  private maxDpr = 1;
  private lastFrame = 0;
  private slowFrames = 0;
  private fastFrames = 0;

  constructor(private host: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    // 기기 성능에 맞춰 해상도·투과 패스·병 윤곽 조밀도를 정한다 (quality.ts)
    setProfileStep(QUALITY.profileStep);
    this.maxDpr = Math.min(window.devicePixelRatio, QUALITY.maxDpr);
    this.dpr = this.maxDpr;
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.transmissionResolutionScale = QUALITY.transmissionScale;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(this.renderer.domElement);
    this.renderer.domElement.classList.add("stage-canvas");

    this.scene.environment = studioEnvironment(this.renderer);
    this.scene.environmentIntensity = 1;

    // 배경판 (투과 재질이 뒤를 볼 수 있도록 실제 물체로 둔다)
    this.backdrop = new THREE.Mesh(new THREE.PlaneGeometry(520, 520), new THREE.MeshBasicMaterial({ map: backdropTexture(), toneMapped: false }));
    this.scene.add(this.backdrop);

    this.pedestal = new Pedestal(QUALITY.texture);
    this.scene.add(this.pedestal.group);

    // 조명
    this.scene.add(new THREE.HemisphereLight("#fff4e6", "#2a1d18", 0.6));
    const key = new THREE.DirectionalLight("#fff3e2", 2.2);
    key.position.set(18, 30, 36);
    this.scene.add(key);
    const rimL = new THREE.DirectionalLight("#ffe2c4", 2.4);
    rimL.position.set(-30, 18, -22);
    this.scene.add(rimL);
    const rimR = new THREE.DirectionalLight("#cfe0ff", 1.4);
    rimR.position.set(30, 10, -20);
    this.scene.add(rimR);
    const fill = new THREE.DirectionalLight("#ffffff", 0.5);
    fill.position.set(-10, 5, 40);
    this.scene.add(fill);

    this.scene.add(this.holder);
    this.bindInput();
    new ResizeObserver(() => this.resize()).observe(host);
    this.resize();
    this.renderer.setAnimationLoop((now) => this.loop(now));
  }

  show(wine: Wine, hide: Hide, vintage: string | null = null) {
    if (this.bottle) {
      this.holder.remove(this.bottle.group);
      this.bottle.dispose();
    }
    this.bottle = buildBottle(wine, hide, vintage);
    this.holder.add(this.bottle.group);
    this.pedestal.setFootprint(this.bottle.width);
    this.enter = 0;
    this.spin = -Math.PI * 0.9;
    this.spinVel = 0;
    this.targetSpin = 0;
    this.autoRotate = true;
    this.resize();
  }

  setHide(h: Hide) {
    this.bottle?.setHide(h);
  }

  /** 라벨이 정면을 보도록 돌려 세운다 */
  faceFront() {
    const turns = Math.round(this.spin / (Math.PI * 2));
    this.targetSpin = turns * Math.PI * 2;
    this.spinVel = 0;
    this.lastInteract = performance.now();
  }

  private bindInput() {
    const el = this.renderer.domElement;
    const pointers = new Map<number, { x: number; y: number }>();
    let pinch = 0;
    el.addEventListener("pointerdown", (e) => {
      el.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      this.dragging = true;
      this.targetSpin = null;
      this.lastInteract = performance.now();
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });
    el.addEventListener("pointermove", (e) => {
      const prev = pointers.get(e.pointerId);
      if (!prev) return;
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch > 0) this.zoom = THREE.MathUtils.clamp(this.zoom * (pinch / d), 0.45, 1.5);
        pinch = d;
        return;
      }
      this.spin += dx * 0.012;
      this.spinVel = dx * 0.012;
      this.tilt = THREE.MathUtils.clamp(this.tilt + dy * 0.004, -0.25, 0.9);
      this.lastInteract = performance.now();
    });
    const up = (e: PointerEvent) => {
      pointers.delete(e.pointerId);
      if (pointers.size === 0) this.dragging = false;
      pinch = 0;
    };
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        this.zoom = THREE.MathUtils.clamp(this.zoom * Math.exp(e.deltaY * 0.001), 0.45, 1.5);
      },
      { passive: false },
    );
  }

  resize() {
    const w = this.host.clientWidth || window.innerWidth;
    const h = this.host.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // 패널에 가리지 않은 영역 가운데로 병을 옮긴다
    const off = (this.bottomInset - this.topInset) / 2;
    this.camera.setViewOffset(w, h, this.rightInset / 2, off, w, h);
    this.camera.updateProjectionMatrix();
  }

  /** 개발용: 지금 장면을 PNG 로 떠서 .snaps/ 에 저장 */
  async snap(name = "snap") {
    this.frame(0);
    const url = this.renderer.domElement.toDataURL("image/png");
    await fetch(`/__snap?name=${name}`, { method: "POST", body: url });
  }

  /** 탭이 가려져 rAF 가 멈췄을 때 검증용으로 수동 진행 */
  step(seconds = 1) {
    for (let t = 0; t < seconds; t += 1 / 30) this.frame(1 / 30);
  }

  /**
   * 프레임 조절: 끌거나 움직이는 중에는 최대 60fps, 병이 혼자 천천히 돌 때는 30fps.
   * (120Hz 화면에서 두 배로 그리지 않고, 가만히 있을 때 배터리를 아낀다)
   */
  private loop(now: number) {
    if (this.paused) {
      this.lastFrame = now;
      return;
    }
    const active =
      this.dragging || this.targetSpin !== null || this.enter < 1 || Math.abs(this.spinVel) > 0.002 || performance.now() - this.lastInteract < 2500;
    const interval = active ? 1000 / 60 : 1000 / 30;
    const since = now - this.lastFrame;
    if (since < interval - 2) return;
    this.lastFrame = now;
    if (since < 250 && !active) this.adapt(since, interval);
    this.frame(Math.min(since / 1000, 0.05));
  }

  /** 목표 프레임을 계속 못 맞추면 해상도를 낮추고, 한동안 여유가 있으면 다시 올린다 */
  private adapt(since: number, interval: number) {
    if (since > interval * 1.6 + 4) {
      this.slowFrames++;
      this.fastFrames = 0;
    } else if (since < interval * 1.2) {
      this.fastFrames++;
      this.slowFrames = Math.max(0, this.slowFrames - 1);
    }
    if (this.slowFrames > 24 && this.dpr > 1) {
      this.setDpr(this.dpr - 0.25);
      this.slowFrames = 0;
    } else if (this.fastFrames > 300 && this.dpr < this.maxDpr) {
      this.setDpr(this.dpr + 0.25);
      this.fastFrames = 0;
    }
  }

  private setDpr(v: number) {
    this.dpr = Math.min(this.maxDpr, Math.max(1, v));
    this.renderer.setPixelRatio(this.dpr);
    this.resize();
  }

  private frame(dt: number) {
    const now = performance.now();
    if (!this.dragging) {
      if (this.targetSpin !== null) {
        this.spin += (this.targetSpin - this.spin) * Math.min(1, dt * 4);
        if (Math.abs(this.targetSpin - this.spin) < 0.002) this.targetSpin = null;
      } else {
        this.spinVel *= Math.pow(0.04, dt);
        this.spin += this.spinVel;
        if (this.autoRotate && now - this.lastInteract > 2500 && Math.abs(this.spinVel) < 0.002) this.spin += dt * 0.35;
      }
    }
    this.enter = Math.min(1, this.enter + dt * 1.8);
    const e = 1 - Math.pow(1 - this.enter, 3);
    this.holder.rotation.y = this.spin;
    this.holder.position.y = (1 - e) * 14;

    // 카메라: 병 높이·폭과 화면에서 쓸 수 있는 높이에 맞춰 거리 결정
    const H = this.bottle?.height ?? 30;
    const W = Math.max(this.bottle?.width ?? 8, 8);
    const vh = this.host.clientHeight || window.innerHeight;
    const avail = Math.max(0.3, (vh - this.bottomInset - this.topInset) / vh);
    const tanH = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const distH = (H * 1.18) / (2 * tanH * avail);
    const vw = this.host.clientWidth || window.innerWidth;
    const availW = Math.max(0.3, (vw - this.rightInset) / vw);
    const distW = (W * 2.6) / (2 * tanH * this.camera.aspect * availW);
    const dist = Math.max(distH, distW) * this.zoom;
    const target = new THREE.Vector3(0, H * 0.48, 0);
    this.camera.position.set(0, target.y + Math.sin(this.tilt) * dist, Math.cos(this.tilt) * dist);
    this.camera.lookAt(target);
    // 배경판은 늘 카메라→병 연장선 뒤에 세워 역광이 병 바로 뒤에 오게 한다
    const dir = target.clone().sub(this.camera.position).normalize();
    this.backdrop.position.copy(target).addScaledVector(dir, 170);
    this.backdrop.lookAt(this.camera.position);
    this.renderer.render(this.scene, this.camera);
  }
}
