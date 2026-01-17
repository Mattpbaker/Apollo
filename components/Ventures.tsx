'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import VentureModal from './VentureModal'

const ventures = [
  {
    id: 1,
    name: 'Flipped It',
    founder: 'David Cruz',
    founderLinkedin: 'https://www.linkedin.com/in/david-cruz-186415294/',
    description: 'COP IT🛍️ LOVE IT💕 FLIP IT♻️ - A sustainable fashion venture focused on second-hand style.',
    image: '/ventures/flipped-it.jpg',
    socialLinks: {
      linktree: 'https://linktr.ee/flippedit',
    },
  },
  {
    id: 2,
    name: 'SISO Agency',
    founder: 'Shaan & Sam',
    founderLinkedin: ['https://www.linkedin.com/in/shaan-sisodia-a10ba0194/', 'https://www.linkedin.com/in/sam-geracitano-05a758256/'],
    description: 'Delivering exceptional results through strategic partnerships and creative solutions.',
    image: '/ventures/siso-agency.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/siso-agency',
      website: 'https://siso.agency',
    },
  },
  {
    id: 3,
    name: 'CleaNest Cleaners',
    founder: 'Ben John',
    founderLinkedin: 'https://www.linkedin.com/in/benjamin-john-577607293/',
    description: 'Providing top-quality cleaning services with a focus on excellence and customer satisfaction.',
    image: '/ventures/cleanest-cleaners.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/cleanest-cleaners',
      website: 'https://cleanestcleaners.com',
    },
  },
  {
    id: 4,
    name: 'Blufin Media',
    founder: 'Grace Docherty',
    founderLinkedin: 'https://www.linkedin.com/in/grace-docherty1000/',
    description: 'Social media management, strategy and content creation. Let\'s make an impact.',
    image: '/ventures/blufin-media.jpg',
    socialLinks: {
      website: 'https://www.blufinmedia.org/',
      instagram: 'https://www.instagram.com/blufinmedia/',
    },
  },
  {
    id: 5,
    name: 'AlexCount X',
    founder: 'Alex Keeler',
    founderLinkedin: 'https://www.linkedin.com/in/alex-keeler-872653291/',
    description: 'Gaming content creator producing entertaining streams, highlights, and community-driven content across multiple platforms. Building a passionate gaming community through engaging gameplay and interactive experiences.',
    image: '/ventures/alexcount-x.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/channel/UCykysNbbDz8Gv2dAj_dL92g',
      linkedin: 'https://linkedin.com/company/alexcount-x',
      twitch: 'https://twitch.tv/alexcountx',
      discord: 'https://discord.gg/Sc7a6ztp77',
      tiktok: 'https://tiktok.com/@alexcountx',
      twitter: 'https://twitter.com/alexcountx',
    },
  },
  {
    id: 6,
    name: 'Journey With George',
    founder: 'George Lewis',
    founderLinkedin: 'https://www.linkedin.com/in/george-lewis-98a2b62a5/',
    description: 'Empowering journeys and experiences that create lasting impact and meaningful connections.',
    image: '/ventures/journey-with-george.jpg',
    socialLinks: {
      instagram: 'https://www.instagram.com/_journeywithgeorge/',
      tiktok: 'https://www.tiktok.com/@journey_with_george',
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
      transition: {
        duration: 0.6,
      },
  },
}

export default function Ventures() {
  const [selectedVenture, setSelectedVenture] = useState<number | null>(null)

  const handleCardClick = (ventureId: number) => {
    setSelectedVenture(ventureId)
  }

  const handleCloseModal = () => {
    setSelectedVenture(null)
  }

  const renderLinkedInIcons = (founderLinkedin: string | string[] | undefined) => {
    if (!founderLinkedin) return null
    
    const links = Array.isArray(founderLinkedin) ? founderLinkedin : [founderLinkedin]
    
    return (
      <div className="flex items-center gap-1">
        {links.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-apollo-blue hover:text-blue-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        ))}
      </div>
    )
  }

  return (
    <section id="ventures" className="py-20 px-8 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
      {/* Animated wave pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#3B82F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mb-4">
            Apollo's Ventures + Projects
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the innovative ventures and projects driving Apollo's entrepreneurial spirit
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ventures.map((venture) => {
            const socialCount = Object.keys(venture.socialLinks || {}).length
            return (
              <motion.div
                key={venture.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                onClick={() => handleCardClick(venture.id)}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group relative border-2 border-gray-100 hover:border-apollo-blue/30 transition-all duration-300"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-apollo-blue/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img 
                    src={venture.image} 
                    alt={venture.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x300/6366F1/FFFFFF?text=${encodeURIComponent(venture.name)}`
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Social links badge */}
                  {socialCount > 0 && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-700">{socialCount}</span>
                    </div>
                  )}
                  
                  {/* Venture name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-subtitle text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {venture.name}
                    </h3>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 relative z-10">
                  {/* Founder info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-apollo-blue to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-caption text-xs text-gray-500">Founder</p>
                        <p className="font-subtitle text-sm font-semibold text-gray-800">
                          {venture.founder}
                        </p>
                      </div>
                    </div>
                    {renderLinkedInIcons(venture.founderLinkedin)}
                  </div>
                  
                  {/* Description */}
                  <p className="font-caption text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {venture.description}
                  </p>
                  
                  {/* CTA */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-apollo-blue font-semibold text-sm pt-4 border-t border-gray-100"
                  >
                    <span>Explore Venture</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {selectedVenture && (
          <VentureModal
            venture={ventures.find(v => v.id === selectedVenture)!}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  )
}
