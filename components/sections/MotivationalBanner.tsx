import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MotivationalBanner() {
    return (
        <section style={{ position: "relative", zIndex: 10, padding: "0 24px 96px" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto" }}>

                {/* Gradient divider top */}
                <hr style={{
                    border: "none", height: 1, marginBottom: 64,
                    background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(34,211,238,0.3), transparent)",
                }} />

                <div style={{
                    position: "relative", overflow: "hidden",
                    borderRadius: 28, padding: "64px 56px",
                    border: "1px solid rgba(139,92,246,0.2)",
                    background: "linear-gradient(135deg, rgba(124,58,237,0.13) 0%, rgba(34,211,238,0.07) 100%)",
                }}>
                    {/* Glow blobs */}
                    <div style={{
                        position: "absolute", top: -100, right: -80, width: 360, height: 360,
                        borderRadius: "50%", pointerEvents: "none",
                        background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)"
                    }} />
                    <div style={{
                        position: "absolute", bottom: -80, left: -60, width: 280, height: 280,
                        borderRadius: "50%", pointerEvents: "none",
                        background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)"
                    }} />

                    {/* Dot grid inside banner */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "28px 28px", borderRadius: 28,
                    }} />

                    <div style={{
                        position: "relative", zIndex: 1,
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", gap: 40, flexWrap: "wrap",
                    }}>
                        {/* Left — Copy */}
                        <div style={{ maxWidth: 540 }}>
                            {/* Small eyebrow */}
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 7,
                                padding: "5px 14px", borderRadius: 100, marginBottom: 18,
                                background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
                            }}>
                                <span style={{
                                    width: 6, height: 6, borderRadius: "50%", background: "#A78BFA",
                                    animation: "pulseDot 2s infinite"
                                }} />
                                <span style={{ fontSize: 11, color: "#C4B5FD", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                                    For Every Student
                                </span>
                            </div>

                            {/* Big emotional heading */}
                            <h2 style={{
                                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                fontSize: "clamp(26px, 4vw, 40px)",
                                fontWeight: 800, letterSpacing: "-1px",
                                lineHeight: 1.1, marginBottom: 16, color: "#EEEEFF",
                            }}>
                                You are not lost<br />
                                <span className="gradient-text">anymore.</span>
                            </h2>

                            <p style={{ color: "#8888AA", fontSize: 15.5, lineHeight: 1.82 }}>
                                TaleemAI was built because every student in Pakistan deserves the
                                guidance that only privileged students used to get. Your background
                                does not define your future — your next decision does.
                            </p>

                            {/* Social proof row */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 24 }}>
                                {[
                                    { label: "No signup required" },
                                    { label: "No ads or spam" },
                                    { label: "Free forever" },
                                ].map(item => (
                                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                                        <div style={{
                                            width: 16, height: 16, borderRadius: "50%",
                                            background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)",
                                            display: "flex", alignItems: "center", justifyContent: "center"
                                        }}>
                                            <span style={{ fontSize: 8, color: "#10B981" }}>✓</span>
                                        </div>
                                        <span style={{ fontSize: 13, color: "#9898B8", fontWeight: 500 }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — CTA */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, flexShrink: 0 }}>
                            <Button variant="primary" size="lg">
                                <Sparkles size={16} /> Get Your Free Career Report
                            </Button>
                            <button style={{
                                display: "flex", alignItems: "center", gap: 6,
                                background: "none", border: "none", cursor: "pointer",
                                color: "#9898B8", fontSize: 13, fontWeight: 500,
                                transition: "color 0.2s",
                            }}>
                                See how it works <ArrowRight size={13} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}