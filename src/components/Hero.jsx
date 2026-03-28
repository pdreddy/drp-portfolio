import { motion } from 'framer-motion'

const tickerItems = [
  'Agentic AI', '✦', 'Zero Trust Architecture', '✦',
  'Behavioral Biometrics', '✦', 'Federated Learning', '✦',
  'Healthcare Security', '✦', 'IEEE Senior Member', '✦',
  'IETE Fellow', '✦', 'CNN-LSTM Auth', '✦',
  'Agentic AI', '✦', 'Zero Trust Architecture', '✦',
  'Behavioral Biometrics', '✦', 'Federated Learning', '✦',
  'Healthcare Security', '✦', 'IEEE Senior Member', '✦',
  'IETE Fellow', '✦', 'CNN-LSTM Auth', '✦',
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const statsVariants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb1 absolute rounded-full opacity-20"
          style={{
            width: '600px', height: '600px',
            top: '-10%', right: '-5%',
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="orb2 absolute rounded-full opacity-15"
          style={{
            width: '500px', height: '500px',
            bottom: '10%', left: '-5%',
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
          style={{
            background: 'rgba(56,189,248,0.06)',
            borderColor: 'rgba(56,189,248,0.22)',
          }}
        >
          <span
            className="relative w-2 h-2 rounded-full pulse-ring flex-shrink-0"
            style={{ background: '#34d399' }}
          />
          <span
            className="text-xs font-medium"
            style={{ fontFamily: 'var(--font-mono)', color: '#34d399', letterSpacing: '0.1em' }}
          >
            OPEN TO COLLABORATION
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          className="text-hero mb-4"
        >
          <span className="block gradient-text-hero">Damodhara</span>
          <span className="block gradient-text-hero">Reddy Palavali</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={fadeUp}
          className="shimmer-text mb-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          AI Researcher · Zero Trust Architect · Cybersecurity Innovator
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl mb-10 leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--text2)',
          }}
        >
          Building intelligent, secure, and scalable systems using Agentic AI and
          Zero Trust Architecture — protecting millions of Americans across government
          healthcare infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-4 mb-16"
        >
          <motion.a
            href="#publications"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline"
            style={{
              fontFamily: 'var(--font-display)',
              background: 'var(--accent)',
              color: '#050c18',
              boxShadow: '0 0 28px rgba(56,189,248,0.35)',
              letterSpacing: '-0.01em',
            }}
            whileHover={{
              y: -3,
              boxShadow: '0 0 44px rgba(56,189,248,0.55)',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            View Publications
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline border"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text)',
              borderColor: 'var(--border2)',
              background: 'transparent',
              letterSpacing: '-0.01em',
            }}
            whileHover={{
              y: -3,
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={statsVariants}
          className="flex flex-wrap gap-10 pt-10 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          {[['16+', 'Years Experience'], ['9+', 'MMIS Systems'], ['8+', 'Publications'], ['500K+', 'Users Protected']].map(
            ([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
              >
                <div
                  className="gradient-text"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}
                >
                  {n}
                </div>
                <div
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}
                >
                  {l}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Ticker tape */}
      <motion.div
        className="ticker-wrap w-full border-y py-3.5 mt-4"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="ticker">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="px-6 text-xs font-medium whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-mono)',
                color: item === '✦' ? 'var(--accent)' : 'var(--text3)',
                letterSpacing: '0.1em',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
