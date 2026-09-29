import {NextResponse} from 'next/server';
import {GoogleGenerativeAI} from '@google/generative-ai';
import {scholarships,studyAfterMatric,governmentResources,colleges} from '@/lib/data';

const system=`You are TaleemAI Mentor, a careful bilingual education counselor for students in Balochistan and Pakistan.
Your job is to explain verified education information in simple words and help students decide their next practical step.
STRICT TRUST RULES:
1. Never invent a scholarship, deadline, eligibility rule, fee, university program, college program, contact detail or funding amount.
2. Use only the verified dataset supplied below for specific claims. If the dataset does not contain the answer, say that the information is not verified in TaleemAI and give the official source category to check.
3. Never say a student is definitely selected. Distinguish: ELIGIBLE UNDER PUBLISHED RULES, POSSIBLE—VERIFY, and NOT YET / DOES NOT MATCH.
4. Deadlines are time-sensitive. Always tell the student to open the official source before applying.
5. Use simple English or natural simple Urdu with common English education terms. Do not use difficult Urdu.
6. Give concise but useful answers. When useful, finish with 2–4 next actions.
7. If the student asks for a comparison, show facts side-by-side without declaring a political/evaluative winner.
8. For current live availability, say TaleemAI's database has a verification date and the student should check the official page for the latest update.

VERIFIED SCHOLARSHIPS:
${JSON.stringify(scholarships)}

STUDY AFTER MATRIC:
${JSON.stringify(studyAfterMatric)}

GOVERNMENT RESOURCES:
${JSON.stringify(governmentResources)}

COLLEGES:
${JSON.stringify(colleges)}
`;

export async function POST(req:Request){
 try{
  const body=await req.json();
  const key=process.env.GEMINI_API_KEY;
  if(!key)return NextResponse.json({answer:'AI Mentor is not configured yet. You can still use the verified scholarship and education sections.'});
  const ai=new GoogleGenerativeAI(key);
  const model=ai.getGenerativeModel({model:process.env.GEMINI_MODEL||'gemini-2.5-flash'});
  const history=Array.isArray(body.history)?body.history.slice(-12):[];
  const transcript=history.map((m:any)=>`${m.role==='user'?'Student':'TaleemAI'}: ${String(m.text||'')}`).join('\n');
  const prompt=`${system}\n\nCURRENT STUDENT PROFILE:\n${JSON.stringify(body.profile||{})}\n\nCONVERSATION:\n${transcript}\n\nNEW STUDENT MESSAGE:\n${String(body.message||'')}`;
  const result=await model.generateContent(prompt);
  return NextResponse.json({answer:result.response.text(),verifiedAt:'29 September 2026'});
 }catch(error){
  console.error(error);
  return NextResponse.json({answer:'I could not connect to the AI right now. Please use the verified scholarship pages and official-source links on TaleemAI, then try the chat again.'});
 }
}
