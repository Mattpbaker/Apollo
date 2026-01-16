'use client'

import { useEffect } from 'react'

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

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-8 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className={`bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 md:p-8 relative my-8`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-3xl font-bold leading-none w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="mt-4">
          <div className={`bg-gradient-to-br ${department.color} rounded-xl p-6 mb-6 flex items-center justify-between`}>
            <h2 className="font-title text-3xl font-bold text-white">
              {department.name}
            </h2>
            {department.ragRating && (
              <span className={`px-4 py-2 rounded-full font-bold text-sm ${
                department.ragRating === 'GOLD' ? 'bg-yellow-400 text-yellow-900' :
                department.ragRating === 'RED' ? 'bg-red-400 text-red-900' :
                department.ragRating === 'AMBER' ? 'bg-amber-400 text-amber-900' :
                'bg-green-400 text-green-900'
              }`}>
                {department.ragRating} RAG
              </span>
            )}
          </div>

          {/* New Targets Section */}
          <div className="mb-6">
            <h3 className="font-subtitle text-2xl font-bold text-apollo-black mb-4">
              New Targets
            </h3>
            <div className="space-y-3">
              {department.targets.map((target, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${department.color} mt-2 flex-shrink-0`}></div>
                  <p className="font-caption text-base text-gray-700 leading-relaxed">
                    {target}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Update Section */}
          {department.update && (
            <div className="mb-6">
              <h3 className="font-subtitle text-2xl font-bold text-apollo-black mb-4">
                Update
              </h3>
              <div className="space-y-4">
                <p className="font-caption text-base text-gray-700 leading-relaxed">
                  {department.update.status}
                </p>

                {/* Key Risks */}
                {department.update.keyRisks && department.update.keyRisks.length > 0 && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h4 className="font-subtitle text-lg font-bold text-red-900 mb-2">
                      Key Risks and Improvements
                    </h4>
                    <div className="space-y-2 mb-3">
                      {department.update.keyRisks.map((risk, index) => (
                        <p key={index} className="font-caption text-sm text-red-800">
                          • {risk}
                        </p>
                      ))}
                    </div>
                    {department.update.improvements && Array.isArray(department.update.improvements) && department.update.improvements.map((improvement, index) => (
                      <p key={index} className="font-caption text-sm text-gray-700 mt-2">
                        <span className="font-semibold">To address this:</span> {improvement}
                      </p>
                    ))}
                  </div>
                )}

                {/* Issues (for Business Development) */}
                {department.update.issues && department.update.issues.length > 0 && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h4 className="font-subtitle text-lg font-bold text-red-900 mb-2">
                      Issues Identified
                    </h4>
                    <div className="space-y-2 mb-3">
                      {department.update.issues.map((issue, index) => (
                        <p key={index} className="font-caption text-sm text-red-800">
                          • {issue}
                        </p>
                      ))}
                    </div>
                    {department.update.improvements && Array.isArray(department.update.improvements) && department.update.improvements.map((improvement, index) => (
                      <p key={index} className="font-caption text-sm text-gray-700 mt-2">
                        {improvement}
                      </p>
                    ))}
                    {department.update.improvements && typeof department.update.improvements === 'string' && (
                      <p className="font-caption text-sm text-gray-700 mt-2">
                        {department.update.improvements}
                      </p>
                    )}
                  </div>
                )}

                {/* Individual Contribution (Finance) */}
                {department.update.individualContribution && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-subtitle text-lg font-bold text-blue-900 mb-2">
                      Individual Contribution and Exit Strategy Alignment
                    </h4>
                    <p className="font-caption text-sm text-gray-700 mb-2">
                      {department.update.individualContribution}
                    </p>
                    {department.update.visionAlignment && (
                      <p className="font-caption text-sm text-gray-700">
                        {department.update.visionAlignment}
                      </p>
                    )}
                  </div>
                )}

                {/* External Opportunities (Finance) */}
                {department.update.externalOpportunities && department.update.externalOpportunities.length > 0 && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-subtitle text-lg font-bold text-green-900 mb-2">
                      External Opportunities
                    </h4>
                    <div className="space-y-2">
                      {department.update.externalOpportunities.map((opportunity, index) => (
                        <p key={index} className="font-caption text-sm text-gray-700">
                          • {opportunity}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Profit Tracking (Finance) */}
                {department.update.profitTracking && (
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h4 className="font-subtitle text-lg font-bold text-purple-900 mb-2">
                      Profit Tracking Improvements
                    </h4>
                    <p className="font-caption text-sm text-gray-700">
                      {department.update.profitTracking}
                    </p>
                  </div>
                )}

                {/* Sustainability Updates */}
                {department.update.shift && (
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                    <p className="font-caption text-sm text-gray-700 mb-3">
                      <span className="font-semibold">Shift in Focus:</span> {department.update.shift}
                    </p>
                    {department.update.environmental && (
                      <div className="mb-3">
                        <h4 className="font-subtitle text-lg font-bold text-emerald-900 mb-2">
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
                      <div>
                        <h4 className="font-subtitle text-lg font-bold text-emerald-900 mb-2">
                          Team Resilience Model
                        </h4>
                        <p className="font-caption text-sm text-gray-700 mb-2">
                          {department.update.resilience}
                        </p>
                        {department.update.resilienceMeasures && (
                          <div className="space-y-1 mt-2">
                            {department.update.resilienceMeasures.map((measure, index) => (
                              <p key={index} className="font-caption text-sm text-gray-700">
                                • {measure}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Community Contribution Updates */}
                {department.update.stretch && (
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <p className="font-caption text-sm text-gray-700 mb-3">
                      {department.update.stretch}
                    </p>
                    {department.update.newTargets && (
                      <p className="font-caption text-sm text-gray-700 mb-3">
                        {department.update.newTargets}
                      </p>
                    )}
                    {department.update.measurement && (
                      <div className="mb-3">
                        <h4 className="font-subtitle text-lg font-bold text-purple-900 mb-2">
                          Measurement
                        </h4>
                        <div className="space-y-1">
                          {department.update.measurement.map((measure, index) => (
                            <p key={index} className="font-caption text-sm text-gray-700">
                              • {measure}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    {department.update.improvements && typeof department.update.improvements === 'string' && (
                      <p className="font-caption text-sm text-gray-700 mb-2">
                        {department.update.improvements}
                      </p>
                    )}
                    {department.update.alignment && (
                      <p className="font-caption text-sm text-gray-700">
                        {department.update.alignment}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

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
