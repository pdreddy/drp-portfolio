const facts = [
  '16+ Years Experience',
  'IEEE Senior Member',
  '101.8K DZone Pageviews',
  'Government & Enterprise Systems',
]

export default function Credibility() {
  return (
    <section className="credibility" aria-label="Professional credibility">
      <div className="shell credibility-inner">
        {facts.map((fact) => <p key={fact}>{fact}</p>)}
      </div>
    </section>
  )
}
