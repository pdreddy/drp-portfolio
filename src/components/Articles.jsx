import { motion } from 'framer-motion'
import { articles } from '../data.js'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Articles() {
  return (
    <section
      id="articles"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4 reveal" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Thought Leadership
        </div>
        <h2 className="text-section reveal mb-4" style={{ color: 'var(--text)' }}>
          Articles <span className="gradient-text">&amp; Blogs</span>
        </h2>
        <p className="reveal reveal-d1 mb-12" style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
          Technical deep-dives and practical guides on DZone, Medium, and industry platforms.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articles.map((a, i) => (
            <motion.a
              key={i}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="grad-border card-glow p-7 no-underline flex flex-col gap-4"
              style={{
                border: '1px solid var(--border)',
                color: 'inherit',
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 48px ${a.platformColor}18`,
                borderColor: `${a.platformColor}35`,
                transition: { duration: 0.22, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Platform badge */}
              <div className="flex items-center justify-between">
                <span
                  className="px-3 py-1.5 rounded-md text-xs font-bold"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: `${a.platformColor}18`,
                    color: a.platformColor,
                    border: `1px solid ${a.platformColor}35`,
                    letterSpacing: '0.1em',
                  }}
                >
                  {a.platform}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text3)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {a.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                }}
              >
                {a.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text2)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-body)',
                  flex: 1,
                }}
              >
                {a.description}
              </p>

              {/* CTA */}
              <div
                className="flex items-center gap-2 pt-2 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  READ ARTICLE
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: 'var(--accent)' }}>
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
