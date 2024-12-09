import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import polar from '../assets/partners/polar-logo.jpg';
import accenture from '../assets/partners/Accenture.png';
import endava from '../assets/partners/endava.jpg';
import sdg from '../assets/partners/sdg.png';

const logos = [
  { id: 1, src: polar, alt: "Partner 1" },
  { id: 2, src: accenture, alt: "Partner 2" },
  { id: 3, src: endava, alt: "Partner 3" },
  { id: 4, src: sdg, alt: "Partner 4" },
];

const PartnerLogos = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalScrollWidth = scrollRef.current.scrollWidth;
      setScrollWidth(totalScrollWidth - containerWidth);
    }
  }, []);

  const infiniteScrollVariants = {
    animate: {
      x: [0, -scrollWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
    paused: {
      x: null, // Keeps the position where it was paused
    },
  };

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Partners</h2>
      <div 
        className="relative flex justify-center"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={scrollRef}
          className="flex"
          variants={infiniteScrollVariants}
          animate={isHovered ? "paused" : "animate"}
          style={{ willChange: 'transform' }} // Improves animation performance
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <img src={logo.src} alt={logo.alt} className="h-8 md:h-16 w-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerLogos;
