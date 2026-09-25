# 블라인드 보틀 (Blind Bottle)

병 모양과 라벨만 보고 맞히는 3D 와인 퀴즈. 1,200종이 넘는 세계 와인을 실제 병 규격대로 3D로 그리고,
이름·국가·산지·품종·종류·생산자·병 모양, 그리고 와인마다 따로 만든 상식 문제를 낸다.

- 배포: https://wine.sanghak.kr (GitHub Pages)
- 스택: TypeScript + Vite + three.js, PWA(vite-plugin-pwa), Firebase(애널리틱스·Firestore)
- 언어: 한국어·English·日本語·中文·Español·Français·Deutsch·Italiano·Português (브라우저 언어·접속 지역으로 자동 선택)
- 배경 음악: 오디오 파일 없이 Web Audio 로 실시간 합성하는 재즈 트리오

## 실행

```bash
npm install
cp .env.example .env.local   # Firebase 웹 설정 입력
npm run dev
```

`npm run preview:watch` 는 소스가 바뀔 때마다 다시 빌드하며 배포본(PWA 포함)을 띄운다.

## 구조

| 경로 | 내용 |
| --- | --- |
| `src/bottle/` | 병 윤곽(LatheGeometry)·유리·와인·캡슐·라벨 메시 |
| `src/label/` | 라벨 캔버스 그리기. 전용 라벨은 `designs/signature.ts`, 나머지는 `template.ts` |
| `src/data/` | 와인 데이터. 기본 52종 `wines.ts` + 지역별 `more/*.ts` (`mk()` 한 줄 형식) |
| `src/i18n/` | 화면 문구(`ui.ts`)와 언어별 와인 해설·퀴즈(`wines/<언어>/`) |
| `src/game/` | 문제 만들기·점수·기록 |
| `src/audio/music.ts` | 합성 배경 음악 |
| `scripts/` | 아이콘 생성, 번역 원문 추출, 배포본 미리보기 |

## 배포

`main` 에 푸시하면 `.github/workflows/deploy.yml` 이 빌드해서 GitHub Pages 로 올린다.
Firebase 설정은 저장소 변수 `VITE_FIREBASE_*` 에서 읽는다.

## 출처

- 랭킹의 국기 (Windows 용 국기 글꼴): [country-flag-emoji-polyfill](https://github.com/talkjs/country-flag-emoji-polyfill) (MIT). 국기 그림은 [Twemoji](https://github.com/twitter/twemoji) — © Twitter, Inc and other contributors, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
