"use client";

import { useState } from "react";
import type {
    StudentProfile, AIReportResult,
    EducationLevel, CityOption, BudgetRange, EnglishLevel,
} from "@/types";
import { StepEducation } from "./StepEducation";
import { StepInterests } from "./StepInterests";
import { StepSituation } from "./StepSituation";
import { ResultsView } from "./ResultsView";

const STEPS = [
    { num: 1, label: "Education" },
    { num: 2, label: "Interests" },
    { num: 3, label: "Situation" },
];

const DEFAULT: StudentProfile = {
    education: "fsc-pre-engineering",
    interests: [],
    goals: "",
    city: "Karachi",
    budget: "low",
    englishLevel: "intermediate",
    skills: [],
    workPreference: [],
};

function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

export function CounselorWizard() {
    const [step, setStep] = useState(1);
    const [profile, setProfile] = useState<StudentProfile>(DEFAULT);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AIReportResult | null>(null);
    const [error, setError] = useState("");

    const update = (key: keyof StudentProfile, value: unknown) =>
        setProfile(p => ({ ...p, [key]: value }));

    const toggleArr = (key: "interests" | "skills" | "workPreference", val: string) =>
        setProfile(p => ({
            ...p,
            [key]: (p[key] as string[]).includes(val)
                ? (p[key] as string[]).filter(v => v !== val)
                : [...(p[key] as string[]), val],
        }));

    const canNext = () => {
        if (step === 1) return !!profile.education;
        if (step === 2) return profile.interests.length > 0;
        if (step === 3) return !!profile.city && !!profile.budget && !!profile.englishLevel;
        return true;
    };

    const goNext = () => { setStep(s => s + 1); scrollTop(); };
    const goBack = () => { setStep(s => s - 1); scrollTop(); };

    const handleGenerate = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/ai/counsel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profile),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Request failed");
            setResult(data);
            setStep(4);
            scrollTop();
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setStep(1); setProfile(DEFAULT);
        setResult(null); setError("");
        scrollTop();
    };

    return (
        <div style={{ maxWidth: step === 4 ? 860 : 680, margin: "0 auto", width: "100%" }}>

            {/* Progress */}
            {step < 4 && (
                <div style={{ marginBottom: 44 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                        {STEPS.map(s => (
                            <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 13, fontWeight: 800,
                                    background: step > s.num
                                        ? "linear-gradient(135deg,#10B981,#22D3EE)"
                                        : step === s.num
                                            ? "linear-gradient(135deg,#7C3AED,#22D3EE)"
                                            : "rgba(255,255,255,0.06)",
                                    color: step >= s.num ? "#fff" : "#6B6B8F",
                                    transition: "all 0.3s",
                                    boxShadow: step === s.num ? "0 0 18px rgba(139,92,246,0.45)" : "none",
                                }}>
                                    {step > s.num ? "✓" : s.num}
                                </div>
                                <span style={{
                                    fontSize: 14, fontWeight: 600,
                                    color: step >= s.num ? "#EEEEFF" : "#6B6B8F",
                                }}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div style={{ height: 3, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                        <div style={{
                            height: "100%", borderRadius: 100,
                            background: "linear-gradient(90deg,#7C3AED,#22D3EE)",
                            width: `${((step - 1) / 3) * 100}%`,
                            transition: "width 0.4s ease",
                        }} />
                    </div>
                    <p style={{ textAlign: "right", fontSize: 12, color: "#6B6B8F", marginTop: 8 }}>
                        Step {step} of 3
                    </p>
                </div>
            )}

            {/* Content */}
            <div style={{ marginBottom: 32 }}>
                {step === 1 && (
                    <StepEducation
                        value={profile.education}
                        onChange={val => update("education", val as EducationLevel)}
                    />
                )}
                {step === 2 && (
                    <StepInterests
                        interests={profile.interests}
                        goals={profile.goals}
                        skills={profile.skills}
                        workPreference={profile.workPreference}
                        onInterestToggle={val => toggleArr("interests", val)}
                        onGoalChange={val => update("goals", val)}
                        onSkillToggle={val => toggleArr("skills", val)}
                        onWorkToggle={val => toggleArr("workPreference", val)}
                    />
                )}
                {step === 3 && (
                    <StepSituation
                        city={profile.city}
                        budget={profile.budget}
                        englishLevel={profile.englishLevel}
                        onCityChange={val => update("city", val as CityOption)}
                        onBudgetChange={val => update("budget", val as BudgetRange)}
                        onEnglishChange={val => update("englishLevel", val as EnglishLevel)}
                    />
                )}
                {step === 4 && result && (
                    <ResultsView result={result} profile={profile} onReset={reset} />
                )}
            </div>

            {error && (
                <div style={{
                    padding: "14px 18px", borderRadius: 14, marginBottom: 20,
                    background: "rgba(236,72,153,0.08)",
                    border: "1px solid rgba(236,72,153,0.25)",
                    color: "#F9A8D4", fontSize: 14, lineHeight: 1.6,
                }}>
                    ⚠️ {error}
                    <br />
                    <span style={{ fontSize: 12, color: "#6B6B8F", marginTop: 4, display: "block" }}>
                        Check your terminal for details.
                    </span>
                </div>
            )}

            {/* Navigation */}
            {step < 4 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    {step > 1
                        ? <button onClick={goBack} className="btn-ghost btn-md">← Back</button>
                        : <div />
                    }
                    {step < 3
                        ? (
                            <button
                                onClick={goNext}
                                disabled={!canNext()}
                                className="btn-primary btn-md"
                                style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "not-allowed" }}
                            >
                                Continue →
                            </button>
                        ) : (
                            <button
                                onClick={handleGenerate}
                                disabled={!canNext() || loading}
                                className="btn-primary btn-md"
                                style={{
                                    opacity: canNext() && !loading ? 1 : 0.5,
                                    cursor: canNext() && !loading ? "pointer" : "not-allowed",
                                    minWidth: 230,
                                }}
                            >
                                {loading ? (
                                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{
                                            width: 16, height: 16, borderRadius: "50%",
                                            border: "2px solid rgba(255,255,255,0.3)",
                                            borderTopColor: "#fff",
                                            animation: "spin 0.7s linear infinite",
                                            display: "inline-block", flexShrink: 0,
                                        }} />
                                        Analyzing your profile…
                                    </span>
                                ) : "✨ Generate My Career Report"}
                            </button>
                        )
                    }
                </div>
            )}
        </div>
    );
}