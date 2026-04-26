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

// ✅ Removed PDF + Added validation
const externalLinks = (pub) => {
  const links = [
    {
      label: 'IEEE Xplore',
      href: pub.links?.ieee ?? pub.ieee,
      color: '#60a5fa',
    },
    {
      label: 'ResearchGate',
      href: pub.links?.researchgate ?? pub.researchgate,
      color: '#34d399',
    },
    {
      label: 'Google Scholar',
      href: pub.links?.scholar ?? pub.scholar,
      color: '#fb923c',
    }
  ]

  // ✅ Filter only valid links
  return links.filter(link => link.href && link.href.trim() !== '')
}

// ✅ Normalize DOI to clickable URL
const formatDOI = (doi) => {
  if (!doi) return null
  return doi.startsWith('http') ? doi : `https://doi.org/${doi}`
}

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
            ← Back to Publications
          </motion.button>

          <motion.div variants={stagger} initial="initial" animate="animate">

            {/* Badges */}
            <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1.5 rounded-lg text-xs font-bold border"
                  style={{ fontFamily: 'var(--font-mono)', background: 'rgba(56,189,248,0.07)',
                    borderColor: 'rgba(56,189,248,0.22)', color: 'var(--accent)' }}>
              PAPER #{pub.num}
            </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text3)' }}>
              {pub.year}
            </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={item}
                       style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem',
                         fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
              {pub.title}
            </motion.h1>

            {/* Abstract */}
            <motion.div variants={item} className="rounded-2xl border p-7 mb-6"
                        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <p className="text-eyebrow mb-4">Abstract</p>
              <p style={{ color: 'var(--text2)', lineHeight: 1.8 }}>
                {pub.description}
              </p>
            </motion.div>

            {/* Meta */}
            <motion.div variants={item} className="rounded-2xl border p-7 mb-8"
                        style={{ borderColor: 'var(--border)' }}>
              <p className="text-eyebrow mb-4">Research Context</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[['Authors', pub.authors], ['Year', pub.year], ['Venue', pub.venue]].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>{k}</div>
                      <div style={{ fontWeight: 500 }}>{v}</div>
                    </div>
                ))}
              </div>

              {/* ✅ Clean DOI */}
              {pub.doi && (
                  <div style={{ marginTop: '1rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>DOI</div>
                    <a href={formatDOI(pub.doi)} target="_blank" rel="noopener noreferrer"
                       style={{ color: 'var(--accent)' }}>
                      {formatDOI(pub.doi)}
                    </a>
                  </div>
              )}
            </motion.div>

            {/* External links */}
            <motion.div variants={item}>
              <p className="text-eyebrow mb-4">Access This Paper</p>

              <div className="flex flex-wrap gap-3">
                {externalLinks(pub).map(({ label, href, color }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                              className="px-5 py-3 rounded-xl text-sm font-semibold border"
                              style={{ color, borderColor: `${color}30` }}
                              whileHover={{ y: -2 }}>
                      ↗ {label}
                    </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.main>
  )
}