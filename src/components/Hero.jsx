import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, profileLinks } from '../data.js'
import Icon from './Icon.jsx'
import ProfileExplorer from './ProfileExplorer.jsx'
import Stats from './Stats.jsx'

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
    </div>
  )
}

export default function Hero() {
  return (
    <main id="main-content" className="home-main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell home-grid">
          <div className="identity-intro">
            <div className="identity-head">
              <Portrait />
              <p className="status-pill"><span className="status-dot" /> Available for speaking &amp; collaboration</p>
            </div>
            <p className="hero-hello">Hi, I&apos;m</p>
            <h1 id="hero-title"><span className="gradient-text">{profile.name}</span></h1>
            <p className="hero-role"><span className="mono">&gt;</span> Securing digital identity and AI systems at scale</p>
            <p className="identity-line">ZERO TRUST · IDENTITY SECURITY · AGENTIC AI</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/work">View My Work <Icon name="arrow" /></Link>
              <a className="button button--ghost" href={profileLinks.email}>Get in Touch</a>
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
          <ProfileExplorer />
        </div>
      </section>
      <Stats />
    </main>
  )
}
