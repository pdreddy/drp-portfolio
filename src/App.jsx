import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SelectedImpact from './components/SelectedImpact.jsx'
import Expertise from './components/Expertise.jsx'
import Research from './components/Research.jsx'
import ProfessionalService from './components/ProfessionalService.jsx'
import Articles from './components/Articles.jsx'
import CareerTimeline from './components/CareerTimeline.jsx'
import Recognition from './components/Recognition.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ResearchPage from './pages/ResearchPage.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import { useScrollReveal } from './hooks.js'

function HomePage(){useScrollReveal();return <main id="main-content"><Hero/><About/><SelectedImpact/><Expertise/><Research/><Articles/><ProfessionalService/><CareerTimeline/><Recognition/><Contact/></main>}

const routeMeta={
  '/research':['Research | Damodhara Reddy Palavali','Applied research in Zero Trust, identity security, behavioral authentication, AI security, and enterprise systems.'],
  '/articles':['Technical Writing | Damodhara Reddy Palavali','Technical writing on Zero Trust, identity, Agentic AI, Java, Spring, cloud, and enterprise architecture.'],
}

export default function App(){const location=useLocation();useEffect(()=>{
  const [title,description]=routeMeta[location.pathname]||['Damodhara Reddy Palavali | Zero Trust & Identity Security Architect','Zero Trust and Identity Security architect, Agentic AI researcher, and enterprise Java and cloud security leader building trustworthy systems at scale.']
  document.title=title;document.querySelector('meta[name="description"]')?.setAttribute('content',description)
  const canonical=document.querySelector('link[rel="canonical"]'); if(canonical) canonical.href=`https://damodharapalavali.com${location.pathname === '/' ? '/' : location.pathname}`
  requestAnimationFrame(() => { const target=location.hash && document.querySelector(location.hash); target ? target.scrollIntoView() : window.scrollTo({top:0,behavior:'instant'}) })
},[location.pathname,location.hash]);return <><a className="skip-link" href="#main-content">Skip to content</a><Nav/><Routes><Route path="/" element={<HomePage/>}/><Route path="/research" element={<ResearchPage/>}/><Route path="/articles" element={<ArticlesPage/>}/><Route path="*" element={<HomePage/>}/></Routes><Footer/></>}
