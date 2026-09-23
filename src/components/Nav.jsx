import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { profileLinks } from '../data.js'

const links = [
  ['Work', '/work'],
  ['Research', '/research'],
  ['Writing', '/writing'],
  ['About', '/about'],
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
        <Link className="brand" to="/" aria-label="Damodhara Reddy Palavali home"><span className="accent">&lt;</span>DRP<span className="accent"> /&gt;</span></Link>
        <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
        <nav id="primary-navigation" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, to]) => <Link key={to} className={location.pathname === to ? 'is-active' : ''} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="nav-cta" href={profileLinks.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>LinkedIn <Icon name="external" size={13} /></a>
        </nav>
      </div>
    </header>
  )
}
