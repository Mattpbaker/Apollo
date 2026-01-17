'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import MemberRoleModal from './MemberRoleModal'

interface TeamMember {
  name: string
  role: string
  roles?: Array<{
    title: string
    responsibility: string
  }>
  linkedin: string
  image: string
}

const teamMembers: TeamMember[] = [
  { name: 'Emma Sexton', role: 'Team Coach', linkedin: 'https://www.linkedin.com/in/emma-sexton-7283226/', image: '/members/emma-sexton.jpg' },
  { 
    name: 'Jaymie Pennie', 
    role: 'Team Lead', 
    roles: [
      { title: 'Strategy Lead', responsibility: 'Lead Strategy WG' }
    ],
    linkedin: 'https://www.linkedin.com/in/jaymie-penny-686685202/', 
    image: '/members/jaymie-pennie.jpg' 
  },
  { 
    name: 'James Davies', 
    role: 'Academic Lead', 
    roles: [
      { title: 'Academic Lead', responsibility: 'Lead Review WG' },
      { title: 'Tracker Manager', responsibility: 'Ensure all tracking systems are up to date for December + Make KPI Graphs' }
    ],
    linkedin: 'https://www.linkedin.com/in/james-davis-61a127333/', 
    image: '/members/james-davies.jpg' 
  },
  { name: 'George Lewis', role: 'Accountability Lead', linkedin: 'https://www.linkedin.com/in/george-lewis-98a2b62a5/', image: '/members/george-lewis.jpg' },
  { 
    name: 'Matt Baker', 
    role: 'Member', 
    roles: [
      { title: 'Website + Social Media', responsibility: 'Use ML feedback to improve marketing links + website' }
    ],
    linkedin: 'https://www.linkedin.com/in/matt-baker-655a40336/', 
    image: '/members/matt-baker.jpg' 
  },
  { 
    name: 'Ares Barbulescu', 
    role: 'Member', 
    roles: [
      { title: 'Policy + Registration Form Manager', responsibility: 'Update all policies and reg form and ensure they are signed' }
    ],
    linkedin: 'https://www.linkedin.com/in/ares-barbulescu-493879299/', 
    image: '/members/ares-barbulescu.jpg' 
  },
  { name: 'Charlie Hensman', role: 'Member', linkedin: 'https://www.linkedin.com/in/charlie-hensman-981852291/', image: '/members/charlie-hensman.jpg' },
  { 
    name: 'Logan Cornock', 
    role: 'Member', 
    roles: [
      { title: 'Report Writer', responsibility: 'Write Report + Progress Evaluation' }
    ],
    linkedin: 'https://www.linkedin.com/in/logan-cornock/', 
    image: '/members/logan-cornock.jpg' 
  },
  { 
    name: 'Ben John', 
    role: 'Member', 
    roles: [
      { title: 'Mark Variation Person', responsibility: 'Keep the whole group on accountable to deadlines - make redistribution policy based on traffic light system speak to ben' }
    ],
    linkedin: 'https://www.linkedin.com/in/benjamin-john-577607293/', 
    image: '/members/ben-john.jpg' 
  },
  { name: 'Freddie Newman', role: 'Member', linkedin: 'https://www.linkedin.com/in/frednewman/', image: '/members/freddie-newman.jpg' },
  { 
    name: 'George Doyle', 
    role: 'Member', 
    roles: [
      { title: 'TS Coordinator', responsibility: 'Ensure all notes from training sessions are on teams and accessible to ML' }
    ],
    linkedin: 'https://www.linkedin.com/in/george-doyle-827688346/', 
    image: '/members/george-doyle.jpg' 
  },
  { name: 'Sam Gerancantino', role: 'Member', linkedin: 'https://www.linkedin.com/in/sam-geracitano-05a758256/', image: '/members/sam-gerancantino.jpg' },
  { 
    name: 'Alex Hill', 
    role: 'Member', 
    roles: [
      { title: 'Videographer', responsibility: 'Capture and produce video content for Apollo' }
    ],
    linkedin: 'https://www.linkedin.com/in/alexhill01/', 
    image: '/members/alex-hill.jpg' 
  },
  { 
    name: 'Grace Docherty', 
    role: 'Member', 
    roles: [
      { title: 'Video Director', responsibility: 'Direct and oversee video production for Apollo' }
    ],
    linkedin: 'https://www.linkedin.com/in/grace-docherty1000/', 
    image: '/members/grace-docherty.jpg' 
  },
  { name: 'Leo Han', role: 'Member', linkedin: 'https://www.linkedin.com/in/leo-han-7974b4276/', image: '/members/leo-han.jpg' },
  { name: 'SISO', role: 'Member', linkedin: 'https://www.linkedin.com/in/shaan-sisodia-a10ba0194/', image: '/members/siso.jpg' },
  { name: 'David Cruz', role: 'Member', linkedin: 'https://www.linkedin.com/in/david-cruz-186415294/', image: '/members/david-cruz.jpg' },
  { name: 'Harry Buckland', role: 'Member', linkedin: 'https://www.linkedin.com/in/harry-buckland-83a584265/', image: '/members/harry-buckland.jpg' },
  { 
    name: 'Alex Keeler', 
    role: 'Member', 
    roles: [
      { title: 'Proof Reader', responsibility: 'Proof read report and Pres' }
    ],
    linkedin: 'https://www.linkedin.com/in/alex-keeler-872653291/', 
    image: '/members/alex-keeler.jpg' 
  },
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const handleCardClick = (member: TeamMember) => {
    if (member.roles && member.roles.length > 0) {
      setSelectedMember(member)
    }
  }

  const handleCloseModal = () => {
    setSelectedMember(null)
  }

  // Sort members: those with roles first, then those with only "Member" role
  const sortedMembers = [...teamMembers].sort((a, b) => {
    const aHasRoles = a.roles && a.roles.length > 0
    const bHasRoles = b.roles && b.roles.length > 0
    const aIsMemberOnly = a.role === 'Member' && !aHasRoles
    const bIsMemberOnly = b.role === 'Member' && !bHasRoles
    
    if (aHasRoles && bIsMemberOnly) return -1
    if (aIsMemberOnly && bHasRoles) return 1
    return 0
  })

  const membersWithRoles = sortedMembers.filter(m => m.roles && m.roles.length > 0).length
  const totalMembers = sortedMembers.length

  return (
    <section id="members" className="py-32 px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Enhanced floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-apollo-blue rounded-full opacity-20"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * 800],
              x: [null, Math.random() * 1200],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Geometric shapes background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-apollo-blue rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-purple-500 rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-title text-5xl md:text-6xl font-bold gradient-text mb-6"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-caption text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Meet the talented individuals driving Apollo's success
          </motion.p>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                className="text-4xl md:text-5xl font-bold text-apollo-blue mb-2"
              >
                {totalMembers}
              </motion.div>
              <p className="font-caption text-sm text-gray-600">Team Members</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="text-4xl md:text-5xl font-bold text-purple-600 mb-2"
              >
                {membersWithRoles}
              </motion.div>
              <p className="font-caption text-sm text-gray-600">Active Roles</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="text-4xl md:text-5xl font-bold text-green-600 mb-2"
              >
                {sortedMembers.filter(m => m.role === 'Team Lead' || m.role === 'Team Coach' || m.role.includes('Lead')).length}
              </motion.div>
              <p className="font-caption text-sm text-gray-600">Leaders</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {sortedMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              onClick={() => handleCardClick(member)}
              className={`bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 transition-all duration-300 text-center group relative overflow-hidden ${
                member.roles && member.roles.length > 0 ? 'cursor-pointer hover:shadow-2xl hover:border-apollo-blue' : ''
              }`}
            >
              {/* Enhanced hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-apollo-blue/0 via-purple-500/0 to-pink-500/0 group-hover:from-apollo-blue/10 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-2xl"></div>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-apollo-blue/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl"></div>
              
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-28 h-28 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-5 overflow-hidden border-4 border-white shadow-lg relative z-10 group/avatar"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement!
                    parent.className = 'w-28 h-28 bg-gradient-to-br from-apollo-blue to-purple-600 rounded-full mx-auto mb-5 flex items-center justify-center border-4 border-white shadow-lg relative z-10'
                    parent.innerHTML = `<span class="text-white font-bold text-2xl">${member.name.split(' ').map(n => n[0]).join('')}</span>`
                  }}
                />
                {/* Ring effect on hover */}
                <div className="absolute inset-0 rounded-full border-4 border-apollo-blue opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 scale-110"></div>
              </motion.div>
              <h3 className="font-subtitle text-lg font-bold text-gray-900 mb-2 relative z-10 group-hover:text-apollo-blue transition-colors">
                {member.name}
              </h3>
              <div className="relative z-10 mb-3">
                <p className="font-caption text-sm font-semibold text-gray-700 mb-1">
                  {member.roles && member.roles.length > 0 
                    ? member.roles.map(r => r.title).join(', ')
                    : member.role
                  }
                </p>
                {member.role !== 'Member' && member.role !== 'Team Coach' && member.role !== 'Team Lead' && (
                  <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {member.role}
                  </span>
                )}
              </div>
              {member.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-apollo-blue hover:text-blue-600 transition-colors text-xs font-subtitle relative z-10 mb-3"
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
              {member.roles && member.roles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="relative z-10 mt-3"
                >
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-apollo-blue">
                    <span>View Details</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedMember && (
        <MemberRoleModal
          member={selectedMember}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}
