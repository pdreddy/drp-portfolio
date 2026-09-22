import SectionHeading from './SectionHeading.jsx'

const focus = [
  'Zero Trust Architecture',
  'Identity Security',
  'Agentic AI Security',
  'Behavioral Authentication',
  'Secure Cloud-Native Systems',
]

export default function About() {
  return (
    <section id="about" className="section section--light">
      <div className="shell about-grid">
        <div>
          <SectionHeading eyebrow="Executive Profile" title="Engineering Trust Into Large-Scale Digital Systems" />
          <div className="prose">
            <p>
              Damodhara Reddy Palavali is a technology architect and researcher with more than 16 years
              of experience designing and modernizing secure, high-scale systems across government,
              healthcare, financial services, and automotive technology.
            </p>
            <p>
              His work spans Zero Trust architecture, identity modernization, enterprise Java and cloud
              platforms, behavioral authentication, and applied AI security. He is an IEEE Senior Member
              and technical author whose five DZone articles have generated 101.8K pageviews.
            </p>
          </div>
        </div>
        <aside className="focus-panel" aria-labelledby="focus-title">
          <p className="eyebrow" id="focus-title">Current Focus</p>
          <ul>{focus.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>
      </div>
    </section>
  )
}
