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
    const openBg = s.isOpen ? "rgba(16,185,129,0.1)" : "rgba(255,255,255,0.04)";
    const openCol = s.isOpen ? "#6EE7B7" : "#9898B8";
    const openBor = s.isOpen ? "rgba(16,185,129,0.25)" : "rgba(255,255,255,0.08)";
    const dotCol = s.isOpen ? "#10B981" : "#6B6B8F";
    const openLbl = s.isOpen ? "Open Now" : "Closed";

    return (
        <div
            style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "22px 24px",
                marginBottom: 0,
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: openBg, color: openCol, border: "1px solid " + openBor }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: dotCol }} />
                            {openLbl}
                        </span>
                        <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: tStyle.bg, color: tStyle.text, border: "1px solid " + tStyle.border }}>
                            {tStyle.label}
                        </span>
                        <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: "rgba(255,255,255,0.04)", color: "#9898B8", border: "1px solid rgba(255,255,255,0.08)" }}>
                            {s.country}
                        </span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 16, fontWeight: 700, color: "#EEEEFF", marginBottom: 3, lineHeight: 1.3 }}>
                        {s.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#6B6B8F" }}>{s.provider}</p>
                </div>
                <div style={{ padding: "10px 14px", borderRadius: 12, textAlign: "center", flexShrink: 0, minWidth: 110, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)" }}>
                    <p style={{ fontSize: 10, color: "#6B6B8F", marginBottom: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Amount</p>
                    <p style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 11.5, fontWeight: 800, color: "#C4B5FD", lineHeight: 1.4 }}>
                        {s.amount}
                    </p>
                </div>
            </div>

            <p style={{ fontSize: 13.5, color: "#8888AA", lineHeight: 1.75, marginBottom: 16, borderLeft: "2px solid rgba(139,92,246,0.3)", paddingLeft: 14 }}>
                {s.description}
            </p>


            <a href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 10, textDecoration: "none", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", color: "#C4B5FD", fontSize: 13, fontWeight: 700 }}
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
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* Personal Message */}
            <div style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.13),rgba(34,211,238,0.07))", border: "1px solid rgba(139,92,246,0.25)", borderRadius: 22, padding: "28px 32px", marginBottom: 44, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 13, flexShrink: 0, background: "linear-gradient(135deg,#7C3AED,#22D3EE)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🤖</div>
                    <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#C4B5FD", fontFamily: "var(--font-syne,'Syne',sans-serif)" }}>TaleemAI Mentor</p>
                        <p style={{ fontSize: 11.5, color: "#6B6B8F" }}>Personalized report for {profile.city}</p>
                    </div>
                </div>
                <p style={{ fontSize: 15.5, color: "#EEEEFF", lineHeight: 1.82, position: "relative", zIndex: 1 }}>
                    {result.personalMessage}
                </p>
            </div>

            {/* Career Matches */}
            <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 24, fontWeight: 800, color: "#EEEEFF", marginBottom: 6, letterSpacing: "-0.5px" }}>
                    🎯 Your Top Career Matches
                </h2>
                <p style={{ color: "#6B6B8F", fontSize: 14, marginBottom: 22 }}>
                    Ranked by how well they match your education, interests, and situation.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {(result.careers || []).map((career, i) => (
                        <CareerCard key={i} career={career} rank={i + 1} />
                    ))}
                </div>
            </div>

            {/* Pakistani Scholarships */}
            {(result.localScholarships || []).length > 0 && (
                <div style={{ marginBottom: 40 }}>
                    <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 22, fontWeight: 800, color: "#EEEEFF", marginBottom: 6 }}>
                        🎓 Pakistani Scholarships For You
                    </h2>
                    <p style={{ color: "#6B6B8F", fontSize: 14, marginBottom: 20 }}>
                        Real scholarships with direct apply links.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {(result.localScholarships || []).map((s, i) => (
                            <ScholarshipCard key={i} s={s} />
                        ))}
                    </div>
                </div>
            )}

            {/* International Scholarships */}
            {(result.intlScholarships || []).length > 0 && (
                <div style={{ marginBottom: 40 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, padding: "14px 20px", borderRadius: 16, background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)" }}>
                        <span style={{ fontSize: 24 }}>✈️</span>
                        <div>
                            <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 20, fontWeight: 800, color: "#EEEEFF", marginBottom: 2 }}>
                                Study Abroad — Fully Funded
                            </h2>
                            <p style={{ color: "#8888AA", fontSize: 13 }}>
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

            {/* Roadmap */}
            <div style={{ marginBottom: 44 }}>
                <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 22, fontWeight: 800, color: "#EEEEFF", marginBottom: 6 }}>
                    🗺️ Your Step-by-Step Roadmap
                </h2>
                <p style={{ color: "#6B6B8F", fontSize: 14, marginBottom: 24 }}>
                    Follow this path. Your future gets clearer every single day.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {(result.roadmap || []).map((step, i) => {
                        const col = roadmapColors[i % roadmapColors.length];
                        const next = roadmapColors[(i + 1) % roadmapColors.length];
                        const isLast = i === (result.roadmap || []).length - 1;
                        return (
                            <div key={i} style={{ display: "flex", gap: 0 }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 20, flexShrink: 0 }}>
                                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg," + col + "," + next + ")", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 16, fontWeight: 800, color: "#fff", zIndex: 1 }}>
                                        {i + 1}
                                    </div>
                                    {!isLast && (
                                        <div style={{ width: 2, flex: 1, minHeight: 24, background: "linear-gradient(" + col + "," + next + ")", opacity: 0.25, marginTop: 4 }} />
                                    )}
                                </div>
                                <div style={{ flex: 1, paddingBottom: isLast ? 0 : 28 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                                        <h3 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 16, fontWeight: 700, color: "#EEEEFF" }}>
                                            {step.title}
                                        </h3>
                                        <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: "rgba(255,255,255,0.06)", color: "#6B6B8F" }}>
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: 14, color: "#8888AA", lineHeight: 1.75, marginBottom: 12, padding: "12px 16px", borderRadius: 12, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                        {step.description}
                                    </p>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                                        {(step.actions || []).map((action, j) => (
                                            <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#9898B8" }}>
                                                <span style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0, background: col + "20", border: "1px solid " + col + "40", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: col, fontWeight: 800, marginTop: 2 }}>✓</span>
                                                {action}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Quick Wins */}
            <div style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 22, padding: "28px 32px", marginBottom: 40 }}>
                <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 20, fontWeight: 800, color: "#EEEEFF", marginBottom: 6 }}>
                    ⚡ Start This Week
                </h2>
                <p style={{ color: "#6B6B8F", fontSize: 13.5, marginBottom: 20 }}>
                    No money. No degree. No waiting. Do these RIGHT NOW.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {(result.quickWins || []).map((win, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 18px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)" }}>
                            <span style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,#7C3AED,#22D3EE)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 11, fontWeight: 800, color: "#fff", marginTop: 1 }}>
                                {i + 1}
                            </span>
                            <p style={{ fontSize: 14.5, color: "#C4B5FD", lineHeight: 1.72, fontWeight: 500 }}>
                                {win}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reset */}
            <div style={{ textAlign: "center", paddingBottom: 48 }}>
                <p style={{ color: "#6B6B8F", fontSize: 13.5, marginBottom: 16 }}>
                    Want to explore a different path?
                </p>
                <button onClick={onReset} className="btn-ghost btn-md">
                    ← Start Over With a New Profile
                </button>
            </div>

        </div>
    );
}