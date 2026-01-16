# Email Setup Instructions

The contact form sends emails to `teamapollouwe@gmail.com` using Resend.

## Setup Steps

1. **Create a Resend account**
   - Go to https://resend.com
   - Sign up for a free account (100 emails/day free)

2. **Get your API Key**
   - Go to https://resend.com/api-keys
   - Create a new API key
   - Copy the API key

3. **Add API Key to Environment Variables**
   - Create a `.env.local` file in the root directory
   - Add: `RESEND_API_KEY=your_api_key_here`
   - Replace `your_api_key_here` with your actual API key

4. **Verify Your Domain (Optional but Recommended)**
   - For production, verify your domain in Resend
   - This allows you to send from your own domain instead of `onboarding@resend.dev`
   - Update the `from` field in `app/api/contact/route.ts` after verification

5. **Deploy**
   - Add `RESEND_API_KEY` to your Vercel environment variables
   - Go to your Vercel project settings → Environment Variables
   - Add the variable and redeploy

## Testing

The contact form will send emails to `teamapollouwe@gmail.com` when submitted.
