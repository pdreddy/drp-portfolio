import { judgingRoles, memberships } from '../data.js'

export function Judging() {
  return (
    <section
      id="judging"
      style={{
        background: 'var(--bg2)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4 reveal" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: '#fbbf24' }} />
          Recognition
        </div>

        <div className="flex flex-wrap items-start gap-5 mb-10">
          <h2 className="text-section reveal" style={{ color: 'var(--text)' }}>
            Judging &amp; <span className="gradient-text">Leadership</span>
          </h2>
          <div
            className="reveal reveal-d1 inline-flex items-center gap-2 px-5 py-2 rounded-full border self-center"
            style={{
              background: 'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(251,146,60,0.08))',
              borderColor: 'rgba(251,191,36,0.28)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#fbbf24',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            ⭐ International Judge &amp; Evaluator
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {judgingRoles.map((r, i) => (
            <div
              key={i}
              className={`card-glow reveal reveal-d${(i % 3) + 1} p-5 rounded-2xl border flex items-start gap-4`}
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.35)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: 'rgba(251,191,36,0.1)',
                  border: '1px solid rgba(251,191,36,0.25)',
                }}
              >
                {r.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '3px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {r.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--text3)',
                    lineHeight: 1.55,
                  }}
                >
                  {r.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Memberships() {
  return (
    <section
      id="memberships"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4 reveal" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Affiliations
        </div>
        <h2 className="text-section reveal mb-4" style={{ color: 'var(--text)' }}>
          Professional <span className="gradient-text">Memberships</span>
        </h2>
        <p className="reveal reveal-d1 mb-12" style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
          Recognized member of leading global engineering and technology organizations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {memberships.map((m, i) => (
            <div
              key={i}
              className={`grad-border card-glow reveal reveal-d${i + 1} p-7 text-center`}
              style={{ border: '1px solid var(--border)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.12), rgba(167,139,250,0.12))',
                  border: '1px solid var(--border2)',
                }}
              >
                {m.icon}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                {m.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                {m.tier}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--text3)',
                  lineHeight: 1.5,
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
