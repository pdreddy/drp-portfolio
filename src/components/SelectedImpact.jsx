import { caseStudies } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function SelectedImpact() {
  return (
    <section id="work" className="section editorial-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Impact"
          title="Architecture and modernization across mission-critical systems."
        />
        <div className="impact-list">
          {caseStudies.map((item, index) => (
            <article className="impact-row" key={item.title}>
              <span className="row-index">0{index + 1}</span>
              <div className="impact-title">
                <p>{item.sector}</p>
                <h3>{item.title}</h3>
              </div>
              <div className="impact-summary">
                <p>{item.contribution}</p>
                <span>{item.impact}</span>
              </div>
              <ul aria-label={`${item.title} technologies`}>
                {item.technology.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
