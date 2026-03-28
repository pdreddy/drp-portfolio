import { motion } from 'framer-motion'

const tags = [
  'Agentic AI', 'Zero Trust', 'Behavioral Biometrics', 'Federated Learning',
  'MMIS Systems', 'Cloud-Native', 'Microservices', 'SSA / Login.gov',
  'Healthcare IT', 'CNN-LSTM', 'FedRAMP', 'DevSecOps',
]

const metrics = [
  ['16+', 'Years Experience'],
  ['9+', 'MMIS Systems'],
  ['8+', 'Publications'],
  ['500K+', 'Users Impacted'],
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg2)', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)' }}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-eyebrow mb-4 reveal"
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Who I Am
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="text-section reveal mb-6"
              style={{ color: 'var(--text)' }}
            >
              Securing the Future of<br />
              <span className="gradient-text">Healthcare with AI</span>
            </h2>

            <div className="reveal reveal-d1 space-y-4" style={{ color: 'var(--text2)', fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.75 }}>
              <p>
                With 16+ years building mission-critical government systems, I specialize in the intersection of
                artificial intelligence and cybersecurity — designing frameworks that protect sensitive data at
                scale while enabling innovation.
              </p>
              <p>
                I've architected secure authentication systems for <strong style={{ color: 'var(--text)' }}>SSA</strong> and{' '}
                <strong style={{ color: 'var(--text)' }}>Login.gov</strong>, deployed Zero Trust frameworks across{' '}
                <strong style={{ color: 'var(--text)' }}>9 U.S. state MMIS platforms</strong>, and pioneered behavioral
                biometric systems achieving <strong style={{ color: 'var(--accent)' }}>99.5% authentication accuracy</strong>.
              </p>
              <p>
                My research spans agentic AI, federated learning, and privacy-preserving machine learning —
                contributing to a safer, more intelligent healthcare ecosystem for millions of Americans.
              </p>
            </div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mt-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            >
              {tags.map((t) => (
                <motion.span
                  key={t}
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3 } } }}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium border"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(56,189,248,0.05)',
                    borderColor: 'rgba(56,189,248,0.18)',
                    color: 'var(--accent)',
                    letterSpacing: '0.04em',
                  }}
                  whileHover={{
                    background: 'rgba(56,189,248,0.12)',
                    borderColor: 'rgba(56,189,248,0.4)',
                    y: -2,
                    transition: { duration: 0.15 },
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: metric cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {metrics.map(([num, label], i) => (
              <motion.div
                key={label}
                variants={cardVariants}
                className="grad-border card-glow p-6"
                style={{ border: '1px solid var(--border)' }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 48px rgba(56,189,248,0.12)',
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className="gradient-text mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
