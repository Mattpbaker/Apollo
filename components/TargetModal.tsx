'use client'

import { useEffect } from 'react'

interface TargetModalProps {
  department: {
    name: string
    rationale: string[]
    howItLinks: string[]
    milestones: string[]
    color: string
  }
  onClose: () => void
}

export default function TargetModal({ department, onClose }: TargetModalProps) {
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
      <div className={`bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 md:p-8 relative my-8`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
        >
          ×
        </button>
        
        <div className="mt-4">
          <div className={`bg-gradient-to-br ${department.color} rounded-xl p-6 mb-6`}>
            <h2 className="font-title text-3xl font-bold text-white">
              {department.name}
            </h2>
          </div>

          {/* Rationale Section */}
          <div className="mb-6">
            <h3 className="font-subtitle text-2xl font-bold text-apollo-black mb-4">
              Rationale
            </h3>
            <div className="space-y-3">
              {department.rationale.map((point, index) => (
                <p key={index} className="font-caption text-base text-gray-700 leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
          </div>

          {/* How it Links Section */}
          <div className="mb-6">
            <h3 className="font-subtitle text-2xl font-bold text-apollo-black mb-4">
              How it Links to Mission & Vision
            </h3>
            <div className="space-y-2">
              {department.howItLinks.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${department.color} mt-2 flex-shrink-0`}></div>
                  <p className="font-caption text-base text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones Section */}
          <div>
            <h3 className="font-subtitle text-2xl font-bold text-apollo-black mb-4">
              Key Milestones
            </h3>
            <div className="space-y-3">
              {department.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${department.color} bg-opacity-10 rounded-lg p-4 border-l-4`}
                  style={{ 
                    borderLeftColor: department.color.includes('green') ? '#10B981' : 
                                    department.color.includes('purple') ? '#A855F7' : 
                                    department.color.includes('blue') ? '#3B82F6' : 
                                    '#10B981' 
                  }}
                >
                  <p className="font-caption text-base text-gray-800 font-medium">
                    {milestone}
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
