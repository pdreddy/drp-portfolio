import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { publications } from '../data.js'

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
        <span className="eyebrow">Publications</span>
        <h2 className="section-title">Peer-Reviewed Research</h2>
        <p className="section-desc">
          Published in IEEE journals and top-tier venues — spanning AI security, healthcare systems,
          and privacy-preserving machine learning.
        </p>
      </motion.div>

      <div className="publications-list">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Link to={`/publication/${pub.id}`} className="pub-card glass" style={{ display: 'grid' }}>
              <span className="pub-num">{pub.num}</span>

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

                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-desc">{pub.description}</p>

                <div className="pub-links">
                  <span className="pub-link">IEEE Xplore</span>
                  <span className="pub-link">Google Scholar</span>
                  <span className="pub-link">ResearchGate</span>
                  <span className="pub-link">PDF</span>
                </div>
              </div>

              <span className="pub-arrow">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
