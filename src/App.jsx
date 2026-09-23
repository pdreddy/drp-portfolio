import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ResearchPage from './pages/ResearchPage.jsx'
import SpeakingPage from './pages/SpeakingPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import WritingPage from './pages/WritingPage.jsx'
import useReveal from './useReveal.js'

const routeMeta = {
  '/about': ['About | Damodhara Reddy Palavali', 'Technologist focused on Zero Trust, identity security, enterprise Java, cloud platforms, and trustworthy AI systems.'],
  '/work': ['Selected Work | Damodhara Reddy Palavali', 'Selected identity, healthcare, financial-services, and automotive architecture work by Damodhara Reddy Palavali.'],
  '/research': ['Research | Damodhara Reddy Palavali', 'Applied research in Zero Trust, behavioral authentication, AI security, healthcare systems, and enterprise architecture.'],
  '/writing': ['Technical Writing | Damodhara Reddy Palavali', 'Technical writing on Zero Trust, identity security, enterprise Java, cloud platforms, and emerging AI technologies.'],
  '/speaking': ['Speaking & Service | Damodhara Reddy Palavali', 'Speaking and professional service across secure architecture, applied AI, and enterprise modernization.'],
}

export default function App() {
  const location = useLocation()
  useReveal(location.pathname)

  useEffect(() => {
    const [title, description] = routeMeta[location.pathname] || [
      'Damodhara Reddy Palavali | Zero Trust & Identity Security',
      'Technologist specializing in Zero Trust, identity security, Agentic AI, enterprise Java and secure cloud systems.',
    ]
    const canonicalUrl = `https://damodharapalavali.com${location.pathname === '/' ? '/' : location.pathname}`
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.href = canonicalUrl
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/articles" element={<Navigate to="/writing" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
