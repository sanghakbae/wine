// 배경 음악: 오디오 파일 없이 Web Audio 로 실시간 합성하는 와인 바 재즈 트리오.
//   로즈 피아노(FM) 코드 반주 + 워킹 베이스 + 브러시 드럼 + 가끔 비브라폰 멜로디.
// 브라우저 자동 재생 정책 때문에 첫 클릭(또는 키 입력) 뒤에 시작한다.

type Chord = { bass: number; voicing: number[]; scale: number[] };

const mtof = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

// 근음 없는(rootless) 재즈 보이싱. bass 는 베이스 근음(MIDI), scale 은 멜로디에 쓰는 음(피치 클래스)
const F_MAJ = [5, 7, 9, 10, 0, 2, 4];
const C: Record<string, Chord> = {
  Fmaj9: { bass: 41, voicing: [57, 60, 64, 67], scale: F_MAJ },
  Dm9: { bass: 38, voicing: [53, 57, 60, 64], scale: F_MAJ },
  Gm9: { bass: 43, voicing: [58, 62, 65, 69], scale: F_MAJ },
  C13: { bass: 36, voicing: [52, 58, 62, 69], scale: F_MAJ },
  Am7: { bass: 45, voicing: [55, 57, 60, 64], scale: F_MAJ },
  D7b9: { bass: 38, voicing: [54, 60, 63, 69], scale: [2, 3, 6, 9, 0, 7] },
  C7b9: { bass: 36, voicing: [52, 58, 61, 67], scale: [0, 1, 4, 7, 10, 5] },
  Em7b5: { bass: 40, voicing: [55, 58, 62, 64], scale: [2, 4, 5, 7, 9, 10, 0] },
  A7b9: { bass: 45, voicing: [55, 61, 65, 70], scale: [9, 10, 1, 4, 7, 2, 5] },
  Dm69: { bass: 38, voicing: [53, 57, 59, 64], scale: [2, 4, 5, 7, 9, 11, 0] },
  Bbmaj7: { bass: 46, voicing: [57, 58, 62, 65], scale: F_MAJ },
};

const tr = (c: Chord, n: number): Chord => ({ bass: c.bass + n, voicing: c.voicing.map((v) => v + n), scale: c.scale.map((s) => (s + n + 12) % 12) });

// 한 마디에 코드 1개 또는 2개
const PROGRESSIONS: Chord[][][] = [
  [[C.Fmaj9], [C.Dm9], [C.Gm9], [C.C13], [C.Am7, C.D7b9], [C.Gm9, C.C13], [C.Fmaj9], [C.Gm9, C.C7b9]],
  [[C.Dm69], [C.Dm69], [C.Em7b5, C.A7b9], [C.Dm69], [C.Gm9], [C.C13], [C.Bbmaj7], [C.Em7b5, C.A7b9]],
  [[C.Fmaj9], [C.Dm9], [C.Gm9], [C.C13], [C.Am7, C.D7b9], [C.Gm9, C.C13], [C.Fmaj9], [C.Gm9, C.C7b9]].map((bar) => bar.map((c) => tr(c, -4))),
];

const BPM = 82;
const BEAT = 60 / BPM;
const SWING = 0.64; // 뒷박 8분음표 위치 (0.5 = 스트레이트)

const KEY = "blind-bottle:music";

export class Music {
  on: boolean;
  onChange?: () => void;
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private musicBus!: GainNode;
  private epBus!: GainNode;
  private reverb!: ConvolverNode;
  private noise!: AudioBuffer;
  private nextBar = 0;
  private barIdx = 0;
  private prog = 0;
  private phrase = 0;
  private melodyOn = false;
  private lastMel = 72;
  private started = false;
  private fadeIn = false;

  constructor() {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
      // 저장 공간을 못 쓰면 기본값
    }
    // 개발 서버에서는 기본으로 끈다 (버튼으로 켜 볼 수는 있지만 저장하지 않는다)
    this.on = import.meta.env.DEV ? false : saved !== "0";
    const first = () => this.unlock();
    document.addEventListener("pointerdown", first, { once: true, capture: true });
    document.addEventListener("keydown", first, { once: true, capture: true });
    document.addEventListener("visibilitychange", () => {
      if (!this.ctx) return;
      if (document.hidden) this.ctx.suspend();
      else if (this.on) this.ctx.resume();
    });
  }

  /** 사용자 제스처 안에서 불러야 소리가 난다 */
  unlock() {
    if (!this.on) return;
    try {
      this.ensure();
      this.ctx!.resume().catch(() => null);
      if (!this.started) this.start();
    } catch {
      // 이 브라우저에서는 소리를 낼 수 없다 (Web Audio 없음·막힘): 음악은 끈 채로 두고 화면은 그대로 쓴다
      this.on = false;
      this.onChange?.();
    }
  }

  toggle() {
    this.on = !this.on;
    try {
      if (!import.meta.env.DEV) localStorage.setItem(KEY, this.on ? "1" : "0");
    } catch {
      // 무시
    }
    if (this.on) {
      this.fadeIn = this.started;
      this.unlock();
    } else if (this.ctx) {
      const t = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(t);
      this.master.gain.setTargetAtTime(0, t, 0.25);
      const ctx = this.ctx;
      setTimeout(() => !this.on && ctx.suspend(), 900);
    }
    this.onChange?.();
  }

  /** 정답·오답·결과 효과음 */
  cue(kind: "right" | "wrong" | "finish") {
    if (!this.on || !this.ctx || this.ctx.state !== "running") return;
    const t = this.ctx.currentTime + 0.02;
    const root = PROGRESSIONS[this.prog][0][0].bass + 36; // 지금 조의 으뜸음 근처
    if (kind === "right") {
      [0, 4, 7, 12].forEach((iv, i) => this.vibes(t + i * 0.07, root + iv, 0.55, 1.4, this.master));
    } else if (kind === "wrong") {
      this.vibes(t, root + 3, 0.35, 1.2, this.master);
      this.vibes(t + 0.18, root + 2, 0.32, 1.6, this.master);
    } else {
      [0, 4, 7, 11, 14, 19].forEach((iv, i) => this.vibes(t + i * 0.09, root + iv, 0.5, 2.4, this.master));
    }
  }

  // ───────────────────────── 내부

  private ensure() {
    if (this.ctx) return;
    const ctx = new AudioContext({ latencyHint: "playback" });
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    this.master.connect(comp).connect(ctx.destination);

    // 잔향 (지수 감쇠 노이즈 임펄스)
    this.reverb = ctx.createConvolver();
    const len = Math.floor(ctx.sampleRate * 2.4);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    }
    this.reverb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.28;
    this.reverb.connect(wet).connect(this.master);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.8;
    this.musicBus.connect(this.master);
    this.musicBus.connect(this.reverb);

    // 로즈 피아노 버스: 부드러운 트레몰로 + 저역 통과
    this.epBus = ctx.createGain();
    const epLP = ctx.createBiquadFilter();
    epLP.type = "lowpass";
    epLP.frequency.value = 2600;
    const trem = ctx.createGain();
    trem.gain.value = 0.88;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 4.2;
    const lfoAmt = ctx.createGain();
    lfoAmt.gain.value = 0.12;
    lfo.connect(lfoAmt).connect(trem.gain);
    lfo.start();
    this.epBus.connect(epLP).connect(trem).connect(this.musicBus);

    // 드럼용 노이즈
    this.noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = this.noise.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  }

  private start() {
    const ctx = this.ctx!;
    this.started = true;
    this.master.gain.setValueAtTime(0, ctx.currentTime);
    this.master.gain.linearRampToValueAtTime(0.45, ctx.currentTime + 3);
    this.nextBar = ctx.currentTime + 0.15;
    this.prog = Math.floor(Math.random() * PROGRESSIONS.length);
    window.setInterval(() => this.schedule(), 60);
    this.schedule();
    this.onChange?.();
  }

  private schedule() {
    const ctx = this.ctx;
    if (!ctx || !this.on) return;
    if (this.fadeIn && ctx.state === "running") {
      // 다시 켰을 때 소리를 서서히 올린다
      this.fadeIn = false;
      this.master.gain.cancelScheduledValues(ctx.currentTime);
      this.master.gain.setTargetAtTime(0.45, ctx.currentTime, 0.6);
    }
    // 탭이 오래 멈췄다 돌아오면 과거에 몰아 넣지 않는다
    if (this.nextBar < ctx.currentTime) this.nextBar = ctx.currentTime + 0.05;
    while (this.nextBar < ctx.currentTime + 1.2) {
      this.playBar(this.nextBar);
      this.nextBar += BEAT * 4;
    }
  }

  private playBar(t0: number) {
    const prog = PROGRESSIONS[this.prog];
    const bar = prog[this.barIdx];
    const nextBarChords = prog[(this.barIdx + 1) % prog.length];
    const per = 4 / bar.length; // 코드 하나가 차지하는 박 수

    bar.forEach((ch, ci) => {
      const tc = t0 + ci * per * BEAT;
      const nextRoot = (bar[ci + 1] ?? nextBarChords[0]).bass;
      this.comp(tc, ch, per);
      this.walk(tc, ch, per, nextRoot);
      if (this.melodyOn) this.melody(tc, ch, per);
    });
    this.drums(t0);

    this.barIdx++;
    if (this.barIdx >= prog.length) {
      this.barIdx = 0;
      this.phrase++;
      // 8마디마다 진행을 바꾸고, 두 번에 한 번은 비브라폰 멜로디를 얹는다
      if (Math.random() < 0.45) this.prog = (this.prog + 1 + Math.floor(Math.random() * (PROGRESSIONS.length - 1))) % PROGRESSIONS.length;
      this.melodyOn = this.phrase % 2 === 1;
    }
  }

  private jitter() {
    return (Math.random() - 0.5) * 0.016;
  }

  /** 로즈 반주: 찰스턴 리듬(1박, 2박 뒷박) 변형 */
  private comp(t: number, ch: Chord, beats: number) {
    const patterns = beats >= 4 ? [[0, 1 + SWING], [0, 2 + SWING], [SWING, 2], [0, 1.5 + SWING / 2, 3 + SWING]] : [[0], [SWING], [0, 1 + SWING]];
    const pat = patterns[Math.floor(Math.random() * patterns.length)];
    pat.forEach((b, i) => {
      const len = (i === pat.length - 1 ? beats - b : pat[i + 1] - b) * BEAT;
      const vel = 0.42 + Math.random() * 0.18 - i * 0.05;
      ch.voicing.forEach((m, k) => this.ep(t + b * BEAT + this.jitter() + k * 0.006, m, vel * (k === ch.voicing.length - 1 ? 1 : 0.85), Math.min(len, 1.6)));
    });
  }

  /** 워킹 베이스: 근음 → 코드음 → 다음 근음으로 반음/온음 접근 */
  private walk(t: number, ch: Chord, beats: number, nextRoot: number) {
    const tones = [ch.bass, ch.bass + (ch.voicing.includes(ch.bass + 15) || ch.voicing.includes(ch.bass + 27) ? 3 : 4), ch.bass + 7, ch.bass + 10];
    const line: number[] = [ch.bass];
    for (let b = 1; b < beats; b++) {
      if (b === beats - 1) {
        let approach = nextRoot + (Math.random() < 0.5 ? -1 : 1);
        while (approach - line[line.length - 1] > 7) approach -= 12;
        while (line[line.length - 1] - approach > 7) approach += 12;
        line.push(approach);
      } else line.push(tones[1 + Math.floor(Math.random() * 3)] + (Math.random() < 0.25 ? 12 : 0));
    }
    line.forEach((m, b) => {
      while (m > 50) m -= 12;
      while (m < 28) m += 12;
      this.bass(t + b * BEAT + this.jitter(), m, b === 0 ? 0.8 : 0.65);
    });
  }

  private melody(t: number, ch: Chord, beats: number) {
    // 쉬는 박을 넉넉히 둔 짧은 동기
    const slots = beats * 2;
    for (let s = 0; s < slots; s++) {
      if (Math.random() > (s % 2 ? 0.22 : 0.36)) continue;
      const beatPos = Math.floor(s / 2) + (s % 2 ? SWING : 0);
      // 코드 음계 안에서 가까운 음으로 걷기
      const cands: number[] = [];
      for (let m = 65; m <= 86; m++) if (ch.scale.includes(m % 12)) cands.push(m);
      cands.sort((a, b) => Math.abs(a - this.lastMel) - Math.abs(b - this.lastMel));
      const m = cands[Math.floor(Math.random() * Math.min(5, cands.length))];
      this.lastMel = m;
      this.vibes(t + beatPos * BEAT + this.jitter(), m, 0.3 + Math.random() * 0.15, 1.8, this.musicBus);
    }
  }

  private drums(t: number) {
    // 라이드: 1, 2, 2&, 3, 4, 4&
    const ride = [0, 1, 1 + SWING, 2, 3, 3 + SWING];
    ride.forEach((b, i) => this.cymbal(t + b * BEAT + this.jitter(), i % 3 === 1 ? 0.5 : 0.8));
    for (let b = 0; b < 4; b++) this.brush(t + b * BEAT, b % 2 === 1);
    this.kick(t, 0.9);
    if (Math.random() < 0.35) this.kick(t + 2 * BEAT, 0.5);
  }

  // ───────────────────────── 악기

  private ep(t: number, midi: number, vel: number, dur: number) {
    const ctx = this.ctx!;
    const f = mtof(midi);
    const car = ctx.createOscillator();
    car.frequency.value = f;
    const mod = ctx.createOscillator();
    mod.frequency.value = f;
    const idx = ctx.createGain();
    idx.gain.setValueAtTime(f * 1.6 * vel, t);
    idx.gain.exponentialRampToValueAtTime(f * 0.25, t + 0.5);
    mod.connect(idx).connect(car.frequency);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(0.11 * vel, t + 0.006);
    amp.gain.exponentialRampToValueAtTime(0.06 * vel, t + 0.35);
    amp.gain.setTargetAtTime(0.0001, t + dur, 0.25);
    car.connect(amp).connect(this.epBus);
    // 금속성 '팅' 소리
    const tine = ctx.createOscillator();
    tine.frequency.value = f * 7.1;
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.012 * vel, t);
    tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    tine.connect(tg).connect(this.epBus);
    const end = t + dur + 1.4;
    for (const o of [car, mod, tine]) {
      o.start(t);
      o.stop(end);
    }
  }

  private bass(t: number, midi: number, vel: number) {
    const ctx = this.ctx!;
    const f = mtof(midi);
    const o1 = ctx.createOscillator();
    o1.type = "triangle";
    o1.frequency.value = f;
    const o2 = ctx.createOscillator();
    o2.frequency.value = f;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(900, t);
    lp.frequency.exponentialRampToValueAtTime(320, t + 0.25);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(0.32 * vel, t + 0.012);
    amp.gain.exponentialRampToValueAtTime(0.12 * vel, t + 0.3);
    amp.gain.setTargetAtTime(0.0001, t + BEAT * 0.92, 0.06);
    o1.connect(lp);
    o2.connect(lp);
    lp.connect(amp).connect(this.musicBus);
    const end = t + BEAT + 0.4;
    o1.start(t);
    o2.start(t);
    o1.stop(end);
    o2.stop(end);
  }

  private vibes(t: number, midi: number, vel: number, dur: number, out: AudioNode) {
    const ctx = this.ctx!;
    const f = mtof(midi);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(0.1 * vel, t + 0.004);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    // 모터 트레몰로
    const trem = ctx.createGain();
    trem.gain.value = 0.8;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 5.2;
    const la = ctx.createGain();
    la.gain.value = 0.2;
    lfo.connect(la).connect(trem.gain);
    amp.connect(trem).connect(out);
    if (out !== this.reverb) trem.connect(this.reverb);
    const partials: [number, number, number][] = [
      [1, 1, dur],
      [4, 0.22, dur * 0.4],
      [10, 0.06, 0.15],
    ];
    const end = t + dur + 0.1;
    for (const [ratio, g, d] of partials) {
      const o = ctx.createOscillator();
      o.frequency.value = f * ratio;
      const pg = ctx.createGain();
      pg.gain.setValueAtTime(g, t);
      pg.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(pg).connect(amp);
      o.start(t);
      o.stop(end);
    }
    lfo.start(t);
    lfo.stop(end);
  }

  private noiseSrc(t: number) {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    src.start(t, Math.random() * 0.5);
    return src;
  }

  private cymbal(t: number, vel: number) {
    const ctx = this.ctx!;
    const src = this.noiseSrc(t);
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 6500;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 9500;
    bp.Q.value = 0.6;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(0.035 * vel, t + 0.002);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
    src.connect(hp).connect(bp).connect(amp).connect(this.musicBus);
    src.stop(t + 0.5);
  }

  private brush(t: number, accent: boolean) {
    const ctx = this.ctx!;
    const src = this.noiseSrc(t);
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(2200, t);
    bp.frequency.linearRampToValueAtTime(3400, t + BEAT);
    bp.Q.value = 0.8;
    const amp = ctx.createGain();
    // 쓸어내리는 소리 + 2·4박에 톡
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(accent ? 0.05 : 0.018, t + (accent ? 0.004 : 0.12));
    amp.gain.exponentialRampToValueAtTime(0.0001, t + (accent ? 0.2 : BEAT * 0.9));
    src.connect(bp).connect(amp).connect(this.musicBus);
    src.stop(t + BEAT);
  }

  private kick(t: number, vel: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(70, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(0.2 * vel, t + 0.005);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(amp).connect(this.musicBus);
    o.start(t);
    o.stop(t + 0.35);
  }
}
