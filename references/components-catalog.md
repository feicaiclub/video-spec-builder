---
name: components-catalog
description: 视频内容类型词汇表 · 69 个标准内容类型。
---

# 内容类型词汇表 · Components Catalog

69 个标准内容类型，拆分镜时每镜锚定一个组件 ID。本目录只描述「用途 / 何时用 / 何时不用 / 内容期待」，不含视觉实现细节。

[使用方式]
    - 选组件：先看 [何时用] / [何时不用] 划范围，再看 [用途] 确认
    - 填内容：照 [内容期待] 把所需字段补齐
    - 兜底：找不到合适组件 → `broll-abstract.placeholder` + 在「开放问题」登记
    - 命名规则：`namespace.component-id`（如 `aroll.subtitle-highlight`）

11 个 namespace（不允许自创）：
    aroll · broll-hero · broll-charts · broll-abstract · broll-flows ·
    broll-structure · broll-structures2 · broll-thinking · broll-ui ·
    icons · illustrations


[A-roll · 出镜讲解层]

[aroll.subtitle-highlight] 字幕高亮 · Subtitle Highlight · SPOKEN-WORD CAPTIONS
    用途：把讲者口播逐词分解，念到哪个高亮哪个，做视觉节拍器。
    何时用：口播节奏需逐词强调 / 字幕做节拍器 / 关键名词被锁住 / 双语字幕。
    何时不用：大段背景旁白 / 字幕只需平铺 / 关键词需贴画面具体位置（→ keyword-sticker）。
    内容期待：一整句口播文案（中/英/双语）· 哪些词是关键词 · 讲者名 / 章节 / 时间码（可选）· 整句念完的预估时长。

[aroll.keyword-sticker] 关键词贴纸 · Keyword Sticker · POP-IN LABELS
    用途：讲者抛出新名词时，在画面里"贴"上 1-3 个关键词做视觉锚点。
    何时用：抛出新名词 / 行话 / 人名 / 公司名 · 想给口播加锚点但不做完整卡 · 关键词散布画面。
    何时不用：≥ 4 个标签（→ card-grid）· 需要完整定义（→ concept-card）· 需驻留 > 3s。
    内容期待：1-3 个关键词（中/英）· 哪个最关键（被反色）· 出现时机（口播第几秒）。

[aroll.concept-card] 概念卡 · Concept Card · EXPLAINER CARD
    用途：在画面侧贴一张完整"新词定义卡"——标题 + 一段正文 + 来源引用。
    何时用：抛新名词需驻留 3-5s · 引用书 / blog / paper 的核心论点 · 章节首次介绍核心概念。
    何时不用：同屏已有另一张概念卡 · 信息量 > 3 行（→ pull-quote / analogy）· 偏抽象需图示（→ broll-abstract.*）。
    内容期待：概念名（中+英）· 一句话定义（≤ 3 行）· 来源（书 / 作者 / paper / URL）· 是否需斜体强调某词。


[B-roll · 重锤海报]

[broll-hero.big-type] 大字海报 · Big Type · TYPOGRAPHIC POSTER
    用途：撑满全屏的章节封面 / 标题大字——用字体本身做段落分隔。
    何时用：章节封面 · 整支视频核心论点的"标题镜头" · 段落之间需要节奏停顿 / 视觉清场。
    何时不用：普通段落标题（→ concept-card）· 同段落已用过另一张 hero · 信息 ≥ 2 行论点。
    内容期待：一行核心标题（≤ 8 中文字 / ≤ 5 英文词）· 章节编号 · 是否某字斜体 / 反色 · 关键短语副标（可选）。

[broll-hero.big-number] 大数字 · Big Stat · STATISTIC HERO
    用途：用一个超大数字（百分比 / 倍数 / 量级）撑满画面，配一句精炼解释。
    何时用：决定性数字（87% · 10× · $1B）· 想让数字独立成镜 · 引用数据 source 时。
    何时不用：数据是趋势 / 多点（→ line-chart）· 数字只是过渡 · 没 source / 方法 / 出处。
    内容期待：主数字 + 单位 · 一句解释 · 来源（调研名 / 样本量 / 误差范围）· 数字的标签（FINDING / DELTA / SHARE）。

[broll-hero.pull-quote] 引用块 · Pull Quote · EDITORIAL MOMENT
    用途：全屏引用名人 / 论文 / 文档原话，下方署名作者。
    何时用：引用领域权威（Karpathy / Sutton / paper 摘要）· 核心论点想借口说出 · 需要杂志质感的节奏镜头。
    何时不用：没具体出处 / 作者 · 引用 > 4 行（拆镜或 → concept-card）· 需要数据 / 图表佐证。
    内容期待：引用原文（≤ 4 行）· 作者姓名 + 身份职业 + 年份 · 分类（如 ON CRAFT）· 是否某词强调。

[broll-hero.inversion-flash] 反白闪屏 · Inversion Flash · CUT-IN TRANSITION
    用途：瞬间反白做修辞停顿 / 段落切换。
    何时用：段落切换的"刹车" · 反问 / 转折前的修辞停顿（"等一下。"）· 强调一句话的"重音"。
    何时不用：单支视频已用过 2 次以上 · 连续使用 · 持续 > 1s。
    内容期待：一句要重锤的话（≤ 10 中文字）· 出现时机 · 闪屏后下一镜的方向。


[B-roll · 数据图表]

[broll-charts.line-chart] A1 · 折线图 · Line Chart · TREND OVER TIME
    用途：展示一个指标随时间的变化趋势。
    何时用：单一指标的时间序列 · 强调"增长 / 下降 / 峰值" · 数据点 6-30 个。
    何时不用：多指标对比（→ multi-line）· 离散类别（→ bar）· 比例占比（→ donut）· 数据点 < 6（→ sparkline）。
    内容期待：数据来源 · 主标签（如"周活用户增长"）· 关键数值（终点 / 峰值 / 起始）· 时间范围 · 是否标注异常点 / 关键节点。

[broll-charts.multi-line] A2 · 多线对比 · Multi-line · MODEL COMPARISON
    用途：多条折线同图对比同一指标（多模型 / 多产品 / 多赛道）。
    何时用：2-3 条同维度时间序列 · 强调"谁领先 / 谁追赶" · 模型 benchmark / 产品增长。
    何时不用：单一指标（→ line-chart）· ≥ 4 条线（拆图 / → bar）· 维度不同（→ compare-table）。
    内容期待：2-3 条线的名字 · 每条数据来源 · 哪条是主角（高亮）· 主标 · 时间范围。

[broll-charts.bar-chart] A3 · 柱形图 · Bar Chart · DISCRETE QUANTITIES
    用途：离散类别（月 / 周 / 类型）的数值高低对比。
    何时用：4-8 个离散类别 · 想凸显"哪个最高 / 最低" · 月度 / 季度 / 单位量级。
    何时不用：连续时间趋势（→ line）· 类别 > 10（→ h-bar）· 比例占比（→ donut）· 多维度叠加（→ stacked）。
    内容期待：各类别名 · 各类别数值 · 哪个是峰值（被高亮）· 主标（突出峰值发现）。

[broll-charts.h-bar] A4 · 横向条形 · H-Bar · RANKING
    用途：排行榜——横向条形按降序排列，强调第一名。
    何时用：5-10 个项目排序 · 项目名较长（横向能完整显示）· 强调"第一名 vs 其他"。
    何时不用：时间序列（→ line / bar）· 项目 ≤ 3（→ big-number）· 不需要排名感（→ bar）。
    内容期待：5-10 个项目名 · 各项数值（降序）· 排名第一项（自动 accent）· 主标 + 数据来源。

[broll-charts.stacked] A5 · 堆叠柱 · Stacked · COMPOSITION OVER TIME
    用途：时间序列上各组成部分的占比变化。
    何时用：总量 + 构成同时关注 · 季度 / 月度的"构成演化" · 主项要在底部视觉锚定。
    何时不用：只关心总量（→ line / area）· 只关心单时刻占比（→ donut）· 构成 ≥ 5 项。
    内容期待：时间标签 · 每时间点 3 个分项数值 · 主项（放底部）· 主标 + 数据来源。

[broll-charts.area-chart] A6 · 面积图 · Area · ACCUMULATED VOLUME
    用途：强调"累积量 / 容量增长"——折线下方填充。
    何时用：强调"累积"（token 用量 / 用户数累计）· 单一指标的体量增长感 · 需比 line 更有视觉重量。
    何时不用：多条线对比 · 数据有负值 / 剧烈波动 · 想强调精确数值（→ line + 端点标）。
    内容期待：数据来源 · 主标（强调累积 / 增长叙事）· 时间范围 + 数据点 · 起点值 + 终点值。

[broll-charts.donut] A7 · 环形图 · Donut · PROPORTION
    用途：4 块以内的占比构成图（一个主项 + 几个次项 + Other）。
    何时用：比例占比 / 关注"主项占多少" · 项目数 ≤ 4 · 想让中心数字成视觉锚。
    何时不用：项目 > 4（→ bar）· 想强调排名（→ h-bar）· 是绝对值非百分比 · 多时间段（→ stacked）。
    内容期待：各分项名 + 百分比（≤ 4 项）· 中心要显示的关键数 · 主项是哪个 · 主标 + 数据来源。

[broll-charts.scatter] A8 · 散点图 · Scatter · CORRELATION
    用途：二维分布——x/y 轴各代表一维度，点大小可映射第三维度。
    何时用：二维相关性（cost × quality）· 想找甜蜜点 / 异常值 · "模型 D 是甜蜜点"叙事。
    何时不用：时间序列（→ line）· 只有一维度（→ bar）· 数据点 > 30（→ heatmap）。
    内容期待：x / y 轴各代表什么 · 5-15 个点的名字 + 坐标 · 哪个是甜蜜点 / 主角 · 第三维度（可选）· 主标 + 来源。

[broll-charts.heatmap] A9 · 热力图 · Heatmap · 2D INTENSITY
    用途：二维网格上的强度分布（行 × 列 = 强度）。
    何时用：二维强度（时间 × 类别）· 想揭示"哪个时段 / 区域最热" · 数据是离散网格。
    何时不用：一维数据（→ bar / line）· 网格 < 5×5（→ bar）· 需要精确数值（→ bar / table）。
    内容期待：行标签（如周一到周日）· 列标签（如 0-23 时段）· 每格强度值（0-100）· 主标 + 数据来源。

[broll-charts.gauge] A10 · 仪表盘 · Gauge · SINGLE METRIC
    用途：单一指标向某个目标的进度（如 RAG Fidelity 73% · 目标 80%）。
    何时用：单一 KPI 当前值 + 目标值 · 强调"完成度 / 距离目标" · 不需要历史趋势。
    何时不用：有时间趋势（→ line + 目标线）· 多个 KPI（→ sparkline）· 进度不是关键（→ big-number）。
    内容期待：当前值 + 单位 · 目标值 · 一句叙事解释 · 状态标签（HEALTHY / WARNING / CRITICAL）。

[broll-charts.sparkline] A11 · 迷你图 · Sparkline · DENSE METRIC CARDS
    用途：多张 KPI 卡片的"周报"——每卡含大数字 + delta + 迷你曲线。
    何时用：关键指标看板总览 · 同时展示 3-6 个 KPI · 强调涨/跌用颜色编码。
    何时不用：单一指标深挖（→ gauge / line）· 卡片间维度差异大 · 卡片数 < 3 或 > 6。
    内容期待：3-6 个 KPI 名 + 当前值 · 每个的 delta · 每个的迷你曲线数据（5-10 点）· 是否带 LIVE 标签。

[broll-charts.sankey] A12 · Sankey 流图 · FLOW DISTRIBUTION
    用途：多列节点之间的流量分布（漏斗 / 转化 / 资源分配）。
    何时用：多阶段漏斗（来源 → 试用 → 留存）· 多对多的资源分配 · 揭示"哪条主路径最粗"。
    何时不用：单一线性漏斗（→ funnel）· 节点 > 8 · 流量不是核心（→ 普通流程图）。
    内容期待：各列节点名 · 节点间流量数值（决定流条粗细）· 主路径是哪条 · 主标 + 数据来源。


[B-roll · 抽象兜底]

[broll-abstract.analogy] 类比框 · Analogy · UNFAMILIAR ≈ FAMILIAR
    用途：把陌生概念左右对应到熟悉事物（"RAG ≈ 开卷考试"），中间用 ≈ 连接。
    何时用：引入新名词（最常用的抽象组件）· 找到熟悉概念做桥 · 强调"本质相似但形式不同"。
    何时不用：两者对立 / 对抗（→ versus）· 关系是因果 / 推导（→ equation）· 没有合适熟悉概念（→ black-box / placeholder）。
    内容期待：陌生概念（中+英+副释）· 熟悉概念（中+英+副释）· 类比的成立维度（哪一点相似）。

[broll-abstract.black-box] 黑盒图 · Black Box · INPUT → ? → OUTPUT
    用途：强调"中间过程不可知"——输入 → "?"盒 → 输出。
    何时用：讲"内部不可解释"（LLM 黑盒 / 神经网络）· 想表达"我们不需要知道内部" · 输入输出明确，过程模糊。
    何时不用：内部步骤是清晰的（→ broll-flows.complex）· 没明确输入 / 输出（→ placeholder）· 想说明内部机制。
    内容期待：输入是什么 · 输出是什么 · 黑盒内的副释（如"175B 参数 · 不可解释"）。

[broll-abstract.equation] 概念等式 · Concept Equation · A + B = C
    用途：把概念组合写成"教科书等式"——如"模型 + 资料 = 可靠回答"。
    何时用：强调"两个要素组合产生结果" · 公式化表达核心论点 · 想要教科书 / 严谨气质。
    何时不用：概念是 A vs B 对立（→ versus）· 是因果 / 流程（→ flow）· 三项以上要素。
    内容期待：等式左侧两项（每项名词 + 副释）· 等式右侧结果（名词 + 副释）· 哪一项是关键（accent）。

[broll-abstract.spectrum] 光谱 · Spectrum · ONE AXIS · TWO POLES
    用途：一根轴 · 两端对立极 · 中间一个 marker 标当前位置。
    何时用：表达"X 在 A 和 B 之间偏哪边" · 连续过渡的两极 · 标"当前状态"在光谱上的位置。
    何时不用：离散两类（→ versus）· 不是连续过渡（→ analogy）· 多维度（→ matrix-2x2）。
    内容期待：左极概念 · 右极概念 · 当前 marker 在 0-1 区间的位置 · marker 的标签（如"RAG · 0.68"）。

[broll-abstract.iceberg] 冰山 · Iceberg · VISIBLE / HIDDEN
    用途：水面以上"可见 10%"，水面以下"隐藏 90%"。
    何时用：比例悬殊的"看得见 / 看不见" · 强调"冰山一角" · LLM 显性 UI vs 隐性权重。
    何时不用：比例接近 1:1（→ versus）· 不是显性 / 隐性（→ stacked / donut）· 不需要"上下层级"（→ layered-stack）。
    内容期待：水面以上是什么（"可见 10%"内容）· 水面以下是什么（"隐藏 90%"内容）· 一句叙事主标。

[broll-abstract.versus] 对照 · Versus · A vs B · DELTA
    用途：两个方案左右等宽对比 · 中间 "vs" · 每行对齐对照。
    何时用：两个方案 / 概念逐项对比（预训练 vs 微调）· 行行对齐看差异 · 想突出某一边更好。
    何时不用：≥ 3 个对象（→ compare-table）· 不是对立 / 平行（→ analogy）· 维度只 1 个（→ spectrum）。
    内容期待：左侧方案名 + 短描述 · 右侧方案名 + 短描述 · 3-4 个对比维度（每维左值/右值）· 哪边被推荐（accent）。

[broll-abstract.placeholder] 占位框 · Placeholder · WHEN YOU LACK AN ASSET
    用途：缺素材时的兜底框——标注后续要补什么素材。
    何时用：真的找不到合适组件，缺截图 / 录屏 · 占位以推进 spec · 标注未来要补的素材规格。
    何时不用：任何能用其他组件替代的场景（不要偷懒）· 已经确定的镜头。
    内容期待：素材名（如"产品 demo 截屏"）· 素材规格（尺寸 / 时长 / 格式）· 谁负责补 / 何时补。


[B-roll · 流程图]

[broll-flows.complex] B1 · 复杂流程 · Multi-step · EXTENDED LINEAR FLOW
    用途：7 个左右节点的线性流程，含 latency / 高亮关键 cluster。
    何时用：6-9 步线性 pipeline（RAG / CI-CD）· 想圈出"核心段" · 每步有耗时数据可标。
    何时不用：流程有分支（→ branching）· 节点 ≤ 5（→ flow-chart）· 不需 latency 数据（→ flow-chart）。
    内容期待：6-9 个节点名（中+英）· 每步 latency · 哪段是"核心 cluster" · 主路径节点（被 accent）。

[broll-flows.branching] B2 · 分支流程 · Branching · IF / ELSE
    用途：单一决策点 + YES / NO 分支（如缓存命中 → 返回 / 调模型）。
    何时用：单一决策点的 if/else · 缓存策略 / 错误处理 / 准入判断 · 强调"YES vs NO"。
    何时不用：多级决策（→ decision-tree）· 没分支（→ complex / flow-chart）· 决策回到原节点（→ loop）。
    内容期待：决策点问题（如"缓存命中？"）· YES 分支后续节点 · NO 分支后续节点 · 主路径是哪条（accent）。

[broll-flows.decision-tree] B3 · 决策树 · Decision Tree · MULTI-LEVEL JUDGMENT
    用途：多级决策（根 → 决策 → 叶），推荐路径全程高亮。
    何时用："我选 A 还是 B 还是 C" · 工程选型决策（RAG / 微调 / 联网 / 原生）· 引导观众跟着推理走。
    何时不用：单一决策（→ branching）· 层级 > 3（拆图）· 不是判断而是流程（→ complex）。
    内容期待：根问题 · 每层决策问题 + YES/NO · 终点叶节点（推荐结果）· 推荐路径（被 accent 高亮）。

[broll-flows.state-machine] B4 · 状态机 · State Machine · STATES WITH TRANSITIONS
    用途：圆形节点（状态） + 箭头（转移事件） + 自循环。
    何时用：Agent 状态（IDLE / THINKING / ACTING）· UI 状态机（pending / loading / success）· 强调"可循环 / 可回退"。
    何时不用：线性步骤（→ complex / flow-chart）· 单向无循环（→ sequence）· 状态 > 6。
    内容期待：各状态名（建议 4 个，最多 6）· 状态间转移事件（INVOKE / RETRY）· 哪个是循环（self-loop）· 主路径。

[broll-flows.sequence] B5 · 时序图 · Sequence · API / INTERACTION TIMELINE
    用途：多个 actor 之间的时序调用——顶部 actor + 下垂 lifeline + 箭头。
    何时用：多角色 API 调用顺序（User → API → LLM → DB）· 同步 vs 异步对比 · 强调"先后 / 时间顺序"。
    何时不用：单一线性流程（→ complex）· 不强调时间顺序（→ hub-spoke）· 角色 > 6。
    内容期待：3-5 个 actor · 调用顺序每步（from → to + 操作名）· 哪些是同步 / 异步 · 关键调用（accent）。

[broll-flows.swimlane] B6 · 泳道图 · Swimlane · MULTI-ROLE PROCESS
    用途：横向泳道，节点位置编码"哪条道 = 谁来做"。
    何时用：多角色协作（human-in-the-loop）· 强调"责任移交 handoff" · AutoML / 标注 / 复核工作流。
    何时不用：单角色（→ complex / flow-chart）· 不强调"谁做"（→ sequence）· 角色 > 4。
    内容期待：3-4 条 lane（角色名）· 每个步骤 + 在哪条 lane · 哪些步骤是"跨 lane 移交"（被高亮）。

[broll-flows.fork-join] B7 · 并行 / 汇合 · Fork-Join · PARALLEL EXECUTION
    用途：主控 → fork → 并行 worker → join → merge 结果。
    何时用：并行调用多个 agent / API（map-reduce）· 强调"并发度"和"等所有完成" · 多源同时检索后合并。
    何时不用：串行流程（→ complex）· 没汇合（→ branching）· worker 间有顺序依赖（→ sequence）。
    内容期待：主控节点名（如"Coordinator"）· 并发 worker 数（推荐 3 个）· 每个 worker 做什么 · merge 结果。

[broll-flows.loop] B8 · 循环流程 · Loop · ITERATIVE OPTIMIZATION
    用途：4 节点环形排列 + 闭环 + 中心写退出条件（如 RLHF 4-step）。
    何时用：迭代优化（训练 → 推理 → 评估 → 再训练）· 强调"形成闭环" · 直到指标收敛才退出。
    何时不用：线性流程（→ complex）· 单节点自循环（→ state-machine）· 节点 ≠ 4。
    内容期待：4 个节点名（必须 4 个）· 退出条件（一句话）· 哪个节点是关键（被 accent）。


[B-roll · 结构图 I]

[broll-structure.flow-chart] 流程图 · Flow Chart · LINEAR PROCESS
    用途：4 步线性流程，自动推进高亮当前步骤。
    何时用：简单 4 步流程 · 让镜头自己走完一遍 · 强调"过去 / 当前 / 未来"三态。
    何时不用：步骤 ≠ 4 或有分支（→ broll-flows.*）· 步骤间有 latency（→ complex）· 静态展示（→ complex 精简版）。
    内容期待：4 个步骤名（中+英）· 每步一句话描述（可选）· 推进节奏（默认自动 / 配合口播）。

[broll-structure.pyramid] 金字塔 · Pyramid · HIERARCHY
    用途：3 层金字塔（如战略 / 方法 / 执行），顶层强调。
    何时用：层级金字塔（战略 / 方法 / 执行）· 强调"少而决定性 vs 大量重复" · Maslow 类层级。
    何时不用：层数 > 3 · 等量层级（→ layered-stack）· 不是层级而是流程（→ flow）。
    内容期待：3 层各自名字（中+英）· 每层简短描述 · 哪层是 accent（默认顶层）。

[broll-structure.funnel] 漏斗 · Funnel · CONVERSION
    用途：4 阶段转化漏斗，最终留存被强调。
    何时用：用户转化漏斗（AWARE → TRY → COMMIT → EVANGELIZE）· 招聘 / 销售 / 留存递减 · 强调"最后剩下的"。
    何时不用：阶段数 ≠ 4 · 多对多流量分布（→ sankey）· 阶段没有递减性质（→ stack / flow）。
    内容期待：4 阶段名字（中+英）· 每阶段数值（人数 / 比例）· 主标 + 数据来源。

[broll-structure.concentric] 同心圆 · Concentric · NESTED SCOPE
    用途：嵌套同心圆（业务 → 产品 → 体验 → 核心），强调最里圈。
    何时用：范围嵌套（business 包含 product 包含 experience）· "由外向内"的核心论点 · 关注点收敛模型。
    何时不用：不是嵌套（→ hub-spoke / node-graph）· 重叠相交（→ venn）· 圈数 > 4。
    内容期待：4 层名字（从外到内）· 每层简短描述 · 最内圈的"核心"是什么。

[broll-structure.node-graph] 节点图 · Node Graph · ROUTING / WORKFLOW
    用途：节点 + 边的图结构（如 input → router → tool A/B → output）。
    何时用：Agent 路由 / 工具调用图 · 想强调"中心 router 是关键" · 节点数 4-6 个，结构简单。
    何时不用：节点 > 8（→ hub-spoke / 拆图）· 强调时间顺序（→ sequence）· 节点是层级（→ tree）。
    内容期待：4-6 个节点名（中+英）· 节点间连接关系 · 哪个节点是关键（如 router，被 accent）。

[broll-structure.spectrum] 谱系图 · Spectrum · OPPOSITE AXIS
    用途：水平轴 + 两极标签 + 当前位置点（简化版，对比 broll-abstract.spectrum）。
    何时用：演进位置（规则驱动 → 智能体驱动）· 想标"我们当前在哪里" · 单一维度对立两极。
    何时不用：二维定位（→ matrix-2x2）· 多极（→ mind-map）· 需要数值精度（→ broll-abstract.spectrum）。
    内容期待：左极概念 · 右极概念 · 当前位置点的标签（如"我们在这里"）。


[B-roll · 结构图 II]

[broll-structures2.tree] C6 · 树 · Tree / Taxonomy · HIERARCHICAL CLASSIFICATION
    用途：三层分类树（如 LLM → Encoder/Decoder/MoE → GPT-4/Claude/LLaMA）。
    何时用：分类学 / taxonomy · 组织架构图 · 强调"父子 / 包含"层级。
    何时不用：节点有多父（→ node-graph）· 强调"中心-外围"（→ hub-spoke）· 强调"重叠"（→ venn）。
    内容期待：根节点名 · 第二层各分类（2-4 个）· 每分类下实例（2-3 个）· 哪条分支被强调（accent）。

[broll-structures2.mind-map] C7 · 思维导图 · Mind Map · RADIAL DECOMPOSITION
    用途：中心主题 + 6 个一级分支 + 各自 2-3 个二级子项。
    何时用：系统拆解（ML = 数据 / 训练 / 评估 / 部署 / 反馈 / 安全）· 知识图谱 · "主题向外辐射"。
    何时不用：严格层级（→ tree）· 单链 / 线性分解（→ flow）· 分支 > 8。
    内容期待：中心主题名 · 6 个一级分支名 · 每个一级分支下 2-3 个二级子项 · 哪个一级分支是 hot（accent）。

[broll-structures2.matrix-2x2] C8 · 2x2 矩阵 · Matrix · POSITIONING / QUADRANTS
    用途：二维定位象限——每个对象一个点放在合适象限。
    何时用：商业 / 产品 / 模型定位 · 强调"理想象限是哪个" · 多对象在二维上相对位置。
    何时不用：一维（→ spectrum）· 维度 > 2（拆多张 / → mind-map）· 想要精确数据（→ scatter）。
    内容期待：x / y 轴各代表什么 · 四象限各自标签 · 5-10 个对象 + 各自所在象限 · 哪个是"理想 / 主角"。

[broll-structures2.venn] C9 · Venn 图 · INTERSECTION / UNION
    用途：三圆相交 · 中心交集标"灵魂名词"（如 AI 工程师 = 软件 ∩ ML ∩ 产品）。
    何时用：揭示"X 是 A、B、C 的交集" · 跨学科 / 跨能力领域定义 · 解释新角色的复合性。
    何时不用：集合数 > 3 · 集合不相交（→ stack / grid）· 强调"包含"而非"重叠"（→ concentric）。
    内容期待：3 个集合名字（中+英）· 中心交集"是什么"（灵魂名词）· 哪个集合是主圈（accent）。

[broll-structures2.layered-stack] C10 · 分层堆栈 · Layered Stack · ARCHITECTURE LAYERS
    用途：7 层架构堆栈（L1 硬件 → L7 UI），可指定某 2-3 层为 focus。
    何时用：系统架构 7 层 / OSI / AI 应用栈 · 强调"今天讨论的是第 X 层" · 想用"层"这个词。
    何时不用：不是严格分层（→ concentric / hub-spoke）· 层间互动水平（→ swimlane）· 层 ≤ 3（→ pyramid）。
    内容期待：7 层各自名字（编号 + 中+英）· 每层一句话备注 · 哪 1-2 层是 focus（被高亮）。

[broll-structures2.hub-spoke] C11 · Hub & Spoke · CENTRALIZED SYSTEM
    用途：中心 hub + 6 个方向辐射 spoke（如 AI Agent + 工具集成）。
    何时用：中央控制 + 多外围工具的"枢纽" · 强调 Agent 调度多工具 · "X 是所有 Y 的中心"。
    何时不用：节点是平等的（→ node-graph）· 多对多（→ sankey / mind-map）· 强调"层级"（→ tree）。
    内容期待：中心 hub 名字（如 AI Agent）· 6 个 spoke 名字（GitHub / Slack / Notion）· 哪些 spoke 是重点（accent）。

[broll-structures2.grid-map] C12 · 网格地图 · Grid Map · CLUSTER TOPOLOGY
    用途：大规模节点网格 · 颜色映射状态（active / idle / error）。
    何时用：GPU 集群 / 服务节点拓扑 · 实时状态监控类视觉 · 强调"规模感"（几十节点一眼看完）。
    何时不用：节点 < 30（→ node-graph）· 节点有关系连线（→ node-graph）· 状态 > 3 类。
    内容期待：总节点数（推荐 72=12×6）· 状态分类（active / idle / error）· 每类数量 · 主标 + 一句叙事。


[B-roll · 思考与组织]

[broll-thinking.compare-table] D1 · 对比表 · Comparison Table · A VS B VS C
    用途：多对象 × 多维度对比表（如 Claude / GPT-4 / Gemini × 6 维）。
    何时用：3 个对象多维度对比 · 每行有"最优"项可标 · 表格式 spec 表达。
    何时不用：仅 2 个对象（→ versus）· 维度 > 8（拆表）· 想要叙事感（→ versus）。
    内容期待：3 个对象名 · 4-6 个对比维度 · 每行各对象的值 · 每行赢家是谁（一致项可不标）。

[broll-thinking.swot] D2 · SWOT 四宫格 · STRATEGIC ANALYSIS
    用途：2×2 网格 SWOT 分析（优势 / 劣势 / 机会 / 威胁）。
    何时用：战略 / 产品 / 模型的 SWOT · 强调"正负两面" · 项目 / 业务复盘。
    何时不用：不是 SWOT 框架（→ compare-table）· 单一维度（→ card-grid）· 项目数 > 12。
    内容期待：S / W / O / T 各 3-4 条 · 分析对象是什么（如"自家产品 vs 市场"）。

[broll-thinking.fishbone] D3 · 鱼骨图 · Fishbone · ROOT CAUSE ANALYSIS
    用途：水平主干（=问题）+ 6 类成因斜插（人/方法/工具/环境/数据/反馈）。
    何时用：故障复盘 / 根因分析 · 6 大类原因可视化（5M+1E）· 强调"主因 vs 次因"。
    何时不用：单一因果链（→ flow）· 不是因果而是分类（→ tree）· 类别 ≠ 6。
    内容期待：问题陈述（鱼头）· 6 大类原因（标签 + 每类 1-3 个子因素）· 哪 1-2 类是主因（被 accent）。

[broll-thinking.timeline-row] D4 · 时间线 · Timeline · HISTORICAL EVOLUTION
    用途：水平时间轴 + 6 个事件 · 上下交错卡片。
    何时用：行业演化（Transformer → GPT-3 → ChatGPT）· 公司里程碑 · 6-8 个关键年份事件。
    何时不用：项目周计划（→ gantt）· 不是时间而是步骤（→ flow）· 事件 > 10。
    内容期待：6-8 个事件（日期 + 标题 + 一句说明）· 哪 2-3 个是关键（被 accent）· 时间范围（如 2017-2025）。

[broll-thinking.gantt] D5 · 甘特图 · Gantt · PROJECT TIMELINE
    用途：项目时间表——左列任务 + 右侧周柱。
    何时用：项目计划（roadmap / sprint）· 强调任务并行 / 依赖 · 标关键里程碑。
    何时不用：历史事件（→ timeline-row）· 单一任务（→ flow）· 任务 > 12 行（拆表）。
    内容期待：时间范围（如 W1-W10）· 6-12 个任务名 + 起止周 · 哪些是关键里程碑（accent）。

[broll-thinking.kanban] D6 · Kanban 看板 · STATUS COLUMNS
    用途：4 列任务看板（待办 / 进行中 / 复审 / 完成）。
    何时用：团队 sprint 状态 · 工作流可视化 · 强调"哪些在做 / 哪些卡住"。
    何时不用：项目时间维度（→ gantt）· 单一任务列表（→ card-grid）· 列数 ≠ 4。
    内容期待：4 列名（默认 BACKLOG / IN PROGRESS / REVIEW / DONE）· 每列卡片数 + 任务名 · 哪列是当前焦点。

[broll-thinking.card-grid] D7 · 卡片网格 · Card Grid · CONCEPT GALLERY
    用途：4×2 = 8 张概念卡片网格（如 8 种 prompting 技术）。
    何时用：同类概念集合（"8 种 prompting 技术"）· 想推荐 1-2 个 · 8 个左右对等项目。
    何时不用：概念有层级 / 顺序（→ tree / flow）· 项数 < 4 或 > 12 · 项目维度不一致。
    内容期待：8 个概念名（中+英+编号）· 每个副标（一句话）· 哪 1-2 个是推荐项（被 accent）。


[B-roll · UI Mock]

[broll-ui.terminal] 终端 · Terminal · CLI MOCK
    用途：模拟 CLI 终端窗口——命令字 + 打字机光标 + 元数据输出。
    何时用：演示 CLI 工具（claude run / git / curl）· 强调"代码 / 工程"质感 · 配合 CLI 教学。
    何时不用：演示 web UI（→ browser）· 演示 API 调用（→ api-call）· 仅演示代码片段（→ code-editor）。
    内容期待：终端标题（如 "~/projects/rag-demo · zsh"）· 命令字（真实可信）· 输出主响应 + 尾部元数据（tokens / 延迟 / 成本）· 是否带打字机动画。

[broll-ui.chat-thread] 对话流 · Chat Thread · LLM CONVERSATION
    用途：模拟 LLM 对话——user 气泡 / AI 气泡左右对话。
    何时用：演示 prompt → response · LLM 对话教学 · 凸显"对话感"。
    何时不用：演示 API（→ api-call）· 演示 CLI（→ terminal）· 多人协作（→ sequence）。
    内容期待：用户提问内容 · AI 回答内容 · 是否有追问 / 多回合（推荐 2-3 回合）· 是否带等待光标（流式响应）。

[broll-ui.browser] 浏览器 · Browser · URL + VIEWPORT
    用途：模拟浏览器窗口——tabs + URL + viewport 内容。
    何时用：演示 Web 产品（claude.ai 等）· URL + 页面内容同时强调 · 多 tab 场景。
    何时不用：桌面应用（→ terminal / code-editor）· 没有 URL（→ placeholder）· 仅强调输入框（→ api-call）。
    内容期待：当前 URL（不含 https://）· 3 个 tab 标题（选中哪个）· viewport 内的主标 + CTA 文案 · 是否带 LIVE 标签。

[broll-ui.code-editor] 代码编辑器 · Code Editor · SYNTAX HIGHLIGHTED
    用途：代码编辑器——可选文件树 + 行号 + 高亮当前行。
    何时用：演示代码片段（Python / JS / SQL）· 教学 API 怎么调 · 想 highlight 某一行做讲解。
    何时不用：命令行操作（→ terminal）· 演示请求响应（→ api-call）· 不是真实代码（→ placeholder）。
    内容期待：文件名 + 语言（如 rag.py · Python 3.12）· 6 行以内真实可运行代码 · 哪一行高亮 · 是否需侧边栏文件树。

[broll-ui.api-call] API 调用 · Request / Response · REST · JSON
    用途：左右双面板模拟 REST API——请求 + 延迟 + 响应。
    何时用：演示 API 调用结构 · 强调 latency 数字（教学可信感）· JSON 字段映射。
    何时不用：演示前端界面（→ browser）· 演示完整代码（→ code-editor）· 不是 REST 而是 SDK（→ code-editor）。
    内容期待：请求方法 + 路径（如 POST /v1/messages）· 请求 body（真实 JSON）· 响应状态码 + body · latency（真实毫秒）· 哪个响应字段是重点。

[broll-ui.dashboard] 仪表盘 · Dashboard · LIVE METRICS
    用途：模拟实时监控仪表盘——多 KPI 卡 + 长 sparkline 卡。
    何时用：实时监控 / 性能仪表盘 · 同时展示多 KPI + 趋势 · 演示运维 / SRE 场景。
    何时不用：单一 KPI（→ gauge）· 详细数据图（→ broll-charts.*）· 静态报告（→ sparkline）。
    内容期待：3 张 KPI 卡（标签 + 主数字 + 单位）· 哪张是 hot（accent）· 底部 sparkline 数据（24h 时序）· 是否带 LIVE 标签。


[图标与插画]

[icons.lucide-set] I-2 · 常用图标库 · 48 个 · CURATED SET
    用途：从 Lucide 1500+ 图标中精选 48 个，可在 spec 里用 ID 引用。
    何时用：UI 信息层 / 注脚 / 节点标识 / 列表前缀 · 卡片标题装饰 · 输入框前缀（search / mail）。
    何时不用：大于 48px 的装饰图标（→ 插画）· 手绘风格的图标 · 同屏混用多个 icon set。
    内容期待：图标 ID（如 `zap` / `database` / `bot`）· 使用场景（节点 / 标签 / 标题）· 不够用时可从 lucide.dev 现搜（直接 name 传入）。
    可用图标（48 个，按组）：
        - 人/沟通: user · users · message-circle · mic · mail · phone · hand · user-cog
        - 数据/系统: database · cloud · cpu · hard-drive · network · git-branch · workflow · layers
        - AI/工具: bot · brain · wand-sparkles · zap · terminal · code · function-square · plug
        - 文档/内容: file-text · book-open · notebook-pen · bookmark · quote · list-checks · tag · folder-open
        - 行动/状态: rocket · target · compass · search · check-circle-2 · triangle-alert · x-circle · help-circle
        - 度量/时间: line-chart · bar-chart-3 · pie-chart · timer · calendar · gauge · trending-up · shield-check

[icons.stroke-weights] I-1 · 描边粗细 · 4 档 · STROKE WEIGHTS
    用途：Lucide 图标支持 4 档描边粗细，约定使用场景。
    何时用：一般不指定（默认走中档）· 仅当需要"特别细 / 特别重锤"时指定。
    何时不用：同屏混用 3 档以上 · 默认让视觉富化阶段处理 · 直接锚定语义。
    内容期待：通常无需指定 · 如有需要：标注"该镜需要重锤图标"或"需要极细图标"。

[illustrations.scene-thinking] 01 · 深度思考 · DEEP THINKING · SEATED + LIGHTBULB
    用途：坐姿人物手托腮 + 思考气泡 + 灯泡装饰，做"灵感 / 思考"封面。
    何时用："灵感 / 思考"主题章节封面 · 介绍方法论 / 思想类内容。
    何时不用：团队 / 协作主题（→ scene-co-create）· 非章节封面镜头（插画限封面用）。
    内容期待：章节标题（中+英）· 是否需章节编号 / 副标 · 章节核心论点（一句话）。

[illustrations.scene-co-create] 02 · 协作共创 · CO-CREATE · TWO PEEPS + SCREEN
    用途：两人共看屏幕 + 一人指屏一人抱臂，做"团队 / 协作"封面。
    何时用："团队 / 协作"主题章节封面 · 强调"共同创造 / 共看"。
    何时不用：单人主题（→ scene-thinking / scene-prompt）· 非章节封面镜头。
    内容期待：章节标题（中+英）· 章节核心论点。

[illustrations.scene-prompt] 03 · 提示工程 · PROMPT CRAFT · STANDING + TERMINAL
    用途：站立人物 + 指向终端窗口 + 漂浮符号，做"提示工程"封面。
    何时用："提示工程 / 编写命令"章节 · 强调"人在主动构造"。
    何时不用：RAG / 检索主题（→ scene-retrieval）· 非章节封面镜头。
    内容期待：章节标题（中+英）· 章节核心论点。

[illustrations.scene-retrieval] 04 · 知识检索 · RETRIEVAL · RAG · MAGNIFIER + FILE CABINET
    用途：站立人物拿放大镜 + 文件柜（中抽屉拉出），做"RAG / 检索"封面。
    何时用："RAG / 检索"章节封面 · 强调"查文件 / 翻资料"。
    何时不用：数据分析主题（→ scene-analytics）· 非章节封面镜头。
    内容期待：章节标题（中+英）· 章节核心论点。

[illustrations.scene-analytics] 05 · 验证分析 · ANALYTICS · WHITEBOARD + UPWARD CURVE
    用途：站立人物 + 白板上扬曲线 + 柱状，做"数据分析 / 复盘"封面。
    何时用："数据分析 / 复盘"章节封面 · 强调"看曲线 / 上升趋势"。
    何时不用：上线 / 发布主题（→ scene-launch）· 非章节封面镜头。
    内容期待：章节标题（中+英）· 章节核心论点。

[illustrations.scene-launch] 06 · 上线发布 · LAUNCH · WAVE + ROCKET TRAIL
    用途：挥手人物 + 火箭沿弧形虚线飞向右上，做"发布 / 上线"封面。
    何时用："发布 / 上线"章节封面（视频结尾常用）· 强调"成功 / 出发"。
    何时不用：思考主题（→ scene-thinking）· 非章节封面镜头。
    内容期待：章节标题（中+英）· 章节核心论点（多用于视频收尾）。

[illustrations.scene-library] I-3 · 场景插画库 · 6 SCENES · OPEN PEEPS STYLE
    用途：6 张场景插画的统一规范——做章节封面用。
    何时用：章节封面（一章一张）· 需要手绘人物 + 主道具的镜头。
    何时不用：非章节封面（插画限封面用）· 一屏多张插画（每屏最多 1 张）。
    内容期待：从 6 张中选一张（scene-thinking / scene-co-create / scene-prompt / scene-retrieval / scene-analytics / scene-launch）· 主题不匹配时直接用 broll-hero.big-type 兜底。


[组件选型决策树]

```
要展示什么？
├── 数字 / 趋势 / 占比                → broll-charts.*（12 个）
├── 步骤 / 决策 / 状态 / 协同         → broll-flows.*（8 个）
├── 层级 / 分类 / 拓扑                → broll-structure.* (6) + broll-structures2.* (7)
├── 对比 / 分析 / 时间线              → broll-thinking.*（7 个）
├── 软件界面 / 终端 / 对话            → broll-ui.*（6 个）
├── 抽象概念（没有具象图标）          → broll-abstract.*（7 个）
├── 重锤强调 / 大字 / 引用 / 反白闪屏 → broll-hero.*（4 个）
├── 出镜叠加（字幕 / 贴纸 / 概念卡）  → aroll.*（3 个）
├── 章节封面（手绘人物 + 道具）       → illustrations.*（7 个）
├── UI 小图标                         → icons.*（2 个）
└── 缺素材兜底                        → broll-abstract.placeholder
```

合计 69 个组件 · 11 个 namespace。
