import { expertise } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

export default function Expertise() {
  return (
    <section id="expertise" className="section section--alt">
      <div className="shell">
        <SectionHeading eyebrow="expertise" title="What I work on" />
        <div className="card-grid card-grid--3">
          {expertise.map((item) => (
            <article className="card expertise-card reveal" key={item.number}>
              <span className="icon-tile"><Icon name={item.icon} size={22} /></span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="tags" aria-label={`${item.title} technologies`}>
                {item.technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
