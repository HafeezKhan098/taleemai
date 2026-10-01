# TaleemAI V4 — Balochistan-first education UX upgrade

This is a full-code upgrade built on the latest TaleemAI launch project structure.

## Main changes
- Cinematic Balochistan hero with a real, openly licensed Balochistan landscape photo.
- Humanized educational homepage with simple, colorful quick-access cards.
- Cards: Ask Career Counseling AI; Local / Study Abroad Scholarships; BBISE & Board Portals; Colleges & Universities; Tests & Exams; Skills Learning; Balochistan Info.
- Board resources section including BBISE, FBISE and other major board portals.
- SEO-focused homepage article with natural student-first copy, internal links, FAQ content and EducationalOrganization + Article structured data.
- College Explorer reorganized into Top Balochistan, BRCs, Cadet Colleges, O/A Level, Government/Federal and All listed.
- BRC admission guidance based on current BRC Loralai official admission policies.
- Balochistan EMIS cadet/residential-college link added.
- University Explorer split into Balochistan Universities and Pakistan Universities.
- Real photo URLs used where verified; photo-pending placeholders are used where an institution-specific photo was not verified.
- AI Mentor profile no longer defaults the city/district to Pishin.
- AI Mentor no longer automatically greets every message; it responds to the actual input.
- AI Mentor answers make URLs clickable.
- Dark/light mode with localStorage preference.
- Mobile/tablet/desktop responsive refinements.
- `metadataBase`, sitemap and robots all use `https://taleemai-mu.vercel.app`.
- Vercel Analytics integration in `app/layout.tsx` is preserved.

## Important
1. Keep your existing `.env.local` and Vercel Gemini environment variables. Never put the API key in GitHub.
2. Before deployment, run `npm install` and `npm run build` locally.
3. This environment did not have `node_modules`, so a production build could not be executed here.
4. Review external image URLs before launch. `PHOTO-SOURCES.md` records the main photo sources and licenses.
5. Do not expect SEO changes to guarantee a #1 Google position. The work is designed to make the site clearer, more useful and more search-friendly.
