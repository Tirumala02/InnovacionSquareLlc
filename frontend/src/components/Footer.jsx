import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Innovacion Square LLC</h3>
            <p className="text-sm">Utilizing your health vitals data efficiently</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-tertiary">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-tertiary">About</Link></li>
              <li><Link to="/solution" className="text-sm hover:text-tertiary">Solution</Link></li>
              <li><Link to="/verticals" className="text-sm hover:text-tertiary">Verticals</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-tertiary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Ms Dipti: +971 529986307</p>
            <p className="text-sm mb-2">Email: dipti.h@innovacion-sq.com</p>
            <p className="text-sm">Office 246, Infinity Business Center, Barsha Business Center, Al Barsha 1, Dubai, UAE</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Innovacion Square LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
