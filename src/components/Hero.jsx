import { useState } from 'react'
import { profile, profileLinks } from '../data.js'
import Icon from './Icon.jsx'

const socials = [
  ['LinkedIn', 'linkedin', profileLinks.linkedin],
  ['Google Scholar', 'cap', profileLinks.scholar],
  ['ResearchGate', 'book', profileLinks.researchgate],
  ['Email', 'mail', profileLinks.email],
]

function Portrait() {
  const [failed, setFailed] = useState(!profile.photo)
  return (
    <div className="portrait">
      <div className="portrait-ring">
        {failed
          ? <span className="portrait-initials" aria-hidden="true">DRP</span>
          : <img src={profile.photo} alt={profile.name} onError={() => setFailed(true)} />}
      </div>
      <p className="float-badge float-badge--top"><Icon name="award" size={16} /> IEEE Senior Member</p>
      <p className="float-badge float-badge--bottom"><Icon name="shield" size={16} /> Zero Trust Architect</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="status-pill"><span className="status-dot" /> Open to speaking &amp; research collaboration</p>
          <p className="hero-hello">Hi, I&apos;m</p>
          <h1 id="hero-title"><span className="gradient-text">{profile.name}</span></h1>
          <p className="hero-role">
            <span className="mono">&gt;</span> {profile.title}
          </p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#experience">View My Work <Icon name="arrow" /></a>
            <a className="button button--ghost" href="#contact">Get in Touch</a>
          </div>
          <ul className="social-row" aria-label="Profiles">
            {socials.map(([label, icon, href]) => (
              <li key={label}>
                <a href={href} aria-label={label} title={label} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                  <Icon name={icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Portrait />
      </div>
    </section>
  )
}
