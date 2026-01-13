'use client'

import { motion } from 'framer-motion'

const values = [
  { initial: 'P', word: 'Perseverance', color: 'from-blue-500 to-blue-600' },
  { initial: 'A', word: 'Ambition', color: 'from-purple-500 to-purple-600' },
  { initial: 'I', word: 'Integrity', color: 'from-green-500 to-green-600' },
  { initial: 'R', word: 'Respect', color: 'from-yellow-500 to-yellow-600' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Values() {
  return (
    <section id="values" className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-title text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Values
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}
              >
                <span className="font-subtitle text-3xl font-bold text-white">
                  {value.initial}
                </span>
              </motion.div>
              <h3 className="font-subtitle text-xl font-bold text-gray-900 relative z-10">
                {value.word}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
