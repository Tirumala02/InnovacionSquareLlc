'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Heart, Droplet, Brain } from 'lucide-react'

const InsightCard = ({ icon, title, value, description }) => (
  <motion.div 
    className="bg-white p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-primary mb-2">{value}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
)

const HealthTip = ({ tip }) => (
  <motion.div 
    className="bg-blue-50 p-4 rounded-lg"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="font-semibold mb-2">Health Tip</h4>
    <p className="text-sm">{tip}</p>
  </motion.div>
)

export default function HealthInsights() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <motion.h2 
        className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       Health Insights
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <InsightCard 
          icon={<Heart className="w-6 h-6 text-red-500" />}
          title="Heart Rate"
          value="72 bpm"
          description="Your heart rate is within the normal range."
        />
        <InsightCard 
          icon={<Activity className="w-6 h-6 text-green-500" />}
          title="Blood Pressure"
          value="120/80 mmHg"
          description="Your blood pressure is optimal."
        />
        <InsightCard 
          icon={<Droplet className="w-6 h-6 text-blue-500" />}
          title="Oxygen Saturation"
          value="98%"
          description="Your oxygen levels are excellent."
        />
        <InsightCard 
          icon={<Brain className="w-6 h-6 text-purple-500" />}
          title="Stress Level"
          value="Low"
          description="Your stress levels are well-managed."
        />
      </div>

      <motion.div 
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-4">Risk Analysis Summary</h3>
        <p className="mb-4">Based on your recent health data, we've identified the following insights:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Your diabetes risk is slightly elevated. Consider reducing your sugar intake.</li>
          <li>Your cholesterol levels are within the normal range. Keep up the good work!</li>
          <li>Your blood pressure is optimal, indicating good cardiovascular health.</li>
          <li>Your BMI is in the healthy range. Maintain your current diet and exercise routine.</li>
        </ul>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HealthTip tip="Try to incorporate 30 minutes of moderate exercise into your daily routine to maintain your heart health and reduce stress levels." />
        <HealthTip tip="Ensure you're staying hydrated by drinking at least 8 glasses of water per day. This can help improve your overall health and energy levels." />
      </div>
    </div>
  )
}

