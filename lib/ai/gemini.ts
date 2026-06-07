import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in .env.local");
}

export const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const flashModel = gemini.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
  generationConfig: {
    temperature:     0.7,
    maxOutputTokens: 2048,
  },
});