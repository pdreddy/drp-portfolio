import { Link } from 'react-router-dom'
import SelectedImpact from '../components/SelectedImpact.jsx'
import Expertise from '../components/Expertise.jsx'
import Icon from '../components/Icon.jsx'

export default function WorkPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero page-hero--light">
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow">Selected Work</p>
          <h1>Architecture for systems that cannot stand still.</h1>
          <p>Public, non-confidential examples of identity, healthcare, financial-services, and automotive modernization work.</p>
        </div>
      </header>
      <SelectedImpact />
      <Expertise />
    </main>
  )
}
