import { Navbar }          from "@/components/layout/Navbar";
import { Footer }          from "@/components/layout/Footer";
import { CounselorWizard } from "@/components/counselor/CounselorWizard";

export const metadata = {
  title:       "AI Career Counselor — TaleemAI",
  description: "Get personalized career guidance powered by AI. Built for Pakistani students.",
};

export default function CounselorPage() {
  return (
    <>
      {/* Background */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{
          position:"absolute", top:"5%", left:"5%",
          width:600, height:600, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 65%)",
          animation:"orbDrift1 16s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute", bottom:"10%", right:"5%",
          width:400, height:400, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(34,211,238,0.1) 0%,transparent 65%)",
          animation:"orbDrift2 20s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize:"36px 36px",
        }} />
      </div>

      <div style={{ position:"relative", zIndex:10 }}>
        <Navbar />
        <main style={{ minHeight:"100vh", padding:"60px 24px 80px" }}>

          {/* Header */}
          <div style={{ textAlign:"center", marginBottom:52, maxWidth:600, margin:"0 auto 52px" }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:7,
              padding:"5px 16px", borderRadius:100, marginBottom:18,
              background:"rgba(139,92,246,0.1)",
              border:"1px solid rgba(139,92,246,0.28)",
            }}>
              <span style={{
                width:6, height:6, borderRadius:"50%",
                background:"#A78BFA",
                animation:"pulseDot 2s ease-in-out infinite",
                display:"inline-block",
              }} />
              <span style={{ fontSize:11.5, color:"#C4B5FD", fontWeight:700, letterSpacing:"0.5px" }}>
                AI CAREER COUNSELOR
              </span>
            </div>

            <h1 style={{
              fontFamily:"var(--font-syne,'Syne',sans-serif)",
              fontSize:"clamp(28px,5vw,44px)", fontWeight:800,
              color:"#EEEEFF", letterSpacing:"-1.4px",
              lineHeight:1.1, marginBottom:14,
            }}>
              Your future is about to get<br />
              <span className="gradient-text">a lot clearer.</span>
            </h1>
            <p style={{ color:"#7A7A9A", fontSize:15.5, lineHeight:1.78 }}>
              Answer 3 quick questions. Get a personalized career report —
              with real Pakistani salaries, actual universities, and a step-by-step roadmap.
            </p>
          </div>

          {/* Wizard */}
          <CounselorWizard />

        </main>
        <Footer />
      </div>
    </>
  );
}