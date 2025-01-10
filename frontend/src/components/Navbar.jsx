import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Raqid Alafia"
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-black text-lg font-medium hover:text-amber-500 transition-colors ease-in-out duration-300">Home</Link>
            <Link to="/about" className="text-black text-lg font-medium hover:text-amber-500 transition-colors ease-in-out duration-300">About</Link>
            <Link to="/solution" className="text-black text-lg font-medium hover:text-amber-500 transition-colors ease-in-out duration-300">Solution</Link>
            <Link to="/verticals" className="text-black text-lg font-medium hover:text-amber-500 transition-colors ease-in-out duration-300">Verticals</Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
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
        <div className="md:hidden bg-primary" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-black text-lg font-medium block px-3 py-2 rounded-md hover:text-amber-500">Home</Link>
            <Link to="/about" className="text-black text-lg font-medium block px-3 py-2 rounded-md hover:text-amber-500">About</Link>
            <Link to="/solution" className="text-black text-lg font-medium block px-3 py-2 rounded-md hover:text-amber-500">Solution</Link>
            <Link to="/verticals" className="text-black text-lg font-medium block px-3 py-2 rounded-md hover:text-amber-500">Verticals</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
