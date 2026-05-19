import Link from "next/link";
import {
    Bot, GraduationCap, Award, Code2,
    MapPin, Globe, ChevronRight, Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FEATURES } from "@/constants/features";

const ICON_MAP: Record<string, LucideIcon> = {
    Bot, GraduationCap, Award, Code2, MapPin, Globe,
};

const TOP_LINE: Record<string, string> = {
    Bot: "linear-gradient(90deg,#7C3AED,#22D3EE)",
    GraduationCap: "linear-gradient(90deg,#22D3EE,#10B981)",
    Award: "linear-gradient(90deg,#10B981,#22D3EE)",
    Code2: "linear-gradient(90deg,#F59E0B,#EC4899)",
    MapPin: "linear-gradient(90deg,#EC4899,#8B5CF6)",
    Globe: "linear-gradient(90deg,#6366F1,#22D3EE)",
};

export function FeaturesSection() {
    return (
        <section style={{ position: "relative", zIndex: 10, padding: "96px 24px 80px" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 7,
                        padding: "6px 18px", borderRadius: 100, marginBottom: 20,
                        background: "rgba(34,211,238,0.07)",
                        border: "1px solid rgba(34,211,238,0.2)",
                    }}>
                        <Zap size={12} color="#22D3EE" />
                        <span style={{
                            fontSize: 11, color: "#67E8F9", fontWeight: 700,
                            letterSpacing: "1.2px", textTransform: "uppercase"
                        }}>
                            Everything You Need
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: "var(--font-syne,'Syne',sans-serif)",
                        fontSize: "clamp(34px,5vw,52px)", fontWeight: 800,
                        letterSpacing: "-1.8px", lineHeight: 1.06,
                        marginBottom: 16, color: "#EEEEFF",
                    }}>
                        One platform.<br />
                        <span className="gradient-text">Every answer.</span>
                    </h2>

                    <p style={{
                        color: "#7A7A9A", fontSize: 16,
                        maxWidth: 460, margin: "0 auto", lineHeight: 1.8,
                    }}>
                        From figuring out your career to funding it — TaleemAI has
                        everything a Pakistani student needs, all in one place.
                    </p>
                </div>

                {/* Grid */}
                <div className="fg">
                    {FEATURES.map((f, i) => {
                        const Icon = ICON_MAP[f.iconName];
                        return (
                            <Link key={f.title} href={f.href} className="fc">

                                {/* Top gradient line */}
                                <div className="fc-line" style={{ background: TOP_LINE[f.iconName] }} />

                                {/* Card number */}
                                <span className="fc-num">0{i + 1}</span>

                                {/* Icon */}
                                <div className="fc-icon" style={{
                                    background: f.bgColor,
                                    border: `1px solid ${f.borderColor}`,
                                    boxShadow: `0 8px 28px ${f.bgColor}`,
                                }}>
                                    {Icon && <Icon size={25} color={f.color} />}
                                </div>

                                {/* Title */}
                                <h3 className="fc-title">{f.title}</h3>

                                {/* Description */}
                                <p className="fc-desc">{f.description}</p>

                                {/* CTA */}
                                <div className="fc-cta" style={{ color: f.color }}>
                                    Explore <ChevronRight size={14} />
                                </div>

                                {/* Hover orb */}
                                <div className="fc-orb" style={{
                                    background: `radial-gradient(circle,${f.bgColor} 0%,transparent 70%)`,
                                }} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}