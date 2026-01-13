'use client'

import { useState } from 'react'
import TargetModal from './TargetModal'

const departments = [
  {
    name: 'Finance',
    targets: [
      '£50,000 Revenue with 25% Net Profitability',
    ],
    color: 'from-green-500 to-green-600',
    rationale: [
      'Last year: £21,689.50 in revenue (Targeted £45,000)',
      'Decided from individual venture\'s projected financial performance',
      'Larger number of businesses ready to trade compared to last year.',
      'Slightly more trust within Apollo, meaning more ventures are willing to share financial data.',
    ],
    howItLinks: [
      'Help to develop Integrity and Respect.',
      'Key competency of an outstanding Entrepreneur',
      'Learn and develop through pushing ourselves to a challenging target.',
      'Encourages accountability through monthly check-ins and tracking',
      'Enhances trust and support in the team through sharing of detailed business finances',
    ],
    milestones: [
      '20k Rev by 18th December',
      '15% Net profit by 18th December',
      '25% Net Profit by 2nd April',
      '45k rev by 2nd april',
    ],
  },
  {
    name: 'Community Engagement',
    targets: [
      'Create 3 meaningful events per term for the TE Community',
    ],
    color: 'from-purple-500 to-purple-600',
    rationale: [
      'We want to be an active team within the community helping others learn and achieve their goals.',
      'Create a legacy and reputation for Apollo.',
      'last Year: 2 Events Hosted for TE Community (Not a key goal last year)',
      'Achieved Community Contribution goals last year so set ambitious target early on',
      'We wanted to ensure that everyone on the team had experience running an event as we highlighted it as a key motivator amongst the team',
      'Relates to Vision of being well-rounded entrepreneurs as we must be informed on the topics we present, whilst teaching us how to host and market events',
    ],
    howItLinks: [
      'Keeps us accountable to achieving our goals with timebound objectives',
      'Helps us to think creatively, take initiative, and embody the qualities of outstanding entrepreneurs.',
      'Perseverance in staying consistent, ambition in aiming to make an impact beyond ourselves, integrity in delivering genuine contributions, and respect in how we engage and collaborate with our community',
    ],
    milestones: [
      'Needs of TE community identified by 7th November',
      '3 events ran by 18th December',
      'Get formative feedback on events by 19th Jan',
      '6 events ran by 27th March',
    ],
  },
  {
    name: 'Business Development',
    targets: [
      'Drive measurable growth in individual ventures and increase engagement with external businesses. As a team interacting with at least 50 organisations over the course of the year.',
      'Ensure all venture/projects have data-driven marketing plans, tracking systems and space to ideate new content ideas.',
    ],
    color: 'from-apollo-blue to-blue-600',
    rationale: [
      'We wanted to ensure our business development goal is meaningful to everyone in the team with a wide range of exit strategies.',
      'We have created these targets as guidelines for any venture/project to then go away and set there own meaningful goal in relation to the KPI\'s suggested.',
      'Our marketing goal was created to encourage each business to make conscious choices and utilise social media to grow their customer base and reach',
      'We wanted to create a strong focus on B2B interactions this year as this is where the majority of the team\'s ventures operate.',
    ],
    howItLinks: [
      'By tracking performance, setting clear KPIs, and learning together, we\'ll not only meet our 2025 goals, we\'ll build a stronger, smarter Apollo.',
      'In doing so, we not only drive clearer progress and better results by the end of the year, but also to learn and achieve through shared growth, staying true to our mission.',
      'Ultimately, this supports our vision of being a supportive team of outstanding entrepreneurs.',
    ],
    milestones: [
      'All ventures presented target to team by December 18th',
      '25 pitches by February 1st 2026',
    ],
  },
  {
    name: 'Sustainability',
    targets: [
      'Improve the overall holistic wellbeing within Apollo, enhancing members\' quality of life, motivation, and long-term growth.',
      'Make Apollo a sustainability-driven team by reducing carbon emissions and adopting eco-friendly practices in all operations and events.',
    ],
    color: 'from-emerald-500 to-emerald-600',
    rationale: [
      'We chose to set these targets because last year we started to focus on carbon emissions towards the end of the year, so this year we want to build on those foundations to make a real impact.',
      'We also chose a health and wellbeing target, as mental health is a massive problem in society and we believe we are in a unique scenario that makes supporting one another extremely important and beneficial.',
      'We have implemented stretches to these targets by involving the entire TE community to help us leave a positive footprint on the course when we leave.',
    ],
    howItLinks: [
      'Setting challenging sustainability targets will help us to reach our vision whilst living our mission.',
      'Sustainability is extremely important to all businesses, and setting targets will help us build sustainable practices into our everyday routines.',
      'this target also relies on Integrity and Respect, especially when it comes to the Golden Boot competitions',
    ],
    milestones: [
      'Reduce Wellbeing score by 10% by January',
      'Reduced Carbon Emissions by 25% by January',
      'Planned TE Wellbeing event by January',
    ],
  },
]

export default function Targets() {
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setSelectedDepartment(index)
  }

  const handleCloseModal = () => {
    setSelectedDepartment(null)
  }

  return (
    <section id="targets" className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-title text-4xl font-bold text-center text-apollo-black mb-12">
          Our Targets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${dept.color} p-6`}>
                <h3 className="font-subtitle text-2xl font-bold text-white">
                  {dept.name}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {dept.targets.map((target, targetIndex) => (
                  <div
                    key={targetIndex}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${dept.color} mt-2 flex-shrink-0`}></div>
                    <p className="font-caption text-base text-gray-700 leading-relaxed">
                      {target}
                    </p>
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-4 italic">
                  Click to learn more →
                </p>
              </div>
            </div>
          ))}
        </div>
        
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
