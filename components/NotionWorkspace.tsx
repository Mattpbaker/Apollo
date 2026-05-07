'use client'

import { motion } from 'framer-motion'

interface Props {
  workspaceUrl: string
  title: string
  description: string
}

export default function NotionWorkspace({ workspaceUrl, title, description }: Props) {
  return (
    <section id="workspace" className="px-8 py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="text-center md:text-left">
          <h3 className="font-subtitle text-lg font-bold text-apollo-black">{title}</h3>
          <p className="font-caption text-sm text-gray-600">{description}</p>
        </div>
        <a
          href={workspaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-apollo-black text-white font-subtitle text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          Open workspace
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
