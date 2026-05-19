import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                syne: ["var(--font-syne)", "sans-serif"],
                jakarta: ["var(--font-jakarta)", "sans-serif"],
            },
            colors: {
                brand: {
                    bg: "#05050F",
                    bg2: "#0A0A1C",
                    bg3: "#0F0F24",
                    purple: "#8B5CF6",
                    purpleL: "#A78BFA",
                    cyan: "#22D3EE",
                    cyanL: "#67E8F9",
                    green: "#10B981",
                    amber: "#F59E0B",
                    pink: "#EC4899",
                    indigo: "#6366F1",
                    text: "#EEEEFF",
                    muted: "#6B6B8F",
                    muted2: "#9898B8",
                },
            },
            animation: {
                "orb-drift-1": "orbDrift1 14s ease-in-out infinite",
                "orb-drift-2": "orbDrift2 18s ease-in-out infinite",
                "float-y": "floatY 7s ease-in-out infinite",
                "float-card-1": "floatCard1 4.5s ease-in-out infinite",
                "float-card-2": "floatCard2 5.5s ease-in-out 0.6s infinite",
                "float-card-3": "floatCard3 4s ease-in-out 1.2s infinite",
                "pulse-dot": "pulseDot 2s ease-in-out infinite",
                "shimmer": "shimmer 5s linear infinite",
                "blink": "blink 1s step-end infinite",
                "dot-pulse-1": "dotPulse 1.4s ease-in-out 0s infinite both",
                "dot-pulse-2": "dotPulse 1.4s ease-in-out 0.2s infinite both",
                "dot-pulse-3": "dotPulse 1.4s ease-in-out 0.4s infinite both",
            },
            keyframes: {
                orbDrift1: {
                    "0%,100%": { transform: "translate(0,0)" },
                    "40%": { transform: "translate(55px,-35px)" },
                    "70%": { transform: "translate(-25px,45px)" },
                },
                orbDrift2: {
                    "0%,100%": { transform: "translate(0,0)" },
                    "35%": { transform: "translate(-45px,55px)" },
                    "70%": { transform: "translate(65px,-25px)" },
                },
                floatY: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-14px)" },
                },
                floatCard1: {
                    "0%,100%": { transform: "translateY(0) rotate(-2.5deg)" },
                    "50%": { transform: "translateY(-10px) rotate(-2.5deg)" },
                },
                floatCard2: {
                    "0%,100%": { transform: "translateY(0) rotate(2deg)" },
                    "50%": { transform: "translateY(-13px) rotate(2deg)" },
                },
                floatCard3: {
                    "0%,100%": { transform: "translateY(0) rotate(-1deg)" },
                    "50%": { transform: "translateY(-8px) rotate(-1deg)" },
                },
                pulseDot: {
                    "0%,100%": { opacity: "0.6" },
                    "50%": { opacity: "1" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
                blink: {
                    "0%,49%": { opacity: "1" },
                    "50%,100%": { opacity: "0" },
                },
                dotPulse: {
                    "0%,80%,100%": { transform: "scale(0)", opacity: "0" },
                    "40%": { transform: "scale(1)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

export default config;