# TaleemAI v2

Balochistan-first bilingual education, scholarship and career guidance platform.

## Run

```bash
npm install
npm run dev
```

Optional AI:

1. Copy `.env.example` to `.env.local`
2. Add `GEMINI_API_KEY`
3. Restart Next.js

Without a key, the Mentor uses a deterministic verified-data fallback.

## Important data principle

Scholarship records include official source, application link, last verified date and eligibility notes. Update `lib/data.ts` when official providers publish a new cycle. Never present an old deadline as current.

## Main routes

- `/` home
- `/mentor` AI career/scholarship mentor
- `/scholarships` scholarship hub
- `/careers` career explorer
- `/universities` university explorer
- `/balochistan` Balochistan education guide
- `/abroad` study abroad roadmap
- `/skills` free skills
- `/bbise` BBISE Quetta guide
