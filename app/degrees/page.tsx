import { Navbar }     from "@/components/layout/Navbar";
import { Footer }     from "@/components/layout/Footer";
import { DegreeGrid } from "@/components/degrees/DegreeGrid";

export const metadata = {
  title:       "Degree Explorer — TaleemAI",
  description: "Explore 12+ degrees with salaries, universities, AI risk scores, and career paths. Built for Pakistani students.",
};

export default function DegreesPage() {
  return (
    <>
      {/* Background */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{
          position:"absolute", top:"5%", right:"10%",
          width:500, height:500, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(34,211,238,0.1) 0%,transparent 65%)",
          animation:"orbDrift2 18s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute", bottom:"10%", left:"5%",
          width:400, height:400, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 65%)",
          animation:"orbDrift1 14s ease-in-out infinite",
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
          <div style={{ maxWidth:1180, margin:"0 auto" }}>

            {/* Header */}
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:7,
                padding:"5px 16px", borderRadius:100, marginBottom:18,
                background:"rgba(34,211,238,0.07)",
                border:"1px solid rgba(34,211,238,0.2)",
              }}>
                <span style={{ fontSize:11, color:"#67E8F9", fontWeight:700, letterSpacing:"0.5px" }}>
                  📚 DEGREE EXPLORER
                </span>
              </div>

              <h1 style={{
                fontFamily:"var(--font-syne,'Syne',sans-serif)",
                fontSize:"clamp(28px,5vw,48px)", fontWeight:800,
                color:"#EEEEFF", letterSpacing:"-1.5px",
                lineHeight:1.08, marginBottom:14,
              }}>
                Find the right degree<br />
                <span className="gradient-text">for your future.</span>
              </h1>

              <p style={{ color:"#7A7A9A", fontSize:16, lineHeight:1.78, maxWidth:520, margin:"0 auto" }}>
                Every degree explained honestly — real Pakistani salaries,
                actual job demand, AI risk scores, and the best universities
                to study at.
              </p>
            </div>

            {/* Degree Grid with Search */}
            <DegreeGrid />

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}