import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { publications } from '../data.js'

const featuredResearch = publications.slice(0, 10)

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section" id="publications" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Global Research Impact</span>
        <h2 className="section-title">Top 10 Research Contributions</h2>
        <p className="section-desc">
          A redesigned showcase inspired by leading global researchers, with direct DOI links for faster
          citation, verification, and paper access.
        </p>
      </motion.div>

      <div className="publications-list publications-list-featured">
        {featuredResearch.map((pub, i) => {
          const doiUrl = `https://doi.org/${pub.doi}`

          return (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="pub-card pub-card-featured glass" style={{ display: 'grid' }}>
                <div className="pub-rank">#{String(i + 1).padStart(2, '0')}</div>

                <div className="pub-body">
                  <div className="pub-meta">
                    <span className="pub-year">{pub.year}</span>
                    <span
                      style={{
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        background: 'var(--text-muted)',
                        display: 'inline-block',
                      }}
                    />
                    <span className="pub-journal">{pub.journal}</span>
                  </div>

                  <h3 className="pub-title">
                    <Link to={`/publication/${pub.id}`} className="pub-title-link">
                      {pub.title}
                    </Link>
                  </h3>
                  <p className="pub-desc">{pub.description}</p>

                  <div className="pub-links">
                    <a className="pub-link" href={doiUrl} target="_blank" rel="noopener noreferrer">
                      DOI: {pub.doi}
                    </a>
                    <a className="pub-link" href={pub.ieee} target="_blank" rel="noopener noreferrer">
                      IEEE Xplore
                    </a>
                    <a className="pub-link" href={pub.scholar} target="_blank" rel="noopener noreferrer">
                      Google Scholar
                    </a>
                    <a className="pub-link" href={pub.researchgate} target="_blank" rel="noopener noreferrer">
                      ResearchGate
                    </a>
                  </div>
                </div>

                <Link to={`/publication/${pub.id}`} className="pub-arrow" aria-label={`Open ${pub.title}`}>
                  →
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
