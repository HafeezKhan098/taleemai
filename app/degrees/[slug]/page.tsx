import { notFound } from "next/navigation";
import Link from "next/link";
import { DEGREES } from "@/data/degrees";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const DEMAND_COLOR = {
  "very high": "#10B981",
  "high": "#22D3EE",
  "medium": "#F59E0B",
  "low": "#6B6B8F",
};

const RISK_COLOR = {
  "low": "#10B981",
  "medium": "#F59E0B",
  "high": "#EC4899",
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return DEGREES.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const degree = DEGREES.find(d => d.slug === params.slug);
  if (!degree) return { title: "Degree Not Found" };
  return {
    title: `${degree.shortTitle} — TaleemAI`,
    description: degree.description,
  };
}

export default function DegreeDetailPage({ params }: Props) {
  const degree = DEGREES.find(d => d.slug === params.slug);
  if (!degree) notFound();

  const demandColor = DEMAND_COLOR[degree.demand];
  const riskColor = RISK_COLOR[degree.aiRisk];

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle,${degree.color}18 0%,transparent 65%)`,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <main style={{ minHeight: "100vh", padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* Back */}
            <Link href="/degrees" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              color: "#6B6B8F", fontSize: 13, fontWeight: 600,
              textDecoration: "none", marginBottom: 32,
              transition: "color 0.2s",
            }}>
              ← Back to Degrees
            </Link>

            {/* Hero */}
            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24, padding: "36px 40px",
              marginBottom: 28, position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -40, right: -40, width: 200, height: 200,
                borderRadius: "50%", pointerEvents: "none",
                background: `radial-gradient(circle,${degree.color}20 0%,transparent 70%)`,
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 20 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 18, flexShrink: 0,
                  background: `${degree.color}18`, border: `1px solid ${degree.color}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 32,
                }}>
                  {degree.icon}
                </div>
                <div>
                  <h1 style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: "clamp(22px,4vw,32px)", fontWeight: 800,
                    color: "#EEEEFF", letterSpacing: "-0.8px",
                    lineHeight: 1.15, marginBottom: 6,
                  }}>
                    {degree.title}
                  </h1>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: "rgba(255,255,255,0.06)", color: "#9898B8", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {degree.field}
                    </span>
                    <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: "rgba(255,255,255,0.06)", color: "#9898B8", border: "1px solid rgba(255,255,255,0.08)" }}>
                      ⏱ {degree.duration}
                    </span>
                    <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: `${demandColor}18`, color: demandColor, border: `1px solid ${demandColor}35` }}>
                      {degree.demand} demand
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 15.5, color: "#9898B8", lineHeight: 1.8 }}>
                {degree.description}
              </p>
            </div>

            {/* Salary Grid */}
            <div className="degree-salary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}>
              {[
                { label: "Entry-Level", value: degree.salaryEntry, icon: "🌱" },
                { label: "Mid-Career", value: degree.salaryMid, icon: "📈" },
                { label: "Remote/Freelance", value: degree.salaryRemote, icon: "💻" },
              ].map(item => (
                <div key={item.label} style={{
                  padding: "18px 16px", borderRadius: 16, textAlign: "center",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <p style={{ fontSize: 20, marginBottom: 8 }}>{item.icon}</p>
                  <p style={{ fontSize: 10, color: "#6B6B8F", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontSize: 13, fontWeight: 800, color: "#EEEEFF", lineHeight: 1.4,
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Two column: Scope */}
            <div className="degree-scope-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
              <div style={{ padding: "22px", borderRadius: 18, background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#6EE7B7", marginBottom: 10 }}>🇵🇰 Scope in Pakistan</p>
                <p style={{ fontSize: 14, color: "#9898B8", lineHeight: 1.75 }}>{degree.scopePakistan}</p>
              </div>
              <div style={{ padding: "22px", borderRadius: 18, background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.15)" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#67E8F9", marginBottom: 10 }}>🌍 Scope Abroad</p>
                <p style={{ fontSize: 14, color: "#9898B8", lineHeight: 1.75 }}>{degree.scopeAbroad}</p>
              </div>
            </div>

            {/* AI Risk */}
            <div style={{
              padding: "20px 24px", borderRadius: 18, marginBottom: 28,
              background: `${riskColor}10`, border: `1px solid ${riskColor}30`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>🤖</span>
                <p style={{ fontSize: 14, fontWeight: 700, color: riskColor }}>
                  AI Risk: {degree.aiRisk.charAt(0).toUpperCase() + degree.aiRisk.slice(1)}
                </p>
              </div>
              <p style={{ fontSize: 14, color: "#9898B8", lineHeight: 1.7 }}>{degree.aiRiskReason}</p>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 18, fontWeight: 700, color: "#EEEEFF", marginBottom: 14 }}>
                Skills You Will Learn
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {degree.skills.map(skill => (
                  <span key={skill} style={{
                    padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600,
                    background: `${degree.color}12`, border: `1px solid ${degree.color}30`,
                    color: "#EEEEFF",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Universities */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 18, fontWeight: 700, color: "#EEEEFF", marginBottom: 14 }}>
                🏫 Best Universities in Pakistan
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {degree.universities.map((uni, i) => (
                  <div key={uni} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "12px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                      background: `${degree.color}20`, border: `1px solid ${degree.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 800, color: degree.color,
                    }}>{i + 1}</span>
                    <span style={{ fontSize: 14, color: "#EEEEFF", fontWeight: 500 }}>{uni}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Paths */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 18, fontWeight: 700, color: "#EEEEFF", marginBottom: 14 }}>
                💼 Career Paths
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {degree.careers.map(career => (
                  <span key={career} style={{
                    padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 500,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#9898B8",
                  }}>
                    {career}
                  </span>
                ))}
              </div>
            </div>

            {/* Admission Info */}
            <div className="degree-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 36 }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 36 }}>
              <div style={{ padding: "20px", borderRadius: 16, background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.18)" }}>
                <p style={{ fontSize: 12, color: "#6B6B8F", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>Fee Range / Year</p>
                <p style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 16, fontWeight: 800, color: "#C4B5FD" }}>{degree.feeRange}</p>
              </div>
              <div style={{ padding: "20px", borderRadius: 16, background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.18)" }}>
                <p style={{ fontSize: 12, color: "#6B6B8F", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>Merit Range</p>
                <p style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 16, fontWeight: 800, color: "#67E8F9" }}>{degree.meritRange}</p>
              </div>
            </div>

            {/* Eligibility */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 18, fontWeight: 700, color: "#EEEEFF", marginBottom: 14 }}>
                ✅ Who Can Apply
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {degree.eligibility.map((e, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "11px 16px", borderRadius: 12,
                    background: "rgba(16,185,129,0.05)",
                    border: "1px solid rgba(16,185,129,0.15)",
                  }}>
                    <span style={{ color: "#10B981", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#9898B8" }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{
              background: "linear-gradient(135deg,rgba(124,58,237,0.13),rgba(34,211,238,0.07))",
              border: "1px solid rgba(139,92,246,0.22)",
              borderRadius: 20, padding: "28px 32px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 20,
            }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-syne,'Syne',sans-serif)", fontSize: 20, fontWeight: 800, color: "#EEEEFF", marginBottom: 6 }}>
                  Ready to pursue {degree.shortTitle}?
                </h3>
                <p style={{ fontSize: 14, color: "#8888AA" }}>
                  Get a personalized career roadmap from our AI Counselor.
                </p>
              </div>
              <Link href="/counselor" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 12, textDecoration: "none",
                background: "linear-gradient(135deg,#7C3AED,#4F46E5)",
                color: "#fff", fontSize: 14, fontWeight: 700,
                boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
              }}>
                Talk to AI Mentor →
              </Link>
            </div>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}