'use client'

import { motion } from 'framer-motion'

const values = [
  { letter: 'P', word: 'Perseverance', tone: 'from-blue-500 to-blue-600' },
  { letter: 'A', word: 'Ambition', tone: 'from-purple-500 to-purple-600' },
  { letter: 'I', word: 'Integrity', tone: 'from-green-500 to-green-600' },
  { letter: 'R', word: 'Respect', tone: 'from-yellow-500 to-yellow-600' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            About Apollo
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-3">
            Who we are, in short
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          <div className="bg-white rounded-2xl p-7 shadow-md border border-blue-100">
            <span className="font-subtitle text-xs uppercase tracking-widest text-apollo-blue font-bold">
              Mission
            </span>
            <p className="font-subtitle text-lg text-gray-800 mt-2 leading-relaxed">
              To learn and achieve goals — through collaboration, real ventures, and shared
              growth.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-md border border-purple-100">
            <span className="font-subtitle text-xs uppercase tracking-widest text-purple-600 font-bold">
              Vision
            </span>
            <p className="font-subtitle text-lg text-gray-800 mt-2 leading-relaxed">
              To be a supportive team of outstanding entrepreneurs that ships meaningful work.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 mb-10"
        >
          <p className="font-subtitle text-xs uppercase tracking-widest text-gray-500 font-bold mb-4 text-center">
            Our values — P · A · I · R
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.letter} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${v.tone} text-white font-bold flex items-center justify-center shadow-sm flex-shrink-0`}
                >
                  {v.letter}
                </div>
                <span className="font-subtitle text-sm font-semibold text-gray-800">
                  {v.word}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-7 border border-blue-100"
        >
          <h3 className="font-subtitle text-lg font-bold text-apollo-black mb-2">
            How we operate
          </h3>
          <p className="font-caption text-base text-gray-700 leading-relaxed">
            Team Leads organise strategy and delegate to working groups. Members opt in to
            the working groups that match their skills and interests, picking up tasks that
            develop their expertise. The same working-group structure delivers our internal
            ventures and our client projects — when you brief us, this is the team you
            actually engage with.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
