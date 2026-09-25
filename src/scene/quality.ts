// 기기 성능에 맞춘 그리기 품질. 폰·태블릿(터치)이나 코어가 적은 기기는 가볍게.
export const lowPower = matchMedia("(pointer: coarse)").matches || (navigator.hardwareConcurrency ?? 8) <= 4;

export const QUALITY = {
  /** 병 둘레 분할 수 */
  seg: lowPower ? 72 : 112,
  /** 와인(액체) 둘레 분할 수 */
  liquidSeg: lowPower ? 40 : 64,
  /** 병 윤곽 보간 간격 (cm) — 클수록 점이 적다 */
  profileStep: lowPower ? 0.34 : 0.26,
  /** 라벨 캔버스 해상도 (px/cm) */
  pxPerCm: lowPower ? 60 : 84,
  /** 화면 픽셀 비율 상한 */
  maxDpr: lowPower ? 1.5 : 2,
  /** 액체 투과 패스 해상도 배율 */
  transmissionScale: lowPower ? 0.5 : 0.75,
  /** 대리석·나뭇결 텍스처 크기 */
  texture: lowPower ? 256 : 512,
};
