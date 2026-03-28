import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  ['About', '#about'],
  ['Research', '#research'],
  ['Publications', '#publications'],
  ['Articles', '#articles'],
  ['Judging', '#judging'],
  ['Contact', '#contact'],
]

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.95 },
  show:   { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -8, scaleY: 0.95, transition: { duration: 0.16, ease: 'easeIn' } },
}

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollableHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0

      setScrolled(window.scrollY > 40)
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', ...links.map(([, href]) => href.replace('#', ''))]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.45, 0.65],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', closeMenuOnResize)
    return () => window.removeEventListener('resize', closeMenuOnResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-2xl border-b' : 'py-5'
      }`}
      style={{
        background: scrolled
          ? dark ? 'rgba(5,12,24,0.88)' : 'rgba(244,247,252,0.88)'
          : 'transparent',
        borderColor: 'var(--border)',
      }}
    >
      {/* Scroll progress bar */}
      <div className="h-0.5 absolute left-0 top-0 w-full" style={{ background: 'transparent' }}>
        <motion.div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, var(--accent), #a78bfa)',
            boxShadow: '0 0 14px var(--glow)',
          }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.15, ease: 'linear' }}
        />
      </div>

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
          {links.map(([label, href]) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <a
                key={label}
                href={href}
                className="text-xs font-medium transition-all duration-200 no-underline nav-link relative"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--accent)' : 'var(--text3)',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'var(--accent)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--surface)',
              borderColor: 'var(--border2)',
              color: 'var(--text2)',
              letterSpacing: '0.06em',
            }}
            whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95 }}
          >
            {dark ? '☀︎' : '◑'} {dark ? 'Light' : 'Dark'}
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-lg border"
            style={{ borderColor: 'var(--border2)', color: 'var(--text2)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.93 }}
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <motion.span
                className="block h-px w-full"
                style={{ background: 'var(--accent)', originX: 0 }}
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-3/4"
                style={{ background: 'var(--accent)' }}
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block h-px w-full"
                style={{ background: 'var(--accent)', originX: 0 }}
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden absolute top-full left-0 right-0 border-b origin-top"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            {links.map(([label, href]) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <a
                  key={label}
                  href={href}
                  className="block px-6 py-3.5 text-sm border-b no-underline transition-colors"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: isActive ? 'var(--accent)' : 'var(--text2)',
                    borderColor: 'var(--border)',
                  }}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
