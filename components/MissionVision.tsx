'use client'

const values = [
  { initial: 'P', word: 'Perseverance' },
  { initial: 'A', word: 'Ambition' },
  { initial: 'I', word: 'Integrity' },
  { initial: 'R', word: 'Respect' },
]

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 px-8 bg-gradient-to-b from-blue-400 to-blue-600 relative overflow-hidden">
      {/* Decorative icon in top right */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" />
          <circle cx="12" cy="8" r="2" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            <div>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-6">
                Mission
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <p className="font-subtitle text-xl text-blue-900 leading-relaxed">
                  To learn and achieve goals
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-6">
                Vision
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <p className="font-subtitle text-xl text-blue-900 leading-relaxed">
                  To be a supportive team of outstanding entrepreneurs
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Values */}
          <div>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-6">
              Values
            </h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-500 rounded-xl p-6 border-2 border-white shadow-lg flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-subtitle text-xl font-bold text-white">
                      {value.initial}
                    </span>
                  </div>
                  <p className="font-subtitle text-lg text-blue-900 font-semibold">
                    {value.word}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
