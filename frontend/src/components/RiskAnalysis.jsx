
import React from 'react'
import { motion } from 'framer-motion'

const RiskMeter = ({ title, value, color }) => {
  const angle = (value / 100) * 180

  return (
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="relative w-52 pt-[50%]">
        <svg className="absolute inset-0 w-52 h-52" viewBox="0 0 100 50">
          {/* Background arc */}
          <path
            d="M5 50a45 45 0 0190 0"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />
          {/* Colored arc */}
          <motion.path
            d="M5 50a45 45 0 0190 0"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value / 100 }}
            transition={{ duration: 1, type: "spring" }}
          />
          {/* Needle */}
          
        </svg>
      </div>
      <div className="text-center mt-2 m-auto">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-lg font-bold">{value}%</p>
      </div>
    </div>
  )
}

const RiskTable = () => (
  <div className="w-full overflow-x-auto mt-8">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 border">Metric</th>
          <th className="px-4 py-2 border bg-green-100">Low</th>
          <th className="px-4 py-2 border bg-yellow-100">Mid</th>
          <th className="px-4 py-2 border bg-red-100">High</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border font-medium">Diabetes</td>
          <td className="px-4 py-2 border bg-green-50">Up to 5.7</td>
          <td className="px-4 py-2 border bg-yellow-50">5.8 to 6.4</td>
          <td className="px-4 py-2 border bg-red-50">6.5 and above</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border font-medium">Hypertension</td>
          <td className="px-4 py-2 border bg-green-50">Up to 129</td>
          <td className="px-4 py-2 border bg-yellow-50">130 to 139*</td>
          <td className="px-4 py-2 border bg-red-50">140 and above*</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border font-medium">Total Cholesterol</td>
          <td className="px-4 py-2 border bg-green-50">Up to 200</td>
          <td className="px-4 py-2 border bg-yellow-50">201 to 239</td>
          <td className="px-4 py-2 border bg-red-50">240 and above</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border font-medium">HDL</td>
          <td className="px-4 py-2 border bg-green-50">51 and above</td>
          <td className="px-4 py-2 border bg-yellow-50">N/A</td>
          <td className="px-4 py-2 border bg-red-50">Below 50</td>
        </tr>
      </tbody>
    </table>
  </div>
)

const WellnessScore = ({ score = 7 }) => (
  <div className="mt-8 p-4 border rounded-lg">
    <h3 className="text-lg font-semibold mb-4">Wellness Score</h3>
    <div className="relative h-8 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
      <motion.div
        className="absolute top-0 bottom-0 w-4 bg-white"
        initial={{ left: 0 }}
        animate={{ left: `calc(${(score - 1) * 10}% - 8px)` }}
        transition={{ duration: 1, type: "spring" }}
      />
    </div>
    <div className="flex justify-between mt-2 text-sm">
      <span>Low</span>
      <span>Medium</span>
      <span>High</span>
    </div>
    <div className="flex justify-between px-2 mt-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <span key={num} className="text-xs text-gray-500">{num}</span>
      ))}
    </div>
  </div>
)

export default function ImprovedRiskAnalysis() {
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <motion.h1 
        className="text-2xl sm:text-3xl font-bold text-center mb-8 text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Risk Analysis
      </motion.h1>
      <p>This app is configured to analyze your health data and provide comprehensive insights into various health risks and metrics. It uses your recent health readings to assess risks such as diabetes, cholesterol, blood pressure, and more. Based on this data, the app offers personalized health tips and recommendations to help you improve and maintain your overall well-being. Below is an example of how the app presents this information.</p>
      <p className='text-xl font-bold my-4'>Example of a Person's Health Statistics</p>
      <motion.div 
        className="flex flex-wrap justify-center -mx-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <RiskMeter title="Diabetes Risk*" value={60} color="#ef4444" />
        <RiskMeter title="Hypertension Risk*" value={40} color="#f59e0b" />
        <RiskMeter title="Total Cholesterol Risk" value={75} color="#ef4444" />
        <RiskMeter title="HDL Risk" value={30} color="#10b981" />
        <RiskMeter title="CVD Risk" value={85} color="#ef4444" />
        <RiskMeter title="Anemia Risk**" value={50} color="#f59e0b" />
        <RiskMeter title="Glucose Risk**" value={65} color="#ef4444" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <RiskTable />
        <WellnessScore />
      </motion.div>
    </div>
  )
}

