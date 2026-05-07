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
            This page mirrors Apollo&apos;s internal performance report — RAG ratings, department
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
