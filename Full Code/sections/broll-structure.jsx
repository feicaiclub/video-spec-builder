/* ================================================================
   sections/broll-structure.jsx — 02 · 结构图
   ================================================================ */

function StructureSection() {
  return (
    <Section id="structure" num="02" title="B-roll · 结构图"
      desc="讲<b>流程 · 层级 · 收敛 · 包含</b>关系时用。每张图遵守同一条：<em>一根 hairline · 一个 mono 标签 · 一种强调色</em>。">
      <FlowChart />
      <Pyramid />
      <Funnel />
      <Concentric />
      <NodeGraph />
      <Spectrum />
    </Section>
  );
}

/* ---------- 流程图 ---------- */
function FlowChart() {
  const [hot, setHot] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setHot(h => (h + 1) % 4), 900);
    return () => clearInterval(id);
  }, []);
  const steps = [
    { en: 'COLLECT', cn: '收集证据' },
    { en: 'ANALYZE', cn: '分析模式' },
    { en: 'LOCATE',  cn: '定位根因' },
    { en: 'VERIFY',  cn: '验证修复' },
  ];
  return (
    <SubSec name="流程图 · Flow Chart" tag="LINEAR PROCESS">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.A">
        <div style={{
          position: 'absolute', inset: '20% 6%',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          alignItems: 'center',
        }}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div style={{
                padding: '28px 32px',
                background: i === hot ? 'var(--bg-card)' : 'transparent',
                border: i === hot ? '1px solid var(--accent)' : '1px solid var(--line)',
                borderRadius: 8,
                transition: 'all 400ms var(--ease-out)',
                opacity: i === hot ? 1 : i < hot ? 1 : 0.5,
              }}>
                <div className="meta" style={{ marginBottom: 14, color: i === hot ? 'var(--accent)' : 'var(--fg-3)' }}>
                  {String(i + 1).padStart(2, '0')} · {s.en}
                </div>
                <div className="cn" style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.005em' }}>{s.cn}</div>
              </div>
              {i < 3 && (
                <div style={{ height: 1, background: i < hot ? 'var(--accent)' : 'var(--line-2)', width: '100%', position: 'relative', transition: 'background 400ms' }}>
                  <div style={{ position: 'absolute', right: -1, top: -3, width: 0, height: 0, borderLeft: '7px solid', borderLeftColor: i < hot ? 'var(--accent)' : 'var(--line-3)', borderTop: '4px solid transparent', borderBottom: '4px solid transparent', transition: 'border-left-color 400ms' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'NODE', v: 'hairline → solid accent (hot)' },
        { k: 'ARROW', v: '1px line + 7px 三角箭头' },
        { k: 'RHYTHM', v: '900ms / step' },
        { k: 'PAST', v: '线 / 箭头变 accent · 节点正常' },
        { k: 'FUTURE', v: '透明度 0.5' },
      ]} />
    </SubSec>
  );
}

/* ---------- 金字塔 ---------- */
function Pyramid() {
  const layers = [
    { w: '32%', en: 'PEAK',   cn: '顶层 · 战略',  sub: '少而决定性' },
    { w: '52%', en: 'BRIDGE', cn: '中层 · 方法', sub: '可复用模式' },
    { w: '72%', en: 'BASE',   cn: '底层 · 执行', sub: '大量 / 重复' },
  ];
  return (
    <SubSec name="金字塔 · Pyramid" tag="HIERARCHY">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.B">
        <div style={{ position: 'absolute', inset: '12% 8%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {layers.map((l, i) => (
            <div key={i} style={{
              width: l.w,
              border: '1px solid var(--line-2)',
              padding: '28px 32px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'var(--bg-card)',
              borderRadius: 4,
            }}>
              <div>
                <div className="meta" style={{ marginBottom: 4, color: i === 0 ? 'var(--accent)' : 'var(--fg-3)' }}>{String(i + 1).padStart(2, '0')} · {l.en}</div>
                <div className="cn" style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.005em' }}>{l.cn}</div>
              </div>
              <div className="cn" style={{ fontSize: 40, color: 'var(--fg-3)' }}>{l.sub}</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'WIDTHS', v: '32% / 52% / 72% — 黄金比' },
        { k: 'GAP', v: '8px · 不重叠' },
        { k: 'TOP HIGHLIGHT', v: '顶层 mono 标签 accent · 其余 fg-3' },
      ]} />
    </SubSec>
  );
}

/* ---------- 漏斗 ---------- */
function Funnel() {
  const stages = [
    { w: '80%', en: 'AWARE',    cn: '看见',   stat: '10,000' },
    { w: '58%', en: 'TRY',      cn: '试用',   stat: '1,800' },
    { w: '40%', en: 'COMMIT',   cn: '留存',   stat: '420' },
    { w: '22%', en: 'EVANGELIZE', cn: '传播', stat: '38' },
  ];
  return (
    <SubSec name="漏斗 · Funnel" tag="CONVERSION">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.C">
        <div style={{ position: 'absolute', inset: '10% 8%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
          {stages.map((s, i) => (
            <div key={i} style={{
              width: s.w,
              border: '1px solid var(--line-2)',
              background: i === stages.length - 1 ? 'var(--bg-card)' : 'transparent',
              borderColor: i === stages.length - 1 ? 'var(--accent)' : 'var(--line-2)',
              padding: '28px 32px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderRadius: 4,
            }}>
              <div>
                <div className="meta" style={{ color: i === stages.length - 1 ? 'var(--accent)' : 'var(--fg-3)' }}>{s.en}</div>
                <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>{s.cn}</div>
              </div>
              <div className="mono" style={{ fontSize: 40, fontWeight: 600, color: i === stages.length - 1 ? 'var(--accent)' : 'var(--fg-2)' }}>{s.stat}</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'WIDTHS', v: '80 → 58 → 40 → 22%' },
        { k: 'BOTTOM', v: 'accent 边框 · 最终留存' },
        { k: 'DATA COL', v: '右对齐 mono 数字' },
      ]} />
    </SubSec>
  );
}

/* ---------- 同心圆 ---------- */
function Concentric() {
  const rings = [
    { r: 240, en: 'BUSINESS',   cn: '业务' },
    { r: 180, en: 'PRODUCT',    cn: '产品' },
    { r: 120, en: 'EXPERIENCE', cn: '体验' },
    { r:  60, en: 'CORE',       cn: '核心' },
  ];
  return (
    <SubSec name="同心圆 · Concentric" tag="NESTED SCOPE">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.D">
        <svg viewBox="-300 -200 600 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {rings.map((r, i) => (
            <g key={i}>
              <circle cx="0" cy="0" r={r.r} fill={i === rings.length - 1 ? 'var(--bg-card)' : 'transparent'} stroke={i === rings.length - 1 ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1" />
              <text x={r.r - 8} y="-4" textAnchor="end" fontSize="10" fontFamily="var(--f-mono)" letterSpacing="2" fill={i === rings.length - 1 ? 'var(--accent)' : 'var(--fg-3)'}>{r.en}</text>
              <text x={r.r - 8} y="12" textAnchor="end" fontSize="13" fontWeight="700" fontFamily="var(--f-cn)" fill="var(--fg-2)">{r.cn}</text>
            </g>
          ))}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'RADII', v: '60 · 120 · 180 · 240' },
        { k: 'LABELS', v: '环顶部 · 右对齐 · mono + cn 双行' },
        { k: 'CORE', v: '填 bg-card + accent 描边' },
      ]} />
    </SubSec>
  );
}

/* ---------- 节点图 ---------- */
function NodeGraph() {
  const nodes = [
    { id: 'input',  x: 12, y: 50, en: 'INPUT',  cn: '输入',  hot: false },
    { id: 'router', x: 36, y: 50, en: 'ROUTER', cn: '路由',  hot: true },
    { id: 'a',      x: 64, y: 28, en: 'TOOL A', cn: '搜索',  hot: false },
    { id: 'b',      x: 64, y: 72, en: 'TOOL B', cn: '生成',  hot: false },
    { id: 'out',    x: 88, y: 50, en: 'OUTPUT', cn: '输出',  hot: false },
  ];
  const edges = [
    ['input', 'router'], ['router', 'a'], ['router', 'b'], ['a', 'out'], ['b', 'out'],
  ];
  const find = (id) => nodes.find(n => n.id === id);
  return (
    <SubSec name="节点图 · Node Graph" tag="ROUTING / WORKFLOW">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.E">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {edges.map(([a, b], i) => {
            const A = find(a), B = find(b);
            return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--line-2)" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />;
          })}
        </svg>
        {nodes.map(n => (
          <div key={n.id} style={{
            position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%, -50%)',
            background: n.hot ? 'var(--bg-card)' : 'var(--bg)',
            border: n.hot ? '1px solid var(--accent)' : '1px solid var(--line-2)',
            borderRadius: 6, padding: '28px 32px', minWidth: 86, textAlign: 'center',
          }}>
            <div className="meta" style={{ color: n.hot ? 'var(--accent)' : 'var(--fg-3)', marginBottom: 2 }}>{n.en}</div>
            <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>{n.cn}</div>
          </div>
        ))}
      </Stage>
      <Params rows={[
        { k: 'EDGE', v: '1px line-2 · 不加箭头美化' },
        { k: 'NODE', v: '6px radius · padding 8/14' },
        { k: 'HOT', v: 'accent 描边 + bg-card 填充' },
      ]} />
    </SubSec>
  );
}

/* ---------- 谱系图 ---------- */
function Spectrum() {
  return (
    <SubSec name="谱系图 · Spectrum" tag="OPPOSITE AXIS">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.F">
        <div style={{ position: 'absolute', inset: '32% 8%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
            <div>
              <div className="meta" style={{ marginBottom: 4 }}>← LEFT POLE</div>
              <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>规则驱动</div>
            </div>
            <div className="meta">SPECTRUM</div>
            <div style={{ textAlign: 'right' }}>
              <div className="meta" style={{ marginBottom: 4 }}>RIGHT POLE →</div>
              <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>智能体驱动</div>
            </div>
          </div>
          <div style={{ position: 'relative', height: 1, background: 'var(--line-2)' }}>
            <div style={{ position: 'absolute', left: 0, top: -3, width: 7, height: 7, background: 'var(--fg-2)', borderRadius: '50%', transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', right: 0, top: -3, width: 7, height: 7, background: 'var(--fg-2)', borderRadius: '50%', transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', left: '68%', top: -7, width: 14, height: 14, background: 'var(--accent)', borderRadius: '50%' }} />
          </div>
          <div style={{ position: 'relative', height: 24, marginTop: 12 }}>
            <div className="meta" style={{ position: 'absolute', left: '68%', transform: 'translateX(-50%)', color: 'var(--accent)' }}>当前 · CURRENT</div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: '1px line-2 · 全宽' },
        { k: 'POLE DOTS', v: '7px 圆 · fg-2' },
        { k: 'MARKER', v: '14px 圆 · accent' },
        { k: 'USE', v: '讲对立 / 演进位置' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { StructureSection });
