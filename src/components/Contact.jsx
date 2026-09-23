import { profileLinks } from '../data.js'
import Icon from './Icon.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <div className="contact-card reveal">
          <p className="eyebrow"><span aria-hidden="true">//</span> contact</p>
          <h2>Let&apos;s build more <span className="gradient-text">trustworthy</span> systems</h2>
          <p>
            Available for technical speaking, research collaboration, and industry discussions around
            Zero Trust, identity security, Agentic AI, and enterprise architecture.
          </p>
          <div className="contact-actions">
            <a className="button button--primary" href={profileLinks.email}>
              <Icon name="mail" size={16} /> Say Hello
            </a>
            <a className="button button--ghost" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={16} /> LinkedIn
            </a>
          </div>
          <nav className="contact-secondary" aria-label="Professional profiles">
            <a href={profileLinks.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
            <a href={profileLinks.ieee} target="_blank" rel="noreferrer">IEEE Xplore</a>
            <a href={profileLinks.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>
          </nav>
        </div>
      </div>
    </section>
  )
}
