import { Link } from 'react-router-dom'
import { publicationCount, publications } from '../data.js'
import { ResearchRow } from '../components/Research.jsx'
import Icon from '../components/Icon.jsx'
import { useScrollReveal } from '../hooks.js'

export default function ResearchPage() {
  useScrollReveal()
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell page-hero-inner">
          <Link className="back-link back-link--dark" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow">Research</p>
          <h1>Applied research for trustworthy systems.</h1>
          <p>{publicationCount} verified publications spanning identity, Zero Trust, applied AI, healthcare systems, and enterprise architecture.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell research-archive">
          {publications.map((publication) => <ResearchRow key={publication.title} publication={publication} />)}
        </div>
      </section>
    </main>
  )
}
