import { Link } from 'react-router-dom'
import { careerDomains, certifications, education, memberships, profile } from '../data.js'
import Icon from '../components/Icon.jsx'

const focus = ['Zero Trust Architecture', 'Identity Security', 'Agentic AI Security', 'Behavioral Authentication', 'Secure Cloud-Native Systems']

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow"><span aria-hidden="true">//</span> about</p>
          <h1>Engineering <span className="gradient-text">trust</span> into large-scale digital systems.</h1>
          <p>
            {profile.name} is a technologist and researcher with more than {profile.experienceYears} years
            of experience across government, healthcare, financial services, and automotive technology.
          </p>
          <ul className="fact-row" aria-label="Profile facts">
            <li><Icon name="code" size={16} /> {profile.currentRole.title}, {profile.currentRole.employer}</li>
            <li><Icon name="pin" size={16} /> {profile.location}</li>
            <li><Icon name="award" size={16} /> {memberships.map(({ name, tier }) => `${name} ${tier}`).slice(0, 2).join(' · ')}</li>
          </ul>
        </div>
      </header>
      <section className="section">
        <div className="shell about-grid">
          <div className="card about-narrative reveal">
            <h2>Current role</h2>
            <p>{profile.currentRole.summary}</p>
            <h2>Background</h2>
            <p>His work spans Zero Trust architecture, identity modernization, enterprise Java and cloud platforms, behavioral authentication, and applied AI security.</p>
            <p>Across complex and regulated environments, the focus remains consistent: reduce architectural risk, modernize responsibly, and build secure platforms that teams can operate with confidence.</p>
          </div>
          <aside className="card focus-card reveal" aria-labelledby="focus-heading">
            <h2 id="focus-heading">Current focus</h2>
            <ul>{focus.map((item) => <li key={item}><Icon name="check" size={16} /> {item}</li>)}</ul>
            <h2>Memberships</h2>
            <ul>{memberships.map(({ name, tier }) => <li key={name}><Icon name="award" size={16} /> {name} {tier}</li>)}</ul>
          </aside>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="credentials-title">
        <div className="shell">
          <header className="section-heading reveal">
            <p className="eyebrow"><span aria-hidden="true">//</span> credentials</p>
            <h2 id="credentials-title">Certifications &amp; education</h2>
          </header>
          <div className="card-grid card-grid--3">
            {certifications.map((cert) => (
              <article className="card reveal" key={cert.name}>
                <span className="icon-tile"><Icon name="cloud" size={20} /></span>
                <p className="card-kicker">Certification</p>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
              </article>
            ))}
            {education.map((item) => (
              <article className="card reveal" key={item.program}>
                <span className="icon-tile"><Icon name="cap" size={20} /></span>
                <p className="card-kicker">Education · {item.status}</p>
                <h3>{item.program}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <header className="section-heading reveal">
            <p className="eyebrow"><span aria-hidden="true">//</span> career</p>
            <h2>Experience across complex domains</h2>
          </header>
          <div className="card-grid card-grid--4">
            {careerDomains.map((domain, index) => (
              <article className="card reveal" key={domain.label}>
                <p className="card-kicker">0{index + 1}</p>
                <h3>{domain.label}</h3>
                <p>{domain.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
