'use client'

const values = [
  { initial: 'P', word: 'Perseverance' },
  { initial: 'A', word: 'Ambition' },
  { initial: 'I', word: 'Integrity' },
  { initial: 'R', word: 'Respect' },
]

export default function Values() {
  return (
    <section id="values" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-title text-4xl font-bold text-center text-gray-900 mb-12">
          Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-apollo-blue hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-apollo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-subtitle text-2xl font-bold text-white">
                  {value.initial}
                </span>
              </div>
              <h3 className="font-subtitle text-xl font-bold text-gray-900">
                {value.word}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
