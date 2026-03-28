import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { publications } from '../data.js'

export default function PublicationPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const pub = publications.find((p) => p.id === id)
  const currentIndex = publications.findIndex((p) => p.id === id)
  const prevPub = currentIndex > 0 ? publications[currentIndex - 1] : null
  const nextPub = currentIndex < publications.length - 1 ? publications[currentIndex + 1] : null

  if (!pub) {
    return (
      <div className="pub-page">
        <div className="pub-page-inner">
          <button className="pub-page-back" onClick={() => navigate('/')}>
            ← Back to Research
          </button>
          <h1 style={{ color: 'var(--text-primary)', marginTop: '2rem' }}>Publication not found.</h1>
        </div>
      </div>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pub.citation).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="pub-page">
      <div className="pub-page-inner">
        {/* Back navigation */}
        <motion.button
          className="pub-page-back"
          onClick={() => navigate('/#publications')}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          ← Back to Publications
        </motion.button>

        {/* Header */}
        <motion.div
          className="pub-page-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="pub-page-meta">
            <span className="badge badge-cyan">{pub.year}</span>
            <span className="badge">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>No.</span>
              {pub.num}
            </span>
            <span className="badge badge-purple">IEEE Research</span>
          </div>

          <h1 className="pub-page-title">{pub.title}</h1>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {pub.journal}
          </p>
        </motion.div>

        {/* Main grid */}
        <motion.div
          className="pub-page-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {/* Main column */}
          <div>
            {/* Abstract */}
            <div className="pub-page-abstract glass">
              <h3>Abstract</h3>
              <p>{pub.abstract}</p>
            </div>

            {/* Keywords */}
            <div className="pub-page-keywords glass" style={{ marginTop: '1rem' }}>
              <h3>Keywords</h3>
              <div className="pub-keywords-list">
                {pub.keywords.map((kw) => (
                  <span key={kw} className="pub-keyword">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Citation */}
            <div className="pub-citation-block glass" style={{ marginTop: '1rem' }}>
              <h3>Citation</h3>
              <div className="pub-citation-text">{pub.citation}</div>
              <button
                className={`btn btn-secondary btn-copy ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? '✓ Copied!' : '⧉ Copy Citation'}
              </button>
            </div>

            {/* Pagination */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}
            >
              {prevPub && (
                <Link
                  to={`/publication/${prevPub.id}`}
                  className="glass"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--card-radius)',
                    textDecoration: 'none',
                    flex: 1,
                    minWidth: '200px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    ← Previous
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      lineHeight: '1.3',
                    }}
                  >
                    {prevPub.title}
                  </div>
                </Link>
              )}
              {nextPub && (
                <Link
                  to={`/publication/${nextPub.id}`}
                  className="glass"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--card-radius)',
                    textDecoration: 'none',
                    flex: 1,
                    minWidth: '200px',
                    textAlign: 'right',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Next →
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      lineHeight: '1.3',
                    }}
                  >
                    {nextPub.title}
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="pub-sidebar">
            {/* Metadata */}
            <div className="pub-sidebar-card glass">
              <h3>Publication Info</h3>
              <div className="pub-meta-list">
                <div className="pub-meta-item">
                  <span className="pub-meta-item-label">Year</span>
                  <span className="pub-meta-item-value" style={{ color: 'var(--cyan)' }}>
                    {pub.year}
                  </span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-item-label">Journal</span>
                  <span className="pub-meta-item-value">{pub.journal}</span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-item-label">DOI</span>
                  <span
                    className="pub-meta-item-value"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.78rem',
                      wordBreak: 'break-all',
                    }}
                  >
                    {pub.doi}
                  </span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-item-label">Author</span>
                  <span className="pub-meta-item-value">Damodhara Reddy Palavali</span>
                </div>
              </div>
            </div>

            {/* Access links */}
            <div className="pub-sidebar-card glass">
              <h3>Access Paper</h3>
              <div className="pub-action-links">
                <a
                  href={pub.pdf}
                  className="pub-action-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⬇ Download PDF
                </a>
                <a
                  href={pub.ieee}
                  className="pub-action-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ fontSize: '0.8rem' }}>⧉</span> IEEE Xplore
                </a>
                <a
                  href={pub.scholar}
                  className="pub-action-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ fontSize: '0.8rem' }}>🎓</span> Google Scholar
                </a>
                <a
                  href={pub.researchgate}
                  className="pub-action-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ fontSize: '0.8rem' }}>🔬</span> ResearchGate
                </a>
              </div>
            </div>

            {/* All publications link */}
            <div
              className="glass"
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--card-radius)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.875rem',
                }}
              >
                {publications.length} peer-reviewed publications
              </p>
              <Link
                to="/#publications"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
              >
                View All Publications
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
