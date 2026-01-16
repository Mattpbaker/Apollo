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
    image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Flipped+It',
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
    image: 'https://via.placeholder.com/300x200/FCD34D/000000?text=SISO+Agency',
    socialLinks: {
      twitter: 'https://twitter.com/sisoagency',
      linkedin: 'https://linkedin.com/company/siso-agency',
      website: 'https://sisoagency.com',
    },
  },
  {
    id: 3,
    name: 'CleaNest Cleaners',
    founder: 'Ben John',
    founderLinkedin: 'https://www.linkedin.com/in/benjamin-john-577607293/',
    description: 'Providing top-quality cleaning services with a focus on excellence and customer satisfaction.',
    image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=CleaNest+Cleaners',
    socialLinks: {
      twitter: 'https://twitter.com/cleanestcleaners',
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
    image: 'https://via.placeholder.com/300x200/A855F7/FFFFFF?text=Blufin+Media',
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
    description: 'Innovative solutions and cutting-edge technology to drive business success.',
    image: '/ventures/alexcount-x.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/channel/UCykysNbbDz8Gv2dAj_dL92g',
      linkedin: 'https://linkedin.com/company/alexcount-x',
    },
  },
  {
    id: 6,
    name: 'Journey With George',
    founder: 'George Lewis',
    founderLinkedin: 'https://www.linkedin.com/in/george-lewis-98a2b62a5/',
    description: 'Empowering journeys and experiences that create lasting impact and meaningful connections.',
    image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Journey+With+George',
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
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-title text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Apollo's Ventures + Projects
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ventures.map((venture) => (
            <motion.div
              key={venture.id}
              variants={cardVariants}
              whileHover={{ y: -15, rotateY: 5, scale: 1.02 }}
              onClick={() => handleCardClick(venture.id)}
              className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden cursor-pointer group relative"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-apollo-blue/0 to-purple-500/0 group-hover:from-apollo-blue/10 group-hover:to-purple-500/10 transition-all duration-300 z-0"></div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-full h-48 bg-gray-200 mb-4 rounded-t-xl overflow-hidden relative z-10"
              >
                <img 
                  src={venture.image} 
                  alt={venture.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/300x200/000000/FFFFFF?text=${encodeURIComponent(venture.name)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <div className="p-6 relative z-10">
                <h3 className="font-subtitle text-xl font-bold text-gray-900 mb-2">
                  {venture.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-caption text-sm text-gray-500">
                    Founder: {venture.founder}
                  </p>
                  {renderLinkedInIcons(venture.founderLinkedin)}
                </div>
                <p className="font-caption text-base text-gray-600 line-clamp-3">
                  {venture.description}
                </p>
                <motion.p
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-sm text-apollo-blue mt-4 font-semibold"
                >
                  Click to explore →
                </motion.p>
              </div>
            </motion.div>
          ))}
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
