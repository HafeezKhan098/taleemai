"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MessageSquare, ArrowLeft } from "lucide-react";

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const message = String(data.get("message") || "");

        const subject = encodeURIComponent(`TaleemAI Website Message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href =
            `mailto:hafeezkaka098@gmail.com?subject=${subject}&body=${body}`;

        setSent(true);
    }

    return (
        <div className="page-shell">
            <section className="page-hero">
                <div className="container">
                    <Link href="/" className="back-link">
                        <ArrowLeft size={17} /> Back to Home
                    </Link>

                    <p className="eyebrow">TaleemAI</p>
                    <h1>Contact Us</h1>
                    <p>
                        Have a suggestion, correction, missing scholarship, college,
                        entrance test, or useful education resource? We would love to hear
                        from you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    <div className="contact-info">
                        <div className="info-card">
                            <Mail size={28} />
                            <h2>Email TaleemAI</h2>
                            <p>
                                Send us information that can help improve TaleemAI for
                                students.
                            </p>

                            <a href="mailto:hafeezkaka098@gmail.com">
                                hafeezkaka098@gmail.com
                            </a>
                        </div>

                        <div className="info-card">
                            <MessageSquare size={28} />
                            <h2>What can you tell us?</h2>
                            <ul>
                                <li>Missing scholarship</li>
                                <li>Incorrect or outdated information</li>
                                <li>College or university suggestion</li>
                                <li>New entrance test information</li>
                                <li>Useful student resources</li>
                                <li>Website improvement ideas</li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h2>Send us a message</h2>
                        <p>
                            Your email app will open with your message prepared for
                            TaleemAI.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <label>
                                Your name
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />
                            </label>

                            <label>
                                Your email
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </label>

                            <label>
                                Message
                                <textarea
                                    name="message"
                                    rows={7}
                                    placeholder="Tell us how we can improve TaleemAI..."
                                    required
                                />
                            </label>

                            <button type="submit" className="primary-btn">
                                Send Message
                            </button>

                            {sent && (
                                <p className="form-note">
                                    Your email app should open now. If it didn't, email us
                                    directly at hafeezkaka098@gmail.com.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}