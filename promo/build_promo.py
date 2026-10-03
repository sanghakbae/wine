# 블라인드 보틀 30초 홍보 영상 (세로 1080×1920, 30fps)
# 게임에서 내보낸 병(GLB)으로 장면을 만든다.
#   blender -b -P promo/build_promo.py -- [--engine eevee|cycles] [--frames 1-900] [--still 320] [--scale 100] [--save]
# 결과: promo/out/frames/####.png (이어 붙이기는 make_video.sh)

import bpy
import math
import os
import sys
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(HERE, "assets")
OUT = os.path.join(HERE, "out")
FONTS = os.path.join(HERE, "..", "node_modules", "@fontsource")

args = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []


def arg(name, default=None):
    return args[args.index(name) + 1] if name in args else default


ENGINE = arg("--engine", "eevee")
SCALE = int(arg("--scale", "100"))
FPS = 30
END = 900

GOLD = (0.851, 0.710, 0.416)
CREAM = (0.937, 0.898, 0.839)
MUTED = (0.718, 0.659, 0.569)
GREEN = (0.35, 0.78, 0.45)


def srgb(c):
    """sRGB 0..1 → 선형 (블렌더 색 입력은 선형)"""
    return tuple(x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c)


# ───────────────────────── 장면 초기화
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.fps = FPS
scene.frame_start = 1
scene.frame_end = END
scene.render.resolution_x = 1080
scene.render.resolution_y = 1920
scene.render.resolution_percentage = SCALE
scene.render.film_transparent = False
scene.view_settings.view_transform = "AgX"
scene.view_settings.look = "AgX - Punchy"

world = bpy.data.worlds.new("World")
scene.world = world
world.use_nodes = True
world.node_tree.nodes["Background"].inputs[0].default_value = (*srgb((0.035, 0.026, 0.022)), 1)
world.node_tree.nodes["Background"].inputs[1].default_value = 0.6

if ENGINE == "cycles":
    import addon_utils

    addon_utils.enable("cycles", default_set=True)
    scene.render.engine = "CYCLES"
    prefs = bpy.context.preferences.addons["cycles"].preferences
    prefs.compute_device_type = "METAL"
    prefs.get_devices()
    for d in prefs.devices:
        d.use = True
    scene.cycles.device = "GPU"
    scene.cycles.samples = int(arg("--samples", "96"))
    scene.cycles.use_denoising = True
    scene.cycles.max_bounces = 12
    scene.cycles.transmission_bounces = 12
    scene.cycles.transparent_max_bounces = 16
else:
    scene.render.engine = "BLENDER_EEVEE"
    ee = scene.eevee
    for k, v in (("use_raytracing", True), ("taa_render_samples", 48), ("use_shadows", True)):
        if hasattr(ee, k):
            setattr(ee, k, v)
    if hasattr(ee, "ray_tracing_options"):
        ee.ray_tracing_options.resolution_scale = "1"
    if hasattr(ee, "use_fast_gi"):
        ee.use_fast_gi = True


# ───────────────────────── 재질 도우미
def principled(name, color=(0.8, 0.8, 0.8), rough=0.5, metal=0.0, **extra):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    for k, v in extra.items():
        b.inputs[k].default_value = v
    return m


def glass_material(name, tint):
    m = principled(name, tint, rough=0.03, **{"Transmission Weight": 1.0, "IOR": 1.52})
    m.node_tree.nodes["Principled BSDF"].inputs["Specular IOR Level"].default_value = 0.6
    if hasattr(m, "surface_render_method"):
        m.surface_render_method = "DITHERED"
    if hasattr(m, "use_raytrace_refraction"):
        m.use_raytrace_refraction = True
    if hasattr(m, "thickness_mode"):
        m.thickness_mode = "SLAB"
    return m


def fade_material(name, strength=1.0, dark=False):
    """오브젝트 색(obj.color)의 RGB 를 빛깔로, A 를 투명도로 쓰는 재질 — 글자·카드 페이드에 쓴다"""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    attr = nt.nodes.new("ShaderNodeAttribute")
    attr.attribute_type = "OBJECT"
    attr.attribute_name = "color"
    em = nt.nodes.new("ShaderNodeEmission")
    em.inputs["Strength"].default_value = strength
    tr = nt.nodes.new("ShaderNodeBsdfTransparent")
    mix = nt.nodes.new("ShaderNodeMixShader")
    nt.links.new(attr.outputs["Color"], em.inputs["Color"])
    nt.links.new(attr.outputs["Alpha"], mix.inputs["Fac"])
    nt.links.new(tr.outputs[0], mix.inputs[1])
    nt.links.new(em.outputs[0], mix.inputs[2])
    nt.links.new(mix.outputs[0], out.inputs["Surface"])
    if hasattr(m, "surface_render_method"):
        m.surface_render_method = "BLENDED"
    if hasattr(m, "blend_method"):
        m.blend_method = "BLEND"
    return m


TEXT_MAT = fade_material("text", 1.0)
CARD_MAT = fade_material("card", 1.0)


# ───────────────────────── 키프레임 도우미
def key(obj, path, frame, value, index=-1, interp="BEZIER"):
    if index >= 0:
        getattr(obj, path)[index] = value
    else:
        setattr(obj, path, value)
    obj.keyframe_insert(data_path=path, index=index, frame=frame)
    ad = obj.animation_data
    if ad and ad.action:
        for fc in iter_fcurves(ad.action):
            if fc.data_path == path and (index < 0 or fc.array_index == index):
                for kp in fc.keyframe_points:
                    if int(kp.co.x) == frame:
                        kp.interpolation = interp


def iter_fcurves(action):
    # Blender 4.4+ 레이어드 액션과 옛 방식 모두
    if hasattr(action, "fcurves") and len(getattr(action, "fcurves", [])):
        yield from action.fcurves
    for layer in getattr(action, "layers", []):
        for strip in layer.strips:
            for bag in getattr(strip, "channelbags", []):
                yield from bag.fcurves


def fade(obj, rgb, frames):
    """frames: [(frame, alpha), ...] 로 obj.color 를 움직인다"""
    for f, a in frames:
        obj.color = (*srgb(rgb), a)
        obj.keyframe_insert("color", frame=f)


def color_keys(obj, keys):
    """keys: [(frame, rgb, alpha)]"""
    for f, rgb, a in keys:
        obj.color = (*srgb(rgb), a)
        obj.keyframe_insert("color", frame=f)


# ───────────────────────── 카메라 (세로 화면)
cam_data = bpy.data.cameras.new("cam")
cam_data.sensor_fit = "VERTICAL"
cam_data.angle = math.radians(32)
cam = bpy.data.objects.new("cam", cam_data)
scene.collection.objects.link(cam)
scene.camera = cam
target = bpy.data.objects.new("target", None)
scene.collection.objects.link(target)
track = cam.constraints.new("TRACK_TO")
track.target = target
track.track_axis = "TRACK_NEGATIVE_Z"
track.up_axis = "UP_Y"

HALF_H = math.tan(cam_data.angle / 2)  # 거리 1 에서 화면 절반 높이
HALF_W = HALF_H * 1080 / 1920
UI_D = 0.5  # 글자·카드는 카메라 앞 0.5m 에 붙인다


def cam_pose(frame, dist, tz=0.15, cz=None, yaw=0.0, interp="BEZIER"):
    cz = tz + 0.06 if cz is None else cz
    cam.location = (math.sin(yaw) * dist, -math.cos(yaw) * dist, cz)
    key(cam, "location", frame, cam.location.copy(), interp=interp)
    target.location = (0, 0, tz)
    key(target, "location", frame, target.location.copy(), interp=interp)


# ───────────────────────── 화면 글자·카드 (카메라에 붙인다)
FONT_CACHE = {}


def font(kind):
    if kind in FONT_CACHE:
        return FONT_CACHE[kind]
    path = {
        "logo": os.path.join(FONTS, "cinzel", "files", "cinzel-latin-700-normal.woff"),
        "logo400": os.path.join(FONTS, "cinzel", "files", "cinzel-latin-400-normal.woff"),
        "ko": "/System/Library/Fonts/AppleSDGothicNeo.ttc",
        # 한글 글꼴에 없는 악센트(â·é)가 있는 원어 이름용
        "serif": os.path.join(FONTS, "playfair-display", "files", "playfair-display-latin-400-italic.woff"),
    }[kind]
    FONT_CACHE[kind] = bpy.data.fonts.load(path)
    return FONT_CACHE[kind]


def ui_text(body, x, y, size, kind="ko", rgb=CREAM, spacing=1.0, bold=0.0):
    """x, y: 화면 좌표 (-1..1, 위가 +), size: 화면 높이 대비 글자 높이"""
    cu = bpy.data.curves.new(body[:12], "FONT")
    cu.body = body
    cu.font = font(kind)
    cu.align_x = "CENTER"
    cu.align_y = "CENTER"
    cu.size = size * 2 * HALF_H * UI_D * 1.35
    cu.space_character = spacing
    cu.offset = bold * cu.size
    ob = bpy.data.objects.new("t_" + body[:12], cu)
    scene.collection.objects.link(ob)
    ob.parent = cam
    ob.location = (x * HALF_W * UI_D, y * HALF_H * UI_D, -UI_D)
    ob.data.materials.append(TEXT_MAT)
    ob.color = (*srgb(rgb), 0)
    ob.keyframe_insert("color", frame=1)
    return ob


def ui_card(x, y, w, h, rgb=(0.08, 0.06, 0.05), z=-0.0005):
    """둥근 모서리 카드. w, h: 화면 폭·높이 대비"""
    bpy.ops.mesh.primitive_plane_add(size=1)
    ob = bpy.context.active_object
    ob.name = "card"
    ob.scale = (w * 2 * HALF_W * UI_D, h * 2 * HALF_H * UI_D, 1)
    bpy.ops.object.transform_apply(scale=True)
    bev = ob.modifiers.new("round", "BEVEL")
    bev.affect = "VERTICES"
    bev.width = min(w * HALF_W, h * HALF_H) * UI_D * 0.35
    bev.segments = 8
    ob.parent = cam
    ob.location = (x * HALF_W * UI_D, y * HALF_H * UI_D, -UI_D + z)
    ob.data.materials.append(CARD_MAT)
    ob.color = (*srgb(rgb), 0)
    ob.keyframe_insert("color", frame=1)
    return ob


def pop(obj, f0, f1=None, s0=0.82):
    """f0 에 살짝 작게 시작해 커지며 나타난다"""
    f1 = f1 or f0 + 8
    obj.scale = (s0, s0, s0)
    obj.keyframe_insert("scale", frame=f0)
    obj.scale = (1.04, 1.04, 1.04)
    obj.keyframe_insert("scale", frame=f1 - 2)
    obj.scale = (1, 1, 1)
    obj.keyframe_insert("scale", frame=f1)


# ───────────────────────── 받침대·배경·조명
def pedestal():
    top = bpy.data.materials.new("marble")
    top.use_nodes = True
    nt = top.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = 0.18
    b.inputs["Coat Weight"].default_value = 0.6
    b.inputs["Coat Roughness"].default_value = 0.05
    # 흰 대리석에 가는 회색 결: 노이즈 값이 0.5 근처인 곳만 어둡게
    tc = nt.nodes.new("ShaderNodeTexCoord")
    noise = nt.nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 9.0
    noise.inputs["Detail"].default_value = 10.0
    noise.inputs["Distortion"].default_value = 2.5
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    els = ramp.color_ramp.elements
    white = (*srgb((0.90, 0.885, 0.86)), 1)
    vein = (*srgb((0.50, 0.49, 0.47)), 1)
    els[0].position, els[0].color = 0.0, white
    els[1].position, els[1].color = 0.47, white
    for pos, col in ((0.5, vein), (0.53, white), (1.0, white)):
        e = els.new(pos)
        e.color = col
    nt.links.new(tc.outputs["Object"], noise.inputs["Vector"])
    nt.links.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], b.inputs["Base Color"])

    wood = bpy.data.materials.new("walnut")
    wood.use_nodes = True
    nt = wood.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = 0.42
    tc = nt.nodes.new("ShaderNodeTexCoord")
    mp = nt.nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (40, 40, 2)
    wave = nt.nodes.new("ShaderNodeTexWave")
    wave.wave_type = "RINGS"
    wave.inputs["Distortion"].default_value = 4
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = (*srgb((0.13, 0.07, 0.04)), 1)
    ramp.color_ramp.elements[1].color = (*srgb((0.30, 0.17, 0.09)), 1)
    nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])
    nt.links.new(mp.outputs["Vector"], wave.inputs["Vector"])
    nt.links.new(wave.outputs["Color"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], b.inputs["Base Color"])

    bronze = principled("bronze", srgb((0.71, 0.55, 0.32)), rough=0.3, metal=1.0)

    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.086, depth=0.014, location=(0, 0, -0.007))
    t = bpy.context.active_object
    t.name = "marble"
    t.data.materials.append(top)
    bev = t.modifiers.new("bev", "BEVEL")
    bev.width = 0.003
    bev.segments = 4
    bpy.ops.object.shade_smooth()
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.092, depth=0.05, location=(0, 0, -0.039))
    base = bpy.context.active_object
    base.name = "walnut"
    base.data.materials.append(wood)
    bpy.ops.object.shade_smooth()
    bpy.ops.mesh.primitive_torus_add(major_radius=0.0925, minor_radius=0.002, major_segments=128, location=(0, 0, -0.017))
    ring = bpy.context.active_object
    ring.data.materials.append(bronze)
    bpy.ops.object.shade_smooth()


def backdrop():
    """병 뒤의 따뜻한 빛 번짐 (게임의 배경판과 같은 느낌)"""
    m = bpy.data.materials.new("backdrop")
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    em = nt.nodes.new("ShaderNodeEmission")
    tc = nt.nodes.new("ShaderNodeTexCoord")
    grad = nt.nodes.new("ShaderNodeTexGradient")
    grad.gradient_type = "SPHERICAL"
    mp = nt.nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (0.9, 0.62, 1)
    mp.inputs["Location"].default_value = (0, -0.1, 0)
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = (*srgb((0.02, 0.015, 0.013)), 1)
    ramp.color_ramp.elements[1].color = (*srgb((0.30, 0.19, 0.13)), 1)
    ramp.color_ramp.elements[1].position = 0.95
    nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])
    nt.links.new(mp.outputs["Vector"], grad.inputs["Vector"])
    nt.links.new(grad.outputs["Fac"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], em.inputs["Color"])
    em.inputs["Strength"].default_value = 1.0
    nt.links.new(em.outputs[0], out.inputs["Surface"])
    bpy.ops.mesh.primitive_plane_add(size=1, location=(0, 1.2, 0.25), rotation=(math.radians(90), 0, 0))
    bd = bpy.context.active_object
    bd.name = "backdrop"
    bd.scale = (2.2, 2.4, 1)
    bd.data.materials.append(m)
    return em


LIGHTS = []


def area(name, loc, size, energy, rgb=(1, 0.9, 0.78), size_y=None, aim=(0, 0, 0.14)):
    d = bpy.data.lights.new(name, "AREA")
    d.energy = energy
    d.color = rgb
    if size_y:
        d.shape = "RECTANGLE"
        d.size = size
        d.size_y = size_y
    else:
        d.size = size
    ob = bpy.data.objects.new(name, d)
    scene.collection.objects.link(ob)
    ob.location = loc
    direction = Vector(aim) - Vector(loc)
    ob.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    LIGHTS.append((ob, energy))
    return ob


def spot(name, loc, energy, angle=28, rgb=(1, 0.88, 0.72)):
    d = bpy.data.lights.new(name, "SPOT")
    d.energy = energy
    d.color = rgb
    d.spot_size = math.radians(angle)
    d.spot_blend = 0.7
    d.shadow_soft_size = 0.05
    ob = bpy.data.objects.new(name, d)
    scene.collection.objects.link(ob)
    ob.location = loc
    ob.rotation_euler = (Vector((0, 0, 0)) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
    LIGHTS.append((ob, energy))
    return ob


pedestal()
BACK_EM = backdrop()
area("key", (-0.55, -0.75, 0.75), 0.5, 55)
area("fill", (0.6, -1.1, 0.35), 0.8, 14, rgb=(0.85, 0.9, 1.0))
area("rimL", (-0.42, 0.32, 0.25), 0.06, 70, size_y=0.9, rgb=(1, 0.93, 0.85))
area("rimR", (0.42, 0.32, 0.25), 0.06, 70, size_y=0.9, rgb=(1, 0.93, 0.85))
spot("top", (0, -0.1, 1.1), 220)

# 처음엔 어둠 속에서 조명이 켜진다
for ob, e in LIGHTS:
    ob.data.energy = 0
    ob.data.keyframe_insert("energy", frame=1)
    ob.data.energy = e
    ob.data.keyframe_insert("energy", frame=30)
BACK_EM.inputs["Strength"].default_value = 0
BACK_EM.inputs["Strength"].keyframe_insert("default_value", frame=1)
BACK_EM.inputs["Strength"].default_value = 1
BACK_EM.inputs["Strength"].keyframe_insert("default_value", frame=36)


# ───────────────────────── 병 불러오기
def load_bottle(file, name):
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=os.path.join(ASSETS, file))
    new = [o for o in bpy.data.objects if o not in before]
    root = bpy.data.objects.new(name, None)
    scene.collection.objects.link(root)
    for o in new:
        if o.parent is None:
            o.parent = root
    root.scale = (0.01, 0.01, 0.01)
    for o in new:
        if o.type != "MESH":
            continue
        n = o.name.split(".")[0]
        src = o.active_material
        if n == "glass":
            tint = tuple(src.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value)[:3] if src else (0.1, 0.2, 0.1)
            # 게임의 곱하기 색은 어둡다: 유리 투과색은 조금 밝혀서 쓴다
            peak = max(tint) or 1
            lift = tuple(min(1, 0.18 + c / peak * 0.55) for c in tint) if peak < 0.5 else tint
            o.data.materials.clear()
            o.data.materials.append(glass_material(f"glass_{name}", lift))
        elif n == "liquid":
            bsdf = src.node_tree.nodes.get("Principled BSDF") if src else None
            col = (0.25, 0.02, 0.03)
            if bsdf:
                c = tuple(bsdf.inputs["Base Color"].default_value)[:3]
                if max(c) < 0.98:
                    col = c
            liq = principled(f"liq_{name}", col, rough=0.08, **{"Transmission Weight": 1.0, "IOR": 1.34})
            if hasattr(liq, "surface_render_method"):
                liq.surface_render_method = "DITHERED"
            o.data.materials.clear()
            o.data.materials.append(liq)
        elif n.startswith("label"):
            for m in o.data.materials:
                b = m.node_tree.nodes.get("Principled BSDF")
                if b:
                    b.inputs["Roughness"].default_value = max(0.45, b.inputs["Roughness"].default_value)
        for p in o.data.polygons:
            p.use_smooth = True
    root.hide_render = False
    return root, [o for o in new if o.type == "MESH"]


def set_visible(objs, frames):
    """frames: [(frame, visible)]"""
    for o in objs:
        for f, v in frames:
            o.hide_render = not v
            o.hide_viewport = not v
            o.keyframe_insert("hide_render", frame=f)
            o.keyframe_insert("hide_viewport", frame=f)


def drop_in(root, f0, f_land=None, spin_from=-2.4, spin_to=0.0, h=0.32):
    f_land = f_land or f0 + 14
    root.location = (0, 0, h)
    root.keyframe_insert("location", frame=f0)
    root.location = (0, 0, 0)
    root.keyframe_insert("location", frame=f_land)
    root.rotation_euler = (0, 0, spin_from)
    root.keyframe_insert("rotation_euler", frame=f0)
    root.rotation_euler = (0, 0, spin_to)
    root.keyframe_insert("rotation_euler", frame=f_land + 8)


def lift_out(root, f0, f1=None, h=0.36, spin=None):
    f1 = f1 or f0 + 8
    root.keyframe_insert("location", frame=f0)
    root.location = (0, 0, h)
    root.keyframe_insert("location", frame=f1)
    if spin is not None:
        root.keyframe_insert("rotation_euler", frame=f0)
        root.rotation_euler = (0, 0, spin)
        root.keyframe_insert("rotation_euler", frame=f1)


def slide_in(root, f0, f1, x_from=0.34, spin_from=-1.4, spin_to=0.2):
    """옆에서 받침대 위로 미끄러져 들어온다 (위에서 떨어지면 제목 글자를 가로지른다)"""
    root.location = (x_from, 0, 0)
    root.keyframe_insert("location", frame=f0)
    root.location = (0, 0, 0)
    root.keyframe_insert("location", frame=f1)
    root.rotation_euler = (0, 0, spin_from)
    root.keyframe_insert("rotation_euler", frame=f0)
    root.rotation_euler = (0, 0, spin_to)
    root.keyframe_insert("rotation_euler", frame=f1 + 6)


def slide_out(root, f0, f1, x_to=-0.34):
    root.location = (0, 0, 0)
    root.keyframe_insert("location", frame=f0)
    root.location = (x_to, 0, 0)
    root.keyframe_insert("location", frame=f1)


# ───────────────────────── 1. 인트로 (0–3초)
cam_pose(1, 1.42, tz=0.12)
cam_pose(100, 1.26, tz=0.13)

logo = ui_text("BLIND BOTTLE", 0, 0.66, 0.056, kind="logo", rgb=GOLD, spacing=1.12)
fade(logo, GOLD, [(12, 0), (36, 1), (80, 1), (94, 0)])
logo_sub = ui_text("블라인드 보틀", 0, 0.575, 0.03, rgb=CREAM, spacing=1.2, bold=0.03)
fade(logo_sub, CREAM, [(24, 0), (46, 1), (80, 1), (94, 0)])
tag = ui_text("병 모양과 라벨만 보고 맞히는 3D 와인 퀴즈", 0, 0.51, 0.021, rgb=MUTED)
fade(tag, MUTED, [(34, 0), (54, 1), (80, 1), (94, 0)])

# ───────────────────────── 2. 문제 (3–11초) → 3. 정답 (11–14초)
hero, hero_meshes = load_bottle("margaux_open.glb", "hero")
blind, blind_meshes = load_bottle("margaux_blind.glb", "hero_blind")
# 가린 라벨만 남기고 나머지(유리 등)는 정답 병 것을 쓴다
blind_labels = [o for o in blind_meshes if o.name.split(".")[0].startswith("label")]
for o in blind_meshes:
    if o not in blind_labels:
        o.hide_render = o.hide_viewport = True
hero_labels = [o for o in hero_meshes if o.name.split(".")[0].startswith("label")]
# 가린 라벨 root 를 정답 병 root 에 붙여 함께 움직이게
blind.parent = hero
blind.location = (0, 0, 0)
blind.scale = (1, 1, 1)
blind.rotation_euler = (0, 0, 0)

set_visible([hero, *hero_meshes], [(1, False), (84, True), (425, False)])
set_visible(blind_labels, [(1, False), (84, True), (306, False)])
set_visible(hero_labels, [(1, False), (306, True), (425, False)])

drop_in(hero, 84, 100, spin_from=-2.6, spin_to=-0.35)
# 천천히 좌우로 돌며 라벨을 보여 준다
for f, a in ((150, 0.3), (210, -0.25), (270, 0.2), (300, 0.0)):
    hero.rotation_euler = (0, 0, a)
    hero.keyframe_insert("rotation_euler", frame=f)
hero.rotation_euler = (0, 0, 0)
hero.keyframe_insert("rotation_euler", frame=330)
lift_out(hero, 404, 420, h=0.4, spin=0.8)

q = ui_text("이 와인은?", 0, 0.74, 0.05, rgb=CREAM, bold=0.04)
fade(q, CREAM, [(108, 0), (124, 1), (298, 1), (306, 0)])
qsub = ui_text("라벨의 이름은 가려져 있어요", 0, 0.665, 0.021, rgb=MUTED)
fade(qsub, MUTED, [(118, 0), (136, 1), (298, 1), (306, 0)])

OPTIONS = ["샤토 라투르", "샤토 마고", "페트뤼스", "오퍼스 원"]
cards = []
for i, label in enumerate(OPTIONS):
    cx = -0.49 if i % 2 == 0 else 0.49
    cy = -0.64 if i < 2 else -0.79
    f0 = 140 + i * 9
    card = ui_card(cx, cy, 0.46, 0.058)
    num = ui_text(f"{i + 1}", cx - 0.36, cy, 0.022, rgb=MUTED)
    txt = ui_text(label, cx + 0.06, cy, 0.024, rgb=CREAM)
    card_rgb = (0.10, 0.075, 0.065)
    if i == 1:
        color_keys(card, [(f0, card_rgb, 0), (f0 + 8, card_rgb, 0.82), (300, card_rgb, 0.82), (308, (0.62, 0.47, 0.20), 0.95), (398, (0.62, 0.47, 0.20), 0.95), (408, (0.62, 0.47, 0.2), 0)])
        fade(txt, CREAM, [(f0, 0), (f0 + 8, 1), (398, 1), (408, 0)])
        fade(num, MUTED, [(f0, 0), (f0 + 8, 1), (398, 1), (408, 0)])
    else:
        color_keys(card, [(f0, card_rgb, 0), (f0 + 8, card_rgb, 0.82), (300, card_rgb, 0.82), (310, card_rgb, 0.3), (398, card_rgb, 0.3), (408, card_rgb, 0)])
        fade(txt, CREAM, [(f0, 0), (f0 + 8, 1), (300, 1), (310, 0.35), (398, 0.35), (408, 0)])
        fade(num, MUTED, [(f0, 0), (f0 + 8, 1), (300, 1), (310, 0.35), (398, 0.35), (408, 0)])
    for ob in (card, num, txt):
        pop(ob, f0)
    cards.append(card)
pop(cards[1], 300, 310, s0=1.0)

ok = ui_text("정답!  샤토 마고", 0, 0.74, 0.05, rgb=GOLD, bold=0.04)
fade(ok, GOLD, [(306, 0), (316, 1), (398, 1), (408, 0)])
pop(ok, 306, 316, s0=0.7)
oksub = ui_text("Château Margaux", 0, 0.665, 0.026, kind="serif", rgb=CREAM)
fade(oksub, CREAM, [(314, 0), (328, 1), (398, 1), (408, 0)])
oksub2 = ui_text("보르도 · 마고   +100점", 0, 0.615, 0.02, rgb=MUTED)
fade(oksub2, MUTED, [(318, 0), (332, 1), (398, 1), (408, 0)])

# 문제 동안 천천히 다가가고, 정답이 나오면 라벨로 더 다가간다
cam_pose(300, 1.22, tz=0.13)
cam_pose(392, 1.14, tz=0.12)
cam_pose(430, 1.26, tz=0.13)

# ───────────────────────── 4. 병 모양 몽타주 (14–23초)
MONTAGE = [
    ("domperignon_open.glb", "샴페인형", "돔 페리뇽"),
    ("drc_open.glb", "부르고뉴형", "로마네 콩티"),
    ("chianti_open.glb", "피아스코", "키안티"),
    ("juliusspital_open.glb", "복스보이텔", "율리우스슈피탈 실바너"),
    ("taylors_open.glb", "포트형", "테일러스 빈티지 포트"),
    ("egonmuller_open.glb", "플뤼트형", "에곤 뮐러 리슬링"),
    ("mateus_open.glb", "플라스크형", "마테우스 로제"),
    ("tokaji_open.glb", "토카이형", "로열 토카이 아수"),
]
M0, STEP = 432, 32
head = ui_text("1,285종 세계 와인", 0, 0.74, 0.05, rgb=CREAM, bold=0.04)
fade(head, CREAM, [(426, 0), (442, 1), (682, 1), (694, 0)])
headsub = ui_text("병 모양도 라벨도 실제처럼", 0, 0.665, 0.022, rgb=MUTED)
fade(headsub, MUTED, [(434, 0), (450, 1), (682, 1), (694, 0)])
for i, (file, shape_name, wine_name) in enumerate(MONTAGE):
    root, meshes = load_bottle(file, f"m{i}")
    t0 = M0 + i * STEP
    set_visible([root, *meshes], [(1, False), (t0, True), (t0 + STEP + 2, False)])
    slide_in(root, t0, t0 + 9, spin_from=-1.6, spin_to=0.25)
    root.rotation_euler = (0, 0, -0.15)
    root.keyframe_insert("rotation_euler", frame=t0 + 25)
    slide_out(root, t0 + 25, t0 + 32)
    s1 = ui_text(shape_name, 0, -0.64, 0.042, rgb=GOLD, bold=0.04)
    s2 = ui_text(wine_name, 0, -0.73, 0.022, rgb=CREAM)
    fade(s1, GOLD, [(t0 + 3, 0), (t0 + 9, 1), (t0 + 24, 1), (t0 + 30, 0)])
    fade(s2, CREAM, [(t0 + 5, 0), (t0 + 11, 1), (t0 + 24, 1), (t0 + 30, 0)])
    pop(s1, t0 + 3, t0 + 11)

# ───────────────────────── 5. 레벨 (23–27초)
lv_bottle, lv_meshes = load_bottle("opusone_open.glb", "levels")
set_visible([lv_bottle, *lv_meshes], [(1, False), (690, True), (818, False)])
slide_in(lv_bottle, 690, 702, spin_from=-2.0, spin_to=0.2)
lv_bottle.rotation_euler = (0, 0, -0.3)
lv_bottle.keyframe_insert("rotation_euler", frame=800)
slide_out(lv_bottle, 800, 812)
L1 = ui_text("3단계 × 10레벨", 0, 0.74, 0.05, rgb=CREAM, bold=0.04)
fade(L1, CREAM, [(696, 0), (712, 1), (800, 1), (812, 0)])
L2 = ui_text("레벨마다 25문제 · 18개 맞히면 다음 레벨", 0, 0.665, 0.021, rgb=MUTED)
fade(L2, MUTED, [(704, 0), (720, 1), (800, 1), (812, 0)])
for i, (name, desc, stars) in enumerate((("입문", "마트에서 자주 보는 와인", "★☆☆"), ("애호가", "세계 명품 와인까지", "★★☆"), ("소믈리에", "전체 1,285종 · 보기 6개", "★★★"))):
    cy = -0.60 - i * 0.12
    f0 = 722 + i * 12
    card = ui_card(0, cy, 0.9, 0.052)
    color_keys(card, [(f0, (0.10, 0.075, 0.065), 0), (f0 + 8, (0.10, 0.075, 0.065), 0.82), (800, (0.10, 0.075, 0.065), 0.82), (812, (0.10, 0.075, 0.065), 0)])
    a = ui_text(name, -0.62, cy, 0.025, rgb=GOLD, bold=0.03)
    b = ui_text(desc, 0.02, cy, 0.018, rgb=CREAM)
    c = ui_text(stars, 0.66, cy, 0.024, rgb=GOLD)
    for ob, rgb in ((a, GOLD), (b, CREAM), (c, GOLD)):
        fade(ob, rgb, [(f0, 0), (f0 + 8, 1), (800, 1), (812, 0)])
        pop(ob, f0)
    pop(card, f0)

# ───────────────────────── 6. 엔딩 (27–30초)
end_b, end_meshes = load_bottle("margaux_open.glb", "end")
set_visible([end_b, *end_meshes], [(1, False), (812, True)])
slide_in(end_b, 812, 826, spin_from=-2.2, spin_to=0.0)
for file, x, y, f0 in (("domperignon_open.glb", -0.15, 0.16, 818), ("sassicaia_open.glb", 0.15, 0.16, 822)):
    side, side_meshes = load_bottle(file, f"end_{file[:6]}")
    set_visible([side, *side_meshes], [(1, False), (f0, True)])
    side.location = (x, y + 0.25, -0.064)
    side.keyframe_insert("location", frame=f0)
    side.location = (x, y, -0.064)
    side.keyframe_insert("location", frame=f0 + 16)
    side.rotation_euler = (0, 0, 0.25 if x < 0 else -0.25)
cam_pose(812, 1.4, tz=0.13)
cam_pose(900, 1.3, tz=0.13)

E1 = ui_text("BLIND BOTTLE", 0, 0.68, 0.058, kind="logo", rgb=GOLD, spacing=1.12)
fade(E1, GOLD, [(820, 0), (838, 1), (900, 1)])
E2 = ui_text("블라인드 보틀", 0, 0.59, 0.03, rgb=CREAM, bold=0.03, spacing=1.2)
fade(E2, CREAM, [(828, 0), (846, 1), (900, 1)])
E3 = ui_text("지금 무료로 플레이", 0, -0.62, 0.032, rgb=CREAM, bold=0.04)
fade(E3, CREAM, [(836, 0), (852, 1), (900, 1)])
E4 = ui_text("wine.sanghak.kr", 0, -0.71, 0.036, kind="logo", rgb=GOLD, spacing=1.05)
fade(E4, GOLD, [(842, 0), (858, 1), (900, 1)])
pop(E4, 842, 858)
E5 = ui_text("9개 언어 · Google 로그인하면 기록 저장", 0, -0.79, 0.019, rgb=MUTED)
fade(E5, MUTED, [(850, 0), (866, 1), (900, 1)])

# 마지막 0.4초는 검게
for ob, e in LIGHTS:
    ob.data.keyframe_insert("energy", frame=886)
    ob.data.energy = 0
    ob.data.keyframe_insert("energy", frame=900)
BACK_EM.inputs["Strength"].default_value = 1
BACK_EM.inputs["Strength"].keyframe_insert("default_value", frame=886)
BACK_EM.inputs["Strength"].default_value = 0
BACK_EM.inputs["Strength"].keyframe_insert("default_value", frame=900)
for ob in (E1, E2, E3, E4, E5):
    rgb = tuple(ob.color)[:3]
    ob.keyframe_insert("color", frame=886)
    ob.color = (*rgb, 0)
    ob.keyframe_insert("color", frame=900)

# ───────────────────────── 렌더
os.makedirs(os.path.join(OUT, "frames"), exist_ok=True)
scene.render.image_settings.file_format = "PNG"
scene.render.image_settings.color_mode = "RGB"
scene.render.filepath = os.path.join(OUT, "frames", "")

if "--save" in args:
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, "promo.blend"))

still = arg("--still")
if still:
    for f in [int(x) for x in still.split(",")]:
        scene.frame_set(f)
        scene.render.filepath = os.path.join(OUT, f"still_{f:04d}.png")
        bpy.ops.render.render(write_still=True)
elif arg("--frames"):
    a, b = [int(x) for x in arg("--frames").split("-")]
    scene.frame_start, scene.frame_end = a, b
    scene.render.use_overwrite = False  # 이미 그린 프레임은 건너뛴다 (중간에 끊겨도 이어서)
    bpy.ops.render.render(animation=True)
