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
      ><div className="relative">
          <motion.div variants={fadeIn} className="relative">
            <img
              src={hero}
              alt="Hero"
              className="w-full h-96 md:h-dvh object-cover rounded-lg shadow-lg"
            />
            {/* Video Background
            <video
              src="your-video-url.mp4"
              autoPlay
              loop
              muted
              className="w-full h-96 md:h-dvh object-cover rounded-lg shadow-lg"
            /> */}


            {/* Full Height Text Section */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                variants={fadeIn}
              >
                For Enterprises & Corporates
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl font-semibold text-gray-200 mb-6"
                variants={fadeIn}
              >
                Fleet Companies, Gyms, Personal Trainers, Telemedicine, Wellness Clinics, Nutritionists
              </motion.p>
              <motion.p
                className="text-md md:text-lg italic text-gray-300 mb-6"
                variants={fadeIn}
              >
                <span className="font-bold text-secondary">Coming Soon</span> on all App Stores and Web Links
              </motion.p>
              <motion.p
                className="text-lg md:text-xl font-medium text-gray-200 mb-6"
                variants={fadeIn}
              >
                Check your Health Vitals and get your Wellness Score with a quick video selfie... Anytime, Anywhere, in a jiffy.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl font-medium text-gray-200 mb-6"
                variants={fadeIn}
              >
                Share your Score with Doctors, Nutritionists, and Fitness Trainers. Plan your Wellness Goals with real-time insights.
              </motion.p>
              <motion.p
                className="text-xl md:text-2xl font-bold text-secondary mb-6"
                variants={fadeIn}
              >
                An improved Wellness Score = Efficiency
              </motion.p>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white"
                variants={fadeIn}
              >
                Happy and Healthy Family
              </motion.h3>
            </div>
          </motion.div>
        </div>



        <PartnerLogos />
        <div className="py-12 px-16 lg:px-18 mx-auto max-w-4xl">
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center"
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">AI-Powered</h3>
              <p className="text-lg text-gray-600">
                Advanced AI analysis for accurate health insights and predictions.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Personalized Plans</h3>
              <p className="text-lg text-gray-600">
                Get access to experienced fitness trainers and nutritionists.
              </p>
            </motion.div>
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

