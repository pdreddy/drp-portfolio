import { memberships, serviceCategories } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

const selectedService = serviceCategories.filter(({ title }) =>
  ['Conference Speaking', 'IEEE Activities', 'Peer Review', 'Technical Judging'].includes(title)
)

export default function ProfessionalService() {
  return (
    <section id="speaking" className="section editorial-section">
      <div className="shell service-layout">
        <SectionHeading
          eyebrow="Community"
          title="Speaking & Professional Service"
          description="Professional participation through technical communication, peer contribution, and engineering communities."
        />
        <div className="service-list">
          {selectedService.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
          <article>
            <h3>Professional Memberships</h3>
            <p>{memberships.map(({ name, tier }) => `${name} ${tier}`).join(' · ')}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
