'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSubmitted(false)

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      setEmail('')
      setError('')
    } catch (err) {
      setError('Failed to send email. Please try again.')
    }
  }

  return (
    <section id="cta" className="py-20 px-8 bg-white">
      <div className="max-w-2xl mx-auto bg-white border-2 border-gray-200 rounded-lg shadow-sm p-12 hover:border-apollo-blue hover:shadow-md transition-all duration-300">
        <h2 className="font-title text-3xl font-bold text-center text-gray-900 mb-6">
          Get In Touch
        </h2>
        <p className="font-caption text-xl text-center text-gray-700 mb-8">
          Have a question or want to collaborate? Send us a message!
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apollo-blue font-caption"
              required
            />
            <button
              type="submit"
              disabled={submitted}
              className="px-8 py-4 bg-apollo-blue text-white font-subtitle font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitted ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {error && (
            <p className="text-red-600 mt-2 text-sm font-caption">
              {error}
            </p>
          )}
          {submitted && (
            <p className="text-green-600 mt-2 text-sm font-caption">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
