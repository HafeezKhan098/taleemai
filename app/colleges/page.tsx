'use client';
import {useMemo,useState} from 'react';
import {ExternalLink,MapPin,ShieldCheck,Image as ImageIcon,Search} from 'lucide-react';
import {colleges} from '@/lib/data';

export default function Colleges(){
 const [q,setQ]=useState('');
 const [filter,setFilter]=useState('All');
 const filters=['All','Public','Federal / Cantt','Private / Trust','Residential / Cadet','Girls','O/A Level'];
 const shown=useMemo(()=>colleges.filter(c=>{
   const hay=(c.name+' '+c.district+' '+c.type+' '+c.programs.join(' ')).toLowerCase();
   const matchesSearch=hay.includes(q.toLowerCase());
   const matchesFilter=filter==='All'||
    (filter==='Public' && /public|government/i.test(c.type))||
    (filter==='Federal / Cantt' && /federal|cantt/i.test(c.type))||
    (filter==='Private / Trust' && /private|trust/i.test(c.type))||
    (filter==='Residential / Cadet' && /residential|cadet/i.test(c.type))||
    (filter==='Girls' && /girls/i.test(c.name+' '+c.type))||
    (filter==='O/A Level' && /o-level|a level|o\/a level/i.test(c.name+' '+c.type+' '+c.programs.join(' ')));
   return matchesSearch&&matchesFilter;
 }),[q,filter]);
 return <>
  <section className="page-hero"><div className="container">
   <span className="eyebrow">🏫 College Explorer</span>
   <h1>Explore colleges and residential institutions across Balochistan.</h1>
   <p>One province-wide explorer for public, federal, private/trust, residential, cadet, girls and O/A Level institutions. We are deliberately not splitting this into separate city pages yet.</p>
   <div className="notice success"><ShieldCheck size={15}/> Information is source-checked. Admissions, fees and available seats can change, so always open the official source before applying.</div>
  </div></section>
  <section className="section"><div className="container">
   <div className="search-box wide"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search college, district, group or program…"/></div>
   <div className="filter-row">{filters.map(f=><button key={f} className={`filter-chip ${filter===f?'active':''}`} onClick={()=>setFilter(f)}>{f}</button>)}</div>
   <div className="college-grid">{shown.map((c,i)=><article className={`college-card ${i===0&&filter==='All'&&!q?'featured-college':''}`} key={c.id}>
    {c.image?<img src={c.image} alt={`${c.name} official website image`} />:<div className="college-photo-placeholder"><ImageIcon size={30}/><span>Official photo not available yet</span></div>}
    <div className="college-body"><div className="card-top"><span className="tag">{c.type}</span><span className="verified-pill"><ShieldCheck size={12}/> Source checked</span></div>
     <h2>{c.name}</h2><p className="muted"><MapPin size={14}/> {c.district}, Balochistan</p>
     <div className="meta">{c.programs.map(p=><span key={p}>{p}</span>)}</div><p>{c.note}</p>
     <div className="card-actions"><a className="btn btn-primary" href={c.source} target="_blank" rel="noreferrer">Official source <ExternalLink size={13}/></a></div>
    </div></article>)}</div>
   {shown.length===0&&<div className="empty-state"><h3>No matching college found</h3><p>Try another district, college name or program.</p></div>}
  </div></section>
 </>;
}
