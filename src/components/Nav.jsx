import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { profileLinks } from '../data.js'

const links = [
  ['About', '#about'], ['Impact', '#impact'], ['Expertise', '#expertise'],
  ['Research', '#research'], ['Speaking & Recognition', '#service'],
  ['Articles', '#articles'], ['Contact', '#contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [location.pathname])

  const homeHref = (hash) => location.pathname === '/' ? hash : `/${hash}`

  return (
    <header className={`site-nav${compact ? ' site-nav--compact' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Damodhara Reddy Palavali home"><span>DRP</span></Link>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
        <nav className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={homeHref(href)}>{label}</a>)}
          <a className="button button--nav" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn <Icon name="external" size={14}/>
          </a>
        </nav>
      </div>
    </header>
  )
}
