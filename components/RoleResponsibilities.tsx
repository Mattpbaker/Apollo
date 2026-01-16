'use client'

import { motion } from 'framer-motion'

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function RoleResponsibilities() {
  return (
    <section id="roles" className="py-20 px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-title text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Role Responsibilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-caption text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          Understanding how Apollo operates and empowers its members
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Team Leads Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-bl-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="font-subtitle text-2xl font-bold text-gray-900 mb-4"
              >
                Team Leads
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="font-caption text-base text-gray-700 leading-relaxed mb-4"
              >
                Team leads are responsible for organizing the team's strategy and delegating tasks to working groups. They ensure alignment with Apollo's mission and vision while maintaining clear communication channels.
              </motion.p>
              <motion.ul
                variants={itemVariants}
                className="space-y-2"
              >
                <li className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"
                  ></motion.div>
                  <span className="font-caption text-sm text-gray-600">Organize team strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"
                  ></motion.div>
                  <span className="font-caption text-sm text-gray-600">Delegate tasks to working groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"
                  ></motion.div>
                  <span className="font-caption text-sm text-gray-600">Maintain strategic alignment</span>
                </li>
              </motion.ul>
            </div>
          </motion.div>

          {/* Team Members Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-bl-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="font-subtitle text-2xl font-bold text-gray-900 mb-4"
              >
                Team Members
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="font-caption text-base text-gray-700 leading-relaxed mb-4"
              >
                Team members have the freedom to choose whether they want to join working groups and pick up tasks. This empowers members to select work that aligns with their interests and helps develop their areas of expertise.
              </motion.p>
              <motion.ul
                variants={itemVariants}
                className="space-y-2"
              >
                <li className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"
                  ></motion.div>
                  <span className="font-caption text-sm text-gray-600">Choose to join working groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"
                  ></motion.div>
                  <span className="font-caption text-sm text-gray-600">Select tasks that match interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"
                  ></motion.div>
                  <span className="font-caption text-sm text-gray-600">Develop areas of expertise</span>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-subtitle text-xl font-bold text-gray-900 mb-3">
              Empowering Individual Growth
            </h3>
            <p className="font-caption text-base text-gray-700 leading-relaxed">
              This structure ensures that every member can contribute meaningfully while pursuing their own professional development. By allowing team members to choose their involvement, Apollo creates an environment where passion and expertise drive engagement, leading to better outcomes for both individuals and the team as a whole.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
