import React from 'react'
import { motion } from 'framer-motion'

import trainClient from '../assets/train-client.jpg'
import cardio from '../assets/cardio.jpg'
import newmom from '../assets/newmom.jpg'
import athlet from '../assets/athlet.jpg'
import coach from '../assets/coach.jpg'
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

export default function Verticals() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="px-4 py-6 sm:px-0"
      >
        <motion.h1 variants={fadeIn} className="text-4xl font-bold text-primary mb-4">Our Verticals</motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-gray-700 mb-6">
          Data-driven insights for better health and wellness outcomes
        </motion.p>

        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-secondary">
            <img src={newmom} alt="New Moms" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-primary">New Moms</h2>
            <p className="text-gray-600">Personalized health and recovery plans tailored for postpartum wellness. Our technology helps new mothers track their recovery, manage stress, and optimize nutrition for themselves and their newborns.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-tertiary">
            <img src={athlet} alt="Athletes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-primary">Athletes</h2>
            <p className="text-gray-600">Optimized workout and meal plans based on real-time health data. Our solution helps athletes push their limits safely, recover effectively, and achieve peak performance through personalized insights.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-secondary">
            <img src={coach} alt="Trainers" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-primary">Trainers</h2>
            <p className="text-gray-600">Comprehensive insights for creating effective client programs. Our platform empowers trainers with data-driven tools to monitor client progress, adjust workout intensities, and provide personalized guidance.</p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Use Case Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} className="border-l-4 border-secondary pl-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">Gym Scenario</h3>
              <p className="text-gray-700 mb-4">
                "Today's cardio and strength training plan based on vitals."
              </p>
              <img src={cardio} alt="Gym Scenario" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-gray-600">
                Our technology allows trainers to create daily workout plans tailored to each client's current health status. By analyzing real-time vitals, trainers can optimize the balance between cardio and strength training, ensuring maximum effectiveness and safety.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="border-l-4 border-tertiary pl-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">Trainer and Client Interaction</h3>
              <p className="text-gray-700 mb-4">
                "Adjust workouts based on client feedback."
              </p>
              <img src={trainClient} alt="Trainer Client Interaction" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-gray-600">
                When a client reports feeling unwell or overly fatigued, our system allows trainers to instantly access the client's health data. This enables real-time workout adjustments, ensuring the client's safety while still working towards their fitness goals.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-primary">The Power of Data-Driven Insights</h2>
          <p className="text-gray-700 mb-4">
            Our innovative approach leverages cutting-edge technology to provide personalized health and wellness solutions across various verticals. By harnessing the power of real-time health data, we enable:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Tailored fitness programs that adapt to individual needs and progress</li>
            <li>Nutrition plans optimized for specific health goals and current body conditions</li>
            <li>Early detection of potential health issues through continuous monitoring</li>
            <li>Improved communication between health professionals and their clients</li>
          </ul>
          <p className="text-gray-700">
            Whether you're a new mom focusing on postpartum recovery, an athlete striving for peak performance, or a trainer looking to provide the best service to your clients, our data-driven insights pave the way for better health and wellness outcomes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

