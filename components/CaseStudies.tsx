'use client'

import { motion } from 'framer-motion'
import caseStudies from '@/data/case-studies.json'

interface CaseStudy {
  id: string
  client: string
  type: string
  summary: string
  deliverables: string[]
  outcome: string
  members: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CaseStudies() {
  const studies = caseStudies as CaseStudy[]

  return (
    <section id="case-studies" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            Case Studies
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-4">
            Client work we've delivered
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            Some of the organisations we&apos;ve worked with.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {studies.map((s) => (
            <motion.article
              key={s.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-apollo-blue/40 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <span className="font-subtitle text-[10px] uppercase tracking-widest text-apollo-blue font-semibold mb-2">
                {s.type}
              </span>
              <h3 className="font-subtitle text-xl font-bold text-apollo-black mb-3">
                {s.client}
              </h3>
              <p className="font-caption text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                {s.summary}
              </p>

              {s.deliverables.length > 0 && (
                <div className="mb-3">
                  <p className="font-caption text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Deliverables
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-apollo-blue mt-1">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.outcome && (
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="font-caption text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Outcome
                  </p>
                  <p className="font-subtitle text-sm font-semibold text-apollo-black">
                    {s.outcome}
                  </p>
                </div>
              )}

              {s.members.length > 0 && (
                <p className="text-xs text-gray-500 mt-3">
                  Delivered by: {s.members.join(', ')}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
