请你按照以下 script，帮我生成一条视频。以下是这条视频的 script 和详细讲解。


## 1. 视频基本盘

- 标题：把火箭做成出租车 · SpaceX 22 年
- 目的：科普 · 让航天迷看完会心一笑，转发给同事
- 受众：B 站航天迷（看 Kurzgesagt / Veritasium / Johnny Harris / Wendover 那群人，术语都懂）
- 观众熟悉度：Falcon / Starship / 入轨 / 回收 / 复用 / Mechazilla 全懂。专业代号（LC-39A / B1021 / CRS-8 / ORBCOMM-2）画面标注即可，不展开解释
- 平台与时长：B 站 · 180 秒
- 画面规格：16:9 · 30fps · 需要无声友好（B 站观众常静音刷，逐词字幕 + 画面标注必须能让人不开声也跟得上）
- 输出：mp4 · high 画质
- 核心信息：把火箭做成出租车（8 字）
- 信息密度：教程型，约 20 个镜头，节奏刻意不均匀——hook 段每镜约 5s 抓人，叙事段 8-12s，高潮段切到 2-7s 级
- 语气基调：Kurzgesagt / Johnny Harris 风 · 纪录片旁白感 · 理性冷静 + 一点克制幽默 · 反向：不要热血 / 不要鸡汤 / 不要"未来可期"


## 2. 叙事结构

- 叙事节拍：8 个叙事拍，每拍再切成 2-4 个镜头级 Scene（共 20 镜）

      [hook]  0–8%    (0–15s)     冷开场甩出 Mechazilla 接火箭，再回拨 22 年，抛出"出租车"命题
      [基础]  8–17%   (15–30s)    2008 Falcon 1——出租车下线
      [回收]  17–31%  (30–55s)    2015 首次回收——车开回站台
      [复用]  31–42%  (55–75s)    2017 首次复用——同一辆车跑第二单
      [经济]  42–56%  (75–100s)   解释复用如何改写航天经济学
      [高潮]  56–72%  (100–130s)  2024 Mechazilla——车自己开回站台被夹住
      [范式]  72–89%  (130–160s)  解释"不带落地架"背后的范式转换
      [收尾]  89–100% (160–180s)  22 年时间轴 + takeaway 大字

- 情绪曲线：悬念（冷开场）→ 反差（2008 破产边缘）→ 推进（回收 + 复用）→ 顿悟（经济学改写）→ 屏息再震撼（悬停 → 合拢）→ 共鸣信念（收尾）
- 音画关系：BGM 是氛围性（Minimal Tech Ambient，做底色不推情节，情节由旁白和真实视频推）。全片有一处刻意的音画错位——高潮"悬停"段（117s 起）旁白几乎抽空，只剩 BGM bump up + 悬停计时器滴答，让画面自己说话；筷子臂合拢瞬间（约 127s）一记 thump + 0.3s 全静音
- 同质化反例：
  - 视觉：不要黑红"科技标题党"配色 / 不要倒计时条 / 不要 vsauce 式快剪问句卡 / 标注层不要做成游戏 HUD
  - 叙事：不要"马斯克的传奇"那种热血叙事 / 不要"未来可期"鸡汤收尾 / 不要把 Elon 神化
  - 节奏：教程型也别破 1.5s 下限 / 不要全程同速 / 不要节奏平均用力


## 3. 表达手段

- 场景类型组合：大字海报型（hook + 收尾）+ A-roll 字幕高亮叠实拍（主叙事）+ 数据驱动型（Scene 12）+ 抽象兜底型（打车类比 + 范式对照）
- 画面标注层（本片核心信息增层）：在真实 footage 上叠加 pop-in 标注——数值、部件标签、引线指向画面具体位置（Johnny Harris / Veritasium 式）。讲到火箭尺寸、速度、高度、部件、时间码时，对应标注从画面里"长"出来、引线指向实物。用 `aroll.keyword-sticker` 承载，每次同屏 ≤ 3 个、停留 ≤ 3s 即淡出，不堆成 HUD
- 字幕呈现：卡拉 OK 逐词高亮（航天迷在 B 站静音刷的多，字幕必须能让人不开声也跟得上）
- 关键词强调：marker sweep 横扫高亮（Kurzgesagt 那种关键词被横扫一道 accent 色）。不用 scribble / burst / circle——太抢戏
- 文字动效：打字机仅用在 Scene 09（B1021 复用时间线打出来时），其他场景不用；不要动态字重变化
- 3D：不需要——所有节点都用真实视频素材，真实感无敌，3D 在此画蛇添足
- 转场风格：约 80% 硬切 + 15% crossfade（叙事拍之间）+ 5% fade-out（仅末镜）
- 节奏基准：平均每镜约 9s，但刻意不均匀——hook 段 5s/镜抓人，叙事段 8-12s，高潮"返回→悬停→合拢→静止"段切到 2-7s，悬停段刻意留白。旁白约 560 字（中文），高潮段刻意抽空旁白让画面自己说话


## 4. 视觉规范

- 视觉主题：Shadow Cut（暗色锐利 · 黑色电影感，最对味"冷静叙述历史"）
- accent 色：#FF6B3D（橙色，呼应 SpaceX 火焰红，比 Shadow Cut 默认血红更暖、更"出租车"）
- 装饰密度：medium——hairline 边线 + corner cross 四角 + tick row 底栏。标注层的引线也走 hairline + accent 色，和主题装饰同一套视觉语言。不要 dot grid（太忙）
- 组件取舍：只用 aroll / broll-hero / broll-charts / broll-abstract；不用 lottie、three-js（不需要 3D，不需要循环动效）


## 5. 素材清单

### 已有素材

| 类型 | 名称 | 路径 / 说明 |
|---|---|---|
| 旁白脚本 | script.txt | 见本 spec § 6 分镜表里每个 Scene 的"旁白文案"字段，合计约 560 字 |
| 标注数据 | inline | 所有画面标注的数值（火箭尺寸 / 速度 / 高度 / 时间码 / 编号）已 inline 写进各 Scene 画面描述 |

### 待生成素材

| 类型 | 生成方式 | 输出 |
|---|---|---|
| TTS 旁白 | 用渲染端本地 TTS，男声 / 略沉稳 / 偏纪录片旁白感 / 1.0x 速率（具体 voice ID 查渲染端文档） | audio/narration.wav |
| 字幕 transcript | 用 transcribe 从 narration.wav 生成逐词时间戳 | transcript.json |

### 待搜索素材

- 源平台：SpaceX 官方 YouTube / NASA / Pexels
  关键词："SpaceX Starship Flight 5 Mechazilla chopstick catch October 2024"
  用途：Scene 01 冷开场 + Scene 13-16 高潮段（本片最重要的视觉，反复用）
  验收标准：≥ 1080p · 必须包含"升空 + 返回 + 悬停 + 滑移 + 筷子臂合拢"完整序列 · 至少 20s 可剪 · 这一段是全片最核心素材

- 源平台：NASA Image and Video Library（images.nasa.gov）
  关键词："SpaceX Falcon 1 launch September 2008 Kwajalein"
  用途：Scene 04-05 背景视频（Falcon 1 第四发升空 + 入轨）
  验收标准：≥ 1080p · 至少 8s 可用片段 · 无水印 · 公共领域

- 源平台：SpaceX 官方 Flickr（flickr.com/photos/spacex）
  关键词："Falcon 9 Landing Zone 1 ORBCOMM-2 December 2015"
  用途：Scene 06-07 主视频（Falcon 9 升空 + 首次陆地着陆原片）
  验收标准：≥ 1080p · 着陆瞬间 + 升空 + 卫星释放各取一段 · CC0

- 源平台：SpaceX 官方 YouTube / Pixabay
  关键词："Falcon 9 SES-10 launch March 30 2017 reused booster"
  用途：Scene 09-10 视频（B1021 二次升空）
  验收标准：≥ 1080p · 至少 10s · 包含 booster 重新点火画面

- 源平台：Pexels / Pixabay / SpaceX Flickr
  关键词："Falcon 9 launch montage rocket landing"
  用途：Scene 02 三火箭对比 + Scene 11 复用经济段背景（多个回收镜头快剪）
  验收标准：≥ 1080p · 多段（≥4）可剪辑 · CC0

- 源平台：Pixabay Music
  关键词：已选定 Minimal Tech Ambient (Main)（https://pixabay.com/music/upbeat-minimal-tech-ambient-main-9899/）
  用途：全片 BGM，氛围性铺底
  验收标准：≥ 180s 或可循环 · CC0 · 已选定该曲

- 源平台：Freesound / Pixabay SFX
  关键词："soft UI blip pop" / "data tick" / "low thump impact" / "deep boom rise"
  用途：blip 标注弹出音（全片复用）+ Scene 12 数据 pop + Scene 16 筷子合拢 thump + Scene 13 高潮段 boom
  验收标准：< 1s/段（boom 可 2s）· 高频清晰 · CC0


## 6. 分镜表

### Scene 01 · 0.0s–5.0s · hook · 冷开场

- 类型：B-roll · 真实视频主导
- 组件：真实视频 full-screen + aroll.keyword-sticker（标注层）
- 旁白文案："2024 年 10 月。一根 122 米高的塔，用两只机械臂，在半空中，接住了一枚 70 米长的火箭。"
- 屏显文案：无字幕条。画面标注：引线从塔身拉出 "发射塔 · 122 m"，引线从助推器拉出 "Super Heavy · 70 m"，右上角时间码 "2024.10"
- 期待内容：不解释、不铺垫，直接把全片最震撼的画面（Mechazilla 接住助推器）甩到观众脸上
- 期待效果：航天迷 0.5 秒内认出 Mechazilla，"卧槽这视频要正经讲" → 被钉在屏幕前
- 画面描述：黑场 0.5s → 直接切到 Starship IFT-5 筷子臂接住 Super Heavy 的瞬间（实拍，慢速 0.8x）。Shadow Cut 暗调压一层。两条 hairline 引线从画面里的塔和助推器拉出标注，accent 色。镜头不动，让画面自己说话
- 动效要点：黑场 HARD CUT 入实拍 + 两条引线 DRAWS out（先塔后助推器，错开 0.3s）+ 标注数值 POP IN
- 音效描述：0.5s 处实拍进入配一记低频 boom（约 0.5s · volume 0.5）+ 每条标注弹出配 blip（约 1.2s / 1.6s · volume 0.25）
- 转场进入：开头（黑场 0.5s）
- 转场离开：硬切 → Scene 02
- 素材依赖：narration.wav 0.0–5.0s · Starship IFT-5 接住片段 · BGM 从 0.0s fade in 到 0.12（hook 段压低）· boom.wav · blip.wav

### Scene 02 · 5.0s–10.0s · hook · 回拨 22 年

- 类型：B-roll · 真实视频快剪 + 标注
- 组件：真实视频快剪 + aroll.keyword-sticker（标注层）
- 旁白文案："二十二年前，造出这枚火箭的公司，连让一枚火箭活着飞上天，都做不到。"
- 屏显文案：三枚火箭依次贴标注 "Falcon 1 · 2008 · 21 m" → "Falcon 9 · 2015 · 70 m" → "Starship · 2024 · 121 m"
- 期待内容：用三枚火箭的尺寸阶梯，0.5 秒建立"22 年走了多远"的体量感
- 期待效果：航天迷看到三箭并排 + 尺寸标注，直观感到代际跨度 → 想知道中间这 22 年发生了什么
- 画面描述：三段实拍快剪（Falcon 1 / Falcon 9 / Starship 升空各约 1.5s），或三箭等比并排剪影。每切到一枚，hairline 引线拉出年份 + 高度标注。Shadow Cut 暗背景
- 动效要点：三段视频 HARD CUT 快切 + 每枚火箭标注 POP IN + 引线 DRAWS
- 音效描述：每枚火箭标注弹出配 blip（约 5.6s / 7.1s / 8.6s · volume 0.25）
- 转场进入：硬切
- 转场离开：硬切 → Scene 03
- 素材依赖：narration.wav 5.0–10.0s · 三火箭升空素材 · BGM 0.12 · blip.wav

### Scene 03 · 10.0s–15.0s · hook · 抛出命题

- 类型：B-roll · 大字海报
- 组件：broll-hero.big-type
- 旁白文案："这 22 年里，SpaceX 其实只做了一件事——把火箭，做成出租车。"
- 屏显文案：hero 大字 "把火箭做成出租车"，"出租车"三字 accent 色
- 期待内容：把全片的核心隐喻立成标题，作为后面 6 个节点的标尺
- 期待效果：航天迷看到"出租车"这个反直觉的比喻会愣一下、好奇 → 这个框架怎么自圆其说
- 画面描述：Shadow Cut 暗背景 + hero 大字居中 + 左上角 chapter 编号 "01 / 08" + 底栏 tick row + 四角 corner cross
- 动效要点：大字 SLAMS 入场 + "出租车"一词 PULSES 1 次 + 底栏 tick row WHIPS 横扫
- 音效描述：大字砸入配一记轻 thump（约 10.2s · volume 0.4）
- 转场进入：硬切
- 转场离开：硬切 → Scene 04
- 素材依赖：narration.wav 10.0–15.0s · BGM 从 0.12 抬到 0.18（叙事段起）

### Scene 04 · 15.0s–23.0s · 基础 · Falcon 1 第四发

- 类型：B-roll + A-roll 字幕叠加 + 标注
- 组件：aroll.subtitle-highlight（主线 + 实拍背景）+ aroll.keyword-sticker（标注层）
- 旁白文案："2008 年 9 月 28 日，Falcon 1 第四次试飞。前三次，全炸了。公司账上的钱，也烧光了。"
- 屏显文案：卡拉 OK 逐词高亮全部旁白；画面标注：左上 timestamp "2008.09.28 · Kwajalein"，画面中段弹出 "Flight 4" 贴在火箭旁，"前 3 次 ✗ ✗ ✗" 三个红叉戳记
- 期待内容：建立 2008 = SpaceX 的"出租车下线那天"——以及它差点没活到那天（前三次失败 + 烧光钱）
- 期待效果：航天迷听到"前三次全炸了 / 钱烧光了"会一震——数据他们都知道，但被串进"出租车下线"隐喻还是新鲜
- 画面描述：Falcon 1 第四发真实升空视频（NASA / SpaceX 官方）50% 透明度叠在暗背景 + 卡拉 OK 字幕在下方 14% 区逐词点亮 + "9 分 31 秒""烧光了"两个关键词 marker sweep 高亮。"前 3 次 ✗ ✗ ✗" 戳记在"前三次全炸了"那句旁白时三连弹出
- 动效要点：字幕 token CASCADE + 关键词 marker sweep + "Flight 4" 标注 POP IN + 三个红叉 STAMPS 逐个砸入
- 音效描述：三个红叉砸入各配一记闷响（约 19.0s / 19.4s / 19.8s · volume 0.3）+ 标注弹出 blip（约 16.5s · volume 0.25）
- 转场进入：硬切
- 转场离开：crossfade（短）→ Scene 05
- 素材依赖：narration.wav 15.0–23.0s · BGM 0.18 · Falcon 1 第四发视频（NASA / 待搜）· blip.wav · 闷响 SFX

### Scene 05 · 23.0s–30.0s · 基础 · 入轨那一刻

- 类型：B-roll + 标注
- 组件：真实视频（入轨 / 地球弧线）+ aroll.keyword-sticker（标注层）
- 旁白文案："9 分 31 秒后，它进了轨道。SpaceX 成为人类第一家、把液体火箭送上天的私营公司。但这，只是出租车下线的那一天。"
- 屏显文案：画面中央偏上弹出大号计时标注 "T+09:31 · 入轨"；下方小字标注 "首家 私营液体火箭入轨"
- 期待内容：用一个具体时间码（9 分 31 秒）锚定"入轨成功"这个历史时刻
- 期待效果：航天迷看到 "T+09:31" 计时标注定格，会有"成了"的释然感 → 再被"只是下线那一天"轻轻一带，期待往下走
- 画面描述：Falcon 1 二级入轨视角 / 地球弧线实拍 + 暗调。"T+09:31 · 入轨" 计时标注在"9 分 31 秒"那句旁白时 COUNTS UP 滚到 09:31 定格、accent 色。"首家"标注随后淡入
- 动效要点：计时标注数字 COUNTS UP 翻滚到 09:31 + 定格 PULSES 1 次 + "首家"标注 FADES in
- 音效描述：计时滚动时一串细密 tick，定格瞬间一记 blip 收束（约 25.5s · volume 0.3）
- 转场进入：crossfade（短）
- 转场离开：硬切 → Scene 06
- 素材依赖：narration.wav 23.0–30.0s · BGM 0.18 · Falcon 1 入轨 / 地球素材 · tick.wav · blip.wav

### Scene 06 · 30.0s–40.0s · 回收 · 七年与 2015 升空

- 类型：B-roll + A-roll 字幕叠加 + 标注
- 组件：aroll.subtitle-highlight（主线 + 实拍背景）+ aroll.keyword-sticker（标注层）
- 旁白文案："接下来七年，SpaceX 在做一件所有人都觉得不可能的事——让一级火箭，飞完自己回家。2015 年 12 月 21 日，Falcon 9 把 11 颗 Orbcomm 卫星送上轨道。"
- 屏显文案：卡拉 OK 字幕；画面标注：左上 timestamp "2015.12.21"，载荷标注 "11 × ORBCOMM" 贴在 Falcon 9 整流罩位置
- 期待内容：交代 2015 的回收任务背景——具体日期 + 载荷，建立"这次发射要回家"的预期
- 期待效果：航天迷看到 "11 × ORBCOMM" 标注精确贴在整流罩，感到"制作认真" → 进入回收事件
- 画面描述：Falcon 9 ORBCOMM-2 升空实拍 50% 透明叠暗背景 + 卡拉 OK 字幕 + "七年""不可能"关键词 marker sweep。"11 × ORBCOMM" 标注用 hairline 引线指向整流罩
- 动效要点：字幕 CASCADE + 关键词 marker sweep + 载荷标注 POP IN + 引线 DRAWS
- 音效描述：标注弹出 blip（约 36.5s · volume 0.25）
- 转场进入：硬切
- 转场离开：硬切 → Scene 07
- 素材依赖：narration.wav 30.0–40.0s · BGM 0.18 · Falcon 9 ORBCOMM-2 升空素材（SpaceX Flickr / 待搜）· blip.wav

### Scene 07 · 40.0s–48.0s · 回收 · 落回 Landing Zone 1

- 类型：B-roll · 真实视频主导 + 标注
- 组件：真实视频（LZ-1 着陆）+ aroll.keyword-sticker（标注层）
- 旁白文案："然后，一级火箭转过身，稳稳落回了 Landing Zone 1。"
- 屏显文案：画面标注：下降速度读数随画面递减 "速度 ↓ 320 → 0 km/h"，引线指向地面着陆点的 "Landing Zone 1" 标签，触地瞬间 "首次 陆地回收" 戳记
- 期待内容：把"火箭自己飞回来落地"这个反常识画面，配速度读数让观众感到它真的在受控减速
- 期待效果：航天迷看着速度读数一路掉到 0、火箭稳稳坐地，会"哦——原来如此"，反常识被实证
- 画面描述：Falcon 9 一级返场、姿态调整、点火、坐地于 Landing Zone 1 的真实视频（SpaceX Flickr），近全屏。下降速度读数标注在画面一侧随实拍同步递减；"Landing Zone 1" 标签用引线指向地面着陆台；触地瞬间画面轻微一震 + "首次 陆地回收" 戳记砸入
- 动效要点：速度读数 COUNTS DOWN 同步实拍 + "Landing Zone 1" 引线 DRAWS + 触地瞬间画面 SHAKES 一下 + "首次陆地回收"戳记 STAMPS in
- 音效描述：速度读数滚动时细 tick + 触地瞬间一记 thump（约 46.5s · volume 0.5）+ 戳记 blip
- 转场进入：硬切
- 转场离开：crossfade（短）→ Scene 08
- 素材依赖：narration.wav 40.0–48.0s · BGM 0.18 · Falcon 9 LZ-1 着陆视频（SpaceX Flickr / NASA / 待搜）· tick.wav · thump.wav · blip.wav

### Scene 08 · 48.0s–55.0s · 回收 · Musk 引用

- 类型：B-roll · 引用块
- 组件：broll-hero.pull-quote
- 旁白文案："Musk 当场喊了出来——从来没有人，把一枚轨道级火箭，完整地带回来过。"
- 屏显文案：pull-quote 引用块 "No one has ever brought an orbital class booster back intact." —— Elon Musk, 2015
- 期待内容：用 Musk 当时的英文原话佐证这一刻的历史分量
- 期待效果：航天迷大多见过这句原话，引用反而拉近距离、确认"对，这就是当时的反应"
- 画面描述：暗背景 + serif italic 引用大字（Shadow Cut 主题字体）+ 左侧大装饰引号 + byline "—— Elon Musk, 2015"。画面安静，让文字独自承担
- 动效要点：pull-quote 整体 FADES in + 引号装饰 SLIDES in 左侧 + Musk 名字 TYPES on
- 音效描述：无（让引文的视觉冲击单独承担）
- 转场进入：crossfade（短）
- 转场离开：硬切 → Scene 09
- 素材依赖：narration.wav 48.0–55.0s · BGM 0.18

### Scene 09 · 55.0s–67.0s · 复用 · B1021 翻新再飞

- 类型：B-roll + A-roll 字幕叠加 + 打字机 + 标注
- 组件：aroll.subtitle-highlight（主线 + 实拍背景）+ aroll.keyword-sticker（标注层）
- 旁白文案："但回得来，只是上半场。真正的大事，发生在 2017 年 3 月 30 日。助推器 B1021——2016 年它执行过 CRS-8——这一次，它被翻新、加注、重新点火，把 SES-10 送进了轨道。"
- 屏显文案：卡拉 OK 字幕；约 61s 处打字机打出复用时间线 "B1021 · 2016 CRS-8 ──→ 2017 SES-10"；"B1021" 标注用引线贴在画面里的助推器箭体
- 期待内容：讲清"同一枚实体火箭跑了两单"——B1021 编号 + 两次任务的时间线
- 期待效果：航天迷听到 B1021 / CRS-8 这种内部编号会心一笑——行家级细节被这样调用，觉得制作认真
- 画面描述：Falcon 9 SES-10 升空视频（B1021 复飞）做背景 + 卡拉 OK 字幕。"B1021" 标注 hairline 引线指向箭体下段。约 61s 处画面右下区打字机逐字打出 "B1021 · 2016 CRS-8 ──→ 2017 SES-10"，etch 字号
- 动效要点：字幕 CASCADE + "B1021" 标注 POP IN + 引线 DRAWS + 时间线 TYPES on（打字机）+ "翻新""再次点火"关键词 marker sweep
- 音效描述：打字机逐字配细密 tick（约 61.0–63.0s · volume 0.3）+ "B1021" 标注 blip
- 转场进入：硬切
- 转场离开：硬切 → Scene 10
- 素材依赖：narration.wav 55.0–67.0s · BGM 0.18 · Falcon 9 SES-10 视频（SpaceX YouTube / 待搜）· tick.wav · blip.wav

### Scene 10 · 67.0s–75.0s · 复用 · 同一枚火箭（强调停顿）

- 类型：B-roll · 大字强调
- 组件：broll-hero.big-type
- 旁白文案："同一枚火箭。跑了第二单。"
- 屏显文案：hero 大字分两次落 "同一枚火箭" → "第 2 次飞行"，"第 2 次"用 accent 色
- 期待内容：把"复用"这个全片转折点单独拎出来，用一个强调镜头钉死
- 期待效果：旁白极短 + 画面留出呼吸，航天迷会停半拍消化"复用真正意味着什么" → 节奏上的一次故意减速
- 画面描述：Shadow Cut 暗背景 + hero 大字。先落"同一枚火箭"，旁白停顿后"第 2 次飞行"砸入、accent 强调。背景极简，这是一个刻意的强调停顿镜头
- 动效要点："同一枚火箭" SLIDES in + 停顿 + "第 2 次飞行" SLAMS in + PULSES 1 次
- 音效描述："第 2 次飞行"砸入配一记 thump（约 71.5s · volume 0.45）
- 转场进入：硬切
- 转场离开：crossfade（短）→ Scene 11
- 素材依赖：narration.wav 67.0–75.0s · BGM 0.18

### Scene 11 · 75.0s–88.0s · 经济 · 一次性火箭与打车类比

- 类型：B-roll · 抽象类比
- 组件：broll-abstract.analogy
- 旁白文案："这一发，改写了航天经济学。过去六十年，每一枚火箭都是一次性的。打个比方：你打了辆车，司机把你送到，然后，把整辆车开进河里、炸掉。"
- 屏显文案：类比图示——左侧"火箭"图标 + 右侧"出租车"图标用等号连起；"开进河里炸掉"时出租车图标坠入水线、爆开
- 期待内容：用"打车开进河里炸掉"的荒诞类比，让观众瞬间理解"一次性火箭有多浪费"
- 期待效果：航天迷会笑——这个类比太形象了；笑完立刻 get 到复用的经济意义
- 画面描述：Shadow Cut 暗背景 + analogy 双栏：左"传统火箭 = 一次性"、右"打车 = 一次性"。讲到"开进河里炸掉"，右侧出租车图标沿弧线坠落、撞水线、accent 色爆开
- 动效要点：双栏 SLIDES in + 等号 FADES in + 出租车图标 ARCS down + 撞水 BURSTS（accent 色碎裂）
- 音效描述：出租车坠落配一段下滑音 + 撞水/爆开配一记闷响 pop（约 85.5s · volume 0.45）
- 转场进入：crossfade（短）
- 转场离开：硬切 → Scene 12
- 素材依赖：narration.wav 75.0–88.0s · BGM 0.18

### Scene 12 · 88.0s–100.0s · 经济 · 数据揭示

- 类型：B-roll · 数据驱动
- 组件：broll-charts.bar-chart
- 旁白文案："复用之后，Falcon 9 的发射成本，砍掉了一大半。今天的 SpaceX，一年发射一百多次，占了全球商业发射的大半。"
- 屏显文案：bar-chart——左组对比柱"传统火箭 · 一次性"vs"Falcon 9 · 复用"成本（后者矮一半）；右组柱"SpaceX 年度发射数 2010 → 2024"，从 2 涨到 100+；右下角小字数据来源 "SpaceX official launch records · 2010–2024"
- 期待内容：用真实数据柱状图把"复用 = 经济学颠覆"实证落地
- 期待效果：航天迷看到成本柱砍半 + 发射数飙到 100+，产生"这数字真的疯了"的震撼
- 画面描述：Shadow Cut 暗背景 + bar-chart。左组成本对比柱（复用柱矮一半、accent 柱顶），右组年度发射数柱递增。"100+" 这个终点数字最大、accent 强调
- 动效要点：bars GROW UP 入场 + 数字 COUNTS UP 滚动 + "100+" PULSES 1 次
- 音效描述：每根柱跳出配细 tick + "100+" 定格配一记 pop（约 96.5s · volume 0.5）
- 转场进入：硬切
- 转场离开：硬切 → Scene 13（猛切到 Mechazilla 实拍，视觉反差最大化）
- 素材依赖：narration.wav 88.0–100.0s · BGM 0.18 · 数据 inline · tick.wav · pop.wav

### Scene 13 · 100.0s–108.0s · 高潮 · 不止于降落

- 类型：B-roll + A-roll 字幕叠加 + 标注
- 组件：aroll.subtitle-highlight（主线 + 实拍背景）+ aroll.keyword-sticker（标注层）
- 旁白文案："但 Musk 不满足于'飞完、再降下来'。他要的是——飞完，直接接住。2024 年 10 月 13 日，Starship 第五次试飞。"
- 屏显文案：卡拉 OK 字幕；"直接接住"四字 marker sweep 重扫；左上 timestamp "2024.10.13 · Starship IFT-5"
- 期待内容：把高潮段的命题立起来——"降落"还不够，目标是"接住"
- 期待效果：航天迷意识到下面要讲 Mechazilla 了，肾上腺素开始上来
- 画面描述：Starship IFT-5 点火升空实拍近全屏 + 卡拉 OK 字幕。"直接接住"被 marker sweep 用力扫一道 accent。画面比叙事段更亮、更满
- 动效要点：字幕 CASCADE + "直接接住" marker sweep（比平时更快更重）+ timestamp FADES in
- 音效描述：BGM 在此处开始缓慢抬升（0.18 → 0.22）+ 一记低频 boom 垫底（约 100.2s · volume 0.4）
- 转场进入：硬切（从数据柱猛切到火焰升空）
- 转场离开：硬切 → Scene 14
- 素材依赖：narration.wav 100.0–108.0s · BGM 0.18→0.22 · Starship IFT-5 升空片段 · boom.wav

### Scene 14 · 108.0s–117.0s · 高潮 · Super Heavy 返场

- 类型：B-roll · 真实视频主导 + 标注
- 组件：真实视频（Super Heavy 返回）+ aroll.keyword-sticker（标注层）
- 旁白文案："Super Heavy 升空、绕地、然后掉头，朝着 Starbase 的发射塔飞回来。注意——它没有落地架。"
- 屏显文案：画面标注：高度读数 "高度 ↓"、速度读数同步递减；"注意——它没有落地架"时，引线指向助推器底部本该有落地架的位置，弹出标注 "无落地架"
- 期待内容：建立"它在朝塔飞回来"的空间关系，并用"无落地架"标注埋下高潮的钩子——它必须被接住，没有别的退路
- 期待效果：航天迷看到"无落地架"引线指向空荡荡的箭体底部，意识到"那它怎么落？" → 屏息
- 画面描述：Super Heavy 返场实拍——掉头、再入、栅格翼调姿、朝塔逼近，近全屏。高度 / 速度读数标注在画面一侧同步递减。讲到"没有落地架"，hairline 引线从箭体底部拉出 "无落地架" 标注，accent 色
- 动效要点：高度 / 速度读数 COUNTS DOWN 同步实拍 + "无落地架"引线 DRAWS（慢、强调）+ 标注 POP IN
- 音效描述：读数滚动细 tick + "无落地架"标注弹出配一记略沉的 blip（约 114.5s · volume 0.3）
- 转场进入：硬切
- 转场离开：硬切 → Scene 15
- 素材依赖：narration.wav 108.0–117.0s · BGM 0.22 · Starship IFT-5 Super Heavy 返场片段 · tick.wav · blip.wav

### Scene 15 · 117.0s–124.0s · 高潮 · 悬停七秒（留白）

- 类型：B-roll · 真实视频主导 + 标注（刻意留白镜头）
- 组件：真实视频（悬停）+ aroll.keyword-sticker（标注层）
- 旁白文案："悬停。七秒。"
- 屏显文案：画面中央偏下一个极简悬停计时器，从 "01" 跳到 "07"，每秒一跳，accent 色
- 期待内容：把全片张力推到顶点——靠"几乎抽空旁白 + 一个滴答走字的计时器"制造屏息感
- 期待效果：旁白只剩四个字，画面安静，航天迷会跟着计时器一秒一秒屏住呼吸 → 这是全片情绪的最高悬点
- 画面描述：Super Heavy 悬停于塔旁的实拍，镜头几乎不动。画面中央偏下悬停计时器 "01…07" 每秒一跳。除计时器外无其他标注，画面刻意干净、安静。这是一个故意放慢、留白的镜头
- 动效要点：计时器数字每秒 TICKS 一跳 + 助推器在画面里极轻微地浮动，其余一切静止
- 音效描述：BGM 在此 bump up 到 0.32；旁白说完"七秒"后抽空；只剩计时器每跳一次配一记清脆 tick（117–124s 共 7 记 · volume 0.35）
- 转场进入：硬切
- 转场离开：硬切 → Scene 16
- 素材依赖：narration.wav 117.0–124.0s（仅前段有旁白）· BGM 0.22→0.32 · Starship IFT-5 悬停片段 · tick.wav

### Scene 16 · 124.0s–130.0s · 高潮 · 筷子臂合拢（重击 + 静止）

- 类型：B-roll · 真实视频主导 + 标注
- 组件：真实视频（筷子臂合拢 + 静止）+ aroll.keyword-sticker（标注层）
- 旁白文案："塔上的两只机械臂——合上了。"
- 屏显文案：合拢瞬间画面中央一记 "接住" 戳记砸入；静止段画面一角安静浮出 "Super Heavy · 已接住"
- 期待内容：兑现全片所有铺垫——筷子臂合拢、接住助推器，"出租车自己开回站台"的隐喻在此落地
- 期待效果：航天迷虽然看过无数遍，但配合前 15 镜的铺垫 + 悬停的屏息，这一下"接住"会有顿悟级的情绪释放
- 画面描述：筷子臂水平滑移、合拢、夹住 Super Heavy 的实拍，慢镜 0.7x。合拢瞬间 "接住" 戳记 accent 色砸在画面中央。之后镜头静止 2s，停在被夹住的助推器上，"Super Heavy · 已接住" 标注安静浮出
- 动效要点：实拍慢镜驱动 + "接住"戳记 SLAMS in（合拢那一帧）+ 静止段"已接住"标注 FADES in
- 音效描述：合拢瞬间一记低频 thump + 紧接 0.3s 全静音（约 127.0s · volume 0.7）；静音后 BGM 轻轻回落到 0.18
- 转场进入：硬切
- 转场离开：硬切 → Scene 17
- 素材依赖：narration.wav 124.0–130.0s · BGM 0.32→静音→0.18 · Starship IFT-5 合拢 + 静止片段 · thump.wav

### Scene 17 · 130.0s–145.0s · 范式 · 为什么不要落地架

- 类型：B-roll · 抽象对照 + 标注
- 组件：broll-abstract.versus + aroll.keyword-sticker（标注层）
- 旁白文案："为什么不要落地架？带轮子的，才叫车；不带的，就只是火箭。Musk 要的从来不是一枚可回收的火箭——他要的，是一台能像飞机那样、加油就能再飞的机器。"
- 屏显文案：versus 卡前半——左卡"可回收的火箭"，右卡"加油就能再飞的机器"；"带轮子的才叫车"时弹出对照标注
- 期待内容：把高潮的视觉震撼，翻译成一个观念——Musk 追求的不是回收，是"航班级的复飞"
- 期待效果：航天迷会"对，我之前没这么想过" → 概念被刷新
- 画面描述：Shadow Cut 暗背景 + versus 对照卡。左卡灰阶"可回收的火箭"，右卡 accent 强调"加油就能再飞的机器"。中间 serif italic "vs"。"带轮子的才叫车"配一个轻量图示标注
- 动效要点：left card SLIDES in 左 + right card SLIDES in 右 + "vs" FADES in + 右卡 PULSES 1 次
- 音效描述：标注弹出 blip（约 134.0s · volume 0.25）
- 转场进入：硬切
- 转场离开：硬切 → Scene 18
- 素材依赖：narration.wav 130.0–145.0s · BGM 0.18

### Scene 18 · 145.0s–160.0s · 范式 · 两个范式

- 类型：B-roll · 抽象对照
- 组件：broll-abstract.versus
- 旁白文案："Falcon 9，是出租车，跑了两单。Starship，是出租车，自己开回了站台。这是两个完全不同的范式。"
- 屏显文案：versus 卡完成态——左卡 "Falcon 9" + 副释"出租车跑两单"（灰阶），右卡 "Starship" + 副释"自己开回站台"（accent 强调），中间"vs"
- 期待内容：用 versus 组件把"Falcon 9 与 Starship 是两个范式而非迭代"一眼讲清
- 期待效果：航天迷意识到 Starship 不是 Falcon 的升级版，是另一种东西 → 概念被升级，呼应 hook 的"出租车"框架闭环
- 画面描述：承接 Scene 17 的 versus 卡，左右卡填入 Falcon 9 / Starship 的最终副释。左卡灰阶、右卡 accent。卡片 hairline 描边，呼应主题装饰
- 动效要点：两卡副释 TYPES on + Starship 卡 PULSES 1 次强调
- 音效描述：无（让对比视觉单独承担）
- 转场进入：crossfade（短）
- 转场离开：crossfade（短）→ Scene 19
- 素材依赖：narration.wav 145.0–160.0s · BGM 0.18

### Scene 19 · 160.0s–172.0s · 收尾 · 22 年时间轴

- 类型：B-roll · 真实视频快剪 + 标注
- 组件：真实视频快剪 + aroll.keyword-sticker（标注层）
- 旁白文案："2002 到 2024，二十二年。从一枚连入轨都困难的小火箭，到一根能在空中接住助推器的塔。"
- 屏显文案：画面下方一条时间轴 "2002 ●········● 2024"，4 个节点（2008 / 2015 / 2017 / 2024）随旁白逐个点亮并弹出小标注
- 期待内容：把全片 4 个节点收拢成一条 22 年时间轴，形成结构性记忆锚点
- 期待效果：航天迷看到时间轴 4 点亮起，会"嗯，这视频确实贯穿了这条主线" → 结构感带来满足
- 画面描述：4 个节点的代表画面快剪（Falcon 1 / LZ-1 着陆 / SES-10 / Mechazilla 各约 2.5s）半透明叠暗背景 + 画面下方时间轴随旁白点亮节点，每个节点弹出年份小标注
- 动效要点：4 段快剪 CROSSFADE 之间软切 + 时间轴节点从左到右逐个 LIGHTS UP + 年份标注 POP IN
- 音效描述：每个节点点亮配一记 blip（约 162 / 165 / 168 / 171s · volume 0.25）
- 转场进入：crossfade（短）
- 转场离开：crossfade（短）→ Scene 20
- 素材依赖：narration.wav 160.0–172.0s · BGM 0.18 · 4 节点代表素材 · blip.wav

### Scene 20 · 172.0s–180.0s · 收尾 · 大字呼应

- 类型：B-roll · 大字海报
- 组件：broll-hero.big-type（呼应 Scene 03）
- 旁白文案："SpaceX 没有发明火箭。它只是——把火箭，做成了出租车。"
- 屏显文案：hero 大字 "把火箭做成出租车"，这次"出租车"三字最大、占主导；上方时间轴 "2002 ········· 2024"（22 个 dot）；底部小字 #SpaceX
- 期待内容：用与 hook 呼应的大字 + 22 年 dot 时间轴封口，把核心信息钉成可截图的一句话
- 期待效果：航天迷看到首尾呼应的大字，形成截图欲 / 转发欲，记住"把火箭做成出租车"
- 画面描述：Shadow Cut 暗背景 + "把火箭做成出租车"大字居中、"出租车"accent 强调 + 上方 22 个 dot 时间轴 + 底部 #SpaceX 小字 + 最后 2s 整体 fade-out 到黑（全片唯一允许的 exit 动画）
- 动效要点：hero 大字 SLAMS in + accent 词 PULSES 1 次 + 22 个 dot 从左到右 CASCADE 点亮 + 最后 2s 整体 FADE OUT 到黑
- 音效描述：BGM 在最后 3s fade-out 到 0
- 转场进入：crossfade（短）
- 转场离开：fade-out 到黑（本片唯一 exit 动画，合规）
- 素材依赖：narration.wav 172.0–179.0s · BGM 0.18 → 0 fade out 在最后 3s


## 7. 音频时间轴

- 旁白（narration.wav）：0.0–179.0s，用 TTS 生成（男声 / 沉稳 / 纪录片旁白感 / 1.0x）。注意两处刻意留白——Scene 15 悬停段（约 119–124s）旁白说完"七秒"后抽空，Scene 16 合拢瞬间（约 127s）留 0.3s 全静音。旁白节奏要配合视觉，不要匀速念到底
- 背景音乐（Minimal Tech Ambient · Pixabay，氛围性铺底，act 级动态）：
  - 0.0–3.0s：fade-in 到 volume 0.12（hook 段刻意压低，让冷开场的实拍和 boom 突出）
  - 3.0–15.0s：维持 0.12
  - 15.0–100.0s：抬到 0.18，叙事段平稳铺底
  - 100.0–117.0s：缓慢抬升 0.18 → 0.22（进入高潮）
  - 117.0–124.0s：bump up 到 0.32（悬停段，配合旁白抽空，音乐接管张力）
  - 约 127.0s：合拢瞬间留 0.3s 全静音
  - 127.0–160.0s：回落到 0.18
  - 160.0–177.0s：维持 0.18
  - 177.0–180.0s：fade-out 到 0
- 音效（SFX）：
  - blip.wav（标注弹出音，全片复用，约 14 处）· 每次画面标注 POP IN 时触发，见各 Scene 音效描述 · volume 0.25–0.30
  - tick.wav（读数 / 计时 / 打字滚动音，全片复用）· 见 Scene 05 / 07 / 09 / 12 / 14 / 15 音效描述 · volume 0.30–0.35
  - 0.5s · boom.wav（Scene 01 冷开场实拍进入）· volume 0.5
  - 19.0 / 19.4 / 19.8s · 闷响 ×3（Scene 04 "前 3 次"红叉三连砸入）· volume 0.3
  - 46.5s · thump.wav（Scene 07 Falcon 9 触地）· volume 0.5
  - 71.5s · thump.wav（Scene 10 "第 2 次飞行"大字砸入）· volume 0.45
  - 85.5s · pop.wav（Scene 11 出租车撞水爆开）· volume 0.45
  - 96.5s · pop.wav（Scene 12 数据"100+"定格）· volume 0.5
  - 100.2s · boom.wav（Scene 13 高潮段起，低频垫底）· volume 0.4
  - 127.0s · thump.wav（Scene 16 筷子臂合拢，后接 0.3s 全静音）· volume 0.7


## 8. 参考与反例

- 正向参考：
  - Johnny Harris（YouTube）——9 分像其"真实素材 + 画面标注层 + 引线指向具体位置"的信息增层做法。1 分不一样：标注更克制，不做成满屏 HUD，每次同屏 ≤ 3 个
  - Kurzgesagt – In a Nutshell（YouTube）——9 分像其"节奏密度 + 信息凝练 + 一个核心隐喻贯穿全片"。1 分不一样：不用 Kurzgesagt 的高饱和插画风，改用真实 NASA / SpaceX 视频素材
  - Wendover Productions（YouTube）——9 分像其"冷静纪录片旁白 + 数据驱动"。1 分不一样：不要 Wendover 的 19 分钟长度，要 3 分钟极致紧凑
- 静态参考：
  - Stripe Press 网页排版——Shadow Cut 主题的暗色锐利 + hairline 装饰对味，标注引线也走这套 hairline 语言
  - Apple Keynote 的 hero 大字——Scene 03 / Scene 20 的大字呼应风格
- 反例（绝对不要）：
  - 视觉：不要黑红"科技标题党"配色 / 不要倒计时条 / 不要 vsauce 式问号卡片 / 标注层不要做成游戏 HUD 或满屏飞数字
  - 叙事：不要"马斯克的传奇"那种热血叙事 / 不要"未来可期"鸡汤收尾 / 不要把 Elon 神化或妖魔化
  - 节奏：教程型也别破 1.5s 下限 / 不要全程同速 / 不要节奏平均用力 / 高潮悬停段不要往里塞旁白


## 9. 开放问题

- Scene 01 / 13–16 Starship IFT-5 视频：这是本片最核心素材，反复用于冷开场和整个高潮段。SpaceX 官方 YouTube 上有完整 4K 版本，渲染前必须确认有可剪辑的本地副本，且包含"升空 + 返回 + 悬停 + 合拢 + 静止"完整序列
- Scene 04–05 Falcon 1 第四发视频：NASA 公共素材是否有 1080p 以上版本？如果只有低质，需在渲染前确认，或考虑用 SpaceX 后期重制的纪念视频
- 画面标注数值核对：各 Scene 标注里的数值（122m 塔高 / 70m 助推器 / Falcon 9 着陆速度区间 / SpaceX 年度发射数）渲染前需逐项核对最新公开数据，避免标注出错——标注层一旦数字错，比没有标注更伤可信度
- 速度 / 高度读数：Scene 07 / 14 的实时读数需要和所选 footage 的真实下降曲线对齐，渲染端若拿不到遥测数据，可改为"区间标注"（如"≈ 300 → 0 km/h"）而非逐帧精确读数
- Voice ID：语气基调描述为"男声 / 略沉稳 / 纪录片旁白感"，具体可用 voice ID 查渲染端文档后填入，建议试 2-3 个选最对味的
- 音效文件：blip / tick / pop / thump / boom 待从 Freesound / Pixabay SFX 搜索下载，关键词已在 § 5 待搜索素材列出
- BGM 时长适配：Pixabay 上 Minimal Tech Ambient (Main) 原长度需确认是否 ≥ 180s，如不足需用同曲多版本拼接
