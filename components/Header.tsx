'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Bot } from 'lucide-react';

const links = [
    ['Home', '/'],
    ['Scholarships', '/scholarships'],
    ['After Matric', '/study-after-matric'],
    ['Colleges', '/colleges'],
    ['Careers', '/careers'],
    ['Universities', '/universities'],
    ['Tests', '/tests'],
    ['Abroad', '/abroad'],
    ['Skills', '/skills'],
    ['Balochistan', '/balochistan'],
    ['BBISE', '/bbise'],
    ['Contact', '/contact'],
    ['Privacy', '/privacy'],
];

export function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const close = () => setOpen(false);

    return (
        <header className="site-header">
            <div className="container nav-wrap">

                {/* Logo */}
                <Link
                    href="/"
                    className="brand"
                    onClick={close}
                    aria-label="TaleemAI Home"
                >
                    <img
                        src="/icon.svg"
                        alt="TaleemAI"
                        className="brand-logo"
                    />

                    <span>
                        Taleem<span>AI</span>
                    </span>
                </Link>

                {/* Navigation */}
                <nav
                    className={open ? 'nav-links open' : 'nav-links'}
                    aria-label="Main navigation"
                >
                    {links.map(([label, href]) => {
                        const active =
                            href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(href);

                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={close}
                                className={active ? 'active-nav' : ''}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    {/* Urdu */}
                    {pathname === '/ur' ? (
                        <Link
                            className="language-switch"
                            href="/"
                            onClick={close}
                        >
                            English
                        </Link>
                    ) : (
                        <Link
                            className="urdu-link"
                            href="/ur"
                            onClick={close}
                        >
                            اردو
                        </Link>
                    )}
                </nav>

                {/* AI Mentor */}
                <Link
                    className="mentor-btn"
                    href="/mentor"
                    onClick={close}
                >
                    <Bot size={17} />
                    AI Mentor
                </Link>

                {/* Mobile menu */}
                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    type="button"
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>
        </header>
    );
}