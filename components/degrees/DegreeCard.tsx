import Link from "next/link";
import type { Degree } from "@/types";

const DEMAND_CONFIG = {
  "very high": { color:"#10B981", bg:"rgba(16,185,129,0.1)",  border:"rgba(16,185,129,0.25)", label:"Very High Demand" },
  "high":      { color:"#22D3EE", bg:"rgba(34,211,238,0.1)",  border:"rgba(34,211,238,0.25)", label:"High Demand"      },
  "medium":    { color:"#F59E0B", bg:"rgba(245,158,11,0.1)",  border:"rgba(245,158,11,0.25)", label:"Medium Demand"    },
  "low":       { color:"#6B6B8F", bg:"rgba(107,107,143,0.1)", border:"rgba(107,107,143,0.25)",label:"Low Demand"       },
};

const RISK_CONFIG = {
  "low":    { color:"#10B981", label:"Low AI Risk"    },
  "medium": { color:"#F59E0B", label:"Medium AI Risk" },
  "high":   { color:"#EC4899", label:"High AI Risk"   },
};

interface Props { degree: Degree; }

export function DegreeCard({ degree }: Props) {
  const demand = DEMAND_CONFIG[degree.demand];
  const risk   = RISK_CONFIG[degree.aiRisk];

  return (
    <Link href={`/degrees/${degree.slug}`} style={{ textDecoration:"none", display:"flex" }}>
      <div style={{
        background:"rgba(255,255,255,0.025)",
        border:"1px solid rgba(255,255,255,0.07)",
        borderRadius:20, padding:"26px 24px",
        display:"flex", flexDirection:"column",
        width:"100%", cursor:"pointer",
        transition:"all 0.3s ease",
        position:"relative", overflow:"hidden",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background     = "rgba(255,255,255,0.05)";
        el.style.borderColor    = "rgba(255,255,255,0.13)";
        el.style.transform      = "translateY(-6px)";
        el.style.boxShadow      = "0 24px 50px rgba(0,0,0,0.45)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background  = "rgba(255,255,255,0.025)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.transform   = "translateY(0)";
        el.style.boxShadow   = "none";
      }}
      >
        {/* Top line accent */}
        <div style={{
          position:"absolute", top:0, left:0, right:0, height:2,
          background:`linear-gradient(90deg,${degree.color},transparent)`,
          borderRadius:"20px 20px 0 0",
        }} />

        {/* Icon + Field */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
          <div style={{
            width:52, height:52, borderRadius:14,
            background:`${degree.color}18`,
            border:`1px solid ${degree.color}35`,
            display:"flex", alignItems:"center",
            justifyContent:"center", fontSize:26,
          }}>
            {degree.icon}
          </div>
          <span style={{
            padding:"4px 10px", borderRadius:100,
            fontSize:11, fontWeight:600,
            background:"rgba(255,255,255,0.06)",
            color:"#9898B8",
            border:"1px solid rgba(255,255,255,0.08)",
          }}>
            {degree.field}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:"var(--font-syne,'Syne',sans-serif)",
          fontSize:17, fontWeight:700,
          color:"#EEEEFF", marginBottom:4,
          lineHeight:1.3, letterSpacing:"-0.3px",
        }}>
          {degree.shortTitle}
        </h3>
        <p style={{ fontSize:12.5, color:"#6B6B8F", marginBottom:14 }}>
          {degree.duration}
        </p>

        {/* Description */}
        <p style={{
          fontSize:13.5, color:"#8888AA",
          lineHeight:1.7, marginBottom:16,
          flex:1,
          display:"-webkit-box",
          WebkitLineClamp:3,
          WebkitBoxOrient:"vertical" as const,
          overflow:"hidden",
        }}>
          {degree.description}
        </p>

        {/* Salary */}
        <div style={{
          padding:"10px 14px", borderRadius:12, marginBottom:14,
          background:"rgba(255,255,255,0.03)",
          border:"1px solid rgba(255,255,255,0.07)",
        }}>
          <p style={{ fontSize:10, color:"#6B6B8F", marginBottom:4, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.5px" }}>
            Mid-Career Salary
          </p>
          <p style={{
            fontFamily:"var(--font-syne,'Syne',sans-serif)",
            fontSize:13, fontWeight:800, color:"#EEEEFF",
          }}>
            {degree.salaryMid}
          </p>
        </div>

        {/* Badges */}
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          <span style={{
            padding:"3px 10px", borderRadius:100, fontSize:11, fontWeight:700,
            background:demand.bg, color:demand.color, border:`1px solid ${demand.border}`,
          }}>
            {demand.label}
          </span>
          <span style={{
            padding:"3px 10px", borderRadius:100, fontSize:11, fontWeight:700,
            background:"rgba(255,255,255,0.04)", color:risk.color,
            border:"1px solid rgba(255,255,255,0.08)",
          }}>
            {risk.label}
          </span>
        </div>
      </div>
    </Link>
  );
}