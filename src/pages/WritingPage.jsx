import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { dzoneProfile, publicArticles } from '../data.js'
import { WritingCard } from '../components/Articles.jsx'
import Icon from '../components/Icon.jsx'

function toIsoDate(date) {
  const parsed = new Date(date)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10)
}

export default function WritingPage() {

  useEffect(() => {
    const script = document.createElement('script')
    script.id = 'writing-structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Technical writing by Damodhara Reddy Palavali',
      itemListElement: publicArticles.map((article, index) => ({
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
        <div className="shell page-hero-inner">
          <Link className="back-link" to="/"><Icon name="arrow" size={15} /> Home</Link>
          <p className="eyebrow"><span aria-hidden="true">//</span> writing</p>
          <h1>Technical writing for practitioners.</h1>
          <p>Practical guidance on enterprise architecture, Zero Trust, identity security, Java, cloud-native engineering, and emerging AI technologies.</p>
          <div className="page-proof">
            <span>{dzoneProfile.pageviews} DZone Pageviews</span>
            <span>{dzoneProfile.articles} DZone Articles</span>
            <span>Contributor Since {dzoneProfile.contributorSince}</span>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="shell card-grid card-grid--3">
          {publicArticles.map((article) => <WritingCard key={`${article.platform}-${article.title}`} article={article} />)}
        </div>
      </section>
    </main>
  )
}
