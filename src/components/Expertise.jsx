import { expertise } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Expertise() {
  return (
    <section id="expertise" className="section section--soft">
      <div className="shell">
        <SectionHeading eyebrow="Capabilities" title="Expertise" />
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-item" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title.replace('Cloud & Microservices Architecture', 'Cloud & Microservices').replace('Behavioral Biometrics & Applied AI', 'Behavioral Biometrics')}</h3>
              <p>{item.summary}</p>
              <ul aria-label={`${item.title} technologies`}>
                {item.technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
