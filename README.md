# Apollo Landing Page

A modern landing page for the Apollo team featuring floating sections, shadow effects, and a clean design.

## Features

- **Mission & Vision** - Showcase your team's purpose and goals
- **Values** - Highlight core team values
- **Targets** - Display team objectives
- **Members & Roles** - Team member directory
- **Projects & Ventures** - Interactive venture cards with modal popups
- **Call to Action** - Email contact form

## Design

- Modern floating sections with shadow effects
- Color scheme: Blue (#3B82F6), Yellow (#FCD34D), Black (#000000)
- Typography:
  - Titles: Montserrat
  - Subtitles: Oswald (fallback for KnockoutCruiserweight)
  - Captions: Butler Regular

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Team Logo

To replace the placeholder logo with your own:
1. Add your logo file (PNG, SVG, or JPG) to the `/public/` folder
2. Name it `apollo-logo.svg` (or update the filename in `components/Header.tsx` and `components/Footer.tsx`)
3. The logo will automatically appear in the header and footer

### Adding KnockoutCruiserweight Font

If you have the KnockoutCruiserweight font file:
1. Add the font files to `/public/fonts/`
2. Update `app/globals.css` to import the font
3. Update `tailwind.config.js` to use the font name

### Email Form

The email form in the CTA section currently simulates sending. To connect it to a real email service:
1. Set up an API route in `/app/api/contact/route.ts`
2. Update the form submission handler in `components/CTA.tsx`
3. Consider using services like SendGrid, Resend, or Nodemailer

## Build

```bash
npm run build
npm start
```
