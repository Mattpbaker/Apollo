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

          {/* Content preview */}
          <div className="p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-apollo-blue mt-2 flex-shrink-0 shadow-sm"></div>
                <div className="flex-1">
                  <div className="h-4 bg-apollo-blue/10 rounded w-3/4 mb-2 border-l-2 border-apollo-blue"></div>
                  <div className="h-3 bg-apollo-blue/5 rounded w-full"></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0 shadow-sm"></div>
                <div className="flex-1">
                  <div className="h-4 bg-purple-500/10 rounded w-2/3 mb-2 border-l-2 border-purple-500"></div>
                  <div className="h-3 bg-purple-500/5 rounded w-full"></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-apollo-yellow mt-2 flex-shrink-0 shadow-sm"></div>
                <div className="flex-1">
                  <div className="h-4 bg-apollo-yellow/10 rounded w-4/5 mb-2 border-l-2 border-apollo-yellow"></div>
                  <div className="h-3 bg-apollo-yellow/5 rounded w-full"></div>
                </div>
              </div>
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
