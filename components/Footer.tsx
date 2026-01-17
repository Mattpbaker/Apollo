'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 border-t border-gray-700 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src="/apollo-logo.svg"
                alt="Apollo Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <h3 className="font-title text-3xl font-bold">Apollo</h3>
            </div>
            <p className="font-caption text-gray-400 mb-4 leading-relaxed">
              Building the future together through collaboration, innovation, and shared growth.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:teamapollouwe@gmail.com"
                className="text-gray-400 hover:text-apollo-blue transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="font-subtitle text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#mission', label: 'Mission & Vision' },
                { href: '#targets', label: 'Targets' },
                { href: '#roles', label: 'Roles' },
                { href: '#members', label: 'Members' },
                { href: '#ventures', label: 'Ventures' },
                { href: '#cta', label: 'Contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-caption text-gray-400 hover:text-apollo-blue transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="font-subtitle text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:teamapollouwe@gmail.com"
                className="font-caption text-gray-400 hover:text-apollo-blue transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                teamapollouwe@gmail.com
              </a>
              <p className="font-caption text-gray-400">
                University of the West of England
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-caption text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Apollo. All rights reserved.
            </p>
            <p className="font-caption text-sm text-gray-500 text-center md:text-right">
              Built with passion by the Apollo team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
