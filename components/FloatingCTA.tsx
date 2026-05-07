'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    const el = document.getElementById('cta')
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed top-1/2 right-0 z-40 -translate-y-1/2 origin-right rotate-180 [writing-mode:vertical-rl] bg-apollo-yellow text-apollo-black font-subtitle font-bold text-sm px-3 py-6 rounded-l-xl shadow-2xl hover:bg-yellow-400 transition-colors"
          aria-label="Brief us"
        >
          Brief us →
        </motion.button>
      )}
    </AnimatePresence>
  )
}
