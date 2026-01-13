'use client'

import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.4,
    },
  },
}

export default function Members() {
  return (
    <section id="members" className="py-20 px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-apollo-blue rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-title text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our Team
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 transition-all duration-300 text-center group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-apollo-blue/0 to-purple-500/0 group-hover:from-apollo-blue/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-100 relative z-10"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.className = 'w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4'
                  }}
                />
              </motion.div>
              <h3 className="font-subtitle text-lg font-bold text-gray-900 mb-2 relative z-10">
                {member.name}
              </h3>
              <p className="font-caption text-sm text-gray-600 mb-3 relative z-10">
                {member.role}
              </p>
              {member.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-apollo-blue hover:text-blue-600 transition-colors text-xs font-subtitle relative z-10"
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
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
