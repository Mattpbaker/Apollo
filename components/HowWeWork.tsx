'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Tell us about it',
    body: 'Share your project, budget, and timeline via the form or a quick call.',
  },
  {
    n: '02',
    title: 'We bring the right team together',
    body: 'We match members with the right skills to your brief, and come back to you with a plan and a price.',
  },
  {
    n: '03',
    title: 'Delivery',
    body: 'Clear milestones, regular updates, final handover.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-4">
            How we work with you
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            We already operate this way internally. Engaging with us as a client uses the
            same working-group structure that delivers our own ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="font-title text-5xl font-bold text-apollo-blue/20 mb-3">
                {step.n}
              </div>
              <h3 className="font-subtitle text-xl font-bold text-apollo-black mb-3">
                {step.title}
              </h3>
              <p className="font-caption text-sm text-gray-600 leading-relaxed">
                {step.body}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-apollo-blue/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
