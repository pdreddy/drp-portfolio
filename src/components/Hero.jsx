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
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb1 absolute rounded-full opacity-20"
          style={{
            width: '600px', height: '600px',
            top: '-10%', right: '-5%',
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="orb2 absolute rounded-full opacity-15"
          style={{
            width: '500px', height: '500px',
            bottom: '10%', left: '-5%',
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-16 pb-8">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
          style={{
            background: 'rgba(56,189,248,0.06)',
            borderColor: 'rgba(56,189,248,0.22)',
            animation: 'fadeUp 0.6s ease both',
          }}
        >
          <span
            className="relative w-2 h-2 rounded-full pulse-ring flex-shrink-0"
            style={{ background: '#34d399' }}
          />
          <span
            className="text-xs font-medium"
            style={{ fontFamily: 'var(--font-mono)', color: '#34d399', letterSpacing: '0.1em' }}
          >
            OPEN TO COLLABORATION
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-hero mb-4"
          style={{ animation: 'fadeUp 0.7s 0.1s ease both', opacity: 0 }}
        >
          <span className="block gradient-text-hero">Damodhara</span>
          <span className="block gradient-text-hero">Reddy Palavali</span>
        </h1>

        {/* Role line */}
        <p
          className="shimmer-text mb-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            animation: 'fadeUp 0.7s 0.2s ease both',
            opacity: 0,
          }}
        >
          AI Researcher · Zero Trust Architect · Cybersecurity Innovator
        </p>

        {/* Tagline */}
        <p
          className="max-w-xl mb-10 leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--text2)',
            animation: 'fadeUp 0.7s 0.3s ease both',
            opacity: 0,
          }}
        >
          Building intelligent, secure, and scalable systems using Agentic AI and
          Zero Trust Architecture — protecting millions of Americans across government
          healthcare infrastructure.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-16"
          style={{ animation: 'fadeUp 0.7s 0.4s ease both', opacity: 0 }}
        >
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(56,189,248,0.55)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 28px rgba(56,189,248,0.35)'
            }}
          >
            View Publications
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border2)'
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-10 pt-10 border-t"
          style={{
            borderColor: 'var(--border)',
            animation: 'fadeUp 0.7s 0.5s ease both',
            opacity: 0,
          }}
        >
          {[['16+', 'Years Experience'], ['9+', 'MMIS Systems'], ['8+', 'Publications'], ['500K+', 'Users Protected']].map(
            ([n, l]) => (
              <div key={l}>
                <div
                  className="gradient-text"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}
                >
                  {n}
                </div>
                <div
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}
                >
                  {l}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Ticker tape */}
      <div
        className="ticker-wrap w-full border-y py-3.5 mt-4"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
      >
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
