import Link from "next/link";
import { FOOTER_COLUMNS } from "@/constants/navigation";

export function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
      `}</style>

      <footer style={{
        position: "relative", zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "56px 24px 36px",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>

          {/* Top Grid */}
          <div className="footer-grid">

            {/* Brand Column */}
            <div>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                  background: "linear-gradient(135deg, #7C3AED, #22D3EE)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                }}>✦</div>
                <span className="font-syne" style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.4px", color: "#EEEEFF" }}>
                  Taleem<span style={{ color: "#A78BFA" }}>AI</span>
                </span>
              </div>

              <p style={{ fontSize: 13, color: "#6B6B8F", lineHeight: 1.82, maxWidth: 240, marginBottom: 20 }}>
                An AI mentor for every Pakistani student. Helping students discover
                careers, scholarships, universities, and modern skills for the future.
              </p>

              {/* Status badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "7px 14px", borderRadius: 100,
                background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.22)",
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#10B981", flexShrink: 0,
                  animation: "pulseDot 2s ease-in-out infinite",
                }} />
                <span style={{ fontSize: 12, color: "#6EE7B7", fontWeight: 600 }}>
                  Free forever for students 🇵🇰
                </span>
              </div>
            </div>

            {/* Link Columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 style={{
                  fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "1.2px", color: "#6B6B8F", marginBottom: 18,
                }}>
                  {col.title}
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24 }}>
            <div className="footer-bottom">
              <p style={{ fontSize: 12, color: "#6B6B8F" }}>
                © 2026 TaleemAI · Built with care for Pakistan&apos;s next generation
              </p>
              <div className="footer-bottom-links">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="footer-link" style={{ fontSize: 12 }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}