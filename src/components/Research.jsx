import { Link } from 'react-router-dom'
import { publications } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

function PaperLinks({ publication }) {
  const options=[['Publisher',publication.links?.publisher],['DOI',publication.doi],['ResearchGate',publication.links?.researchgate],['Google Scholar',publication.links?.scholar]].filter(([,url])=>url&&url!=='#')
  return <div className="card-links">{options.map(([label,url])=><a key={label} href={url} target="_blank" rel="noreferrer">{label}<Icon name="external" size={13}/></a>)}</div>
}
export function ResearchCard({ publication }) {return <article className="research-card reveal"><p className="card-meta">{publication.year} · {publication.venue}</p><h3>{publication.title}</h3><p>{publication.description}</p><PaperLinks publication={publication}/></article>}
export default function Research(){return <section id="research" className="section section--soft"><div className="shell">
  <div className="section-heading-row"><SectionHeading eyebrow="Selected Research" title="Applied research with operational relevance" description="Applied research spanning Zero Trust, behavioral authentication, AI security, healthcare systems, and enterprise decision intelligence."/><Link className="button button--secondary" to="/research">View All Research <Icon name="arrow"/></Link></div>
  <div className="research-grid">{publications.slice(0,4).map(pub=><ResearchCard key={pub.title} publication={pub}/>)}</div>
</div></section>}
