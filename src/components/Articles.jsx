import { Link } from 'react-router-dom'
import { dzoneArticles } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

const featured = [dzoneArticles[3], dzoneArticles[2], dzoneArticles[1]]

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
        <a className="arrow-link" href={article.link} target="_blank" rel="noreferrer">
          Read <Icon name="arrow" size={15} />
        </a>
      </div>
    </article>
  )
}

export default function Articles() {
  return (
    <section id="writing" className="section section--alt">
      <div className="shell">
        <div className="section-header-row">
          <SectionHeading eyebrow="writing" title="Technical articles" description="Practical guidance for engineers on Java, cloud, Zero Trust, and AI." />
          <Link className="arrow-link section-link" to="/writing">All articles <Icon name="arrow" /></Link>
        </div>
        <div className="card-grid card-grid--3">
          {featured.map((article) => <WritingCard key={article.title} article={article} />)}
        </div>
      </div>
    </section>
  )
}
