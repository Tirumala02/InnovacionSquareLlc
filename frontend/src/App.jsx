import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solution from './pages/Solution'
import Verticals from './pages/Verticals'
import Contact from './pages/Contact'
import ScrollToTopButton from './components/ScrollUp'

function App() {
  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen m-auto">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/verticals" element={<Verticals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    <Footer />
    <ScrollToTopButton/>
    </Router>
    </>
  )
}

export default App
