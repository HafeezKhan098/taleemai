"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
    return (
        <nav style={{
            position: "sticky", top: 0, zIndex: 200, height: 62,
            display: "flex", alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
            background: "rgba(5,5,15,0.85)",
        }}>
            <div style={{
                maxWidth: 1180, margin: "0 auto", padding: "0 24px",
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>

                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                    <div style={{
                        width: 34, height: 34, borderRadius: 10,
                        background: "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 0 20px rgba(139,92,246,0.55)",
                        fontSize: 16, flexShrink: 0,
                    }}>✦</div>
                    <span className="font-syne" style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.5px", color: "#EEEEFF" }}>
                        Taleem<span style={{ color: "#A78BFA" }}>AI</span>
                    </span>
                </Link>

                {/* Links */}
                <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }}
                    className="hidden md:flex">
                    {NAV_LINKS.map(l => (
                        <li key={l.href}>
                            <Link href={l.href} className="nav-link">{l.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* Right */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Link href="/login" className="nav-link hidden sm:block" style={{ fontSize: 13 }}>Sign In</Link>
                    <Button size="sm" variant="primary">
                        Start Free <ArrowRight size={13} />
                    </Button>
                </div>
            </div>
        </nav>
    );
}