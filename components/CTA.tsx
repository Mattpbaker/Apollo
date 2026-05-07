'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Toast from './Toast'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; isVisible: boolean }>({
    message: '',
    type: 'info',
    isVisible: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSubmitted(false)
    setIsSubmitting(true)

    if (!formData.email || !formData.email.includes('@')) {
      setError('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '', projectType: '', budget: '', timeline: '' })
      setError('')
      setToast({
        message: "Message sent successfully! We'll get back to you soon.",
        type: 'success',
        isVisible: true,
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send email. Please try again.'
      setError(errorMessage)
      setToast({
        message: errorMessage,
        type: 'error',
        isVisible: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="py-32 px-8 bg-gradient-to-br from-apollo-blue via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-title text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-caption text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto"
          >
            Have a question or want to collaborate?
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-caption text-lg text-white/80"
          >
            Send us a message and let&apos;s start a conversation
          </motion.p>
        </motion.div>

        {/* Two-column card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-md border-2 border-white/30 rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column — form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#3B82F6' }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name (optional)"
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#3B82F6' }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address *"
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption transition-all duration-300 bg-gray-50 focus:bg-white"
                    required
                  />
                </motion.div>

                {/* Optional project brief dropdowns */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                >
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
                        <option>Marketing &amp; Content</option>
                        <option>Video &amp; Photography</option>
                        <option>Web &amp; Digital</option>
                        <option>Events &amp; Community</option>
                        <option>Consultancy &amp; BD</option>
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: '#3B82F6' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message (optional)"
                    rows={5}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption resize-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full px-8 py-5 bg-gradient-to-r from-apollo-blue to-blue-600 text-white font-subtitle font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.svg
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </motion.svg>
                        Sending...
                      </span>
                    ) : submitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Right column — direct email */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">
              <span className="font-subtitle text-xs uppercase tracking-widest text-apollo-blue font-semibold mb-3">
                Prefer email?
              </span>
              <h3 className="font-title text-2xl font-bold text-apollo-black mb-3">
                Reach us directly
              </h3>
              <p className="font-caption text-sm text-gray-600 leading-relaxed mb-5">
                No form, no fields. Drop us a line and we&apos;ll come back within 48 hours.
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
          </div>
        </motion.div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </section>
  )
}
