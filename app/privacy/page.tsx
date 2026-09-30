import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | TaleemAI",
    description:
        "Privacy Policy for TaleemAI, a bilingual education, scholarship and career guidance platform.",
};

export default function PrivacyPage() {
    return (
        <div className="page-shell">
            <section className="page-hero">
                <div className="container">
                    <Link href="/" className="back-link">
                        <ArrowLeft size={17} /> Back to Home
                    </Link>

                    <p className="eyebrow">TaleemAI</p>
                    <h1>Privacy Policy</h1>
                    <p>
                        Simple information about how TaleemAI handles student interactions
                        and website usage.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container legal-content">
                    <div className="legal-card">
                        <ShieldCheck size={32} />
                        <h2>Your privacy matters</h2>
                        <p>
                            TaleemAI is designed to help students discover education,
                            scholarship, career and study opportunities. We aim to keep the
                            information we collect limited to what is needed to provide the
                            website.
                        </p>
                    </div>

                    <h2>AI Mentor</h2>
                    <p>
                        When you use AI Mentor, the information you enter into the
                        conversation may be sent to the configured AI service so that it
                        can generate a response.
                    </p>

                    <h2>Conversation memory</h2>
                    <p>
                        TaleemAI may store your AI Mentor profile and recent conversation
                        locally in your browser to help continue a conversation. This
                        local information can be cleared using the available clear/reset
                        option in AI Mentor.
                    </p>

                    <h2>Contact form</h2>
                    <p>
                        The Contact Us form prepares an email using your device's email
                        application. TaleemAI does not require a separate account or
                        messaging database for this form.
                    </p>

                    <h2>External websites</h2>
                    <p>
                        TaleemAI links to official universities, government departments,
                        scholarship organizations and other external resources. When you
                        leave TaleemAI, that website's own privacy policy and terms apply.
                    </p>

                    <h2>Analytics</h2>
                    <p>
                        TaleemAI may use website analytics to understand general website
                        usage and improve the platform.
                    </p>

                    <h2>Do not submit sensitive information</h2>
                    <p>
                        Students should not enter passwords, bank details, identity
                        documents, or other highly sensitive personal information into the
                        AI Mentor unless a specific official application requires it and
                        the student is using the official application directly.
                    </p>

                    <h2>Changes</h2>
                    <p>
                        This policy may be updated as TaleemAI develops new features and
                        services.
                    </p>
                </div>
            </section>
        </div>
    );
}