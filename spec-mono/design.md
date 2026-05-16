---
name: Spec Mono
colors:
  primary: "#000000"        # 纯黑底
  on-primary: "#FFFFFF"     # 纯白前景
  surface: "#0A0A0A"        # 卡片表面
  accent: "#FFFFFF"         # 单 accent · 默认纯白(Grok mono)· 可覆盖成任意 hex
typography:
  hero:
    fontFamily: Barlow Semi Condensed
    fontSize: 8rem
    fontWeight: 700
    letterSpacing: -0.03em
    textTransform: uppercase
  stat:
    fontFamily: Barlow Semi Condensed
    fontSize: 9rem
    fontWeight: 700
    letterSpacing: -0.04em
  body:
    fontFamily: Space Grotesk
    fontSize: 1.1rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.7rem
    fontWeight: 500
    letterSpacing: 0.22em
    textTransform: uppercase
  quote:
    fontFamily: Instrument Serif
    fontSize: 4rem
    fontWeight: 400
    fontStyle: italic
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
motion:
  energy: moderate
  easing:
    entry: "expo.out"
    exit: "power4.in"
    ambient: "sine.inOut"
  duration:
    entrance: 0.7
    hold: 2.5
    transition: 0.6
  atmosphere:
    - dot-grid
    - hairline-rules
    - registration-marks
  transition: cinematic-zoom
---

# Spec Mono

视觉语言借鉴 **SpaceX 发射页 × xAI/Grok × X(Twitter)**。源自一套 Claude Design
产出的设计系统(原始产出归档在 `assets/`)。

配套文件:
- `tokens.css` —— 可复用 CSS(变量 + spec-sheet 装饰类 + 入场 keyframes),写镜头时直接抄。
- `spec-mono-components.md` —— 69 个组件的逐个细规格,做具体镜头时查。

## Overview

像航天任务控制台,不像 PPT。冷静、锋利、工程感。信息靠**字重悬崖、留白、
1px hairline、mono caps 注脚**说话 —— 不靠颜色堆砌、不靠阴影发光、不靠装饰插画。

**适合**:技术教程、产品演示、AI / 开发者向、数据密集型内容。
**不适合**:面向大众的轻松 / 温暖 / 活泼内容 —— 那类换主题,别硬套。

## Colors

纯黑白底子,对比 21:1(WCAG AAA)。

- `primary #000000` —— 纯黑场景底。
- `on-primary #FFFFFF` —— 纯白主文字。次级文字用白色降透明度:次级 66%、注脚 42%、极弱 18%。**层级靠透明度,不靠新颜色。**
- `surface #0A0A0A` —— 卡片 / 面板表面。再抬一层用 `#141414`。
- `accent` —— **整套系统唯一的用色**。默认纯白(Grok 式纯单色)。可覆盖成任意 hex(如 SpaceX 仪表绿 `#00E07A`);无论换成什么,**一屏只允许出现一处 accent**。
- hairline 边线:`rgba(255,255,255,0.08)` 默认 / `0.16` 强 / `0.28` 最强。
- 状态色仅用于数据图表:绿 `#00E07A`、红 `#FF3333`、黄 `#FFC700`。正文 / 标题 / 装饰一律不用。

## Typography

| 角色 | 字体 | 用途 |
|---|---|---|
| hero | Barlow Semi Condensed 700 | 海报大字 · 章节大标题 |
| stat | Barlow Semi Condensed 700 | 大数字(tabular-nums) |
| body | Space Grotesk 400 | 正文 · 中英文标题 |
| label | JetBrains Mono 500 | 编号 · 时间码 · 任务码 · 注脚 |
| quote | Instrument Serif 400 italic | 斜体强调字 · 引用块 · 等式运算符 |

- 中文用 **Source Han Sans SC(思源黑体)**,字重 400 / 700 / 900。
  (注:HyperFrames 字体规范禁用 Noto Sans 拉丁族;思源黑体 = Noto Sans SC 中文变体,是本主题刻意选定的 CJK 字体,保留。)
- **字重悬崖**:只用 `400 / 600 / 700 / 800`,**跳过 500**。相邻层级故意拉开两档。
- **字距**:hero / stat 大字 `-0.03 ~ -0.04em`;body `-0.025em → 0`;label mono caps `0.18 ~ 0.22em`;任务字串(`SCN-03` / `T-MINUS`)`0.32em`。
- **行高**:标题 `0.86 ~ 1.0`,正文 `1.55 ~ 1.7`。
- **招牌动作**:一句几何 sans 里挑 **1 个关键词**换 `quote` 斜体衬线 + accent 色做强调。整句斜体只用于引用块。

## Elevation

**全程 flat —— 0 阴影。** 任何元素都不用 box-shadow / drop-shadow。

深度只靠两样东西:**1px hairline 边框** + **表面色阶**(`#000000` → `#0A0A0A` → `#141414`)。
强调靠换色和字号悬崖,绝不靠发光 / 投影。

## Components

下列是常用范式的概括。**每个组件的精确规格(描边宽度、比例、布局)见 `spec-mono-components.md`** —— 做具体镜头时查那份。复用 CSS 见 `tokens.css`。

- **卡片 / 面板**:`{surface}` 底 + 1px hairline 边 + `rounded.lg (8px)`。可在四角贴十字针脚(`.cross`,12px 臂 · 1px 描边)。padding 用 `spacing.xl`。
- **字幕高亮**:逐词字幕,默认 42% 白,念到的词换 `{accent}` + 3px accent 底线扫入,念过的词回纯白。无底色块。
- **大数字**:Barlow Semi Condensed · `{accent}` · tabular-nums;单位缩到 0.32em、纯白、上偏。
- **引用块**:Instrument Serif italic;一个关键词换 `{accent}`;巨型左引号 opacity 0.18 当装饰。
- **反白闪屏**:`{primary}` ↔ 纯白用 `steps(1)` 瞬切,6-12 帧,**每支视频 ≤ 2 次**。
- **装饰层(atmosphere)**:场景背景三选一 —— `dot-grid` / `hairline-rules` / `scan-lines`,一个场景最多 1 种;边角用 `registration-marks`(十字针脚)+ mono caps 任务编号。装饰是工程图味,不是花边,不叠加。
- **图标**:Lucide 图标集,描边默认 1.5px(与 hairline 等重),颜色 `on-primary` 66%,被强调才 accent。

## Do's and Don'ts

**Do**
- 纯黑底 + 纯白字,层级靠透明度与字号悬崖。
- 一屏只用一处 accent —— 它永远代表"此刻的焦点"。
- 1px hairline、`rounded.sm (2px)` 默认圆角、8-pt 间距栅格。
- 数字一律 `font-variant-numeric: tabular-nums`。
- 入场用 `expo.out`,位移 8-16px,每个元素都从不可见动画进场。

**Don't**
- ❌ 不用阴影 / 发光 / 投影(0 阴影是铁律)。
- ❌ 不用渐变 —— 唯一例外:面积图填充 `accent 42% → 0%`。
- ❌ 不用装饰插画 / 手绘人物(章节封面插画除外)。
- ❌ 一屏不出现第二处 accent 色。
- ❌ 不用 2px 描边、不用胶囊全圆角、不用 32/48/56 这类非 8-pt 间距。
- ❌ 不用回弹(bounce)缓动 —— 唯一例外:贴纸式标签的弹入。
- ❌ 字重不用 500(破坏对比悬崖)。
