import { Link } from 'react-router-dom'
import { dzoneArticles, dzoneProfile } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

const featured = [dzoneArticles[3], dzoneArticles[2], dzoneArticles[1]]

export function WritingRow({ article }) {
  return (
    <article className="writing-row">
      <p className="writing-meta">{article.platform} · {article.date}</p>
      <div className="row-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
      <a className="arrow-link" href={article.link} target="_blank" rel="noreferrer">
        Read article <Icon name="arrow" size={15} />
      </a>
    </article>
  )
}

export default function Articles() {
  return (
    <section id="writing" className="section section--dark">
      <div className="shell">
        <div className="section-header-row">
          <SectionHeading light eyebrow="Ideas in Practice" title="Technical Writing" />
          <Link className="arrow-link arrow-link--light section-link" to="/writing">
            View All Writing <Icon name="arrow" />
          </Link>
        </div>
        <div className="writing-proof" aria-label="DZone writing profile">
          <p><strong>{dzoneProfile.pageviews}</strong><span>Pageviews</span></p>
          <p><strong>{dzoneProfile.articles}</strong><span>Articles</span></p>
          <p><strong>{dzoneProfile.contributorSince}</strong><span>Since</span></p>
        </div>
        <div className="writing-list">
          {featured.map((article) => <WritingRow key={article.title} article={article} />)}
        </div>
      </div>
    </section>
  )
}
