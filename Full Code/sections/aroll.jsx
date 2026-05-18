/* ================================================================
   sections/aroll.jsx — 01 · A-roll 出镜讲解（v3.1 编辑感升级）
   "克制" 版：hairline + 字号悬崖 + 0 阴影 + ornament 而非装饰
   ================================================================ */

function ARollSection() {
  return (
    <Section
      id="aroll"
      num="01"
      title="A-roll · 出镜讲解"
      desc="出镜时叠在画面上的三大件：<b>字幕高亮</b>、<b>关键词贴纸</b>、<b>概念卡</b>。<em>每个组件只做一件事</em> —— 不堆装饰、不加阴影、不层叠卡片。"
    >
      <SubtitleHighlight />
      <KeywordSticker />
      <ConceptCard />
    </Section>
  );
}

/* ---------- 字幕高亮 ---------- */
function SubtitleHighlight() {
  const tokens = ['让我们聊聊', '上下文', '工程', '不是', '提示词', '魔法'];
  const highlighted = [1, 2, 4];
  const [active, setActive] = React.useState(2);
  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % tokens.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <SubSec name="A · 字幕高亮 · Subtitle Highlight" tag="SPOKEN-WORD CAPTIONS">
      <Stage pattern="dot" label="● A-ROLL · LIVE" labelR="01.A">
        {/* 左上：讲者标签 */}
        <div style={{ position: 'absolute', top: '8%', left: '6%', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="dot-pulse" />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>SPEAKER · LIVE</span>
        </div>
        {/* 右上：时间码 */}
        <div className="mono" style={{ position: 'absolute', top: '8%', right: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>
          00:14:22 · CC ON
        </div>

        {/* 字幕主体 */}
        <div style={{
          position: 'absolute', left: '8%', right: '8%', bottom: '14%',
          display: 'flex', flexWrap: 'wrap', gap: '0 18px',
          fontSize: 'clamp(28px, 4.4vw, 56px)', fontWeight: 800,
          letterSpacing: '-0.018em', lineHeight: 1.1,
        }}>
          {tokens.map((tk, i) => {
            const isHot = highlighted.includes(i) && i === active;
            const isPast = highlighted.includes(i) && i < active;
            return (
              <span key={i} className="cn" style={{
                color: isHot ? 'var(--accent)' : isPast ? 'var(--fg)' : 'var(--fg-3)',
                position: 'relative',
                transition: 'color 280ms var(--ease-out)',
              }}>
                {tk}
                {isHot && (
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: '-12px',
                    height: 3, background: 'var(--accent)',
                    animation: 'lineIn 280ms var(--ease-out) forwards',
                    transformOrigin: 'left',
                  }} />
                )}
              </span>
            );
          })}
        </div>

        {/* 底部 hairline */}
        <div style={{ position: 'absolute', bottom: '8%', left: '8%', right: '8%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>EN / CN</span>
          <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>3 / 6 WORDS HOT</span>
        </div>

        <style>{`@keyframes lineIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
      </Stage>

      <Params rows={[
        { k: 'FONT',     v: '思源黑体 800 · clamp 28-56px' },
        { k: 'COLOR',    v: '默认 fg-3 · 念到 accent · 念过 fg' },
        { k: 'ACCENT',   v: '<b>仅 3px 底线</b> · 无底色块 · scaleX in' },
        { k: 'CHROME',   v: '左讲者 · 右时码 · 底 hairline + 计数' },
        { k: 'POSITION', v: '下 14% · 左右 8% padding' },
      ]} />
    </SubSec>
  );
}

/* ---------- 关键词贴纸 ---------- */
function KeywordSticker() {
  const items = [
    { txt: 'Context',          en: true,  pos: { top: '20%', left: '8%' },   tilt: -1.5 },
    { txt: '不是魔法',          en: false, pos: { top: '34%', right: '12%' }, tilt: 1 },
    { txt: '✱ Engineering',    en: true,  pos: { top: '62%', left: '14%' },  tilt: -0.5 },
  ];
  const [shown, setShown] = React.useState([0]);
  React.useEffect(() => {
    const id = setInterval(() => {
      setShown(s => {
        const next = (s[s.length - 1] + 1) % items.length;
        if (s.length >= items.length) return [next];
        return [...s, next];
      });
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <SubSec name="B · 关键词贴纸 · Keyword Sticker" tag="POP-IN LABELS">
      <Stage pattern="dot" label="● A-ROLL · STICKER" labelR="01.B">
        {/* 左上 eyebrow */}
        <div className="mono" style={{ position: 'absolute', top: '8%', left: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● KEYWORDS · 3</div>

        {items.map((it, i) => {
          if (!shown.includes(i)) return null;
          const isLast = shown[shown.length - 1] === i;
          return (
            <div key={i} className={it.en ? '' : 'cn'} style={{
              position: 'absolute', ...it.pos,
              padding: '14px 22px',
              background: isLast ? 'var(--fg)' : 'var(--bg-card)',
              color: isLast ? 'var(--bg)' : 'var(--fg)',
              border: isLast ? 'none' : '1px solid var(--line-2)',
              fontFamily: it.en ? 'var(--f-sans)' : 'var(--f-cn)',
              fontWeight: it.en ? 600 : 700,
              fontSize: 22, letterSpacing: it.en ? '-0.005em' : '0.01em',
              borderRadius: 6,
              animation: `stickIn 320ms var(--ease-spring) forwards`,
              transform: `rotate(${it.tilt}deg)`,
              transformOrigin: it.pos.left ? 'left center' : 'right center',
            }}>{it.txt}</div>
          );
        })}

        {/* 右下：scrollback meta */}
        <div className="mono" style={{ position: 'absolute', bottom: '8%', right: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>
          DUR · 320ms · SPRING
        </div>

        <style>{`
          @keyframes stickIn {
            from { opacity: 0; transform: scale(0.92) rotate(-1.5deg); }
            to   { opacity: 1; transform: scale(1) rotate(0); }
          }
        `}</style>
      </Stage>

      <Params rows={[
        { k: 'BG',       v: '反白 fg / 卡 bg-card · 二选一' },
        { k: 'BORDER',   v: '1px line-2 · 或无' },
        { k: 'PADDING',  v: '14 / 22px' },
        { k: 'RADIUS',   v: '6px · tilt ±1.5°' },
        { k: 'ENTER',    v: 'scale .92→1 + tilt 1.5°→0 · 320ms spring' },
        { k: 'RULE',     v: '<b>同屏 ≤ 3 个 · 至少 200px 间距</b>' },
      ]} />
    </SubSec>
  );
}

/* ---------- 概念卡 · 升级版 ---------- */
function ConceptCard() {
  return (
    <SubSec name="C · 概念卡 · Concept Card" tag="EXPLAINER CARD · REFINED">
      <Stage pattern="dot" label="● A-ROLL · CARD" labelR="01.C">

        {/* 左侧：模拟讲者侧 / 空白 — 让卡片"贴右" */}
        <div className="mono" style={{ position: 'absolute', top: '14%', left: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>
          ← SPEAKER FRAME
        </div>

        {/* 概念卡主体 */}
        <div style={{
          position: 'absolute', top: '12%', right: '6%',
          width: '50%',
        }}>
          {/* 头部：编号 + 时间码 */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● CONCEPT</span>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>02 / 12</span>
            </div>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>00:14:22</span>
          </div>

          {/* 主卡片 */}
          <div className="frame" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--line)',
            borderRadius: 8,
            padding: '32px 36px',
            position: 'relative',
          }}>
            <Crosses />
            {/* 标题 */}
            <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.12, marginBottom: 14 }}>
              Context 是<span style={{ color: 'var(--accent)' }}>材料</span>，
              <br />不是<span className="serif" style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--fg-2)' }}>提示</span>。
            </div>
            {/* 分隔 */}
            <div style={{ width: 28, height: 2, background: 'var(--accent)', marginBottom: 14 }} />
            {/* 正文 */}
            <div className="cn" style={{ fontSize: 16, fontWeight: 400, color: 'var(--fg-2)', lineHeight: 1.65 }}>
              把"足够相关"的资料喂给模型，比把"足够聪明"的提示给模型更有效。
            </div>
            {/* 底部：来源 */}
            <div style={{ marginTop: 22, paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>REF · ANTHROPIC ENG BLOG</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>HOLD · 4S</span>
            </div>
          </div>
        </div>
      </Stage>

      {/* 用法说明 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
        <UseCase label="01 · USE WHEN" body="抛出一个名词的<em>新定义</em>，需要在画面驻留 3-5s" />
        <UseCase label="02 · DON'T" body="不要叠加 glow / 阴影 / 渐变 · 不要双卡同屏" />
        <UseCase label="03 · ENTER" body="opacity 0→1 + y 12→0 · 700ms ease-out · 出场反向" />
      </div>

      <Params rows={[
        { k: 'BG',       v: 'var(--bg-card) #111114' },
        { k: 'BORDER',   v: '1px hairline + 4× 角十字针脚' },
        { k: 'RADIUS',   v: '8px' },
        { k: 'PADDING',  v: '32 / 36px · 宽度 50% 画面' },
        { k: 'TYPE',     v: 'mono 11 caps · cn 38/800 · cn 16/400 · 一字 serif italic' },
        { k: 'RULE',     v: '一卡只讲一个概念 · 不超过 3 行正文' },
        { k: 'SHADOW',   v: '<b>0</b> · 强调靠换色与字号悬崖' },
        { k: 'ENTER',    v: '700ms ease-out · 卡 + 角标错峰 80ms' },
      ]} />
    </SubSec>
  );
}

/* ---------- helpers ---------- */
function Crosses() {
  return (
    <>
      <span className="cross cross--tl" />
      <span className="cross cross--tr" />
      <span className="cross cross--bl" />
      <span className="cross cross--br" />
    </>
  );
}

function UseCase({ label, body }) {
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--line)',
      borderRadius: 8, padding: '18px 20px',
    }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 10 }}>{label}</div>
      <div className="cn" style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: body.replace(/<em>(.*?)<\/em>/g, '<em style="color:var(--accent);font-style:normal">$1</em>') }} />
    </div>
  );
}

Object.assign(window, { ARollSection });
