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

export function ResearchRow({ publication }) {
  const primary = getPrimaryPublicationLink(publication)
  return (
    <article className="research-row">
      <p className="research-meta">{publication.venue} · {publication.year}</p>
      <div className="row-content">
        <h3>{publication.title}</h3>
        <p>{publication.description}</p>
      </div>
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
    <section id="research" className="section editorial-section">
      <div className="shell">
        <div className="section-header-row">
          <SectionHeading
            eyebrow="Research"
            title="Selected Research"
            description="Applied work spanning Zero Trust, behavioral authentication, AI security, healthcare systems, and enterprise decision intelligence."
          />
          <Link className="arrow-link section-link" to="/research">View All Research <Icon name="arrow" /></Link>
        </div>
        <div className="research-list">
          {publications.slice(0, 4).map((publication) => <ResearchRow key={publication.title} publication={publication} />)}
        </div>
      </div>
    </section>
  )
}
