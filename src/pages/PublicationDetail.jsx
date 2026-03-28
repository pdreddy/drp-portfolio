import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { publications } from '../data.js'

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function PublicationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const pub = publications.find((p) => p.num === id)

  if (!pub) {
    return (
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center"
        style={{ paddingTop: '80px' }}
      >
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontSize: '2rem', marginBottom: '1rem' }}>
          Publication Not Found
        </h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ background: 'var(--accent)', color: '#050c18', fontFamily: 'var(--font-display)' }}
        >
          ← Back to Portfolio
        </button>
      </motion.main>
    )
  }

  const links = [
    { label: 'IEEE Xplore', href: pub.ieee, color: '#60a5fa' },
    { label: 'ResearchGate', href: pub.researchgate, color: '#34d399' },
    { label: 'Google Scholar', href: pub.scholar, color: '#fb923c' },
    { label: 'PDF', href: pub.pdf, color: '#a78bfa' },
  ]

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10 min-h-screen"
      style={{ paddingTop: '100px', paddingBottom: '6rem' }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Back button */}
        <motion.button
          variants={fadeUp}
          onClick={() => navigate('/#publications')}
          className="inline-flex items-center gap-2 mb-10 text-sm font-medium transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--text3)',
            letterSpacing: '0.06em',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
          whileHover={{ color: 'var(--accent)', x: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Publications
        </motion.button>

        <motion.div variants={stagger} initial="initial" animate="animate">

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-5"
          >
            <span
              className="px-3 py-1.5 rounded-lg text-xs font-bold border"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(56,189,248,0.07)',
                borderColor: 'rgba(56,189,248,0.22)',
                color: 'var(--accent)',
                letterSpacing: '0.12em',
              }}
            >
              PAPER #{pub.num}
            </span>
            <span
              className="px-3 py-1.5 rounded-lg text-xs font-medium border"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(56,189,248,0.05)',
                borderColor: 'rgba(56,189,248,0.15)',
                color: 'var(--text3)',
                letterSpacing: '0.1em',
              }}
            >
              {pub.year}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            {pub.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, var(--accent), transparent)',
              marginBottom: '2rem',
              opacity: 0.35,
            }}
          />

          {/* Abstract / Description */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border p-7 mb-8"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div
              className="flex items-center gap-2 mb-4"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
              Abstract
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--text2)',
                lineHeight: 1.8,
              }}
            >
              {pub.description}
            </p>
          </motion.div>

          {/* Research context */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border p-7 mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(56,189,248,0.04), rgba(167,139,250,0.04))',
              borderColor: 'var(--border)',
            }}
          >
            <div
              className="flex items-center gap-2 mb-4"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
              Research Context
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Author', value: 'Damodhara Reddy Palavali' },
                { label: 'Year', value: pub.year },
                { label: 'Domain', value: 'AI Cybersecurity & Healthcare' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp}>
            <div
              className="flex items-center gap-2 mb-4"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
              Access This Paper
            </div>
            <div className="flex flex-wrap gap-3">
              {links.map(({ label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border no-underline"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color,
                    borderColor: `${color}30`,
                    background: `${color}08`,
                    letterSpacing: '0.06em',
                  }}
                  whileHover={{
                    y: -3,
                    background: `${color}18`,
                    borderColor: `${color}55`,
                    transition: { duration: 0.15 },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  ↗ {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation: prev / next */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between mt-14 pt-8 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            {(() => {
              const idx = publications.findIndex((p) => p.num === pub.num)
              const prev = publications[idx - 1]
              const next = publications[idx + 1]
              return (
                <>
                  {prev ? (
                    <motion.button
                      onClick={() => navigate(`/publications/${prev.num}`)}
                      className="flex items-center gap-3 text-left"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      whileHover={{ x: -4 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text3)', flexShrink: 0 }}>
                        <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Previous</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: 'var(--text)', fontWeight: 600, lineHeight: 1.3, maxWidth: '220px' }}>{prev.title}</div>
                      </div>
                    </motion.button>
                  ) : <div />}

                  {next ? (
                    <motion.button
                      onClick={() => navigate(`/publications/${next.num}`)}
                      className="flex items-center gap-3 text-right"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      whileHover={{ x: 4 }}
                    >
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Next</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: 'var(--text)', fontWeight: 600, lineHeight: 1.3, maxWidth: '220px' }}>{next.title}</div>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text3)', flexShrink: 0 }}>
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  ) : <div />}
                </>
              )
            })()}
          </motion.div>

        </motion.div>
      </div>
    </motion.main>
  )
}
