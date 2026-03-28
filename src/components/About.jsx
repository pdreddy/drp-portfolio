import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { memberships } from '../data.js'

const TAGS = [
  'Agentic AI', 'Zero Trust', 'Behavioral Biometrics', 'Federated Learning',
  'MMIS Systems', 'Cloud-Native', 'Microservices', 'SSA / Login.gov',
  'Reinforcement Learning', 'Explainable AI', 'HIPAA / FedRAMP', 'DevSecOps',
]

const METRICS = [
  { value: '16+', label: 'Years Experience', color: 'var(--cyan)' },
  { value: '8+', label: 'Peer-Reviewed Papers', color: 'var(--purple)' },
  { value: '9+', label: 'State MMIS Platforms', color: 'var(--emerald)' },
  { value: '6+', label: 'Judging Roles', color: 'var(--amber)' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Researcher &amp; Engineer</h2>
          <p className="section-desc">
            16+ years at the intersection of AI, cybersecurity, and government healthcare systems.
          </p>
        </div>
      </motion.div>

      <div className="about-grid">
        {/* Left: Text + Tags */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <p>
            I am an AI researcher and cybersecurity architect with over 16 years of experience
            designing and deploying intelligent security systems for government healthcare platforms,
            including Medicaid Management Information Systems (MMIS) and Social Security Administration
            infrastructure.
          </p>
          <p>
            My research focuses on Agentic AI for autonomous threat response, Zero Trust Architecture
            at government scale, and privacy-preserving machine learning for sensitive health data.
            I bridge rigorous academic research with production engineering — publishing in IEEE
            journals while building systems that protect millions of beneficiaries.
          </p>
          <p>
            As an IEEE Senior Member and international award judge, I actively contribute to
            the broader AI and cybersecurity community through peer review, conference speaking,
            and mentorship.
          </p>

          <div className="about-tags">
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                className="tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right: Metrics + Memberships */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {/* Metric cards */}
          <div className="about-metrics">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                className="about-metric glass"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="about-metric-value" style={{ color: m.color }}>
                  {m.value}
                </span>
                <span className="about-metric-label">{m.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Professional memberships */}
          <div className="about-memberships">
            {memberships.map((m, i) => (
              <motion.div
                key={m.acronym}
                className="membership-card glass"
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <span className="membership-acronym" style={{ color: m.color }}>
                  {m.acronym}
                </span>
                <div className="membership-info">
                  <div className="membership-tier">{m.tier}</div>
                  <div className="membership-desc">{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
