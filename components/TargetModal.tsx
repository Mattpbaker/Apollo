'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface TargetModalProps {
  department: {
    name: string
    targets: string[]
    color: string
    ragRating?: string
    update?: {
      status: string
      keyRisks?: string[]
      improvements?: string[] | string
      individualContribution?: string
      visionAlignment?: string
      externalOpportunities?: string[]
      profitTracking?: string
      issues?: string[]
      shift?: string
      environmental?: string
      tracking?: string
      resilience?: string
      resilienceMeasures?: string[]
      stretch?: string
      newTargets?: string
      measurement?: string[]
      alignment?: string
    }
    milestones: string[]
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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10000] text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-3xl font-bold leading-none w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="mt-4">
          {/* Enhanced Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-br ${department.color} rounded-xl p-6 mb-8 shadow-lg relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="font-title text-3xl font-bold text-white">
                  {department.name}
                </h2>
              </div>
              {department.ragRating && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className={`px-4 py-2 rounded-full font-bold text-sm shadow-lg ${
                    department.ragRating === 'GOLD' ? 'bg-yellow-400 text-yellow-900' :
                    department.ragRating === 'RED' ? 'bg-red-400 text-red-900' :
                    department.ragRating === 'AMBER' ? 'bg-amber-400 text-amber-900' :
                    'bg-green-400 text-green-900'
                  }`}
                >
                  {department.ragRating} RAG
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* New Targets Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 bg-gradient-to-br ${department.color} rounded-lg flex items-center justify-center shadow-md`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-subtitle text-2xl font-bold text-apollo-black">
                New Targets
              </h3>
            </div>
            <div className="space-y-4">
              {department.targets.map((target, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border-l-4 shadow-sm hover:shadow-md transition-shadow"
                  style={{ 
                    borderLeftColor: department.color.includes('green') ? '#10B981' : 
                                    department.color.includes('purple') ? '#A855F7' : 
                                    department.color.includes('blue') ? '#3B82F6' : 
                                    '#10B981' 
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${department.color} mt-0.5 flex-shrink-0 flex items-center justify-center shadow-sm`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="font-caption text-base text-gray-700 leading-relaxed flex-1">
                      {target}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Update Section */}
          {department.update && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-subtitle text-2xl font-bold text-apollo-black">
                  Update
                </h3>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 shadow-sm">
                  <p className="font-caption text-base text-gray-700 leading-relaxed">
                    {department.update.status}
                  </p>
                </div>

                {/* Key Risks */}
                {department.update.keyRisks && department.update.keyRisks.length > 0 && (
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-red-900">
                        Key Risks and Improvements
                      </h4>
                    </div>
                    <div className="space-y-2 mb-4">
                      {department.update.keyRisks.map((risk, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <p className="font-caption text-sm text-red-800 flex-1">
                            {risk}
                          </p>
                        </div>
                      ))}
                    </div>
                    {department.update.improvements && Array.isArray(department.update.improvements) && department.update.improvements.map((improvement, index) => (
                      <div key={index} className="bg-white/60 rounded-lg p-3 mt-3">
                        <p className="font-caption text-sm text-gray-700">
                          <span className="font-semibold text-red-900">To address this:</span> {improvement}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Issues (for Business Development) */}
                {department.update.issues && department.update.issues.length > 0 && (
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-red-900">
                        Issues Identified
                      </h4>
                    </div>
                    <div className="space-y-2 mb-4">
                      {department.update.issues.map((issue, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <p className="font-caption text-sm text-red-800 flex-1">
                            {issue}
                          </p>
                        </div>
                      ))}
                    </div>
                    {department.update.improvements && Array.isArray(department.update.improvements) && department.update.improvements.map((improvement, index) => (
                      <div key={index} className="bg-white/60 rounded-lg p-3 mt-3">
                        <p className="font-caption text-sm text-gray-700">
                          {improvement}
                        </p>
                      </div>
                    ))}
                    {department.update.improvements && typeof department.update.improvements === 'string' && (
                      <div className="bg-white/60 rounded-lg p-3 mt-3">
                        <p className="font-caption text-sm text-gray-700">
                          {department.update.improvements}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Individual Contribution (Finance) */}
                {department.update.individualContribution && (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-blue-900">
                        Individual Contribution and Exit Strategy Alignment
                      </h4>
                    </div>
                    <p className="font-caption text-sm text-gray-700 mb-3">
                      {department.update.individualContribution}
                    </p>
                    {department.update.visionAlignment && (
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="font-caption text-sm text-gray-700">
                          {department.update.visionAlignment}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* External Opportunities (Finance) */}
                {department.update.externalOpportunities && department.update.externalOpportunities.length > 0 && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-green-900">
                        External Opportunities
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {department.update.externalOpportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <p className="font-caption text-sm text-gray-700 flex-1">
                            {opportunity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Profit Tracking (Finance) */}
                {department.update.profitTracking && (
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-purple-900">
                        Profit Tracking Improvements
                      </h4>
                    </div>
                    <p className="font-caption text-sm text-gray-700">
                      {department.update.profitTracking}
                    </p>
                  </div>
                )}

                {/* Sustainability Updates */}
                {department.update.shift && (
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-l-4 border-emerald-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-emerald-900">
                        Shift in Focus
                      </h4>
                    </div>
                    <p className="font-caption text-sm text-gray-700 mb-4">
                      {department.update.shift}
                    </p>
                    {department.update.environmental && (
                      <div className="mb-4 bg-white/60 rounded-lg p-4">
                        <h4 className="font-subtitle text-base font-bold text-emerald-900 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Environmental Sustainability
                        </h4>
                        <p className="font-caption text-sm text-gray-700 mb-2">
                          {department.update.environmental}
                        </p>
                        {department.update.tracking && (
                          <p className="font-caption text-sm text-gray-700">
                            <span className="font-semibold">Tracking:</span> {department.update.tracking}
                          </p>
                        )}
                      </div>
                    )}
                    {department.update.resilience && (
                      <div className="bg-white/60 rounded-lg p-4">
                        <h4 className="font-subtitle text-base font-bold text-emerald-900 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Team Resilience Model
                        </h4>
                        <p className="font-caption text-sm text-gray-700 mb-2">
                          {department.update.resilience}
                        </p>
                        {department.update.resilienceMeasures && (
                          <div className="space-y-1 mt-2">
                            {department.update.resilienceMeasures.map((measure, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <span className="text-emerald-600 mt-1">•</span>
                                <p className="font-caption text-sm text-gray-700 flex-1">
                                  {measure}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Community Contribution Updates */}
                {department.update.stretch && (
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-5 rounded-r-lg shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h4 className="font-subtitle text-lg font-bold text-purple-900">
                        Enhanced Targets
                      </h4>
                    </div>
                    <p className="font-caption text-sm text-gray-700 mb-4">
                      {department.update.stretch}
                    </p>
                    {department.update.newTargets && (
                      <div className="bg-white/60 rounded-lg p-3 mb-4">
                        <p className="font-caption text-sm text-gray-700">
                          {department.update.newTargets}
                        </p>
                      </div>
                    )}
                    {department.update.measurement && (
                      <div className="mb-4 bg-white/60 rounded-lg p-4">
                        <h4 className="font-subtitle text-base font-bold text-purple-900 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Measurement
                        </h4>
                        <div className="space-y-1">
                          {department.update.measurement.map((measure, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <p className="font-caption text-sm text-gray-700 flex-1">
                                {measure}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {department.update.improvements && typeof department.update.improvements === 'string' && (
                      <div className="bg-white/60 rounded-lg p-3 mb-3">
                        <p className="font-caption text-sm text-gray-700">
                          {department.update.improvements}
                        </p>
                      </div>
                    )}
                    {department.update.alignment && (
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="font-caption text-sm text-gray-700">
                          {department.update.alignment}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Milestones Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 bg-gradient-to-br ${department.color} rounded-lg flex items-center justify-center shadow-md`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-subtitle text-2xl font-bold text-apollo-black">
                Key Milestones
              </h3>
            </div>
            <div className="space-y-4">
              {department.milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`bg-gradient-to-br ${department.color} bg-opacity-10 rounded-lg p-5 border-l-4 shadow-sm hover:shadow-md transition-shadow`}
                  style={{ 
                    borderLeftColor: department.color.includes('green') ? '#10B981' : 
                                    department.color.includes('purple') ? '#A855F7' : 
                                    department.color.includes('blue') ? '#3B82F6' : 
                                    '#10B981' 
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${department.color} mt-0.5 flex-shrink-0 flex items-center justify-center shadow-sm`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-caption text-base text-gray-800 font-medium flex-1">
                      {milestone}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
