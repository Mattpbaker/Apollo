'use client'

const teamMembers = [
  { name: 'Emma Sexton', role: 'Team Coach', linkedin: 'https://www.linkedin.com/in/emma-sexton-7283226/', image: '/members/emma-sexton.jpg' },
  { name: 'Jaymie Pennie', role: 'Team Lead', linkedin: 'https://www.linkedin.com/in/jaymie-penny-686685202/', image: '/members/jaymie-pennie.jpg' },
  { name: 'James Davies', role: 'Academic Lead', linkedin: 'https://www.linkedin.com/in/james-davis-61a127333/', image: '/members/james-davies.jpg' },
  { name: 'George Lewis', role: 'Accountability Lead', linkedin: 'https://www.linkedin.com/in/george-lewis-98a2b62a5/', image: '/members/george-lewis.jpg' },
  { name: 'Matt Baker', role: 'Member', linkedin: 'https://www.linkedin.com/in/matt-baker-655a40336/', image: '/members/matt-baker.jpg' },
  { name: 'Ares Barbulescu', role: 'Member', linkedin: 'https://www.linkedin.com/in/ares-barbulescu-493879299/', image: '/members/ares-barbulescu.jpg' },
  { name: 'Charlie Hensman', role: 'Member', linkedin: 'https://www.linkedin.com/in/charlie-hensman-981852291/', image: '/members/charlie-hensman.jpg' },
  { name: 'Logan Cornock', role: 'Member', linkedin: 'https://www.linkedin.com/in/logan-cornock/', image: '/members/logan-cornock.jpg' },
  { name: 'Ben John', role: 'Member', linkedin: 'https://www.linkedin.com/in/benjamin-john-577607293/', image: '/members/ben-john.jpg' },
  { name: 'Freddie Newman', role: 'Member', linkedin: 'https://www.linkedin.com/in/frednewman/', image: '/members/freddie-newman.jpg' },
  { name: 'George Doyle', role: 'Member', linkedin: 'https://www.linkedin.com/in/george-doyle-827688346/', image: '/members/george-doyle.jpg' },
  { name: 'Sam Gerancantino', role: 'Member', linkedin: 'https://www.linkedin.com/in/sam-geracitano-05a758256/', image: '/members/sam-gerancantino.jpg' },
  { name: 'Alex Hill', role: 'Member', linkedin: 'https://www.linkedin.com/in/alexhill01/', image: '/members/alex-hill.jpg' },
  { name: 'Grace Docherty', role: 'Member', linkedin: 'https://www.linkedin.com/in/grace-docherty1000/', image: '/members/grace-docherty.jpg' },
  { name: 'Leo Han', role: 'Member', linkedin: 'https://www.linkedin.com/in/leo-han-7974b4276/', image: '/members/leo-han.jpg' },
  { name: 'SISO', role: 'Member', linkedin: 'https://www.linkedin.com/in/shaan-sisodia-a10ba0194/', image: '/members/siso.jpg' },
  { name: 'David Cruz', role: 'Member', linkedin: 'https://www.linkedin.com/in/david-cruz-186415294/', image: '/members/david-cruz.jpg' },
  { name: 'Harry Buckland', role: 'Member', linkedin: 'https://www.linkedin.com/in/harry-buckland-83a584265/', image: '/members/harry-buckland.jpg' },
  { name: 'Alex Keeler', role: 'Member', linkedin: 'https://www.linkedin.com/in/alex-keeler-872653291/', image: '/members/alex-keeler.jpg' },
]

export default function Members() {
  return (
    <section id="members" className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-title text-4xl font-bold text-center text-apollo-black mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.className = 'w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4'
                  }}
                />
              </div>
              <h3 className="font-subtitle text-lg font-bold text-apollo-black mb-2">
                {member.name}
              </h3>
              <p className="font-caption text-sm text-gray-600 mb-3">
                {member.role}
              </p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-apollo-blue hover:text-blue-600 transition-colors text-xs font-subtitle"
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
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
