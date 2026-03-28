import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { researchAreas } from '../data.js'

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="research" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Research Focus</span>
        <h2 className="section-title">Key Research Domains</h2>
        <p className="section-desc">
          Advancing the frontier of AI-driven security systems and privacy-preserving healthcare AI.
        </p>
      </motion.div>

      <div className="research-grid">
        {researchAreas.map((area, i) => (
          <motion.div
            key={area.title}
            className="research-card glass"
            style={{
              '--card-accent': area.color,
              '--card-gradient': area.gradient,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
          >
            <div
              className="research-icon-wrap"
              style={{
                background: area.gradient,
                borderColor: `${area.color}22`,
              }}
            >
              {area.icon}
            </div>
            <h3 style={{ color: area.color }}>{area.title}</h3>
            <p>{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
