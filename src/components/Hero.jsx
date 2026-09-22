import { profileLinks } from '../data.js'
import Icon from './Icon.jsx'

const credibility = [
  ['16+ Years', 'Enterprise Technology'],
  ['IEEE Senior Member', 'Professional Recognition'],
  ['101.8K', 'DZone Pageviews'],
  ['Government & Enterprise', 'Systems'],
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">ZERO TRUST · IDENTITY SECURITY · AGENTIC AI</p>
          <h1 id="hero-title">
            Securing Digital Identity<br />and AI Systems <span>at Scale</span>
          </h1>
          <p className="hero-lead">
            Technology architect and researcher with 16+ years of experience building and modernizing
            secure enterprise systems across government, healthcare, financial services, and automotive technology.
          </p>
          <p className="hero-secondary">
            Focused on Zero Trust architecture, identity modernization, Agentic AI security,
            enterprise Java, cloud-native platforms, and behavioral authentication.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#impact">
              Explore My Work <Icon name="arrow" />
            </a>
            <a className="button button--secondary" href="#research">Research &amp; Publications</a>
            <a className="text-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn <Icon name="external" size={15} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay" aria-label="Identity security network illustration">
          <div className="identity-orbit identity-orbit--outer" aria-hidden="true" />
          <div className="identity-orbit identity-orbit--inner" aria-hidden="true" />
          <svg className="identity-lines" viewBox="0 0 500 500" aria-hidden="true">
            <path d="M250 90 105 180l38 172 107 58 113-62 32-168Z" />
            <path d="m105 180 145 70 145-70M143 352l107-102 113 98M250 90v160" />
            <circle cx="250" cy="90" r="6" />
            <circle cx="105" cy="180" r="6" />
            <circle cx="395" cy="180" r="6" />
            <circle cx="143" cy="352" r="6" />
            <circle cx="363" cy="348" r="6" />
          </svg>
          <div className="portrait-mark">
            <span className="portrait-initials">DRP</span>
            <span className="portrait-role">ARCHITECT</span>
          </div>
          <div className="secure-label"><Icon name="shield" size={16} /> Identity-first architecture</div>
        </div>
      </div>

      <div className="credibility shell" aria-label="Professional highlights">
        {credibility.map(([value, label]) => (
          <div className="credibility-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
