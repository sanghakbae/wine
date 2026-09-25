import type { LabelPlace, Wine } from "../../data/wines";
import type { Painter } from "../painter";
import { templateFront } from "../template";
import { SIGNATURE } from "./signature";

export interface Design {
  front: (p: Painter) => void;
  neck?: (p: Painter) => void;
  /** 병에 직접 그린 무늬 (페리에 주에 아네모네 등) */
  decal?: (p: Painter) => void;
  decalPlace?: LabelPlace;
}

export function designFor(w: Wine): Design {
  const sig = SIGNATURE[w.id];
  if (sig) return { front: templateFront(w), ...sig };
  return { front: templateFront(w) };
}
