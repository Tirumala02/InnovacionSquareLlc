import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="conatiner py-2">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex w-full items-center justify-between h-16 ">
          <div className="flex w-full py-2 items-center justify-between border-b border-gray-400 ">
            <div className="flex-shrink-0">
              <Link to="/">
                <motion.img
                  src={logo}
                  alt="Raqid Alafia"
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="text-primary ml-10 flex items-baseline space-x-4">
                <Link to="/" className='border-b-2 border-white hover:border-b-2 hover:border-amber-600 ease-in-out duration-300'>Home</Link>
                <Link to="/about" className='border-b-2 border-white hover:border-b-2 hover:border-amber-600 ease-in-out duration-300'>About</Link>
                <Link to="/solution" className='border-b-2 border-white hover:border-b-2 hover:border-amber-600 ease-in-out duration-300'>Solution</Link>
                <Link to="/verticals" className='border-b-2 border-white hover:border-b-2 hover:border-amber-600 ease-in-out duration-300'>Verticals</Link>
                <Link to="/contact" className='border-b-2 border-white hover:border-b-2 hover:border-amber-600 ease-in-out duration-300'>Contact</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>Home</NavLink>
            <NavLink href="/about" mobile>About</NavLink>
            <NavLink href="/solution" mobile>Solution</NavLink>
            <NavLink href="/verticals" mobile>Verticals</NavLink>
            <NavLink href="/contact" mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, mobile }) => (
  <Link to={href}>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        mobile
          ? 'text-primary hover:bg-tertiary hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          : 'text-white hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium'
      }`}
    >
      {children}
    </motion.a>
  </Link>
)

export default Navbar

