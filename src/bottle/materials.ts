import * as THREE from "three";
import type { GlassKey, LiquidKey } from "../data/wines";

// 유리는 두 겹으로 그린다.
//  1) 색 필터: 뒤에 있는 것에 유리색을 곱한다 (MultiplyBlending)
//  2) 반사: 검은 물리 재질의 프레넬 반사만 더한다 (AdditiveBlending)
// 투과(transmission) 재질을 유리에 쓰면 안쪽 와인이 사라지기 때문에, 투과는 와인 쪽에만 쓴다.

interface GlassDef {
  tint: string;
  /** 반사 세기 */
  gloss: number;
  opaque?: "frosted" | "white" | "gold" | "rosegold";
}

export const GLASS: Record<GlassKey, GlassDef> = {
  flint: { tint: "#f2f7f2", gloss: 1.0 },
  halfwhite: { tint: "#dcebd2", gloss: 1.0 },
  green: { tint: "#23391d", gloss: 1.1 },
  deadleaf: { tint: "#45431a", gloss: 1.1 },
  champagne: { tint: "#1e3219", gloss: 1.15 },
  mosel: { tint: "#4f8f45", gloss: 1.0 },
  amber: { tint: "#7c4312", gloss: 1.0 },
  cobalt: { tint: "#2549b8", gloss: 1.05 },
  black: { tint: "#141814", gloss: 1.2 },
  frosted: { tint: "#111", gloss: 0.4, opaque: "frosted" },
  white: { tint: "#f4f2ee", gloss: 0.8, opaque: "white" },
  gold: { tint: "#d6b45a", gloss: 1, opaque: "gold" },
  rosegold: { tint: "#e0a3a0", gloss: 1, opaque: "rosegold" },
};

interface LiquidDef {
  color: string;
  /** 빛이 이 거리(cm)를 지나면 color 만큼 물든다 */
  dist: number;
}

export const LIQUID: Record<LiquidKey, LiquidDef> = {
  red: { color: "#5a0a16", dist: 0.35 },
  redLight: { color: "#7a1422", dist: 0.9 },
  white: { color: "#f0d982", dist: 9 },
  whiteGreen: { color: "#e6e79a", dist: 12 },
  golden: { color: "#e2a531", dist: 3.2 },
  amber: { color: "#c97a22", dist: 2.2 },
  rose: { color: "#f08f86", dist: 3.5 },
  rosePale: { color: "#f7c2b3", dist: 7 },
  sparkling: { color: "#efd98f", dist: 10 },
  port: { color: "#4a0913", dist: 0.35 },
  fino: { color: "#f1e2a0", dist: 12 },
  icewine: { color: "#eab042", dist: 3.5 },
};

export function glassMaterials(key: GlassKey): THREE.Material[] {
  const g = GLASS[key];
  if (g.opaque === "frosted") {
    return [new THREE.MeshPhysicalMaterial({ color: "#0e0e0f", roughness: 0.62, metalness: 0.0, clearcoat: 0.25, clearcoatRoughness: 0.6 })];
  }
  if (g.opaque === "gold") {
    return [new THREE.MeshStandardMaterial({ color: "#e2bd62", roughness: 0.16, metalness: 1 })];
  }
  if (g.opaque === "rosegold") {
    return [new THREE.MeshStandardMaterial({ color: "#e8a9a2", roughness: 0.16, metalness: 1 })];
  }
  if (g.opaque === "white") {
    return [new THREE.MeshPhysicalMaterial({ color: "#f3f1ec", roughness: 0.35, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.2 })];
  }
  const tint = new THREE.MeshBasicMaterial({
    color: g.tint,
    blending: THREE.MultiplyBlending,
    premultipliedAlpha: true,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const reflect = new THREE.MeshPhysicalMaterial({
    color: "#000000",
    roughness: 0.04,
    metalness: 0,
    specularIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    envMapIntensity: g.gloss * 1.6,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  });
  return [tint, reflect];
}

export function liquidMaterial(key: LiquidKey): THREE.Material {
  const l = LIQUID[key];
  return new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    roughness: 0.03,
    metalness: 0,
    transmission: 1,
    thickness: 5,
    ior: 1.34,
    attenuationColor: new THREE.Color(l.color),
    attenuationDistance: l.dist,
    specularIntensity: 0.4,
  });
}
