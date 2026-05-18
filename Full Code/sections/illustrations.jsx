/* ================================================================
   sections/illustrations.jsx — 10 · 图标系统 · ICON SYSTEM
   v3.2 · 删除场景插画 · 只留 Lucide 图标
   ================================================================ */

/* ---------- Lucide React wrapper ---------- */
function L({ name, size = 24, sw = 1.5, style, className }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    ref.current.appendChild(i);
    window.lucide.createIcons({
      attrs: { 'stroke-width': sw, width: size, height: size, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      nameAttr: 'data-lucide',
    });
  }, [name, size, sw]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', lineHeight: 0, color: 'currentColor', ...style }} />;
}

function IconCell({ name, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        padding: '22px 8px',
        border: `1px solid ${hover ? 'var(--accent)' : 'var(--line)'}`,
        borderRadius: 2,
        color: hover ? 'var(--accent)' : 'var(--fg-2)',
        transition: 'color 240ms var(--ease-out), border-color 240ms var(--ease-out)',
        background: hover ? 'rgba(255,255,255,.04)' : 'transparent',
      }}
    >
      <L name={name} size={28} sw={1.5} />
      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>{label}</div>
    </div>
  );
}

/* ============== I-0 · 规范 ============== */
function IllRules() {
  const rules = [
    ['LIBRARY', 'Lucide Icons · 1500+ · 开源 ISC · 行业标准'],
    ['STROKE',  '1 / 1.5 / 2 px · 默认 1.5 · 同屏统一'],
    ['SIZE',    '14 / 18 / 24 / 32 · 大于 48 → 改用大字'],
    ['COLOR',   '继承 currentColor · 默认 fg-2 · 强调 accent'],
    ['SPACING', '与字基线对齐 · 前后 8px gap'],
    ['POLICY',  '不要混入其他 icon set · 不要手绘 · 不要装饰插画'],
  ];
  const policy = [
    ['NO ILLUSTRATION', '本系统禁止使用场景插画 / 卡通人物'],
    ['NO ICON SHADOW',  '禁止描边外的阴影 / glow / 渐变'],
    ['NO HUE',          '禁止主题色之外的颜色，单 accent 制'],
    ['NO ROUND CORNER', '图标容器仅 0 / 2 / 4px radius'],
    ['NO EMOJI',        '禁止 emoji / 表情 / 表情字符'],
    ['SLASH MOTIF',     '允许使用 / · X · △ 等几何字符作 motif'],
  ];
  const Row = ({ k, v }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'baseline', borderBottom: '1px solid var(--line)', padding: '10px 0' }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>{k}</div>
      <div className="cn" style={{ fontSize: 14, color: 'var(--fg)' }}>{v}</div>
    </div>
  );
  return (
    <SubSec name="I-0 · 系统规范 · Rules" tag="HOW WE USE ICONS">
      <Stage pattern="grid" label="● ICON · SYSTEM RULES" labelR="10.I0">
        <div style={{ position: 'absolute', inset: '6% 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <div>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE · LUCIDE</div>
            <div className="cn" style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>UI 信息层 · 注脚 · 节点 · 状态</div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column' }}>
              {rules.map(([k, v]) => <Row key={k} k={k} v={v} />)}
            </div>
          </div>
          <div>
            <div className="meta" style={{ color: 'var(--accent)' }}>POLICY · WHAT WE DON'T DO</div>
            <div className="cn" style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>克制 · 几何 · 单色</div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column' }}>
              {policy.map(([k, v]) => <Row key={k} k={k} v={v} />)}
            </div>
          </div>
        </div>
      </Stage>
    </SubSec>
  );
}

/* ============== I-1 · Stroke 对比 ============== */
function StrokeShowcase() {
  const sample = 'rocket';
  const variants = [
    { sw: 1,    size: 84, label: 'STROKE 1',    note: '极细 · 注脚 / 弱化' },
    { sw: 1.5,  size: 84, label: 'STROKE 1.5',  note: '默认 · 90% 场景', active: true },
    { sw: 2,    size: 84, label: 'STROKE 2',    note: '粗 · 强调 / 标题' },
    { sw: 2.5,  size: 84, label: 'STROKE 2.5',  note: '重锤 · 慎用' },
  ];
  return (
    <SubSec name="I-1 · 描边粗细 · 4 档" tag="STROKE WEIGHTS">
      <Stage pattern="dot" label="● ICONS · STROKES" labelR="10.I1">
        <div style={{ position: 'absolute', inset: '12% 5%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {variants.map(v => (
            <div key={v.sw} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 22, padding: '40px 18px',
              border: '1px solid ' + (v.active ? 'var(--accent)' : 'var(--line-2)'),
              background: v.active ? 'var(--bg-card)' : 'transparent',
              borderRadius: 2,
            }}>
              <L name={sample} size={v.size} sw={v.sw} style={{ color: v.active ? 'var(--accent)' : 'var(--fg-2)' }} />
              <div style={{ textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', color: v.active ? 'var(--accent)' : 'var(--fg-3)' }}>{v.label}</div>
                <div className="cn" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 4 }}>{v.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'DEFAULT', v: '1.5px · 与 hairline 边框视觉等重' },
        { k: 'ACCENT',  v: '2px · 当图标自身是"被强调"的元素' },
        { k: 'AVOID',   v: '同一屏混用 3 档以上 stroke' },
      ]} />
    </SubSec>
  );
}

/* ============== I-2 · 图标库 ============== */
const LU_ICONS = [
  ['user',           '用户'],   ['users',          '团队'],   ['message-circle','对话'],   ['mic',           '语音'],
  ['mail',           '邮件'],   ['phone',          '电话'],   ['hand',           '提示'],   ['user-cog',      '账户'],
  ['database',       '数据库'], ['cloud',          '云'],     ['cpu',            '算力'],   ['hard-drive',    '存储'],
  ['network',        '图谱'],   ['git-branch',     '层级'],   ['workflow',       '流程'],   ['layers',        '栈'],
  ['bot',            'AI'],     ['brain',          '推理'],   ['wand-sparkles',  '生成'],   ['zap',           '快速'],
  ['terminal',       '终端'],   ['code',           '代码'],   ['function-square','函数'],   ['plug',          '集成'],
  ['file-text',      '文档'],   ['book-open',      '阅读'],   ['notebook-pen',   '笔记'],   ['bookmark',      '收藏'],
  ['quote',          '引用'],   ['list-checks',    '清单'],   ['tag',            '标签'],   ['folder-open',   '目录'],
  ['rocket',         '发布'],   ['target',         '目标'],   ['compass',        '探索'],   ['search',        '搜索'],
  ['check-circle-2', '通过'],   ['triangle-alert', '警示'],   ['x-circle',       '失败'],   ['help-circle',   '疑问'],
  ['line-chart',     '增长'],   ['bar-chart-3',    '柱图'],   ['pie-chart',      '环图'],   ['timer',         '计时'],
  ['calendar',       '日历'],   ['gauge',          '仪表'],   ['trending-up',    '趋势'],   ['shield-check',  '安全'],
];

function IconGallery() {
  return (
    <SubSec name="I-2 · 常用图标库 · 48 个" tag="CURATED SET">
      <Stage pattern="dot" label="● ICONS · GALLERY" labelR="10.I2">
        <div style={{ position: 'absolute', top: '5%', left: '4%', right: '4%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>CURATED · 48 ICONS · HOVER → ACCENT</div>
          <div className="cn" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 4 }}>Lucide 官方 id · 用法 <span className="mono" style={{ color: 'var(--fg-2)' }}>{'<L name="zap" />'}</span></div>
        </div>
        <div style={{ position: 'absolute', inset: '16% 4% 4%', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridAutoRows: '1fr', gap: 10 }}>
          {LU_ICONS.map(([id, cn]) => (
            <IconCell key={id} name={id} label={id.toUpperCase().replace(/-/g, '·').slice(0, 11)} />
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'COUNT', v: '48 个 / 6 组：人·数据·AI·文档·行动·度量' },
        { k: 'POOL',  v: '不够用 → lucide.dev 现搜 · 直接 name 传入' },
        { k: 'COLOR', v: '默认 fg-2 · hover accent · 不要主动上色' },
      ]} />
    </SubSec>
  );
}

/* ============== I-3 · 应用示范 ============== */
function IconApplications() {
  return (
    <SubSec name="I-3 · 应用示范 · 6 种用法" tag="WHERE TO PLACE">
      <Stage pattern="grid" label="● ICON · USAGE" labelR="10.I3">
        <div style={{ position: 'absolute', inset: '5% 4%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr 1fr', gap: 14 }}>
          {/* 1 卡片标题 */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 01 · CARD HEADER</div>
            <div>
              <L name="brain" size={32} sw={1.5} style={{ color: 'var(--accent)' }} />
              <div className="cn" style={{ fontSize: 20, fontWeight: 700, marginTop: 10 }}>推理质量</div>
              <div className="cn" style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>Chain-of-Thought 提升 23%</div>
            </div>
          </div>
          {/* 2 列表前缀 */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22 }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 02 · LIST PREFIX</div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['check-circle-2', '通过 12 项测试',  'var(--accent)'],
                ['triangle-alert',  '3 项需复审',     'var(--fg-2)'],
                ['x-circle',       '1 项失败',       'var(--fg-3)'],
              ].map(([n, t, c]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <L name={n} size={18} sw={2} style={{ color: c }} />
                  <div className="cn" style={{ fontSize: 15, color: 'var(--fg)' }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
          {/* 3 装饰角 */}
          <div style={{ position: 'relative', border: '1px solid var(--accent)', borderRadius: 2, padding: 22, overflow: 'hidden' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 03 · ORNAMENT</div>
            <div className="cn" style={{ fontSize: 22, fontWeight: 700, marginTop: 12 }}>第 04 章</div>
            <div className="cn" style={{ fontSize: 15, color: 'var(--fg-2)', marginTop: 6 }}>从原型到生产</div>
            <div style={{ position: 'absolute', right: -16, bottom: -24, color: 'var(--accent)', opacity: 0.18 }}>
              <L name="rocket" size={180} sw={1.2} />
            </div>
          </div>
          {/* 4 节点 */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 04 · NODE BADGE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14 }}>
              {['user', 'cpu', 'database', 'cloud'].map((c, i, arr) => (
                <React.Fragment key={c}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <L name={c} size={20} sw={1.75} />
                  </div>
                  {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: 'var(--line-2)' }} />}
                </React.Fragment>
              ))}
            </div>
            <div className="cn" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>圆形 hairline + Lucide 1.75 stroke</div>
          </div>
          {/* 5 KPI */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="meta" style={{ color: 'var(--accent)' }}>USE 05 · KPI TILE</div>
              <L name="trending-up" size={22} sw={2} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <div className="cond" style={{ fontSize: 64, fontWeight: 800, color: 'var(--fg)', lineHeight: 1, letterSpacing: '-0.02em' }}>+42<span style={{ fontSize: 30, color: 'var(--accent)' }}>%</span></div>
              <div className="cn" style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 6 }}>检索召回率 · vs 基线</div>
            </div>
          </div>
          {/* 6 输入框 */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 06 · INPUT AFFIX</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', border: '1px solid var(--line-2)', borderRadius: 2, background: 'var(--bg)' }}>
              <L name="search" size={18} sw={1.5} style={{ color: 'var(--fg-3)' }} />
              <div className="cn" style={{ fontSize: 14, color: 'var(--fg-3)', flex: 1 }}>搜索文档、片段、模型...</div>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--fg-3)', border: '1px solid var(--line-2)', padding: '2px 6px', borderRadius: 2 }}>⌘ K</span>
            </div>
            <div className="cn" style={{ fontSize: 12, color: 'var(--fg-3)' }}>前缀 search · 后缀快捷键</div>
          </div>
        </div>
      </Stage>
    </SubSec>
  );
}

/* ============== 主入口 ============== */
function IllustrationsSection() {
  return (
    <Section id="illustrations" num="10" title="图标系统 · Iconography"
      desc='全库统一用 <b>Lucide Icons</b>（开源 · 1500+ · stroke-based · 行业标准）。<em>不使用场景插画 / 卡通人物 / 装饰图形</em>，与 SpaceX × Grok × X 的视觉原则一致 —— <b>纯几何、纯单色、零装饰</b>。'>
      <IllRules />
      <StrokeShowcase />
      <IconGallery />
      <IconApplications />
    </Section>
  );
}

Object.assign(window, { IllustrationsSection, LucideIcon: L });
