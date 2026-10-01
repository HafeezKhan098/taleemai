'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Bot, Sun, Moon } from 'lucide-react';

const links = [
  ['Home', '/'],
  ['Scholarships', '/scholarships'],
  ['After Matric', '/study-after-matric'],
  ['Colleges', '/colleges'],
  ['Careers', '/careers'],
  ['Universities', '/universities'],
  ['Tests & Boards', '/tests'],
  ['Abroad', '/abroad'],
  ['Skills', '/skills'],
  ['Balochistan', '/balochistan'],
  ['BBISE', '/bbise'],
  ['Contact', '/contact'],
  ['Privacy', '/privacy'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    const saved = localStorage.getItem('taleemai-theme');
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('theme-dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('theme-dark', next);
    localStorage.setItem('taleemai-theme', next ? 'dark' : 'light');
  };

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={close} aria-label="TaleemAI Home">
          <img src="/icon.svg" alt="TaleemAI" className="brand-logo" />
          <span>Taleem<span>AI</span></span>
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={close} className={active(href) ? 'active-nav' : ''}>
              {label}
            </Link>
          ))}
          {pathname === '/ur' ? (
            <Link className="language-switch" href="/" onClick={close}>English</Link>
          ) : (
            <Link className="urdu-link" href="/ur" onClick={close}>اردو</Link>
          )}
          <Link className="mobile-mentor-link" href="/mentor" onClick={close}>
            <Bot size={16} /> AI Mentor
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="mentor-btn" href="/mentor" onClick={close}>
            <Bot size={17} /> AI Mentor
          </Link>
        </div>

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
