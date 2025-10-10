import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import People from './pages/People.jsx'
import Research from './pages/Research.jsx'
import News from './pages/News.jsx'
import Publications from './pages/Publications.jsx'
import Positions from './pages/Positions.jsx'
import CscPhd from './pages/CscPhd.jsx'

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Nav />
      <main className="min-h-[60vh] bg-white">
        <Routes>
          {/* A dedicated page for prospective CSC PhD students. */}
          <Route path="/csc-phd" element={<CscPhd />} />
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/research" element={<Research />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
