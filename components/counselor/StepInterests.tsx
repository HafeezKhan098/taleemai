const INTEREST_OPTIONS = [
    { label: "Computers & Coding", icon: "💻" },
    { label: "Medicine & Health", icon: "🏥" },
    { label: "Business & Finance", icon: "📈" },
    { label: "Science & Research", icon: "🔬" },
    { label: "Design & Creativity", icon: "🎨" },
    { label: "Teaching & Education", icon: "📚" },
    { label: "Law & Justice", icon: "⚖️" },
    { label: "Engineering", icon: "⚙️" },
    { label: "Media & Content", icon: "📱" },
    { label: "Helping People", icon: "🤝" },
    { label: "Mathematics", icon: "➗" },
    { label: "Entrepreneurship", icon: "🚀" },
];

const SKILL_OPTIONS = [
    "Problem Solving", "Communication", "Drawing / Design",
    "Mathematics", "Writing", "Research",
    "Leadership", "Programming", "Public Speaking", "Languages",
];

const WORK_OPTIONS = [
    {
        value: "job",
        label: "Get a stable job in Pakistan",
        sub: "Government, company, or corporate career",
        icon: "🏢",
    },
    {
        value: "freelance",
        label: "Earn online via freelancing",
        sub: "Fiverr, Upwork, remote work in dollars",
        icon: "💻",
    },
    {
        value: "abroad",
        label: "Study or work abroad",
        sub: "Scholarship, immigration, or international career",
        icon: "✈️",
    },
    {
        value: "business",
        label: "Start my own business",
        sub: "Startup, shop, service, or tech company",
        icon: "🚀",
    },
];

interface Props {
    interests: string[];
    goals: string;
    skills: string[];
    workPreference: string[];
    onInterestToggle: (val: string) => void;
    onGoalChange: (val: string) => void;
    onSkillToggle: (val: string) => void;
    onWorkToggle: (val: string) => void;
}

export function StepInterests({
    interests, goals, skills, workPreference,
    onInterestToggle, onGoalChange, onSkillToggle, onWorkToggle,
}: Props) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Interests */}
            <div>
                <h2 style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: "clamp(22px,4vw,30px)", fontWeight: 800,
                    color: "#EEEEFF", marginBottom: 8, letterSpacing: "-0.8px",
                }}>
                    What interests you?
                </h2>
                <p style={{ color: "#7A7A9A", fontSize: 15, marginBottom: 18 }}>
                    Choose everything that excites you — even a little.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {INTEREST_OPTIONS.map(opt => {
                        const sel = interests.includes(opt.label);
                        return (
                            <button
                                key={opt.label}
                                onClick={() => onInterestToggle(opt.label)}
                                style={{
                                    display: "flex", alignItems: "center", gap: 7,
                                    padding: "9px 16px", borderRadius: 100, cursor: "pointer",
                                    fontSize: 13.5, fontWeight: 600,
                                    border: `1.5px solid ${sel
                                        ? "rgba(139,92,246,0.6)"
                                        : "rgba(255,255,255,0.08)"}`,
                                    background: sel
                                        ? "rgba(139,92,246,0.18)"
                                        : "rgba(255,255,255,0.03)",
                                    color: sel ? "#C4B5FD" : "#9898B8",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <span>{opt.icon}</span> {opt.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Skills */}
            <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#EEEEFF", marginBottom: 12 }}>
                    Any skills you already have?
                    <span style={{ color: "#6B6B8F", fontWeight: 400 }}> (optional)</span>
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {SKILL_OPTIONS.map(skill => {
                        const sel = skills.includes(skill);
                        return (
                            <button
                                key={skill}
                                onClick={() => onSkillToggle(skill)}
                                style={{
                                    padding: "7px 14px", borderRadius: 100, cursor: "pointer",
                                    fontSize: 13, fontWeight: 500,
                                    border: `1px solid ${sel
                                        ? "rgba(34,211,238,0.5)"
                                        : "rgba(255,255,255,0.07)"}`,
                                    background: sel
                                        ? "rgba(34,211,238,0.1)"
                                        : "rgba(255,255,255,0.025)",
                                    color: sel ? "#67E8F9" : "#7A7A9A",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {skill}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Work Preference — MULTI SELECT */}
            <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#EEEEFF", marginBottom: 6 }}>
                    What kind of future do you want?
                </p>
                <p style={{ fontSize: 13, color: "#6B6B8F", marginBottom: 14 }}>
                    Select all that apply — your goals can be more than one.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {WORK_OPTIONS.map(opt => {
                        const sel = workPreference.includes(opt.value);
                        return (
                            <button
                                key={opt.value}
                                onClick={() => onWorkToggle(opt.value)}
                                style={{
                                    display: "flex", alignItems: "center", gap: 14,
                                    padding: "14px 18px", borderRadius: 16, cursor: "pointer",
                                    border: `1.5px solid ${sel
                                        ? "rgba(139,92,246,0.55)"
                                        : "rgba(255,255,255,0.08)"}`,
                                    background: sel
                                        ? "rgba(139,92,246,0.12)"
                                        : "rgba(255,255,255,0.025)",
                                    textAlign: "left", width: "100%",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {/* Checkbox indicator */}
                                <div style={{
                                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                                    border: `2px solid ${sel
                                        ? "#8B5CF6"
                                        : "rgba(255,255,255,0.2)"}`,
                                    background: sel ? "#8B5CF6" : "transparent",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "all 0.2s ease",
                                }}>
                                    {sel && <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>✓</span>}
                                </div>

                                <span style={{ fontSize: 22 }}>{opt.icon}</span>

                                <div>
                                    <p style={{
                                        fontSize: 14, fontWeight: 700,
                                        color: sel ? "#C4B5FD" : "#EEEEFF",
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

            {/* Goals */}
            <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#EEEEFF", marginBottom: 10 }}>
                    What is your biggest dream?
                    <span style={{ color: "#6B6B8F", fontWeight: 400 }}> (optional)</span>
                </p>
                <textarea
                    value={goals}
                    onChange={e => onGoalChange(e.target.value)}
                    placeholder="e.g. I want to support my family, move abroad, start a tech company, become a doctor in the UK..."
                    rows={3}
                    style={{
                        width: "100%", padding: "14px 16px",
                        borderRadius: 14, resize: "vertical", outline: "none",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#EEEEFF", fontSize: 14, lineHeight: 1.65,
                        fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)",
                    }}
                />
            </div>
        </div>
    );
}