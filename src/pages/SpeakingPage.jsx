import { Link } from 'react-router-dom'
import ProfessionalService from '../components/ProfessionalService.jsx'
import Icon from '../components/Icon.jsx'

export default function SpeakingPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell page-hero-inner">
          <Link className="back-link back-link--dark" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow">Speaking & Service</p>
          <h1>Sharing practical architecture experience.</h1>
          <p>Technical communication and professional contribution across secure architecture, applied AI, and enterprise modernization.</p>
        </div>
      </header>
      <ProfessionalService />
    </main>
  )
}
