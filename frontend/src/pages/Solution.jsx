import React from 'react'
import { motion } from 'framer-motion'

import facaAnalyssis from '../assets/facaAnalyssis.png'
import touch from '../assets/touch.png'
import mealPlan from '../assets/mealPlan.jpeg'
import stress from '../assets/stress.webp'
import HealthInsights from '../components/healthStatistics'
import ImprovedRiskAnalysis from '../components/RiskAnalysis'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Solution() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="px-4 py-6 sm:px-0"
      >
        <motion.h1 variants={fadeIn} className="text-4xl text-center m-auto font-bold text-secondary mb-4">Our Innovative Solution</motion.h1>

        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-secondary">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Photoplethysmography (PPG) Technology</h2>
          <p className="text-gray-700 mb-4">
            The Solution algorithm uses photoplethysmography (PPG) signal recorded from facial skin tissue (remote PPG - rPPG). </p>
          <p className="pv-2 text-gray-700 mb-2">

            The algorithm extracts real-time face video images, produces an rPPG signal, analyzes the data, and provides the end user with vital signs measurements in real-time.
          </p>

          <div className=' flex flex-wrap gap-10'>
            <motion.img
              src={facaAnalyssis}
              alt="Process Illustration"
              className="mb-4 rounded-lg shadow-lg max-w-64"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <p className="text-gray-600">Diagram illustrating our innovative process of measuring vitals via face analysis and finger touch</p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-tertiary" whileHover={{ scale: 1.02 }}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Integrated Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Face recognition and dashboard with weekly/monthly analytics on vitals and wellness score</li>
              <li>For further assessment with doctors, fitness trainers, nutritionists, and more</li>
            </ul>
          </motion.div>

          {/* New Card: Who Can Use */}
          <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-tertiary" whileHover={{ scale: 1.02 }}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Who Can Use</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enterprises to monitor and improve wellness of the employees</li>
              <li>Gyms and personal trainers to customize workout each time before starting workout based on vitals</li>
              <li>Telemedicine companies and wellness clinics to have preview of the health vitals of patients</li>
            </ul>
          </motion.div>

          {/* New Card: Employee Wellness Programs */}
          <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-tertiary" whileHover={{ scale: 1.02 }}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Employee Wellness Programs</h2>
            <p className="text-gray-700 mb-4">
              Employee wellness programs have the power to reduce company healthcare costs by 127% while improving productivity performance and reducing absenteeism.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white p-6 my-6 bg-gray-100 rounded-lg shadow-lg border-t-4 border-tertiary" // Tailwind classes for border and padding
        initial={{ borderRadius: "0%", borderColor: "transparent" }} // Initial state: no border and no radius
        animate={{ borderRadius: "16px", borderColor: "#000000" }} // Final state: rounded border with black color
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition animation
      >
        {/* <ImprovedRiskAnalysis /> */}
        <HealthInsights />
      </motion.div>
    </div >
  )
}
