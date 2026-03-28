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

  return (
    <>
      <Nav dark={dark} setDark={setDark} />
      <main>
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
    </>
  )
}
