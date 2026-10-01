import Icon from './Icon.jsx'
import { profileLinks } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><strong>Damodhara Reddy Palavali</strong><p>Zero Trust &amp; Identity Security · © {new Date().getFullYear()}</p></div>
        <nav aria-label="Footer navigation"><a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profileLinks.ieee} target="_blank" rel="noreferrer">IEEE</a><a href={profileLinks.email}>Email</a><a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <Icon name="arrow" size={14} /></a></nav>
      </div>
    </footer>
  )
}
