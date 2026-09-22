import { serviceCategories } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function ProfessionalService() {
  return (
    <section id="speaking" className="section section--light">
      <div className="shell">
        <SectionHeading
          eyebrow="Professional Service"
          title="Speaking, Reviewing & Professional Service"
          description="Professional participation across technical communication, engineering communities, and evidence-based evaluation."
        />
        <div className="service-grid">
          {serviceCategories.map((item, index) => (
            <article className="service-item reveal" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
