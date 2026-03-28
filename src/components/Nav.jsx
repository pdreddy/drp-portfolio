import { useState, useEffect } from 'react'

const links = [
  ['About', '#about'],
  ['Research', '#research'],
  ['Publications', '#publications'],
  ['Articles', '#articles'],
  ['Judging', '#judging'],
  ['Contact', '#contact'],
]

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-2xl border-b'
          : 'py-5'
      }`}
      style={{
        background: scrolled
          ? dark ? 'rgba(5,12,24,0.88)' : 'rgba(244,247,252,0.88)'
          : 'transparent',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
              color: '#050c18',
              fontFamily: 'var(--font-display)',
            }}
          >
            DRP
          </div>
          <span
            className="font-display font-semibold text-sm hidden sm:block"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            Damodhara Reddy
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium transition-colors duration-200 no-underline"
              style={{
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text3)',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text3)')}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--surface)',
              borderColor: 'var(--border2)',
              color: 'var(--text2)',
              letterSpacing: '0.06em',
            }}
          >
            {dark ? '☀︎' : '◑'} {dark ? 'Light' : 'Dark'}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border"
            style={{ borderColor: 'var(--border2)', color: 'var(--text2)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span className="block h-px w-full" style={{ background: 'var(--accent)' }} />
              <span className="block h-px w-3/4" style={{ background: 'var(--accent)' }} />
              <span className="block h-px w-full" style={{ background: 'var(--accent)' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-b"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block px-6 py-3.5 text-sm border-b no-underline transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--text2)',
                borderColor: 'var(--border)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
