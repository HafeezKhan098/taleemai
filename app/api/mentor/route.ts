import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const key = process.env.GEMINI_API_KEY;

        if (!key) {
            return NextResponse.json(
                { error: "GEMINI_API_KEY is not configured." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(key);

        const model = genAI.getGenerativeModel({
            model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
        });

        const result = await model.generateContent(body.prompt);

        return NextResponse.json({
            response: result.response.text(),
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Something went wrong with the AI Mentor." },
            { status: 500 }
        );
    }
}