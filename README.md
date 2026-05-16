# video-spec-builder

> 把"我想做个视频"逼成一份能直接开拍的分镜脚本。

你有一个视频的想法。在脑子里它是模糊的 —— "想要个高大上的产品片",可每个镜头几秒、画面上是什么、节奏怎么走,你说不清。模糊的想法,做不出好视频。

**video-spec-builder** 是住进你终端里的一位视频总监。你把想法丢给它,它就把你逼到墙角 —— 形容词一律打回,"大概十几秒"一律不收,一个镜头一个镜头追问下去,直到整支视频在纸面上成形,精确到秒。

它还会主动替你想:这个画面可以上 AI 配音、逐词高亮字幕、3D 旋转、跟着鼓点跳的动效、花式转场…… 渲染层能干的事你多半不知道,它知道,而且会告诉你。

最后你拿到一份 `video-spec.md` —— 一份每个镜头都拆到位、精确到秒的分镜脚本。交给 [HyperFrames](https://github.com/heygen-com/hyperframes),它变成真正的视频。

**你负责想,它负责逼你想清楚。** 一次安装,Claude Code / Cursor / Codex 通用。

---

## 它是用来干嘛的

做视频最难的不是渲染,是**想清楚**。大多数人脑子里只有"我想要个高大上的产品片",但说不出每个镜头几秒、画面上是什么、节奏怎么走。

`video-spec-builder` 专门解决这一步。它不是渲染器,是渲染**之前**的那个环节 —— 把你脑子里的想法,翻译成机器能执行的脚本。

它会做这些事:

- **追问深挖** —— 不接受"高大上""科技感"这种形容词,逼你把需求落到具体的视觉/动效决策。
- **能力激发** —— 主动告诉你渲染层能做什么(AI 配音、逐词字幕、3D、shader 转场、音频反应可视化…),你往往不知道这些能力存在。
- **场景拆解** —— 把逐字稿 / 卖点拆到单镜头粒度,每个镜头锚定到一个标准组件。
- **节奏与转场** —— 按视频类型和平台,把节奏钉到"平均每镜头几秒",定每个转场。
- **冲突检测** —— 你后来改需求时,它会指出和已有脚本的矛盾。
- **结构化输出** —— 最终产出带分镜表的 `video-spec.md`。

两种工作模式:

| 模式 | 触发 | 做什么 |
|---|---|---|
| **0-1 模式** | 项目里没有 video-spec.md | 从零对话收集需求,5 个阶段走完,产出完整 `video-spec.md` |
| **迭代模式** | 项目里已有 video-spec.md | 你提出"换镜头/改节奏/换音乐",它追问 + 检测冲突 + 更新脚本 |

---

## 如何安装

本技能用 [`skills`](https://www.npmjs.com/package/skills) CLI 分发 —— **一条命令**装到你所有支持的 AI 环境,路径差异由它自己处理。

```bash
npx skills add feicaiclub/video-spec-builder
```

这一条命令会自动检测并安装到你环境里**所有支持的 Agent**:

| 环境 | 说明 |
|---|---|
| Claude Code | 安装到 `.claude/skills/`(符号链接) |
| Cursor | universal 方式安装 |
| Codex | universal 方式安装 |
| Gemini CLI / OpenCode / Amp 等 | 同样自动覆盖 |

常用选项:

```bash
# 装到全局(用户级),所有项目可用;默认是装到当前项目
npx skills add feicaiclub/video-spec-builder -g

# 只装到指定 Agent
npx skills add feicaiclub/video-spec-builder -a claude-code

# 跳过确认
npx skills add feicaiclub/video-spec-builder -y
```

> 没装过 `skills` CLI 也没关系,`npx` 会临时拉取,不污染全局环境。

**搭配渲染器**:本技能只产出脚本,渲染交给 HyperFrames。建议一并安装:

```bash
npx skills add heygen-com/hyperframes
```

---

## 如何使用

### 1. 起一个新视频(0-1 模式)

装好后,在你的 AI Agent 里直接说人话即可触发:

```
我想做一个 3 分钟的产品演示视频,发在 B 站
```

技能会自动激活(它的开场白是一个 ASCII logo + 自我介绍)。接下来它会带你走 5 个阶段 —— 你不需要知道这些阶段编号,它只会用大白话跟你聊:

1. **视频基本盘** —— 目的 / 受众 / 平台 / 时长 / 核心信息 / 调性
2. **素材盘点** —— 逐字稿 / 音频 / 视频 / 图形 / 数据 / 3D,逐项盘问
3. **表达手段** —— 场景类型 / 字幕呈现 / 动效语言 / 节奏基准 / 叙事节拍
4. **视觉主题** —— 选一个预设主题,或用你自己的自定义主题
5. **参考与反例** —— 用具体参考作品和"绝对不要"反例校准方向

走完,它产出 `video-spec.md` —— 一份带完整分镜表的脚本。

### 2. 改一个已有视频(迭代模式)

项目里已经有 `video-spec.md` 时,直接说:

```
把第 3 个镜头的节奏放慢一点,背景音乐换成更安静的
```

它会追问你想清楚,检测和现有脚本的冲突,然后更新 `video-spec.md`。

### 3. 渲染成视频

`video-spec.md` 定稿后,交给 HyperFrames:

```
/hyperframes
```

HyperFrames 会读脚本,把每个镜头渲染成真正的视频。

### 显式调用

除了说人话自动触发,也可以显式调用(Claude Code):

```
/video-spec-builder
```

---

## 视觉主题

视频长什么样,由"主题"决定。两条路:

- **预设主题** —— HyperFrames 自带 8 个预设(Swiss Pulse / Shadow Cut / Data Drift…),选名字即可。
- **自定义主题** —— 一个放在项目根目录的 `design.md`(HyperFrames 格式:YAML 头 + 设计规则章节)。

本仓库根目录的 **Spec Mono** 主题(纯黑白 · SpaceX × Grok 视觉语言)就是一个**完整的自定义主题样板**:

| 文件 | 作用 |
|---|---|
| `design.md` | 主题本体 —— HyperFrames 读这个文件 |
| `tokens.css` | 可复用 CSS(设计变量 + 装饰工具类) |
| `spec-mono-components.md` | 69 个组件在该主题下的逐个细规格 |

要做自己的自定义主题,照着 `design.md` 的格式写一份,放到你视频项目的根目录即可。

---

## 仓库结构

```
video-spec-builder/
├── SKILL.md                      技能主文件(入口)
├── README.md                     本文件
├── LICENSE
├── references/                   按需加载的参考文档
│   ├── workflow-0-1.md             0-1 模式 5 阶段流程
│   ├── workflow-iteration.md       迭代模式流程
│   ├── question-bank.md            追问问题库(按 Phase 组织)
│   ├── scene-breakdown.md          逐字稿 → 分镜的拆解方法论
│   ├── components-catalog.md       69 个标准组件目录
│   ├── pacing-rules.md             节奏 / 时长 / 转场规范
│   ├── spec-rules.md               video-spec 字段约束 + 自检清单
│   └── dialogue-style.md           对话风格范本
├── templates/
│   └── video-spec-template.md    video-spec.md 输出模板
├── examples/
│   └── video-spec-spacex.md      完整 video-spec 示例(SpaceX 发展史)
│
├── design.md                     Spec Mono 主题 —— 主题本体(HyperFrames 读这个)
├── tokens.css                    Spec Mono 主题 —— 可复用 CSS
└── spec-mono-components.md        Spec Mono 主题 —— 69 组件逐个细规格
```

---

## 工作流全景

```
你说"我想做个视频"
        │
        ▼
┌─────────────────────┐
│  video-spec-builder │  追问到镜头粒度 · 5 阶段
│  （本技能）          │
└─────────────────────┘
        │  产出
        ▼
   video-spec.md  +  design.md（主题）
        │
        ▼  /hyperframes
┌─────────────────────┐
│     HyperFrames     │  按脚本渲染成视频
└─────────────────────┘
        │
        ▼
     成品视频
```

---

## License

MIT
