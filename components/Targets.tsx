'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import TargetModal from './TargetModal'

const departments = [
  {
    name: 'Finance',
    targets: [
      '£50,000 in revenue with a 25% profit margin',
      'By 30th March 2026, each member of Apollo must individually generate a minimum of £500 in revenue',
    ],
    color: 'from-green-500 to-green-600',
    ragRating: 'GOLD',
    update: {
      status: 'Apollo\'s financial performance is currently ahead of target, with revenue of £25,925 and a profit margin of 58%, driven through successful ventures.',
      keyRisks: [
        'Revenue generation has been disproportionately driven by a small number of individuals.',
        'Financial checkpoints were previously too infrequent, which risked delayed identification of performance issues.',
      ],
      improvements: [
        'Introduced monthly financial check-ins, compared to termly reviews in previous years. This ensures more consistent reporting, greater visibility of progress, and earlier intervention where targets are at risk.',
      ],
      individualContribution: 'To strengthen teamwork and accountability, a new individual contribution goal has been introduced: by 30th March 2026, each Apollo member must individually generate a minimum of £500 in revenue. Revenue generated through internships is included to remain supportive of individual exit strategies.',
      visionAlignment: 'This goal aligns directly with our Vision of being a supportive team of outstanding entrepreneurs. By setting clear financial targets for all members, we encourage individual action towards entrepreneurial growth and career readiness. Financial literacy has been identified as a key skill to support all members\' futures, whether pursuing ventures or professional careers.',
      externalOpportunities: [
        'Mentors in residence providing guidance and insight into financial and venture strategy.',
        'UWE funding secured for Logan\'s venture, INQUBE.',
        'Utilising team members\' external local networks, including contacts such as Tom Bright, to identify business opportunities and generate additional revenue.',
      ],
      profitTracking: 'Profit tracking has been strengthened with time-based cost tracking. Venture-related activities are now recorded and hypothetically costed at £12.21 per hour, aligning with the UK Living Wage. This provides a more accurate view of operating costs and profitability, ensuring financial decisions are data-driven and actionable.',
    },
    milestones: [
      'Monthly financial check-ins implemented',
      'Financial literacy workshop completed with Sebastian Crawshaw',
      'Individual £500 revenue target set for all members by 30th March 2026',
    ],
  },
  {
    name: 'Business Development',
    targets: [
      'Build each venture a tailored data driven customer acquisition framework that maximises conversion efficiency and ROI',
      'To drive measurable growth in individual ventures and increase engagement with external businesses by interacting with minimum 50 organisations by May 2026',
      'Ensure all ventures/projects have detailed marketing plans, including content ideas, tracking systems and business process frameworks',
    ],
    color: 'from-apollo-blue to-blue-600',
    ragRating: 'RED',
    update: {
      status: 'Business Development is currently rated Red on the RAG scale. While activity has taken place across ventures, progress could not be measured reliably due to unclear success metrics, inconsistent tracking, and a lack of a shared delivery strategy.',
      issues: [
        'Success measures such as "80% of target metrics" were unclear',
        'ROI was not consistently tracked',
        'The external engagement target lacked an agreed strategy',
      ],
      improvements: [
        'Each venture is now expected to build a tailored, data-driven customer acquisition framework that maximises conversion efficiency and ROI. This will be supported by group feedback and learning from workshops, particularly around AI and automation.',
        'The external engagement goal was refined to target interaction with a minimum of 50 organisations by May 2026, supported by a clear delivery strategy including networking events and shared networks (such as the NatWest Hub).',
        'All ventures are required to develop detailed marketing plans with content ideas, tracking systems, and supporting business processes.',
        'A working group has been assigned to implement minimum tracking standards, clarify ownership, and introduce regular review checkpoints to bring this department back on track.',
      ],
    },
    milestones: [
      'Working group assigned to implement tracking standards',
      'All ventures to present tailored customer acquisition frameworks',
      '50 organisations engaged by May 2026',
      'Regular review checkpoints established',
    ],
  },
  {
    name: 'Sustainability',
    targets: [
      '100% of Apollo members to complete a "Sustainability Audit" and implement at least one carbon-reduction or circular-economy practice by April 2026',
      'To transition from individual wellbeing tracking to a "Team Resilience" model, achieving a 90% accountability rate and hosting two formal workshops within sessions by April 2026',
    ],
    color: 'from-emerald-500 to-emerald-600',
    ragRating: 'AMBER',
    update: {
      status: 'Strategy review feedback and reflection sessions highlighted that, while well intentioned, these goals lacked meaning in practice and were often viewed as another checkbox exercise. Engagement was inconsistent, and sustainability was not clearly connected to how ventures operate.',
      shift: 'In response, the team agreed to change the focus of sustainability from individual behaviour to venture outputs.',
      environmental: 'The environmental sustainability goal was updated to embed environmental responsibility into the core of Apollo\'s work by requiring all members to complete a Sustainability Audit and implement at least one carbon-reduction or circular-economy practice by April 2026. This shift aligns sustainability with our vision of being outstanding entrepreneurs and recognises that even online ventures have environmental impacts through digital waste and supply chains.',
      tracking: 'Progress is tracked using a Venture Impact Tracker, where ventures assess their impact across energy use, waste, supply chain, digital footprint, and social impact, and record one clear change with progress measured as complete or incomplete.',
      resilience: 'The social sustainability goal was also revised. The original wellbeing target, which focused on individual quality of life and motivation, was not valued by the team and did not encourage honest conversations about workload or pressure. To address this, Apollo transitioned to a Team Resilience model that prioritises accountability, psychological safety, and honesty.',
      resilienceMeasures: [
        'Introduction of an Accountability Wall using Red/Amber/Green capacity check-ins',
        'Delivery of two formal trust workshops focused on honest feedback',
        'Success measured through workshop participation and a 90 percent on-time completion rate for tasks agreed within these sessions',
      ],
    },
    milestones: [
      '100% of members complete Sustainability Audit by April 2026',
      'All ventures implement at least one carbon-reduction or circular-economy practice',
      'Accountability Wall implemented with RAG capacity check-ins',
      'Two formal trust workshops delivered by April 2026',
      '90% accountability rate achieved',
    ],
  },
  {
    name: 'Community Contribution',
    targets: [
      'Organise impactful community events - create meaningful events, workshops and the Client Project for TE learning',
      '4 events per term (workshops, networking, creative conversation, mentor sessions etc.), 30+ attendees',
      'Reach 90% satisfaction and 80% applied learnings',
    ],
    color: 'from-purple-500 to-purple-600',
    ragRating: 'GOLD',
    update: {
      status: 'Community Contribution is currently rated Gold on the RAG scale. The team has consistently delivered events and activities that support learning, engagement, and external connection, with clear ownership and effective tracking in place. Attendance and feedback data show that this area is performing ahead of expectations.',
      stretch: 'Strategy review feedback highlighted that while the target was being met, it was not ambitious enough. This was reinforced by our RAG rating, which placed Community Contribution in Green and then Gold, indicating that the goal could be stretched further.',
      newTargets: 'In response, the team agreed to increase the ambition of this target rather than maintain it at a level that no longer challenged us. The revised goal is to deliver four events per term, with a minimum of 30 attendees per event, while maintaining 90 percent satisfaction and 80 percent applied learning.',
      measurement: [
        'Satisfaction is measured using a standard Apollo survey completed by all attendees',
        'Applied learning is demonstrated when individuals produce an LFO or LBD document reflecting on the event',
        'A midpoint review checkpoint will also take place once a term to assess performance and decide whether further stretching is required',
      ],
      improvements: 'To strengthen the definition of "meaningful" contribution, the team has committed to improve how we capture learnings by utilising post-event surveys, with the aim of increasing response rates and better evidencing which will have a positive impact on learning and venture development.',
      alignment: 'These changes ensure Community Contribution remains aligned with Apollo\'s mission of shared growth and continues to provide value to both the team and the wider TE community.',
    },
    milestones: [
      '4 events per term delivered',
      '30+ attendees per event',
      '90% satisfaction rate maintained',
      '80% applied learning rate achieved',
      'Midpoint review checkpoint per term',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
      transition: {
        duration: 0.5,
      },
  },
}

export default function Targets() {
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setSelectedDepartment(index)
  }

  const handleCloseModal = () => {
    setSelectedDepartment(null)
  }

  return (
    <section id="targets" className="py-20 px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated diagonal lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 20px)',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-title text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our Team Targets
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleCardClick(index)}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${dept.color} p-6 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <h3 className="font-subtitle text-2xl font-bold text-white relative z-10">
                  {dept.name}
                </h3>
              </motion.div>
              <div className="p-6 space-y-4">
                {dept.targets.map((target, targetIndex) => (
                  <motion.div
                    key={targetIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: targetIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: targetIndex * 0.3 }}
                      className={`w-2 h-2 rounded-full bg-gradient-to-br ${dept.color} mt-2 flex-shrink-0`}
                    ></motion.div>
                    <p className="font-caption text-base text-gray-700 leading-relaxed">
                      {target}
                    </p>
                  </motion.div>
                ))}
                <motion.p
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-sm text-gray-500 mt-4 italic"
                >
                  Click to learn more →
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {selectedDepartment !== null && (
          <TargetModal
            department={departments[selectedDepartment]}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  )
}
