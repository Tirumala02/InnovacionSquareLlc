import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import gym2 from '../assets/gym-train.jpg'
import report from '../assets/report.jpg'
import PartnerLogos from '../components/Partners'
import CustomerLogos from '../components/customers'
import SmallHealthMetricsGrid from '../components/healthMetric'
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

export default function Home() {
  return (
    <div className="">

      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="px-4 py-6 sm:px-0"
      >
        <div className=' '>
          <motion.div variants={fadeIn} className="relative">
            <img src={hero} alt="Hero" className="w-full h-96 md:h-dvh object-cover rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <motion.h1
                className=" text-2xl md:text-4xl font-bold mb-4 text-center"
                variants={fadeIn}
              >
                {/* UTILIZING YOUR HEALTH VITALS DATA EFFICIENTLY */}
                Take Control of Your Health with Advanced Vitals Monitoring
              </motion.h1>
              <motion.p
                className="text-md md:text-xl mb-6 text-center"
                variants={fadeIn}
              >
                {/* A non-invasive tool for your Health vitals with Risk Analysis to Plan your Fitness goals and Meals */}
                Track your health vitals and personalize your fitness and wellness plans with real-time AI-driven insights
              </motion.p>
              <motion.div
                className="flex space-x-4"
                variants={fadeIn}
              >
                <Link to="/contact" className="bg-secondary text-sm md:text-normal text-white font-bold py-2 px-4 rounded hover:bg-tertiary transition duration-300">
                  Get Started Now
                </Link>
                <Link to="/solution" className="bg-primary text-sm md:text-normal  text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Learn More About Our Solutions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <PartnerLogos />

        <div className='max-w-7xl  mx-auto "py-6 sm:px-6 lg:px-8 ' >
          <motion.div variants={fadeIn} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Features Overview</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Contactless AI solution for measuring and recording health vitals</li>
                <li>Integrated with smartwatches and devices for personal goal planning</li>
                <li>Real-time health monitoring and instant feedback</li>
                <li>Personalized fitness and nutrition recommendations</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white p-4 rounded-lg shadow border-l-4 border-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">AI-Powered</h3>
                <p className="text-gray-600">Advanced AI analysis for accurate health insights and predictions</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow border-l-4 border-tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">Smart Integration</h3>
                <p className="text-gray-600">Seamless integration with your favorite fitness devices and apps</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow border-l-4 border-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">Personalized Plans</h3>
                <p className="text-gray-600">Tailored fitness and meal recommendations based on your unique health profile</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow border-l-4 border-tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">Real-time Monitoring</h3>
                <p className="text-gray-600">Instant health vitals tracking and analysis for immediate insights</p>
              </motion.div>
            </div>
          </motion.div>
        </div>


        <div className='bg-slate-800 my-6 p-6'>
          <div className='max-w-7xl  mx-auto "py-6 sm:px-6 lg:px-8 '>
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Adaptive Fitness Powered by AI Vitals</h2>
              <motion.img
                src={report}
                alt="Gym scenario"
                className="mb-4 rounded-lg shadow-lg max-h-72 w-full object-cover"
              />
              <p className="text-lg text-gray-300">
                <span className='font-semibold'>Imagine a scenario in a gym</span>: A trainer plans  <span className='font-semibold'>"Today's workout: 80% cardio and 20% strength training"</span>
                based on general guidelines. However, the client responds,  <span className='font-semibold'>"I don't feel so well for cardio today." </span>
                <span className='font-semibold text-amber-600 text-2xl '>This is where our solution shines</span>.
              </p>
              <p className="text-lg mt-4 text-gray-300">
                Our approach revolutionizes this interaction. Before and after each workout, our contactless AI Solution measures and records your Health Vitals. This data allows for real-time adjustments to your fitness plan, ensuring that every session is optimized for your current health status and goals.
              </p>
            </motion.div>
            <div className='text-3xl font-bold mb-4 text-gray-200 my-12 flex flex-col gap-10'>
              <h1>Health Vitals Measured by our App</h1>
              <SmallHealthMetricsGrid />
            </div>
          </div>

        </div>

        <CustomerLogos />

      </motion.div>
    </div>
  )
}

