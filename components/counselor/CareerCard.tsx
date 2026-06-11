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
            borderRadius: 20, padding: "22px 20px",
            position: "relative", overflow: "hidden",
        }}>
            {/* Rank badge */}
            <div style={{
                position: "absolute", top: 18, right: 18,
                width: 30, height: 30, borderRadius: "50%",
                background: rank === 1
                    ? "linear-gradient(135deg,#F59E0B,#EC4899)"
                    : rank === 2
                        ? "linear-gradient(135deg,#8B5CF6,#22D3EE)"
                        : "rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0,
            }}>
                {rank}
            </div>

            {/* Match + Risk badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14, paddingRight: 40 }}>
                <span style={{
                    padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.3)", color: "#C4B5FD",
                }}>
                    {career.matchScore}% match
                </span>
                <span style={{
                    padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    background: risk.bg, border: `1px solid ${risk.border}`, color: risk.color,
                }}>
                    {risk.label}
                </span>
            </div>

            {/* Title */}
            <h3 style={{
                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                fontSize: "clamp(17px,4vw,22px)", fontWeight: 800,
                color: "#EEEEFF", marginBottom: 4, letterSpacing: "-0.4px",
                lineHeight: 1.2, paddingRight: 40,
            }}>
                {career.title}
            </h3>
            <p style={{ fontSize: 12.5, color: "#6B6B8F", marginBottom: 14 }}>{career.field}</p>

            {/* Why match */}
            <p style={{
                fontSize: 13.5, color: "#9898B8", lineHeight: 1.72, marginBottom: 18,
                padding: "11px 14px",
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 12,
            }}>
                💡 {career.whyMatch}
            </p>

            {/* Salary — stacked on mobile */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8, marginBottom: 16,
            }}>
                <div style={{
                    padding: "12px", borderRadius: 12, textAlign: "center",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}>
                    <p style={{ fontSize: 9, color: "#6B6B8F", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>🇵🇰 Pakistan</p>
                    <p style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 11, fontWeight: 800, color: "#EEEEFF", lineHeight: 1.4 }}>
                        {career.salaryPKR}
                    </p>
                </div>
                <div style={{
                    padding: "12px", borderRadius: 12, textAlign: "center",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}>
                    <p style={{ fontSize: 9, color: "#6B6B8F", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>💻 Remote</p>
                    <p style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 11, fontWeight: 800, color: "#EEEEFF", lineHeight: 1.4 }}>
                        {career.salaryRemote}
                    </p>
                </div>
            </div>

            {/* Time to job */}
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 100, marginBottom: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: 12, color: "#9898B8",
            }}>
                ⏱ Time to job: <strong style={{ color: "#EEEEFF" }}>{career.timeToJob}</strong>
            </div>

            {/* Top Degrees */}
            <div style={{ marginBottom: 12 }}>
                <p style={{
                    fontSize: 10.5, color: "#6B6B8F", fontWeight: 700, marginBottom: 7,
                    textTransform: "uppercase", letterSpacing: "0.8px"
                }}>
                    Recommended Degrees
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {career.topDegrees.map(d => (
                        <span key={d} style={{
                            padding: "4px 12px", borderRadius: 100, fontSize: 11.5, fontWeight: 600,
                            background: "rgba(34,211,238,0.08)",
                            border: "1px solid rgba(34,211,238,0.2)", color: "#67E8F9",
                        }}>{d}</span>
                    ))}
                </div>
            </div>

            {/* Top Universities */}
            <div>
                <p style={{
                    fontSize: 10.5, color: "#6B6B8F", fontWeight: 700, marginBottom: 7,
                    textTransform: "uppercase", letterSpacing: "0.8px"
                }}>
                    Best Universities
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {career.topUniversities.map(u => (
                        <span key={u} style={{
                            padding: "4px 12px", borderRadius: 100, fontSize: 11.5, fontWeight: 500,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)", color: "#9898B8",
                        }}>{u}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}