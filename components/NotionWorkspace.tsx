'use client'

import { motion } from 'framer-motion'

interface NotionWorkspaceProps {
  workspaceUrl?: string
  title?: string
  description?: string
}

export default function NotionWorkspace({ 
  workspaceUrl = 'https://www.notion.so/your-workspace', 
  title = 'Team Workspace',
  description = 'Access our shared workspace, documents, and resources'
}: NotionWorkspaceProps) {
  const handleClick = () => {
    window.open(workspaceUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="workspace" className="py-20 px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-apollo-blue rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-purple-500 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-title text-4xl font-bold gradient-text mb-4">
            Team Workspace
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            Access our shared workspace, documents, and collaborative resources
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white rounded-2xl shadow-xl border-2 border-apollo-blue/20 overflow-hidden group cursor-pointer"
          onClick={handleClick}
        >
          {/* Apollo-themed header */}
          <div className="bg-gradient-to-br from-apollo-blue via-blue-600 to-purple-600 p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-apollo-yellow rounded-full blur-3xl opacity-30"></div>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              {/* Apollo workspace icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-subtitle text-2xl font-bold text-white mb-1">
                  {title}
                </h3>
                <p className="font-caption text-gray-300 text-sm">
                  {description}
                </p>
              </div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <h4 className="font-subtitle text-lg font-bold text-gray-800 mb-6 text-center">
              What's Inside
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {/* Tasks */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 border border-apollo-blue/20 hover:border-apollo-blue/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-apollo-blue to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h5 className="font-subtitle text-sm font-semibold text-gray-800 mb-1">Tasks</h5>
                <p className="font-caption text-xs text-gray-600">View & track tasks</p>
              </motion.div>

              {/* Team Updates */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h5 className="font-subtitle text-sm font-semibold text-gray-800 mb-1">Team Updates</h5>
                <p className="font-caption text-xs text-gray-600">Latest team news</p>
              </motion.div>

              {/* Calendar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 border border-green-500/20 hover:border-green-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h5 className="font-subtitle text-sm font-semibold text-gray-800 mb-1">Calendar</h5>
                <p className="font-caption text-xs text-gray-600">Events & deadlines</p>
              </motion.div>

              {/* Workshops */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-xl p-4 border border-orange-500/20 hover:border-orange-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h5 className="font-subtitle text-sm font-semibold text-gray-800 mb-1">Workshops</h5>
                <p className="font-caption text-xs text-gray-600">Learning sessions</p>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-subtitle text-sm font-semibold text-gray-800 mb-1">Timeline</h5>
                <p className="font-caption text-xs text-gray-600">Project milestones</p>
              </motion.div>

              {/* Documents */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-white rounded-xl p-4 border border-apollo-yellow/30 hover:border-apollo-yellow/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-apollo-yellow to-yellow-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h5 className="font-subtitle text-sm font-semibold text-gray-800 mb-1">Documents</h5>
                <p className="font-caption text-xs text-gray-600">Resources & files</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full bg-gradient-to-r from-apollo-blue to-purple-600 text-white font-subtitle font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Open Workspace</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Click the card above to access our Notion workspace
        </motion.p>
      </div>
    </section>
  )
}
