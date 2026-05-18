/* ================================================================
   sections/broll-ui.jsx — 03 · B-roll · 仿真 UI
   终端 · 浏览器 · 对话 · 代码 · API · 仪表盘
   ================================================================ */
function FakeUISection() {
  return (
    <Section id="ui" num="03" title="B-roll · 仿真 UI"
      desc="讲 AI 教程必备：<b>终端 · 浏览器 · 对话 · 代码 · API · 仪表盘</b>。所有 UI mock 共享同一规则 —— <em>极简</em>、<em>真实可信</em>、<em>不要拟物窗口</em>。窗口装饰只保留三个灰点 + 一条 hairline 头。">
      <Terminal />
      <Chat />
      <Browser />
      <CodeEditor />
      <ApiCall />
      <Dashboard />
    </Section>
  );
}

/* ---------- A · Terminal ---------- */
function Terminal() {
  const [chars, setChars] = React.useState(0);
  const cmd = '$ claude run "explain RAG in one line"';
  React.useEffect(() => {
    const id = setInterval(() => setChars(c => (c >= cmd.length ? 0 : c + 1)), 60);
    return () => clearInterval(id);
  }, []);
  return (
    <SubSec name="终端 · Terminal" tag="CLI MOCK">
      <Stage pattern="dot" label="● B-ROLL" labelR="03.A">
        <WindowChrome title="~/projects/rag-demo · zsh">
          <div className="mono" style={{ padding: '28px 32px', fontSize: 30, lineHeight: 1.75, color: 'var(--fg)' }}>
            <span style={{ color: 'var(--accent)' }}>{cmd.slice(0, chars)}</span>
            <span style={{ display: 'inline-block', width: 10, height: 18, background: 'var(--accent)', verticalAlign: '-3px', animation: 'cb 1s steps(2) infinite' }} />
            <div style={{ color: 'var(--fg-2)', marginTop: 14 }}>→ Retrieval-Augmented Generation: 给模型外接资料库再生成。</div>
            <div style={{ color: 'var(--fg-3)', marginTop: 6, fontSize: 22 }}>↳ tokens 23 · 412ms · $0.0008</div>
          </div>
        </WindowChrome>
        <style>{`@keyframes cb { 50% { opacity: 0 } }`}</style>
      </Stage>
      <Params rows={[
        { k: 'FONT', v: 'Geist Mono 30px (within stage)' },
        { k: 'BG', v: 'var(--bg-card) · hairline border' },
        { k: 'CURSOR', v: '10×18 实块 · 1s blink · accent' },
        { k: 'TYPE SPEED', v: '60ms / char' },
        { k: 'META TAIL', v: 'tokens · 延迟 · $ 成本（fg-3）' },
      ]} />
    </SubSec>
  );
}

/* ---------- B · Chat ---------- */
function Chat() {
  return (
    <SubSec name="对话流 · Chat Thread" tag="LLM CONVERSATION">
      <Stage pattern="dot" label="● B-ROLL" labelR="03.B">
        <div style={{ position: 'absolute', inset: '10% 16%', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Bubble role="user">RAG 跟 fine-tuning 啥区别？</Bubble>
          <Bubble role="ai">RAG 是<span style={{ color: 'var(--accent)' }}>开卷考试</span>—— 临时查资料。fine-tuning 是<span style={{ color: 'var(--accent)' }}>背书</span>—— 把知识焊进模型权重。</Bubble>
          <Bubble role="user" pending>那我应该选哪个 ▍</Bubble>
        </div>
      </Stage>
      <Params rows={[
        { k: 'USER BUBBLE', v: '右对齐 · accent 描边 · bg 透明' },
        { k: 'AI BUBBLE', v: '左对齐 · bg-card 填充 · 无边' },
        { k: 'TYPING', v: '末尾光标 ▍' },
        { k: 'MAX WIDTH', v: '70% · 留出对侧呼吸' },
      ]} />
    </SubSec>
  );
}
function Bubble({ role, pending, children }) {
  const isUser = role === 'user';
  return (
    <div style={{ alignSelf: isUser ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
      <div className="meta" style={{ marginBottom: 4, textAlign: isUser ? 'right' : 'left', color: isUser ? 'var(--accent)' : 'var(--fg-3)' }}>{isUser ? 'YOU' : 'CLAUDE'}</div>
      <div className="cn" style={{
        padding: '24px 30px',
        background: isUser ? 'transparent' : 'var(--bg-card)',
        border: isUser ? '1px solid var(--accent)' : '1px solid var(--line)',
        borderRadius: 10, fontSize: 30, fontWeight: 400, lineHeight: 1.45,
        opacity: pending ? 0.7 : 1,
      }}>{children}</div>
    </div>
  );
}

/* ---------- C · Browser ---------- */
function Browser() {
  return (
    <SubSec name="浏览器 · Browser" tag="URL + VIEWPORT">
      <Stage pattern="dot" label="● B-ROLL" labelR="03.C">
        <WindowChrome
          tabs={['claude.ai/chat', 'docs · arxiv', '+']}
          urlMode
          url="claude.ai/new?q=rag"
        >
          <div style={{ padding: '24px 32px' }}>
            <div className="meta" style={{ color: 'var(--accent)', marginBottom: 12 }}>● LIVE</div>
            <div className="cn" style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.018em', lineHeight: 1.1, marginBottom: 14 }}>
              问 Claude 任何关于 RAG 的问题
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ flex: 1, height: 56, border: '1px solid var(--line-2)', borderRadius: 6, display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                <span className="cn" style={{ fontSize: 22, color: 'var(--fg-3)' }}>How does retrieval work?</span>
              </div>
              <div style={{ width: 56, height: 56, background: 'var(--accent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--f-mono)', fontWeight: 800, color: 'var(--bg)', fontSize: 22 }}>↑</div>
            </div>
          </div>
        </WindowChrome>
      </Stage>
      <Params rows={[
        { k: 'CHROME', v: '三点 + tab 行 + URL 框 · 全部 hairline' },
        { k: 'URL', v: 'Geist Mono · 不显示 https:// 前缀' },
        { k: 'CTA', v: '正方形 accent 按钮 · 单字符' },
        { k: 'NO FAVICON', v: '保持极简' },
      ]} />
    </SubSec>
  );
}

/* ---------- D · Code Editor ---------- */
function CodeEditor() {
  return (
    <SubSec name="代码 · Code Editor" tag="SYNTAX HIGHLIGHTED">
      <Stage pattern="dot" label="● B-ROLL" labelR="03.D">
        <WindowChrome title="rag.py · python 3.12" sideBar>
          <pre className="mono" style={{ margin: 0, padding: '24px 28px', fontSize: 22, lineHeight: 1.55, color: 'var(--fg)' }}>
<Ln n={1}><Kw>from</Kw> claude <Kw>import</Kw> retrieve, ask</Ln>
<Ln n={2}> </Ln>
<Ln n={3}>docs <Op>=</Op> retrieve(<Str>"vector_db"</Str>, q<Op>=</Op>question)</Ln>
<Ln n={4}>answer <Op>=</Op> ask(question, context<Op>=</Op>docs)</Ln>
<Ln n={5}> </Ln>
<Ln n={6} hot><Co># ← grounded in real sources</Co></Ln>
          </pre>
        </WindowChrome>
      </Stage>
      <Params rows={[
        { k: 'PALETTE', v: 'keyword=accent · string=fg-2 · comment=fg-3 italic' },
        { k: 'GUTTER', v: '行号 mono · fg-3 · 1ch 右对齐' },
        { k: 'HOT LINE', v: '当前讲解行：左侧 2px accent 竖条' },
        { k: 'SIDEBAR', v: '可选文件树 · 32px 宽' },
      ]} />
    </SubSec>
  );
}
function Ln({ n, hot, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'baseline', gap: 12, position: 'relative', padding: '2px 0' }}>
      {hot && <span style={{ position: 'absolute', left: -28, top: 4, bottom: 4, width: 2, background: 'var(--accent)' }} />}
      <span style={{ color: 'var(--fg-3)', textAlign: 'right' }}>{n}</span>
      <span>{children}</span>
    </div>
  );
}
function Kw({ children }) { return <span style={{ color: 'var(--accent)' }}>{children}</span>; }
function Str({ children }) { return <span style={{ color: 'var(--fg-2)' }}>{children}</span>; }
function Op({ children }) { return <span style={{ color: 'var(--fg-3)' }}>{children}</span>; }
function Co({ children }) { return <span style={{ color: 'var(--fg-3)', fontStyle: 'italic' }}>{children}</span>; }

/* ---------- E · API call ---------- */
function ApiCall() {
  return (
    <SubSec name="API 调用 · Request / Response" tag="REST · JSON">
      <Stage pattern="dot" label="● B-ROLL" labelR="03.E">
        <div style={{ position: 'absolute', inset: '12% 8%', display: 'grid', gridTemplateColumns: '1fr 40px 1fr', alignItems: 'stretch', gap: 0 }}>
          <Panel verb="POST" path="/v1/messages" tone="req">
            <PanelLine k='"model"'    v='"claude-haiku-4-5"' />
            <PanelLine k='"messages"' v='[ … ]' />
            <PanelLine k='"max_tokens"' v='1024' />
          </Panel>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>312ms</div>
            <div style={{ width: 0, height: 0, borderLeft: '8px solid var(--accent)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
          </div>
          <Panel verb="200" path="ok · 1.2KB" tone="res">
            <PanelLine k='"id"'      v='"msg_01H…"' />
            <PanelLine k='"content"' v='"RAG = 开卷考试 …"' accent />
            <PanelLine k='"stop"'    v='"end_turn"' />
          </Panel>
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '左请求 · 中延迟 · 右响应' },
        { k: 'VERB', v: 'POST = accent · 200 = green · err = red' },
        { k: 'KEY-VAL', v: '键 fg-3 · 值 fg / accent' },
        { k: 'LATENCY', v: '中间显示真实毫秒数（教学可信感）' },
      ]} />
    </SubSec>
  );
}
function Panel({ verb, path, tone, children }) {
  const isReq = tone === 'req';
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="mono" style={{ fontSize: 18, fontWeight: 800, color: isReq ? 'var(--accent)' : 'var(--green)', letterSpacing: 0.5 }}>{verb}</span>
        <span className="mono" style={{ fontSize: 18, color: 'var(--fg-2)' }}>{path}</span>
      </div>
      <div className="mono" style={{ padding: '16px 18px', fontSize: 22, lineHeight: 1.7, flex: 1 }}>{children}</div>
    </div>
  );
}
function PanelLine({ k, v, accent }) {
  return (
    <div style={{ display: 'flex', gap: 12, whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <span style={{ color: 'var(--fg-3)' }}>{k}:</span>
      <span style={{ color: accent ? 'var(--accent)' : 'var(--fg)' }}>{v}</span>
    </div>
  );
}

/* ---------- F · Dashboard ---------- */
function Dashboard() {
  return (
    <SubSec name="仪表盘 · Dashboard" tag="LIVE METRICS">
      <Stage pattern="graph" label="● B-ROLL" labelR="03.F">
        <div style={{ position: 'absolute', inset: '12% 6%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto 1fr', gap: 14 }}>
          <KPI label="LATENCY · p50" v="312" unit="ms" />
          <KPI label="TOKENS / S" v="84.2" unit="t/s" hot />
          <KPI label="COST · 1k req" v="$2.40" unit="" />
          <div style={{ gridColumn: '1 / -1', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, padding: '18px 22px', display: 'flex', flexDirection: 'column' }}>
            <div className="meta" style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
              <span>REQUESTS · LAST 24H</span>
              <span style={{ color: 'var(--accent)' }}>● LIVE</span>
            </div>
            <Sparkline />
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'KPI CARD', v: '巨数字 + 单位 + 标签三件套' },
        { k: 'HOT CARD', v: '一张卡左上 accent 角标（讲解焦点）' },
        { k: 'SPARKLINE', v: 'hairline · 单 accent 高亮点' },
        { k: 'LIVE TAG', v: '右上 accent 圆点 + LIVE caps' },
      ]} />
    </SubSec>
  );
}
function KPI({ label, v, unit, hot }) {
  return (
    <div style={{ position: 'relative', background: 'var(--bg-card)', border: `1px solid ${hot ? 'var(--accent)' : 'var(--line)'}`, borderRadius: 8, padding: '18px 22px' }}>
      {hot && <span style={{ position: 'absolute', top: -1, left: -1, width: 10, height: 10, background: 'var(--accent)' }} />}
      <div className="meta" style={{ marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span className="big-num" style={{ fontSize: 48 }}>{v}</span>
        <span className="mono" style={{ fontSize: 18, color: 'var(--fg-3)' }}>{unit}</span>
      </div>
    </div>
  );
}
function Sparkline() {
  // 24 points, one peak emphasized
  const pts = [12, 14, 13, 18, 22, 19, 17, 20, 24, 28, 32, 30, 36, 42, 38, 48, 55, 62, 58, 64, 70, 68, 74, 80];
  const max = 80;
  const w = 100, h = 100;
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i / (pts.length - 1)) * w} ${h - (p / max) * h}`).join(' ');
  const peakX = ((pts.length - 1) / (pts.length - 1)) * w;
  const peakY = h - (pts[pts.length - 1] / max) * h;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', flex: 1, minHeight: 80 }}>
      <path d={path} fill="none" stroke="var(--fg-2)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
      <circle cx={peakX} cy={peakY} r="1.6" fill="var(--accent)" />
    </svg>
  );
}

/* ---------- shared window chrome ---------- */
function WindowChrome({ title, tabs, urlMode, url, sideBar, children }) {
  return (
    <div style={{ position: 'absolute', inset: '12% 8%', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--fg-3)' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--fg-3)' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--fg-3)' }} />
        {tabs ? (
          <div style={{ display: 'flex', gap: 14, marginLeft: 16 }}>
            {tabs.map((t, i) => (
              <span key={i} className="mono" style={{ fontSize: 16, color: i === 0 ? 'var(--fg)' : 'var(--fg-3)', paddingBottom: 4, borderBottom: i === 0 ? '1px solid var(--accent)' : 'none' }}>{t}</span>
            ))}
          </div>
        ) : (
          <span className="meta" style={{ marginLeft: 8, fontSize: 13 }}>{title}</span>
        )}
      </div>
      {urlMode && (
        <div style={{ padding: '10px 18px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="mono" style={{ fontSize: 16, color: 'var(--fg-3)' }}>◐</span>
          <span className="mono" style={{ fontSize: 16, color: 'var(--fg-2)' }}>{url}</span>
        </div>
      )}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {sideBar && (
          <div style={{ width: 90, borderRight: '1px solid var(--line)', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {['rag.py', 'utils.py', 'README'].map((f, i) => (
              <span key={i} className="mono" style={{ fontSize: 13, color: i === 0 ? 'var(--fg)' : 'var(--fg-3)', padding: '4px 6px', borderRadius: 3, background: i === 0 ? 'var(--bg-elev)' : 'transparent' }}>{f}</span>
            ))}
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      </div>
    </div>
  );
}

Object.assign(window, { FakeUISection });
