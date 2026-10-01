import { caseStudies, metricText, profile } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="experience"
          title="Architecture across mission-critical systems"
          description={`${profile.experienceLabel} designing and modernizing secure platforms in regulated, high-scale environments. Figures are approximate or estimated and shared at a non-confidential level.`}
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
                {item.metrics && (
                  <ul className="metric-list" aria-label={`${item.title} impact metrics`}>
                    {item.metrics.map((metric) => (
                      <li key={metric.label} aria-label={metricText(metric)}>
                        <span className="metric-qualifier" aria-hidden="true">{metric.qualifier === 'Estimated' ? 'Est.' : 'Approx.'}</span>
                        <strong aria-hidden="true">{metric.value}</strong>
                        <span aria-hidden="true">{metric.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
