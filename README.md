# video-spec-builder

> 把"我想做个视频"这种模糊念头,逼成一份能直接开拍的分镜脚本。

做视频卡住的地方,往往不是不会渲染,是根本没想清楚。你脑子里只有"想要个有质感的产品片",但每个镜头几秒、画面上摆什么、节奏怎么走,问到这些就答不上来了。

video-spec-builder 是一个 AI Agent 技能(Skill)。装好之后,你跟你的 AI 说一句"我想做个视频",它就开始像导演听 brief 那样追问你。它不接受形容词:你说"高大上",它问你高大上到底是什么画面;你说"大概十几秒",它让你把秒数定死。一个镜头一个镜头抠,直到整支片子在纸面上成形。

它还会顺手提醒你能做什么。AI 配音、字幕逐词跟读、3D 旋转、卡着鼓点跳的动效、花式转场,这些渲染层支持的能力大部分人压根不知道,它会在合适的时候告诉你。

聊完,你会拿到一份 `video-spec.md`:精确到秒、每个镜头都拆好的分镜脚本。把它交给 [HyperFrames](https://github.com/heygen-com/hyperframes),就能渲染成真正的视频。

## 它能帮上什么忙

它会做这几件事:

- 把模糊需求问到能落地。"科技感""高级""有冲击力"这类形容词它不收,会逼你翻译成具体的画面和动作。
- 告诉你渲染层能做什么。你未必知道可以加 AI 配音、让字幕逐词亮起、让画面元素跟着音乐节拍跳。
- 盘素材。逐字稿、音频、视频、图片、数据、3D 模型,一项项过,缺什么、能不能现生成,当场说清楚。
- 把卖点或逐字稿拆成分镜,落到单个镜头,每个镜头对应一个标准组件。
- 定节奏。按视频类型和平台,把节奏算到"平均每个镜头几秒",每个转场怎么切也一并定下来。
- 你后面想换镜头、改节奏,它会指出新改动和已定脚本打架的地方。

用法分两种。项目里还没有脚本时,它从零跟你聊,走完整个流程产出 `video-spec.md`。已经有脚本、你只想改某处时,它把改动问清楚再动手,顺带检查会不会牵连别的镜头。

## 安装

用 `skills` 这个命令行工具装,一条命令搞定:

```bash
npx skills add feicaiclub/video-spec-builder
```

这条命令一次装好,Claude Code、Cursor、Codex 都能调用它,不用每个工具再单独装。

安装位置分两种。默认装到**当前文件夹**(项目级):你在哪个视频项目里跑命令,它就只在那个项目生效。如果你经常做视频,想省去每次重装,加 `-g` 装到全局,所有项目通用:

```bash
npx skills add feicaiclub/video-spec-builder -g
```

没装过 `skills` 工具也不用管,`npx` 会临时拉一份来跑,跑完不留东西。安装需要 Node 18 以上。

视频的渲染要靠 HyperFrames,建议一起装上:

```bash
npx skills add heygen-com/hyperframes
```

## 怎么用

### 从零做一个视频

装好后,在你的 AI 里直接说人话:

```
我想做一个三分钟的产品演示视频,发在 B 站
```

技能会自己接管,开始追问。你不用关心它内部分几步,它会用大白话跟你聊。大致顺序是:先把视频的基本盘问清——给谁看、在哪发、多长、核心要讲什么。然后盘手头素材,定表达手段和节奏。挑个视觉主题。最后拿参考片和反例校准方向。聊完,它把 `video-spec.md` 写出来。

### 改一个已经有的视频

项目里已经有 `video-spec.md`,想改直接说:

```
第三个镜头节奏太快,放慢点;背景音乐换个安静的
```

它会先把你要的效果问清楚,看看这个改动会不会影响别的镜头,然后更新脚本。

### 渲染成视频

脚本定稿,交给 HyperFrames:

```
/hyperframes
```

video-spec-builder 出脚本,HyperFrames 把脚本变成视频,两个技能接力,各管一段。

> 除了说人话自动触发,在 Claude Code 里也可以直接打 `/video-spec-builder` 显式调用。

## 仓库结构

```
video-spec-builder/
├── SKILL.md                  技能主文件,AI 从这里读起
├── README.md
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

## 视觉主题

视频长什么样,配色、字体、动效、转场风格,这些由"主题"决定。主题要么用 HyperFrames 自带的预设,要么自己写一套。

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

### 用自定义主题

预设不够味,可以自己定一套。HyperFrames 对自定义主题有几条硬要求,不复杂:

- 主题就是一个 `design.md` 文件,放在你视频项目的根目录。HyperFrames 渲染时会自动找到并读取它。
- 文件格式是固定的。开头一段 YAML,写颜色、字体、圆角、间距、动效这些设计变量。下面用几个固定章节把设计规则讲清楚,章节是定死的:Overview、Colors、Typography、Elevation、Components、Do's and Don'ts。
- 如果主题用到了 HyperFrames 没内置的字体,得自己把字体的 `.woff2` 文件放进项目的 `fonts/` 文件夹。

说白了:把一份写好的 `design.md` 丢进视频项目根目录,主题就生效了。

### 预置主题 Spec Mono

不想从头写 `design.md` 也行。这个仓库的 `spec-mono/` 文件夹里,放着一套已经配好、可以直接用的自定义主题,叫 **Spec Mono**:纯黑白配色,SpaceX × Grok 那种几何、克制、工程感的视觉语言。

<!-- 占位图:把 Spec Mono 的预览图放到 spec-mono/preview.png,再把下面这行的注释去掉 -->
<!-- ![Spec Mono 主题预览](spec-mono/preview.png) -->

*（此处放 Spec Mono 主题效果预览图）*

`spec-mono/` 里有三个文件:

| 文件 | 是什么 |
|---|---|
| `design.md` | 主题本体,HyperFrames 读的就是它 |
| `tokens.css` | 一份现成的 CSS,颜色字体间距这些变量,外加一些装饰元素的样式 |
| `spec-mono-components.md` | 69 种组件在这套主题下的逐个细节规格 |

把 `spec-mono/design.md` 复制到你视频项目的根目录(`tokens.css` 一起带上),就能用。它本来就是照 HyperFrames 的格式写的。

## License

MIT
