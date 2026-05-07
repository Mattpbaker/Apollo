import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { email, message, name, projectType, budget, timeline } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' },
        { status: 500 }
      )
    }

    // Build optional project details block
    const projectDetails = [
      projectType && `Project type: ${projectType}`,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
    ].filter(Boolean).join('\n')

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Apollo Website <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: 'teamapollouwe@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name || email}`,
      html: `
        <div style="font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name || 'Anonymous'} (${email})</p>
          ${projectDetails ? `<p><strong>Project details:</strong></p><pre style="background:#f3f4f6;padding:12px;border-radius:6px;font-size:13px;">${projectDetails}</pre>` : ''}
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : '<p>User submitted their email address.</p>'}
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">This email was sent from the Apollo website contact form.</p>
        </div>
      `,
      text: `
        New Contact Form Submission

        From: ${name || 'Anonymous'} (${email})
        ${projectDetails ? `\n${projectDetails}\n` : ''}
        ${message ? `Message: ${message}` : 'User submitted their email address.'}

        This email was sent from the Apollo website contact form.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
