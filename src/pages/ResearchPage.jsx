import { Link } from 'react-router-dom'
import { publicationCount, publications } from '../data.js'
import { ResearchCard } from '../components/Research.jsx'
import Icon from '../components/Icon.jsx'
import { useScrollReveal } from '../hooks.js'

export default function ResearchPage(){useScrollReveal();return <main id="main-content" className="page-main">
  <header className="page-hero"><div className="shell"><Link className="back-link" to="/"><Icon name="arrow" size={16}/> Back to profile</Link><p className="eyebrow">Research</p><h1>Applied research for trustworthy systems</h1><p>A complete list of {publicationCount} research publications spanning identity, Zero Trust, applied AI, healthcare systems, and enterprise architecture.</p></div></header>
  <section className="section section--light"><div className="shell research-grid research-grid--all">{publications.map(p=><ResearchCard key={p.title} publication={p}/>)}</div></section>
</main>}
