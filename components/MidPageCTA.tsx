'use client'

import { motion } from 'framer-motion'

export default function MidPageCTA() {
  const handleScroll = () => {
    const el = document.getElementById('cta')
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="px-8 py-16 bg-apollo-yellow relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(0,0,0,0.5) 14px, rgba(0,0,0,0.5) 15px)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        <div>
          <h2 className="font-title text-3xl md:text-4xl font-bold text-apollo-black mb-2">
            Like what you've seen?
          </h2>
          <p className="font-caption text-lg text-apollo-black/80">
            Tell us about your project. We'll respond within 48 hours.
          </p>
        </div>
        <button
          onClick={handleScroll}
          className="px-8 py-4 bg-apollo-black text-white font-subtitle font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
        >
          Get in touch →
        </button>
      </motion.div>
    </section>
  )
}
