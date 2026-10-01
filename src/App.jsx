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
import { canonicalFor, getRouteMeta } from './siteMeta.js'

export default function App() {
  const location = useLocation()
  useReveal(location.pathname)

  useEffect(() => {
    const { title, description } = getRouteMeta(location.pathname)
    const canonicalUrl = canonicalFor(location.pathname)
    const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value)
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', canonicalUrl)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
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
