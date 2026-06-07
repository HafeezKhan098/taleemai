import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/ai/gemini";
import { buildCounselorPrompt } from "@/lib/ai/prompts";
import { SCHOLARSHIPS } from "@/data/scholarships";
import type { StudentProfile } from "@/types";

export async function POST(req: NextRequest) {
    try {
        const profile: StudentProfile = await req.json();

        if (!profile.education || !profile.city) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = buildCounselorPrompt(profile);
        console.log("Sending prompt, length:", prompt.length);

        const text = await generateWithRetry(prompt);
        console.log("Raw AI response (first 300 chars):", text.slice(0, 300));
        // Retry helper — tries up to 3 times if model is overloaded
        async function generateWithRetry(prompt: string, maxRetries = 3) {
            for (let attempt = 1; attempt <= maxRetries; attempt++) {
                try {
                    const result = await flashModel.generateContent(prompt);
                    return result.response.text();
                } catch (err: unknown) {
                    const message = err instanceof Error ? err.message : "";
                    const isOverloaded = message.includes("503") || message.includes("overloaded") || message.includes("high demand");
                    const isQuota = message.includes("429") || message.includes("quota");

                    if ((isOverloaded || isQuota) && attempt < maxRetries) {
                        const wait = attempt * 3000; // 3s, 6s, 9s
                        console.log(`Attempt ${attempt} failed (${isOverloaded ? "overloaded" : "quota"}). Retrying in ${wait / 1000}s...`);
                        await new Promise(r => setTimeout(r, wait));
                        continue;
                    }
                    throw err;
                }
            }
            throw new Error("All retry attempts failed");
        }

        // Clean markdown wrappers
        const cleaned = text.replace(/```json\n?/gi, "").replace(/```\n?/gi, "").trim();
        const jsonStart = cleaned.indexOf("{");
        const jsonEnd = cleaned.lastIndexOf("}");

        if (jsonStart === -1 || jsonEnd === -1) {
            console.error("No JSON in response:", cleaned.slice(0, 500));
            return NextResponse.json(
                { error: "AI returned unexpected format. Please try again." },
                { status: 500 }
            );
        }

        let parsed;
        try {
            parsed = JSON.parse(cleaned.slice(jsonStart, jsonEnd + 1));
        } catch (parseErr) {
            console.error("JSON parse error:", parseErr);
            console.error("JSON string:", cleaned.slice(jsonStart, jsonEnd + 1).slice(0, 500));
            return NextResponse.json(
                { error: "AI response could not be parsed. Please try again." },
                { status: 500 }
            );
        }

        const isBalochistan = ["Quetta", "Gwadar"].includes(profile.city);
        const isLowBudget = ["very-low", "low"].includes(profile.budget);

        // Local scholarships
        const localScholarships = SCHOLARSHIPS
            .filter(s => s.country === "Pakistan")
            .filter(s => {
                if (isBalochistan && s.tags.includes("Balochistan")) return true;
                if (isLowBudget && s.type === "need-based") return true;
                if (["hec-need-based", "ehsaas-ug"].includes(s.id)) return true;
                return false;
            })
            .slice(0, 5)
            .map(s => ({
                title: s.title, provider: s.provider, amount: s.amount,
                country: s.country, type: s.type, description: s.description,
                link: s.link, isOpen: s.isOpen, tags: s.tags, color: s.color,
            }));

        // International scholarships
        const intlScholarships = SCHOLARSHIPS
            .filter(s => s.type === "fully-funded")
            .slice(0, 4)
            .map(s => ({
                title: s.title, provider: s.provider, amount: s.amount,
                country: s.country, type: s.type, description: s.description,
                link: s.link, isOpen: s.isOpen, tags: s.tags, color: s.color,
            }));

        console.log("Success — returning result");

        return NextResponse.json({
            ...parsed,
            localScholarships,
            intlScholarships,
        });

    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("AI Counsel Error:", message);
        return NextResponse.json(
            { error: `Request failed: ${message}` },
            { status: 500 }
        );
    }
}