#!/usr/bin/env python3
"""iOS 프로젝트(ios/App)에 앱스토어용 설정을 넣는다. 여러 번 돌려도 같은 결과(멱등).
  python3 scripts/patch-ios.py [--build N]
 - 서명 팀·Apple 로그인 기능(entitlements)·개인정보 매니페스트·GoogleService-Info.plist 를 프로젝트에 넣는다
 - 홈 화면 이름: 한국어 기기는 '와인 퀴즈', 그 밖은 'Blind Bottle'
 - 버전: package.json 의 iosVersion(스토어 버전), 빌드 번호는 --build 로
"""
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "ios", "App", "App")
PBX = os.path.join(ROOT, "ios", "App", "App.xcodeproj", "project.pbxproj")
TEAM = "8TK5TP67GK"

pkg = json.load(open(os.path.join(ROOT, "package.json")))
VERSION = pkg.get("iosVersion", "1.0.0")
BUILD = sys.argv[sys.argv.index("--build") + 1] if "--build" in sys.argv else None

# ── 파일
open(os.path.join(APP, "App.entitlements"), "w").write("""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.developer.applesignin</key>
	<array>
		<string>Default</string>
	</array>
</dict>
</plist>
""")

def collected(kind):
    return f"""		<dict>
			<key>NSPrivacyCollectedDataType</key>
			<string>{kind}</string>
			<key>NSPrivacyCollectedDataTypeLinked</key>
			<true/>
			<key>NSPrivacyCollectedDataTypeTracking</key>
			<false/>
			<key>NSPrivacyCollectedDataTypePurposes</key>
			<array>
				<string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
			</array>
		</dict>
"""

open(os.path.join(APP, "PrivacyInfo.xcprivacy"), "w").write(f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<!-- 블라인드 보틀 iOS 앱: 추적·광고·분석 없음. 로그인(Apple·구글)한 사람만 이름·사용자 ID·게임 기록을 Firebase 에 저장하고
     (앱 기능 용도, 신원과 연결) 랭킹에 이름 앞 3자와 나라를 공개한다. 로그인하지 않으면 기록은 메모리에만 있다.
     Capacitor 가 앱 설정을 UserDefaults 에 두므로 필수 사유 API 로 UserDefaults(CA92.1)를 밝힌다. -->
<plist version="1.0">
<dict>
	<key>NSPrivacyTracking</key>
	<false/>
	<key>NSPrivacyTrackingDomains</key>
	<array/>
	<key>NSPrivacyCollectedDataTypes</key>
	<array>
{collected("NSPrivacyCollectedDataTypeEmailAddress")}{collected("NSPrivacyCollectedDataTypeName")}{collected("NSPrivacyCollectedDataTypeUserID")}{collected("NSPrivacyCollectedDataTypeGameplayContent")}	</array>
	<key>NSPrivacyAccessedAPITypes</key>
	<array>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryUserDefaults</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>CA92.1</string>
			</array>
		</dict>
	</array>
</dict>
</plist>
""")

for lang, name in (("ko", "와인 퀴즈"), ("en", "Blind Bottle")):
    os.makedirs(os.path.join(APP, f"{lang}.lproj"), exist_ok=True)
    open(os.path.join(APP, f"{lang}.lproj", "InfoPlist.strings"), "w").write(
        f'"CFBundleDisplayName" = "{name}";\n"CFBundleName" = "{name}";\n'
    )

assert os.path.exists(os.path.join(APP, "GoogleService-Info.plist")), "GoogleService-Info.plist 가 없다 (Firebase 콘솔의 iOS 앱 설정에서 받는다)"

# ── Info.plist
plist = os.path.join(APP, "Info.plist")
def pl(*a):
    subprocess.run(["plutil", *a, plist], check=True, capture_output=True)
def pl_try(*a):
    subprocess.run(["plutil", *a, plist], capture_output=True)

gs = open(os.path.join(APP, "GoogleService-Info.plist")).read()
reversed_id = re.search(r"<key>REVERSED_CLIENT_ID</key>\s*<string>([^<]+)</string>", gs).group(1)
pl("-replace", "CFBundleDisplayName", "-string", "Blind Bottle")
pl("-replace", "CFBundleDevelopmentRegion", "-string", "en")
pl("-replace", "CFBundleLocalizations", "-json", '["en","ko","ja","zh-Hans","es","fr","de","it","pt"]')
pl("-replace", "CFBundleURLTypes", "-json", json.dumps([{"CFBundleURLName": "google", "CFBundleURLSchemes": [reversed_id]}]))
pl("-replace", "ITSAppUsesNonExemptEncryption", "-bool", "NO")
pl("-replace", "UIStatusBarStyle", "-string", "UIStatusBarStyleLightContent")
pl("-replace", "UIViewControllerBasedStatusBarAppearance", "-bool", "NO")
pl("-replace", "UIRequiredDeviceCapabilities", "-json", '["arm64"]')
pl("-replace", "UIRequiresFullScreen", "-bool", "YES")
pl_try("-remove", "UISupportedInterfaceOrientations~ipad")

# ── project.pbxproj
p = open(PBX).read()

def once(anchor, text):
    global p
    if text.strip().split("\n")[0].strip() in p:
        return
    assert anchor in p, anchor
    p = p.replace(anchor, anchor + text, 1)

once("/* Begin PBXBuildFile section */\n", """		B1B0B0DE2E00000100000002 /* PrivacyInfo.xcprivacy in Resources */ = {isa = PBXBuildFile; fileRef = B1B0B0DE2E00000100000001 /* PrivacyInfo.xcprivacy */; };
		B1B0B0DE2E00000100000004 /* GoogleService-Info.plist in Resources */ = {isa = PBXBuildFile; fileRef = B1B0B0DE2E00000100000003 /* GoogleService-Info.plist */; };
		B1B0B0DE2E00000100000007 /* InfoPlist.strings in Resources */ = {isa = PBXBuildFile; fileRef = B1B0B0DE2E00000100000006 /* InfoPlist.strings */; };
""")
once("/* Begin PBXFileReference section */\n", """		B1B0B0DE2E00000100000001 /* PrivacyInfo.xcprivacy */ = {isa = PBXFileReference; lastKnownFileType = text.xml; path = PrivacyInfo.xcprivacy; sourceTree = "<group>"; };
		B1B0B0DE2E00000100000003 /* GoogleService-Info.plist */ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = "GoogleService-Info.plist"; sourceTree = "<group>"; };
		B1B0B0DE2E00000100000005 /* App.entitlements */ = {isa = PBXFileReference; lastKnownFileType = text.plist.entitlements; path = App.entitlements; sourceTree = "<group>"; };
		B1B0B0DE2E00000100000008 /* ko */ = {isa = PBXFileReference; lastKnownFileType = text.plist.strings; name = ko; path = ko.lproj/InfoPlist.strings; sourceTree = "<group>"; };
		B1B0B0DE2E00000100000009 /* en */ = {isa = PBXFileReference; lastKnownFileType = text.plist.strings; name = en; path = en.lproj/InfoPlist.strings; sourceTree = "<group>"; };
""")
once("				504EC3131FED79650016851F /* Info.plist */,\n", """				B1B0B0DE2E00000100000001 /* PrivacyInfo.xcprivacy */,
				B1B0B0DE2E00000100000003 /* GoogleService-Info.plist */,
				B1B0B0DE2E00000100000005 /* App.entitlements */,
				B1B0B0DE2E00000100000006 /* InfoPlist.strings */,
""")
once("				504EC30F1FED79650016851F /* Assets.xcassets in Resources */,\n", """				B1B0B0DE2E00000100000002 /* PrivacyInfo.xcprivacy in Resources */,
				B1B0B0DE2E00000100000004 /* GoogleService-Info.plist in Resources */,
				B1B0B0DE2E00000100000007 /* InfoPlist.strings in Resources */,
""")
once("/* Begin PBXVariantGroup section */\n", """		B1B0B0DE2E00000100000006 /* InfoPlist.strings */ = {
			isa = PBXVariantGroup;
			children = (
				B1B0B0DE2E00000100000008 /* ko */,
				B1B0B0DE2E00000100000009 /* en */,
			);
			name = InfoPlist.strings;
			sourceTree = "<group>";
		};
""")
if re.search(r"knownRegions = \(\s*en,\s*Base,\s*\);", p):
    p = re.sub(r"knownRegions = \(\s*en,\s*Base,\s*\);", "knownRegions = (\n\t\t\t\ten,\n\t\t\t\tBase,\n\t\t\t\tko,\n\t\t\t);", p)

# 앱 타깃 빌드 설정 (INFOPLIST_FILE = App/Info.plist 가 있는 블록 두 개: Debug·Release)
def target_settings(block):
    block = re.sub(r"\t+DEVELOPMENT_TEAM = [^;]+;\n", "", block)
    block = re.sub(r"\t+CODE_SIGN_ENTITLEMENTS = [^;]+;\n", "", block)
    block = block.replace("CODE_SIGN_STYLE = Automatic;", f"CODE_SIGN_STYLE = Automatic;\n\t\t\t\tCODE_SIGN_ENTITLEMENTS = App/App.entitlements;\n\t\t\t\tDEVELOPMENT_TEAM = {TEAM};")
    block = re.sub(r"MARKETING_VERSION = [^;]+;", f"MARKETING_VERSION = {VERSION};", block)
    # 아이폰 전용 앱
    block = re.sub(r'TARGETED_DEVICE_FAMILY = [^;]+;', 'TARGETED_DEVICE_FAMILY = 1;', block)
    if BUILD:
        block = re.sub(r"CURRENT_PROJECT_VERSION = [^;]+;", f"CURRENT_PROJECT_VERSION = {BUILD};", block)
    return block

p = re.sub(r"buildSettings = \{[^{}]*?INFOPLIST_FILE = App/Info\.plist;[^{}]*?\};", lambda m: target_settings(m.group(0)), p)
open(PBX, "w").write(p)
print(f"ok — version {VERSION}" + (f" ({BUILD})" if BUILD else ""))
