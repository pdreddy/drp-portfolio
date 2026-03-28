import { motion, useReducedMotion } from 'framer-motion'

/* ── Real brand / domain SVG icons ────────────────────────────────────────── */
const IconIEEE = () => (
    <svg viewBox="0 0 48 24" width="38" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900"
            fill="currentColor" letterSpacing="1">IEEE</text>
    </svg>
)
const IconScholar = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor"/>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="currentColor" fillOpacity="0.6"/>
    </svg>
)
const IconLock = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    </svg>
)
const IconCPU = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
)
const IconGlobe = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)
const IconBriefcase = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M16 8V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M8 14h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
)
const IconArrow = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

/* ── Stats ─────────────────────────────────────────────────────────────────── */
const STATS = [
  { value: '16+',   label: 'Years Experience',  icon: <IconBriefcase />,  color: '#38bdf8' },
  { value: '9',     label: 'IEEE Publications',  icon: <IconIEEE />,       color: '#a78bfa' },
  { value: '83K+',  label: 'Article Views',      icon: <IconScholar />,    color: '#34d399' },
  { value: '6+',    label: 'Scholar Citations',  icon: <IconScholar />,    color: '#fb923c' },
]

/* ── Role chips ─────────────────────────────────────────────────────────────── */
const ROLES = [
  { label: 'Full Stack Engineer', icon: <IconCPU />,       color: '#38bdf8' },
  { label: 'AI Researcher',       icon: <IconCPU />,       color: '#a78bfa' },
  { label: 'Zero Trust Architect',icon: <IconLock />,      color: '#34d399' },
  { label: 'IEEE Senior Member',  icon: <IconIEEE />,      color: '#fb923c' },
  { label: 'Cybersecurity Author',icon: <IconGlobe />,     color: '#f472b6' },
]

/* ── Animation helpers ──────────────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94]

function FadeUp({ delay = 0, children, className, style }) {
  return (
      <motion.div
          className={className}
          style={style}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay, ease }}
      >
        {children}
      </motion.div>
  )
}

/* ── Animated grid lines (background decoration) ───────────────────────────── */
function GridLines() {
  return (
      <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage:
                'linear-gradient(rgba(56,189,248,0.045) 1px, transparent 1px),' +
                'linear-gradient(90deg, rgba(56,189,248,0.045) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, black 0%, transparent 80%)',
          }}
      />
  )
}

/* ── Floating keyword tags (decorative) ────────────────────────────────────── */
const FLOATERS = [
  { text: 'Zero Trust',        top: '14%', right: '6%',   delay: 0.9,  color: '#38bdf8' },
  { text: 'Agentic AI',        top: '32%', right: '2%',   delay: 1.1,  color: '#a78bfa' },
  { text: 'Federated Learning',top: '55%', right: '8%',   delay: 1.3,  color: '#34d399' },
  { text: 'CNN-LSTM',          top: '70%', right: '4%',   delay: 1.5,  color: '#fb923c' },
  { text: 'MMIS Security',     top: '22%', left: '1%',    delay: 1.0,  color: '#f472b6' },
]

export default function Hero() {
  const reduced = useReducedMotion()

  return (
      <section
          id="home"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* ── Background layers ── */}
        <GridLines />

        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
              style={{ position:'absolute', width:700, height:700, top:'-15%', right:'-10%',
                borderRadius:'50%', opacity:0.18,
                background:'radial-gradient(circle,#38bdf8 0%,transparent 70%)',filter:'blur(100px)' }}
              animate={reduced ? {} : { scale:[1,1.08,1], opacity:[0.18,0.24,0.18] }}
              transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
          />
          <motion.div
              style={{ position:'absolute', width:560, height:560, bottom:'0%', left:'-10%',
                borderRadius:'50%', opacity:0.13,
                background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)',filter:'blur(110px)' }}
              animate={reduced ? {} : { scale:[1,1.06,1], opacity:[0.13,0.19,0.13] }}
              transition={{ duration:10, repeat:Infinity, ease:'easeInOut', delay:2 }}
          />
          <motion.div
              style={{ position:'absolute', width:360, height:360, top:'50%', left:'40%',
                borderRadius:'50%', opacity:0.08,
                background:'radial-gradient(circle,#34d399 0%,transparent 70%)',filter:'blur(80px)' }}
              animate={reduced ? {} : { scale:[1,1.1,1] }}
              transition={{ duration:12, repeat:Infinity, ease:'easeInOut', delay:4 }}
          />
        </div>

        {/* Floating keyword tags — desktop only */}
        {!reduced && FLOATERS.map((f) => (
            <motion.div
                key={f.text}
                style={{
                  position: 'absolute', top: f.top, right: f.right, left: f.left,
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: f.color, background: `${f.color}10`,
                  border: `1px solid ${f.color}28`, borderRadius: 8, padding: '5px 10px',
                  pointerEvents: 'none', whiteSpace: 'nowrap',
                }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 0.65, x: 0 }}
                transition={{ duration: 0.8, delay: f.delay, ease }}
            >
              {f.text}
            </motion.div>
        ))}

        {/* ── Main content ── */}
        <div
            className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10"
            style={{ paddingTop: 'clamp(6rem,14vw,10rem)', paddingBottom: '3rem' }}
        >

          {/* Status badge */}
          <FadeUp delay={0.05}>
            <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
                style={{ background: 'rgba(52,211,153,0.07)', borderColor: 'rgba(52,211,153,0.28)' }}
            >
              <motion.span
                  style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'block', flexShrink: 0 }}
                  animate={reduced ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#34d399', letterSpacing: '0.12em', fontWeight: 600 }}>
              OPEN TO COLLABORATION
            </span>
            </div>
          </FadeUp>

          {/* Name */}
          <motion.h1
              className="text-hero mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
          >
            <span className="block gradient-text-hero">Damodhara</span>
            <span className="block gradient-text-hero">Reddy Palavali</span>
          </motion.h1>

          {/* Role chips row */}
          <motion.div
              className="flex flex-wrap gap-2 mb-7"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease }}
          >
            {ROLES.map((r, i) => (
                <motion.div
                    key={r.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border"
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 600,
                      letterSpacing: '0.07em', textTransform: 'uppercase',
                      color: r.color, background: `${r.color}0d`, borderColor: `${r.color}28`,
                    }}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.28 + i * 0.07, ease }}
                    whileHover={{ borderColor: `${r.color}60`, background: `${r.color}18`, y: -1, transition: { duration: 0.15 } }}
                >
                  <span style={{ color: r.color, display: 'flex', alignItems: 'center' }}>{r.icon}</span>
                  {r.label}
                </motion.div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
              className="max-w-2xl mb-10 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.92rem,1.5vw,1.06rem)', color: 'var(--text2)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34, ease }}
          >
            Building intelligent, secure, and scalable systems using Agentic AI and Zero Trust Architecture —
            protecting millions across government healthcare and enterprise infrastructure with{' '}
            <span style={{ color: 'var(--text)', fontWeight: 500 }}>9 peer-reviewed publications</span> and{' '}
            <span style={{ color: 'var(--text)', fontWeight: 500 }}>16+ years</span> of real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.44, ease }}
          >
            <motion.a
                href="#publications"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline"
                style={{ fontFamily: 'var(--font-display)', background: 'var(--accent)', color: '#050c18',
                  boxShadow: '0 0 28px rgba(56,189,248,0.35)', letterSpacing: '-0.01em' }}
                whileHover={{ y: -3, boxShadow: '0 0 48px rgba(56,189,248,0.55)', transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
            >
              View Publications <IconArrow />
            </motion.a>

            <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline border"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text)',
                  borderColor: 'var(--border2)', background: 'transparent', letterSpacing: '-0.01em' }}
                whileHover={{ y: -3, borderColor: 'var(--accent)', color: 'var(--accent)', transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
                href="https://scholar.google.com/citations?user=gbBDbl4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm no-underline border"
                style={{ fontFamily: 'var(--font-mono)', color: '#4285f4', fontSize: '0.72rem', fontWeight: 600,
                  borderColor: 'rgba(66,133,244,0.25)', background: 'rgba(66,133,244,0.06)', letterSpacing: '0.04em' }}
                whileHover={{ y: -2, borderColor: 'rgba(66,133,244,0.5)', background: 'rgba(66,133,244,0.12)', transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
            >
              <IconScholar /> Scholar Profile ↗
            </motion.a>

            <motion.a
                href="https://ieeexplore.ieee.org/author/315152596090113"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm no-underline border"
                style={{ fontFamily: 'var(--font-mono)', color: '#00629b', fontSize: '0.72rem', fontWeight: 700,
                  borderColor: 'rgba(0,98,155,0.25)', background: 'rgba(0,98,155,0.06)', letterSpacing: '0.04em' }}
                whileHover={{ y: -2, borderColor: 'rgba(0,98,155,0.5)', background: 'rgba(0,98,155,0.12)', transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
            >
              <IconIEEE /> Xplore ↗
            </motion.a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px border-t"
              style={{ borderColor: 'var(--border)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.54 }}
          >
            {STATS.map(({ value, label, icon, color }, i) => (
                <motion.div
                    key={label}
                    className="pt-8 pr-6"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.58 + i * 0.09, ease }}
                    whileHover={{ x: 3, transition: { duration: 0.15 } }}
                >
                  {/* Icon row */}
                  <div
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 36, height: 36, borderRadius: 10, marginBottom: 12,
                        background: `${color}12`, border: `1px solid ${color}28`, color,
                      }}
                  >
                    {icon}
                  </div>
                  {/* Number */}
                  <div
                      style={{
                        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.1rem)',
                        fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color,
                        textShadow: `0 0 28px ${color}40`,
                      }}
                  >
                    {value}
                  </div>
                  {/* Label */}
                  <div
                      style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text3)',
                        letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6,
                      }}
                  >
                    {label}
                  </div>
                </motion.div>
            ))}
          </motion.div>

          {/* Affiliation strip */}
          <motion.div
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t"
              style={{ borderColor: 'var(--border)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
          >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>
            Published In
          </span>
            {[
              { label: 'IEEE Xplore',             color: '#00629b', href: 'https://ieeexplore.ieee.org/author/315152596090113' },
              { label: 'Cyber Defense Magazine',  color: '#c0392b', href: 'https://www.cyberdefensemagazine.com/zero-trust-at-scale-securing-identity-across-hybrid-cloud-infrastructures/' },
              { label: 'DZone',                   color: '#e07b39', href: 'https://dzone.com/users/3429919/pdreddy1985.html' },
              { label: 'HackerNoon',              color: '#00d672', href: 'https://hackernoon.com/u/damodhara' },
              { label: 'Medium',                  color: '#00ab6c', href: 'https://damureddy.medium.com/' },
            ].map((p) => (
                <motion.a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700,
                      color: p.color, letterSpacing: '0.07em', textDecoration: 'none',
                      opacity: 0.7,
                    }}
                    whileHover={{ opacity: 1, y: -1, transition: { duration: 0.15 } }}
                >
                  {p.label}
                </motion.a>
            ))}
          </motion.div>

        </div>
      </section>
  )
}