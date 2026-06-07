import type { CareerRecommendation } from "@/types";

const RISK_CONFIG = {
    low: { label: "Low AI Risk", color: "#10B981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)" },
    medium: { label: "Medium AI Risk", color: "#F59E0B", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
    high: { label: "High AI Risk", color: "#EC4899", bg: "rgba(236,72,153,0.1)", border: "rgba(236,72,153,0.25)" },
};

interface Props {
    career: CareerRecommendation;
    rank: number;
}

export function CareerCard({ career, rank }: Props) {
    const risk = RISK_CONFIG[career.aiRisk];

    return (
        <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, padding: 28,
            position: "relative", overflow: "hidden",
            transition: "all 0.3s ease",
        }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
        >
            {/* Rank badge */}
            <div style={{
                position: "absolute", top: 20, right: 20,
                width: 32, height: 32, borderRadius: "50%",
                background: rank === 1 ? "linear-gradient(135deg,#F59E0B,#EC4899)"
                    : rank === 2 ? "linear-gradient(135deg,#8B5CF6,#22D3EE)"
                        : "rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 800, color: "#fff",
            }}>
                {rank}
            </div>

            {/* Match score */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                    padding: "4px 12px", borderRadius: 100,
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.3)",
                    fontSize: 12, fontWeight: 700, color: "#C4B5FD",
                }}>
                    {career.matchScore}% match
                </div>
                <div style={{
                    padding: "4px 12px", borderRadius: 100,
                    background: risk.bg, border: `1px solid ${risk.border}`,
                    fontSize: 12, fontWeight: 700, color: risk.color,
                }}>
                    {risk.label}
                </div>
            </div>

            {/* Title */}
            <h3 style={{
                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                fontSize: 20, fontWeight: 800,
                color: "#EEEEFF", marginBottom: 4, letterSpacing: "-0.5px",
            }}>
                {career.title}
            </h3>
            <p style={{ fontSize: 13, color: "#6B6B8F", marginBottom: 14 }}>{career.field}</p>

            {/* Why match */}
            <p style={{
                fontSize: 14, color: "#9898B8", lineHeight: 1.72,
                marginBottom: 20, padding: "12px 16px",
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 12,
            }}>
                💡 {career.whyMatch}
            </p>

            {/* Salary grid */}
            <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10, marginBottom: 20,
            }}>
                {[
                    { label: "Pakistan Salary", value: career.salaryPKR, icon: "🇵🇰" },
                    { label: "Remote/Freelance", value: career.salaryRemote, icon: "💻" },
                    { label: "Time to Job", value: career.timeToJob, icon: "⏱️" },
                ].map(item => (
                    <div key={item.label} style={{
                        padding: "12px", borderRadius: 12, textAlign: "center",
                        background: "rgba(255,255,255,0.035)",
                        border: "1px solid rgba(255,255,255,0.07)",
                    }}>
                        <p style={{ fontSize: 16, marginBottom: 4 }}>{item.icon}</p>
                        <p style={{
                            fontFamily: "var(--font-syne,'Syne',sans-serif)",
                            fontSize: 11.5, fontWeight: 700, color: "#EEEEFF",
                            marginBottom: 3, lineHeight: 1.3,
                        }}>
                            {item.value}
                        </p>
                        <p style={{ fontSize: 10, color: "#6B6B8F" }}>{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Top degrees */}
            <div style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 12, color: "#6B6B8F", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    Recommended Degrees
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {career.topDegrees.map(d => (
                        <span key={d} style={{
                            padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                            background: "rgba(34,211,238,0.08)",
                            border: "1px solid rgba(34,211,238,0.2)",
                            color: "#67E8F9",
                        }}>{d}</span>
                    ))}
                </div>
            </div>

            {/* Top universities */}
            <div>
                <p style={{ fontSize: 12, color: "#6B6B8F", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    Best Universities
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {career.topUniversities.map(u => (
                        <span key={u} style={{
                            padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#9898B8",
                        }}>{u}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}