export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </header>
  )
}
