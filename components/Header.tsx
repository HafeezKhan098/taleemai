'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Bot, Sun, Moon } from 'lucide-react';

const links = [
  ['Home', '/'], ['Scholarships', '/scholarships'], ['After Matric', '/study-after-matric'], ['Colleges', '/colleges'], ['Careers', '/careers'], ['Universities', '/universities'], ['Tests & Boards', '/tests'], ['Abroad', '/abroad'], ['Skills', '/skills'], ['BBISE', '/bbise'], ['Contact', '/contact'], ['Privacy', '/privacy'], ['Get Online', '/get-online'],
];

const urduLabels: Record<string,string> = {
  '/':'ہوم','/scholarships':'اسکالرشپس','/study-after-matric':'میٹرک کے بعد','/colleges':'کالجز','/careers':'کیریئرز','/universities':'یونیورسٹیز','/tests':'ٹیسٹس','/abroad':'بیرونِ ملک','/skills':'اسکلز','/bbise':'BBISE','/contact':'رابطہ','/privacy':'پرائیویسی','/get-online':'آن لائن لائیں'
};

function toUrduPath(pathname:string){
  if(pathname==='/') return '/ur';
  return `/ur${pathname}`;
}
function toEnglishPath(pathname:string){
  if(pathname==='/ur' || pathname==='/ur/') return '/';
  return pathname.replace(/^\/ur(?=\/|$)/,'') || '/';
}

export function Header(){
  const [open,setOpen]=useState(false); const [dark,setDark]=useState(false); const pathname=usePathname(); const isUrdu=pathname==='/ur' || pathname.startsWith('/ur/'); const close=()=>setOpen(false);
  useEffect(()=>{const saved=localStorage.getItem('taleemai-theme');const isDark=saved==='dark';setDark(isDark);document.documentElement.classList.toggle('theme-dark',isDark)},[]);
  useEffect(()=>{document.documentElement.lang=isUrdu?'ur':'en';document.documentElement.dir=isUrdu?'rtl':'ltr'},[isUrdu]);
  const toggleTheme=()=>{const next=!dark;setDark(next);document.documentElement.classList.toggle('theme-dark',next);localStorage.setItem('taleemai-theme',next?'dark':'light')};
  const active=(href:string)=>href==='/'?pathname==='/':pathname.startsWith(href);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href={isUrdu?"/ur":"/"} className="brand" onClick={close} aria-label="TaleemAI Home"><img src="/icon.svg" alt="TaleemAI" className="brand-logo"/><span>Taleem<span>AI</span></span></Link>
    <nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">
      {links.map(([label,href])=>{ const target=isUrdu ? (href==='/'?'/ur':`/ur${href}`) : href; const activeHref=isUrdu ? target : href; return <Link key={href} href={target} onClick={close} className={pathname===activeHref || (activeHref!=='/ur' && pathname.startsWith(activeHref+'/')) || (activeHref!=='/' && pathname===activeHref) ? 'active-nav':''}>{isUrdu ? (urduLabels[href] || label) : label}</Link>})}
      {isUrdu?<Link className="language-switch" href={toEnglishPath(pathname)} onClick={close}>English</Link>:<Link className="urdu-link" href={toUrduPath(pathname)} onClick={close}>اردو</Link>}
      <Link className="mobile-mentor-link" href={isUrdu?"/ur/mentor":"/mentor"} onClick={close}><Bot size={17} strokeWidth={2.4}/> AI Mentor</Link>
    </nav>
    <div className="header-actions"><button className="theme-toggle" onClick={toggleTheme} type="button" aria-label={dark?'Switch to light mode':'Switch to dark mode'}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button><Link className="mentor-btn" href={isUrdu?"/ur/mentor":"/mentor"} onClick={close}><Bot size={17} strokeWidth={2.5}/> <span>AI Mentor</span></Link></div>
    <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} type="button">{open?<X/>:<Menu/>}</button>
  </div></header>
}
