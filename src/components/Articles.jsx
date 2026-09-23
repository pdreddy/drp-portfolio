import Icon from './Icon.jsx'

export function WritingCard({ article }) {
  return (
    <article className="card writing-card reveal" style={{ '--platform': article.platformColor }}>
      <div className="card-top">
        <span className="platform-tag">{article.platform}</span>
        <span className="card-date">{article.date}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="card-foot">
        {article.views ? <span className="card-views">{article.views} views</span> : <span />}
        <span className="pub-links">
          {article.extraLinks?.map(({ label, url }) => (
            <a key={url} className="arrow-link" href={url} target="_blank" rel="noreferrer">{label} <Icon name="external" size={14} /></a>
          ))}
          <a className="arrow-link" href={article.link} target="_blank" rel="noreferrer">
            Read <Icon name="arrow" size={15} />
          </a>
        </span>
      </div>
    </article>
  )
}
