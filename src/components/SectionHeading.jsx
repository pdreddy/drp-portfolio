export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <header className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </header>
  )
}
