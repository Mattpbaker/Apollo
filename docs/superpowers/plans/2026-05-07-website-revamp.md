# Apollo Website Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the Apollo single-page site from "internal team description" to "client-converting agency-style site" while preserving all existing content, addressing course feedback that the site doesn't sell the team and that the CTA is hidden.

**Architecture:** Next.js 14 single-page site with `output: 'export'` static export. Approach: keep the existing single-page composition pattern but reorder sections, add 7 new components for the missing "sell" pieces (Hero, ProofStrip, Services, HowWeWork, CaseStudies, MidPageCTA, About), consolidate two existing components (MissionVision + RoleResponsibilities → About), reframe the rest, and move internal RAG/Targets content to a new `/assessors` route. No new dependencies. Existing palette (apollo-blue, apollo-yellow, apollo-black) and Montserrat font preserved throughout. Real metrics sourced from a new `data/metrics.json`.

**Tech Stack:** Next.js 14 (App Router, static export), TypeScript, React 18, Tailwind CSS, Framer Motion, Resend (existing contact form integration).

**Verification model:** No test framework. Each task ends with visual verification in `npm run dev` at http://localhost:3000, plus `npm run lint` and `npm run build` (the build step also catches type errors and broken static export).

---

## File Structure

**New files:**
- `data/metrics.json` — aggregated team metrics for ProofStrip
- `data/case-studies.json` — initial case study seed data
- `components/Hero.tsx` — landing hero with dual CTAs
- `components/ProofStrip.tsx` — animated counter band
- `components/Services.tsx` — 6 service track cards
- `components/HowWeWork.tsx` — 3-step process strip
- `components/CaseStudies.tsx` — named client project cards
- `components/MidPageCTA.tsx` — yellow banner CTA
- `components/About.tsx` — consolidated Mission/Vision/Values/Roles
- `app/assessors/page.tsx` — internal report page (housing the existing Targets section)

**Modified files:**
- `components/Header.tsx` — rewrite nav items
- `components/Members.tsx` — skill chips, relabelled stats, heading
- `components/Ventures.tsx` — heading, outcome lines, 5 additional venture entries, bridge sentence
- `components/Footer.tsx` — add `/assessors` link
- `components/FloatingCTA.tsx` — size up to a sticky right-edge bar
- `components/CTA.tsx` — add project type / budget / timeline fields, two-column layout
- `components/NotionWorkspace.tsx` — condensed banner layout
- `app/page.tsx` — new section order
- `app/api/contact/route.ts` — accept new optional form fields

**Deleted files:**
- `components/MissionVision.tsx` — content folded into About
- `components/RoleResponsibilities.tsx` — content folded into About
- `components/Targets.tsx` — moved to `/assessors`
- `components/TargetModal.tsx` — moved to `/assessors`

---

## Task 1: Add `data/metrics.json`

**Files:**
- Create: `data/metrics.json`

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p data
```

Create `data/metrics.json`:

```json
{
  "totalRevenue": 77757,
  "totalRevenueLabel": "£77,757+",
  "ventures": 11,
  "externalOrgs": 40,
  "teamMembers": 19,
  "grossMargin": 0.7578,
  "netMargin": 0.3493,
  "originalTarget": 50000,
  "targetAchievementPercent": 155
}
```

- [ ] **Step 2: Commit**

```bash
git add data/metrics.json
git commit -m "feat(data): add team metrics for proof strip"
```

---

## Task 2: Add `data/case-studies.json`

**Files:**
- Create: `data/case-studies.json`

- [ ] **Step 1: Write the seed data**

Create `data/case-studies.json`:

```json
[
  {
    "id": "ourtor",
    "client": "OurTor",
    "type": "Client Project",
    "summary": "Strategic project delivered as part of Apollo's Team Entrepreneurship engagement.",
    "deliverables": [],
    "outcome": "",
    "members": []
  },
  {
    "id": "kasa-tech",
    "client": "KASA Tech",
    "type": "Client Project",
    "summary": "Strategic project delivered as part of Apollo's Team Entrepreneurship engagement.",
    "deliverables": [],
    "outcome": "",
    "members": []
  },
  {
    "id": "foundercrushai",
    "client": "FounderCrushAI",
    "type": "Client Project",
    "summary": "Strategic project delivered as part of Apollo's Team Entrepreneurship engagement.",
    "deliverables": [],
    "outcome": "",
    "members": []
  },
  {
    "id": "solutions-for-the-planet",
    "client": "Solutions for the Planet",
    "type": "Client Project",
    "summary": "Strategic project delivered as part of Apollo's Team Entrepreneurship engagement.",
    "deliverables": [],
    "outcome": "",
    "members": []
  }
]
```

`deliverables`, `outcome`, and `members` are intentionally empty — the user fills these in before launch. The CaseStudies component handles empty arrays gracefully (renders without the empty bullet/section).

- [ ] **Step 2: Commit**

```bash
git add data/case-studies.json
git commit -m "feat(data): seed initial case studies from external interaction tracker"
```

---

## Task 3: Create `components/Hero.tsx`

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Write the component**

Create `components/Hero.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-apollo-blue via-blue-700 to-purple-700 px-8 pt-32 pb-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-apollo-yellow/20 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="font-subtitle text-sm md:text-base text-apollo-yellow font-semibold uppercase tracking-[0.25em]">
            Apollo · UWE Team Entrepreneurship
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-title text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          We're student entrepreneurs running real ventures.
          <br />
          <span className="text-apollo-yellow">Now we're taking on yours.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-caption text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          A team of 19 UWE entrepreneurs running 11 live ventures. We bring that operator
          mindset to client projects across marketing, content, web, events, and consultancy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo('cta')}
            className="px-8 py-4 bg-apollo-yellow text-apollo-black font-subtitle font-bold text-lg rounded-full shadow-2xl hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-300"
          >
            Brief us on a project
          </button>
          <button
            onClick={() => handleScrollTo('ventures')}
            className="px-8 py-4 bg-transparent text-white border-2 border-white/60 font-subtitle font-bold text-lg rounded-full hover:bg-white hover:text-apollo-blue transition-all duration-300"
          >
            See our ventures
          </button>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in dev server**

Run `npm run dev`. Open http://localhost:3000.

Note: the page won't render the new hero yet because `app/page.tsx` hasn't been updated. To preview Hero in isolation, temporarily edit `app/page.tsx` to add `<Hero />` at the top, view it, then revert before committing. Skip if confident in the code.

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat(hero): add landing hero with dual CTAs"
```

---

## Task 4: Create `components/ProofStrip.tsx`

**Files:**
- Create: `components/ProofStrip.tsx`

- [ ] **Step 1: Write the component**

Create `components/ProofStrip.tsx`:

```tsx
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
```

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

Expected: both succeed. Build catches the JSON import path.

- [ ] **Step 3: Commit**

```bash
git add components/ProofStrip.tsx
git commit -m "feat(proof-strip): add animated counter band fed by metrics.json"
```

---

## Task 5: Create `components/Services.tsx`

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: Write the component**

Create `components/Services.tsx`:

```tsx
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
    outcome: 'Strategy, social media, copy, branding for businesses that need attention.',
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
    outcome: 'Produced video, photography, social-first creative.',
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
    outcome: 'Market research, customer acquisition strategy, go-to-market support.',
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
            Six tracks. Multidisciplinary by default — most briefs combine more than one.
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
                Brief us on this
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
```

Note on the "members on this track" count from the spec: this requires the new `skills` field on each member, which is added in Task 11. To keep tasks independent, this card does NOT show the count yet — it shows the service name + outcome + CTA. Adding the count is a small follow-up that can be done when skills are populated; deferred to Task 11's notes.

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/Services.tsx
git commit -m "feat(services): add 6 service track cards with inline CTAs"
```

---

## Task 6: Create `components/HowWeWork.tsx`

**Files:**
- Create: `components/HowWeWork.tsx`

- [ ] **Step 1: Write the component**

Create `components/HowWeWork.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Brief us',
    body: 'Share your project, budget, and timeline via the form or a quick call.',
  },
  {
    n: '02',
    title: 'Working group assigned',
    body: 'We match members with the right skills to your brief, and send back a scope and quote.',
  },
  {
    n: '03',
    title: 'Delivery',
    body: 'Clear milestones, regular updates, final handover.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-4">
            Three steps from brief to delivery
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            We already operate this way internally. Engaging with us as a client uses the
            same working-group structure that delivers our own ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="font-title text-5xl font-bold text-apollo-blue/20 mb-3">
                {step.n}
              </div>
              <h3 className="font-subtitle text-xl font-bold text-apollo-black mb-3">
                {step.title}
              </h3>
              <p className="font-caption text-sm text-gray-600 leading-relaxed">
                {step.body}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-apollo-blue/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/HowWeWork.tsx
git commit -m "feat(how-we-work): add 3-step engagement process"
```

---

## Task 7: Create `components/CaseStudies.tsx`

**Files:**
- Create: `components/CaseStudies.tsx`

- [ ] **Step 1: Write the component**

Create `components/CaseStudies.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import caseStudies from '@/data/case-studies.json'

interface CaseStudy {
  id: string
  client: string
  type: string
  summary: string
  deliverables: string[]
  outcome: string
  members: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CaseStudies() {
  const studies = caseStudies as CaseStudy[]

  return (
    <section id="case-studies" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            Case Studies
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-4">
            Client work we've delivered
          </h2>
          <p className="font-caption text-lg text-gray-600 max-w-2xl mx-auto">
            Real organisations that have engaged Apollo for project delivery.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {studies.map((s) => (
            <motion.article
              key={s.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-apollo-blue/40 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <span className="font-subtitle text-[10px] uppercase tracking-widest text-apollo-blue font-semibold mb-2">
                {s.type}
              </span>
              <h3 className="font-subtitle text-xl font-bold text-apollo-black mb-3">
                {s.client}
              </h3>
              <p className="font-caption text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                {s.summary}
              </p>

              {s.deliverables.length > 0 && (
                <div className="mb-3">
                  <p className="font-caption text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Deliverables
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-apollo-blue mt-1">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.outcome && (
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="font-caption text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Outcome
                  </p>
                  <p className="font-subtitle text-sm font-semibold text-apollo-black">
                    {s.outcome}
                  </p>
                </div>
              )}

              {s.members.length > 0 && (
                <p className="text-xs text-gray-500 mt-3">
                  Delivered by: {s.members.join(', ')}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/CaseStudies.tsx
git commit -m "feat(case-studies): add named client project cards"
```

---

## Task 8: Create `components/MidPageCTA.tsx`

**Files:**
- Create: `components/MidPageCTA.tsx`

- [ ] **Step 1: Write the component**

Create `components/MidPageCTA.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

export default function MidPageCTA() {
  const handleScroll = () => {
    const el = document.getElementById('cta')
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="px-8 py-16 bg-apollo-yellow relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(0,0,0,0.5) 14px, rgba(0,0,0,0.5) 15px)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        <div>
          <h2 className="font-title text-3xl md:text-4xl font-bold text-apollo-black mb-2">
            Like what you've seen?
          </h2>
          <p className="font-caption text-lg text-apollo-black/80">
            Tell us about your project. We'll respond within 48 hours.
          </p>
        </div>
        <button
          onClick={handleScroll}
          className="px-8 py-4 bg-apollo-black text-white font-subtitle font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
        >
          Brief us →
        </button>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/MidPageCTA.tsx
git commit -m "feat(mid-page-cta): add yellow banner CTA"
```

---

## Task 9: Create `components/About.tsx` (consolidated)

**Files:**
- Create: `components/About.tsx`

This component replaces both `MissionVision.tsx` and `RoleResponsibilities.tsx`. It is intentionally about half the size of the originals combined.

- [ ] **Step 1: Write the component**

Create `components/About.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

const values = [
  { letter: 'P', word: 'Perseverance', tone: 'from-blue-500 to-blue-600' },
  { letter: 'A', word: 'Ambition', tone: 'from-purple-500 to-purple-600' },
  { letter: 'I', word: 'Integrity', tone: 'from-green-500 to-green-600' },
  { letter: 'R', word: 'Respect', tone: 'from-yellow-500 to-yellow-600' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-subtitle text-sm text-apollo-blue font-semibold uppercase tracking-widest">
            About Apollo
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold gradient-text mt-3 mb-3">
            Who we are, in short
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          <div className="bg-white rounded-2xl p-7 shadow-md border border-blue-100">
            <span className="font-subtitle text-xs uppercase tracking-widest text-apollo-blue font-bold">
              Mission
            </span>
            <p className="font-subtitle text-lg text-gray-800 mt-2 leading-relaxed">
              To learn and achieve goals — through collaboration, real ventures, and shared
              growth.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-md border border-purple-100">
            <span className="font-subtitle text-xs uppercase tracking-widest text-purple-600 font-bold">
              Vision
            </span>
            <p className="font-subtitle text-lg text-gray-800 mt-2 leading-relaxed">
              To be a supportive team of outstanding entrepreneurs that ships meaningful work.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 mb-10"
        >
          <p className="font-subtitle text-xs uppercase tracking-widest text-gray-500 font-bold mb-4 text-center">
            Our values — P · A · I · R
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.letter} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${v.tone} text-white font-bold flex items-center justify-center shadow-sm flex-shrink-0`}
                >
                  {v.letter}
                </div>
                <span className="font-subtitle text-sm font-semibold text-gray-800">
                  {v.word}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-7 border border-blue-100"
        >
          <h3 className="font-subtitle text-lg font-bold text-apollo-black mb-2">
            How we operate
          </h3>
          <p className="font-caption text-base text-gray-700 leading-relaxed">
            Team Leads organise strategy and delegate to working groups. Members opt in to
            the working groups that match their skills and interests, picking up tasks that
            develop their expertise. The same working-group structure delivers our internal
            ventures and our client projects — when you brief us, this is the team you
            actually engage with.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "feat(about): consolidate mission, vision, values, and roles into one section"
```

---

## Task 10: Update `components/Header.tsx` nav

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Replace nav items**

In `components/Header.tsx`, replace the `navItems` array (top of file) with:

```ts
const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'how-we-work', label: 'How We Work' },
  { id: 'team', label: 'Team' },
  { id: 'cta', label: 'Contact' },
]
```

Also change the default `activeSection` initial state from `'mission'` to `'services'`:

```ts
const [activeSection, setActiveSection] = useState('services')
```

And the logo click handler — change `handleNavClick('mission')` to `handleNavClick('services')`:

```tsx
onClick={() => handleNavClick('services')}
```

- [ ] **Step 2: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat(header): rewrite nav for new section structure"
```

---

## Task 11: Update `components/Members.tsx`

**Files:**
- Modify: `components/Members.tsx`

This task does three things: extends the data model with a `skills` field, swaps the heading, and relabels the stats strip. Skills initially default to empty arrays for members who don't have them populated; chips render only when present.

- [ ] **Step 1: Extend the `TeamMember` interface**

In `components/Members.tsx`, find the `TeamMember` interface and add an optional `skills` field:

```ts
interface TeamMember {
  name: string
  role: string
  roles?: Array<{
    title: string
    responsibility: string
  }>
  skills?: string[]
  linkedin: string
  image: string
}
```

- [ ] **Step 2: Add starter `skills` to selected members**

Add `skills` to a few members based on the spec. Edit existing entries — leave others untouched (their cards just won't show skill chips).

```ts
{ name: 'Matt Baker', role: 'Member',
  roles: [{ title: 'Website + Social Media', responsibility: 'Use ML feedback to improve marketing links + website' }],
  skills: ['Web', 'Social Media'],
  linkedin: '...', image: '...' },

{ name: 'Grace Docherty', role: 'Member',
  roles: [{ title: 'Video Director', responsibility: 'Direct and oversee video production for Apollo' }],
  skills: ['Video Direction', 'Marketing'],
  linkedin: '...', image: '...' },

{ name: 'Alex Hill', role: 'Member',
  roles: [{ title: 'Videographer', responsibility: 'Capture and produce video content for Apollo' }],
  skills: ['Videography', 'Consulting'],
  linkedin: '...', image: '...' },

{ name: 'George Lewis', role: 'Accountability Lead',
  skills: ['Coaching', 'Accountability'],
  linkedin: '...', image: '...' },
```

(Don't replace the linkedin/image strings — keep the existing values; just add the `skills` line.)

- [ ] **Step 3: Add skill chips to the card render**

Find the section in the card JSX that renders member name and role, just below the LinkedIn link block. Add this immediately after the closing `</div>` of the LinkedIn link block:

```tsx
{member.skills && member.skills.length > 0 && (
  <div className="flex flex-wrap justify-center gap-1.5 mb-3 relative z-10">
    {member.skills.map((skill) => (
      <span
        key={skill}
        className="text-[10px] font-subtitle font-semibold uppercase tracking-wide bg-blue-50 text-apollo-blue px-2 py-1 rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>
)}
```

- [ ] **Step 4: Update heading and subheading**

Change the `<motion.h2>` "Our Team" content to "Who you'd work with". Change the `<motion.p>` subhead "Meet the talented individuals driving Apollo's success" to "Meet the team behind every brief — a multidisciplinary mix of operators, creators, and strategists.":

```tsx
<motion.h2 ...>Who you'd work with</motion.h2>
...
<motion.p ...>
  Meet the team behind every brief — a multidisciplinary mix of operators, creators, and strategists.
</motion.p>
```

- [ ] **Step 5: Relabel stats strip**

The current stats strip shows: Team Members / Active Roles / Leaders. Replace with: Members / Live Ventures / Skills covered.

Compute these on render (just below the existing computed `totalMembers`, `membersWithRoles`):

```ts
const liveVentures = 11
const skillsCovered = new Set(
  sortedMembers.flatMap((m) => m.skills ?? [])
).size
```

Then in the JSX of the stats strip (3 stat blocks), replace:

- Block 1 number stays `{totalMembers}`, label stays "Team Members" but rename to "Members"
- Block 2 number changes from `{membersWithRoles}` to `{liveVentures}`, label "Active Roles" → "Live Ventures"
- Block 3 number changes from the `Lead`-counting expression to `{skillsCovered}`, label "Leaders" → "Skills covered"

For example, the second stat block becomes:

```tsx
<div className="text-center">
  <motion.div ... className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
    {liveVentures}
  </motion.div>
  <p className="font-caption text-sm text-gray-600">Live Ventures</p>
</div>
```

- [ ] **Step 6: Update section ID**

Change `<section id="members"` to `<section id="team"`.

- [ ] **Step 7: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 8: Commit**

```bash
git add components/Members.tsx
git commit -m "feat(members): add skill chips, relabel stats, reframe as 'who you'd work with'"
```

---

## Task 12: Update `components/Ventures.tsx`

**Files:**
- Modify: `components/Ventures.tsx`

This task adds 4 new ventures (per spec — Apollo Workshops stays internal, so 4 not 5), changes heading and subheading, adds an `outcome` line to each card, and adds a bridge sentence below the grid.

- [ ] **Step 1: Add `outcome` field to the venture data type and existing entries**

For each existing venture in the `ventures` array, add an `outcome` string. Insert after the `description` field:

```ts
{
  id: 1,
  name: 'Flipped It',
  founder: 'David Cruz',
  founderLinkedin: 'https://www.linkedin.com/in/david-cruz-186415294/',
  description: "COP IT🛍️ LOVE IT💕 FLIP IT♻️ - A sustainable fashion venture focused on second-hand style.",
  outcome: 'Sustainable fashion, six months active trading',
  image: '/ventures/flipped-it.jpg',
  socialLinks: { linktree: 'https://linktr.ee/flippedit' },
},
```

Suggested outcomes for the existing 6:

- Flipped It — `Sustainable fashion, six months active trading`
- SISO Agency — `Two-founder creative agency`
- CleanNest Cleaners — `Live customer base in Bristol`
- Blufin Media — `Managing 18+ named client accounts`
- AlexCount X — `Multi-platform gaming creator`
- Journey With George — `Coaching practice with named external clients`

- [ ] **Step 2: Add 4 new ventures**

Append these four entries to the `ventures` array:

```ts
{
  id: 7,
  name: 'INQUBE',
  founder: 'Logan Cornock',
  founderLinkedin: 'https://www.linkedin.com/in/logan-cornock/',
  description: 'Building a venture with UWE-backed funding behind it.',
  outcome: 'UWE funding secured',
  image: '/ventures/inqube.jpg',
  socialLinks: {},
},
{
  id: 8,
  name: 'Alex Hill Consulting',
  founder: 'Alex Hill',
  founderLinkedin: 'https://www.linkedin.com/in/alexhill01/',
  description: 'Independent consulting practice serving SMB clients.',
  outcome: 'Active client engagements through 2025/26',
  image: '/ventures/alex-hill-consulting.jpg',
  socialLinks: {},
},
{
  id: 9,
  name: 'Gridiron Kings',
  founder: 'Harry Buckland',
  founderLinkedin: 'https://www.linkedin.com/in/harry-buckland-83a584265/',
  description: 'Apparel and merchandise venture.',
  outcome: 'Trading with sponsorship pitches in flight',
  image: '/ventures/gridiron-kings.jpg',
  socialLinks: {},
},
{
  id: 10,
  name: 'Omni Solutions',
  founder: 'Apollo Member',
  founderLinkedin: '',
  description: 'Multi-service venture delivering across the team.',
  outcome: 'Highest-revenue venture in the cohort',
  image: '/ventures/omni-solutions.jpg',
  socialLinks: {},
},
```

If image files don't exist in `/public/ventures/`, the existing onError handler already falls back to a placeholder — no extra work needed. The user can replace them later.

The `Omni Solutions` founder is left as `Apollo Member` because the source data doesn't tag a single owner — flag this in the user-facing content review for them to fill in if they want a name displayed.

- [ ] **Step 3: Render `outcome` in the card**

Find the card render. Just below the description `<p>` (the `font-caption text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3` paragraph), add this block:

```tsx
{venture.outcome && (
  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
    <svg className="w-3.5 h-3.5 text-apollo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="font-subtitle text-xs font-semibold text-apollo-blue">{venture.outcome}</span>
  </div>
)}
```

- [ ] **Step 4: Update heading and subheading**

Replace the section heading `Apollo's Ventures + Projects` → `Our ventures = our proof`. Replace the description paragraph with: `Each member runs or builds a real business. Here's what we've shipped.`.

```tsx
<h2 ...>Our ventures = our proof</h2>
<p ...>Each member runs or builds a real business. Here's what we've shipped.</p>
```

- [ ] **Step 5: Add a bridge sentence below the grid**

After the `motion.div` that contains the grid (closing tag), and before the modal render, add:

```tsx
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="font-caption text-center text-lg text-gray-700 mt-12 max-w-3xl mx-auto"
>
  This is the same operator mindset we bring to your project.
</motion.p>
```

- [ ] **Step 6: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add components/Ventures.tsx
git commit -m "feat(ventures): expand to 10 entries, reframe heading, add outcome lines"
```

---

## Task 13: Update `components/Footer.tsx`

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Read the current footer**

Read `components/Footer.tsx` to understand its structure first.

- [ ] **Step 2: Add an "assessors" link**

Inside the Footer's bottom row (whichever row holds secondary links — usually next to social/legal links), add:

```tsx
<a
  href="/assessors"
  className="font-caption text-xs text-gray-500 hover:text-apollo-blue transition-colors"
>
  For mentors & assessors →
</a>
```

If the footer has a single horizontal row of links, append this as one more link. If the footer is a single block, place it directly before the copyright line. Use sensible spacing (`gap-x-4` or similar) consistent with surrounding links.

- [ ] **Step 3: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat(footer): add discreet link to assessors page"
```

---

## Task 14: Update `components/FloatingCTA.tsx`

**Files:**
- Modify: `components/FloatingCTA.tsx`

The spec calls for sizing this up from a small bubble into a slim sticky right-edge bar. Read the current component first to know what's there, then replace it.

- [ ] **Step 1: Read current FloatingCTA**

Read `components/FloatingCTA.tsx`.

- [ ] **Step 2: Replace with sticky right-edge bar**

Replace the entire file contents with:

```tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    const el = document.getElementById('cta')
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed top-1/2 right-0 z-40 -translate-y-1/2 origin-right rotate-180 [writing-mode:vertical-rl] bg-apollo-yellow text-apollo-black font-subtitle font-bold text-sm px-3 py-6 rounded-l-xl shadow-2xl hover:bg-yellow-400 transition-colors"
          aria-label="Brief us"
        >
          Brief us →
        </motion.button>
      )}
    </AnimatePresence>
  )
}
```

Notes on the styling: `[writing-mode:vertical-rl]` plus `rotate-180` produces a vertical sticky tab on the right edge. `top-1/2 -translate-y-1/2` keeps it vertically centred. Appears after 600px of scroll.

- [ ] **Step 3: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/FloatingCTA.tsx
git commit -m "feat(floating-cta): replace bubble with sticky right-edge bar"
```

---

## Task 15: Update `components/CTA.tsx` and `app/api/contact/route.ts`

**Files:**
- Modify: `components/CTA.tsx`
- Modify: `app/api/contact/route.ts`

Add three new optional fields to the form: project type (dropdown), budget range (dropdown), timeline (dropdown). Keep Resend wiring. Two-column layout with form left, "or email us directly" right.

- [ ] **Step 1: Read current CTA and API route**

Read `components/CTA.tsx` and `app/api/contact/route.ts`.

- [ ] **Step 2: Update the API route to accept new fields**

In `app/api/contact/route.ts`, find the request body parsing (likely `const { name, email, message } = await req.json()` or similar). Extend to accept three optional fields:

```ts
const { name, email, message, projectType, budget, timeline } = await req.json()
```

In the email body (the HTML or text the route assembles for Resend), append the new fields if present:

```ts
const projectDetails = [
  projectType && `Project type: ${projectType}`,
  budget && `Budget: ${budget}`,
  timeline && `Timeline: ${timeline}`,
].filter(Boolean).join('\n')

// then include `projectDetails` in the message body before the message text
```

Adjust to match the existing route's exact structure — preserve all existing fields and behaviour, just add the three optional ones.

- [ ] **Step 3: Update the form in CTA.tsx**

Edit `components/CTA.tsx`. Add the three optional dropdown fields in the form, after the email field and before the message field. Use these option lists:

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>
    <label className="block font-caption text-sm font-semibold text-gray-700 mb-1">
      Project type
    </label>
    <select
      name="projectType"
      value={formData.projectType ?? ''}
      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-apollo-blue focus:outline-none transition-colors bg-white"
    >
      <option value="">Select…</option>
      <option>Marketing & Content</option>
      <option>Video & Photography</option>
      <option>Web & Digital</option>
      <option>Events & Community</option>
      <option>Consultancy & BD</option>
      <option>Creative Campaigns</option>
      <option>Not sure / multi-track</option>
    </select>
  </div>
  <div>
    <label className="block font-caption text-sm font-semibold text-gray-700 mb-1">
      Budget
    </label>
    <select
      name="budget"
      value={formData.budget ?? ''}
      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-apollo-blue focus:outline-none transition-colors bg-white"
    >
      <option value="">Select…</option>
      <option>Under £500</option>
      <option>£500 – £2,000</option>
      <option>£2,000 – £5,000</option>
      <option>£5,000+</option>
      <option>Not sure</option>
    </select>
  </div>
  <div>
    <label className="block font-caption text-sm font-semibold text-gray-700 mb-1">
      Timeline
    </label>
    <select
      name="timeline"
      value={formData.timeline ?? ''}
      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-apollo-blue focus:outline-none transition-colors bg-white"
    >
      <option value="">Select…</option>
      <option>ASAP</option>
      <option>Within 1 month</option>
      <option>1–3 months</option>
      <option>Flexible</option>
    </select>
  </div>
</div>
```

Update the form's TypeScript state type to include the three new optional fields:

```ts
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
  projectType: '',
  budget: '',
  timeline: '',
})
```

Update the fetch body to include the new fields:

```ts
body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  message: formData.message,
  projectType: formData.projectType,
  budget: formData.budget,
  timeline: formData.timeline,
}),
```

- [ ] **Step 4: Add the "or email us directly" right column**

The CTA section was a single-column form; convert it to a two-column layout. Wrap the existing form content in a left column, and add a right column with direct email info.

Right column markup:

```tsx
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">
  <span className="font-subtitle text-xs uppercase tracking-widest text-apollo-blue font-semibold mb-3">
    Prefer email?
  </span>
  <h3 className="font-title text-2xl font-bold text-apollo-black mb-3">
    Reach us directly
  </h3>
  <p className="font-caption text-sm text-gray-600 leading-relaxed mb-5">
    No form, no fields. Drop us a line and we'll come back within 48 hours.
  </p>
  <a
    href="mailto:hello@apollo-uwe.com"
    className="inline-flex items-center gap-2 font-subtitle font-semibold text-apollo-blue hover:underline"
  >
    hello@apollo-uwe.com
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </a>
</div>
```

Replace the email address in the `mailto` link with whatever Apollo's contact email actually is — flag this for the user to confirm before launch (default placeholder used if unknown).

Wrap the existing form and the new right column in a grid:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* form here */}
  {/* right column here */}
</div>
```

- [ ] **Step 5: Confirm the section ID**

The CTA section's `<section>` tag should already have `id="cta"`. If not, add it.

- [ ] **Step 6: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 7: Test the form locally**

Run `npm run dev`. Submit the form with each new field filled out. Verify:
- The form submits without errors
- The Resend email (received in your inbox if `RESEND_API_KEY` is configured) contains the new fields when they're filled in

If `RESEND_API_KEY` isn't configured locally, just verify the network request in DevTools shows the new fields in the JSON payload and the response is 200.

- [ ] **Step 8: Commit**

```bash
git add components/CTA.tsx app/api/contact/route.ts
git commit -m "feat(cta): add project brief fields and direct-email column"
```

---

## Task 16: Update `components/NotionWorkspace.tsx`

**Files:**
- Modify: `components/NotionWorkspace.tsx`

Condense to a small banner: title, one-line description, single button to open Notion in new tab.

- [ ] **Step 1: Read current component**

Read `components/NotionWorkspace.tsx`.

- [ ] **Step 2: Replace contents with a condensed banner**

Replace the file contents with:

```tsx
'use client'

import { motion } from 'framer-motion'

interface Props {
  workspaceUrl: string
  title: string
  description: string
}

export default function NotionWorkspace({ workspaceUrl, title, description }: Props) {
  return (
    <section id="workspace" className="px-8 py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="text-center md:text-left">
          <h3 className="font-subtitle text-lg font-bold text-apollo-black">{title}</h3>
          <p className="font-caption text-sm text-gray-600">{description}</p>
        </div>
        <a
          href={workspaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-apollo-black text-white font-subtitle text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          Open workspace
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
```

The component still receives the same props from `app/page.tsx`, so no caller changes needed.

- [ ] **Step 3: Run lint and build**

```bash
npm run lint
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/NotionWorkspace.tsx
git commit -m "feat(workspace): condense Notion section to a single-row banner"
```

---

## Task 17: Create `app/assessors/page.tsx` and update Targets numbers

**Files:**
- Create: `app/assessors/page.tsx`
- Modify: `components/Targets.tsx`

This route mounts the existing `Targets.tsx` component (kept intact) plus an explanatory header and a "back to main site" link. The Targets section continues to use its modal-based detail view. The Finance department status text inside `Targets.tsx` also gets updated with current numbers.

- [ ] **Step 1: Create the page**

Create `app/assessors/page.tsx`:

```tsx
import Header from '@/components/Header'
import Targets from '@/components/Targets'
import Footer from '@/components/Footer'
import metrics from '@/data/metrics.json'

export const metadata = {
  title: 'Apollo — For Mentors & Assessors',
  description: 'Internal performance report and team structure for the Apollo Team Entrepreneurship project.',
}

export default function AssessorsPage() {
  const overshoot = metrics.targetAchievementPercent - 100
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-br from-apollo-blue to-purple-700 text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-subtitle text-blue-100 hover:text-white mb-6"
          >
            ← Back to the main site
          </a>
          <h1 className="font-title text-4xl md:text-5xl font-bold mb-4">
            For Mentors &amp; Assessors
          </h1>
          <p className="font-caption text-lg text-blue-100 max-w-3xl leading-relaxed">
            This page mirrors Apollo's internal performance report — RAG ratings, department
            targets, and working group activity. The public-facing site is at{' '}
            <a href="/" className="text-apollo-yellow underline">
              /
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8">
            <span className="font-subtitle text-xs uppercase tracking-widest text-amber-700 font-bold">
              Latest update
            </span>
            <h2 className="font-title text-2xl md:text-3xl font-bold text-apollo-black mt-2 mb-3">
              Beating the original revenue target by {overshoot}%
            </h2>
            <p className="font-caption text-base text-gray-700 leading-relaxed">
              Cumulative team revenue: <strong>{metrics.totalRevenueLabel}</strong> against
              the £{metrics.originalTarget.toLocaleString('en-GB')} target.{' '}
              Gross margin: <strong>{Math.round(metrics.grossMargin * 100)}%</strong>.{' '}
              Net margin: <strong>{Math.round(metrics.netMargin * 100)}%</strong>.{' '}
              Tracker numbers as of May 2026.
            </p>
          </div>
        </div>
      </section>

      <Targets />

      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Update Targets section's headline data with current numbers**

The current `Targets.tsx` Finance department status text says "revenue of £25,925 and a profit margin of 58%". Update this to current numbers (£77,757 / 76% gross / 35% net). Find the Finance entry in the `departments` array and replace the `update.status` value with:

```ts
status: "Apollo's financial performance is significantly ahead of target. Cumulative team revenue stands at £77,757 (155% of the £50,000 original target) with a 76% gross margin and 35% net margin, driven through successful ventures.",
```

- [ ] **Step 3: Run lint and build**

```bash
npm run lint
npm run build
```

The build for static export should now generate `/out/assessors/index.html`. Verify by checking `out/assessors/index.html` exists after build.

- [ ] **Step 4: Commit**

```bash
git add app/assessors/page.tsx components/Targets.tsx
git commit -m "feat(assessors): create /assessors route with current numbers"
```

---

## Task 18: Update `app/page.tsx` with new section order

**Files:**
- Modify: `app/page.tsx`

This is the biggest visual change. Replace the page composition with the new section order. The unused imports (MissionVision, RoleResponsibilities, Targets) get removed; deletion of those component files happens in Task 19.

- [ ] **Step 1: Replace `app/page.tsx`**

Replace the full file contents with:

```tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProofStrip from '@/components/ProofStrip'
import Services from '@/components/Services'
import Ventures from '@/components/Ventures'
import HowWeWork from '@/components/HowWeWork'
import CaseStudies from '@/components/CaseStudies'
import MidPageCTA from '@/components/MidPageCTA'
import Members from '@/components/Members'
import About from '@/components/About'
import NotionWorkspace from '@/components/NotionWorkspace'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <ProofStrip />
      <Services />
      <Ventures />
      <HowWeWork />
      <CaseStudies />
      <MidPageCTA />
      <Members />
      <About />
      <NotionWorkspace
        workspaceUrl="https://dashing-capacity-25f.notion.site/Apollo-Team-Hub-2680480e9eae815085e2fb6d1ca4f039"
        title="Apollo Team Hub"
        description="Access our shared workspace, documents, and collaborative resources"
      />
      <CTA />
      <Footer />
      <BackToTop />
      <FloatingCTA />
    </main>
  )
}
```

- [ ] **Step 2: Run dev server and walk through the page**

```bash
npm run dev
```

Open http://localhost:3000. Walk through the page from top to bottom and verify:

- Hero renders with both CTAs working (scrolls to #cta and #ventures respectively)
- ProofStrip counts up on scroll into view
- Services renders 6 cards; "Brief us on this" scrolls to CTA
- Ventures shows 10 cards (6 original + 4 new) with outcome chips
- HowWeWork shows 3 steps
- CaseStudies shows 4 cards (with empty deliverables/outcome — that's expected)
- MidPageCTA banner displays; button scrolls to CTA
- Members renders with relabelled stats and any populated skill chips
- About shows consolidated mission/vision/values/operate
- Workspace renders as condensed banner
- CTA shows two-column layout with new dropdowns
- FloatingCTA appears after 600px of scroll on the right edge

Header nav (Services / Ventures / How We Work / Team / Contact) should highlight the active section as you scroll.

Test the assessors page by navigating to http://localhost:3000/assessors. Confirm the Targets section renders with updated numbers and the latest-update banner.

- [ ] **Step 3: Run build**

```bash
npm run build
```

Expected: build succeeds, generates `out/index.html` and `out/assessors/index.html`.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(page): switch to new section order with hero, services, case studies"
```

---

## Task 19: Delete obsolete components

**Files:**
- Delete: `components/MissionVision.tsx`
- Delete: `components/RoleResponsibilities.tsx`
- Delete: `components/Values.tsx` (already unused — confirm no imports first)

`Targets.tsx` and `TargetModal.tsx` stay because `/assessors` uses them.

- [ ] **Step 1: Verify no imports of obsolete components**

```bash
grep -rn "MissionVision\|RoleResponsibilities\|Values" components/ app/ 2>/dev/null
```

Expected: only the file definitions themselves (no imports left). If any other file still references them, fix that file first.

- [ ] **Step 2: Delete the files**

```bash
rm components/MissionVision.tsx components/RoleResponsibilities.tsx components/Values.tsx
```

- [ ] **Step 3: Run lint and build**

```bash
npm run lint
npm run build
```

Expected: clean. If lint complains about missing files, the imports weren't fully cleaned up — go back and fix.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove obsolete components consolidated into About"
```

---

## Task 20: Final verification

**Files:** none changed

- [ ] **Step 1: Lint, build, and walk the site**

```bash
npm run lint
npm run build
npm run dev
```

Open http://localhost:3000 and walk through:

1. Hero — both CTAs work, scroll smoothly to correct sections
2. ProofStrip — counters animate
3. Services — 6 cards, each "Brief us on this" link works
4. Ventures — 10 cards, outcome lines visible, modal opens on click
5. HowWeWork — 3 steps render
6. CaseStudies — 4 cards (deliverables/outcome empty for now)
7. MidPageCTA — banner CTA works
8. Team / Members — skill chips on members who have them, stats labelled correctly
9. About — single consolidated section
10. Workspace — single-row banner
11. CTA — two-column form, all new dropdowns submit successfully
12. FloatingCTA — appears after scroll, scrolls to CTA on click
13. Footer — `For mentors & assessors →` link goes to `/assessors`
14. Header nav highlights correctly as you scroll

Open http://localhost:3000/assessors:

15. Latest-update banner shows "Beating the original revenue target by 55%"
16. Targets section renders with current Finance numbers (£77,757 / 76% / 35%)
17. "Back to the main site" link works

Mobile check: resize browser to ~375px wide. Verify the hero, services grid, ventures grid, and CTA layout all stack cleanly. Header mobile menu opens.

- [ ] **Step 2: Confirm static export integrity**

```bash
ls -la out/
ls -la out/assessors/
```

Expected: `out/index.html` and `out/assessors/index.html` both exist.

- [ ] **Step 3: Final commit (if any tweaks made during walkthrough)**

If any small adjustments were made during the walkthrough:

```bash
git add -A
git commit -m "chore: final polish from end-to-end walkthrough"
```

If no changes were needed, skip.

---

## Open items for the user (post-implementation content)

These don't block shipping the structural revamp — they're content the user fills in when ready. The site renders gracefully with the defaults.

1. **Case study details** — `data/case-studies.json` has 4 named clients with empty `deliverables`, `outcome`, `members`. Fill in to make cards more impressive.
2. **Member skills** — only 4 members in Task 11 got populated skills. Add 1-3 skill tags to the rest (`skills: ['Skill1', 'Skill2']`) to expand the Skills covered count and show chips on more cards.
3. **Per-venture outcome lines** — 4 new ventures had placeholder outcomes. Tweak the wording.
4. **Venture images** — 4 new ventures will use the placeholder fallback until real images are dropped into `/public/ventures/` (`inqube.jpg`, `alex-hill-consulting.jpg`, `gridiron-kings.jpg`, `omni-solutions.jpg`).
5. **Direct contact email** — Task 15 used `hello@apollo-uwe.com` as a placeholder. Replace with the actual Apollo contact email.
6. **Omni Solutions founder** — placeholder "Apollo Member" — replace with real attribution if available.
