import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CONTACT_LINKS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'damodhara.palavali@gmail.com',
    href: 'mailto:damodhara.palavali@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/damwi',
    href: 'https://www.linkedin.com/in/damwi/',
  },
  {
    icon: '🎓',
    label: 'Google Scholar',
    value: 'Scholar Profile',
    href: 'https://scholar.google.com/',
  },
  {
    icon: '⚡',
    label: 'IEEE Xplore',
    value: 'IEEE Author Profile',
    href: 'https://ieeexplore.ieee.org/',
  },
  {
    icon: '🔬',
    label: 'ResearchGate',
    value: 'ResearchGate Profile',
    href: 'https://www.researchgate.net/',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="contact" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-desc">
          Open to research collaborations, speaking invitations, and consulting opportunities.
        </p>
      </motion.div>

      <div className="contact-grid">
        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '0.5rem' }}>
            Whether you're interested in discussing research, potential collaboration, or have
            questions about my work — I'd be glad to connect.
          </p>

          <div className="contact-links">
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-link"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.07 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div className="contact-link-text">
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA card */}
        <motion.div
          className="contact-cta glass"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ borderRadius: 'var(--card-radius)' }}
        >
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(167,139,250,0.15))',
                border: '1px solid rgba(34,211,238,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              🤝
            </div>
            <h3>Let's Collaborate</h3>
          </div>

          <p>
            I'm available for academic collaborations, industry research partnerships, conference
            speaking, and advisory roles in AI security and healthcare informatics.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <div
              style={{
                padding: '0.875rem 1.125rem',
                borderRadius: 10,
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.15)',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span>📄</span> Research Collaboration
            </div>
            <div
              style={{
                padding: '0.875rem 1.125rem',
                borderRadius: 10,
                background: 'rgba(167,139,250,0.06)',
                border: '1px solid rgba(167,139,250,0.15)',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span>🎤</span> Conference Speaking
            </div>
            <div
              style={{
                padding: '0.875rem 1.125rem',
                borderRadius: 10,
                background: 'rgba(52,211,153,0.06)',
                border: '1px solid rgba(52,211,153,0.15)',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span>🛡</span> Security Consulting
            </div>
          </div>

          <a
            href="mailto:damodhara.palavali@gmail.com"
            className="btn btn-primary"
            style={{ textAlign: 'center', justifyContent: 'center' }}
          >
            Send a Message →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
