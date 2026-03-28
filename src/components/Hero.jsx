import { motion } from 'framer-motion'

const TICKER = [
  'Agentic AI','✦','Zero Trust Architecture','✦','Behavioral Biometrics','✦',
  'Federated Learning','✦','Healthcare Security','✦','IEEE Senior Member','✦',
  'IETE Fellow','✦','CNN-LSTM Auth','✦',
  'Agentic AI','✦','Zero Trust Architecture','✦','Behavioral Biometrics','✦',
  'Federated Learning','✦','Healthcare Security','✦','IEEE Senior Member','✦',
  'IETE Fellow','✦','CNN-LSTM Auth','✦',
]

const HIGHLIGHTS = [
  ['16+','Years Experience'],
  ['9+','MMIS Systems'],
  ['8+','Published Articles'],
  ['500K+','Users Protected'],
]

/* Each item animates in independently with a delay — no variant propagation needed */
function FadeUp({ delay = 0, children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="orb1 absolute rounded-full"
          style={{ width:'640px',height:'640px',top:'-12%',right:'-8%',opacity:0.22,
                   background:'radial-gradient(circle,#38bdf8 0%,transparent 72%)',filter:'blur(90px)' }} />
        <div className="orb2 absolute rounded-full"
          style={{ width:'520px',height:'520px',bottom:'2%',left:'-8%',opacity:0.16,
                   background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)',filter:'blur(100px)' }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10"
        style={{ paddingTop:'clamp(6rem,14vw,10rem)', paddingBottom:'3rem' }}>

        {/* Status badge */}
        <FadeUp delay={0.05}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
            style={{ background:'rgba(56,189,248,0.06)',borderColor:'rgba(56,189,248,0.22)' }}>
            <span className="relative w-2 h-2 rounded-full pulse-ring flex-shrink-0"
              style={{ background:'#34d399' }} />
            <span className="text-xs font-medium"
              style={{ fontFamily:'var(--font-mono)',color:'#34d399',letterSpacing:'0.1em' }}>
              OPEN TO COLLABORATION
            </span>
          </div>
        </FadeUp>

        {/* Name headline */}
        <motion.h1
          className="text-hero mb-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="block gradient-text-hero">Damodhara</span>
          <span className="block gradient-text-hero">Reddy Palavali</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          className="shimmer-text mb-6"
          style={{ fontFamily:'var(--font-display)',fontSize:'clamp(0.9rem,2vw,1.2rem)',
                   fontWeight:600,letterSpacing:'-0.01em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Full Stack Developer · AI Researcher · Zero Trust Enthusiast · Cybersecurity Innovator
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="max-w-2xl mb-10 leading-relaxed"
          style={{ fontFamily:'var(--font-body)',fontSize:'clamp(0.92rem,1.5vw,1.05rem)',color:'var(--text2)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Building intelligent, secure, and scalable systems using Agentic AI and Zero Trust Architecture —
          protecting millions across government healthcare infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: 'easeOut' }}
        >
          <motion.a href="#publications"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline"
            style={{ fontFamily:'var(--font-display)',background:'var(--accent)',color:'#050c18',
                     boxShadow:'0 0 28px rgba(56,189,248,0.35)',letterSpacing:'-0.01em' }}
            whileHover={{ y:-3,boxShadow:'0 0 44px rgba(56,189,248,0.55)',transition:{duration:0.2} }}
            whileTap={{ scale:0.97 }}>
            View Publications
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          <motion.a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline border"
            style={{ fontFamily:'var(--font-display)',color:'var(--text)',
                     borderColor:'var(--border2)',background:'transparent',letterSpacing:'-0.01em' }}
            whileHover={{ y:-3,borderColor:'var(--accent)',color:'var(--accent)',transition:{duration:0.2} }}
            whileTap={{ scale:0.97 }}>
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t"
          style={{ borderColor:'var(--border)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.52, ease: 'easeOut' }}
        >
          {HIGHLIGHTS.map(([n, l], i) => (
            <motion.div key={l}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.56 + i * 0.08, ease: 'easeOut' }}>
              <div className="gradient-text"
                style={{ fontFamily:'var(--font-display)',fontSize:'1.9rem',fontWeight:700,lineHeight:1 }}>
                {n}
              </div>
              <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text3)',
                            letterSpacing:'0.12em',textTransform:'uppercase',marginTop:'6px' }}>
                {l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ticker tape */}
      <motion.div
        className="ticker-wrap w-full border-y py-3.5"
        style={{ borderColor:'var(--border)',background:'var(--surface)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="ticker">
          {TICKER.map((t, i) => (
            <span key={i} className="px-6 text-xs font-medium whitespace-nowrap"
              style={{ fontFamily:'var(--font-mono)',
                       color: t==='✦' ? 'var(--accent)' : 'var(--text3)',
                       letterSpacing:'0.1em' }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
