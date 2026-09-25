// 접속한 나라 추정: 기기 시간대 → 브라우저 언어의 지역 표기. 외부 위치 조회는 하지 않는다.
import { lang } from "./i18n";

const TZ_CC: Record<string, string> = {
  "Asia/Seoul": "KR", "Asia/Tokyo": "JP", "Asia/Shanghai": "CN", "Asia/Chongqing": "CN", "Asia/Urumqi": "CN", "Asia/Hong_Kong": "HK",
  "Asia/Macau": "MO", "Asia/Taipei": "TW", "Asia/Singapore": "SG", "Asia/Kuala_Lumpur": "MY", "Asia/Bangkok": "TH", "Asia/Ho_Chi_Minh": "VN",
  "Asia/Saigon": "VN", "Asia/Jakarta": "ID", "Asia/Manila": "PH", "Asia/Kolkata": "IN", "Asia/Calcutta": "IN", "Asia/Dubai": "AE",
  "Asia/Jerusalem": "IL", "Asia/Tel_Aviv": "IL", "Asia/Beirut": "LB", "Asia/Tbilisi": "GE", "Asia/Yerevan": "AM", "Asia/Ulaanbaatar": "MN",
  "Europe/London": "GB", "Europe/Dublin": "IE", "Europe/Paris": "FR", "Europe/Monaco": "MC", "Europe/Berlin": "DE", "Europe/Madrid": "ES",
  "Europe/Rome": "IT", "Europe/Lisbon": "PT", "Europe/Amsterdam": "NL", "Europe/Brussels": "BE", "Europe/Luxembourg": "LU", "Europe/Zurich": "CH",
  "Europe/Vienna": "AT", "Europe/Stockholm": "SE", "Europe/Oslo": "NO", "Europe/Copenhagen": "DK", "Europe/Helsinki": "FI", "Europe/Warsaw": "PL",
  "Europe/Prague": "CZ", "Europe/Budapest": "HU", "Europe/Athens": "GR", "Europe/Istanbul": "TR", "Europe/Moscow": "RU", "Europe/Kiev": "UA",
  "Europe/Kyiv": "UA", "Europe/Bucharest": "RO", "Europe/Sofia": "BG", "Europe/Zagreb": "HR", "Europe/Ljubljana": "SI", "Europe/Belgrade": "RS",
  "Europe/Chisinau": "MD", "America/New_York": "US", "America/Chicago": "US", "America/Denver": "US", "America/Los_Angeles": "US",
  "America/Phoenix": "US", "America/Anchorage": "US", "Pacific/Honolulu": "US", "America/Detroit": "US", "America/Toronto": "CA",
  "America/Vancouver": "CA", "America/Montreal": "CA", "America/Edmonton": "CA", "America/Mexico_City": "MX", "America/Sao_Paulo": "BR",
  "America/Argentina/Buenos_Aires": "AR", "America/Buenos_Aires": "AR", "America/Santiago": "CL", "America/Bogota": "CO", "America/Lima": "PE",
  "America/Montevideo": "UY", "America/Caracas": "VE", "Australia/Sydney": "AU", "Australia/Melbourne": "AU", "Australia/Brisbane": "AU",
  "Australia/Perth": "AU", "Australia/Adelaide": "AU", "Australia/Hobart": "AU", "Pacific/Auckland": "NZ", "Africa/Johannesburg": "ZA",
  "Africa/Cairo": "EG", "Africa/Casablanca": "MA", "Africa/Lagos": "NG", "Africa/Nairobi": "KE",
};

let cached: string | null = null;

/** ISO 3166 두 글자 나라 코드 (모르면 빈 문자열) */
export function myCountry(): string {
  if (cached !== null) return cached;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  let cc = TZ_CC[tz] ?? "";
  if (!cc) {
    for (const l of navigator.languages ?? [navigator.language]) {
      const m = /-([A-Za-z]{2})\b/.exec(l);
      if (m) {
        cc = m[1].toUpperCase();
        break;
      }
    }
  }
  cached = /^[A-Z]{2}$/.test(cc) ? cc : "";
  return cached;
}

const names = new Map<string, Intl.DisplayNames | null>();

/** 나라 코드 → 지금 언어의 나라 이름 */
export function countryLabel(cc: string): string {
  // 랭킹의 나라 코드는 남이 쓴 값이다: 두 글자 대문자가 아니면 그리지 않는다 (Intl 이 RangeError 를 던진다)
  if (!/^[A-Z]{2}$/.test(cc)) return "";
  const l = lang();
  if (!names.has(l)) {
    try {
      names.set(l, new Intl.DisplayNames([l], { type: "region" }));
    } catch {
      names.set(l, null);
    }
  }
  try {
    return names.get(l)?.of(cc) ?? cc;
  } catch {
    return cc;
  }
}

/** 나라 코드 → 국기 이모지 (KR → 🇰🇷). 두 글자 대문자가 아니면 빈 문자열 */
export function flagOf(cc: string): string {
  if (!/^[A-Z]{2}$/.test(cc)) return "";
  return String.fromCodePoint(...Array.from(cc, (c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

/** 길면 앞 3자까지만 (한글·이모지도 글자 단위로 자른다) */
export function short3(s: string): string {
  const chars = Array.from(s.trim());
  return chars.length > 3 ? chars.slice(0, 3).join("") : chars.join("");
}
