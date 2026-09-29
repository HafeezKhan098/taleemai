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
