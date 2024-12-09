'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Heart, Gauge, TreesIcon as Lungs, Droplet, Brain, Waves, Scale, FlaskRoundIcon as Flask, HeartPulse, Thermometer, Pill, Award, Star } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
}

const MetricCard = ({ title, icon, color }) => {
  const colorClasses = {
    pink: "bg-pink-500 text-white",
    blue: "bg-blue-600 text-white",
    white: "bg-white text-gray-900 border border-gray-200"
  }

  return (
    <motion.div variants={item} className={`rounded-lg ${colorClasses[color]} p-1 flex flex-col items-center justify-center`}>
      {React.cloneElement(icon, { className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" })}
      <p className="text-xs sm:text-sm md:text-base text-center font-medium mt-0.5">{title}</p>
    </motion.div>
  )
}

const metrics = [
  { title: "Blood Pressure", icon: <Gauge />, color: "pink" },
  { title: "Heart Rate", icon: <Heart />, color: "pink" },
  { title: "Heart Rate Variability", icon: <Activity />, color: "pink" },
  { title: "Breathing Rate", icon: <Lungs />, color: "pink" },
  { title: "Oxygen Saturation", icon: <Droplet />, color: "pink" },
  { title: "Sympathetic Stress", icon: <Brain />, color: "pink" },
  { title: "Parasympathetic Activity", icon: <Waves />, color: "pink" },
  { title: "PRQ", icon: <Scale />, color: "pink" },
  { title: "Diabetes Risk*", icon: <Flask />, color: "blue" },
  { title: "Hypertension Risk*", icon: <HeartPulse />, color: "blue" },
  { title: "Hemoglobin*", icon: <Thermometer />, color: "pink" },
  { title: "Hemoglobin A1c*", icon: <Pill />, color: "pink" },
  { title: "ASCVD Risk*", icon: <Award />, color: "blue" },
  { title: "Wellness Score", icon: <Star />, color: "white" }
]

const ResponsiveHealthMetricsGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 sm:gap-2 p-2 bg-gray-100 rounded-xl h-auto min-h-[16rem] w-full max-w-6xl mx-auto"
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          icon={metric.icon}
          color={metric.color}
        />
      ))}
    </motion.div>
  )
}

export default ResponsiveHealthMetricsGrid

