import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  memberships, portfolioExperience, profile, profileLinks, publicArticles,
  publications, selectedWork, speakingActivities,
} from '../data.js'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'

const socials = [
  ['LinkedIn', 'linkedin', profileLinks.linkedin],
  ['IEEE profile', 'book', profileLinks.ieee],
  ['GitHub', 'github', profileLinks.github],
  ['Email', 'mail', profileLinks.email],
].filter(([, , href]) => href)

function Portrait() {
  const [failed, setFailed] = useState(!profile.photo)
  return (
    <figure className="portrait reveal">
      <div className="portrait-frame">
        {failed ? <span className="portrait-initials" aria-label="Portrait placeholder for Damodhara Reddy Palavali">DRP</span> : <img src={profile.photo} alt="Damodhara Reddy Palavali" onError={() => setFailed(true)} />}
      </div>
      <figcaption className="portrait-caption"><strong>{profile.experienceLabel}</strong><span>building secure systems</span></figcaption>
    </figure>
  )
}

function SocialLinks({ className = 'social-row' }) {
  return <ul className={className} aria-label="Professional profiles">{socials.map(([label, icon, href]) => <li key={label}><a href={href} aria-label={label} title={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer"><Icon name={icon} size={18} /></a></li>)}</ul>
}

export default function Hero() {
  const featuredArticles = publicArticles.slice(0, 3)
  const featuredResearch = publications.filter(({ status, links }) => status === 'published' && links.length).slice(0, 3)
  const recordedActivities = speakingActivities.filter(({ evidence }) => evidence).slice(0, 2)

  return (
    <main id="main-content" className="home-main">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div>
            <p className="hero-kicker">Zero Trust · Identity Security · AI</p>
            <h1 id="hero-title">Securing digital identity and <em>AI systems</em> at scale.</h1>
            <p className="hero-summary">I’m {profile.name}, a technology leader and researcher with {profile.experienceLabel} of experience building and modernizing secure enterprise systems across government, healthcare, financial services, and automotive technology.</p>
            <p className="hero-support">My work brings together software engineering, identity security, Zero Trust architecture, and applied AI.</p>
            <div className="hero-actions"><a className="button button--primary" href="#work">Explore My Work <Icon name="arrow" /></a><a className="button button--ghost" href={profileLinks.email}>Get in Touch</a></div>
            <p className="status-pill"><span className="status-dot" /> Available for speaking and research collaboration</p>
            <SocialLinks />
          </div>
          <Portrait />
        </div>
      </section>

      <section id="about" className="section section--alt"><div className="shell split-section">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="prose reveal"><p>I’ve spent my career working on enterprise technology across federal government services, Medicaid systems, financial services, and automotive platforms.</p><p>I’m especially interested in identity security, secure modernization, Zero Trust, and AI systems—work that makes complex platforms safer without making them harder to use or maintain.</p><Link className="arrow-link" to="/about">More about my background <Icon name="arrow" size={15} /></Link></div>
      </div></section>

      <section id="experience" className="section"><div className="shell">
        <SectionHeading eyebrow="Experience" title="Work across complex systems" description="A non-confidential view of the environments and problems I’ve worked on." />
        <div className="experience-list">{portfolioExperience.map((item, index) => <article className="experience-row reveal" key={item.title}><span>0{index + 1}</span><div><p className="card-kicker">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
      </div></section>

      <section id="work" className="section section--navy"><div className="shell">
        <div className="section-header-row"><SectionHeading eyebrow="Selected work" title="Secure modernization, from identity to data." /><Link className="arrow-link" to="/work">View work details <Icon name="arrow" size={15} /></Link></div>
        <div className="work-grid">{selectedWork.map((item) => <article className="work-card reveal" key={item.title}><h3>{item.title}</h3><p>{item.description}</p><ul className="tags">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </div></section>

      <section id="research" className="section"><div className="shell">
        <SectionHeading eyebrow="Research & speaking" title="Research, speaking, and professional service" description="My current research connects identity, AI security, healthcare systems, and practical enterprise architecture." />
        <div className="research-layout"><div className="topic-list">{featuredResearch.map(item => <article className="topic-card reveal" key={item.title}><p className="card-kicker">{item.venue} · {item.month}</p><h3>{item.title}</h3><p>{item.description}</p><a className="arrow-link" href={item.links[0].url} target="_blank" rel="noreferrer">View published record <Icon name="external" size={14} /></a></article>)}</div><aside className="service-panel reveal"><p className="eyebrow">Professional service</p><h3>{memberships[0].name} {memberships[0].tier}</h3><p>Research themes include behavioral biometrics, healthcare claims and fraud detection, and context-aware Zero Trust for AI agents.</p>{recordedActivities.length > 0 && recordedActivities.map(item => <p key={item.id}>{item.role} · {item.event}</p>)}<Link className="button button--ghost" to="/research">Explore research</Link><Link className="text-link" to="/speaking">Speaking &amp; service details</Link></aside></div>
      </div></section>

      <section id="articles" className="section section--alt"><div className="shell">
        <div className="section-header-row"><SectionHeading eyebrow="Articles & media" title="Writing and media" description="Practical writing about secure architecture, enterprise Java, cloud systems, and applied AI." /><Link className="arrow-link" to="/writing">View all articles <Icon name="arrow" size={15} /></Link></div>
        <div className="article-list">{featuredArticles.map(item => <article className="article-row reveal" key={item.title}><div><p className="card-kicker">{item.platform} · {item.date}</p><h3>{item.title}</h3><p>{item.description}</p></div><a href={item.link} target="_blank" rel="noreferrer" aria-label={`Read ${item.title}`}><Icon name="external" /></a></article>)}</div>
      </div></section>

      <section id="contact" className="section"><div className="shell"><div className="contact-card reveal"><p className="eyebrow">Contact</p><h2>Let’s connect.</h2><p>For speaking, research, or professional collaboration, feel free to reach out.</p><div className="contact-actions"><a className="button button--primary" href={profileLinks.email}><Icon name="mail" /> Email me</a><a className="button button--ghost" href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" size={14} /></a><a className="button button--ghost" href={profileLinks.ieee} target="_blank" rel="noreferrer">IEEE profile <Icon name="external" size={14} /></a></div></div></div></section>
    </main>
  )
}
