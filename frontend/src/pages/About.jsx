import React from 'react'
import { motion } from 'framer-motion'

import touch from '../assets/touch.png'
import diversity from '../assets/diversity.jpg'
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

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="px-4 py-6 sm:px-0"
      >
        <motion.h1 variants={fadeIn} className="text-4xl font-bold text-primary mb-4">About Innovacion Square LLC</motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-gray-700 mb-6">
          At Innovacion Square LLC, we're pioneering the future of health monitoring. Our solution offers a non-invasive, AI-driven health monitoring tool that uses cutting-edge technologies like photoplethysmography (PPG) to provide precise, real-time health insights.
        </motion.p>

        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-tertiary mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Technological Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <motion.li variants={fadeIn}>Non-invasive measurement techniques for user comfort and convenience</motion.li>
            <motion.li variants={fadeIn}>Advanced AI analysis of over 4,000 cough data points for accurate tuberculosis risk assessment</motion.li>
            <motion.li variants={fadeIn}>Precise stress level calculation using the scientifically-backed Baevsky Stress Index</motion.li>
            <motion.li variants={fadeIn}>Inclusive technology supporting all Fitzpatrick scale skin tones, ensuring accuracy across diverse populations</motion.li>
            <motion.li variants={fadeIn}>Gender-agnostic approach for unbiased health insights</motion.li>
          </ul>
        </motion.div>

        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src={touch} alt="Technology in Action" className="rounded-lg shadow-lg mb-4" />
            <p className="text-gray-600">Our advanced device measuring vitals through a simple finger touch, demonstrating the ease and non-invasiveness of our technology.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src={diversity} alt="Diversity Representation" className="rounded-lg shadow-lg mb-4" />
            <p className="text-gray-600">Our app in use by individuals from diverse backgrounds, showcasing our commitment to inclusive health technology.</p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Use this App as</h2>
          <motion.div className="mb-4" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-primary">Gym Scenario</h3>
            <p className="text-gray-700">Imagine a trainer creating a personalized workout plan based on your real-time health data. Our technology makes this possible, allowing for "Today's cardio and strength training plan based on your current vitals." This ensures that every workout is optimized for your body's current state.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-primary">Feedback-Driven Workout Adjustments</h3>
            <p className="text-gray-700">When a client says, "I don't feel well for cardio today," our system can immediately assess their health status and suggest alternative exercises or intensities. This real-time adaptation ensures safe and effective workouts, tailored to how you're feeling each day.</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-tertiary my-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <motion.li variants={fadeIn}>
              Non-invasive health vitals measurement using photoplethysmography (PPG) for user comfort and convenience
            </motion.li>
            <motion.li variants={fadeIn}>
              Comprehensive health analysis including Heart Rate Variability for early warning signals of inflammation and diseases
            </motion.li>
            <motion.li variants={fadeIn}>
              Precise stress level calculation using the scientifically-backed Baevsky Stress Index
            </motion.li>
            <motion.li variants={fadeIn}>
              Inclusive technology supporting all Fitzpatrick scale skin tones, ensuring accuracy across diverse populations
            </motion.li>
            <motion.li variants={fadeIn}>
              Gender-agnostic approach for unbiased health insights
            </motion.li>
            <motion.li variants={fadeIn}>
              Personalized workout and meal planning based on real-time health data
            </motion.li>
            <motion.li variants={fadeIn}>
              Tailored solutions for various user groups including new moms, athletes, and trainers
            </motion.li>
            <motion.li variants={fadeIn}>
              Quick and efficient measurements delivering high-quality results in under a minute
            </motion.li>
          </ul>
        </motion.div>

      </motion.div>
    </div>
  )
}

