import { Link } from 'react-router-dom'
import { articles } from '../data.js'
import { ArticleCard } from '../components/Articles.jsx'
import Icon from '../components/Icon.jsx'
import { useScrollReveal } from '../hooks.js'

export default function ArticlesPage(){useScrollReveal();return <main id="main-content" className="page-main">
  <header className="page-hero"><div className="shell"><Link className="back-link" to="/"><Icon name="arrow" size={16}/> Back to profile</Link><p className="eyebrow">Technical Writing</p><h1>Ideas translated into practice</h1><p>Articles on Zero Trust, identity architecture, Agentic AI, Java, Spring, cloud platforms, and secure enterprise delivery.</p></div></header>
  <section className="section section--light"><div className="shell article-grid article-grid--all">{articles.map(a=><ArticleCard key={`${a.platform}-${a.title}`} article={a}/>)}</div></section>
</main>}
