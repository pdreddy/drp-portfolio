import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Research from '../components/Research.jsx'
import Publications from '../components/Publications.jsx'
import Impact from '../components/Impact.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Research />
      <div className="section-divider" />
      <Publications />
      <div className="section-divider" />
      <Impact />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  )
}
