import Link from "next/link";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-brand">
                    <Link href="/" className="footer-logo" aria-label="TaleemAI Home">
                        <img src="/icon.svg" alt="TaleemAI" />
                        <span>
                            Taleem<span>AI</span>
                        </span>
                    </Link>

                    <p>
                        From Balochistan to Pakistan to the world — simple, bilingual
                        education, scholarship and career guidance for students.
                    </p>

                    <p className="muted">
                        Information is provided for educational guidance and may change
                        according to official policies, deadlines and eligibility
                        requirements.
                    </p>
                </div>

                {/* Explore */}
                <div className="footer-column">
                    <h4>Explore</h4>

                    <Link href="/scholarships">Scholarships</Link>
                    <Link href="/study-after-matric">Study After Matric</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/universities">Universities</Link>
                    <Link href="/colleges">College Explorer</Link>
                    <Link href="/abroad">Study Abroad</Link>
                    <Link href="/skills">Free Skills</Link>
                </div>

                {/* Balochistan */}
                <div className="footer-column">
                    <h4>Balochistan</h4>

                    <Link href="/balochistan">Balochistan Guide</Link>
                    <Link href="/bbise">BBISE Results & Services</Link>
                    <Link href="/study-after-matric">After Matric</Link>
                    <Link href="/colleges">Colleges</Link>
                    <Link href="/universities">Universities</Link>
                </div>

                {/* Important */}
                <div className="footer-column">
                    <h4>Important</h4>

                    <Link href="/mentor">AI Mentor</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/privacy">Privacy Policy</Link>

                    <a
                        href="https://beef.org.pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BEEF Official
                    </a>

                    <a
                        href="https://www.hec.gov.pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HEC Official
                    </a>
                </div>
            </div>

            <div className="container footer-bottom">
                <span>© {new Date().getFullYear()} TaleemAI</span>

                <div className="footer-bottom-links">
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>

                <span>Website by Hafeez Khan</span>
            </div>
        </footer>
    );
}