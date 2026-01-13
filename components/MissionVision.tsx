'use client'

const values = [
  { initial: 'P', word: 'Perseverance' },
  { initial: 'A', word: 'Ambition' },
  { initial: 'I', word: 'Integrity' },
  { initial: 'R', word: 'Respect' },
]

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 px-8 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            <div>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mission
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                <p className="font-subtitle text-xl text-gray-800 leading-relaxed">
                  To learn and achieve goals
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Vision
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                <p className="font-subtitle text-xl text-gray-800 leading-relaxed">
                  To be a supportive team of outstanding entrepreneurs
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Values */}
          <div>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Values
            </h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-apollo-blue hover:shadow-md transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-apollo-blue rounded-full flex items-center justify-center shrink-0">
                    <span className="font-subtitle text-xl font-bold text-white">
                      {value.initial}
                    </span>
                  </div>
                  <p className="font-subtitle text-lg text-gray-900 font-semibold">
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
