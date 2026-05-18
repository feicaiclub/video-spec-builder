/* ================================================================
   sections/broll-charts.jsx — 06 · A 类 · 数据图表 12 款
   line / multi-line / bar / hbar / stacked / area / donut /
   scatter / heatmap / gauge / sparkline / sankey
   ================================================================ */

function ChartsSection() {
  return (
    <Section id="charts" num="06" title="B-roll · 数据图表"
      desc="讲<b>数字 · 趋势 · 占比 · 流量</b>时用。所有图共用一套渲染语法：<em>hairline 坐标轴 · mono 数字 · 单 accent 高亮关键点</em>。每屏最多 1 个主信息 + 2-3 个数据点。">
      <LineChart /><MultiLine /><BarChart /><HBarChart />
      <StackedBar /><AreaChart /><Donut /><Scatter />
      <Heatmap /><Gauge /><Sparkline /><Sankey />
    </Section>
  );
}

/* ── shared axis ── */
function Axis({ xLabels, yMax = 100, yStep = 25, padX = 80, padY = 60, w = 1000, h = 500 }) {
  const ys = [];
  for (let v = 0; v <= yMax; v += yStep) ys.push(v);
  const innerH = h - padY * 2;
  const innerW = w - padX * 2;
  return (
    <g>
      {/* y grid + labels */}
      {ys.map(v => {
        const y = h - padY - (v / yMax) * innerH;
        return (
          <g key={v}>
            <line x1={padX} x2={w - padX} y1={y} y2={y} stroke="rgba(255,255,255,.06)" strokeWidth="1" />
            <text x={padX - 14} y={y + 6} textAnchor="end" fontSize="16" fontFamily="var(--f-mono)" fill="rgba(255,255,255,.42)">{v}</text>
          </g>
        );
      })}
      {/* x labels */}
      {xLabels.map((l, i) => {
        const x = padX + (i / (xLabels.length - 1)) * innerW;
        return <text key={i} x={x} y={h - padY + 30} textAnchor="middle" fontSize="16" fontFamily="var(--f-mono)" letterSpacing="0.08em" fill="rgba(255,255,255,.42)">{l}</text>;
      })}
    </g>
  );
}

/* ── A1 · 折线图 ── */
function LineChart() {
  const pts = [12, 28, 22, 45, 38, 62, 78, 71, 88];
  const labels = ['W1','W2','W3','W4','W5','W6','W7','W8','W9'];
  const padX = 80, padY = 60, w = 1000, h = 500;
  const innerW = w - padX * 2, innerH = h - padY * 2;
  const path = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${padX + (i / (pts.length - 1)) * innerW} ${h - padY - (v / 100) * innerH}`).join(' ');
  return (
    <SubSec name="A1 · 折线图 · Line Chart" tag="TREND OVER TIME">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A1">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>WEEKLY · ACTIVE USERS</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>9 周增长 +633%</div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <Axis xLabels={labels} />
          <path d={path} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          {pts.map((v, i) => {
            const x = padX + (i / (pts.length - 1)) * innerW;
            const y = h - padY - (v / 100) * innerH;
            const last = i === pts.length - 1;
            return <g key={i}>
              <circle cx={x} cy={y} r={last ? 8 : 4} fill={last ? 'var(--accent)' : 'var(--bg)'} stroke="var(--accent)" strokeWidth="2" />
              {last && <text x={x + 16} y={y + 6} fontSize="20" fontWeight="800" fontFamily="var(--f-mono)" fill="var(--accent)">{v}</text>}
            </g>;
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: '1px rgba(255,255,255,.06) hairline' },
        { k: 'LINE', v: '3px accent · round join' },
        { k: 'POINT', v: '4px (常规) · 8px (端点高亮)' },
        { k: 'LABEL', v: '末端标数字 + mono 字体' },
      ]} />
    </SubSec>
  );
}

/* ── A2 · 多线对比 ── */
function MultiLine() {
  const series = [
    { name: 'GPT-4',     data: [22, 38, 45, 58, 64, 71, 78, 82, 86], color: 'var(--accent)' },
    { name: 'Claude 3.5', data: [18, 32, 41, 52, 60, 68, 74, 79, 83], color: 'rgba(255,255,255,.7)' },
    { name: 'Gemini',    data: [15, 24, 30, 38, 44, 50, 55, 58, 62], color: 'rgba(255,255,255,.35)' },
  ];
  const labels = ['1','2','3','4','5','6','7','8','9'];
  const padX = 80, padY = 60, w = 1000, h = 500;
  const innerW = w - padX * 2, innerH = h - padY * 2;
  return (
    <SubSec name="A2 · 多线对比 · Multi-line" tag="MODEL COMPARISON">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A2">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>BENCHMARK · MMLU SCORE</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>三家模型 9 月成绩</div>
        </div>
        <div style={{ position: 'absolute', top: '8%', right: '6%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {series.map(s => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 3, background: s.color }} />
              <span className="mono" style={{ fontSize: 16, color: s.color }}>{s.name}</span>
            </div>
          ))}
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <Axis xLabels={labels} />
          {series.map((s, si) => {
            const path = s.data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${padX + (i / (s.data.length - 1)) * innerW} ${h - padY - (v / 100) * innerH}`).join(' ');
            return <path key={si} d={path} fill="none" stroke={s.color} strokeWidth={si === 0 ? 3 : 2} strokeLinejoin="round" />;
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'HIERARCHY', v: '主线 accent 3px · 次线 70% 白 2px · 三线 35% 白 2px' },
        { k: 'LEGEND', v: '右上角 · 18px 横杠 + mono 名' },
        { k: 'RULE', v: '<b>最多 3 条线</b> · 4 条以上拆图' },
      ]} />
    </SubSec>
  );
}

/* ── A3 · 柱形图 ── */
function BarChart() {
  const data = [
    { l: 'JAN', v: 38 }, { l: 'FEB', v: 52 }, { l: 'MAR', v: 41 },
    { l: 'APR', v: 67 }, { l: 'MAY', v: 84 }, { l: 'JUN', v: 72 },
  ];
  const max = 100;
  return (
    <SubSec name="A3 · 柱形图 · Bar Chart" tag="DISCRETE QUANTITIES">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A3">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>MONTHLY · API CALLS (M)</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>5 月峰值 84M</div>
        </div>
        <div style={{ position: 'absolute', inset: '34% 8% 14% 8%', display: 'flex', alignItems: 'flex-end', gap: 24 }}>
          {data.map((d, i) => {
            const hot = d.v === Math.max(...data.map(x => x.v));
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <div className="mono" style={{ fontSize: 18, fontWeight: 600, color: hot ? 'var(--accent)' : 'var(--fg-2)', marginBottom: 8 }}>{d.v}</div>
                <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ width: '100%', height: `${(d.v / max) * 100}%`, background: hot ? 'var(--accent)' : 'rgba(255,255,255,.18)', borderRadius: '2px 2px 0 0' }} />
                </div>
                <div className="meta" style={{ marginTop: 14, color: hot ? 'var(--accent)' : 'var(--fg-3)' }}>{d.l}</div>
              </div>
            );
          })}
        </div>
      </Stage>
      <Params rows={[
        { k: 'BAR', v: '默认 18% 白 · 峰值 accent' },
        { k: 'GAP', v: '24px · 不超过柱宽 50%' },
        { k: 'VALUE', v: '柱顶 mono · 峰值字色 accent' },
        { k: 'RADIUS', v: '顶部 2px (柔化)' },
      ]} />
    </SubSec>
  );
}

/* ── A4 · 横向条形 ── */
function HBarChart() {
  const data = [
    { l: 'GitHub Copilot', v: 92 },
    { l: 'ChatGPT',        v: 88 },
    { l: 'Cursor',         v: 74 },
    { l: 'Claude Code',    v: 68 },
    { l: 'Windsurf',       v: 41 },
  ];
  return (
    <SubSec name="A4 · 横向条形 · H-Bar" tag="RANKING">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A4">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>2025 DEV TOOL ADOPTION %</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>开发者用得最多的 AI 工具</div>
        </div>
        <div style={{ position: 'absolute', inset: '30% 8% 10% 8%', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {data.map((d, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 60px', alignItems: 'center', gap: 18 }}>
              <div className="cn" style={{ fontSize: 18, fontWeight: 600, color: i === 0 ? 'var(--fg)' : 'var(--fg-2)' }}>{d.l}</div>
              <div style={{ height: 18, background: 'rgba(255,255,255,.05)', position: 'relative' }}>
                <div style={{ width: `${d.v}%`, height: '100%', background: i === 0 ? 'var(--accent)' : 'rgba(255,255,255,.22)' }} />
              </div>
              <div className="mono" style={{ fontSize: 18, fontWeight: 600, color: i === 0 ? 'var(--accent)' : 'var(--fg-2)', textAlign: 'right' }}>{d.v}%</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '3 列：标签 / 条 / 数值' },
        { k: 'SORT', v: '降序 · 第一名 accent' },
        { k: 'BAR HEIGHT', v: '18px (粗壮便于看清)' },
        { k: 'TRACK', v: '5% 白底打底 (空槽可见)' },
      ]} />
    </SubSec>
  );
}

/* ── A5 · 堆叠条/柱 ── */
function StackedBar() {
  const months = [
    { l: 'Q1', segs: [42, 28, 18] },
    { l: 'Q2', segs: [58, 31, 22] },
    { l: 'Q3', segs: [71, 38, 27] },
    { l: 'Q4', segs: [88, 42, 34] },
  ];
  const colors = ['var(--accent)', 'rgba(255,255,255,.55)', 'rgba(255,255,255,.22)'];
  const names = ['Inference', 'Training', 'Storage'];
  return (
    <SubSec name="A5 · 堆叠柱 · Stacked" tag="COMPOSITION OVER TIME">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A5">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>COMPUTE COST · $M</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>四季度构成变化</div>
        </div>
        <div style={{ position: 'absolute', top: '8%', right: '6%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {names.map((n, i) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 14, height: 14, background: colors[i] }} />
              <span className="mono" style={{ fontSize: 16, color: 'var(--fg-2)' }}>{n}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', inset: '36% 8% 14% 8%', display: 'flex', alignItems: 'flex-end', gap: 36 }}>
          {months.map((m, i) => {
            const total = m.segs.reduce((s, v) => s + v, 0);
            const max = 180;
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="mono" style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg)', marginBottom: 8 }}>${total}</div>
                <div style={{ width: '100%', height: 220, display: 'flex', flexDirection: 'column-reverse' }}>
                  {m.segs.map((s, si) => (
                    <div key={si} style={{ height: `${(s / max) * 100}%`, background: colors[si] }} />
                  ))}
                </div>
                <div className="meta" style={{ marginTop: 14 }}>{m.l}</div>
              </div>
            );
          })}
        </div>
      </Stage>
      <Params rows={[
        { k: 'COLOR ORDER', v: '主项 accent · 次项 55% 白 · 三项 22% 白' },
        { k: 'TOTAL', v: '柱顶 mono · 累计值' },
        { k: 'STACK', v: '主项<b>放底部</b>视觉锚定' },
      ]} />
    </SubSec>
  );
}

/* ── A6 · 面积图 ── */
function AreaChart() {
  const pts = [10, 18, 28, 22, 38, 52, 48, 68, 84];
  const labels = ['1','2','3','4','5','6','7','8','9'];
  const padX = 80, padY = 60, w = 1000, h = 500;
  const innerW = w - padX * 2, innerH = h - padY * 2;
  const pathLine = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${padX + (i / (pts.length - 1)) * innerW} ${h - padY - (v / 100) * innerH}`).join(' ');
  const pathFill = pathLine + ` L ${w - padX} ${h - padY} L ${padX} ${h - padY} Z`;
  return (
    <SubSec name="A6 · 面积图 · Area" tag="ACCUMULATED VOLUME">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A6">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>CONTEXT WINDOW · K TOKENS</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>模型上下文增长曲线</div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <Axis xLabels={labels} />
          <defs>
            <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.42" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={pathFill} fill="url(#areaGrad)" />
          <path d={pathLine} fill="none" stroke="var(--accent)" strokeWidth="3" />
        </svg>
      </Stage>
      <Params rows={[
        { k: 'FILL', v: 'accent 42% → 0% 渐变 (唯一允许的渐变)' },
        { k: 'STROKE', v: '顶线 3px accent' },
        { k: 'USE', v: '强调"累积量 / 容量"' },
      ]} />
    </SubSec>
  );
}

/* ── A7 · 环形图 ── */
function Donut() {
  const data = [
    { l: 'Retrieval', v: 52, c: 'var(--accent)' },
    { l: 'Generate',  v: 28, c: 'rgba(255,255,255,.65)' },
    { l: 'Rank',      v: 14, c: 'rgba(255,255,255,.32)' },
    { l: 'Other',     v: 6,  c: 'rgba(255,255,255,.14)' },
  ];
  const r = 140, cx = 160, cy = 160, stroke = 36;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <SubSec name="A7 · 环形图 · Donut" tag="PROPORTION (≤ 4 SLICES)">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A7">
        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '6% 8%' }}>
          <div style={{ position: 'relative', width: 320, height: 320 }}>
            <svg viewBox="0 0 320 320">
              {data.map((d, i) => {
                const len = (d.v / 100) * C;
                const dasharray = `${len} ${C - len}`;
                const offset = -acc;
                acc += len;
                return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.c} strokeWidth={stroke} strokeDasharray={dasharray} strokeDashoffset={offset} transform={`rotate(-90 ${cx} ${cy})`} />;
              })}
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="mono" style={{ fontSize: 56, fontWeight: 800, color: 'var(--accent)' }}>52%</div>
              <div className="meta" style={{ marginTop: 6 }}>RETRIEVAL</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="meta" style={{ color: 'var(--accent)', marginBottom: 6 }}>LATENCY BUDGET BREAKDOWN</div>
            {data.map((d, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr 60px', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 18, height: 18, background: d.c }} />
                <div className="cn" style={{ fontSize: 20, fontWeight: i === 0 ? 800 : 400, color: i === 0 ? 'var(--fg)' : 'var(--fg-2)' }}>{d.l}</div>
                <div className="mono" style={{ fontSize: 20, fontWeight: 600, color: i === 0 ? 'var(--accent)' : 'var(--fg-2)', textAlign: 'right' }}>{d.v}%</div>
              </div>
            ))}
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'RING', v: '36px stroke · 半径 140' },
        { k: 'CENTER', v: '主项数字 mono 800 · 56px · accent' },
        { k: 'LEGEND', v: '右栏 3 列：色块 / 名 / 数值' },
        { k: 'RULE', v: '<b>≤ 4 块</b>，多了换柱形' },
      ]} />
    </SubSec>
  );
}

/* ── A8 · 散点图 ── */
function Scatter() {
  // x = cost (0-100), y = quality (0-100), size = adoption
  const pts = [
    { x: 22, y: 38, r: 10, l: 'A', dim: true },
    { x: 35, y: 56, r: 14, l: 'B', dim: true },
    { x: 48, y: 72, r: 22, l: 'C', dim: true },
    { x: 68, y: 88, r: 28, l: 'D' }, // hot
    { x: 82, y: 78, r: 16, l: 'E', dim: true },
    { x: 28, y: 22, r: 8,  l: 'F', dim: true },
    { x: 58, y: 48, r: 12, l: 'G', dim: true },
  ];
  const padX = 90, padY = 70, w = 1000, h = 500;
  const innerW = w - padX * 2, innerH = h - padY * 2;
  return (
    <SubSec name="A8 · 散点图 · Scatter" tag="CORRELATION / DISTRIBUTION">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A8">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>COST × QUALITY · MODEL LANDSCAPE</div>
          <div className="cn" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>模型 D 是甜蜜点</div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <Axis xLabels={['LOW','','','MID','','','HIGH']} />
          <text x={padX - 50} y={h / 2} fontSize="14" fontFamily="var(--f-mono)" letterSpacing="0.16em" fill="rgba(255,255,255,.42)" transform={`rotate(-90 ${padX - 50} ${h / 2})`}>QUALITY →</text>
          {pts.map((p, i) => {
            const cx = padX + (p.x / 100) * innerW;
            const cy = h - padY - (p.y / 100) * innerH;
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={p.r} fill={p.dim ? 'rgba(255,255,255,.14)' : 'var(--accent)'} stroke={p.dim ? 'rgba(255,255,255,.32)' : 'var(--accent)'} strokeWidth="1.5" />
                <text x={cx} y={cy + 5} textAnchor="middle" fontSize="14" fontFamily="var(--f-mono)" fontWeight="800" fill={p.dim ? 'var(--fg)' : 'var(--bg)'}>{p.l}</text>
              </g>
            );
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'AXES', v: '双坐标 · 角落注 LOW/HIGH' },
        { k: 'POINT SIZE', v: '映射第三维度（如采用量）' },
        { k: 'HIGHLIGHT', v: '主点 accent · 其余 14% 白填' },
      ]} />
    </SubSec>
  );
}

/* ── A9 · 热力图 ── */
function Heatmap() {
  const rows = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const cols = ['0','3','6','9','12','15','18','21'];
  // 7x8 grid intensity 0-100
  const grid = rows.map((_, r) => cols.map((_, c) => {
    // peak around Tue-Thu / 9-15
    const dr = Math.abs(r - 2.5), dc = Math.abs(c - 4);
    const base = Math.max(0, 100 - dr * 18 - dc * 14);
    return Math.min(100, Math.round(base + (Math.sin(r * c) * 12)));
  }));
  return (
    <SubSec name="A9 · 热力图 · Heatmap" tag="2D INTENSITY">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A9">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>API USAGE · WEEKDAY × HOUR</div>
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>工作日中午为高峰</div>
        </div>
        <div style={{ position: 'absolute', inset: '32% 8% 10% 8%', display: 'grid', gridTemplateRows: 'repeat(7, 1fr)', gap: 4 }}>
          {grid.map((row, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: '40px repeat(8, 1fr)', gap: 4, alignItems: 'center' }}>
              <div className="meta" style={{ color: 'var(--fg-3)' }}>{rows[ri]}</div>
              {row.map((v, ci) => (
                <div key={ci} title={`${rows[ri]} ${cols[ci]}: ${v}`} style={{
                  aspectRatio: '1.6 / 1',
                  background: v > 70 ? 'var(--accent)' : `rgba(255,255,255,${Math.max(0.04, v / 200)})`,
                  borderRadius: 2,
                }} />
              ))}
            </div>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: '40px repeat(8, 1fr)', gap: 4, marginTop: 4 }}>
            <div />
            {cols.map(c => <div key={c} className="meta" style={{ textAlign: 'center', color: 'var(--fg-3)' }}>{c}</div>)}
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'CELL', v: '阶梯填色：< 70 灰阶 · ≥ 70 accent' },
        { k: 'GAP', v: '4px · 让格子边界清晰' },
        { k: 'LABELS', v: '行 · 列 mono caps 14px' },
      ]} />
    </SubSec>
  );
}

/* ── A10 · 仪表盘 ── */
function Gauge() {
  const value = 73;
  const startA = -200, endA = 20;  // sweep 220°
  const r = 130, cx = 160, cy = 170, stroke = 22;
  const C = (220 / 360) * 2 * Math.PI * r;
  const filled = (value / 100) * C;
  const arc = (a) => {
    const rad = (a * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [x1, y1] = arc(startA), [x2, y2] = arc(endA);
  return (
    <SubSec name="A10 · 仪表盘 · Gauge" tag="SINGLE METRIC">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A10">
        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '6% 10%' }}>
          <div style={{ position: 'relative', width: 340, height: 240 }}>
            <svg viewBox="0 0 340 240">
              <path d={`M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth={stroke} strokeLinecap="round" />
              <path d={`M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`} fill="none" stroke="var(--accent)" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={`${filled} ${C}`} />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 14 }}>
              <div className="mono" style={{ fontSize: 72, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>73<span style={{ fontSize: 28, color: 'var(--fg-2)' }}>%</span></div>
              <div className="meta" style={{ marginTop: 8 }}>HEALTHY · TARGET 80%</div>
            </div>
          </div>
          <div>
            <div className="meta" style={{ color: 'var(--accent)', marginBottom: 10 }}>RAG · ANSWER FIDELITY</div>
            <div className="cn" style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>距离目标还差 <span style={{ color: 'var(--accent)' }}>7 个点</span></div>
            <div className="cn" style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.6 }}>本周新版 retrieval 上线后从 64 → 73。<br/>计划下周做 reranker 验证。</div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'SWEEP', v: '220° · 起始 -200° → 终止 20°' },
        { k: 'STROKE', v: '22px round cap · 留底色 10% 白' },
        { k: 'NUMBER', v: '72px mono 800 · accent' },
      ]} />
    </SubSec>
  );
}

/* ── A11 · 迷你图 ── */
function Sparkline() {
  const cards = [
    { l: 'DAU',    v: '12.4K', d: '+8.2%', up: true,  pts: [40, 38, 52, 48, 62, 70, 78] },
    { l: 'LATENCY', v: '342ms', d: '-12.4%', up: true,  pts: [78, 82, 70, 58, 52, 48, 42] },
    { l: 'ERROR', v: '0.42%', d: '+0.08', up: false, pts: [22, 18, 28, 32, 28, 38, 42] },
    { l: 'COST',  v: '$3.8K', d: '+2.1%', up: false, pts: [42, 48, 44, 52, 50, 58, 62] },
  ];
  return (
    <SubSec name="A11 · 迷你图 · Sparkline" tag="DENSE METRIC CARDS">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A11">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>WEEKLY DASHBOARD</div>
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>4 项关键指标</div>
        </div>
        <div style={{ position: 'absolute', inset: '32% 6% 12% 6%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {cards.map((c, i) => {
            const max = Math.max(...c.pts), min = Math.min(...c.pts);
            const W = 200, H = 60;
            const path = c.pts.map((v, j) => `${j === 0 ? 'M' : 'L'} ${(j / (c.pts.length - 1)) * W} ${H - ((v - min) / (max - min)) * H}`).join(' ');
            return (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 6, padding: 22 }}>
                <div className="meta" style={{ marginBottom: 10 }}>{c.l}</div>
                <div className="mono" style={{ fontSize: 30, fontWeight: 800, color: 'var(--fg)', marginBottom: 4 }}>{c.v}</div>
                <div className="mono" style={{ fontSize: 14, color: c.up ? 'var(--green)' : 'var(--accent)', marginBottom: 14 }}>{c.d}</div>
                <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="60" preserveAspectRatio="none">
                  <path d={path} fill="none" stroke={c.up ? 'var(--green)' : 'var(--accent)'} strokeWidth="2.5" />
                </svg>
              </div>
            );
          })}
        </div>
      </Stage>
      <Params rows={[
        { k: 'CARD', v: '1px hairline · 22px padding · 6px radius' },
        { k: 'METRIC', v: 'mono 30/800 主数 + 14px delta' },
        { k: 'LINE', v: '2.5px · 颜色映射趋势 (绿=好 / 橙=糟)' },
      ]} />
    </SubSec>
  );
}

/* ── A12 · Sankey 流图 ── */
function Sankey() {
  // 3 sources -> 2 mid -> 1 sink, simplified rectangles + bezier
  const w = 1000, h = 460;
  const cols = [
    { x: 80,  nodes: [{ y: 80, h: 140, l: '搜索 · 56%' }, { y: 240, h: 80, l: '社交 · 24%' }, { y: 340, h: 60, l: '直接 · 20%' }] },
    { x: 470, nodes: [{ y: 80, h: 180, l: '试用 · 65%' }, { y: 280, h: 120, l: '流失 · 35%' }] },
    { x: 860, nodes: [{ y: 80, h: 220, l: '留存 · 28%' }] },
  ];
  const flows = [
    { a: [0, 0], b: [1, 0], w: 100, hot: true },
    { a: [0, 0], b: [1, 1], w: 40 },
    { a: [0, 1], b: [1, 0], w: 50, hot: true },
    { a: [0, 1], b: [1, 1], w: 30 },
    { a: [0, 2], b: [1, 0], w: 30, hot: true },
    { a: [0, 2], b: [1, 1], w: 30 },
    { a: [1, 0], b: [2, 0], w: 180, hot: true },
  ];
  const NW = 18;
  const flowPath = (f) => {
    const A = cols[f.a[0]].nodes[f.a[1]];
    const B = cols[f.b[0]].nodes[f.b[1]];
    const x1 = cols[f.a[0]].x + NW, x2 = cols[f.b[0]].x;
    const y1 = A.y + A.h / 2, y2 = B.y + B.h / 2;
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1 - f.w / 2} C ${mx} ${y1 - f.w / 2}, ${mx} ${y2 - f.w / 2}, ${x2} ${y2 - f.w / 2} L ${x2} ${y2 + f.w / 2} C ${mx} ${y2 + f.w / 2}, ${mx} ${y1 + f.w / 2}, ${x1} ${y1 + f.w / 2} Z`;
  };
  return (
    <SubSec name="A12 · Sankey 流图" tag="FLOW DISTRIBUTION">
      <Stage pattern="graph" label="● B-ROLL · DATA" labelR="06.A12">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>USER ACQUISITION FUNNEL</div>
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>10,000 流量到 28% 留存</div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: '26% 0 0 0', width: '100%', height: '74%' }}>
          {flows.map((f, i) => (
            <path key={i} d={flowPath(f)} fill={f.hot ? 'var(--accent)' : 'rgba(255,255,255,.12)'} opacity={f.hot ? 0.32 : 0.42} />
          ))}
          {cols.map((c, ci) => c.nodes.map((n, ni) => {
            const hot = ci === 2 || (ci === 0) || (ci === 1 && ni === 0);
            return (
              <g key={ci + '-' + ni}>
                <rect x={c.x} y={n.y} width={NW} height={n.h} fill={hot ? 'var(--accent)' : 'var(--fg-2)'} />
                <text x={ci === 2 ? c.x - 14 : c.x + NW + 14} y={n.y + n.h / 2 + 6} fontSize="18" fontWeight="600" fontFamily="var(--f-cn)" fill={hot ? 'var(--accent)' : 'var(--fg)'} textAnchor={ci === 2 ? 'end' : 'start'}>{n.l}</text>
              </g>
            );
          }))}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'NODE', v: '18px 宽矩形 · accent / 62% 白' },
        { k: 'FLOW', v: 'bezier · accent 32% / 白 42% opacity' },
        { k: 'WIDTH', v: '映射流量大小' },
        { k: 'USE', v: '讲漏斗 / 转化 / 资源分配' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { ChartsSection });
