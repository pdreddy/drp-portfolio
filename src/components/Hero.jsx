import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, profileLinks, publicArticles, researchStats } from '../data.js'
import Icon from './Icon.jsx'
import ProfileExplorer from './ProfileExplorer.jsx'
import SectionHeading from './SectionHeading.jsx'
import Stats from './Stats.jsx'

const socials = [
  ['LinkedIn', 'linkedin', profileLinks.linkedin],
  ['Google Scholar', 'cap', profileLinks.scholar],
  ['ResearchGate', 'book', profileLinks.researchgate],
  ['Email', 'mail', profileLinks.email],
]

const highlights = [
  ['shield', 'Work', 'Identity modernization and Zero Trust architecture across government, healthcare, finance, and automotive.', '/work', 'Selected work'],
  ['cap', 'Research', `${researchStats.published} published papers on Zero Trust, identity, and applied AI.`, '/research', 'Read the papers'],
  ['pen', 'Writing', `${publicArticles.length} technical articles on secure architecture and enterprise Java.`, '/writing', 'Read articles'],
  ['mic', 'Speaking', 'Conference presentations, peer review, and judging in security and AI.', '/speaking', 'See talks'],
]

function Portrait() {
  const [failed, setFailed] = useState(!profile.photo)
  return (
    <div className="portrait reveal">
      <div className="portrait-frame">
        {failed
          ? <span className="portrait-initials" aria-hidden="true">DRP</span>
          : <img src={profile.photo} alt={profile.name} onError={() => setFailed(true)} />}
      </div>
      <p className="portrait-caption"><strong>{profile.experienceLabel}</strong><span>building secure systems</span></p>
    </div>
  )
}

export default function Hero() {
  return (
    <main id="main-content" className="home-main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div>
            <p className="hero-kicker">Technologist · Researcher · Speaker</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">Securing digital identity and AI systems at scale.</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/about">About Me <Icon name="arrow" /></Link>
              <a className="button button--ghost" href={profileLinks.email}>Get in Touch</a>
            </div>
            <p className="status-pill"><span className="status-dot" /> Open to speaking, reviewing &amp; research collaboration</p>
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

      <section className="section section--alt" aria-labelledby="highlights-title">
        <div className="shell">
          <SectionHeading eyebrow="What I do" title={<span id="highlights-title">Building, researching, and sharing secure systems.</span>} />
          <div className="highlight-grid">
            {highlights.map(([icon, title, text, to, cta]) => (
              <Link className="highlight-card reveal" key={to} to={to}>
                <span className="icon-tile"><Icon name={icon} size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="arrow-link">{cta} <Icon name="arrow" size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section">
        <Stats />
      </div>

      <section className="section section--alt" aria-labelledby="explorer-title">
        <div className="shell home-explorer">
          <SectionHeading
            eyebrow="Ask about my work"
            title={<span id="explorer-title">Quick answers, straight from my profile.</span>}
            description="Pick a question or type your own to see projects, papers, articles, and talks on that topic."
          />
          <ProfileExplorer />
        </div>
      </section>
    </main>
  )
}
