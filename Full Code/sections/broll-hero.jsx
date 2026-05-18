/* ================================================================
   sections/broll-hero.jsx — 04 · B-roll · 重锤（v3.1 编辑感升级）
   ================================================================ */

function HeroSection() {
  return (
    <Section id="hero" num="04" title="B-roll · 重锤"
      desc="撑满全屏的<b>重击</b>版式 —— 在 B-roll 段落之间制造节奏对比。<em>稀少 · 不堆叠</em>，一支视频用 2-3 次足够。">
      <BigType /><BigNumber /><PullQuote /><FlashCard />
    </Section>
  );
}

/* 通用：四角十字针脚 */
function Crosses({ accent = false }) {
  const cls = accent ? 'cross cross--accent' : 'cross';
  return (
    <>
      <span className={`${cls} cross--tl`} />
      <span className={`${cls} cross--tr`} />
      <span className={`${cls} cross--bl`} />
      <span className={`${cls} cross--br`} />
    </>
  );
}

/* ============== A · 大字海报 ============== */
function BigType() {
  return (
    <SubSec name="A · 大字海报 · Big Type" tag="TYPOGRAPHIC POSTER">
      <Stage pattern="dot" label="● B-ROLL · CHAPTER" labelR="04.A">
        {/* 左上：序号标记 */}
        <div style={{ position: 'absolute', top: '8%', left: '6%', display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>CHAPTER</span>
          <span className="mono" style={{ fontSize: 72, fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.04em' }}>03</span>
        </div>
        {/* 右上：guide rule */}
        <div style={{ position: 'absolute', top: '8%', right: '6%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>CONTEXT IS EVERYTHING</span>
          <span style={{ width: 60, height: 1, background: 'var(--accent)' }} />
        </div>
        {/* 主标 */}
        <div style={{ position: 'absolute', inset: '32% 6% 18%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="cn" style={{ fontSize: 'clamp(64px, 9vw, 124px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.92 }}>
            模型不缺<br />
            <span className="serif" style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>聪明，</span>
            缺材料。
          </div>
        </div>
        {/* 底栏：刻度 + 元信息 */}
        <div style={{ position: 'absolute', bottom: '8%', left: '6%', right: '6%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="tick-rule" style={{ color: 'var(--fg-3)' }}>
            {Array.from({ length: 26 }).map((_, i) => <i key={i} />)}
          </div>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>01 / 12 · 03:42</span>
        </div>
      </Stage>
      <Params rows={[
        { k: 'SIZE @4K', v: '180-220px · 800' },
        { k: 'ACCENT',   v: '其中一字换 Instrument Serif italic' },
        { k: 'CHROME',   v: '左上 idx + 右上 rule + 底刻度 + 时码' },
        { k: 'ENTER',    v: '主字 1100ms · 角标 280ms 延迟' },
      ]} />
    </SubSec>
  );
}

/* ============== B · 大数字 ============== */
function BigNumber() {
  return (
    <SubSec name="B · 大数字 · Big Stat" tag="STATISTIC HERO">
      <Stage pattern="graph" label="● B-ROLL · STAT" labelR="04.B">
        {/* 左上 eyebrow */}
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● FINDING / 2024Q4</div>
          <div className="serif" style={{ fontSize: 26, color: 'var(--fg-2)', fontStyle: 'italic', marginTop: 6 }}>State of AI Survey</div>
        </div>
        {/* 右上 source */}
        <div style={{ position: 'absolute', top: '8%', right: '6%', textAlign: 'right' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>N = 2,840 · 12 COUNTRIES</div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)', marginTop: 4 }}>METHOD · STRATIFIED · ±2.1%</div>
        </div>
        {/* 巨大数字 */}
        <div style={{ position: 'absolute', inset: '24% 6% 24%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div className="big-num" style={{ fontSize: 'clamp(180px, 28vw, 360px)', color: 'var(--accent)' }}>
            87<span style={{ fontSize: '0.32em', color: 'var(--fg)', verticalAlign: '0.6em' }}>%</span>
          </div>
        </div>
        {/* 右侧 caption */}
        <div style={{ position: 'absolute', right: '6%', top: '38%', bottom: '24%', width: '38%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ width: 32, height: 2, background: 'var(--accent)', marginBottom: 14 }} />
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
            of developers expect <span style={{ color: 'var(--accent)' }}>prompt engineering</span> to be replaced by <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>context engineering</span>
          </div>
        </div>
        {/* 底部 dashed connector */}
        <div style={{ position: 'absolute', bottom: '10%', left: '6%', right: '6%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>STATUS · LIVE</span>
          <span style={{ flex: 1, height: 0, borderTop: '1px dashed var(--line-2)' }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>FIG. 04.B</span>
        </div>
      </Stage>
      <Params rows={[
        { k: 'NUMBER',  v: '280-360px · mono · accent · tabular-nums' },
        { k: 'UNIT',    v: '0.32em · fg · 上偏 0.6em' },
        { k: 'CAPTION', v: '28 / 800 · 32×2 accent rule' },
        { k: 'CHROME',  v: 'left finding · right method · footer dashed' },
      ]} />
    </SubSec>
  );
}

/* ============== C · 引用块 ============== */
function PullQuote() {
  return (
    <SubSec name="C · 引用块 · Pull Quote" tag="EDITORIAL MOMENT">
      <Stage label="● B-ROLL · QUOTE" labelR="04.C">
        {/* 左上分类 */}
        <div style={{ position: 'absolute', top: '8%', left: '6%', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 18, height: 1, background: 'var(--accent)' }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>ON CRAFT</span>
        </div>
        {/* 巨型左引号（装饰）*/}
        <div className="serif" style={{ position: 'absolute', top: '14%', left: '6%', fontSize: 280, fontStyle: 'italic', color: 'var(--accent)', opacity: 0.18, lineHeight: 0.7, fontWeight: 400 }}>"</div>
        {/* 引文主体 */}
        <div style={{ position: 'absolute', inset: '24% 10% 22% 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="serif" style={{ fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.12, letterSpacing: '-0.01em', color: 'var(--fg)', fontStyle: 'italic', fontWeight: 400 }}>
            The model is a <span style={{ color: 'var(--accent)' }}>compiler,</span>
            <br />not an oracle.
            <br /><span style={{ color: 'var(--fg-2)' }}>You still own the spec.</span>
          </div>
        </div>
        {/* byline */}
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', right: '10%', display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ width: 36, height: 1, background: 'var(--fg-3)' }} />
          <div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: 'var(--fg)' }}>ANDREJ KARPATHY</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)', marginTop: 4 }}>FORMER TESLA AI · 2023</div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'FONT',   v: 'Instrument Serif italic · 76px' },
        { k: 'ACCENT', v: '一个关键词换 accent · 一句弱化 fg-2' },
        { k: 'MARK',   v: '巨型左引号 · opacity 0.18 装饰' },
        { k: 'BYLINE', v: 'mono caps + 36px rule' },
      ]} />
    </SubSec>
  );
}

/* ============== D · 反白闪屏 ============== */
function FlashCard() {
  const [flip, setFlip] = React.useState(false);
  React.useEffect(() => {
    const id = setInterval(() => setFlip(f => !f), 1400);
    return () => clearInterval(id);
  }, []);
  const inverted = flip;
  return (
    <SubSec name="D · 反白闪屏 · Inversion Flash" tag="CUT-IN TRANSITION">
      <Stage label="● B-ROLL · FLASH" labelR="04.D">
        <div style={{ position: 'absolute', inset: 0, background: inverted ? 'var(--bg-flash)' : 'var(--bg)', transition: 'background 200ms steps(1)' }}>
          {/* 四角十字 */}
          <span className="cross cross--tl" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', top: '5%', left: '5%' }} />
          <span className="cross cross--tr" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', top: '5%', right: '5%' }} />
          <span className="cross cross--bl" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', bottom: '5%', left: '5%' }} />
          <span className="cross cross--br" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', bottom: '5%', right: '5%' }} />
          {/* 左上小标 */}
          <div className="mono" style={{ position: 'absolute', top: '8%', left: '8%', fontSize: 11, letterSpacing: '0.2em', color: inverted ? 'var(--bg)' : 'var(--fg-3)' }}>● BEAT · STOP</div>
          {/* 主字 */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
            <span className="cn" style={{ fontSize: 'clamp(56px, 9vw, 112px)', fontWeight: 800, color: inverted ? 'var(--bg)' : 'var(--fg)', letterSpacing: '-0.03em' }}>
              等一下。
            </span>
          </div>
          {/* 右下时间码 */}
          <div className="mono" style={{ position: 'absolute', bottom: '8%', right: '8%', fontSize: 11, letterSpacing: '0.2em', color: inverted ? 'var(--bg)' : 'var(--fg-3)' }}>06 FR · 240 MS</div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'USE',      v: '段落切换 · 修辞停顿 · 抛出问题前' },
        { k: 'DURATION', v: '6-12 帧（200-400ms）· 不超过 1s' },
        { k: 'SWAP',     v: 'bg ↔ bg-flash · steps(1) 瞬切' },
        { k: 'RULE',     v: '<b>每支视频 ≤ 2 次</b> · 不要连续' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { HeroSection });
