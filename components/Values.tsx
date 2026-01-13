'use client'

const values = [
  {
    title: 'Innovation',
    description: 'We embrace new ideas and creative solutions to solve complex challenges.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of working together to achieve greater results.',
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in all our endeavors.',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical principles.',
  },
]

export default function Values() {
  return (
    <section id="values" className="py-20 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-title text-4xl font-bold text-center text-apollo-black mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-subtitle text-2xl font-bold text-apollo-blue mb-4">
                {value.title}
              </h3>
              <p className="font-caption text-lg text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
