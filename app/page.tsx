import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { MotivationalBanner } from "@/components/sections/MotivationalBanner";

export default function HomePage() {
  return (
    <>
      {/* Noise texture */}
      <div className="noise" aria-hidden="true" />

      {/* Background orbs */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "6%", left: "8%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)",
          animation: "orbDrift1 16s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "35%", right: "4%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)",
          animation: "orbDrift2 20s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "8%", left: "28%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <main>
          <HeroSection />
          <StatsBar />
          <FeaturesSection />
          <MotivationalBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}