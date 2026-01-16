'use client'

import { useEffect } from 'react'

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
    }
  }
  onClose: () => void
}

export default function VentureModal({ venture, onClose }: VentureModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-8 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
        >
          ×
        </button>
        
        <div className="mt-4">
          <h2 className="font-title text-3xl font-bold text-apollo-black mb-2">
            {venture.name}
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <p className="font-subtitle text-lg text-gray-600">
              Founder: {venture.founder}
            </p>
            {venture.founderLinkedin && (
              <div className="flex items-center gap-1">
                {(Array.isArray(venture.founderLinkedin) ? venture.founderLinkedin : [venture.founderLinkedin]).map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-apollo-blue hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <div className="w-full h-64 bg-gray-200 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img 
              src={venture.image} 
              alt={venture.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${encodeURIComponent(venture.name)}`
              }}
            />
          </div>
          
          <p className="font-caption text-lg text-gray-700 mb-6">
            {venture.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            {venture.socialLinks.youtube && (
              <a
                href={venture.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-subtitle"
              >
                YouTube
              </a>
            )}
            {venture.socialLinks.instagram && (
              <a
                href={venture.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors font-subtitle"
              >
                Instagram
              </a>
            )}
            {venture.socialLinks.tiktok && (
              <a
                href={venture.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-subtitle"
              >
                TikTok
              </a>
            )}
            {venture.socialLinks.linktree && (
              <a
                href={venture.socialLinks.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-subtitle"
              >
                Linktree
              </a>
            )}
            {venture.socialLinks.twitter && (
              <a
                href={venture.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-apollo-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-subtitle"
              >
                Twitter
              </a>
            )}
            {venture.socialLinks.linkedin && (
              <a
                href={venture.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-apollo-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-subtitle"
              >
                LinkedIn
              </a>
            )}
            {venture.socialLinks.website && (
              <a
                href={venture.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-apollo-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-subtitle"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
