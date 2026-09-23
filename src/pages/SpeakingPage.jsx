import { Link } from 'react-router-dom'
import SpeakingActivities from '../components/SpeakingActivities.jsx'
import Icon from '../components/Icon.jsx'

export default function SpeakingPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow"><span aria-hidden="true">//</span> speaking &amp; service</p>
          <h1>Sharing practical architecture experience.</h1>
          <p>Technical communication and professional contribution across secure architecture, applied AI, and enterprise modernization.</p>
        </div>
      </header>
      <SpeakingActivities />
    </main>
  )
}
