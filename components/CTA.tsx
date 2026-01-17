'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Toast from './Toast'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
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

    if (!email || !email.includes('@')) {
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
          email,
          name: name || undefined,
          message: message || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSubmitted(true)
      setEmail('')
      setName('')
      setMessage('')
      setError('')
      setToast({
        message: 'Message sent successfully! We\'ll get back to you soon.',
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
    <section id="cta" className="py-20 px-8 bg-gradient-to-br from-apollo-blue via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl"
        />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border-2 border-white/20 rounded-2xl shadow-2xl p-12 backdrop-blur-sm"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-title text-3xl font-bold text-center text-gray-900 mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-caption text-xl text-center text-gray-700 mb-8"
          >
            Have a question or want to collaborate? Send us a message!
          </motion.p>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address *"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message (optional)"
              rows={4}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full px-8 py-4 bg-apollo-blue text-white font-subtitle font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 mt-2 text-sm font-caption"
              >
                {error}
              </motion.p>
            )}
            {submitted && (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-600 mt-2 text-sm font-caption"
              >
                Message sent successfully! ✨
              </motion.p>
            )}
          </form>
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
