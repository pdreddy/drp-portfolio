const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damwi/' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/' },
  { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/' },
]

const navLinks = [
  ['About', '#about'], ['Research', '#research'], ['Publications', '#publications'],
  ['Articles', '#articles'], ['Judging', '#judging'], ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: 'linear-gradient(135deg, #38bdf8, #a78bfa)', color: '#050c18', fontFamily: 'var(--font-display)' }}>DRP</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem' }}>Damodhara Reddy Palavali</span>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.7, maxWidth: '280px' }}>
            AI Researcher · Zero Trust Architect · Cybersecurity Innovator with 16+ years securing government healthcare at scale.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Navigation</div>
          <div className="flex flex-col gap-2.5">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="no-underline text-sm transition-colors duration-200" style={{ fontFamily: 'var(--font-body)', color: 'var(--text2)' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text2)')}>{label}</a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Connect</div>
          <div className="flex flex-col gap-2.5">
            {footerLinks.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 no-underline text-sm transition-colors duration-200" style={{ fontFamily: 'var(--font-body)', color: 'var(--text2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text2)')}>
                {label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-3" style={{ borderTop: '1px solid var(--border)' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text3)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Damodhara Reddy Palavali. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34d399', boxShadow: '0 0 6px #34d399' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em' }}>IEEE Senior Member · IETE Fellow</span>
        </div>
      </div>
    </footer>
  )
}
