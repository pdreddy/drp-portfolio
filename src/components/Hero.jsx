import ProfileExplorer from './ProfileExplorer.jsx'

export default function Hero() {
  return (
    <main id="main-content" className="home-main">
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="shell home-grid">
          <div className="identity-intro">
            <p className="availability"><span aria-hidden="true" /> Available for speaking &amp; collaboration</p>
            <h1 id="hero-title">Damodhara Reddy Palavali</h1>
            <p className="identity-line">ZERO TRUST · IDENTITY SECURITY · AGENTIC AI</p>
            <h2>Securing Digital Identity<br />and AI Systems at Scale</h2>
            <p className="identity-summary">Technology architect and researcher with 16+ years of experience building secure enterprise systems across government, healthcare, financial services, and automotive technology.</p>
            <p className="micro-credibility">16+ years <span>·</span> IEEE Senior Member <span>·</span> 101.8K DZone views <span>·</span> Enterprise &amp; Government Systems</p>
          </div>
          <ProfileExplorer />
        </div>
      </section>
    </main>
  )
}
