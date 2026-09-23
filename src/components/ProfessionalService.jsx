import { memberships, serviceCategories } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

const selectedService = serviceCategories.filter(({ title }) =>
  ['Conference Speaking', 'IEEE Activities', 'Peer Review', 'Technical Judging'].includes(title)
)

export default function ProfessionalService() {
  return (
    <section id="speaking" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="community"
          title="Speaking & professional service"
          description="Contributing through technical communication, peer review, and engineering communities."
        />
        <div className="card-grid card-grid--4">
          {selectedService.map((item) => (
            <article className="card service-card reveal" key={item.title}>
              <span className="icon-tile"><Icon name={item.icon} size={20} /></span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <ul className="membership-row reveal" aria-label="Professional memberships">
          {memberships.map(({ name, tier }) => (
            <li key={name}><strong>{name}</strong> <span>{tier}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
