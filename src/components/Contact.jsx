import { profileLinks } from '../data.js'
import Icon from './Icon.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s Build More Trustworthy Digital Systems</h2>
        <p>
          Available for technical speaking, research collaboration, and industry discussions around
          Zero Trust, identity security, Agentic AI, and enterprise architecture.
        </p>
        <div className="contact-actions">
          <a className="button button--primary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Icon name="external" size={15} />
          </a>
          <a className="button button--quiet button--on-dark" href={profileLinks.email}>Email</a>
        </div>
        <nav className="contact-secondary" aria-label="Professional profiles">
          <a href={profileLinks.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
          <a href={profileLinks.ieee} target="_blank" rel="noreferrer">IEEE</a>
          <a href={profileLinks.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>
        </nav>
      </div>
    </section>
  )
}
