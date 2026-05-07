'use client'

import { motion } from 'framer-motion'

interface ServiceTrack {
  name: string
  outcome: string
  skillTags: string[]
  icon: JSX.Element
}

const tracks: ServiceTrack[] = [
  {
    name: 'Marketing & Content',
    outcome: 'Strategy, social media, copy, branding for businesses ready to grow.',
    skillTags: ['Marketing', 'Social Media', 'Copy', 'Branding'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    name: 'Video & Photography',
    outcome: 'Produced video, photography, creative content for social.',
    skillTags: ['Video', 'Videography', 'Video Direction', 'Photography'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Web & Digital',
    outcome: 'Landing pages, websites, lightweight apps, digital presence.',
    skillTags: ['Web', 'Digital'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: 'Events & Community',
    outcome: 'Workshop delivery, networking events, panels, attendee experience.',
    skillTags: ['Events', 'Community', 'Coaching'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Consultancy & BD',
    outcome: 'Market research, customer acquisition strategy, support for early-stage businesses.',
    skillTags: ['Consulting', 'Strategy', 'BD', 'Research'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Creative Campaigns',
    outcome: 'Full briefs combining several tracks into a single campaign.',
    skillTags: ['Campaigns', 'Creative'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const handleScrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-4">
            Services we can deliver
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            Six areas where the team has skills. Most projects combine more than one.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tracks.map((track) => (
            <motion.div
              key={track.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border-2 border-gray-100 hover:border-apollo-blue/40 rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-apollo-blue to-purple-600 flex items-center justify-center text-white mb-5 shadow-lg">
                {track.icon}
              </div>
              <h3 className="font-subtitle text-xl font-bold text-apollo-black mb-3">
                {track.name}
              </h3>
              <p className="font-caption text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
                {track.outcome}
              </p>
              <button
                onClick={() => handleScrollTo('cta')}
                className="inline-flex items-center gap-2 text-apollo-blue font-subtitle font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
