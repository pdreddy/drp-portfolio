import { Link } from 'react-router-dom'
import { dzoneArticles, dzoneProfile } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

const featuredDZone = [dzoneArticles[3], dzoneArticles[2], dzoneArticles[1]]

export function ArticleCard({ article, linkLabel }) {
  return (
    <article className="article-card reveal">
      <div className="card-meta">
        <span>{article.topic || article.platform}</span>
        <span>{article.date}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a className="article-link" href={article.link} target="_blank" rel="noreferrer">
        {linkLabel || `Read on ${article.platform}`} <Icon name="external" size={14} />
      </a>
    </article>
  )
}

export default function Articles() {
  return (
    <section id="writing" className="section section--ink writing-section">
      <div className="shell">
        <div className="section-heading-row">
          <SectionHeading
            light
            eyebrow="Technical Writing"
            title="Technical Writing & Industry Insights"
            description="I write about enterprise architecture, Zero Trust, identity security, Java, cloud-native engineering, and emerging AI technologies—translating complex engineering challenges into practical guidance for technology professionals."
          />
          <a className="button button--light" href={dzoneProfile.profile} target="_blank" rel="noreferrer">
            DZone Profile <Icon name="external" size={14} />
          </a>
        </div>

        <div className="writing-metrics" aria-label="DZone contributor statistics">
          <p><strong>{dzoneProfile.pageviews}</strong><span>Pageviews</span></p>
          <p><strong>{dzoneProfile.articles}</strong><span>Published Articles</span></p>
          <p><strong>Since {dzoneProfile.contributorSince}</strong><span>DZone Contributor</span></p>
        </div>

        <div className="article-grid">
          {featuredDZone.map((article) => (
            <ArticleCard key={article.title} article={article} linkLabel="Read on DZone" />
          ))}
        </div>
        <div className="section-footer-action">
          <Link className="button button--light" to="/articles">
            View All Articles <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}
