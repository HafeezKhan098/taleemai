'use client';
import Link from 'next/link';
import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {Menu,X,GraduationCap,Bot} from 'lucide-react';
const links=[['Scholarships','/scholarships'],['Study After Matric','/study-after-matric'],['Colleges','/colleges'],['Careers','/careers'],['Universities','/universities'],['Abroad','/abroad'],['Skills','/skills']];
export function Header(){const [open,setOpen]=useState(false);const pathname=usePathname();const close=()=>setOpen(false);return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand" onClick={close}><span className="brand-mark"><GraduationCap size={21}/></span><span>Taleem<span>AI</span></span></Link><nav className={open?'nav-links open':'nav-links'}>{links.map(([t,h])=><Link key={h} href={h} onClick={close}>{t}</Link>)}<Link href="/balochistan" onClick={close}>Balochistan</Link><Link href="/bbise" onClick={close}>BBISE</Link>{pathname==='/ur'?<Link className="language-switch" href="/" onClick={close}>English</Link>:<Link className="urdu-link" href="/ur" onClick={close}>اردو</Link>}</nav><Link className="mentor-btn" href="/mentor" onClick={close}><Bot size={17}/> AI Mentor</Link><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></header>}
