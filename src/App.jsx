import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import Articles from './components/Articles.jsx'
import { Judging, Memberships } from './components/JudgingMemberships.jsx'
import Impact from './components/Impact.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useScrollReveal } from './hooks.js'

export default function App() {
  const [dark, setDark] = useState(true)
  useScrollReveal()

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    let frame = null

    const updatePointer = (event) => {
      if (frame) cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }

    const activatePointer = () => {
      document.documentElement.style.setProperty('--pointer-opacity', '1')
    }

    const deactivatePointer = () => {
      document.documentElement.style.setProperty('--pointer-opacity', '0')
    }

    window.addEventListener('mousemove', updatePointer)
    window.addEventListener('mouseenter', activatePointer)
    window.addEventListener('mouseleave', deactivatePointer)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', updatePointer)
      window.removeEventListener('mouseenter', activatePointer)
      window.removeEventListener('mouseleave', deactivatePointer)
    }
  }, [])

  return (
    <div className="app-shell">
      <div className="app-ambient" aria-hidden="true">
        <div className="app-ambient-grid" />
        <div className="app-ambient-spotlight" />
        <div className="app-ambient-beam app-ambient-beam-a" />
        <div className="app-ambient-beam app-ambient-beam-b" />
      </div>
      <Nav dark={dark} setDark={setDark} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Articles />
        <Judging />
        <Memberships />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
