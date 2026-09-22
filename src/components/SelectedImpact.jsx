import { caseStudies } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function SelectedImpact() {
  return <section id="impact" className="section section--ink"><div className="shell">
    <SectionHeading light eyebrow="Selected Impact" title="Selected Engineering Impact" description="Representative work across public-sector identity, healthcare, financial services, and connected platforms—presented without confidential implementation details."/>
    <div className="case-grid">{caseStudies.map((item,i)=><article className="case-card reveal" key={item.title}>
      <div className="case-top"><span>0{i+1}</span><p>{item.sector}</p></div><h3>{item.title}</h3>
      <dl><div><dt>Challenge</dt><dd>{item.challenge}</dd></div><div><dt>My Contribution</dt><dd>{item.contribution}</dd></div><div><dt>Impact</dt><dd>{item.impact}</dd></div></dl>
      <ul className="tech-list" aria-label="Technologies">{item.technology.map(x=><li key={x}>{x}</li>)}</ul>
    </article>)}</div>
  </div></section>
}
