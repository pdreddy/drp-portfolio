import { articles } from '../data.js'

export default function Articles() {
  return (
    <section
      id="articles"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4 reveal" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Thought Leadership
        </div>
        <h2 className="text-section reveal mb-4" style={{ color: 'var(--text)' }}>
          Articles <span className="gradient-text">&amp; Blogs</span>
        </h2>
        <p className="reveal reveal-d1 mb-12" style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '680px', lineHeight: 1.7 }}>
          Updated publication list across DZone and Medium with practical engineering content on Spring Boot, batch processing,
          security, and production resiliency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`grad-border card-glow reveal reveal-d${(i % 4) + 1} p-7 no-underline flex flex-col gap-4 article-card`}
              style={{
                border: '1px solid var(--border)',
                color: 'inherit',
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="px-3 py-1.5 rounded-md text-xs font-bold"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: `${a.platformColor}18`,
                    color: a.platformColor,
                    border: `1px solid ${a.platformColor}35`,
                    letterSpacing: '0.1em',
                  }}
                >
                  {a.platform}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text3)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {a.readTime}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                }}
              >
                {a.title}
              </h3>

              <p
                style={{
                  color: 'var(--text2)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-body)',
                  flex: 1,
                }}
              >
                {a.description}
              </p>

              <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  READ ARTICLE
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: 'var(--accent)' }}>
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
