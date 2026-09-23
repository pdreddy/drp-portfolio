import { Link } from 'react-router-dom'
import Experience from '../components/Experience.jsx'
import Expertise from '../components/Expertise.jsx'
import Icon from '../components/Icon.jsx'

export default function WorkPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow"><span aria-hidden="true">//</span> selected work</p>
          <h1>Architecture for systems that cannot stand still.</h1>
          <p>Public, non-confidential examples of identity, healthcare, financial-services, and automotive modernization work.</p>
        </div>
      </header>
      <Experience />
      <Expertise />
    </main>
  )
}
