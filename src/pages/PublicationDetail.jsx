import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { publications } from '../data.js'

const page = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.28, ease: 'easeIn' } },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
}

const item = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const externalLinks = (pub) => [
  { label: 'IEEE Xplore',    href: pub.ieee,        color: '#60a5fa' },
  { label: 'ResearchGate',   href: pub.researchgate, color: '#34d399' },
  { label: 'Google Scholar', href: pub.scholar,      color: '#fb923c' },
  { label: 'PDF',            href: pub.pdf,          color: '#a78bfa' },
]

export default function PublicationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pub = publications.find((p) => p.num === id)
  const idx = publications.findIndex((p) => p.num === id)

  if (!pub) {
    return (
      <motion.main variants={page} initial="initial" animate="animate" exit="exit"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-6"
        style={{ paddingTop: '80px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontSize: '2rem' }}>
          Publication not found
        </h1>
        <button onClick={() => navigate('/')}
          className="px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ background: 'var(--accent)', color: '#050c18', fontFamily: 'var(--font-display)' }}>
          ← Back to Portfolio
        </button>
      </motion.main>
    )
  }

  return (
    <motion.main variants={page} initial="initial" animate="animate" exit="exit"
      className="relative z-10 min-h-screen"
      style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Back */}
        <motion.button
          onClick={() => navigate('/#publications')}
          className="inline-flex items-center gap-2 mb-10 text-sm font-medium"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text3)', letterSpacing: '0.06em',
                   background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          whileHover={{ x: -3, color: 'var(--accent)' }}
          whileTap={{ scale: 0.97 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Publications
        </motion.button>

        <motion.div variants={stagger} initial="initial" animate="animate">

          {/* Badges */}
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1.5 rounded-lg text-xs font-bold border"
              style={{ fontFamily: 'var(--font-mono)', background: 'rgba(56,189,248,0.07)',
                       borderColor: 'rgba(56,189,248,0.22)', color: 'var(--accent)', letterSpacing: '0.12em' }}>
              PAPER #{pub.num}
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium border"
              style={{ fontFamily: 'var(--font-mono)', background: 'rgba(56,189,248,0.05)',
                       borderColor: 'rgba(56,189,248,0.15)', color: 'var(--text3)', letterSpacing: '0.1em' }}>
              {pub.year}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={item}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 4vw, 2.8rem)',
                     fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em',
                     lineHeight: 1.15, marginBottom: '1.5rem' }}>
            {pub.title}
          </motion.h1>

          <motion.div variants={item}
            style={{ height: '1px', background: 'linear-gradient(90deg, var(--accent), transparent)',
                     marginBottom: '2rem', opacity: 0.3 }} />

          {/* Abstract */}
          <motion.div variants={item} className="rounded-2xl border p-7 mb-6"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <p className="text-eyebrow mb-4">Abstract</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem',
                        color: 'var(--text2)', lineHeight: 1.8 }}>
              {pub.description}
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div variants={item} className="rounded-2xl border p-7 mb-8"
            style={{ background: 'linear-gradient(135deg,rgba(56,189,248,0.04),rgba(167,139,250,0.04))',
                     borderColor: 'var(--border)' }}>
            <p className="text-eyebrow mb-4">Research Context</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[['Author', 'Damodhara Reddy Palavali'], ['Year', pub.year], ['Domain', 'AI Cybersecurity & Healthcare']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{k}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* External links */}
          <motion.div variants={item}>
            <p className="text-eyebrow mb-4">Access This Paper</p>
            <div className="flex flex-wrap gap-3">
              {externalLinks(pub).map(({ label, href, color }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border no-underline"
                  style={{ fontFamily: 'var(--font-mono)', color, borderColor: `${color}30`,
                           background: `${color}08`, letterSpacing: '0.06em' }}
                  whileHover={{ y: -3, background: `${color}18`, borderColor: `${color}55`, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.97 }}>
                  ↗ {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Prev / Next */}
          <motion.div variants={item}
            className="flex items-center justify-between mt-14 pt-8 border-t"
            style={{ borderColor: 'var(--border)' }}>
            {publications[idx - 1] ? (
              <motion.button
                onClick={() => navigate(`/publications/${publications[idx - 1].num}`)}
                className="flex items-center gap-3 text-left"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                whileHover={{ x: -4 }}>
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text3)', flexShrink: 0 }}>
                  <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Previous</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: 'var(--text)',
                                fontWeight: 600, lineHeight: 1.3, maxWidth: '220px' }}>{publications[idx - 1].title}</div>
                </div>
              </motion.button>
            ) : <div />}

            {publications[idx + 1] ? (
              <motion.button
                onClick={() => navigate(`/publications/${publications[idx + 1].num}`)}
                className="flex items-center gap-3 text-right"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                whileHover={{ x: 4 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Next</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: 'var(--text)',
                                fontWeight: 600, lineHeight: 1.3, maxWidth: '220px' }}>{publications[idx + 1].title}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text3)', flexShrink: 0 }}>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            ) : <div />}
          </motion.div>

        </motion.div>
      </div>
    </motion.main>
  )
}
