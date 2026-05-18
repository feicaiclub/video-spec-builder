/* ================================================================
   sections/broll-abstract.jsx — 05 · B-roll · 抽象兜底
   讲 AI 时多数概念没有具象图标 —— 这里是"以形会意"的通用版式
   ================================================================ */

function AbstractSection() {
  return (
    <Section id="abstract" num="05" title="B-roll · 抽象兜底"
      desc="当概念<em>没有具象图标</em>可用时的通用版式 —— <b>类比</b>、<b>黑盒</b>、<b>等式</b>、<b>光谱</b>、<b>冰山</b>、<b>对照</b>、<b>占位</b>。这是讲 AI 时最常用的一类，因为<em>抽象概念远多于具象图标</em>。">
      <Analogy />
      <BlackBox />
      <Equation />
      <AbstractSpectrum />
      <Iceberg />
      <Versus />
      <Placeholder />
    </Section>
  );
}

/* ---------- A · Analogy ---------- */
function Analogy() {
  return (
    <SubSec name="类比框 · Analogy" tag="UNFAMILIAR ≈ FAMILIAR">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.A">
        <div style={{ position: 'absolute', inset: '16% 6%', display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', gap: 0 }}>
          <AnalogyCard side="未知" tone="accent" big="RAG" sub="检索增强生成 · 模型 + 外挂资料库" />
          <div style={{ textAlign: 'center' }}>
            <div className="serif" style={{ fontSize: 76, color: 'var(--accent)', lineHeight: 1 }}>≈</div>
            <div className="meta" style={{ marginTop: 6 }}>就像</div>
          </div>
          <AnalogyCard side="熟悉" big="开卷考试" sub="不用背 · 翻书查 · 临场组织答案" />
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '左 = 未知 · 右 = 熟悉' },
        { k: 'CONNECTOR', v: '≈ · Instrument Serif italic · 76px · accent' },
        { k: 'SUB-LABEL', v: '"就像" 在 ≈ 下方做语义提示' },
        { k: 'CARDS', v: '完全对称 hairline 卡 · 左卡 accent 标签强化区分' },
      ]} />
    </SubSec>
  );
}
function AnalogyCard({ side, tone, big, sub }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, padding: '36px 36px', position: 'relative' }}>
      <Bracket size={18} color="var(--line-3)" thick={1} />
      <div className="meta" style={{ color: tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)', marginBottom: 18 }}>{side}</div>
      <div className="cn" style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.018em', lineHeight: 1, marginBottom: 14 }}>{big}</div>
      <div className="cn" style={{ fontSize: 26, color: 'var(--fg-2)', lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

/* ---------- B · Black Box ---------- */
function BlackBox() {
  return (
    <SubSec name="黑盒图 · Black Box" tag="INPUT → ? → OUTPUT">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.B">
        <div style={{ position: 'absolute', inset: '24% 6%', display: 'grid', gridTemplateColumns: '1fr 56px 1.5fr 56px 1fr', alignItems: 'center', gap: 0 }}>
          <Slot label="INPUT" cn="提示词" />
          <Arrow />
          <div style={{ position: 'relative', background: 'var(--bg-card)', border: '1px dashed var(--accent)', borderRadius: 8, padding: '36px 32px', textAlign: 'center' }}>
            <Bracket size={14} color="var(--accent)" thick={1} />
            <div className="meta" style={{ color: 'var(--accent)', marginBottom: 14 }}>BLACK BOX</div>
            <div className="big-num" style={{ fontSize: 84, color: 'var(--accent)', lineHeight: 0.85 }}>?</div>
            <div className="cn" style={{ fontSize: 26, color: 'var(--fg-2)', marginTop: 14 }}>175B 参数 · 不可解释</div>
          </div>
          <Arrow />
          <Slot label="OUTPUT" cn="回答" />
        </div>
      </Stage>
      <Params rows={[
        { k: 'BOX', v: 'dashed accent 描边（区别 hairline）+ 四角 bracket' },
        { k: '?', v: '84px · big-num · accent' },
        { k: 'USE', v: '讲"内部不可知"型概念' },
        { k: 'ARROW', v: 'hairline + 锐角三角 · line-3' },
      ]} />
    </SubSec>
  );
}
function Slot({ label, cn }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, padding: '30px 32px', textAlign: 'center' }}>
      <div className="meta" style={{ marginBottom: 12 }}>{label}</div>
      <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em' }}>{cn}</div>
    </div>
  );
}
function Arrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ height: 1, flex: 1, background: 'var(--line-3)' }} />
      <div style={{ width: 0, height: 0, borderLeft: '8px solid var(--line-3)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
    </div>
  );
}

/* ---------- C · Equation ---------- */
function Equation() {
  return (
    <SubSec name="概念等式 · Concept Equation" tag="A + B = C">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.C">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '0 6%' }}>
          <EqBox big="模型" sub="reasoning" />
          <EqOp ch="+" />
          <EqBox big="资料" sub="context" accent />
          <EqOp ch="=" />
          <EqBox big="可靠回答" sub="output" />
        </div>
        {/* 顶部细注释线，提升"教科书等式"感 */}
        <div style={{ position: 'absolute', top: '22%', left: '6%', right: '6%', display: 'flex', alignItems: 'center' }}>
          <span className="meta" style={{ color: 'var(--fg-3)' }}>EQ · 概念组合</span>
          <span style={{ flex: 1, height: 1, background: 'var(--line)', marginLeft: 12 }} />
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '横向居中 · 等距' },
        { k: 'OPERATOR', v: 'serif italic · 56px · accent' },
        { k: 'EMPHASIS', v: '关键项 accent 边框' },
        { k: 'HEADER', v: '顶部 EQ · hairline 注释栏（教科书味）' },
      ]} />
    </SubSec>
  );
}
function EqBox({ big, sub, accent }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: `1px solid ${accent ? 'var(--accent)' : 'var(--line)'}`, borderRadius: 8, padding: '30px 36px', textAlign: 'center', minWidth: 160 }}>
      <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 8 }}>{big}</div>
      <div className="meta" style={{ color: accent ? 'var(--accent)' : 'var(--fg-3)' }}>{sub}</div>
    </div>
  );
}
function EqOp({ ch }) {
  return <div className="serif" style={{ fontSize: 56, color: 'var(--accent)', lineHeight: 1 }}>{ch}</div>;
}

/* ---------- D · Spectrum ---------- */
function AbstractSpectrum() {
  return (
    <SubSec name="光谱 · Spectrum" tag="ONE AXIS · TWO POLES">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.D">
        <div style={{ position: 'absolute', inset: '24% 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
          {/* 左右极标签 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div className="meta" style={{ marginBottom: 6 }}>左极</div>
              <div className="cn" style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.012em' }}>纯背诵</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="meta" style={{ marginBottom: 6, color: 'var(--accent)' }}>右极</div>
              <div className="cn" style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.012em' }}>纯检索</div>
            </div>
          </div>
          {/* 轴 */}
          <div style={{ position: 'relative', height: 24, display: 'flex', alignItems: 'center' }}>
            {/* ticks */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between' }}>
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} style={{ width: 1, height: i % 5 === 0 ? 12 : 6, background: 'var(--line-3)', alignSelf: 'flex-end' }} />
              ))}
            </div>
            {/* main rule */}
            <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'var(--fg-3)', bottom: 0 }} />
            {/* marker */}
            <div style={{ position: 'absolute', left: '68%', bottom: -8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span className="meta" style={{ color: 'var(--accent)', whiteSpace: 'nowrap' }}>RAG · 0.68</span>
              <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '10px solid var(--accent)' }} />
            </div>
          </div>
          {/* legend */}
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-3)', marginTop: 28 }}>
            <span className="cn" style={{ fontSize: 18 }}>fine-tuning</span>
            <span className="cn" style={{ fontSize: 18 }}>vector search</span>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: '0 – 1 · 11 个 tick · 5n 主刻度' },
        { k: 'MARKER', v: '倒三角 · accent · 上方 mono 标签' },
        { k: 'POLES', v: '左 fg · 右 accent meta · 强调右极' },
        { k: 'USE', v: '"X 在 A 和 B 之间偏哪边" 类概念' },
      ]} />
    </SubSec>
  );
}

/* ---------- E · Iceberg ---------- */
function Iceberg() {
  return (
    <SubSec name="冰山 · Iceberg" tag="VISIBLE / HIDDEN">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.E">
        <div style={{ position: 'absolute', inset: '12% 8%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* 左侧 SVG 冰山 */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 200 200" width="100%" style={{ maxWidth: 320 }}>
              {/* 水面线 */}
              <line x1="0" y1="80" x2="200" y2="80" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="2" y="76" fontSize="6" fill="var(--accent)" fontFamily="var(--f-mono)" letterSpacing="1">— WATERLINE</text>
              {/* 上半（可见） */}
              <polygon points="100,30 130,80 70,80" fill="none" stroke="var(--fg)" strokeWidth="1.2" />
              {/* 下半（隐藏） */}
              <polygon points="55,80 145,80 165,160 130,185 70,185 35,160" fill="rgba(255,255,255,0.04)" stroke="var(--fg-3)" strokeWidth="1" strokeDasharray="2 3" />
              {/* 指引线 */}
              <line x1="120" y1="55" x2="185" y2="40" stroke="var(--fg-3)" strokeWidth="0.6" />
              <line x1="135" y1="140" x2="190" y2="155" stroke="var(--fg-3)" strokeWidth="0.6" />
              <circle cx="120" cy="55" r="1.2" fill="var(--fg)" />
              <circle cx="135" cy="140" r="1.2" fill="var(--fg-3)" />
            </svg>
          </div>
          {/* 右侧文字标注 */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
            <div>
              <div className="meta" style={{ color: 'var(--accent)', marginBottom: 10 }}>● 可见 · 10%</div>
              <div className="cn" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 8 }}>对话界面</div>
              <div className="cn" style={{ fontSize: 22, color: 'var(--fg-2)', lineHeight: 1.5 }}>你看到的输入框和回答</div>
            </div>
            <div style={{ height: 1, background: 'var(--line)' }} />
            <div>
              <div className="meta" style={{ marginBottom: 10 }}>○ 隐藏 · 90%</div>
              <div className="cn" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 8, color: 'var(--fg-2)' }}>权重 · 训练数据 · RLHF · 推理基建</div>
              <div className="cn" style={{ fontSize: 22, color: 'var(--fg-3)', lineHeight: 1.5 }}>真正决定回答质量的部分</div>
            </div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'WATERLINE', v: 'accent 虚线 + WATERLINE 标签' },
        { k: 'ABOVE', v: '实线 · 10% 标注 · accent' },
        { k: 'BELOW', v: '虚线 + 轻填充 · 90% · 灰阶' },
        { k: 'USE', v: '"看得见 / 看不见" 比例悬殊型概念' },
      ]} />
    </SubSec>
  );
}

/* ---------- F · Versus ---------- */
function Versus() {
  return (
    <SubSec name="对照 · Versus" tag="A vs B · DELTA">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.F">
        <div style={{ position: 'absolute', inset: '14% 8%', display: 'grid', gridTemplateColumns: '1fr 100px 1fr', alignItems: 'stretch', gap: 0 }}>
          <VsCard side="A" big="预训练" rows={[
            { k: '数据', v: '海量公开语料' },
            { k: '时长', v: '数月 · 数千卡' },
            { k: '产出', v: '通用基础模型' },
          ]} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ height: '100%', width: 1, background: 'var(--line)', position: 'absolute', top: 0 }} />
            <div className="serif" style={{ fontSize: 56, color: 'var(--accent)', background: 'var(--bg)', padding: '4px 12px', position: 'relative', zIndex: 1 }}>vs</div>
          </div>
          <VsCard side="B" accent big="微调" rows={[
            { k: '数据', v: '少量任务数据' },
            { k: '时长', v: '小时 · 单卡' },
            { k: '产出', v: '专业化变体' },
          ]} />
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: '左右等宽 · 中竖线 + vs serif' },
        { k: 'ROWS', v: '同序键值 · 行行对齐（方便逐行对比）' },
        { k: 'SIDE LABEL', v: '左 fg-3 · 右 accent · A / B' },
        { k: 'USE', v: '两个方案 / 两种概念逐项对比' },
      ]} />
    </SubSec>
  );
}
function VsCard({ side, accent, big, rows }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: `1px solid ${accent ? 'var(--accent)' : 'var(--line)'}`, borderRadius: 8, padding: '28px 32px' }}>
      <div className="meta" style={{ color: accent ? 'var(--accent)' : 'var(--fg-3)', marginBottom: 14 }}>{side}</div>
      <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 18 }}>{big}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map(r => (
          <div key={r.k} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 16, alignItems: 'baseline', paddingBottom: 8, borderBottom: '1px solid var(--line)' }}>
            <span className="meta">{r.k}</span>
            <span className="cn" style={{ fontSize: 22, color: 'var(--fg-2)' }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- G · Placeholder ---------- */
function Placeholder() {
  return (
    <SubSec name="占位框 · Placeholder" tag="WHEN YOU LACK AN ASSET">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.G">
        <div style={{ position: 'absolute', inset: '18% 18%', background: 'transparent', border: '1px solid var(--line-2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0, transparent 14px, rgba(255,255,255,0.04) 14px, rgba(255,255,255,0.04) 15px)', position: 'relative' }}>
          <Bracket size={20} color="var(--line-3)" thick={1} />
          <div className="meta" style={{ color: 'var(--accent)', marginBottom: 14 }}>[ DROP HERE ]</div>
          <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em' }}>GPT-4 屏幕录像</div>
          <div className="mono" style={{ fontSize: 22, color: 'var(--fg-3)', marginTop: 10 }}>1920 × 1080 · ≤ 8s · prores</div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'BG', v: '45° 斜条纹（4% 白）' },
        { k: 'BORDER', v: '1px line-2 + 四角 bracket' },
        { k: 'LABEL', v: '[ DROP HERE ] mono caps · accent' },
        { k: 'SPEC', v: '尺寸 · 时长 · 编码格式' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { AbstractSection });
