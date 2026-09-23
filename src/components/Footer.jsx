import { Link } from 'react-router-dom'
import { profileLinks } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><strong>Damodhara Reddy Palavali</strong><p>Zero Trust · Identity Security · Enterprise Architecture</p></div>
        <nav aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/research">Research</Link>
          <Link to="/writing">Writing</Link>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
