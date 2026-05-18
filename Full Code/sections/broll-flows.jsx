/* ================================================================
   sections/broll-flows.jsx — 07 · B 类 · 流程图 8 款
   branching · decision-tree · state-machine · sequence ·
   swimlane · fork-join · loop · complex-flow
   ================================================================ */

function FlowsSection() {
  return (
    <Section id="flows" num="07" title="B-roll · 流程图"
      desc="讲<b>步骤 · 决策 · 状态 · 协同</b>时用。共用语法：<em>hairline 1px 连线 · 12px 端三角箭头 · 节点 6px 圆角 · mono 标签 caps</em>。复杂度递增：单线 → 分支 → 状态 → 多角色。">
      <ComplexFlow /><Branching /><DecisionTree /><StateMachine />
      <Sequence /><Swimlane /><ForkJoin /><LoopFlow />
    </Section>
  );
}

/* shared atoms */
function FNode({ x, y, w = 200, h = 72, label, sub, hot, kind = 'rect' }) {
  const fill = hot ? 'var(--accent)' : 'var(--bg-card)';
  const stroke = hot ? 'var(--accent)' : 'var(--line-2)';
  const tColor = hot ? 'var(--bg)' : 'var(--fg)';
  const sColor = hot ? 'rgba(0,0,0,.55)' : 'var(--fg-3)';
  const fontFamily = 'var(--f-cn)';
  if (kind === 'diamond') {
    return (
      <g>
        <polygon points={`${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`} fill={fill} stroke={stroke} strokeWidth="1.25" />
        <text x={x + w / 2} y={y + h / 2 + 6} textAnchor="middle" fontFamily={fontFamily} fontSize="18" fontWeight="700" fill={tColor}>{label}</text>
      </g>
    );
  }
  if (kind === 'circle') {
    const r = h / 2;
    return (
      <g>
        <circle cx={x + w / 2} cy={y + r} r={r} fill={fill} stroke={stroke} strokeWidth="1.25" />
        <text x={x + w / 2} y={y + r + 6} textAnchor="middle" fontFamily={fontFamily} fontSize="18" fontWeight="700" fill={tColor}>{label}</text>
      </g>
    );
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={fill} stroke={stroke} strokeWidth="1.25" />
      {/* 左侧 accent rail (仅非 hot) */}
      {!hot && <rect x={x} y={y} width="3" height={h} fill="var(--accent)" opacity="0.4" />}
      {sub && <text x={x + 16} y={y + 24} fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.18em" fill={sColor}>{sub}</text>}
      <text x={x + 16} y={y + (sub ? 56 : h / 2 + 7)} fontFamily={fontFamily} fontSize="19" fontWeight="700" fill={tColor} letterSpacing="-0.005em">{label}</text>
    </g>
  );
}

function FArrow({ x1, y1, x2, y2, hot, dashed, label }) {
  const c = hot ? 'var(--accent)' : 'var(--line-3)';
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len, uy = dy / len;
  const tipX = x2 - ux * 10, tipY = y2 - uy * 10;
  // 10px triangle arrow at tip (open V-style)
  const ax1 = tipX - uy * 4, ay1 = tipY + ux * 4;
  const ax2 = tipX + uy * 4, ay2 = tipY - ux * 4;
  return (
    <g>
      <line x1={x1} y1={y1} x2={tipX} y2={tipY} stroke={c} strokeWidth="1.25" strokeDasharray={dashed ? '4 4' : undefined} />
      <polygon points={`${x2},${y2} ${ax1},${ay1} ${ax2},${ay2}`} fill={c} />
      {label && (
        <g>
          <rect x={(x1 + x2) / 2 - 28} y={(y1 + y2) / 2 - 18} width="56" height="16" fill="var(--bg)" rx="2" />
          <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 6} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.18em" fill={hot ? 'var(--accent)' : 'var(--fg-3)'}>{label}</text>
        </g>
      )}
    </g>
  );
}

/* ── B1 · 复杂流程图（showcase 升级版） ── */
function ComplexFlow() {
  const stages = [
    { x: 60,   l: '用户提问',   s: '01 QUERY',    t: '12 ms' },
    { x: 250,  l: '改写检索词', s: '02 REWRITE',  t: '48 ms' },
    { x: 440,  l: '向量检索',   s: '03 RETRIEVE', t: '220 ms', hot: true },
    { x: 630,  l: '重排筛选',   s: '04 RERANK',   t: '180 ms', hot: true },
    { x: 820,  l: '组装上下文', s: '05 COMPOSE',  t: '8 ms' },
    { x: 1010, l: '生成答案',   s: '06 GENERATE', t: '1.2 s' },
    { x: 1200, l: '引用对齐',   s: '07 CITE',     t: '34 ms' },
  ];
  return (
    <SubSec name="B1 · 复杂流程 · Multi-step" tag="EXTENDED LINEAR FLOW">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B1">
        {/* 头部：左标题 / 右元数据 */}
        <div style={{ position: 'absolute', top: '6%', left: '5%', right: '5%', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● PIPELINE · 7 STAGES</div>
            <div className="cn" style={{ fontSize: 30, fontWeight: 800, marginTop: 6, letterSpacing: '-0.01em' }}>
              RAG · 从问题到<span className="serif" style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>引用</span>对齐
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>P50 LATENCY · 1.7 S</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)', marginTop: 4 }}>CORE · STAGE 03-04</div>
          </div>
        </div>
        <svg viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* 上下导轨 */}
          <line x1="60" y1="260" x2="1340" y2="260" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />
          <line x1="60" y1="480" x2="1340" y2="480" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />
          {/* 节点 */}
          {stages.map((n, i, a) => (
            <g key={i}>
              <FNode x={n.x} y={310} w={170} h={108} label={n.l} sub={n.s} hot={n.hot} />
              {/* 上方 tick + 编号 */}
              <line x1={n.x + 85} y1={260} x2={n.x + 85} y2={300} stroke={n.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" />
              <text x={n.x + 85} y={244} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.2em" fill="var(--fg-3)">T+{i + 1}</text>
              {/* 下方耗时 */}
              <text x={n.x + 85} y={448} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="13" fontWeight="600" fill={n.hot ? 'var(--accent)' : 'var(--fg-2)'}>{n.t}</text>
              <text x={n.x + 85} y={466} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.16em" fill="var(--fg-3)">LAT</text>
              {i < a.length - 1 && <FArrow x1={n.x + 170} y1={364} x2={a[i + 1].x} y2={364} hot={n.hot && a[i + 1].hot} />}
            </g>
          ))}
          {/* 高亮 cluster */}
          <rect x="430" y="288" width="380" height="152" rx="8" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.7" />
          <rect x="535" y="278" width="170" height="20" fill="var(--bg)" />
          <text x="620" y="292" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.2em" fill="var(--accent)">★ CORE RETRIEVAL</text>
          {/* 底部 hairline */}
          <line x1="60" y1="620" x2="1340" y2="620" stroke="var(--line)" strokeWidth="1" />
          <text x="60"   y="650" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.2em" fill="var(--fg-3)">SOLID = SYNC</text>
          <text x="260"  y="650" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.2em" fill="var(--fg-3)">DASHED = ASYNC</text>
          <text x="1340" y="650" textAnchor="end" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.2em" fill="var(--fg-3)">FIG · 07.B1</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'NODE',    v: '170×108 · mono sub + 中文 label · hairline' },
        { k: 'CHROME',  v: '上 tick+T+N · 下 latency · 双虚线导轨' },
        { k: 'CLUSTER', v: '虚线框 + 反白标签 (圈出重点段)' },
        { k: 'HOT',     v: '高亮段 fill accent · 同时点亮 tick / latency' },
      ]} />
    </SubSec>
  );
}

/* ── B2 · 分支流程 ── */
function Branching() {
  return (
    <SubSec name="B2 · 分支流程 · Branching" tag="IF / ELSE">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B2">
        <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <FNode x={500} y={40}  w={200} h={72} label="收到请求" sub="START" />
          <FNode x={460} y={210} w={280} h={88} label="缓存命中？" kind="diamond" />
          <FNode x={120} y={400} w={240} h={72} label="返回缓存" sub="HIT · YES" hot />
          <FNode x={840} y={400} w={240} h={72} label="调用模型" sub="MISS · NO" />
          <FNode x={840} y={530} w={240} h={64} label="写入缓存" sub="UPDATE" />
          <FArrow x1={600} y1={112} x2={600} y2={210} />
          <FArrow x1={460} y1={254} x2={240} y2={400} label="YES" hot />
          <FArrow x1={740} y1={254} x2={960} y2={400} label="NO" />
          <FArrow x1={960} y1={472} x2={960} y2={530} />
        </svg>
      </Stage>
      <Params rows={[
        { k: 'DECISION', v: '菱形节点 · 中心问句' },
        { k: 'LABEL', v: 'YES / NO 标在线中点 mono caps' },
        { k: 'PATH', v: '主路径 (常态/成功) accent' },
      ]} />
    </SubSec>
  );
}

/* ── B3 · 决策树 ── */
function DecisionTree() {
  return (
    <SubSec name="B3 · 决策树 · Decision Tree" tag="MULTI-LEVEL JUDGMENT">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B3">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>SHOULD I USE RAG?</div>
        </div>
        <svg viewBox="0 0 1400 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* root */}
          <FNode x={580} y={50}  w={240} h={80} label="数据私有？" kind="diamond" />
          {/* level 2 */}
          <FNode x={280} y={240} w={240} h={80} label="更新频繁？" kind="diamond" />
          <FNode x={880} y={240} w={240} h={80} label="知识截止够？" kind="diamond" />
          {/* leaves */}
          <FNode x={40}  y={460} w={200} h={64} label="RAG ✓" hot />
          <FNode x={300} y={460} w={200} h={64} label="微调" />
          <FNode x={620} y={460} w={200} h={64} label="联网检索" />
          <FNode x={900} y={460} w={200} h={64} label="原生 LLM" />
          {/* arrows */}
          <FArrow x1={700} y1={130} x2={400} y2={240} label="YES" hot />
          <FArrow x1={700} y1={130} x2={1000} y2={240} label="NO" />
          <FArrow x1={360} y1={320} x2={140} y2={460} label="YES" hot />
          <FArrow x1={440} y1={320} x2={400} y2={460} label="NO" />
          <FArrow x1={960} y1={320} x2={720} y2={460} label="NO" />
          <FArrow x1={1040} y1={320} x2={1000} y2={460} label="YES" />
        </svg>
      </Stage>
      <Params rows={[
        { k: 'TREE', v: '根 → 决策菱形 → 叶矩形' },
        { k: 'LEAF', v: '终端节点宽 200 矮 · 推荐项 accent' },
        { k: 'EDGE', v: '主推荐路径 全程 accent 高亮' },
      ]} />
    </SubSec>
  );
}

/* ── B4 · 状态机 ── */
function StateMachine() {
  return (
    <SubSec name="B4 · 状态机 · State Machine" tag="STATES WITH TRANSITIONS">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B4">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>AGENT STATE MACHINE</div>
        </div>
        <svg viewBox="0 0 1300 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <FNode x={100} y={260} w={180} h={120} label="IDLE" kind="circle" />
          <FNode x={500} y={120} w={180} h={120} label="THINKING" kind="circle" hot />
          <FNode x={1000} y={260} w={180} h={120} label="ACTING" kind="circle" />
          <FNode x={500} y={420} w={180} h={120} label="WAITING" kind="circle" />
          <FArrow x1={280} y1={320} x2={500} y2={180} label="INVOKE" hot />
          <FArrow x1={680} y1={180} x2={1000} y2={320} label="PLAN" hot />
          <FArrow x1={1000} y1={320} x2={680} y2={480} label="CALL" />
          <FArrow x1={680} y1={480} x2={500} y2={480} dashed label="RESULT" />
          <FArrow x1={500} y1={480} x2={280} y2={320} label="DONE" />
          {/* self-loop on THINKING */}
          <path d="M 590 120 C 550 60, 650 60, 590 120" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="590" y="48" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.16em" fill="var(--accent)">REFLECT</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'STATE', v: '圆形节点 · 名字 mono caps' },
        { k: 'TRANSITION', v: '箭头上方标事件名' },
        { k: 'SELF-LOOP', v: '弧形 · 表示自循环 (reflect / retry)' },
      ]} />
    </SubSec>
  );
}

/* ── B5 · 时序图 ── */
function Sequence() {
  const actors = ['用户', 'Frontend', 'API', 'LLM', 'DB'];
  const aw = 1300, ah = 640;
  const step = aw / (actors.length + 1);
  const calls = [
    { from: 0, to: 1, y: 130, l: 'submit(query)' },
    { from: 1, to: 2, y: 200, l: 'POST /chat' },
    { from: 2, to: 4, y: 270, l: 'embed + search', hot: true },
    { from: 4, to: 2, y: 320, l: 'chunks', dashed: true },
    { from: 2, to: 3, y: 390, l: 'complete()', hot: true },
    { from: 3, to: 2, y: 440, l: 'stream', dashed: true },
    { from: 2, to: 1, y: 500, l: 'SSE response', dashed: true },
    { from: 1, to: 0, y: 560, l: 'render', dashed: true },
  ];
  return (
    <SubSec name="B5 · 时序图 · Sequence" tag="API / INTERACTION TIMELINE">
      <Stage pattern="grid" label="● B-ROLL · FLOW" labelR="07.B5">
        <svg viewBox={`0 0 ${aw} ${ah}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {actors.map((a, i) => {
            const x = (i + 1) * step;
            return (
              <g key={i}>
                <rect x={x - 70} y={40} width={140} height={48} rx="6" fill="var(--bg-card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x={x} y={70} textAnchor="middle" fontFamily="var(--f-cn)" fontSize="18" fontWeight="600" fill="var(--fg)">{a}</text>
                <line x1={x} x2={x} y1={88} y2={ah - 20} stroke="var(--line)" strokeWidth="1" strokeDasharray="4 4" />
              </g>
            );
          })}
          {calls.map((c, i) => {
            const x1 = (c.from + 1) * step;
            const x2 = (c.to + 1) * step;
            return <FArrow key={i} x1={x1} y1={c.y} x2={x2} y2={c.y} hot={c.hot} dashed={c.dashed} label={c.l} />;
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'ACTOR', v: '顶部矩形 · 下垂虚线为生命线' },
        { k: 'CALL', v: '实线 = 同步请求 · 虚线 = 响应 / 异步' },
        { k: 'HOT', v: '关键调用 accent (主路径)' },
      ]} />
    </SubSec>
  );
}

/* ── B6 · 泳道图 ── */
function Swimlane() {
  const lanes = ['用户', 'AI', '人工'];
  const w = 1300, h = 580;
  const laneH = (h - 60) / lanes.length;
  const steps = [
    { lane: 0, x: 60,   l: '上传图片', s: 'INPUT' },
    { lane: 1, x: 280,  l: '自动标注', s: 'AUTO-LABEL', hot: true },
    { lane: 1, x: 500,  l: '置信度<0.7?', s: 'CHECK', kind: 'diamond' },
    { lane: 2, x: 760,  l: '人工复核', s: 'REVIEW', hot: true },
    { lane: 1, x: 1000, l: '回流训练', s: 'FEEDBACK' },
  ];
  const edges = [
    { a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3, label: 'YES', hot: true }, { a: 2, b: 4, label: 'NO' }, { a: 3, b: 4 },
  ];
  const cx = (s) => s.x + 100;
  const cy = (s) => 60 + s.lane * laneH + laneH / 2;
  return (
    <SubSec name="B6 · 泳道图 · Swimlane" tag="MULTI-ROLE PROCESS">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B6">
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {lanes.map((name, i) => (
            <g key={i}>
              <rect x={0} y={60 + i * laneH} width={w} height={laneH} fill={i % 2 ? 'rgba(255,255,255,.015)' : 'transparent'} stroke="var(--line)" strokeWidth="1" />
              <text x={20} y={60 + i * laneH + 24} fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.16em" fill="var(--accent)">LANE 0{i + 1}</text>
              <text x={20} y={60 + i * laneH + 50} fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--fg)">{name}</text>
            </g>
          ))}
          {steps.map((s, i) => (
            <FNode key={i} x={s.x + 100} y={cy(s) - 36} w={180} h={72} label={s.l} sub={s.s} hot={s.hot} kind={s.kind} />
          ))}
          {edges.map((e, i) => {
            const sa = steps[e.a], sb = steps[e.b];
            const x1 = sa.x + 100 + 180, y1 = cy(sa);
            const x2 = sb.x + 100, y2 = cy(sb);
            return <FArrow key={i} x1={x1} y1={y1} x2={x2} y2={y2} label={e.label} hot={e.hot} />;
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'LANE', v: '横条 · 左侧 mono 标号 + 中文角色名' },
        { k: 'NODE', v: '位置编码角色 (在哪条泳道 = 谁来做)' },
        { k: 'HANDOFF', v: '跨泳道箭头 = 责任移交' },
      ]} />
    </SubSec>
  );
}

/* ── B7 · 并行 / 汇合 ── */
function ForkJoin() {
  return (
    <SubSec name="B7 · 并行 / 汇合 · Fork-Join" tag="PARALLEL EXECUTION">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B7">
        <svg viewBox="0 0 1300 600" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <FNode x={40} y={260} w={200} h={80} label="主控 Agent" sub="ORCHESTRATOR" hot />
          {/* fork bar */}
          <rect x={320} y={290} width={6} height={20} fill="var(--accent)" />
          <line x1={326} y1={300} x2={420} y2={120} stroke="var(--accent)" strokeWidth="1.5" />
          <line x1={326} y1={300} x2={420} y2={300} stroke="var(--accent)" strokeWidth="1.5" />
          <line x1={326} y1={300} x2={420} y2={480} stroke="var(--accent)" strokeWidth="1.5" />
          <text x={300} y={285} fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.16em" fill="var(--accent)" textAnchor="end">FORK</text>
          {/* parallel workers */}
          <FNode x={440} y={80} w={240} h={80} label="搜索 Agent" sub="WORKER 01" />
          <FNode x={440} y={260} w={240} h={80} label="计算 Agent" sub="WORKER 02" />
          <FNode x={440} y={440} w={240} h={80} label="检索 Agent" sub="WORKER 03" />
          {/* join bar */}
          <line x1={760} y1={120} x2={860} y2={300} stroke="var(--accent)" strokeWidth="1.5" />
          <line x1={760} y1={300} x2={860} y2={300} stroke="var(--accent)" strokeWidth="1.5" />
          <line x1={760} y1={480} x2={860} y2={300} stroke="var(--accent)" strokeWidth="1.5" />
          <rect x={860} y={290} width={6} height={20} fill="var(--accent)" />
          <text x={880} y={285} fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.16em" fill="var(--accent)">JOIN</text>
          <FArrow x1={866} y1={300} x2={1040} y2={300} />
          <FNode x={1040} y={260} w={220} h={80} label="合并结果" sub="MERGE" hot />
        </svg>
      </Stage>
      <Params rows={[
        { k: 'FORK BAR', v: '6×20 实心条 · accent 表示分发' },
        { k: 'WORKERS', v: '并排堆叠 · 数量 = 并发度' },
        { k: 'JOIN', v: '镜像 fork · 等所有 worker 完成' },
      ]} />
    </SubSec>
  );
}

/* ── B8 · 循环流程 ── */
function LoopFlow() {
  return (
    <SubSec name="B8 · 循环流程 · Loop" tag="ITERATIVE OPTIMIZATION">
      <Stage pattern="dot" label="● B-ROLL · FLOW" labelR="07.B8">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>RLHF · 4-STEP LOOP</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>训练 → 推理 → 评估 → 再训练</div>
        </div>
        <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* 4 nodes in a square */}
          <FNode x={420} y={120} w={220} h={80} label="生成响应" sub="01 · GENERATE" />
          <FNode x={780} y={260} w={220} h={80} label="人工评分" sub="02 · LABEL" hot />
          <FNode x={420} y={420} w={220} h={80} label="奖励模型" sub="03 · REWARD" />
          <FNode x={120} y={260} w={220} h={80} label="策略更新" sub="04 · UPDATE" hot />
          {/* curved arrows around */}
          <path d="M 640 160 C 760 160, 830 200, 830 260" fill="none" stroke="var(--line-3)" strokeWidth="1.5" markerEnd="" />
          <path d="M 890 340 C 890 400, 760 460, 640 460" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          <path d="M 420 460 C 300 460, 230 400, 230 340" fill="none" stroke="var(--line-3)" strokeWidth="1.5" />
          <path d="M 290 260 C 290 200, 360 160, 420 160" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          {/* arrow tips */}
          <polygon points="830,260 822,250 838,250" fill="var(--line-3)" />
          <polygon points="640,460 650,452 650,468" fill="var(--accent)" />
          <polygon points="230,340 222,330 238,330" fill="var(--line-3)" />
          <polygon points="420,160 410,152 410,168" fill="var(--accent)" />
          {/* center label */}
          <text x="600" y="310" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="14" letterSpacing="0.2em" fill="var(--accent)">∞ ITERATE</text>
          <text x="600" y="340" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="18" fontWeight="600" fill="var(--fg-2)">直到指标收敛</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '4 节点环形排列 · 不要堆成线' },
        { k: 'EDGE', v: '弧线 · 形成闭环视觉' },
        { k: 'CENTER', v: '中心写 ∞ + 退出条件' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { FlowsSection });
