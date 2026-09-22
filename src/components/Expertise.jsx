import { expertise } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
export default function Expertise(){return <section id="expertise" className="section section--light"><div className="shell">
  <SectionHeading eyebrow="Core Expertise" title="Security depth. Enterprise breadth." description="Six connected disciplines shaped by hands-on architecture and modernization work."/>
  <div className="expertise-list">{expertise.map(item=><article className="expertise-row reveal" key={item.number} tabIndex="0"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.summary}</p></div><ul>{item.technologies.map(t=><li key={t}>{t}</li>)}</ul></article>)}</div>
</div></section>}
