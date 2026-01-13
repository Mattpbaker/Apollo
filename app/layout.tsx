import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apollo - Team Landing Page',
  description: 'Apollo team landing page with mission, vision, values, and team members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
