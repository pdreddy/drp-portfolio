import { profileLinks } from '../data.js'
import Icon from './Icon.jsx'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-inner reveal">
        <p className="eyebrow">ZERO TRUST · IDENTITY SECURITY · ENTERPRISE AI</p>
        <h1 id="hero-title">Damodhara Reddy Palavali</h1>
        <p className="hero-statement">Securing Digital Identity<br />and AI Systems at Scale</p>
        <p className="hero-summary">
          Technology architect and researcher with 16+ years of experience building and modernizing
          secure enterprise systems across government, healthcare, financial services, and automotive technology.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#work">View My Work <Icon name="arrow" /></a>
          <a className="button button--quiet" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn <Icon name="external" size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
