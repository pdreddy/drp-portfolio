import { Link } from 'react-router-dom'
import { profileLinks, researchGroups, researchStats } from '../data.js'
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
          <p>
            {researchStats.published} published papers and {researchStats.accepted} accepted or forthcoming works
            (including {researchStats.chapters} book {researchStats.chapters === 1 ? 'chapter' : 'chapters'}) across identity, Zero Trust, applied AI, and healthcare systems.
            A paper is listed as published only when a direct DOI, publisher, IEEE Xplore, or proceedings record is linked.
          </p>
          <div className="page-proof">
            <span>{researchStats.published} Published</span>
            <span>{researchStats.accepted} Accepted / Forthcoming</span>
            <span>{researchStats.citations} Citations (published records)</span>
          </div>
          <nav className="jump-links" aria-label="Research sections">
            {researchGroups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.title} ({group.items.length})</a>)}
          </nav>
        </div>
      </header>
      {researchGroups.map((group, index) => (
        <section key={group.id} id={group.id} className={`section${index % 2 ? ' section--alt' : ''}`} aria-labelledby={`${group.id}-title`}>
          <div className="shell">
            <header className="section-heading reveal">
              <p className="eyebrow"><span aria-hidden="true">//</span> {group.items.length} {group.items.length === 1 ? 'record' : 'records'}</p>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
              <p className="section-intro">{group.description}</p>
            </header>
            <div className="card-grid card-grid--2">
              {group.items.map((publication) => <ResearchCard key={publication.num} publication={publication} />)}
            </div>
          </div>
        </section>
      ))}
      <section className="section section--tight">
        <div className="shell">
          <p className="footnote">
            Citation counts come from <a href={profileLinks.scholar} target="_blank" rel="noreferrer">Google Scholar</a> and
            include published records only. Author profiles: <a href={profileLinks.ieee} target="_blank" rel="noreferrer">IEEE Xplore</a> · <a href={profileLinks.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
