# Apollo Website Revamp — Design Spec

**Date:** 2026-05-07
**Status:** Approved (pending user spec review)

## Background

The current Apollo site is structured as an internal team description (mission, values, RAG-rated department targets, role responsibilities, member directory, ventures, Notion link). Course feedback noted that the site:

1. Doesn't sell the team or what it offers
2. Doesn't highlight skills or services
3. Hides the call-to-action at the bottom

The site reads as "who Apollo is internally" but never tells a visitor "why they would hire or engage Apollo."

This revamp keeps every existing section but reorders, reframes, and adds the missing pieces (services, proof, process, case studies). It also moves internal performance reporting (RAG ratings, department status) off the public site to a dedicated `/assessors` route so the course marker can still find it.

## Audience & positioning

**Primary audience:** Potential clients — both for collective project work (hire Apollo as a creative collective) and for individual ventures (route visitors to specific ventures).

**Secondary audience:** Course assessors and mentors. They will visit too and need to see the substance, but they should not dominate the design.

**Positioning angle:** *Apollo is a multidisciplinary team of student entrepreneurs at UWE running real revenue-generating ventures. We bring that operator mindset — not consultant theory — to client projects across marketing, content, web, events, and consultancy.*

This is the unique hook no commercial agency can claim: members run their own businesses, so they understand client problems from both sides.

## Page structure (new section order)

```
1.  Header                    (kept, nav rewritten)
2.  Hero                      (NEW — replaces MissionVision as opener)
3.  Proof Strip               (NEW — animated counters, full-bleed)
4.  What We Do                (NEW — 6 service tracks)
5.  Ventures                  (kept, reframed as "Our ventures = our proof")
6.  How We Work               (NEW — 3-step engagement process)
7.  Case Studies              (NEW — 3-4 named client projects)
8.  Mid-page CTA banner       (NEW — full-width "Like what you've seen?")
9.  Team                      (kept, reframed as "Who you'd work with")
10. About Apollo              (CONSOLIDATED — Mission + Vision + Values + Roles)
11. Workspace banner          (kept, condensed)
12. CTA                       (kept, upgraded)
13. Footer                    (kept, with link to /assessors)
14. BackToTop + FloatingCTA   (kept, FloatingCTA sized up)
```

**Removed from public site:** the current `Targets.tsx` section (RAG ratings, department breakdowns, working group details). It moves to a dedicated `/assessors` route.

**Header nav rewritten:** `Services · Ventures · How We Work · Team · Contact`. Drops Mission/Targets/Roles/Workspace from nav (they remain on the page where applicable, just not navigation-priority for clients).

## Section-by-section design

### 1. Header (updated)

- Same component, same logo, same sticky behaviour.
- Nav items become: `Services`, `Ventures`, `How We Work`, `Team`, `Contact`.
- Each links to the new section IDs (`#services`, `#ventures`, `#how-we-work`, `#team`, `#cta`).
- Mobile menu mirrors desktop nav.

### 2. Hero (new)

- Full-viewport opener with gradient background using existing apollo-blue / purple palette.
- **Headline:** "We're student entrepreneurs running real ventures. Now we're taking on yours."
- **Subline:** "A team of 19 UWE entrepreneurs running 11 live ventures. We bring that operator mindset to client projects across marketing, content, web, events, and consultancy."
- **Two CTAs:**
  - Primary: `Brief us on a project` — yellow on dark background, large, scrolls to `#cta`
  - Secondary: `See our ventures` — outlined, scrolls to `#ventures`
- Background uses the existing animated blob/gradient pattern from MissionVision so the visual identity carries through.
- Section ID: `#hero` (default top of page, no anchor needed beyond logo click).

### 3. Proof Strip (new)

- Full-bleed dark band immediately below the hero. Single horizontal row of 4 animated counters.
- Metrics (sourced from `data/metrics.json`):
  - **£77,757+** Team revenue generated
  - **11** Live ventures + projects
  - **40+** External organisations engaged
  - **19** Team members
- Counters animate from 0 on scroll-into-view.
- No images, no fluff — high-density proof in a single glance.

### 4. What We Do — Services (new)

- Grid of 6 service tracks. Each card: icon · name · 1-line outcome · "members on this track" count · `Brief us on this →` link.
- Service tracks:
  1. **Marketing & Content** — strategy, social media, copy, branding for businesses that need attention
  2. **Video & Photography** — produced video, photography, social-first creative
  3. **Web & Digital** — landing pages, websites, lightweight apps, digital presence
  4. **Events & Community** — workshop delivery, networking events, panels
  5. **Consultancy & BD** — market research, customer acquisition strategy, go-to-market support
  6. **Creative Campaigns** — full briefs combining several tracks above
- The "members on this track" count on each card is derived from the `skills` array on `teamMembers` (added in the Members data extension). Each service card maps to one or more skill tags; the count is the number of members whose skills include any of those tags.
- Each `Brief us on this` link scrolls to the CTA section and pre-selects the relevant service in the brief form (when implemented).
- Section ID: `#services`.

### 5. Ventures (kept, reframed and expanded)

- Existing `Ventures.tsx` keeps its data and grid, but:
  - **Heading:** "Apollo's Ventures + Projects" → "Our ventures = our proof"
  - **Subheading:** "Each member runs or builds a real business. Here's what we've shipped."
  - **Each card gains an outcome line** under the description (one short metric per venture; populated from existing data — see Data section).
  - **Below the grid:** a single bridge sentence — "This is the same operator mindset we bring to your project."
- The current `Ventures.tsx` lists 6 ventures, but the Finance Tracker shows 11. To be consistent with the proof strip's "11 live ventures" claim, the additional ventures must be added to the array: INQUBE (Logan), Alex Hill Consulting, Gridiron Kings (Harry), Omni Solutions, and any others the user wishes to add. Apollo Workshops is internal/team-led and stays out of the public ventures list. User to confirm and supply images / descriptions for the new entries — see Open items.
- Section ID stays `#ventures`.

### 6. How We Work (new)

- Three-step horizontal strip. Demystifies the engagement.
  1. **Brief us** — share your project, budget, timeline via the form or a quick call.
  2. **Working group assigned** — we match members with the right skills to your brief, send back a scope and quote.
  3. **Delivery** — clear milestones, regular updates, final handover.
- Honest description of how Apollo already operates internally (working groups), so it survives an assessor sniff-test.
- Section ID: `#how-we-work`.

### 7. Case Studies (new)

- 3-4 cards, each featuring a named external client project.
- Source: External Interaction Tracker. Initial set:
  - **OurTor** — Client project (TE engagement)
  - **KASA Tech** — Client project
  - **FounderCrushAI** — Client project
  - **Solutions for the Planet** — Client project
  - (Plus 4 more available: Bristol Future Talent, Ear Switch, Amazing Toys, Milbotix)
- Card structure: Client name · Brief description · Deliverables · Outcome metric (where known).
- Decision (per user): client names go public.
- "View all" link if more than 4 are featured.
- Section ID: `#case-studies`.

### 8. Mid-page CTA banner (new)

- Full-width yellow banner between Case Studies and Team.
- Headline: "Like what you've seen? Tell us about your project."
- Single button: `Brief us →` (scrolls to `#cta`).

### 9. Team (kept, reframed)

- Existing `Members.tsx` keeps data and grid layout.
- **Heading:** "Our Team" → "Who you'd work with"
- **Stats strip relabelled:** "Team Members · Live Ventures · Skills covered" (replacing "Team Members · Active Roles · Leaders")
- **New: skill chips** under each member. 1-3 small pills showing skills. Sourced from a new `skills` array on each member (extending the existing inline data structure). Members with no skills fall back to current display.
- Sort order unchanged (members with roles first, then plain members).
- Section ID: `#team`.

### 10. About Apollo (consolidated)

- Replaces both `MissionVision.tsx` and `RoleResponsibilities.tsx` with a single tighter `About.tsx` component.
- Layout:
  - **Mission + Vision** — side-by-side, smaller cards than today (about 50% of current size)
  - **Core Values** (P-A-I-R) — 4 small chips on a single row, not the giant gradient cards
  - **How we operate** — 2-3 sentences combining the current Team Leads / Team Members / Working Groups content into a condensed paragraph
- The existing animated blob backgrounds and gradient text are kept but applied to a smaller section.
- Section ID: `#about`.

### 11. Workspace banner (kept, condensed)

- `NotionWorkspace.tsx` is kept but shrunk to a small banner — title, one-line description, and a single button that opens the Notion URL in a new tab.
- Currently this section embeds the workspace — that goes away. A simple link is enough.
- Section ID: `#workspace`.

### 12. CTA (kept, upgraded)

- Existing `CTA.tsx` is upgraded. The Resend wiring stays.
- Form gains optional fields: project type (dropdown using the 6 service tracks), budget range, timeline.
- Direct email displayed as a secondary option for visitors who don't want to fill in a form.
- No Calendly (per user — not currently set up).
- Layout: full-bleed statement section, two columns — form on the left, "or email us directly" on the right.
- Section ID: `#cta`.

### 13. Footer (updated)

- Existing footer kept, plus a discreet link: `For mentors & assessors →` linking to `/assessors`.

### 14. FloatingCTA (sized up)

- Existing `FloatingCTA.tsx` resized from current small bubble to a slim sticky bar pinned to the right side. Stays visible after the hero scrolls out.
- Single label: `Brief us →`. Click scrolls to `#cta`.

## CTA strategy — 5 layers

A visitor encounters the contact CTA at minimum 5 times as they scroll:

1. Hero — two prominent buttons, above the fold
2. FloatingCTA — sticky on the right, follows scroll
3. Inline CTAs on each Service card — `Brief us on this →`
4. Mid-page CTA banner — between Case Studies and Team
5. Final CTA section — full-bleed form + direct email

This is a direct response to "CTA was hidden at the bottom" feedback.

## `/assessors` route (course-facing)

- New route at `app/assessors/page.tsx`. Compatible with `output: 'export'` — Next.js generates `/assessors/index.html` automatically.
- Contents:
  - Header explaining this is the internal team report for course mentors and assessors
  - Full Targets section (lifted from current `Targets.tsx` content, with **updated current numbers** — see Data section below — plus a new "Latest update" panel showing trajectory beating target by 55%)
  - Mission/Vision/Values in their original prominent format
  - Role Responsibilities in their original detail
  - "Back to main site" link
- Linked from the public footer only. Not in the main nav.

## Component plan

### New components

- `components/Hero.tsx`
- `components/ProofStrip.tsx`
- `components/Services.tsx`
- `components/HowWeWork.tsx`
- `components/CaseStudies.tsx`
- `components/MidPageCTA.tsx`
- `components/About.tsx` (consolidates MissionVision + RoleResponsibilities)

### Updated components

- `components/Header.tsx` — new nav items
- `components/Members.tsx` — skill chips on cards, relabelled stats strip, heading change
- `components/Ventures.tsx` — heading change, outcome line on each card, bridge line below grid
- `components/Footer.tsx` — assessors link
- `components/FloatingCTA.tsx` — sized up, sticky right-edge bar
- `components/CTA.tsx` — project brief fields, two-column layout
- `components/NotionWorkspace.tsx` — condensed to a banner

### Removed from public page

- `components/MissionVision.tsx` — content folded into `About.tsx`
- `components/RoleResponsibilities.tsx` — content folded into `About.tsx`
- `components/Targets.tsx` — moved to `/assessors` route

### Page composition

`app/page.tsx` order becomes: `ScrollProgress · Header · Hero · ProofStrip · Services · Ventures · HowWeWork · CaseStudies · MidPageCTA · Members · About · NotionWorkspace · CTA · Footer · BackToTop · FloatingCTA`.

## Data

### `data/metrics.json` (new)

```json
{
  "totalRevenue": 77757,
  "totalRevenueLabel": "£77,757+",
  "ventures": 11,
  "externalOrgs": 40,
  "teamMembers": 19,
  "grossMargin": 0.7578,
  "netMargin": 0.3493,
  "originalTarget": 50000,
  "targetAchievementPercent": 155
}
```

The ProofStrip component reads from this. The `/assessors` Targets section also references it for the "Latest update" panel.

### Per-venture outcome lines

Added inline to the existing ventures array in `Ventures.tsx`. One short outcome line per venture. Per the user's earlier choice (B — aggregated revenue only, no per-venture breakdowns), outcome lines describe activity, not revenue:

- Flipped It — "Sustainable fashion, 6 months trading"
- SISO Agency — "Multi-service creative agency, two co-founders"
- CleanNest Cleaners — "Live customer base in Bristol"
- Blufin Media — "Managing 18+ named client accounts"
- AlexCount X — "Multi-platform gaming creator (YouTube, Twitch, TikTok)"
- Journey With George — "Coaching practice with named external clients"

These can be edited by the user before launch.

### Case studies (`data/case-studies.json` or inline)

For each case study card:

```json
{
  "client": "OurTor",
  "type": "Client project",
  "summary": "Brief one-line description",
  "deliverables": ["Item 1", "Item 2"],
  "outcome": "Outcome metric or qualitative result",
  "members": ["First names of members involved"]
}
```

User to fill in deliverables/outcome/members for each. Initial data comes from External Interaction Tracker.

### Members skills (extension)

Existing `teamMembers` array in `Members.tsx` extended with optional `skills?: string[]` field. Examples:

- Matt Baker — `["Web", "Social Media"]`
- Grace Docherty — `["Video Direction", "Marketing"]`
- Alex Hill — `["Videography", "Consulting"]`
- George Lewis — `["Coaching", "Accountability"]`

User to fill in skills for each member before launch.

## Style & branding

No brand refresh. Existing palette stays:

- `apollo-blue` (#3B82F6)
- `apollo-yellow` (#FCD34D)
- `apollo-black` (#000000)

Montserrat remains the primary font. Existing custom CSS animations (blobs, gradient text, fade-in-up) are reused in the new components. Framer Motion patterns from existing components carry over.

## Technical notes

- Static export remains (`output: 'export'`). The `/assessors` route works fine — Next.js generates a static `index.html` for it.
- `next/image` stays disabled (`unoptimized: true`); all images stay in `/public`.
- New JSON data files (`data/metrics.json`, `data/case-studies.json` if used) imported directly into components — no API/CMS layer.
- Existing Resend integration in `app/api/contact/route.ts` is preserved. The contact form gains additional fields, all sent through the same endpoint.
- No new dependencies required.

## Implementation order (suggested for the plan phase)

1. Create `data/metrics.json` and supporting data files.
2. Build `Hero.tsx`, `ProofStrip.tsx`, `Services.tsx` (the three biggest new sections).
3. Build `HowWeWork.tsx`, `CaseStudies.tsx`, `MidPageCTA.tsx`.
4. Build consolidated `About.tsx`.
5. Update `Header.tsx`, `Members.tsx`, `Ventures.tsx`, `Footer.tsx`, `FloatingCTA.tsx`, `CTA.tsx`, `NotionWorkspace.tsx`.
6. Create `app/assessors/page.tsx` and move `Targets.tsx` rendering there with current numbers + "Latest update" panel.
7. Replace `app/page.tsx` to use the new section order.
8. Remove `MissionVision.tsx`, `RoleResponsibilities.tsx` (content now in `About.tsx`).
9. Verify static export builds, all anchor links work, and FloatingCTA behaviour on scroll.

## Open items

These are content placeholders the user needs to provide before the site goes live. They don't block the design — the structure is fixed, only the copy varies.

- **Case study details** for each featured client project (deliverables, outcome metric, members involved). The cards will render as soon as the data file is populated.
- **Member skills** — 1-3 skill tags per member.
- **Per-venture outcome lines** — short one-liners per venture (suggestions provided above; user can override).
- **Permission confirmation** for naming clients publicly (per user, confirmed; flag remains for any client who later objects).
- **Five additional ventures to add** to `Ventures.tsx`: INQUBE (Logan), Alex Hill Consulting, Gridiron Kings (Harry), Omni Solutions, plus any others the user wants on the public site. Each needs founder name, LinkedIn, image (placeholder will be used until supplied), description, and any social links.
