import type { AIReportResult, StudentProfile, ScholarshipResult } from "@/types";
import { CareerCard } from "./CareerCard";

const TYPE_STYLE: Record<string, { bg: string; border: string; text: string; label: string }> = {
    "need-based": { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)", text: "#C4B5FD", label: "Need-Based" },
    "merit": { bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)", text: "#67E8F9", label: "Merit" },
    "fully-funded": { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", text: "#6EE7B7", label: "Fully Funded" },
    "provincial": { bg: "rgba(236,72,153,0.1)", border: "rgba(236,72,153,0.3)", text: "#F9A8D4", label: "Provincial" },
    "international": { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", text: "#FCD34D", label: "International" },
};

function ScholarshipCard(props: { s: ScholarshipResult }) {
    const s = props.s;
    const tStyle = TYPE_STYLE[s.type] || TYPE_STYLE["need-based"];

    return (
        <div style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 18,
            padding: "20px",
            overflow: "hidden",
        }}>

            {/* Status + Type + Country badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                <span style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    background: s.isOpen ? "rgba(16,185,129,0.1)" : "rgba(255,255,255,0.04)",
                    color: s.isOpen ? "#6EE7B7" : "#9898B8",
                    border: `1px solid ${s.isOpen ? "rgba(16,185,129,0.25)" : "rgba(255,255,255,0.08)"}`,
                }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.isOpen ? "#10B981" : "#6B6B8F" }} />
                    {s.isOpen ? "Open Now" : "Closed"}
                </span>
                <span style={{
                    padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    background: tStyle.bg, color: tStyle.text, border: `1px solid ${tStyle.border}`,
                }}>
                    {tStyle.label}
                </span>
                <span style={{
                    padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    background: "rgba(255,255,255,0.04)", color: "#9898B8",
                    border: "1px solid rgba(255,255,255,0.08)",
                }}>
                    🌍 {s.country}
                </span>
            </div>

            {/* Amount — full width on mobile */}
            <div style={{
                padding: "10px 14px", borderRadius: 12, marginBottom: 12,
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
            }}>
                <p style={{ fontSize: 10, color: "#6B6B8F", marginBottom: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Amount
                </p>
                <p style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: 13, fontWeight: 800, color: "#C4B5FD", lineHeight: 1.4,
                    wordBreak: "break-word",
                }}>
                    {s.amount}
                </p>
            </div>

            {/* Title + Provider */}
            <h3 style={{
                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                fontSize: "clamp(14px,3.5vw,16px)", fontWeight: 700,
                color: "#EEEEFF", marginBottom: 3, lineHeight: 1.3,
            }}>
                {s.title}
            </h3>
            <p style={{ fontSize: 12.5, color: "#6B6B8F", marginBottom: 12 }}>{s.provider}</p>

            {/* Description */}
            <p style={{
                fontSize: 13.5, color: "#8888AA", lineHeight: 1.75,
                marginBottom: 16,
                borderLeft: "2px solid rgba(139,92,246,0.3)",
                paddingLeft: 14,
            }}>
                {s.description}
            </p>

            {/* Apply link */}

            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "9px 18px", borderRadius: 10, textDecoration: "none",
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#C4B5FD", fontSize: 13, fontWeight: 700,
            }}
      >
            Apply / Learn More →
        </a>
    </div >
  );
}

interface Props {
    result: AIReportResult;
    profile: StudentProfile;
    onReset: () => void;
}

export function ResultsView(props: Props) {
    const result = props.result;
    const profile = props.profile;
    const onReset = props.onReset;

    const roadmapColors = ["#7C3AED", "#22D3EE", "#10B981", "#F59E0B"];

    return (
        <div style={{ maxWidth: 860, margin: "0 auto", overflowX: "hidden" }}>

            {/* ── Personal Message ── */}
            <div style={{
                background: "linear-gradient(135deg,rgba(124,58,237,0.13),rgba(34,211,238,0.07))",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: 22, padding: "24px 20px", marginBottom: 36,
                position: "relative", overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", top: -50, right: -50, width: 200, height: 200,
                    borderRadius: "50%", pointerEvents: "none",
                    background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)",
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{
                        width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                        background: "linear-gradient(135deg,#7C3AED,#22D3EE)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 20,
                    }}>🤖</div>
                    <div>
                        <p style={{
                            fontSize: 14, fontWeight: 700, color: "#C4B5FD",
                            fontFamily: "var(--font-syne,'Syne',sans-serif)",
                        }}>
                            TaleemAI Mentor
                        </p>
                        <p style={{ fontSize: 11.5, color: "#6B6B8F" }}>
                            Personalized report for {profile.city}
                        </p>
                    </div>
                </div>
                <p style={{
                    fontSize: "clamp(14px,3.5vw,15.5px)",
                    color: "#EEEEFF", lineHeight: 1.82,
                    position: "relative", zIndex: 1,
                }}>
                    {result.personalMessage}
                </p>
            </div>

            {/* ── Career Matches ── */}
            <div style={{ marginBottom: 40 }}>
                <h2 style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: "clamp(20px,5vw,24px)", fontWeight: 800,
                    color: "#EEEEFF", marginBottom: 6, letterSpacing: "-0.5px",
                }}>
                    🎯 Your Top Career Matches
                </h2>
                <p style={{ color: "#6B6B8F", fontSize: 14, marginBottom: 20 }}>
                    Ranked by how well they match your education, interests, and situation.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {(result.careers || []).map((career, i) => (
                        <CareerCard key={i} career={career} rank={i + 1} />
                    ))}
                </div>
            </div>

            {/* ── Pakistani Scholarships ── */}
            {(result.localScholarships || []).length > 0 && (
                <div style={{ marginBottom: 36 }}>
                    <h2 style={{
                        fontFamily: "var(--font-syne,'Syne',sans-serif)",
                        fontSize: "clamp(18px,5vw,22px)", fontWeight: 800,
                        color: "#EEEEFF", marginBottom: 6,
                    }}>
                        🎓 Pakistani Scholarships For You
                    </h2>
                    <p style={{ color: "#6B6B8F", fontSize: 14, marginBottom: 18 }}>
                        Real scholarships with direct apply links.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {(result.localScholarships || []).map((s, i) => (
                            <ScholarshipCard key={i} s={s} />
                        ))}
                    </div>
                </div>
            )}

            {/* ── International Scholarships ── */}
            {(result.intlScholarships || []).length > 0 && (
                <div style={{ marginBottom: 36 }}>
                    {/* Header */}
                    <div style={{
                        display: "flex", flexWrap: "wrap", alignItems: "flex-start",
                        gap: 10, marginBottom: 18, padding: "14px 16px", borderRadius: 16,
                        background: "rgba(245,158,11,0.07)",
                        border: "1px solid rgba(245,158,11,0.2)",
                    }}>
                        <span style={{ fontSize: 22, flexShrink: 0 }}>✈️</span>
                        <div style={{ minWidth: 0 }}>
                            <h2 style={{
                                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                fontSize: "clamp(16px,4vw,20px)", fontWeight: 800,
                                color: "#EEEEFF", marginBottom: 4, lineHeight: 1.2,
                            }}>
                                Study Abroad — Fully Funded
                            </h2>
                            <p style={{ color: "#8888AA", fontSize: 13, lineHeight: 1.5 }}>
                                These cover tuition, housing, flights, and monthly allowance.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {(result.intlScholarships || []).map((s, i) => (
                            <ScholarshipCard key={i} s={s} />
                        ))}
                    </div>
                </div>
            )}

            {/* ── Roadmap ── */}
            <div style={{ marginBottom: 40 }}>
                <h2 style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: "clamp(18px,5vw,22px)", fontWeight: 800,
                    color: "#EEEEFF", marginBottom: 6,
                }}>
                    🗺️ Your Step-by-Step Roadmap
                </h2>
                <p style={{ color: "#6B6B8F", fontSize: 14, marginBottom: 22 }}>
                    Follow this path. Your future gets clearer every single day.
                </p>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    {(result.roadmap || []).map((step, i) => {
                        const col = roadmapColors[i % roadmapColors.length];
                        const next = roadmapColors[(i + 1) % roadmapColors.length];
                        const isLast = i === (result.roadmap || []).length - 1;

                        return (
                            <div key={i} style={{ display: "flex", gap: 0 }}>

                                {/* Timeline */}
                                <div style={{
                                    display: "flex", flexDirection: "column",
                                    alignItems: "center", marginRight: 16, flexShrink: 0,
                                }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: "50%",
                                        background: `linear-gradient(135deg,${col},${next})`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                        fontSize: 15, fontWeight: 800, color: "#fff",
                                        zIndex: 1, flexShrink: 0,
                                    }}>
                                        {i + 1}
                                    </div>
                                    {!isLast && (
                                        <div style={{
                                            width: 2, flex: 1, minHeight: 20,
                                            background: `linear-gradient(${col},${next})`,
                                            opacity: 0.25, marginTop: 4,
                                        }} />
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{
                                    flex: 1, minWidth: 0,
                                    paddingBottom: isLast ? 0 : 24,
                                }}>
                                    <div style={{
                                        display: "flex", flexWrap: "wrap",
                                        alignItems: "center", gap: 8, marginBottom: 8,
                                    }}>
                                        <h3 style={{
                                            fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                            fontSize: "clamp(14px,3.5vw,16px)",
                                            fontWeight: 700, color: "#EEEEFF",
                                        }}>
                                            {step.title}
                                        </h3>
                                        <span style={{
                                            padding: "2px 10px", borderRadius: 100,
                                            fontSize: 11, fontWeight: 600,
                                            background: "rgba(255,255,255,0.06)", color: "#6B6B8F",
                                            whiteSpace: "nowrap",
                                        }}>
                                            {step.duration}
                                        </span>
                                    </div>

                                    <p style={{
                                        fontSize: 13.5, color: "#8888AA", lineHeight: 1.75,
                                        marginBottom: 12, padding: "11px 14px", borderRadius: 12,
                                        background: "rgba(255,255,255,0.025)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        wordBreak: "break-word",
                                    }}>
                                        {step.description}
                                    </p>

                                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                                        {(step.actions || []).map((action, j) => (
                                            <div key={j} style={{
                                                display: "flex", alignItems: "flex-start", gap: 9,
                                                fontSize: 13, color: "#9898B8",
                                            }}>
                                                <span style={{
                                                    width: 17, height: 17, borderRadius: "50%", flexShrink: 0,
                                                    background: `${col}20`, border: `1px solid ${col}40`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: 8, color: col, fontWeight: 800, marginTop: 2,
                                                }}>✓</span>
                                                <span style={{ wordBreak: "break-word", flex: 1 }}>{action}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Quick Wins ── */}
            <div style={{
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 22, padding: "24px 20px", marginBottom: 36,
            }}>
                <h2 style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: "clamp(17px,4.5vw,20px)", fontWeight: 800,
                    color: "#EEEEFF", marginBottom: 6,
                }}>
                    ⚡ Start This Week
                </h2>
                <p style={{ color: "#6B6B8F", fontSize: 13.5, marginBottom: 18 }}>
                    No money. No degree. No waiting. Do these RIGHT NOW.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {(result.quickWins || []).map((win, i) => (
                        <div key={i} style={{
                            display: "flex", alignItems: "flex-start", gap: 12,
                            padding: "12px 16px", borderRadius: 14,
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(139,92,246,0.15)",
                        }}>
                            <span style={{
                                width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                                background: "linear-gradient(135deg,#7C3AED,#22D3EE)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                                fontSize: 11, fontWeight: 800, color: "#fff", marginTop: 1,
                            }}>
                                {i + 1}
                            </span>
                            <p style={{
                                fontSize: "clamp(13px,3.5vw,14.5px)",
                                color: "#C4B5FD", lineHeight: 1.72,
                                fontWeight: 500, wordBreak: "break-word", flex: 1,
                            }}>
                                {win}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Reset ── */}
            <div style={{ textAlign: "center", paddingBottom: 48 }}>
                <p style={{ color: "#6B6B8F", fontSize: 13.5, marginBottom: 14 }}>
                    Want to explore a different path?
                </p>
                <button onClick={onReset} className="btn-ghost btn-md">
                    ← Start Over With a New Profile
                </button>
            </div>

        </div>
    );
}