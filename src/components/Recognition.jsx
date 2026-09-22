import { memberships } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Recognition() {
  return (
    <section id="recognition" className="recognition-section section section--soft">
      <div className="shell recognition-layout">
        <SectionHeading
          eyebrow="Professional Recognition"
          title="Service grounded in the engineering community"
          description="Professional memberships and service reflect a continued commitment to rigorous engineering practice, technical communication, and peer contribution."
        />
        <div className="recognition-list">
          {memberships.map((membership) => (
            <article key={membership.name}>
              <strong>{membership.name}</strong>
              <span>{membership.tier}</span>
            </article>
          ))}
          <article>
            <strong>Technical Review</strong>
            <span>Applied AI, cybersecurity, and software systems</span>
          </article>
          <article>
            <strong>Technical Judging</strong>
            <span>AI, cloud, cybersecurity, and innovation programs</span>
          </article>
        </div>
      </div>
    </section>
  )
}
