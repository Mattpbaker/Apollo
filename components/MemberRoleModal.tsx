'use client'

import { useEffect } from 'react'

interface MemberRoleModalProps {
  member: {
    name: string
    roles?: Array<{
      title: string
      responsibility: string
    }>
    linkedin?: string
  }
  onClose: () => void
}

export default function MemberRoleModal({ member, onClose }: MemberRoleModalProps) {
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

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
      onClick={handleBackdropClick}
      style={{ top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto mx-auto my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10000] text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-3xl font-bold leading-none w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="mt-4">
          <div className="bg-gradient-to-br from-apollo-blue to-blue-600 rounded-xl p-6 mb-6">
            <h2 className="font-title text-3xl font-bold text-white">
              {member.name}
            </h2>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm mt-2"
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
                View LinkedIn Profile
              </a>
            )}
          </div>

          <div>
            <h3 className="font-subtitle text-2xl font-bold text-apollo-black mb-4">
              Roles & Responsibilities
            </h3>
            <div className="space-y-4">
              {member.roles && member.roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-5 border-l-4 border-apollo-blue"
                >
                  <h4 className="font-subtitle text-lg font-bold text-gray-900 mb-2">
                    {role.title}
                  </h4>
                  <p className="font-caption text-base text-gray-700 leading-relaxed">
                    {role.responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
