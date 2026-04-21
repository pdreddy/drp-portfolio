// src/pages/PublicationPage.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { publications } from '../data.js'

export default function PublicationPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pub = publications.find((p) => p.id === id)

  if (!pub) return <div className="pub-page">Contribution not found.</div>

  return (
      <div className="pub-page">
        <div className="pub-page-inner">
          <button className="pub-page-back" onClick={() => navigate('/#publications')}>
            ← Return to Evidence Gallery
          </button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="pub-page-meta">
              <span className="badge-citation">Major Scientific Contribution</span>
              <span className="badge badge-purple">{pub.journal}</span>
            </div>

            <h1 className="text-hero text-3xl mb-4">{pub.title}</h1>

            <div className="pub-page-grid">
              <div className="pub-main-col">
                {/* Significance Box - CRITICAL FOR EB-1A */}
                <div className="evidence-card p-6 border-l-4 border-amber-500 bg-amber-500/5 mb-6">
                  <h3 className="text-eyebrow text-amber-500 mb-2">Scientific Significance</h3>
                  <p className="text-text2 italic">{pub.significance}</p>
                </div>

                <div className="pub-page-abstract glass">
                  <h3 className="text-eyebrow mb-4">Abstract</h3>
                  <p>{pub.abstract}</p>
                </div>
              </div>

              <aside className="pub-sidebar">
                <div className="pub-sidebar-card glass">
                  <h3 className="text-eyebrow">Publication Evidence</h3>
                  <div className="pub-meta-list mt-4">
                    <div className="pub-meta-item">
                      <span className="pub-meta-item-label">Verified DOI</span>
                      <span className="pub-meta-item-value font-mono">{pub.doi}</span>
                    </div>
                  </div>
                </div>
                <a href={pub.ieee} className="btn-primary w-full text-center py-3 rounded-lg block">
                  View on IEEE Xplore
                </a>
              </aside>
            </div>
          </motion.div>
        </div>
      </div>
  )
}