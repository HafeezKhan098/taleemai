import type { CityOption, BudgetRange, EnglishLevel } from "@/types";

const CITIES: CityOption[] = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi",
    "Peshawar", "Quetta", "Multan", "Faisalabad",
    "Hyderabad", "Gwadar", "Other",
];

const BUDGETS: { value: BudgetRange; label: string; sub: string }[] = [
    { value: "very-low", label: "Under PKR 50,000/year", sub: "Need full scholarship" },
    { value: "low", label: "PKR 50,000–150,000/year", sub: "Need partial support" },
    { value: "medium", label: "PKR 150,000–400,000/year", sub: "Can manage mid-tier unis" },
    { value: "high", label: "PKR 400,000+/year", sub: "Open to any university" },
];

const ENGLISH: { value: EnglishLevel; label: string; icon: string }[] = [
    { value: "basic", label: "Basic — I understand simple English", icon: "🟡" },
    { value: "intermediate", label: "Intermediate — I can read and write", icon: "🟠" },
    { value: "fluent", label: "Fluent — I'm comfortable in English", icon: "🟢" },
];

interface Props {
    city: string;
    budget: string;
    englishLevel: string;
    onCityChange: (val: CityOption) => void;
    onBudgetChange: (val: BudgetRange) => void;
    onEnglishChange: (val: EnglishLevel) => void;
}

const selectStyle = {
    width: "100%", padding: "12px 16px",
    borderRadius: 12, fontSize: 14, color: "#EEEEFF",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    outline: "none", cursor: "pointer",
    fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)",
    appearance: "none" as const,
};

export function StepSituation({
    city, budget, englishLevel,
    onCityChange, onBudgetChange, onEnglishChange,
}: Props) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

            <div>
                <h2 style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: "clamp(22px,4vw,30px)", fontWeight: 800,
                    color: "#EEEEFF", marginBottom: 8, letterSpacing: "-0.8px",
                }}>
                    Tell us about your situation
                </h2>
                <p style={{ color: "#7A7A9A", fontSize: 15 }}>
                    This helps us give you realistic, practical advice — not generic suggestions.
                </p>
            </div>

            {/* City */}
            <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#EEEEFF", display: "block", marginBottom: 10 }}>
                    📍 Which city are you in?
                </label>
                <div style={{ position: "relative" }}>
                    <select
                        value={city}
                        onChange={e => onCityChange(e.target.value as CityOption)}
                        style={selectStyle}
                    >
                        <option value="" style={{ background: "#0A0A1C" }}>Select your city</option>
                        {CITIES.map(c => (
                            <option key={c} value={c} style={{ background: "#0A0A1C" }}>{c}</option>
                        ))}
                    </select>
                    <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6B6B8F", fontSize: 12 }}>▼</span>
                </div>
            </div>

            {/* Budget */}
            <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#EEEEFF", display: "block", marginBottom: 12 }}>
                    💰 What is your education budget per year?
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {BUDGETS.map(opt => {
                        const sel = budget === opt.value;
                        return (
                            <button
                                key={opt.value}
                                onClick={() => onBudgetChange(opt.value)}
                                style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    padding: "13px 18px", borderRadius: 14, cursor: "pointer",
                                    border: `1.5px solid ${sel ? "rgba(139,92,246,0.6)" : "rgba(255,255,255,0.08)"}`,
                                    background: sel ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.025)",
                                    textAlign: "left", width: "100%",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <div>
                                    <p style={{ fontSize: 14, fontWeight: 600, color: sel ? "#C4B5FD" : "#EEEEFF", marginBottom: 2 }}>
                                        {opt.label}
                                    </p>
                                    <p style={{ fontSize: 12, color: "#6B6B8F" }}>{opt.sub}</p>
                                </div>
                                {sel && (
                                    <span style={{
                                        width: 20, height: 20, borderRadius: "50%",
                                        background: "#8B5CF6", display: "flex", alignItems: "center",
                                        justifyContent: "center", fontSize: 11, color: "#fff", flexShrink: 0
                                    }}>
                                        ✓
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* English Level */}
            <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#EEEEFF", display: "block", marginBottom: 12 }}>
                    🌐 How is your English?
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {ENGLISH.map(opt => {
                        const sel = englishLevel === opt.value;
                        return (
                            <button
                                key={opt.value}
                                onClick={() => onEnglishChange(opt.value)}
                                style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    padding: "12px 18px", borderRadius: 12, cursor: "pointer",
                                    border: `1.5px solid ${sel ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.08)"}`,
                                    background: sel ? "rgba(34,211,238,0.09)" : "rgba(255,255,255,0.025)",
                                    fontSize: 14, fontWeight: 500,
                                    color: sel ? "#67E8F9" : "#9898B8",
                                    textAlign: "left", width: "100%",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <span style={{ fontSize: 16 }}>{opt.icon}</span>
                                {opt.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}