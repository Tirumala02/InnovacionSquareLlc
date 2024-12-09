import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import momentum from '../assets/customers/momentum.png';
import livewell from '../assets/customers/livewell.png';
import star from '../assets/customers/star.png';
import aia from '../assets/customers/aia.png';
import metlife from '../assets/customers/metlife.png';
import generali from '../assets/customers/generali.jpeg';

const logos = [
  { id: 1, src: momentum, alt: "Partner 1" },
  { id: 2, src: livewell, alt: "Partner 2" },
  { id: 3, src: star, alt: "Partner 3" },
  { id: 4, src: aia, alt: "Partner 4" },
  { id: 5, src: metlife, alt: "Partner 5" },
  { id: 6, src: generali, alt: "Partner 6" },
];

const CustomerLogos = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollWidth = () => {
      if (scrollRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalScrollWidth = scrollRef.current.scrollWidth;
        setScrollWidth(totalScrollWidth - containerWidth);
      }
    };

    updateScrollWidth();

    // Recalculate scroll width on window resize
    window.addEventListener('resize', updateScrollWidth);
    return () => window.removeEventListener('resize', updateScrollWidth);
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
      x: 0, // Keeps the animation static at its current position
    },
  };

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Customers</h2>
      <div
        className="relative flex justify-center"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={scrollRef}
          className="flex items-center"
          variants={infiniteScrollVariants}
          animate={isHovered ? "paused" : "animate"}
          style={{ willChange: 'transform' }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 mx-4"
              whileHover={{ scale: 1.1 }}
            >
              <img src={logo.src} alt={logo.alt} className="h-10 md:h-20 w-auto" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerLogos;
