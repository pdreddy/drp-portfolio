import { dzoneProfile, publicArticles, researchStats } from '../data.js'

const stats = [
  [String(researchStats.published), 'Published Papers'],
  [String(researchStats.accepted), 'Accepted / Forthcoming'],
  [String(publicArticles.length), 'Technical Articles'],
  [dzoneProfile.pageviews, 'DZone Pageviews'],
]

export default function Stats() {
  return (
    <section className="stats" aria-label="At a glance">
      <div className="shell stats-grid">
        {stats.map(([value, label]) => (
          <p className="stat-card reveal" key={label}>
            <strong className="gradient-text">{value}</strong>
            <span>{label}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
