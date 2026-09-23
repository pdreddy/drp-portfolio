import { Link } from 'react-router-dom'
import { publicationCount, publications } from '../data.js'
import { ResearchCard } from '../components/Research.jsx'
import Icon from '../components/Icon.jsx'

export default function ResearchPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow"><span aria-hidden="true">//</span> research</p>
          <h1>Applied research for trustworthy systems.</h1>
          <p>{publicationCount} verified publications spanning identity, Zero Trust, applied AI, healthcare systems, and enterprise architecture.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell card-grid card-grid--2">
          {publications.map((publication) => <ResearchCard key={publication.title} publication={publication} />)}
        </div>
      </section>
    </main>
  )
}
