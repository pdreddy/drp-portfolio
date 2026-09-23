import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Credibility from './components/Credibility.jsx'
import SelectedImpact from './components/SelectedImpact.jsx'
import Expertise from './components/Expertise.jsx'
import Research from './components/Research.jsx'
import Articles from './components/Articles.jsx'
import ProfessionalService from './components/ProfessionalService.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ResearchPage from './pages/ResearchPage.jsx'
import WritingPage from './pages/WritingPage.jsx'

function HomePage() {
  return <main id="main-content"><Hero /><Credibility /><SelectedImpact /><Expertise /><Research /><Articles /><ProfessionalService /><Contact /></main>
}

const routeMeta = {
  '/about': ['About | Damodhara Reddy Palavali', 'Technology architect focused on Zero Trust, identity security, enterprise Java, cloud platforms, and trustworthy AI systems.'],
  '/research': ['Research | Damodhara Reddy Palavali', 'Applied research in Zero Trust, behavioral authentication, AI security, healthcare systems, and enterprise architecture.'],
  '/writing': ['Technical Writing | Damodhara Reddy Palavali', 'Technical writing on Zero Trust, identity security, enterprise Java, cloud platforms, and emerging AI technologies.'],
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const [title, description] = routeMeta[location.pathname] || [
      'Damodhara Reddy Palavali | Zero Trust & Identity Security Architect',
      'Zero Trust and identity security architect with 16+ years of experience across government, healthcare, financial services, cloud, Java, and enterprise security.',
    ]
    const canonicalUrl = `https://damodharapalavali.com${location.pathname === '/' ? '/' : location.pathname}`
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.href = canonicalUrl
    requestAnimationFrame(() => {
      const target = location.hash && document.querySelector(location.hash)
      target ? target.scrollIntoView() : window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [location.pathname, location.hash])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/articles" element={<Navigate to="/writing" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
