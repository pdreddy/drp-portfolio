const tickerItems = [
  'Agentic AI', '✦', 'Zero Trust Architecture', '✦',
  'Behavioral Biometrics', '✦', 'Federated Learning', '✦',
  'Healthcare Security', '✦', 'IEEE Senior Member', '✦',
  'IETE Fellow', '✦', 'CNN-LSTM Auth', '✦',
  'Agentic AI', '✦', 'Zero Trust Architecture', '✦',
  'Behavioral Biometrics', '✦', 'Federated Learning', '✦',
  'Healthcare Security', '✦', 'IEEE Senior Member', '✦',
  'IETE Fellow', '✦', 'CNN-LSTM Auth', '✦',
]

export default function Hero() {
  const highlights = [
    ['16+', 'Years Experience'],
    ['9+', 'MMIS Systems'],
    ['8+', 'Published Articles'],
    ['500K+', 'Users Protected'],
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '86px' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb1 absolute rounded-full opacity-25"
          style={{
            width: '640px',
            height: '640px',
            top: '-12%',
            right: '-8%',
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 72%)',
            filter: 'blur(88px)',
          }}
        />
        <div
          className="orb2 absolute rounded-full opacity-20"
          style={{
            width: '520px',
            height: '520px',
            bottom: '2%',
            left: '-8%',
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-14 pb-8">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
          style={{
            background: 'rgba(56,189,248,0.06)',
            borderColor: 'rgba(56,189,248,0.22)',
            animation: 'fadeUp 0.6s ease both',
          }}
        >
          <span className="relative w-2 h-2 rounded-full pulse-ring flex-shrink-0" style={{ background: '#34d399' }} />
          <span
            className="text-xs font-medium"
            style={{ fontFamily: 'var(--font-mono)', color: '#34d399', letterSpacing: '0.1em' }}
          >
            OPEN TO COLLABORATION
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-hero mb-5" style={{ animation: 'fadeUp 0.7s 0.1s ease both', opacity: 0 }}>
          <span className="block gradient-text-hero">Damodhara</span>
          <span className="block gradient-text-hero">Reddy Palavali</span>
        </h1>

        {/* Role line */}
        <p
          className="shimmer-text mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            animation: 'fadeUp 0.7s 0.2s ease both',
            opacity: 0,
          }}
        >
          Full Stack Developer · AI Researcher · Zero Trust Enthusiast · Cybersecurity Innovator
        </p>

        {/* Tagline */}
        <p
          className="max-w-3xl mb-10 leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            color: 'var(--text2)',
            animation: 'fadeUp 0.7s 0.3s ease both',
            opacity: 0,
          }}
        >
          Building intelligent, secure, and scalable systems using Agentic AI and Zero Trust Architecture —
          protecting millions across government healthcare infrastructure.
        </p>

        {/* CTA + stats panel */}
        <div
          className="hero-panel"
          style={{ animation: 'fadeUp 0.7s 0.4s ease both', opacity: 0 }}
        >
          <div className="flex flex-wrap gap-4">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline transition-all duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'var(--accent)',
                color: '#050c18',
                boxShadow: '0 0 28px rgba(56,189,248,0.35)',
                letterSpacing: '-0.01em',
              }}
            >
              View Publications
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline border transition-all duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text)',
                borderColor: 'var(--border2)',
                background: 'transparent',
                letterSpacing: '-0.01em',
              }}
            >
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {highlights.map(([n, l]) => (
              <div key={l} className="hero-stat-card">
                <div className="gradient-text" style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 700, lineHeight: 1 }}>
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text3)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker tape */}
      <div className="ticker-wrap w-full border-y py-3.5 mt-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="ticker">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="px-6 text-xs font-medium whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-mono)',
                color: item === '✦' ? 'var(--accent)' : 'var(--text3)',
                letterSpacing: '0.1em',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
