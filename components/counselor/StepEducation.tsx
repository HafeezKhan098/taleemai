import type { EducationLevel } from "@/types";

const OPTIONS: { value: EducationLevel; label: string; sub: string; icon: string }[] = [
    { value: "matric", label: "Matric", sub: "Grade 10 complete", icon: "📚" },
    { value: "fsc-pre-medical", label: "FSC Pre-Medical", sub: "Biology, Chemistry, Physics", icon: "🔬" },
    { value: "fsc-pre-engineering", label: "FSC Pre-Engineering", sub: "Math, Physics, Chemistry", icon: "⚙️" },
    { value: "ics", label: "ICS", sub: "Computer Science", icon: "💻" },
    { value: "fa", label: "FA", sub: "Arts / Humanities", icon: "🎭" },
    { value: "icom", label: "ICOM", sub: "Commerce / Accounts", icon: "📊" },
    { value: "bachelor", label: "Bachelor's Degree", sub: "Already graduated", icon: "🎓" },
];

interface Props {
    value: string;
    onChange: (val: EducationLevel) => void;
}

export function StepEducation({ value, onChange }: Props) {
    return (
        <div>
            <h2 style={{
                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                fontSize: "clamp(22px,4vw,30px)", fontWeight: 800,
                color: "#EEEEFF", marginBottom: 8, letterSpacing: "-0.8px",
            }}>
                What is your education level?
            </h2>
            <p style={{ color: "#7A7A9A", fontSize: 15, marginBottom: 28 }}>
                This helps us understand which career paths are open to you right now.
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 12,
            }}>
                {OPTIONS.map(opt => {
                    const selected = value === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => onChange(opt.value)}
                            style={{
                                display: "flex", flexDirection: "column", alignItems: "flex-start",
                                gap: 6, padding: "16px 18px", borderRadius: 16, cursor: "pointer",
                                border: `1.5px solid ${selected ? "rgba(139,92,246,0.7)" : "rgba(255,255,255,0.08)"}`,
                                background: selected
                                    ? "rgba(139,92,246,0.15)"
                                    : "rgba(255,255,255,0.025)",
                                transition: "all 0.2s ease",
                                textAlign: "left", width: "100%",
                                boxShadow: selected ? "0 0 20px rgba(139,92,246,0.2)" : "none",
                            }}
                            onMouseEnter={e => {
                                if (!selected) {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                                }
                            }}
                            onMouseLeave={e => {
                                if (!selected) {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                                }
                            }}
                        >
                            <span style={{ fontSize: 24 }}>{opt.icon}</span>
                            <div>
                                <p style={{
                                    fontSize: 14, fontWeight: 700,
                                    color: selected ? "#C4B5FD" : "#EEEEFF",
                                    marginBottom: 2,
                                }}>
                                    {opt.label}
                                </p>
                                <p style={{ fontSize: 12, color: "#6B6B8F" }}>{opt.sub}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}