import { motion } from 'framer-motion'

const BADGES = [
  { label: '8+ Publications', className: 'badge-cyan' },
  { label: 'IEEE Senior Member', className: 'badge-purple' },
  { label: 'International Judge', className: 'badge-amber' },
  { label: 'AI Security', className: 'badge-emerald' },
]

const STATS = [
  { value: '8+', label: 'Publications' },
  { value: '16+', label: 'Years Exp.' },
  { value: '500K+', label: 'Protected' },
  { value: '99.5%', label: 'Accuracy' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      {/* Ambient background orbs */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="hero-inner">
        {/* Badges */}
        <motion.div className="hero-badges" {...fadeUp(0.15)}>
          {BADGES.map((b) => (
            <span key={b.label} className={`badge ${b.className}`}>
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero-name" {...fadeUp(0.3)}>
          Damodhara<br />Reddy Palavali
        </motion.h1>

        {/* Title */}
        <motion.p className="hero-title" {...fadeUp(0.42)}>
          AI Researcher · IEEE Senior Member · Cybersecurity Architect
        </motion.p>

        {/* Subtitle */}
        <motion.p className="hero-subtitle" {...fadeUp(0.52)}>
          Building AI-driven security systems for healthcare and cloud —
          from Zero Trust frameworks to autonomous threat detection at government scale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero-cta" {...fadeUp(0.62)}>
          <button className="btn btn-primary" onClick={() => scrollTo('#publications')}>
            View Research →
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('#about')}>
            About Me
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="hero-stat glass"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
