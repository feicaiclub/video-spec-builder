<img width="2172" height="724" alt="ChatGPT Image May 16, 2026, 10_46_58 PM" src="https://github.com/user-attachments/assets/7820d93e-84b6-4e09-904c-9567c6595c57" />

[English](README.md) · **中文**

# video-spec-builder

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)](LICENSE) ![Agent Agnostic](https://img.shields.io/badge/Agent-Agnostic-blueviolet) [![skills.sh Compatible](https://img.shields.io/badge/skills.sh-Compatible-brightgreen)](https://skills.sh)

> 一个像视频编导的 skill。你说一句"我想做个视频",它就追着问你,帮你把想法理成一份能落地的分镜脚本。

我做这个 skill,是因为发现做视频最卡人的不是渲染,是前面那一步:想清楚。

你心里有个念头,想做个产品片、发条抖音、做个公司介绍。可念头是模糊的。真要落地,每个镜头几秒、画面上摆什么、先讲什么后讲什么,这些细节你未必想得全,也未必说得出来。

video-spec-builder 就是来陪你过这一关的。装好之后,你在 Codex 或者 Claude Code 里说一句"我想做个视频",它就接管对话,像编导听你讲 brief 那样一路追问:这视频给谁看?多长?最想让人记住哪句话?哪个镜头是重点?你答不上来的、压根没想到的地方,它会停下来提醒你、帮你补上。

来回聊下来,你那个模糊的念头会变成一份 `video-spec.md`:精确到秒、每个镜头都写明白的分镜脚本。这份脚本交给 HyperFrames,就能渲染成真正的视频。

它不替你拍片,也不替你想创意。它就做一件事:逼着你、也陪着你,把想法想到能落地为止。

## 它帮你解决什么

它解决的是"我有想法,但说不清楚"这个问题。几种典型情况它都管用:

- 你知道想要什么感觉,但说不出具体画面。它会把"高大上""有冲击力"这种形容词挡回去,问到你能描述出实际的画面和动作为止。
- 你有想法,但有些环节根本没想到。比如开头结尾想好了,中间怎么过渡没想;比如你没意识到这段可以加字幕、可以让画面跟着音乐节奏动。这些它会主动提。
- 你东西不少,但理不出头绪。逐字稿、卖点、素材一大堆,它帮你拆成一个个镜头,排出先后和节奏。

最后它把这些落成脚本。每个镜头是什么内容、用什么呈现、停几秒、怎么转到下一个,全写清楚。

它有两种用法。手上还没有脚本,它从头陪你聊一遍,产出 `video-spec.md`。已经有脚本、只想改某个地方,你直接说要改什么,它问清楚再动手,还会顺手查一下这改动会不会牵连别的镜头。

## 工作流程

整件事是两个 skill 接力。video-spec-builder 在上游,把你的想法变成脚本;HyperFrames 在下游,把脚本变成视频。

```
        你:"我想做个视频"
                │
                ▼
   ┌────────────────────────┐
   │   video-spec-builder   │   追问 + 拆镜头,陪你想清楚
   └────────────────────────┘
                │
                ▼
          video-spec.md           分镜脚本(精确到秒)
                │
                ▼   /hyperframes
   ┌────────────────────────┐
   │       HyperFrames      │   按脚本渲染
   └────────────────────────┘
                │
                ▼
            成品视频
```

所以用之前,这两个 skill 都得先装上。

## 安装

这个 skill 我主要在 **Codex** 里用,其次是 **Claude Code**,这两个是它最顺手的场景。

动手之前,先把两样东西装好:HyperFrames(下游负责渲染)和 video-spec-builder(这个 skill 本身)。都用 `skills` 这个命令行工具装,各一条命令:

```bash
npx skills add heygen-com/hyperframes
npx skills add feicaiclub/video-spec-builder
```

每条命令都一次装好,Codex、Claude Code、Cursor 这些环境都能调用,不用一个工具一个工具地装。

安装位置分两种。默认装到当前文件夹(项目级),只在你跑命令的那个项目里生效。如果你经常做视频,加 `-g` 装到全局,所有项目通用:

```bash
npx skills add feicaiclub/video-spec-builder -g
```

没装过 `skills` 工具也不用管,`npx` 会临时拉一份来跑,跑完不留东西。需要 Node 18 以上。

## 怎么用

### 从头做一个视频

装好后,在 Codex 或 Claude Code 里直接说人话:

```
我想做一个三分钟的产品演示视频,发在 B 站
```

它会接管对话,开始追问。你不用管它内部分几步,它就跟你正常聊天:先把基本盘问清,给谁看、在哪发、多长、核心讲什么。再盘你手头有什么素材。然后定表达方式和节奏,挑个视觉主题,最后拿参考片和反例帮你校准方向。

这个过程是真的来回问答,不是让你填表。你答得含糊,它会追;你漏了什么,它会补。聊完,它把 `video-spec.md` 写出来。

### 改一个已经有的视频

项目里已经有 `video-spec.md`,想改直接说:

```
第三个镜头节奏太快,放慢点;背景音乐换个安静的
```

它会先把你要的效果问清楚,看看这改动会不会影响别的镜头,再更新脚本。

### 渲染成视频

脚本定稿,交给 HyperFrames:

```
/hyperframes
```

> 在 Claude Code 里,除了说人话自动触发,也可以直接打 `/video-spec-builder` 调用。

## HyperFrames 能做什么、做不到什么

这一段我得专门讲清楚,因为它直接决定你的脚本写得值不值。

HyperFrames 是把 HTML 渲染成视频。这句话是它一切能力和限制的根。HTML、CSS、还有代码能画出来的东西,它都能变成视频画面;HTML 画不出来的,它也变不出来。

它**擅长**的是文字和排版相关的活:标题动效、字幕、逐词高亮、版面布局、转场、数据图表、UI 演示、几何动画。这些"用代码能画"的东西,它做得很利落。

它**做不到**的,你写脚本之前就得心里有数。脚本写得再漂亮,HyperFrames 渲不出来,也是白写:

- 它不会画插画。手绘风格的人物、有美术感的画面、卡通形象,这些它画不出来。让它写代码也画不出来,这不是代码能解决的事。代码能画的是图形和图表,不是画作。
- 它不会生成实拍画面。一段真实拍摄的镜头、一个人物的表演,它凭空变不出来。
- 它不会生成照片级的写实图像。
- 配音它能用 AI 生成一版应急,但 AI 配音有明显的机器味。真要质量,还是自己录、或者找人配。
- 背景音乐它不会替你作曲。

说到底,HyperFrames 是个**组装**工具,不是**创作**工具。它把你准备好的素材(视频片段、图片、配音、音乐)剪辑、合成、配上文字和动效,拼成一支完整的视频。它干的是组装这一步。

所以有个很重要的提醒:视频好不好看,真正取决于你喂给它的素材。素材到位,HyperFrames 能帮你组装得很漂亮;素材本身不行,HyperFrames 再强也救不回来。视频片段、图片、配音、配乐,值得你提前认真准备好。决定视频质量的是这些素材,不是 HyperFrames 本身。

## 视觉主题

视频长什么样(配色、字体、动效、转场风格),由"主题"决定。主题要么用 HyperFrames 自带的预设,要么自己写一套。

### HyperFrames 的 8 个预设

HyperFrames 内置了 8 套主题,报个名字就能用:

| 主题 | 气质 | 适合 |
|---|---|---|
| Swiss Pulse | 精确、克制、瑞士排版 | SaaS、数据、开发者工具、指标看板 |
| Velvet Standard | 高级、隽永 | 奢侈品、企业软件、主题演讲、投资路演 |
| Deconstructed | 工业、粗粝 | 科技发布、安全产品、带点朋克劲的内容 |
| Maximalist Type | 喧闹、动感 | 大型发布、里程碑公告、高能 hype 片 |
| Data Drift | 未来感、沉浸 | AI 产品、ML 平台、前沿科技 |
| Soft Signal | 亲密、温暖 | 健康品牌、个人故事、生活方式产品 |
| Folk Frequency | 文化、鲜亮 | 消费类 app、美食、社区产品 |
| Shadow Cut | 暗黑、电影感 | 安全产品、戏剧性揭示、严肃叙事 |

选定之后,在 `video-spec.md` 里写上主题名就行。

### 自己写一套

预设不够味,可以自己定。HyperFrames 对自定义主题有几条硬要求,不复杂:

- 主题就是一个 `design.md` 文件,放在你视频项目的根目录。HyperFrames 渲染时会自动找到并读取它。
- 文件格式是固定的。开头一段 YAML,写颜色、字体、圆角、间距、动效这些设计变量。下面用几个固定章节把设计规则讲清楚,章节是定死的:Overview、Colors、Typography、Elevation、Components、Do's and Don'ts。
- 如果主题用到了 HyperFrames 没内置的字体,得自己把字体的 `.woff2` 文件放进项目的 `fonts/` 文件夹。

把写好的 `design.md` 丢进视频项目根目录,主题就生效了。

### 我给你配好的一套:Spec Mono

从头写 `design.md` 挺花工夫,所以我提前做了一套放进这个仓库,叫 **Spec Mono**:纯黑白配色,SpaceX × Grok 那种几何、克制、工程感的视觉语言。已经配好了,你可以直接拿去用。

<!-- 占位图:把 Spec Mono 的预览图放到 spec-mono/preview.png,再把下面这行的注释去掉 -->
<!-- ![Spec Mono 主题预览](spec-mono/preview.png) -->

下载浏览完整主题设计 [视频组件库 v2 · 硅谷暗色科技风.pdf](https://github.com/user-attachments/files/27866485/v2.pdf)
<img width="1020" height="1440" alt="视频组件库 v2 · 硅谷暗色科技风" src="https://github.com/user-attachments/assets/55013ef0-946b-46da-812c-f6e9e5f47ed9" />

`spec-mono/` 文件夹里有三个文件:

| 文件 | 是什么 |
|---|---|
| `design.md` | 主题本体,HyperFrames 读的就是它 |
| `tokens.css` | 一份现成的 CSS,颜色字体间距这些变量,外加一些装饰元素的样式 |
| `spec-mono-components.md` | 69 种组件在这套主题下的逐个细节规格 |

用法:把 `spec-mono/design.md` 复制到你视频项目的根目录,`tokens.css` 一起带上。它本来就是照 HyperFrames 的格式写的,放进去就能渲。

> **说明:** 这里的 `design.md` tokens 和 `spec-mono-components.md` 只是精简提炼后的内容。完整的主题设计代码需要从 Claude Design 下载生成。具体的实现代码请查看 `Full Code/` 文件夹。

## 仓库结构

```
video-spec-builder/
├── SKILL.md                  技能主文件,AI 从这里读起
├── README.md                 English
├── README.zh.md              中文
├── LICENSE
├── references/               追问、拆分镜、节奏规范等参考文档,按需加载
│   ├── workflow-0-1.md
│   ├── workflow-iteration.md
│   ├── question-bank.md
│   ├── scene-breakdown.md
│   ├── components-catalog.md
│   ├── pacing-rules.md
│   ├── spec-rules.md
│   └── dialogue-style.md
├── templates/
│   └── video-spec-template.md    video-spec.md 的输出模板
├── examples/
│   └── video-spec-spacex.md      一份完整的 video-spec 示例
└── spec-mono/                    预置的自定义主题 Spec Mono
    ├── design.md
    ├── tokens.css
    └── spec-mono-components.md
```

## License

MIT
