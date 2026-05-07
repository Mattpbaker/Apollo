'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import metrics from '@/data/metrics.json'

interface CounterProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}

function Counter({ target, prefix = '', suffix = '', duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.floor(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString('en-GB')}
      {suffix}
    </span>
  )
}

const stats = [
  { label: 'Team revenue generated', target: metrics.totalRevenue, prefix: '£', suffix: '+' },
  { label: 'Live ventures + projects', target: metrics.ventures, prefix: '', suffix: '' },
  { label: 'External organisations engaged', target: metrics.externalOrgs, prefix: '', suffix: '+' },
  { label: 'Team members', target: metrics.teamMembers, prefix: '', suffix: '' },
]

export default function ProofStrip() {
  return (
    <section className="bg-apollo-black text-white py-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(252,211,77,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-title text-4xl md:text-6xl font-bold text-apollo-yellow mb-2">
                <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="font-caption text-sm md:text-base text-gray-300 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
