# TaleemAI

TaleemAI is a bilingual, Balochistan-first education, scholarship, career and study-abroad guidance platform for Pakistani students.

## Current upgrade
- Conversational AI Mentor with session context
- Verified-source scholarship dataset with BS / Masters / PhD grouping
- CSC/China, Türkiye, Erasmus Mundus, Commonwealth, Fulbright, Chevening and HEC/BEEF routes
- Study After Matric explorer: FSc, ICS, FA, I.Com, DAE and TVET/skills
- Government resource hub: HEC, BEEF, NAVTTC, BBISE, Balochistan Colleges/Higher & Technical Education and Pakistan Bait-ul-Mal
- College Explorer with official-source links and verified institutional photos where available
- English ↔ Urdu navigation fix
- Responsive layouts for phones, iPhone, tablets, laptops and desktop
- Vercel Analytics preserved in `app/layout.tsx`

## Verification rule
Specific scholarship and institution facts are stored with an official source and verification date. AI is instructed not to invent facts. Current deadlines and admission notices must still be checked on the official source before applying.

## Environment
Create `.env.local` locally (never commit it):

```env
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash
```

On Vercel, add the same variables in Project Settings → Environment Variables.

## Routes
- `/` Home
- `/mentor` AI Mentor
- `/scholarships` Verified scholarships
- `/study-after-matric` Education pathways after Matric
- `/colleges` College Explorer
- `/abroad` BS / Masters / PhD abroad
- `/balochistan` Balochistan guide
- `/bbise` BBISE guide
- `/careers` Careers
- `/universities` Universities
- `/skills` Skills
- `/ur` Urdu home

## Important
Do not put `.env.local` or a Gemini API key in GitHub.


## AI Mentor setup
The Mentor uses the current `@google/genai` server SDK. Put `GEMINI_API_KEY` in `.env.local` locally and in Vercel Project Settings → Environment Variables. Keep the key server-side; never commit `.env.local`. The default model is `gemini-2.5-flash`, override with `GEMINI_MODEL` if needed.

## College Explorer research basis
The expanded College Explorer uses official Balochistan EMIS cadet/residential-college data, University of Balochistan affiliated-college data, BEEF policy/panel documents, official institution websites, and official federal/institution network pages. Current admissions, fees and seats must still be verified at the linked official source.

## Final launch build additions — 30 Sep 2026
- Expanded scholarship hub: HEC/BEEF, Directorate reserved-seat pathways, general after-admission financial-aid guidance, CSC China, Stipendium Hungaricum, Türkiye Scholarships, Erasmus Mundus, Commonwealth, Fulbright, Chevening, HEC Overseas, BEEF PhD and BEEF/Oxford.
- Added Entrance Tests page covering Directorate Intermediate/BS reserved-seat tests, HEC USAT/LAT/HAT, MDCAT, NUMS MDCAT, KMU-CAT, ECAT, NUST NET, NTS NAT and FAST admission testing.
- Added direct BBISE result links for SSC Part-I/II and HSSC Part-I/II.
- Expanded Career Explorer to 30+ pathways grouped by Medical & Health, Computer & Technology, Engineering, Business & Economics, Arts & Social Sciences, and Science & Environment.
- Expanded Skills page with DigiSkills and NAVTTC official learning resources.
- College Explorer now uses institution photos where available and clearly labels illustrative fallback photos where a verified institution photo was not available.
- Added SVG logo + icon, page metadata, Open Graph metadata, sitemap and robots route.
- Preserved Vercel Analytics and the existing environment-variable approach. Keep `.env.local` local-only.
