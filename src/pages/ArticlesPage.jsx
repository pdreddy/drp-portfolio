import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { articles, dzoneProfile } from '../data.js'
import { ArticleCard } from '../components/Articles.jsx'
import Icon from '../components/Icon.jsx'
import { useScrollReveal } from '../hooks.js'

function toIsoDate(date) {
  const parsed = new Date(date)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10)
}

export default function ArticlesPage() {
  useScrollReveal()

  useEffect(() => {
    const script = document.createElement('script')
    script.id = 'writing-structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Technical writing by Damodhara Reddy Palavali',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: article.title,
          datePublished: toIsoDate(article.date),
          url: article.link,
          author: { '@type': 'Person', name: 'Damodhara Reddy Palavali' },
          publisher: { '@type': 'Organization', name: article.platform },
        },
      })),
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <main id="main-content" className="page-main">
      <header className="page-hero">
        <div className="shell">
          <Link className="back-link" to="/"><Icon name="arrow" size={16} /> Back to profile</Link>
          <p className="eyebrow">Technical Writing</p>
          <h1>Ideas translated into practice</h1>
          <p>Writing on Zero Trust, identity architecture, Agentic AI, Java, Spring, cloud platforms, and secure enterprise delivery.</p>
          <div className="page-proof" aria-label="DZone profile highlights">
            <span>{dzoneProfile.pageviews} DZone Pageviews</span>
            <span>{dzoneProfile.articles} DZone Articles</span>
            <span>Contributor Since {dzoneProfile.contributorSince}</span>
          </div>
        </div>
      </header>
      <section className="section section--light" aria-labelledby="writing-portfolio-title">
        <div className="shell">
          <h2 className="visually-hidden" id="writing-portfolio-title">Complete writing portfolio</h2>
          <div className="article-grid article-grid--all">
            {articles.map((article) => (
              <ArticleCard key={`${article.platform}-${article.title}`} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
