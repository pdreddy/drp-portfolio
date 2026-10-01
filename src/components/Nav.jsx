import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { profileLinks } from '../data.js'

const links = [
  ['About', '/#about'],
  ['Experience', '/#experience'],
  ['Research & Speaking', '/#research'],
  ['Articles', '/#articles'],
  ['Contact', '/#contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`site-nav${compact ? ' site-nav--compact' : ''}`}>
      <div className="shell nav-inner">
        <Link className="brand" to="/" aria-label="Damodhara Reddy Palavali home"><span className="brand-full">Damodhara Reddy Palavali</span><span className="brand-short">DRP</span><span className="brand-dot">.</span></Link>
        <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
        <nav id="primary-navigation" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="nav-cta" href={profileLinks.email} onClick={() => setOpen(false)}>Get in Touch</a>
        </nav>
      </div>
    </header>
  )
}
