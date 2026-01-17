'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VentureModalProps {
  venture: {
    id: number
    name: string
    founder: string
    founderLinkedin?: string | string[]
    description: string
    image: string
    socialLinks: {
      twitter?: string
      linkedin?: string
      website?: string
      youtube?: string
      instagram?: string
      tiktok?: string
      linktree?: string
      twitch?: string
      discord?: string
    }
  }
  onClose: () => void
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 50,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 25,
      stiffness: 300,
      duration: 0.5,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
    }
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
    }
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    }
  },
}

export default function VentureModal({ venture, onClose }: VentureModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const socialLinkConfig = {
    youtube: { 
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      color: 'bg-red-600 hover:bg-red-700',
    },
    instagram: { 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
    tiktok: { 
      icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z',
      color: 'bg-black hover:bg-gray-800',
    },
    linktree: { 
      icon: 'M13.091 0c-1.724 0-3.163.5-4.382 1.5L5.5 3.091c-.5.5-.5.5-1 0L3.318 1.909c-1.5-1.5-2.5-2.318-4.318-1.909C-1.5.5-1.909 2.318-.5 3.727l1.182 1.182c.5.5.5 1.5 0 2l-1.545 1.546c-1.5 1.5-1.5 3.818 0 5.318l1.182 1.182c.5.5 1.5.5 2 0l1.182-1.182c.5-.5.5-1.5 0-2l1.545-1.546c1.5-1.5 3.818-1.5 5.318 0l1.182 1.182c.5.5 1.5.5 2 0l1.182-1.182c1.5-1.5 2.5-2.318 4.318-1.909 1.5.409 1.909 2.227.5 3.636l-1.182 1.182c-.5.5-.5 1.5 0 2l1.545 1.546c1.5 1.5 1.5 3.818 0 5.318l-1.182 1.182c-.5.5-1.5.5-2 0l-1.182-1.182c-.5-.5-.5-1.5 0-2l1.545-1.546c1.5-1.5 3.818-1.5 5.318 0l1.182 1.182c.5.5 1.5.5 2 0l1.182-1.182c1.5-1.5 2.5-2.318 4.318-1.909 1.5.409 1.909 2.227.5 3.636l-1.182 1.182c-.5.5-.5 1.5 0 2l1.182 1.182c1.5 1.5 2.5 2.318 4.318 1.909 1.5-.409 1.909-2.227.5-3.636l-1.182-1.182c-.5-.5-.5-1.5 0-2l1.545-1.546c1.5-1.5 1.5-3.818 0-5.318l-1.182-1.182c-.5-.5-1.5-.5-2 0l-1.182 1.182c-.5.5-.5 1.5 0 2l-1.545 1.546c-1.5 1.5-3.818 1.5-5.318 0l-1.182-1.182c-.5-.5-1.5-.5-2 0l-1.182 1.182c-1.5 1.5-2.5 2.318-4.318 1.909-1.5-.409-1.909-2.227-.5-3.636l1.182-1.182c.5-.5.5-1.5 0-2L8.727 5.636c-1.5-1.5-1.5-3.818 0-5.318l1.182-1.182c.5-.5 1.5-.5 2 0l1.182 1.182c.5.5.5 1.5 0 2l-1.545 1.546c-1.5 1.5-3.818 1.5-5.318 0L6.5 2.727c-.5-.5-.5-1.5 0-2L7.682-.455C9.182-1.955 11.091-2.364 13.091 0z',
      color: 'bg-green-500 hover:bg-green-600',
    },
    twitter: { 
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      color: 'bg-apollo-blue hover:bg-blue-600',
    },
    linkedin: { 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      color: 'bg-apollo-blue hover:bg-blue-600',
    },
    website: { 
      icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.314 4.458c.885-.125 1.812-.188 2.782-.188 3.125 0 5.968 1.146 8.135 3.032l-2.428 2.428c-1.663-1.247-3.708-1.98-5.97-1.98-.573 0-1.134.052-1.678.144l-1.041-2.436zm9.428 2.582l2.21 2.21c.202-.607.315-1.255.315-1.93 0-2.017-.78-3.847-2.05-5.22l-2.428 2.428c.875.98 1.39 2.24 1.39 3.592 0 .675-.113 1.323-.315 1.93zm-1.93 1.93l-2.21-2.21c-.607.202-1.255.315-1.93.315-2.017 0-3.847-.78-5.22-2.05l-2.428 2.428c.98.875 2.24 1.39 3.592 1.39.675 0 1.323-.113 1.93-.315zM12 6.375c-3.125 0-5.968 1.146-8.135 3.032l2.428 2.428c1.663-1.247 3.708-1.98 5.97-1.98.573 0 1.134.052 1.678.144l1.041 2.436zm-8.114 2.582c-.202.607-.315 1.255-.315 1.93 0 2.017.78 3.847 2.05 5.22l2.428-2.428c-.875-.98-1.39-2.24-1.39-3.592 0-.675.113-1.323.315-1.93zm1.93 1.93l2.21 2.21c.607-.202 1.255-.315 1.93-.315 2.017 0 3.847.78 5.22 2.05l2.428-2.428c-.98-.875-2.24-1.39-3.592-1.39-.675 0-1.323.113-1.93.315z',
      color: 'bg-apollo-blue hover:bg-blue-600',
    },
    twitch: { 
      icon: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z',
      color: 'bg-purple-600 hover:bg-purple-700',
    },
    discord: { 
      icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
      color: 'bg-indigo-600 hover:bg-indigo-700',
    },
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 md:p-8"
        onClick={handleBackdropClick}
        style={{ top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full relative max-h-[90vh] overflow-hidden mx-auto my-auto"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-apollo-blue via-purple-500 to-pink-500"></div>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Gradient background decoration */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-apollo-blue via-purple-500 to-pink-500"></div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-apollo-blue/10 to-transparent rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-tl-full"></div>
          
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10000] text-gray-400 hover:text-gray-700 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 text-3xl font-bold leading-none w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg bg-white/90 backdrop-blur-sm border border-gray-200"
            aria-label="Close modal"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
          
          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[90vh] relative z-10">
            <div className="p-8 md:p-10">
              {/* Header Section */}
              <motion.div 
                className="mb-8 relative"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Decorative element behind title */}
                <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-apollo-blue via-purple-500 to-pink-500 rounded-full opacity-20"></div>
                
                <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mb-6 relative pl-6">
                  {venture.name}
                  {/* Underline decoration */}
                  <div className="absolute bottom-0 left-6 w-24 h-1 bg-gradient-to-r from-apollo-blue to-purple-500 rounded-full"></div>
                </h2>
                
                <div className="flex items-center gap-3 flex-wrap pl-6">
                  <motion.div 
                    className="flex items-center gap-3 bg-gradient-to-r from-apollo-blue/10 via-purple-500/10 to-pink-500/10 px-5 py-3 rounded-2xl border border-apollo-blue/20 shadow-sm backdrop-blur-sm"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.15)' }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-apollo-blue to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-caption text-xs text-gray-500 uppercase tracking-wide">Founder</p>
                      <p className="font-subtitle text-base font-bold text-gray-800">
                        {venture.founder}
                      </p>
                    </div>
                  </motion.div>
                  {venture.founderLinkedin && (
                    <div className="flex items-center gap-2">
                      {(Array.isArray(venture.founderLinkedin) ? venture.founderLinkedin : [venture.founderLinkedin]).map((link, index) => (
                        <motion.a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-11 h-11 bg-gradient-to-br from-apollo-blue to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
              
              {/* Image Section */}
              <motion.div 
                className="w-full h-72 md:h-80 bg-gradient-to-br from-apollo-blue/20 via-purple-500/20 to-pink-500/20 rounded-3xl mb-8 overflow-hidden relative shadow-2xl group"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-3xl border-4 border-white/50"></div>
                <div className="absolute inset-2 rounded-2xl border-2 border-gradient-to-r from-apollo-blue/30 via-purple-500/30 to-pink-500/30"></div>
                
                <img 
                  src={venture.image} 
                  alt={venture.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=${encodeURIComponent(venture.name)}`
                  }}
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-apollo-blue/10 via-transparent to-pink-500/10"></div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Description Section */}
              <motion.div 
                className="mb-8 relative"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 p-8 rounded-2xl border-2 border-gray-100 shadow-lg relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-apollo-blue/5 to-transparent rounded-bl-full"></div>
                  
                  {/* Quote icon decoration */}
                  <div className="absolute top-4 left-4 opacity-10">
                    <svg className="w-12 h-12 text-apollo-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <p className="font-caption text-lg text-gray-700 leading-relaxed relative z-10 pl-8">
                    {venture.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Social Links Section */}
              <motion.div 
                className="mt-8 relative"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-apollo-blue/30 to-transparent"></div>
                  <h3 className="font-subtitle text-xl font-bold text-gray-800 flex items-center gap-2 px-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-apollo-blue to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <span className="bg-gradient-to-r from-apollo-blue to-purple-600 bg-clip-text text-transparent">
                      Connect with {venture.name}
                    </span>
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-apollo-blue/30 to-transparent"></div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {Object.entries(venture.socialLinks).map(([platform, url]) => {
                    const config = socialLinkConfig[platform as keyof typeof socialLinkConfig]
                    if (!config || !url) return null
                    
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${config.color} text-white rounded-xl px-6 py-3.5 font-subtitle flex items-center gap-2.5 shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden group`}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        
                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d={config.icon} />
                        </svg>
                        <span className="capitalize font-semibold relative z-10">{platform === 'linktree' ? 'Linktree' : platform}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
