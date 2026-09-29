'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, GraduationCap, Bot } from 'lucide-react';

const links=[['Scholarships','/scholarships'],['Careers','/careers'],['Universities','/universities'],['Balochistan','/balochistan'],['Abroad','/abroad'],['Skills','/skills'],['BBISE','/bbise']];
export function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="container nav-wrap">
  <Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><GraduationCap size={21}/></span><span>Taleem<span>AI</span></span></Link>
  <nav className={open?'nav-links open':'nav-links'}>{links.map(([t,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}<Link className="urdu-link" href="/ur" onClick={()=>setOpen(false)}>اردو</Link></nav>
  <Link className="mentor-btn" href="/mentor"><Bot size={17}/> AI Mentor</Link>
  <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
 </div></header>
}
