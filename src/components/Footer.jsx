import { Link } from 'react-router-dom'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damwi/' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/' },
  { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/' },
]

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <h3>DRP · Research</h3>
          <p>
            AI Researcher & Cybersecurity Architect. IEEE Senior Member. Building
            intelligent security systems for healthcare and government cloud platforms.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-cyan">IEEE Senior Member</span>
            <span className="badge badge-purple">IETE Fellow</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button onClick={() => scrollTo(l.href)}>{l.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4>Connect</h4>
          <ul className="footer-links">
            {SOCIAL_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Damodhara Reddy Palavali. All rights reserved.
        </p>
        <div className="footer-badges">
          <span className="badge">React + Vite</span>
          <span className="badge">Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
