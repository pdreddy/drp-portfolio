import SectionHeading from './SectionHeading.jsx'

const focus = ['Zero Trust Identity Architecture','Agentic AI Security','Behavioral Biometrics','Continuous Authentication','Secure Cloud-Native Systems']
export default function About() {
  return <section id="about" className="section section--light"><div className="shell about-grid">
    <div>
      <SectionHeading eyebrow="Executive Profile" title="Engineering Trust Into Large-Scale Digital Systems" />
      <div className="prose">
        <p>Damodhara Reddy Palavali is a Zero Trust and Identity Security architect with more than 16 years of experience across government systems, healthcare and Medicaid MMIS, financial services, automotive platforms, and enterprise cloud modernization.</p>
        <p>His work connects security architecture with practical delivery: modernizing Java and Spring platforms, designing identity-first controls, advancing cloud-native systems, and applying AI research to continuous authentication and secure decision-making.</p>
      </div>
    </div>
    <aside className="focus-panel" aria-labelledby="focus-title"><p className="eyebrow" id="focus-title">Current Focus</p><ul>{focus.map(item=><li key={item}>{item}</li>)}</ul></aside>
  </div></section>
}
