import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TaleemAI — Your AI Career Counselor for Pakistan",
  description: "Discover careers, scholarships, degrees, and online earning skills. AI-powered guidance for every Pakistani student — especially those from Balochistan.",
  keywords: ["Pakistan scholarships", "career guidance Pakistan", "Balochistan students", "AI education", "HEC scholarships", "BBISE", "degree explorer Pakistan"],
  authors: [{ name: "TaleemAI" }],
  openGraph: {
    title: "TaleemAI — Your AI Career Counselor for Pakistan",
    description: "AI-powered career, scholarship, and degree guidance for Pakistani students.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}