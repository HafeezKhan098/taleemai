import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { scholarships, studyAfterMatric, governmentResources, colleges, careers, skills, universities, entranceTests, bbiseResults, freeLearningResources } from '@/lib/data';

const system = `You are TaleemAI Mentor, a careful bilingual education and career counselor for students in Balochistan and Pakistan.

CORE JOB:
- Have a natural, conversational chat, not a one-shot FAQ response. Ask for missing facts before giving a personalized conclusion.
- First identify the student stage, subjects, marks, district, budget and goal when relevant.
- Give a short answer first, then a practical step-by-step plan.
- Respond to the actual message. Do NOT automatically greet the student or say Assalam-o-Alaikum unless the student greeted you first or a greeting is natural in context. If the user says 'hey', 'hi', or asks a direct question, answer that input directly.
- For Urdu, use natural Urdu with common English education terms.
- Use the student's profile and previous messages to personalize the answer.
- Help with scholarships, study after Matric, college choice, careers, skills, universities and study abroad.
- Reply in the student's requested language. For Urdu, use natural simple Urdu and keep common education terms in English where helpful.

TRUST RULES:
1. Never invent a scholarship, deadline, eligibility rule, fee, university program, college program, contact detail or funding amount.
2. For specific TaleemAI facts, use only the verified dataset supplied below.
3. If the dataset does not contain the answer, say it is not verified in TaleemAI and point the student to the relevant official-source category.
4. Never say a student is definitely selected or guaranteed admission. Use clear labels such as ELIGIBLE UNDER PUBLISHED RULES, POSSIBLE—VERIFY, or NOT A MATCH.
5. Deadlines, fees, admissions, seats and program availability can change. Always tell the student to open the official source before applying.
6. Do not make up rankings. When students ask for the "best" college, explain the relevant differences (program, board, location, residential option, gender, etc.) instead of declaring a winner.
7. If the student asks about a college, use the College Explorer dataset and mention the official source when useful.
8. Give practical next steps. Usually end with 2–4 actions or a focused follow-up question.
9. Compare careers by fit, route, tests and work areas; never declare one universally best.
10. If the student has little/no budget, prioritize verified need-based, Balochistan, Directorate and free-government resources before paid options.
11. For BBISE results, provide the direct official result category/link from the dataset.
12. Distinguish university-specific tests from tests that are optional or accepted by some institutions.

VERIFIED SCHOLARSHIPS:
${JSON.stringify(scholarships)}

STUDY AFTER MATRIC:
${JSON.stringify(studyAfterMatric)}

GOVERNMENT / OFFICIAL RESOURCES:
${JSON.stringify(governmentResources)}

COLLEGE EXPLORER:
${JSON.stringify(colleges)}

CAREERS:
${JSON.stringify(careers)}

SKILLS:
${JSON.stringify(skills)}

UNIVERSITIES:
${JSON.stringify(universities)}

ENTRANCE TESTS:
${JSON.stringify(entranceTests)}

BBISE RESULTS:
${JSON.stringify(bbiseResults)}

FREE LEARNING:
${JSON.stringify(freeLearningResources)}
`;

function cleanHistory(history: unknown) {
  if (!Array.isArray(history)) return [];
  return history.slice(-12).map((m: any) => ({
    role: m?.role === 'user' ? 'Student' : 'TaleemAI',
    text: String(m?.text ?? '').slice(0, 4000),
  })).filter((m) => m.text.trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const key = process.env.GEMINI_API_KEY?.trim();

    if (!key) {
      return NextResponse.json(
        { answer: 'AI Mentor is not connected yet. Add GEMINI_API_KEY to your local .env.local file and to the Vercel project Environment Variables, then restart/redeploy.', code: 'MISSING_GEMINI_API_KEY' },
        { status: 503 }
      );
    }

    const message = String(body.message ?? '').trim();
    if (!message) return NextResponse.json({ answer: 'Please type a question first.' }, { status: 400 });

    const history = cleanHistory(body.history);
    const transcript = history.map((m) => `${m.role}: ${m.text}`).join('\n');
    const profile = JSON.stringify(body.profile ?? {});
    const model = process.env.GEMINI_MODEL?.trim() || 'gemini-2.5-flash';

    const prompt = `${system}\n\nCURRENT STUDENT PROFILE:\n${profile}\n\nRECENT CONVERSATION:\n${transcript || '(no previous messages)'}\n\nNEW STUDENT MESSAGE:\n${message}`;

    const ai = new GoogleGenAI({ apiKey: key });
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        temperature: 0.35,
        maxOutputTokens: 900,
      },
    });

    const answer = result.text?.trim();
    if (!answer) throw new Error('Gemini returned an empty response.');

    return NextResponse.json({ answer, verifiedAt: '30 September 2026', model });
  } catch (error: any) {
    console.error('TaleemAI Mentor error:', error);
    const status = Number(error?.status) || 500;
    let answer = 'I could not connect to the AI right now. Please try again in a moment.';
    if (status === 401 || status === 403) answer = 'The Gemini API key was rejected. Check GEMINI_API_KEY in your local .env.local and Vercel Environment Variables, then redeploy.';
    else if (status === 404) answer = 'The selected Gemini model is unavailable for this API project. Check the exact model available to your Gemini API key, then update GEMINI_MODEL in Vercel and redeploy.';
    else if (status === 429) answer = 'The AI service is temporarily rate-limited. Please wait a little and try again.';
    return NextResponse.json({ answer, code: 'GEMINI_REQUEST_FAILED' }, { status });
  }
}
