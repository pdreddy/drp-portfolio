import { publicationStatusLabels } from '../data.js'
import Icon from './Icon.jsx'

export function ResearchCard({ publication }) {
  const published = publication.status === 'published'
  return (
    <article className="card pub-card reveal">
      <div className="card-top">
        <span className="badge">{publication.venue}</span>
        <span className={`status-badge status-badge--${publication.status}`}>{publicationStatusLabels[publication.status]}</span>
      </div>
      <h3>{publication.title}</h3>
      <p className="pub-authors">{publication.authors}</p>
      <p>{publication.description}</p>
      <div className="pub-foot">
        <span className="card-date">{publication.month}{published && publication.citations > 0 ? ` · ${publication.citations} citations` : ''}</span>
        {publication.links.length > 0
          ? (
            <span className="pub-links">
              {publication.links.map(({ label, url }) => (
                <a key={url} className="arrow-link" href={url} target="_blank" rel="noreferrer">
                  {label} <Icon name="external" size={14} />
                </a>
              ))}
            </span>
          )
          : <span className="pending-note">Verification link pending</span>}
      </div>
    </article>
  )
}
