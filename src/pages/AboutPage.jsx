import { Link } from 'react-router-dom'
import { careerDomains } from '../data.js'
import Icon from '../components/Icon.jsx'

const focus = ['Zero Trust Architecture', 'Identity Security', 'Agentic AI Security', 'Behavioral Authentication', 'Secure Cloud-Native Systems']

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero page-hero--light">
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow">About</p>
          <h1>Engineering trust into large-scale digital systems.</h1>
          <p>
            Damodhara Reddy Palavali is a technology architect and researcher with more than 16 years
            of experience across government, healthcare, financial services, and automotive technology.
          </p>
        </div>
      </header>
      <section className="section about-page-section">
        <div className="shell about-page-grid">
          <div className="about-narrative">
            <h2>Architecture grounded in delivery</h2>
            <p>His work spans Zero Trust architecture, identity modernization, enterprise Java and cloud platforms, behavioral authentication, and applied AI security.</p>
            <p>Across complex and regulated environments, the focus remains consistent: reduce architectural risk, modernize responsibly, and build secure platforms that teams can operate with confidence.</p>
          </div>
          <aside className="focus-list" aria-labelledby="focus-heading">
            <h2 id="focus-heading">Current Focus</h2>
            <ul>{focus.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>
      <section className="section section--soft">
        <div className="shell career-editorial">
          <div><p className="eyebrow">Career Perspective</p><h2>Experience across complex domains</h2></div>
          <ol>{careerDomains.map((domain, index) => <li key={domain.label}><span>0{index + 1}</span><div><h3>{domain.label}</h3><p>{domain.text}</p></div></li>)}</ol>
        </div>
      </section>
    </main>
  )
}
