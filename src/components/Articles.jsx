import { Link } from 'react-router-dom'
import { articles } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'
const picks=[articles[6],articles[5],articles[1]]
export function ArticleCard({article}){return <article className="article-card reveal"><div className="card-meta"><span>{article.platform}</span><span>{article.date}</span></div><h3><a href={article.link} target="_blank" rel="noreferrer">{article.title}<Icon name="external" size={15}/></a></h3><p>{article.description}</p></article>}
export default function Articles(){return <section id="articles" className="section section--ink"><div className="shell">
 <div className="section-heading-row"><SectionHeading light eyebrow="Thought Leadership" title="Featured Technical Writing" description="Practical perspectives on identity, secure AI, and enterprise Java and cloud architecture."/><Link className="button button--light" to="/articles">View All Articles <Icon name="arrow"/></Link></div>
 <div className="article-grid">{picks.map(a=><ArticleCard key={a.title} article={a}/>)}</div>
</div></section>}
