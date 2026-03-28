import { motion } from 'framer-motion'
import { useCountUp, useInView } from '../hooks.js'
import { impactStats } from '../data.js'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function CountCard({ stat }) {
  const [ref, inView] = useInView(0.3)
  const count = useCountUp(stat.number, 2200, inView)

  const display =
    stat.number % 1 !== 0
      ? count.toFixed(1) + stat.suffix
      : Math.floor(count) + stat.suffix

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="card-glow p-8 rounded-2xl border text-center"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 48px ${stat.color}20`,
        borderColor: `${stat.color}35`,
        transition: { duration: 0.22 },
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: stat.color,
          textShadow: `0 0 40px ${stat.color}40`,
          marginBottom: '10px',
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.95rem',
          fontWeight: 600,
          color: 'var(--text)',
          marginBottom: '5px',
          letterSpacing: '-0.01em',
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text3)',
          letterSpacing: '0.08em',
        }}
      >
        {stat.sub}
      </div>
    </motion.div>
  )
}

export default function Impact() {
  return (
    <section
      id="impact"
      style={{
        background: 'var(--bg2)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4 reveal" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Results at Scale
        </div>
        <h2 className="text-section reveal mb-4" style={{ color: 'var(--text)' }}>
          Project <span className="gradient-text">Impact</span>
        </h2>
        <p className="reveal reveal-d1 mb-12" style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
          Measurable outcomes from 16+ years of engineering mission-critical
          government healthcare systems.
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {impactStats.map((stat, i) => (
            <CountCard key={i} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
