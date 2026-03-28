import { publications } from '../data.js'

function PubLinks({ pub }) {
  const links = [
    { label: 'IEEE Xplore', href: pub.ieee, color: '#60a5fa' },
    { label: 'ResearchGate', href: pub.researchgate, color: '#34d399' },
    { label: 'Google Scholar', href: pub.scholar, color: '#fb923c' },
    { label: 'PDF', href: pub.pdf, color: '#a78bfa' },
  ]
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {links.map(({ label, href, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border no-underline transition-all duration-200"
          style={{
            fontFamily: 'var(--font-mono)',
            color,
            borderColor: `${color}30`,
            background: `${color}08`,
            letterSpacing: '0.05em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${color}18`
            e.currentTarget.style.borderColor = `${color}55`
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${color}08`
            e.currentTarget.style.borderColor = `${color}30`
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          ↗ {label}
        </a>
      ))}
    </div>
  )
}

export default function Publications() {
  return (
    <section
      id="publications"
      style={{
        background: 'var(--bg2)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4 reveal" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Peer-Reviewed Work
        </div>
        <h2 className="text-section reveal mb-4" style={{ color: 'var(--text)' }}>
          Publications
        </h2>
        <p className="reveal reveal-d1 mb-12" style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
          8+ IEEE and international journal publications spanning AI security, zero trust,
          federated learning, and healthcare informatics.
        </p>

        <div className="flex flex-col gap-4">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="card-glow reveal p-7 rounded-2xl border"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1.5rem',
                alignItems: 'start',
              }}
            >
              {/* Left */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.15em',
                    marginBottom: '8px',
                  }}
                >
                  PAPER #{pub.num}
                </div>
                <h3
                  className="text-card mb-2"
                  style={{ color: 'var(--text)', fontFamily: 'var(--font-display)', lineHeight: 1.3 }}
                >
                  {pub.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text2)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {pub.description}
                </p>
                <PubLinks pub={pub} />
              </div>

              {/* Year badge */}
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-medium border flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(56,189,248,0.06)',
                  borderColor: 'rgba(56,189,248,0.2)',
                  color: 'var(--accent)',
                }}
              >
                {pub.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
