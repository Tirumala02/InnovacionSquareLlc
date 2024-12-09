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
            Our cutting-edge solution utilizes photoplethysmography (PPG) technology to measure your health vitals accurately and non-invasively. You have two convenient options for measurement:
          </p>
          <motion.ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <motion.li variants={fadeIn}>Face Analysis: Our AI-powered system can analyze your facial features to derive vital health data.</motion.li>
            <motion.li variants={fadeIn}>Finger Touch: Simply place your finger on the sensor for a quick and easy health check.</motion.li>
          </motion.ol>
          <div className=' flex flex-wrap gap-10'>
            <motion.img
              src={facaAnalyssis}
              alt="Process Illustration"
              className="mb-4 rounded-lg shadow-lg max-w-64"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={touch}
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
              <li>Advanced AI analysis for comprehensive health data interpretation</li>
              <li>Seamless integration with popular meal planning apps for personalized nutrition advice</li>
              <li>Real-time health monitoring for immediate insights</li>
              <li>Customizable alerts and notifications for health status changes</li>
            </ul>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-secondary" whileHover={{ scale: 1.02 }}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Key Use Cases</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Stress management through continuous monitoring and personalized recommendations</li>
              <li>Early inflammation detection via advanced Heart Rate Variability Analysis</li>
              <li>Comprehensive health risk monitoring, including CRP levels and tuberculosis risk assessment</li>
              <li>Fitness optimization based on real-time health data</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-tertiary">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Real-World Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-primary mb-2">Personalized Meal Planning</h3>
              <p className="text-gray-700">Our system analyzes your health data to provide tailored meal suggestions. For instance, if your vitals indicate high stress levels, we might recommend foods rich in vitamin C and omega-3 fatty acids to support your body's stress response.</p>
              <motion.img
                src={mealPlan}
                alt="Process Illustration"
                className="mb-4 rounded-lg shadow-lg max-w-64"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-primary mb-2">Proactive Stress Management</h3>
              <p className="text-gray-700">By monitoring your stress levels in real-time, our solution can alert you when your stress is elevating and suggest immediate relaxation techniques or schedule adjustments to maintain optimal health.</p>
              <motion.img
                src={stress}
                alt="Process Illustration"
                className="mb-4 rounded-lg shadow-lg max-w-64"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 my-6 bg-gray-100 rounded-lg shadow-lg border-t-4 border-tertiary" // Tailwind classes for border and padding
          initial={{ borderRadius: "0%", borderColor: "transparent" }} // Initial state: no border and no radius
          animate={{ borderRadius: "16px", borderColor: "#000000" }} // Final state: rounded border with black color
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition animation
        >
          <ImprovedRiskAnalysis />
          <HealthInsights />
        </motion.div>

      </motion.div>
    </div>
  )
}

