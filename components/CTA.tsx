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
    <section id="cta" className="py-20 px-8 bg-gradient-to-b from-apollo-blue to-blue-600">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-12 transform hover:scale-105 transition-all duration-300">
        <h2 className="font-title text-3xl font-bold text-center text-apollo-black mb-6">
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
              className="px-8 py-4 bg-apollo-yellow text-apollo-black font-subtitle font-bold rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
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
