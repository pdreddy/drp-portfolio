import { caseStudies } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="experience"
          title="Architecture across mission-critical systems"
          description="16+ years designing and modernizing secure platforms in regulated, high-scale environments."
        />
        <ol className="timeline">
          {caseStudies.map((item) => (
            <li className="timeline-item reveal" key={item.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <article className="card timeline-card">
                <p className="card-kicker">{item.period ? `${item.period} · ` : ''}{item.sector}</p>
                <h3>{item.title}</h3>
                <p className="timeline-challenge">{item.challenge}</p>
                <p>{item.contribution}</p>
                <p className="timeline-impact">{item.impact}</p>
                <ul className="tags" aria-label={`${item.title} technologies`}>
                  {item.technology.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
