/* ================================================================
   sections/broll-thinking.jsx — 09 · D 类 · 结构化思考 7 款
   compare-table · swot · fishbone · timeline · gantt · kanban · card-grid
   ================================================================ */

function ThinkingSection() {
  return (
    <Section id="thinking" num="09" title="B-roll · 结构化思考"
      desc="讲<b>比较 · 分析 · 时间 · 待办</b>时用。共用语法：<em>网格 + hairline 边框 + mono 表头</em>。模版化最强 → 直接套数据。">
      <CompareTable /><SWOT /><Fishbone /><TimelineRow />
      <Gantt /><KanbanBoard /><CardGrid />
    </Section>
  );
}

/* ── D1 · 对比表 ── */
function CompareTable() {
  const rows = [
    { k: '上下文长度',  vals: ['200K', '128K', '1M'],     winIdx: 2 },
    { k: '价格 / 1M',    vals: ['$3.00', '$2.50', '$1.25'], winIdx: 2 },
    { k: '中文表现',    vals: ['★★★★★', '★★★★☆', '★★★★☆'], winIdx: 0 },
    { k: '函数调用',    vals: ['原生', '原生', '原生'],     winIdx: null },
    { k: '视觉理解',    vals: ['支持', '支持', '支持'],     winIdx: null },
    { k: '免费层',      vals: ['—',    '—',    '✓'],        winIdx: 2 },
  ];
  const cols = ['Claude 3.5', 'GPT-4o', 'Gemini 1.5'];
  return (
    <SubSec name="D1 · 对比表 · Comparison Table" tag="A VS B VS C">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D1">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>MODEL COMPARISON · 6 DIMENSIONS</div>
        </div>
        <div style={{ position: 'absolute', inset: '18% 6% 6% 6%' }}>
          {/* header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', borderBottom: '1px solid var(--line-2)', paddingBottom: 14, marginBottom: 14 }}>
            <div className="meta" style={{ color: 'var(--fg-3)' }}>DIMENSION</div>
            {cols.map((c, i) => (
              <div key={i} className="cn" style={{ fontSize: 20, fontWeight: 800, color: 'var(--fg)' }}>{c}</div>
            ))}
          </div>
          {/* rows */}
          {rows.map((r, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
              <div className="cn" style={{ fontSize: 18, color: 'var(--fg-2)' }}>{r.k}</div>
              {r.vals.map((v, vi) => (
                <div key={vi} className="mono" style={{ fontSize: 18, fontWeight: vi === r.winIdx ? 800 : 400, color: vi === r.winIdx ? 'var(--accent)' : 'var(--fg)' }}>
                  {vi === r.winIdx && <span style={{ marginRight: 6, color: 'var(--accent)' }}>★</span>}
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'HEADER', v: '左 mono caps 维度 · 右 cn 800 候选名' },
        { k: 'WIN', v: '该行最优 accent + ★ 前缀' },
        { k: 'ROW', v: 'hairline 分隔 · 不画竖线' },
      ]} />
    </SubSec>
  );
}

/* ── D2 · SWOT ── */
function SWOT() {
  const quads = [
    { k: 'S', name: 'STRENGTHS',     cn: '优势', tone: 'accent', items: ['模型质量行业第一', '中文语料丰富', '安全对齐扎实'] },
    { k: 'W', name: 'WEAKNESSES',    cn: '劣势', tone: 'fg',     items: ['推理成本偏高', '上下文短于竞品'] },
    { k: 'O', name: 'OPPORTUNITIES', cn: '机会', tone: 'accent', items: ['企业 RAG 市场', 'Agent 标准化', '端侧推理'] },
    { k: 'T', name: 'THREATS',       cn: '威胁', tone: 'fg',     items: ['开源追赶速度', '价格战', '监管不确定'] },
  ];
  return (
    <SubSec name="D2 · SWOT 四宫格" tag="STRATEGIC ANALYSIS">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D2">
        <div style={{ position: 'absolute', inset: '6%', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16 }}>
          {quads.map((q, i) => (
            <div key={i} style={{
              border: '1px solid',
              borderColor: q.tone === 'accent' ? 'var(--accent)' : 'var(--line-2)',
              background: q.tone === 'accent' ? 'rgba(255,107,61,.04)' : 'transparent',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, borderBottom: '1px solid var(--line)', paddingBottom: 14 }}>
                <div className="mono" style={{ fontSize: 56, fontWeight: 800, color: q.tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)', lineHeight: 1 }}>{q.k}</div>
                <div>
                  <div className="meta" style={{ color: q.tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)' }}>{q.name}</div>
                  <div className="cn" style={{ fontSize: 24, fontWeight: 800 }}>{q.cn}</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.items.map((it, ii) => (
                  <li key={ii} className="cn" style={{ fontSize: 17, color: 'var(--fg-2)', position: 'relative', paddingLeft: 18 }}>
                    <span style={{ position: 'absolute', left: 0, top: 9, width: 8, height: 1, background: q.tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)' }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'QUAD', v: '2×2 等宽 · S/O 同色 (正向) · W/T 中性' },
        { k: 'LETTER', v: 'mono 800 · 56px · 整格视觉锚' },
        { k: 'ITEM', v: '8px 横杠 + 中文项 (不用圆点)' },
      ]} />
    </SubSec>
  );
}

/* ── D3 · 鱼骨图 ── */
function Fishbone() {
  const causes = [
    { side: 'top',    x: 220, l: '人员',  items: ['经验不足', '沟通不畅'] },
    { side: 'top',    x: 460, l: '方法',  items: ['流程缺失', '复审跳过'], hot: true },
    { side: 'top',    x: 700, l: '工具',  items: ['监控缺失'] },
    { side: 'bottom', x: 340, l: '环境',  items: ['代码冻结期'] },
    { side: 'bottom', x: 580, l: '数据',  items: ['训练集偏斜', '冷启动'] },
    { side: 'bottom', x: 820, l: '反馈',  items: ['延迟过长'], hot: true },
  ];
  return (
    <SubSec name="D3 · 鱼骨图 · Fishbone" tag="ROOT CAUSE ANALYSIS">
      <Stage pattern="dot" label="● B-ROLL · THINK" labelR="09.D3">
        <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* spine */}
          <line x1="80" y1="260" x2="1040" y2="260" stroke="var(--line-2)" strokeWidth="2" />
          <polygon points="1040,260 1028,252 1028,268" fill="var(--accent)" />
          {/* head */}
          <rect x="1040" y="220" width="120" height="80" rx="6" fill="var(--accent)" />
          <text x="1100" y="248" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="rgba(0,0,0,.55)">PROBLEM</text>
          <text x="1100" y="276" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="18" fontWeight="800" fill="var(--bg)">线上事故</text>
          {/* bones */}
          {causes.map((c, i) => {
            const yEnd = c.side === 'top' ? 80 : 440;
            const y0 = 260;
            const c0 = c.hot ? 'var(--accent)' : 'var(--line-2)';
            return (
              <g key={i}>
                <line x1={c.x} y1={y0} x2={c.x - (c.side === 'top' ? 80 : -80)} y2={yEnd} stroke={c0} strokeWidth="1.5" />
                <text x={c.x - (c.side === 'top' ? 90 : -90)} y={yEnd + (c.side === 'top' ? -8 : 18)} textAnchor={c.side === 'top' ? 'end' : 'start'} fontFamily="var(--f-cn)" fontSize="18" fontWeight="800" fill={c.hot ? 'var(--accent)' : 'var(--fg)'}>{c.l}</text>
                {c.items.map((it, ii) => {
                  const dy = c.side === 'top' ? -50 - ii * 32 : 50 + ii * 32;
                  const xMid = c.x + (c.side === 'top' ? -40 : 40) - (c.side === 'top' ? 80 : -80) * (Math.abs(dy) / 180);
                  return (
                    <g key={ii}>
                      <line x1={xMid} y1={y0 + dy} x2={xMid + (c.side === 'top' ? -30 : 30)} y2={y0 + dy} stroke="var(--line-3)" strokeWidth="1" />
                      <text x={xMid + (c.side === 'top' ? -38 : 38)} y={y0 + dy + 5} textAnchor={c.side === 'top' ? 'end' : 'start'} fontFamily="var(--f-cn)" fontSize="14" fill="var(--fg-2)">{it}</text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'SPINE', v: '主干水平 · 头为问题 · 尾向左' },
        { k: 'BONES', v: '6 类成因斜插 · 主因 accent' },
        { k: 'SUB', v: '小刺横向 · 14px 细节因素' },
      ]} />
    </SubSec>
  );
}

/* ── D4 · 时间线 ── */
function TimelineRow() {
  const events = [
    { d: '2017',  l: 'Attention Is All You Need', s: 'TRANSFORMER' },
    { d: '2020',  l: 'GPT-3 · 175B 参数',         s: 'SCALING LAW', hot: true },
    { d: '2022',  l: 'ChatGPT 发布',              s: 'PUBLIC AI', hot: true },
    { d: '2023',  l: 'GPT-4 · 多模态',            s: 'MULTIMODAL' },
    { d: '2024',  l: 'Claude 3.5 · Agent',        s: 'TOOL USE', hot: true },
    { d: '2025+', l: '?',                          s: 'AGI?' },
  ];
  return (
    <SubSec name="D4 · 时间线 · Timeline" tag="HISTORICAL EVOLUTION">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D4">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>LLM HISTORY · 8 YEARS</div>
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, marginTop: 4 }}>从 Transformer 到 Agent</div>
        </div>
        <div style={{ position: 'absolute', inset: '36% 4% 14% 4%' }}>
          {/* line */}
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--line-2)' }} />
          {/* events */}
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${events.length}, 1fr)` }}>
            {events.map((e, i) => (
              <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* dot */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: e.hot ? 18 : 10, height: e.hot ? 18 : 10, borderRadius: '50%', background: e.hot ? 'var(--accent)' : 'var(--fg-2)', border: '2px solid var(--bg)' }} />
                {/* upper card */}
                {i % 2 === 0 && (
                  <div style={{ position: 'absolute', bottom: 'calc(50% + 24px)', textAlign: 'center', width: '90%' }}>
                    <div className="meta" style={{ color: e.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{e.s}</div>
                    <div className="cn" style={{ fontSize: 18, fontWeight: 800, marginTop: 4, color: e.hot ? 'var(--fg)' : 'var(--fg-2)' }}>{e.l}</div>
                  </div>
                )}
                {/* date */}
                <div className="mono" style={{ position: 'absolute', top: 'calc(50% + 20px)', fontSize: 22, fontWeight: 800, color: e.hot ? 'var(--accent)' : 'var(--fg-2)' }}>{e.d}</div>
                {/* lower card */}
                {i % 2 === 1 && (
                  <div style={{ position: 'absolute', top: 'calc(50% + 56px)', textAlign: 'center', width: '90%' }}>
                    <div className="meta" style={{ color: e.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{e.s}</div>
                    <div className="cn" style={{ fontSize: 18, fontWeight: 800, marginTop: 4, color: e.hot ? 'var(--fg)' : 'var(--fg-2)' }}>{e.l}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: '水平 hairline · 等距分布' },
        { k: 'EVENT', v: '上下交错卡片 · 减少拥挤' },
        { k: 'DOT', v: '关键事件 accent + 大尺寸' },
      ]} />
    </SubSec>
  );
}

/* ── D5 · 甘特图 ── */
function Gantt() {
  const tasks = [
    { l: '需求评审',     start: 0,  dur: 1, color: 'fg-2' },
    { l: '架构设计',     start: 1,  dur: 2, color: 'fg-2' },
    { l: '模型训练',     start: 2,  dur: 4, color: 'accent' },
    { l: '联调测试',     start: 5,  dur: 2, color: 'fg-2' },
    { l: '灰度上线',     start: 7,  dur: 1, color: 'accent' },
    { l: '复盘',         start: 8,  dur: 1, color: 'fg-2' },
  ];
  const weeks = 10;
  return (
    <SubSec name="D5 · 甘特图 · Gantt" tag="PROJECT TIMELINE">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D5">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>RAG V2 · Q1 ROADMAP</div>
        </div>
        <div style={{ position: 'absolute', inset: '16% 4% 6% 4%' }}>
          {/* week header */}
          <div style={{ display: 'grid', gridTemplateColumns: `200px repeat(${weeks}, 1fr)`, borderBottom: '1px solid var(--line-2)', paddingBottom: 10, marginBottom: 14 }}>
            <div />
            {Array.from({ length: weeks }, (_, i) => (
              <div key={i} className="meta" style={{ textAlign: 'center', color: 'var(--fg-3)' }}>W{i + 1}</div>
            ))}
          </div>
          {/* rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {tasks.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: `200px repeat(${weeks}, 1fr)`, alignItems: 'center', gap: 0 }}>
                <div className="cn" style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg)' }}>{t.l}</div>
                {Array.from({ length: weeks }, (_, ci) => {
                  const active = ci >= t.start && ci < t.start + t.dur;
                  return (
                    <div key={ci} style={{
                      height: 26,
                      margin: '0 2px',
                      background: active ? (t.color === 'accent' ? 'var(--accent)' : 'rgba(255,255,255,.22)') : 'transparent',
                      borderRadius: 2,
                    }} />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'GRID', v: '左列任务名 · 右侧周柱' },
        { k: 'BAR', v: '高 26px · 2px 圆角 · 关键里程碑 accent' },
        { k: 'HEADER', v: 'W1-W10 mono caps · hairline 分隔' },
      ]} />
    </SubSec>
  );
}

/* ── D6 · Kanban ── */
function KanbanBoard() {
  const cols = [
    { l: 'BACKLOG',     cn: '待办',  items: [
      { t: '调研 Embedding v3', tag: 'RESEARCH' },
      { t: '修复缓存 TTL', tag: 'BUG' },
      { t: '文档更新', tag: 'DOC' },
    ] },
    { l: 'IN PROGRESS', cn: '进行中', hot: true, items: [
      { t: 'Reranker 训练', tag: 'ML', hot: true },
      { t: 'Agent 工具集成', tag: 'FEATURE', hot: true },
    ] },
    { l: 'REVIEW',      cn: '复审',  items: [
      { t: '提示词模板库', tag: 'DESIGN' },
    ] },
    { l: 'DONE',        cn: '完成',  items: [
      { t: '上线 v2.3', tag: 'RELEASE' },
      { t: '性能基线建立', tag: 'INFRA' },
      { t: '团队培训', tag: 'OPS' },
    ] },
  ];
  return (
    <SubSec name="D6 · Kanban 看板" tag="STATUS COLUMNS">
      <Stage pattern="dot" label="● B-ROLL · THINK" labelR="09.D6">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>TEAM SPRINT · WEEK 24</div>
        </div>
        <div style={{ position: 'absolute', inset: '16% 4% 6% 4%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {cols.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ paddingBottom: 12, borderBottom: '1px solid', borderColor: c.hot ? 'var(--accent)' : 'var(--line-2)' }}>
                <div className="meta" style={{ color: c.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{c.l} · {c.items.length}</div>
                <div className="cn" style={{ fontSize: 20, fontWeight: 800, marginTop: 4, color: c.hot ? 'var(--accent)' : 'var(--fg)' }}>{c.cn}</div>
              </div>
              {c.items.map((it, ii) => (
                <div key={ii} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: it.hot ? 'var(--accent)' : 'var(--line)',
                  borderRadius: 6,
                  padding: 16,
                }}>
                  <div className="meta" style={{ marginBottom: 8, color: it.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{it.tag}</div>
                  <div className="cn" style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg)' }}>{it.t}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'COL', v: '4 列等宽 · 当前列 accent 头' },
        { k: 'CARD', v: '上 mono 标签 · 下 中文 任务' },
        { k: 'COUNT', v: '列头跟数量 · 一眼看负载' },
      ]} />
    </SubSec>
  );
}

/* ── D7 · 卡片网格 ── */
function CardGrid() {
  const items = [
    { n: '01', l: 'Chain-of-Thought', s: '让模型分步推理' },
    { n: '02', l: 'Few-Shot', s: '示例引导格式', hot: true },
    { n: '03', l: 'ReAct', s: '思考 + 行动循环' },
    { n: '04', l: 'Self-Consistency', s: '采样多次取多数' },
    { n: '05', l: 'Tree of Thoughts', s: '搜索式推理树' },
    { n: '06', l: 'Reflexion', s: '失败后自我反思', hot: true },
    { n: '07', l: 'RAG', s: '检索增强生成' },
    { n: '08', l: 'Function Call', s: '工具调用结构化' },
  ];
  return (
    <SubSec name="D7 · 卡片网格 · Card Grid" tag="CONCEPT GALLERY">
      <Stage pattern="dot" label="● B-ROLL · THINK" labelR="09.D7">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>PROMPTING TECHNIQUES · 8 PATTERNS</div>
        </div>
        <div style={{ position: 'absolute', inset: '18% 4% 6% 4%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 16 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: it.hot ? 'var(--bg-card)' : 'transparent',
              border: '1px solid',
              borderColor: it.hot ? 'var(--accent)' : 'var(--line)',
              borderRadius: 6,
              padding: 22,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.2em', color: it.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{it.n}</div>
              <div>
                <div className="cn" style={{ fontSize: 22, fontWeight: 800, color: 'var(--fg)', marginBottom: 6 }}>{it.l}</div>
                <div className="cn" style={{ fontSize: 14, color: 'var(--fg-2)' }}>{it.s}</div>
              </div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'GRID', v: '4×2 · 等宽等高 · 16px gap' },
        { k: 'CARD', v: '左上编号 + 左下标题 + 副标' },
        { k: 'HOT', v: '推荐项整张 fill bg-card + accent 边' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { ThinkingSection });
