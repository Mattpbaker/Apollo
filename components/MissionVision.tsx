'use client'

import { motion } from 'framer-motion'

const values = [
  { initial: 'P', word: 'Perseverance' },
  { initial: 'A', word: 'Ambition' },
  { initial: 'I', word: 'Integrity' },
  { initial: 'R', word: 'Respect' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
      transition: {
        duration: 0.6,
      },
  },
}

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mission
              </h2>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-white border-2 border-blue-200 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <p className="font-subtitle text-xl text-gray-800 leading-relaxed">
                  To learn and achieve goals
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Vision
              </h2>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-white border-2 border-purple-200 rounded-xl p-8 shadow-lg backdrop-blur-sm"
              >
                <p className="font-subtitle text-xl text-gray-800 leading-relaxed">
                  To be a supportive team of outstanding entrepreneurs
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - Values */}
          <motion.div variants={itemVariants}>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Values
            </h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-apollo-blue hover:shadow-lg transition-all duration-300 flex items-center gap-4 backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-apollo-blue rounded-full flex items-center justify-center shrink-0"
                  >
                    <span className="font-subtitle text-xl font-bold text-white">
                      {value.initial}
                    </span>
                  </motion.div>
                  <p className="font-subtitle text-lg text-gray-900 font-semibold">
                    {value.word}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
