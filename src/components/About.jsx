const tags = [
  'Agentic AI', 'Zero Trust', 'Behavioral Biometrics', 'Federated Learning',
  'MMIS Systems', 'Cloud-Native', 'Microservices', 'SSA / Login.gov',
  'Healthcare IT', 'CNN-LSTM', 'FedRAMP', 'DevSecOps',
]

const metrics = [
  ['16+', 'Years Experience'],
  ['9+', 'MMIS Systems'],
  ['8+', 'Publications'],
  ['500K+', 'Users Impacted'],
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg2)', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 7rem)' }}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-eyebrow mb-4 reveal"
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Who I Am
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="text-section reveal mb-6"
              style={{ color: 'var(--text)' }}
            >
              Securing the Future of<br />
              <span className="gradient-text">Healthcare with AI</span>
            </h2>

            <div className="reveal reveal-d1 space-y-4" style={{ color: 'var(--text2)', fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.75 }}>
              <p>
                With 16+ years building mission-critical government systems, I specialize in the intersection of
                artificial intelligence and cybersecurity — designing frameworks that protect sensitive data at
                scale while enabling innovation.
              </p>
              <p>
                I've architected secure authentication systems for <strong style={{ color: 'var(--text)' }}>SSA</strong> and{' '}
                <strong style={{ color: 'var(--text)' }}>Login.gov</strong>, deployed Zero Trust frameworks across{' '}
                <strong style={{ color: 'var(--text)' }}>9 U.S. state MMIS platforms</strong>, and pioneered behavioral
                biometric systems achieving <strong style={{ color: 'var(--accent)' }}>99.5% authentication accuracy</strong>.
              </p>
              <p>
                My research spans agentic AI, federated learning, and privacy-preserving machine learning —
                contributing to a safer, more intelligent healthcare ecosystem for millions of Americans.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 reveal reveal-d2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(56,189,248,0.05)',
                    borderColor: 'rgba(56,189,248,0.18)',
                    color: 'var(--accent)',
                    letterSpacing: '0.04em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(56,189,248,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(56,189,248,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.18)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map(([num, label], i) => (
              <div
                key={label}
                className={`grad-border card-glow reveal reveal-d${i + 1} p-6`}
                style={{ border: '1px solid var(--border)' }}
              >
                <div
                  className="gradient-text mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
