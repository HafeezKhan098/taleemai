"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/study-after-matric", label: "Study After Matric" },
    { href: "/colleges", label: "Colleges" },
    { href: "/careers", label: "Careers" },
    { href: "/universities", label: "Universities" },
    { href: "/abroad", label: "Study Abroad" },
    { href: "/skills", label: "Skills" },
    { href: "/balochistan", label: "Balochistan" },
    { href: "/bbise", label: "BBISE" },
    { href: "/mentor", label: "AI Mentor" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isUrdu = pathname === "/ur" || pathname.startsWith("/ur/");

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-inner">
                {/* Logo / Brand */}
                <Link
                    href={isUrdu ? "/ur" : "/"}
                    className="brand"
                    onClick={closeMobileMenu}
                >
                    <img
                        src="/taleemai-logo.svg"
                        alt="TaleemAI"
                        className="brand-logo"
                    />

                    <div className="brand-text">
                        <span className="brand-name">TaleemAI</span>
                        <span className="brand-tagline">
                            Learn • Explore • Build Your Future
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" aria-label="Main navigation">
                    {links.map((link) => {
                        const active =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${active ? "active" : ""}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* Language Switch */}
                    {isUrdu ? (
                        <Link href="/" className="language-switch">
                            English
                        </Link>
                    ) : (
                        <Link href="/ur" className="language-switch">
                            اردو
                        </Link>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={() => setMobileOpen((open) => !open)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div className="mobile-nav">
                    <nav aria-label="Mobile navigation">
                        {links.map((link) => {
                            const active =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`mobile-nav-link ${active ? "active" : ""
                                        }`}
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* Mobile Language Switch */}
                        {isUrdu ? (
                            <Link
                                href="/"
                                className="mobile-language-switch"
                                onClick={closeMobileMenu}
                            >
                                English
                            </Link>
                        ) : (
                            <Link
                                href="/ur"
                                className="mobile-language-switch"
                                onClick={closeMobileMenu}
                            >
                                اردو
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}