"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav style={{
                position: "sticky", top: 0, zIndex: 200, height: 62,
                display: "flex", alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
                background: "rgba(5,5,15,0.88)",
            }}>
                <div style={{
                    maxWidth: 1180, margin: "0 auto", padding: "0 20px",
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>

                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                            background: "linear-gradient(135deg,#7C3AED,#22D3EE)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 15, boxShadow: "0 0 16px rgba(139,92,246,0.5)",
                        }}>✦</div>
                        <span className="font-syne" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.4px", color: "#EEEEFF" }}>
                            Taleem<span style={{ color: "#A78BFA" }}>AI</span>
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none", margin: 0, padding: 0 }}
                        className="navbar-links">
                        {NAV_LINKS.map(l => (
                            <li key={l.href}>
                                <Link href={l.href} style={{ color: "#9898B8", fontSize: 13.5, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#EEEEFF"}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9898B8"}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right side */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {/* Desktop CTA */}
                        <div className="navbar-links">
                            <Button size="sm" variant="primary">
                                Start Free <ArrowRight size={13} />
                            </Button>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(o => !o)}
                            style={{
                                display: "none", alignItems: "center", justifyContent: "center",
                                width: 38, height: 38, borderRadius: 10, cursor: "pointer",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}
                            className="mobile-menu-btn"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={18} color="#EEEEFF" /> : <Menu size={18} color="#EEEEFF" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div style={{
                    position: "fixed", top: 62, left: 0, right: 0, zIndex: 199,
                    background: "rgba(5,5,15,0.97)",
                    backdropFilter: "blur(24px)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    padding: "16px 20px 24px",
                }}>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                        {NAV_LINKS.map(l => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        display: "block", padding: "12px 16px", borderRadius: 12,
                                        color: "#9898B8", fontSize: 15, fontWeight: 500,
                                        textDecoration: "none",
                                        background: "rgba(255,255,255,0.02)",
                                    }}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div style={{ marginTop: 16 }}>
                        <Link href="/counselor" onClick={() => setMenuOpen(false)} style={{
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                            padding: "13px", borderRadius: 12, textDecoration: "none",
                            background: "linear-gradient(135deg,#7C3AED,#4F46E5)",
                            color: "#fff", fontSize: 14, fontWeight: 700,
                            boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
                        }}>
                            Start Free — It&apos;s 100% Free <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            )}

            {/* Show hamburger on mobile */}
            <style>{`
        @media (max-width: 768px) {
          .navbar-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}