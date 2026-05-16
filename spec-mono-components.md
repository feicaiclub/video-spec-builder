# Spec Mono · 逐组件细规格

`design.md` 是主题的品牌契约(颜色 / 字体 / 全局规则)。本文件是它的**配套细则** ——
69 个组件在 Spec Mono 下的精确渲染规格,提取自原始设计系统(`assets/v2/sections/`)。

做某个具体镜头时查对应条目,照着写 HTML/CSS/GSAP,成品才精确贴合设计意图。
全局规则(0 阴影 / 0 渐变 / 单 accent / 1px 描边 / 跳过字重 500)始终适用,见 `design.md`。

组件 ID 与「内容期待」字段见 `.claude/skills/video-spec-builder/references/components-catalog.md`。

---

## aroll · 出镜叠加层

- **subtitle-highlight**：思源黑体 800 · clamp 28-56px。默认 `fg 42%`,念到 accent,念过纯白。强调**仅 3px accent 底线**(`scaleX` 入场),无底色块。下 14% / 左右 8% padding。
- **keyword-sticker**：反白(白底 / 黑字)或卡片(`surface` 底 / 1px 强 hairline 边),二选一。padding 14/22px · 圆角 6px · tilt ±1.5°。入场 `scale .92→1` + tilt 归零 · 320ms spring。**同屏 ≤ 3 个,间距 ≥ 200px。**
- **concept-card**：`surface` 底 · 1px hairline + 4 角十字针脚 · 圆角 8px · padding 32/36px · 宽约 50% 画面。标题 cn 38/800(挑一字换 serif italic)+ 28×2px accent 短分隔 + 正文 cn 16/400。底部 hairline 分隔来源注脚。**0 阴影,一卡一概念,正文 ≤ 3 行。** 入场 700ms ease-out。

## broll-hero · 重锤

- **big-type**：Barlow Semi Condensed 800 · 4K 下 180-220px。挑一字换 Instrument Serif italic + accent。chrome = 左上 idx + 右上 rule + 底刻度尺 + 时码。主字入场 1100ms,角标延迟 280ms。
- **big-number**：数字 cond · 280-360px · accent · tabular-nums。单位 0.32em · 纯白 · 上偏 0.6em。caption 28/800 + 32×2px accent 短杠。chrome = 左 finding / 右 method / 底 dashed connector。
- **pull-quote**：Instrument Serif italic · 76px。一关键词换 accent,弱化句换 `fg 66%`。巨型左引号 opacity 0.18 装饰。byline = mono caps + 36px 短杠。
- **inversion-flash**：黑 ↔ 白用 `steps(1)` 瞬切。6-12 帧(200-400ms)。**每支视频 ≤ 2 次,不连续。**

## broll-charts · 数据图表

轴线 1px `rgba(255,255,255,.06)` hairline。数字一律 mono + tabular-nums。

- **line**：线 3px accent · round join;端点 8px、常规点 4px;末端标数字。
- **multi-line**：主线 accent 3px / 次线 70% 白 2px / 三线 35% 白 2px。**最多 3 条。**
- **bar**：默认柱 18% 白,峰值 accent;柱间距 24px;柱顶标值,顶部 2px 圆角。
- **h-bar**：标签 / 条 / 数值三列;降序,第一名 accent;条高 18px;5% 白底打底。
- **stacked**：主项 accent 放底部锚定 / 次项 55% 白 / 三项 22% 白;柱顶标累计值。
- **area**：填充 `accent 42% → 0%`(**全系统唯一允许的渐变**);顶线 3px accent。
- **donut**：环 36px stroke · 半径 140;中心数字 mono 800 · 56px · accent;右栏三列图例。**≤ 4 块。**
- **scatter**：双轴角落注 LOW/HIGH;点大小映射第三维度;主点 accent,其余 14% 白填。
- **heatmap**：阶梯填色 < 70 走灰阶、≥ 70 走 accent;格间距 4px;行列标 mono caps 14px。
- **gauge**：220° 扫角(-200°→20°);stroke 22px round,底色 10% 白;数字 72px mono 800 accent。
- **sparkline**：卡片 1px hairline · padding 22px · 圆角 6px;主数 mono 30/800 + 14px delta;迷你线 2.5px,颜色映射趋势(绿好 / 橙糟)。
- **sankey**：节点 18px 宽矩形(accent / 62% 白);流条 bezier,宽度映射流量,accent 32% / 白 42% opacity。

## broll-flows · 流程图

通用:节点 hairline 边框,hot 段填 accent;箭头 1px line + 7px 三角。

- **complex**：节点 170×108 · mono 副 + 中文 label;双虚线导轨;hot 段同时点亮 tick / latency;重点段虚线框 + 反白标签圈出。
- **branching**：决策点菱形 + 中心问句;YES/NO 标在线中点 mono caps;主路径 accent。
- **decision-tree**：根 → 决策菱形 → 叶矩形;推荐叶 accent;推荐路径全程 accent。
- **state-machine**：圆形节点 + mono caps 名;箭头上方标事件名;自循环用弧线。
- **sequence**：actor 顶部矩形 + 下垂虚线生命线;实线=同步、虚线=响应/异步;关键调用 accent。
- **swimlane**：横泳道,左侧 mono 标号 + 中文角色名;跨泳道箭头 = 责任移交。
- **fork-join**：fork/join 用 6×20 实心 accent 条;worker 并排堆叠,数量 = 并发度。
- **loop**：4 节点环形排列(不要排成线);弧线闭环;中心写 ∞ + 退出条件。

## broll-structure / structures2 · 结构图

- **flow-chart**：节点 hairline → hot 实心 accent;箭头 1px + 7px 三角;推进 900ms/步;past 线变 accent、future 透明度 0.5。
- **pyramid**：三层宽度 32/52/72%(黄金比),层间距 8px 不重叠;顶层标签 accent。
- **funnel**：四级宽度 80→58→40→22%;末级 accent 边框;右列 mono 数字右对齐。
- **concentric**：半径 60/120/180/240;标签在环顶右对齐 mono+cn 双行;核心填 surface + accent 描边。
- **node-graph**：边 1px 强 hairline、不加箭头美化;节点圆角 6px、padding 8/14;hot 节点 accent 描边 + surface 填充。
- **spectrum(structure)**：轴 1px 强 hairline 全宽;两极点 7px 圆 `fg 66%`;marker 14px 圆 accent。
- **tree**：上下三层(根→类→实例);直线连接,主分支 accent;层级越深矩形越小。
- **mind-map**：中心实心 accent 圆、主题字反色;一级文字 800、二级 14px;主分支均匀放射。
- **matrix-2x2**：十字 hairline 轴 + 四角象限名;点 = 色块+标签,重点项 accent+800;理想象限角落加 ★。
- **venn**：圆半透明填充 + hairline 描边;主圈 accent 18%、其它白 6%;交集中心 ★ + 灵魂名词。
- **layered-stack**：上窄下宽视错觉(实际等高);左侧 L 编号 mono 自上而下递减;focus 层 accent 边框。
- **hub-spoke**：中心实心 accent 圆 80px,永远居中;6 向 spoke,重点连实线、其余虚线。
- **grid-map**：12×6 单元格、间距 8px;色映射状态(active accent / idle 16% 白 / error red);active 单元呼吸 pulse、错位 delay。

## broll-thinking · 思考与组织

- **compare-table**：表头左 mono caps 维度、右 cn 800 候选名;每行最优项 accent + ★ 前缀;hairline 分隔行,**不画竖线**。
- **swot**：2×2 等宽;S/O 走 accent(正向),W/T 中性;字母 mono 800 · 56px 当视觉锚;条目用 8px 横杠(不用圆点)。
- **fishbone**：主干水平、鱼头=问题在右、尾向左;6 类成因斜插,主因 accent;小刺横向 14px。
- **timeline-row**：水平 hairline 轴等距分布;事件卡上下交错;关键事件 accent 大圆点。
- **gantt**：左列任务名 + 右侧周柱;柱高 26px · 2px 圆角,关键里程碑 accent;表头 W1-W10 mono caps。
- **kanban**：4 列等宽,当前列 accent 头;卡片上 mono 标签 / 下中文任务;列头跟数量。
- **card-grid**：4×2 等宽等高、16px gap;卡片左上编号 + 左下标题 + 副标;推荐项整张 surface 填充 + accent 边。

## broll-ui · UI Mock

- **terminal**：mono 字体(画面内约 30px);`surface` 底 + hairline 边;光标 10×18 实块 · 1s blink · accent;打字 60ms/字符;尾部 tokens/延迟/成本注脚走 `fg 42%`。
- **chat-thread**：user 气泡右对齐 · accent 描边 · 透明底;AI 气泡左对齐 · surface 填充 · 无边;最大宽度 70%;流式末尾光标 ▍。
- **browser**：三点 + tab 行 + URL 框全部 hairline;URL 用 mono、不显示 `https://`;CTA 用正方形 accent 按钮;不放 favicon。
- **code-editor**：keyword=accent / string=`fg 66%` / comment=`fg 42%` italic;行号 mono `fg 42%` 右对齐;当前讲解行左侧 2px accent 竖条;文件树可选 32px 宽。
- **api-call**：左请求 / 中延迟 / 右响应三栏;POST=accent、200=green、error=red;键 `fg 42%`、值纯白/accent;中间显示真实毫秒数。
- **dashboard**：KPI 卡 = 巨数字 + 单位 + 标签;焦点卡左上 accent 角标;sparkline hairline + 单 accent 高亮点;右上 accent 圆点 + LIVE caps。

## broll-abstract · 抽象兜底

- **analogy**：左=未知 / 右=熟悉,两张完全对称 hairline 卡;连接符 ≈ 用 serif italic 76px accent;"就像"做下方语义提示;左卡 accent 标签强化区分。
- **black-box**：盒子用 **dashed accent 描边**(区别于 hairline)+ 四角 bracket;`?` 84px cond accent;箭头 hairline + 锐角三角 最强 hairline。
- **equation**：横向居中等距;运算符 serif italic 56px accent;关键项 accent 边框;顶部 EQ + hairline 注释栏(教科书味)。
- **spectrum(abstract)**：轴 0–1 · 11 个 tick(5n 主刻度);marker 倒三角 accent + 上方 mono 标签;左极纯白 / 右极 accent meta。
- **iceberg**：水线 accent 虚线 + WATERLINE 标签;水上实线 · accent · 标"10%";水下虚线 + 轻填充 · 灰阶 · 标"90%"。
- **versus**：左右等宽 + 中竖线 + `vs` serif;同序键值行行对齐;左标 `fg 42%` / 右标 accent。
- **placeholder**：45° 斜条纹底(4% 白)+ 1px 强 hairline 边 + 四角 bracket;`[ DROP HERE ]` mono caps accent;标注尺寸/时长/编码格式。

## icons · 图标

- 用 Lucide 图标集(48 个精选见 catalog)。
- 描边粗细:**默认 1.5px**(与 hairline 视觉等重);图标自身被强调时用 2px。同屏不混用 3 档以上。
- 颜色:默认 `fg 66%`,hover/强调才 accent。**不主动给图标上色。**

## illustrations · 章节封面插画

- 6 张 Open Peeps 风格场景插画,**仅用于章节封面**(一章一张)。
- 这是「0 装饰插画」铁律的唯一豁免区 —— 插画只许出现在章节封面,正文镜头一律不用。
- 注:插画**画稿本身是内容素材,不是主题样式** —— 本主题只规定怎么用、何时用。主题不匹配时退回 `broll-hero.big-type` 兜底。
