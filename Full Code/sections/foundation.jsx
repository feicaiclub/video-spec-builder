/* ================================================================
   sections/foundation.jsx — 00 · 视觉地基 (SpaceX × Grok × X)
   ================================================================ */

function FoundationSection() {
  return (
    <Section
      id="foundation"
      num="00"
      title="VISUAL FOUNDATION · 视觉地基"
      desc='这套系统的视觉原则借鉴 <b>SpaceX × Grok × X</b> —— <em>纯黑底</em>、<em>纯白字</em>、<em>几何 sans</em>、<em>condensed 数字</em>。<b>0 阴影 · 0 渐变 · 0 装饰插画 · 单 accent 制</b>。所有信息靠字重悬崖、留白、hairline 与 mono caps 注脚说话。'
    >
      <FoundColors />
      <FoundType />
      <FoundSpace />
      <FoundMotion />
      <FoundDeco />
    </Section>
  );
}

/* ---------- Color ---------- */
function FoundColors() {
  const swatches = [
    { k: '--bg',       v: '#000000', note: '纯黑底 · 0,0,0 太空黑' },
    { k: '--bg-card',  v: '#0A0A0A', note: '卡片表面' },
    { k: '--bg-elev',  v: '#141414', note: '抬起层' },
    { k: '--fg',       v: '#FFFFFF', note: '纯白主前景' },
    { k: '--fg-2',     v: 'rgba(255,255,255,.66)', note: '次级文字' },
    { k: '--fg-3',     v: 'rgba(255,255,255,.42)', note: 'meta · caption' },
    { k: '--line',     v: 'rgba(255,255,255,.08)', note: 'hairline 边线' },
    { k: '--accent',   v: 'var(--accent)', note: '单 accent · Tweaks 可换' },
  ];
  return (
    <SubSec name="色彩 · Color" tag="PURE BLACK + PURE WHITE">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
        {swatches.map(s => (
          <div key={s.k} style={{
            background: 'var(--bg-card)', border: '1px solid var(--line)',
            borderRadius: 2, padding: 16,
          }}>
            <div style={{
              width: '100%', height: 88, marginBottom: 14,
              background: s.v,
              border: s.k === '--bg' || s.v === '#000000' ? '1px solid var(--line)' : 'none',
              borderRadius: 0,
            }} />
            <div className="mono" style={{ fontSize: 11, color: 'var(--fg)', marginBottom: 4 }}>{s.k}</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', marginBottom: 8 }}>{s.v}</div>
            <div className="cn" style={{ fontSize: 12, color: 'var(--fg-2)', lineHeight: 1.5 }}>{s.note}</div>
          </div>
        ))}
      </div>
      <Params rows={[
        { k: 'CONTRAST', v: 'FG / BG = 21.0 : 1 (AAA · 纯黑白)' },
        { k: 'ACCENT RULE', v: '一屏最多 1 处用色 · 默认 white (Grok-style)' },
        { k: 'BORDER', v: '1px solid rgba(255,255,255,.08)' },
        { k: 'SHADOW', v: '<b style="color: var(--accent)">0 · 不使用</b>' },
        { k: 'GRADIENT', v: '<b style="color: var(--accent)">0 · 唯一例外: area chart fill</b>' },
        { k: 'INSPIRED BY', v: 'SpaceX · xAI/Grok · X (Twitter)' },
      ]} />
    </SubSec>
  );
}

/* ---------- Type ---------- */
function FoundType() {
  return (
    <SubSec name="字体 · Type" tag="SPACE GROTESK · BARLOW COND · MONO">
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
        background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 2,
        overflow: 'hidden', marginBottom: 16,
      }}>
        <div style={{ background: 'var(--bg-card)', padding: 28 }}>
          <div className="meta" style={{ marginBottom: 14 }}>SANS · SPACE GROTESK</div>
          <div style={{ fontFamily: 'var(--f-sans)', fontSize: 56, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: 10 }}>Aa Bb 01</div>
          <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>主力 sans · 几何 grotesque · 替代 Brandon Grotesque<br/>weights = <span className="mono">400 / 500 / 600 / 700</span></div>
        </div>
        <div style={{ background: 'var(--bg-card)', padding: 28 }}>
          <div className="meta" style={{ marginBottom: 14 }}>COND · BARLOW SEMI</div>
          <div className="cond" style={{ fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.9, marginBottom: 10 }}>96 / T-0</div>
          <div className="cn" style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>condensed 数字 · 海报大字 · 替代 Pragmatica Cond (SpaceX 发射页)</div>
        </div>
        <div style={{ background: 'var(--bg-card)', padding: 28 }}>
          <div className="meta" style={{ marginBottom: 14 }}>CJK · 思源黑体</div>
          <div className="cn" style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 10 }}>视频组件</div>
          <div className="cn" style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>中文主力<br/>weights = <span className="mono">400 / 500 / 700 / 900</span></div>
        </div>
      </div>

      {/* type ramp */}
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--line)',
        borderRadius: 2, padding: '32px 36px', marginBottom: 16,
      }}>
        <div className="meta" style={{ marginBottom: 24 }}>TYPE RAMP · 字号悬崖</div>
        <Ramp size={96} weight={700} ls="-0.03em" font="cond" label="HERO · COND 96 / 700">A SYSTEM FOR VIDEO</Ramp>
        <Ramp size={64} weight={700} ls="-0.025em" font="cond" label="DISPLAY · COND 64 / 700">SECTION TITLE</Ramp>
        <Ramp size={48} weight={700} ls="-0.018em" font="cond" label="H1 · COND 48 / 700">BIG STAT · 312ms</Ramp>
        <Ramp size={32} weight={700} ls="-0.012em" label="H2 · SANS 32 / 700">章节标题 · sans 800</Ramp>
        <Ramp size={22} weight={600} ls="-0.005em" label="H3 · SANS 22 / 600">卡片标题 · sans 600</Ramp>
        <Ramp size={15} weight={400} ls="0" label="BODY · SANS 15 / 400">正文段落。保持轻盈，让黑色背景与白色文字之间的对比承担层级。</Ramp>
        <Ramp size={11} weight={500} ls="0.22em" caps label="MONO · 11 / 0.22em">SPEC · MISSION · T-MINUS</Ramp>
      </div>

      <Params rows={[
        { k: 'WEIGHT RULE', v: '只用 <b style="color: var(--accent)">400 / 600 / 700</b>，跳过 500' },
        { k: 'TRACKING', v: 'cond -0.03em · sans -0.025 → 0 · mono caps 0.22em' },
        { k: 'LINE HEIGHT', v: '标题 0.86-1.0 · 正文 1.55-1.7' },
        { k: 'MONO USAGE', v: '编号 · 时间戳 · 任务码 · T-MINUS' },
        { k: 'COND USAGE', v: '海报大字 · 大数字 · 章节大标题' },
        { k: 'CJK STACK', v: '思源黑体 → 苹方 → 鸿蒙' },
      ]} />
    </SubSec>
  );
}

function Ramp({ size, weight, ls, label, caps, font, children }) {
  const family = caps ? 'var(--f-mono)' : font === 'cond' ? 'var(--f-cond)' : undefined;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'baseline', gap: 32, padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
      <div className="meta" style={{ fontSize: 10 }}>{label}</div>
      <div className="cn" style={{
        fontSize: size, fontWeight: weight, letterSpacing: ls, lineHeight: 1.05,
        textTransform: caps || font === 'cond' ? 'uppercase' : 'none',
        fontFamily: family,
      }}>{children}</div>
    </div>
  );
}

/* ---------- Spacing / radii ---------- */
function FoundSpace() {
  const spaces = [
    { k: '--space-1', v: 8,  use: 'icon · meta gap' },
    { k: '--space-2', v: 16, use: '行间 · 卡片内' },
    { k: '--space-3', v: 24, use: '卡内段落' },
    { k: '--space-4', v: 40, use: '组件间' },
    { k: '--space-5', v: 64, use: '小节间' },
    { k: '--space-6', v: 96, use: '章节间' },
  ];
  const radii = [
    { k: '--r-0', v: 0, use: 'wordmark · plate' },
    { k: '--r-1', v: 2, use: '默认 (SpaceX 极简)' },
    { k: '--r-2', v: 4, use: '柔化 · tag' },
    { k: '--r-3', v: 8, use: '大模块 (谨慎)' },
  ];
  return (
    <SubSec name="间距 & 圆角 · Spacing" tag="8-PT GRID · MINIMAL RADII">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 2, padding: '28px 32px' }}>
          <div className="meta" style={{ marginBottom: 22 }}>SPACE SCALE · 8-pt</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {spaces.map(s => (
              <div key={s.k} style={{ display: 'grid', gridTemplateColumns: '110px 70px 1fr', alignItems: 'center', gap: 16 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg)' }}>{s.k}</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', textAlign: 'right' }}>{s.v}px</span>
                <div style={{ position: 'relative', height: 10, background: 'rgba(255,255,255,0.04)' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(s.v / 96) * 100}%`, background: 'var(--accent)' }} />
                  <span className="cn" style={{ position: 'absolute', left: `calc(${(s.v / 96) * 100}% + 10px)`, top: -5, fontSize: 12, color: 'var(--fg-2)', whiteSpace: 'nowrap' }}>{s.use}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 2, padding: '28px 32px' }}>
          <div className="meta" style={{ marginBottom: 22 }}>RADII · 4 档</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {radii.map(r => (
              <div key={r.k} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, background: 'var(--bg)', border: '1px solid var(--line-2)', borderRadius: r.v, flexShrink: 0 }} />
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--fg)', marginBottom: 4 }}>{r.k} · {r.v}px</div>
                  <div className="cn" style={{ fontSize: 12, color: 'var(--fg-2)' }}>{r.use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Params rows={[
        { k: 'GRID', v: '8-pt 基 · 跳过 32/48/56（避免节奏混乱）' },
        { k: 'DEFAULT RADIUS', v: '<b style="color: var(--accent)">2px</b> · SpaceX 几何感' },
        { k: 'BORDER WIDTH', v: '永远 1px · 不用 2px 描边' },
        { k: 'NO PILL', v: '不使用胶囊 / 完全圆角（除 KPI 圆环）' },
      ]} />
    </SubSec>
  );
}

/* ---------- Motion ---------- */
function FoundMotion() {
  const [trig, setTrig] = useState(0);
  const durs = [
    { k: '--d-1', v: '200ms', use: '微状态（hover · focus）' },
    { k: '--d-2', v: '400ms', use: 'hot 高亮态' },
    { k: '--d-3', v: '700ms', use: '卡片入场' },
    { k: '--d-4', v: '1100ms', use: 'hero 入场' },
  ];
  return (
    <SubSec name="动效 · Motion" tag="LONG EASE-OUT · NO BOUNCE">
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--line)',
        borderRadius: 2, padding: 32, marginBottom: 16,
      }}>
        <button onClick={() => setTrig(t => t + 1)} style={{
          marginBottom: 28, padding: '10px 16px', background: 'var(--fg)',
          border: '0', color: 'var(--bg)',
          fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.22em',
          textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontWeight: 600,
        }}>▶ REPLAY MOTION</button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {durs.map((d, i) => (
            <div key={d.k}>
              <div className="meta" style={{ marginBottom: 10 }}>{d.k} · {d.v}</div>
              <div style={{ height: 56, position: 'relative', background: 'var(--bg)', borderRadius: 2, marginBottom: 10, overflow: 'hidden', border: '1px solid var(--line)' }}>
                <div key={trig + '-' + i}
                  style={{
                    position: 'absolute', top: 4, left: 4, bottom: 4, width: 48,
                    background: 'var(--accent)',
                    animation: `slide ${d.v} var(--ease-out) forwards`,
                  }}
                />
              </div>
              <div className="cn" style={{ fontSize: 12, color: 'var(--fg-2)' }}>{d.use}</div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes slide {
            from { transform: translateX(0); opacity: 0; }
            to   { transform: translateX(calc(100% + 240%)); opacity: 1; }
          }
        `}</style>
      </div>
      <Params rows={[
        { k: 'EASING · DEFAULT', v: 'cubic-bezier(.22, 1, .36, 1) · ease-out' },
        { k: 'EASING · SOFT', v: 'cubic-bezier(.4, 0, .2, 1)' },
        { k: 'EASING · SPRING', v: '仅在弹出/弹入时少量使用' },
        { k: 'DISPLACEMENT', v: '8-16px · 不大幅滑动' },
        { k: 'BOUNCE', v: '<b style="color: var(--accent)">禁用</b>（除非 sticker）' },
        { k: 'ENTER PATTERN', v: 'opacity 0→1 + translateY 8→0' },
      ]} />
    </SubSec>
  );
}

/* ---------- Decoration / patterns ---------- */
function FoundDeco() {
  return (
    <SubSec name="装饰元素 · Decoration" tag="HAIRLINE · TICK · MISSION CODE">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
        <DecoBlock name="DOT GRID" desc="HUD 风环境感">
          <div style={{ width: '100%', height: 96, backgroundImage: 'radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1.2px)', backgroundSize: '12px 12px' }} />
        </DecoBlock>
        <DecoBlock name="HAIRLINE GRID" desc="工程图味">
          <div style={{ width: '100%', height: 96, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </DecoBlock>
        <DecoBlock name="SCAN LINES" desc="CRT 复古">
          <div style={{ width: '100%', height: 96, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 4px)' }} />
        </DecoBlock>
        <DecoBlock name="CORNER CROSS" desc="十字针脚">
          <div style={{ width: '100%', height: 96, position: 'relative', padding: 14 }}>
            <span className="cross cross--tl" />
            <span className="cross cross--tr" />
            <span className="cross cross--bl" />
            <span className="cross cross--br" />
          </div>
        </DecoBlock>
        <DecoBlock name="TICK ROW" desc="信号 / 时码">
          <div style={{ width: '100%', height: 96, display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px' }}>
            <span className="meta" style={{ color: 'var(--accent)' }}>● 00:14:22</span>
            <div style={{ flex: 1, height: 1, background: 'var(--line-2)' }} />
            <span className="meta">CH—01</span>
          </div>
        </DecoBlock>
        <DecoBlock name="MISSION CODE" desc="任务编号">
          <div style={{ width: '100%', height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="mission" style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent)' }}>SCN-03 / FRAME 0142</div>
          </div>
        </DecoBlock>
        <DecoBlock name="T-MINUS" desc="倒计时大字">
          <div style={{ width: '100%', height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <span className="meta" style={{ color: 'var(--fg-3)' }}>T-</span>
            <span className="t-minus" style={{ fontSize: 44, color: 'var(--accent)' }}>00:42</span>
          </div>
        </DecoBlock>
        <DecoBlock name="BRACKET WRAP" desc="术语高亮">
          <div style={{ width: '100%', height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="cn bracket" style={{ fontSize: 22, fontWeight: 600 }}>CONTEXT</span>
          </div>
        </DecoBlock>
      </div>
      <Params rows={[
        { k: 'CORNER CROSS', v: '12px arm · 1px stroke · 4 角对称' },
        { k: 'DOT GRID', v: '12px spacing · rgba(255,255,255,.22)' },
        { k: 'MISSION CODE', v: 'mono caps 0.32em letter-spacing' },
        { k: 'USAGE', v: '场景背景 1 种 + 边角 1 种 · 不叠加' },
      ]} />
    </SubSec>
  );
}

function DecoBlock({ name, desc, children }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>{children}</div>
      <div style={{ padding: 14 }}>
        <div className="meta" style={{ marginBottom: 6 }}>{name}</div>
        <div className="cn" style={{ fontSize: 12, color: 'var(--fg-2)' }}>{desc}</div>
      </div>
    </div>
  );
}

/* legacy Bracket — kept for broll-abstract */
function Bracket({ size = 20, color = 'currentColor', thick = 1 }) {
  const c = { position: 'absolute', width: size, height: size };
  const arm = { background: color };
  return (
    <>
      <span style={{ ...c, top: 8, left: 8 }}>
        <span style={{ position: 'absolute', top: 0, left: 0, width: size, height: thick, ...arm }} />
        <span style={{ position: 'absolute', top: 0, left: 0, height: size, width: thick, ...arm }} />
      </span>
      <span style={{ ...c, top: 8, right: 8 }}>
        <span style={{ position: 'absolute', top: 0, right: 0, width: size, height: thick, ...arm }} />
        <span style={{ position: 'absolute', top: 0, right: 0, height: size, width: thick, ...arm }} />
      </span>
      <span style={{ ...c, bottom: 8, left: 8 }}>
        <span style={{ position: 'absolute', bottom: 0, left: 0, width: size, height: thick, ...arm }} />
        <span style={{ position: 'absolute', bottom: 0, left: 0, height: size, width: thick, ...arm }} />
      </span>
      <span style={{ ...c, bottom: 8, right: 8 }}>
        <span style={{ position: 'absolute', bottom: 0, right: 0, width: size, height: thick, ...arm }} />
        <span style={{ position: 'absolute', bottom: 0, right: 0, height: size, width: thick, ...arm }} />
      </span>
    </>
  );
}

Object.assign(window, { FoundationSection, Bracket });
