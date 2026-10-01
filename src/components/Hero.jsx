import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  dzoneProfile, focusAreas, memberships, portfolioExperience, profile, profileLinks,
  publicArticles, publications, researchStats, selectedWork,
} from '../data.js'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'

const socialLinks = [
  ['LinkedIn', profileLinks.linkedin],
  ['IEEE profile', profileLinks.ieee],
  ['Google Scholar', profileLinks.scholar],
  ['GitHub', profileLinks.github],
  ['Email', profileLinks.email],
].filter(([, href]) => href)

const featuredArticleTitles = [
  'Zero Trust at Scale: Securing Identity Across Hybrid Cloud Infrastructures',
  'Securing Java Microservices with Zero Trust Architecture',
  'Spring AI Capabilities: Effortlessly Integrate Google Gemini with Your Spring Boot Application',
  'Caching Mechanisms Using Spring Boot With Redis or AWS ElastiCache',
]

function Portrait() {
  const [failed, setFailed] = useState(!profile.photo)
  return (
    <figure className="profile-photo">
      <div className="profile-photo__frame">
        {failed
          ? <div className="profile-photo__placeholder" role="img" aria-label="Professional photo placeholder for Damodhara Reddy Palavali"><span>DP</span><small>Upload professional photo</small></div>
          : <img src={profile.photo} alt="Damodhara Reddy Palavali" onError={() => setFailed(true)} />}
      </div>
      {/* Replace public/profile.jpg with an optimized portrait; the path is configured in src/data.js. */}
    </figure>
  )
}

function ExternalLink({ href, children, className = 'evidence-link' }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children} <Icon name="external" size={13} /></a>
}

export default function Hero() {
  const publishedPapers = publications.filter(({ status, links }) => status === 'published' && links.length > 0)
  const featuredArticles = featuredArticleTitles.map(title => publicArticles.find(article => article.title === title)).filter(Boolean)

  return (
    <main id="main-content" className="home-main">
      <section id="top" className="portfolio-hero" aria-labelledby="hero-title">
        <div className="shell portfolio-hero__grid">
          <div>
            <p className="eyebrow">{profile.name}</p>
            <p className="professional-title">Zero Trust &amp; Identity Security Specialist</p>
            <h1 id="hero-title">Enterprise identity security, secure modernization, and applied AI</h1>
            <p className="hero-summary">I am a technology leader and researcher with 15+ years of experience building and modernizing enterprise systems across federal government, healthcare, financial services, and automotive technology. My work focuses on identity security, Zero Trust, secure system modernization, and applied AI.</p>
            <div className="hero-actions"><a className="button button--primary" href="#work">View Selected Work</a><a className="button button--ghost" href={profileLinks.email}>Contact Me</a></div>
          </div>
          <Portrait />
        </div>
        <div className="shell credibility" aria-label="Professional credibility">
          <a href="#publications"><strong>{researchStats.published}</strong><span>published papers with public records</span></a>
          <ExternalLink href={dzoneProfile.profile} className="credibility__item"><strong>{dzoneProfile.articles}</strong><span>DZone articles · {dzoneProfile.pageviews} recorded pageviews</span></ExternalLink>
          <ExternalLink href={profileLinks.ieee} className="credibility__item"><strong>IEEE</strong><span>Senior Member · author profile</span></ExternalLink>
        </div>
      </section>

      <section id="profile" className="compact-section section--alt"><div className="shell">
        <SectionHeading eyebrow="Profile" title="Secure systems, explained clearly and built carefully" />
        <div className="profile-grid"><div className="profile-copy"><p>I have worked across federal government services, Medicaid systems, banking, and automotive technology. I focus on modernizing systems without losing sight of identity, access, reliability, or the people who must operate them.</p><Link className="arrow-link" to="/about">Full professional profile <Icon name="arrow" size={14} /></Link></div><div className="focus-grid">{focusAreas.map(area => <article key={area.title}><h3>{area.title}</h3><p>{area.description}</p></article>)}</div></div>
      </div></section>

      <section id="experience" className="compact-section"><div className="shell">
        <SectionHeading eyebrow="Experience" title="Work across regulated, high-scale environments" description="Only relationships documented in the site records are named; roles and dates are omitted where they are not confirmed." />
        <ol className="compact-timeline">{portfolioExperience.map((item, index) => <li key={item.title}><span className="timeline-index">0{index + 1}</span><div className="timeline-body"><p className="card-kicker">{item.label}</p><h3>{item.title}</h3><ul>{item.contributions.map(point => <li key={point}>{point}</li>)}</ul></div></li>)}</ol>
      </div></section>

      <section id="work" className="compact-section section--navy"><div className="shell">
        <div className="section-header-row"><SectionHeading eyebrow="Selected work" title="Representative enterprise modernization work" /><Link className="arrow-link" to="/work">Detailed work profile <Icon name="arrow" size={14} /></Link></div>
        <div className="selected-work">{selectedWork.map((item, index) => <article key={item.title}><div className="work-number">0{index + 1}</div><div><h3>{item.title}</h3><dl><div><dt>Context</dt><dd>{item.context}</dd></div><div><dt>Contribution</dt><dd>{item.contribution}</dd></div><div><dt>Outcome</dt><dd>{item.outcome}</dd></div></dl><ul className="tags">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </div></section>

      <section id="research" className="compact-section"><div className="shell two-column-section">
        <SectionHeading eyebrow="Research" title="Applied research for trustworthy systems" description="Research themes grounded in identity, healthcare, enterprise systems, and practical security controls." />
        <div className="research-themes"><article><h3>Behavioral biometrics</h3><p>Continuous authentication using behavioral signals and deep-learning methods.</p></article><article><h3>AI in healthcare</h3><p>Claims adjudication, fraud detection, and explainable decision support.</p></article><article><h3>Zero Trust for AI agents</h3><p>Identity, authorization, and context-aware controls for autonomous services.</p></article><article><h3>Secure modernization</h3><p>Applying identity-first architecture to enterprise Java and distributed platforms.</p></article></div>
      </div></section>

      <section id="publications" className="compact-section section--alt"><div className="shell">
        <div className="section-header-row"><SectionHeading eyebrow="Publications" title="Published research and technical writing" description="Every research item below links to a DOI, publisher, proceedings, or IEEE Xplore record." /><Link className="arrow-link" to="/research">Complete research record <Icon name="arrow" size={14} /></Link></div>
        <div className="publication-columns"><div><h3 className="category-heading">Published peer-reviewed papers</h3><div className="verification-list">{publishedPapers.map(paper => <article key={paper.title}><div><p>{paper.venue} · {paper.month}</p><h4>{paper.title}</h4><span className="status-badge status-badge--published">Published</span></div><ExternalLink href={paper.links[0].url}>Verify</ExternalLink></article>)}</div></div><div><h3 className="category-heading">Selected technical articles</h3><div className="verification-list">{featuredArticles.map(article => <article key={article.title}><div><p>{article.platform} · {article.date}</p><h4>{article.title}</h4></div><ExternalLink href={article.link}>Read</ExternalLink></article>)}</div><Link className="arrow-link list-link" to="/writing">All technical articles <Icon name="arrow" size={14} /></Link></div></div>
        <p className="verification-note">Accepted or forthcoming work, book chapters, and speaking entries without a public verification link are not presented as completed work here.</p>
      </div></section>

      <section id="recognition" className="compact-section"><div className="shell">
        <SectionHeading eyebrow="Recognition & service" title="Professional membership and contribution" description="Categories are kept separate so memberships are not confused with awards or completed service." />
        <div className="recognition-grid"><article><p className="card-kicker">Professional memberships</p><ul>{memberships.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.tier}</span></li>)}</ul></article><article><p className="card-kicker">Public profiles</p><ul>{socialLinks.filter(([label]) => label !== 'Email').map(([label, href]) => <li key={label}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></article><article><p className="card-kicker">Review &amp; speaking</p><p>Peer review, judging, and speaking activities remain on the detailed service page and are explicitly marked when evidence is pending.</p><Link className="arrow-link" to="/speaking">Review service records <Icon name="arrow" size={14} /></Link></article></div>
      </div></section>

      <section id="contact" className="compact-section contact-section"><div className="shell contact-layout"><div><p className="eyebrow">Contact</p><h2>Let’s discuss a useful collaboration.</h2><p>For speaking, research, or professional collaboration, feel free to reach out.</p></div><div className="contact-links"><a className="button button--primary" href={profileLinks.email}><Icon name="mail" /> Email me</a><ExternalLink href={profileLinks.linkedin} className="button button--ghost">LinkedIn</ExternalLink><ExternalLink href={profileLinks.ieee} className="button button--ghost">IEEE profile</ExternalLink></div></div></section>
    </main>
  )
}
