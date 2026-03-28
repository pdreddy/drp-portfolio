import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import PublicationPage from './pages/PublicationPage.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publication/:id" element={<PublicationPage />} />
      </Routes>
    </>
  )
}
