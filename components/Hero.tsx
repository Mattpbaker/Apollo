'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-apollo-blue via-blue-700 to-purple-700 px-8 pt-32 pb-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-apollo-yellow/20 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="font-subtitle text-sm md:text-base text-apollo-yellow font-semibold uppercase tracking-[0.25em]">
            Apollo · UWE Team Entrepreneurship
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-title text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          We're student entrepreneurs running real ventures.
          <br />
          <span className="text-apollo-yellow">And we'd love to help with yours.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-caption text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          A team of 19 UWE entrepreneurs running 11 live ventures. We bring that same
          hands-on experience to client projects across marketing, content, web, events, and consultancy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo('cta')}
            className="px-8 py-4 bg-apollo-yellow text-apollo-black font-subtitle font-bold text-lg rounded-full shadow-2xl hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-300"
          >
            Get in touch
          </button>
          <button
            onClick={() => handleScrollTo('ventures')}
            className="px-8 py-4 bg-transparent text-white border-2 border-white/60 font-subtitle font-bold text-lg rounded-full hover:bg-white hover:text-apollo-blue transition-all duration-300"
          >
            See our work
          </button>
        </motion.div>
      </div>
    </section>
  )
}
