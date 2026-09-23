import { Link } from 'react-router-dom'
import { publications } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

export function getPrimaryPublicationLink(publication) {
  if (publication.links?.publisher) return { label: 'View publication', url: publication.links.publisher }
  if (publication.doi) return { label: 'View DOI', url: publication.doi }
  if (publication.links?.researchgate) return { label: 'View publication', url: publication.links.researchgate }
  return { label: 'View on Scholar', url: publication.links?.scholar }
}

export function ResearchCard({ publication }) {
  const primary = getPrimaryPublicationLink(publication)
  return (
    <article className="card pub-card reveal">
      <div className="card-top">
        <span className="badge">{publication.venue}</span>
        {publication.citations > 0 && <span className="badge badge--accent">{publication.citations} citations</span>}
      </div>
      <h3>{publication.title}</h3>
      <p className="pub-authors">{publication.authors}</p>
      <p>{publication.description}</p>
      {primary.url && (
        <a className="arrow-link" href={primary.url} target="_blank" rel="noreferrer">
          {primary.label} <Icon name="external" size={14} />
        </a>
      )}
    </article>
  )
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="shell">
        <div className="section-header-row">
          <SectionHeading
            eyebrow="research"
            title="Selected publications"
            description="Applied work spanning Zero Trust, behavioral authentication, AI security, healthcare systems, and enterprise decision intelligence."
          />
          <Link className="arrow-link section-link" to="/research">All publications <Icon name="arrow" /></Link>
        </div>
        <div className="card-grid card-grid--2">
          {publications.slice(0, 4).map((publication) => <ResearchCard key={publication.title} publication={publication} />)}
        </div>
      </div>
    </section>
  )
}
