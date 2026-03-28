import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  ['About','#about'],['Research','#research'],['Publications','#publications'],
  ['Articles','#articles'],['Judging','#judging'],['Contact','#contact'],
]

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeSection, setActive]      = useState('home')
  const [progress, setProgress]         = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const pct = doc.scrollHeight - doc.clientHeight
      setScrolled(window.scrollY > 40)
      setProgress(pct > 0 ? Math.min(100, (window.scrollY / pct) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', ...NAV_LINKS.map(([, h]) => h.slice(1))]
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return
    const obs = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length) setActive(visible[0].target.id)
    }, { rootMargin: '-40% 0px -45% 0px', threshold: [0.1, 0.25, 0.45, 0.65] })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 backdrop-blur-2xl border-b' : 'py-5'}`}
      style={{ background: scrolled ? (dark ? 'rgba(5,12,24,0.88)' : 'rgba(244,247,252,0.88)') : 'transparent',
               borderColor: 'var(--border)' }}>

      {/* Scroll progress bar */}
      <div className="h-0.5 absolute left-0 top-0 w-full">
        <motion.div className="h-full"
          style={{ background:'linear-gradient(90deg,var(--accent),#a78bfa)',boxShadow:'0 0 14px var(--glow)' }}
          animate={{ width:`${progress}%` }} transition={{ duration:0.15,ease:'linear' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background:'linear-gradient(135deg,#38bdf8,#a78bfa)',color:'#050c18',fontFamily:'var(--font-display)' }}>
            DRP
          </div>
          <span className="font-semibold text-sm hidden sm:block"
            style={{ color:'var(--text)',fontFamily:'var(--font-display)' }}>
            Damodhara Reddy
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([label, href]) => {
            const active = activeSection === href.slice(1)
            return (
              <a key={label} href={href}
                className="text-xs font-medium no-underline relative"
                style={{ fontFamily:'var(--font-mono)',letterSpacing:'0.08em',
                         textTransform:'uppercase',color: active ? 'var(--accent)' : 'var(--text3)',
                         transition:'color 0.2s' }}
                aria-current={active ? 'page' : undefined}>
                {label}
                {active && (
                  <motion.span layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background:'var(--accent)' }}
                    transition={{ type:'spring',stiffness:400,damping:30 }} />
                )}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border"
            style={{ fontFamily:'var(--font-mono)',background:'var(--surface)',
                     borderColor:'var(--border2)',color:'var(--text2)',letterSpacing:'0.06em' }}
            whileHover={{ borderColor:'var(--accent)',color:'var(--accent)',transition:{duration:0.15} }}
            whileTap={{ scale:0.95 }}>
            {dark ? '☀︎' : '◑'} {dark ? 'Light' : 'Dark'}
          </motion.button>

          {/* Hamburger */}
          <motion.button className="md:hidden p-2 rounded-lg border"
            style={{ borderColor:'var(--border2)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen} aria-label="Toggle navigation"
            whileTap={{ scale:0.93 }}>
            <div className="w-4 h-3 flex flex-col justify-between">
              <motion.span className="block h-px w-full" style={{ background:'var(--accent)',originX:0 }}
                animate={mobileOpen ? {rotate:45,y:5} : {rotate:0,y:0}} transition={{duration:0.2}} />
              <motion.span className="block h-px w-3/4" style={{ background:'var(--accent)' }}
                animate={mobileOpen ? {opacity:0,scaleX:0} : {opacity:1,scaleX:1}} transition={{duration:0.15}} />
              <motion.span className="block h-px w-full" style={{ background:'var(--accent)',originX:0 }}
                animate={mobileOpen ? {rotate:-45,y:-7} : {rotate:0,y:0}} transition={{duration:0.2}} />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity:0,y:-8,scaleY:0.95 }} animate={{ opacity:1,y:0,scaleY:1 }}
            exit={{ opacity:0,y:-8,scaleY:0.95 }} transition={{ duration:0.2,ease:'easeOut' }}
            className="md:hidden absolute top-full left-0 right-0 border-b origin-top"
            style={{ background:'var(--bg)',borderColor:'var(--border)' }}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href}
                className="block px-6 py-3.5 text-sm border-b no-underline"
                style={{ fontFamily:'var(--font-mono)',
                         color: activeSection===href.slice(1) ? 'var(--accent)' : 'var(--text2)',
                         borderColor:'var(--border)' }}
                onClick={() => setMobileOpen(false)}
                aria-current={activeSection===href.slice(1) ? 'page' : undefined}>
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
