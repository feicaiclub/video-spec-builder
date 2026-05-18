/* ================================================================
   sections/broll-structures2.jsx — 08 · C 类 · 关系结构 7 款
   tree · mindmap · matrix-2x2 · venn · layered-stack ·
   hub-spoke · grid-map
   ================================================================ */

function Structures2Section() {
  return (
    <Section id="structures2" num="08" title="B-roll · 关系结构"
      desc="讲<b>层级 · 分类 · 定位 · 重叠</b>时用。共用语法：<em>hairline 边 + 形状即语义</em>（树=层级 / 矩阵=定位 / Venn=交集 / Stack=堆叠）。">
      <TreeChart /><MindMap /><Matrix2x2 /><VennDiagram />
      <LayeredStack /><HubSpoke /><GridMap />
    </Section>
  );
}

/* ── C6 · 树 / 组织图 ── */
function TreeChart() {
  return (
    <SubSec name="C6 · 树 · Tree / Taxonomy" tag="HIERARCHICAL CLASSIFICATION">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C6">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>LLM TAXONOMY</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>生成式模型的分类</div>
        </div>
        <svg viewBox="0 0 1400 580" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <FNode x={600} y={120} w={200} h={64} label="LLM" sub="ROOT" hot />
          {[
            { x: 120,  l: 'Encoder',    s: 'BERT 类' },
            { x: 460,  l: 'Decoder',    s: 'GPT 类', hot: true },
            { x: 800,  l: 'Encoder-Decoder', s: 'T5 类' },
            { x: 1140, l: 'MoE',        s: '稀疏激活' },
          ].map((n, i) => (
            <React.Fragment key={i}>
              <line x1={700} y1={184} x2={n.x + 140} y2={300} stroke={n.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" />
              <FNode x={n.x + 20} y={300} w={240} h={72} label={n.l} sub={n.s} hot={n.hot} />
            </React.Fragment>
          ))}
          {[
            { px: 480, x: 280, l: 'GPT-4' },
            { px: 480, x: 460, l: 'Claude' },
            { px: 480, x: 640, l: 'LLaMA' },
          ].map((n, i) => (
            <React.Fragment key={i}>
              <line x1={n.px + 120} y1={372} x2={n.x + 80} y2={460} stroke="var(--line-3)" strokeWidth="1" />
              <FNode x={n.x} y={460} w={160} h={56} label={n.l} />
            </React.Fragment>
          ))}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '上下三层 · 根 → 类 → 实例' },
        { k: 'EDGE', v: '直线连接 · 主分支 accent' },
        { k: 'NODE', v: '层级越深 · 矩形越小' },
      ]} />
    </SubSec>
  );
}

/* ── C7 · 思维导图 ── */
function MindMap() {
  const branches = [
    { angle: -150, l: '数据准备', sub: ['清洗', '标注', '增广'] },
    { angle:  -90, l: '模型训练', sub: ['超参', '损失', '调度'], hot: true },
    { angle:  -30, l: '评估', sub: ['离线', '在线', 'A/B'] },
    { angle:   30, l: '部署', sub: ['编排', '监控'] },
    { angle:   90, l: '反馈', sub: ['用户', '指标', '回流'], hot: true },
    { angle:  150, l: '安全', sub: ['对齐', '红队'] },
  ];
  const cx = 700, cy = 320, r1 = 220, r2 = 360;
  const polar = (a, r) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  return (
    <SubSec name="C7 · 思维导图 · Mind Map" tag="RADIAL DECOMPOSITION">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C7">
        <svg viewBox="0 0 1400 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* center */}
          <circle cx={cx} cy={cy} r="64" fill="var(--accent)" />
          <text x={cx} y={cy + 6} textAnchor="middle" fontFamily="var(--f-cn)" fontSize="20" fontWeight="800" fill="var(--bg)">ML 系统</text>
          {branches.map((b, i) => {
            const [x1, y1] = polar(b.angle, r1);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={b.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" />
                <circle cx={x1} cy={y1} r="8" fill={b.hot ? 'var(--accent)' : 'var(--fg-2)'} />
                <text x={x1 + (Math.cos(b.angle * Math.PI / 180) > 0 ? 18 : -18)} y={y1 + 6} textAnchor={Math.cos(b.angle * Math.PI / 180) > 0 ? 'start' : 'end'} fontFamily="var(--f-cn)" fontSize="20" fontWeight="800" fill={b.hot ? 'var(--accent)' : 'var(--fg)'}>{b.l}</text>
                {b.sub.map((s, si) => {
                  const a2 = b.angle + (si - (b.sub.length - 1) / 2) * 8;
                  const [x2, y2] = polar(a2, r2);
                  return (
                    <g key={si}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line-3)" strokeWidth="1" />
                      <text x={x2 + (Math.cos(a2 * Math.PI / 180) > 0 ? 12 : -12)} y={y2 + 4} textAnchor={Math.cos(a2 * Math.PI / 180) > 0 ? 'start' : 'end'} fontFamily="var(--f-cn)" fontSize="14" fill="var(--fg-2)">{s}</text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'CENTER', v: '实心 accent 圆 · 主题字反色' },
        { k: 'BRANCH', v: '一级文字粗 800 · 二级 14px' },
        { k: 'ANGLE', v: '主分支均匀放射 · 子分支微角度偏移' },
      ]} />
    </SubSec>
  );
}

/* ── C8 · 2x2 矩阵 ── */
function Matrix2x2() {
  const items = [
    { qx: 0, qy: 0, x: 22, y: 28, l: '研究模型' },
    { qx: 1, qy: 0, x: 78, y: 22, l: 'GPT-4', hot: true },
    { qx: 1, qy: 0, x: 68, y: 38, l: 'Claude', hot: true },
    { qx: 0, qy: 1, x: 28, y: 72, l: 'GPT-3.5' },
    { qx: 1, qy: 1, x: 72, y: 78, l: 'Sonnet' },
    { qx: 1, qy: 1, x: 82, y: 62, l: 'Gemini' },
  ];
  return (
    <SubSec name="C8 · 2x2 矩阵 · Matrix" tag="POSITIONING / QUADRANTS">
      <Stage pattern="grid" label="● B-ROLL · STRUCT" labelR="08.C8">
        <div style={{ position: 'absolute', inset: '8% 8% 8% 8%' }}>
          {/* axes */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--line-2)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--line-2)' }} />
          </div>
          {/* quadrant labels */}
          <div className="meta" style={{ position: 'absolute', top: 8, left: 16, color: 'var(--fg-3)' }}>LOW COST · LOW QUALITY</div>
          <div className="meta" style={{ position: 'absolute', top: 8, right: 16, color: 'var(--accent)' }}>★ HIGH COST · HIGH QUALITY</div>
          <div className="meta" style={{ position: 'absolute', bottom: 8, left: 16, color: 'var(--fg-3)' }}>SWEET SPOT (TARGET)</div>
          <div className="meta" style={{ position: 'absolute', bottom: 8, right: 16, color: 'var(--fg-3)' }}>OVERSPEND</div>
          {/* axis labels */}
          <div className="mono" style={{ position: 'absolute', left: '-3%', top: '50%', transform: 'rotate(-90deg) translateX(50%)', fontSize: 14, color: 'var(--fg-2)' }}>↑ QUALITY</div>
          <div className="mono" style={{ position: 'absolute', right: '46%', bottom: '-6%', fontSize: 14, color: 'var(--fg-2)' }}>COST →</div>
          {/* dots */}
          {items.map((it, i) => (
            <div key={i} style={{ position: 'absolute', left: `${it.x}%`, top: `${it.y}%`, transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: it.hot ? 18 : 12, height: it.hot ? 18 : 12, borderRadius: '50%', background: it.hot ? 'var(--accent)' : 'rgba(255,255,255,.22)', border: '1.5px solid', borderColor: it.hot ? 'var(--accent)' : 'var(--fg-2)' }} />
              <span className="cn" style={{ fontSize: 16, fontWeight: it.hot ? 800 : 500, color: it.hot ? 'var(--accent)' : 'var(--fg-2)' }}>{it.l}</span>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXES', v: '十字 hairline · 四角注象限名' },
        { k: 'POINT', v: '色块 + 标签 · 重点项 accent + 800' },
        { k: 'STAR', v: '理想象限角落加 ★ 提示' },
      ]} />
    </SubSec>
  );
}

/* ── C9 · Venn 图 ── */
function VennDiagram() {
  return (
    <SubSec name="C9 · Venn 图" tag="INTERSECTION / UNION">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C9">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>AI ENGINEER · SKILL OVERLAP</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>三角交集即"AI 工程师"</div>
        </div>
        <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <circle cx="500" cy="340" r="200" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="1.5" />
          <circle cx="700" cy="340" r="200" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
          <circle cx="600" cy="180" r="200" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
          <text x="600" y="80" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--fg)">软件工程</text>
          <text x="340" y="380" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--accent)">ML 知识</text>
          <text x="860" y="380" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--fg)">产品直觉</text>
          {/* center intersection */}
          <circle cx="600" cy="300" r="6" fill="var(--accent)" />
          <text x="600" y="290" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.16em" fill="var(--accent)">★ INTERSECTION</text>
          <text x="600" y="330" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="20" fontWeight="800" fill="var(--fg)">AI 工程师</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'CIRCLE', v: '半透明填充 · hairline 描边' },
        { k: 'HIGHLIGHT', v: '主圈 accent 18% · 其它白 6%' },
        { k: 'INTERSECT', v: '交集中心 ★ + 名词 (整图灵魂)' },
      ]} />
    </SubSec>
  );
}

/* ── C10 · 分层堆栈 ── */
function LayeredStack() {
  const layers = [
    { l: 'L7 · UI',       sub: 'React · Vue', },
    { l: 'L6 · API',      sub: 'REST · GraphQL · WS' },
    { l: 'L5 · 业务',     sub: '编排 / Agent / 工作流', hot: true },
    { l: 'L4 · 模型',     sub: 'LLM · Vision · Audio', hot: true },
    { l: 'L3 · 数据',     sub: 'Vector / Cache / DB' },
    { l: 'L2 · 计算',     sub: 'GPU · CPU · K8s' },
    { l: 'L1 · 硬件',     sub: 'H100 / TPU / 网络' },
  ];
  return (
    <SubSec name="C10 · 分层堆栈 · Layered Stack" tag="ARCHITECTURE LAYERS">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C10">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>AI APP · 7-LAYER STACK</div>
        </div>
        <div style={{ position: 'absolute', inset: '18% 10% 6% 10%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {layers.map((L, i) => (
            <div key={i} style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '180px 1fr 200px',
              alignItems: 'center',
              padding: '0 28px',
              background: L.hot ? 'var(--bg-card)' : 'transparent',
              border: '1px solid',
              borderColor: L.hot ? 'var(--accent)' : 'var(--line)',
              borderRadius: 6,
            }}>
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.16em', color: L.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{L.l}</div>
              <div className="cn" style={{ fontSize: 22, fontWeight: 800, color: L.hot ? 'var(--fg)' : 'var(--fg-2)' }}>{L.sub}</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.16em', color: 'var(--fg-3)', textAlign: 'right' }}>{L.hot ? '★ FOCUS' : ''}</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'STACK', v: '上窄下宽视觉错觉 · 实际等高更稳' },
        { k: 'L 编号', v: '左侧 mono · 从上往下递减' },
        { k: 'FOCUS', v: '当前讨论层 · 边框 accent' },
      ]} />
    </SubSec>
  );
}

/* ── C11 · Hub & Spoke ── */
function HubSpoke() {
  const spokes = [
    { angle: 0,    l: 'GitHub', s: 'CODE' },
    { angle: 60,   l: 'Slack', s: 'COMM' },
    { angle: 120,  l: 'Notion', s: 'DOCS', hot: true },
    { angle: 180,  l: 'Calendar', s: 'TIME' },
    { angle: 240,  l: 'Linear', s: 'TASK', hot: true },
    { angle: 300,  l: 'Email', s: 'INBOX' },
  ];
  const cx = 700, cy = 320, r = 240;
  return (
    <SubSec name="C11 · Hub & Spoke" tag="CENTRALIZED SYSTEM">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C11">
        <svg viewBox="0 0 1400 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {spokes.map((s, i) => {
            const x = cx + r * Math.cos(s.angle * Math.PI / 180);
            const y = cy + r * Math.sin(s.angle * Math.PI / 180);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={x} y2={y} stroke={s.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" strokeDasharray={s.hot ? undefined : '4 4'} />
                <FNode x={x - 100} y={y - 36} w={200} h={72} label={s.l} sub={s.s} hot={s.hot} />
              </g>
            );
          })}
          {/* hub */}
          <circle cx={cx} cy={cy} r="80" fill="var(--accent)" />
          <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="13" letterSpacing="0.2em" fill="rgba(0,0,0,.55)">HUB</text>
          <text x={cx} y={cy + 24} textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--bg)">AI Agent</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'HUB', v: '中心实心 accent 圆 80px' },
        { k: 'SPOKE', v: '6 个方向 · 主连虚线 + 重点实线' },
        { k: 'RULE', v: 'Hub 永远在视觉中心' },
      ]} />
    </SubSec>
  );
}

/* ── C12 · 网格地图 ── */
function GridMap() {
  // 8x5 cluster grid with active/idle/error states
  const cols = 12, rows = 6;
  const cells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const seed = (r * 7 + c * 13) % 11;
    let state = 'idle';
    if (seed < 5) state = 'active';
    else if (seed === 7) state = 'error';
    cells.push({ r, c, state });
  }
  const colorMap = { active: 'var(--accent)', idle: 'rgba(255,255,255,.16)', error: 'var(--red)' };
  return (
    <SubSec name="C12 · 网格地图 · Grid Map" tag="CLUSTER TOPOLOGY">
      <Stage pattern="grid" label="● B-ROLL · STRUCT" labelR="08.C12">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>GPU CLUSTER · 72 NODES</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>实时拓扑视图</div>
        </div>
        <div style={{ position: 'absolute', top: '6%', right: '6%', display: 'flex', gap: 18 }}>
          {[{ s: 'ACTIVE', c: colorMap.active, n: 32 }, { s: 'IDLE', c: colorMap.idle, n: 38 }, { s: 'ERROR', c: colorMap.error, n: 2 }].map(L => (
            <div key={L.s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 12, height: 12, background: L.c }} />
              <span className="mono" style={{ fontSize: 13, color: 'var(--fg-2)' }}>{L.s} · {L.n}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', inset: '30% 6% 8% 6%', display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`, gap: 8 }}>
          {cells.map((cell, i) => (
            <div key={i} style={{
              background: colorMap[cell.state],
              borderRadius: 2,
              animation: cell.state === 'active' ? 'pulse 2.4s ease-in-out infinite' : undefined,
              animationDelay: `${(cell.r + cell.c) * 0.08}s`,
            }} />
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'GRID', v: '12×6 单元格 · 间距 8px' },
        { k: 'STATE', v: '色映射：active accent · idle 16%白 · error red' },
        { k: 'ANIM', v: 'active 单元呼吸 pulse · 错位 delay' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { Structures2Section });
