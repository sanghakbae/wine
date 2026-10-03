// iOS 앱 — 웹 게임(dist)을 앱 안에 통째로 넣는다. server.url 은 쓰지 않는다(원격 페이지만 여는 앱은 심사에서 거절된다).
// 빌드: npm run ios:sync (vite build --mode ios → cap sync ios) · 열기: npm run ios:open
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "kr.sanghak.blindbottle",
  appName: "블라인드 보틀",
  webDir: "dist",
  // 첫 화면이 뜨기 전 웹뷰 바탕 — 게임 배경색과 같게
  backgroundColor: "#120d0c",
  ios: {
    // 화면 전체를 웹이 쓰고 노치·홈 표시줄은 CSS env(safe-area-inset-*) 로 비운다(웹과 같게)
    contentInset: "never",
    backgroundColor: "#120d0c",
    allowsLinkPreview: false,
    scrollEnabled: false,
  },
  plugins: {
    // 구글·Apple 로그인은 네이티브로 받고(웹뷰 안 구글 OAuth 는 구글이 막는다), 받은 토큰으로 웹 Firebase SDK 에 로그인한다
    FirebaseAuthentication: {
      skipNativeAuth: true,
      providers: ["google.com", "apple.com"],
    },
  },
  experimental: {
    ios: {
      spm: {
        swiftToolsVersion: "6.1",
        // Facebook SDK 는 빼고 GoogleSignIn 만 — 추적 SDK 가 들어가면 개인정보 신고·심사가 달라진다
        packageTraits: { "@capacitor-firebase/authentication": ["Google"] },
        packageOptions: { "@capacitor-firebase/authentication": { symlink: true } },
      },
    },
  },
};

export default config;
