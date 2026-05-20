import type { CSSProperties } from "react";
import { Sparkles, Search, Bot } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { TypingText } from "@/components/animations/TypingText";
import { TYPING_WORDS } from "@/constants/features";

const CHIPS = ["BSCS", "AI Engineering", "Cybersecurity", "Data Science"];

const FLOATING_BADGES = [
    {
        emoji: "🎓",
        title: "HEC Scholarship Open",
        sub: "Need-based · 2026 cycle",
        pulse: true,
        pos: { top: 20, right: -20 } as CSSProperties,
        anim: "floatCard1 4.5s ease-in-out infinite",
    },
    {
        emoji: "💻",
        title: "Career Match Found",
        sub: "Software Engineer · 96% fit",
        pulse: false,
        pos: { bottom: 80, right: -24 } as CSSProperties,
        anim: "floatCard2 5.5s ease-in-out 0.6s infinite",
    },
    {
        emoji: "🏆",
        title: "BUITEMS Admissions",
        sub: "Deadline · Aug 15, 2026",
        pulse: false,
        pos: { bottom: 110, left: -12 } as CSSProperties,
        anim: "floatCard3 4s ease-in-out 1.2s infinite",
    },
];

const TRUST_BADGES = [
    {
        text: "100% Free for Students",
        bg: "rgba(16,185,129,0.08)",
        border: "rgba(16,185,129,0.25)",
        color: "#6EE7B7",
        icon: "✅",
    },
    {
        text: "Built for Pakistan 🇵🇰",
        bg: "rgba(139,92,246,0.08)",
        border: "rgba(139,92,246,0.25)",
        color: "#C4B5FD",
        icon: "🛡️",
    },
    {
        text: "AI-Powered Guidance",
        bg: "rgba(34,211,238,0.07)",
        border: "rgba(34,211,238,0.2)",
        color: "#67E8F9",
        icon: "🤖",
    },
];

export function HeroSection() {
    return (
        <section
            style={{
                position: "relative",
                zIndex: 10,
                minHeight: "calc(100vh - 62px)",
                display: "flex",
                alignItems: "center",
                padding: "72px 24px 48px",
            }}
        >
            <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%" }}>
                <div className="hero-grid">

                    {/* ── LEFT COPY ── */}
                    <div>

                        <div className="fade-up-0" style={{ marginBottom: 28 }}>
                            <Badge color="purple" dot>
                                AI-POWERED PLATFORM FOR PAKISTANI STUDENTS
                            </Badge>
                        </div>

                        <h1
                            className="fade-up-1"
                            style={{
                                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                fontSize: "clamp(44px, 6vw, 64px)",
                                fontWeight: 800,
                                lineHeight: 1.04,
                                letterSpacing: "-2.5px",
                                marginBottom: 20,
                                color: "#EEEEFF",
                            }}
                        >
                            Your AI Guide to
                            <br />
                            <span className="gradient-text" style={{ display: "inline-block" }}>
                                Every Opportunity
                            </span>
                            <br />
                            in Pakistan
                        </h1>

                        <div
                            className="fade-up-2"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 20,
                            }}
                        >
                            <span style={{ color: "#6B6B8F", fontSize: 16, fontWeight: 400 }}>
                                Powered by AI for
                            </span>
                            <TypingText words={TYPING_WORDS} />
                        </div>

                        <p
                            className="fade-up-2"
                            style={{
                                color: "#7A7A9A",
                                fontSize: 15.5,
                                lineHeight: 1.82,
                                maxWidth: 490,
                                marginBottom: 38,
                            }}
                        >
                            Whether you just cleared Matric, FSC, or ICS — TaleemAI helps you
                            find the right degree, discover scholarships, and build skills that
                            actually pay. Built for every Pakistani student, especially those
                            from Balochistan.
                        </p>

                        <div
                            className="fade-up-3"
                            style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}
                        >
                            <Button variant="primary" size="lg">
                                <Sparkles size={16} /> Talk to AI Mentor
                            </Button>
                            <Button variant="ghost" size="lg">
                                <Search size={15} /> Explore Careers
                            </Button>
                        </div>

                        <div className="fade-up-4 trust-row">
                            {TRUST_BADGES.map((b) => (
                                <div
                                    key={b.text}
                                    className="trust-badge"
                                    style={{
                                        background: b.bg,
                                        borderColor: b.border,
                                        color: b.color,
                                    }}
                                >
                                    <span style={{ fontSize: 13 }}>{b.icon}</span>
                                    {b.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT VISUAL ── */}
                    <div
                        className="hero-visual"
                        style={{
                            position: "relative",
                            height: 540,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: 420, height: 420,
                                borderRadius: "50%",
                                pointerEvents: "none",
                                background: "radial-gradient(circle,rgba(139,92,246,0.16) 0%,transparent 68%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                width: 280, height: 280,
                                borderRadius: "50%",
                                pointerEvents: "none",
                                background: "radial-gradient(circle,rgba(34,211,238,0.1) 0%,transparent 68%)",
                            }}
                        />

                        {/* AI Chat Card */}
                        <GlassCard
                            padding="p-5"
                            style={{
                                width: 326,
                                position: "relative",
                                zIndex: 20,
                                animation: "floatY 7s ease-in-out infinite",
                                boxShadow: "0 30px 80px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.08)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
                                <div
                                    style={{
                                        width: 42, height: 42, borderRadius: 13, flexShrink: 0,
                                        background: "linear-gradient(135deg,#7C3AED,#22D3EE)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        boxShadow: "0 0 24px rgba(139,92,246,0.5)",
                                    }}
                                >
                                    <Bot size={21} color="#fff" />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: 14, fontWeight: 700, color: "#EEEEFF",
                                        fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                    }}>
                                        TaleemAI Mentor
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                                        <span style={{
                                            width: 6, height: 6, borderRadius: "50%",
                                            background: "#10B981", display: "inline-block",
                                            animation: "pulseDot 2s ease-in-out infinite",
                                        }} />
                                        <span style={{ fontSize: 10.5, color: "#10B981", fontWeight: 600 }}>
                                            Online · Always here for you
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <hr style={{
                                border: "none", height: 1, marginBottom: 16,
                                background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.3),rgba(34,211,238,0.3),transparent)",
                            }} />

                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                <div style={{
                                    maxWidth: 235, padding: "11px 15px",
                                    borderRadius: "14px 14px 14px 3px",
                                    fontSize: 12.5, lineHeight: 1.65, color: "#EEEEFF",
                                    background: "rgba(139,92,246,0.14)",
                                    border: "1px solid rgba(139,92,246,0.28)",
                                }}>
                                    I just finished FSC Pre-Engineering. What should I study?
                                </div>

                                <div style={{
                                    maxWidth: 250, padding: "11px 15px", alignSelf: "flex-end",
                                    borderRadius: "14px 14px 3px 14px",
                                    fontSize: 12.5, lineHeight: 1.65, color: "#EEEEFF",
                                    background: "rgba(34,211,238,0.09)",
                                    border: "1px solid rgba(34,211,238,0.22)",
                                }}>
                                    Great start! Based on your background, here are your top paths →
                                </div>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                                    {CHIPS.map((chip) => (
                                        <span key={chip} style={{
                                            padding: "4px 11px", borderRadius: 8,
                                            fontSize: 11, fontWeight: 600,
                                            background: "rgba(139,92,246,0.14)",
                                            border: "1px solid rgba(139,92,246,0.3)",
                                            color: "#C4B5FD", cursor: "pointer",
                                        }}>
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                display: "flex", alignItems: "center", gap: 8,
                                marginTop: 14, paddingTop: 12,
                                borderTop: "1px solid rgba(255,255,255,0.07)",
                            }}>
                                <div style={{ display: "flex", gap: 4 }}>
                                    {[0, 0.2, 0.4].map((delay, i) => (
                                        <span key={i} style={{
                                            width: 5, height: 5, borderRadius: "50%",
                                            background: "#A78BFA", display: "inline-block",
                                            animation: `dotPulse 1.4s ${delay}s ease-in-out infinite both`,
                                        }} />
                                    ))}
                                </div>
                                <span style={{ fontSize: 11, color: "#6B6B8F" }}>
                                    AI is analyzing your profile…
                                </span>
                            </div>
                        </GlassCard>

                        {/* Floating Badges */}
                        {FLOATING_BADGES.map((b) => (
                            <GlassCard
                                key={b.title}
                                padding="px-3.5 py-2.5"
                                style={{
                                    position: "absolute",
                                    ...b.pos,
                                    width: 212,
                                    zIndex: 30,
                                    animation: b.anim,
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ fontSize: 20, flexShrink: 0 }}>{b.emoji}</span>
                                    <div style={{ minWidth: 0 }}>
                                        <p style={{ fontSize: 11.5, fontWeight: 700, color: "#EEEEFF" }}>
                                            {b.title}
                                        </p>
                                        <p style={{ fontSize: 10, color: "#6B6B8F", marginTop: 2 }}>
                                            {b.sub}
                                        </p>
                                    </div>
                                    {b.pulse && (
                                        <span style={{
                                            width: 8, height: 8, borderRadius: "50%",
                                            background: "#10B981", flexShrink: 0, marginLeft: "auto",
                                            animation: "pulseDot 1.5s ease-in-out infinite",
                                        }} />
                                    )}
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}