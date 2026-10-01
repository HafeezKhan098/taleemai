'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, MapPin, Search, GraduationCap } from 'lucide-react';
import { universities } from '@/lib/data';

const tabs = [
  ['Balochistan Universities','balochistan'],
  ['Pakistan Universities','pakistan'],
  ['All','all'],
] as const;

export default function Universities() {
  const [tab, setTab] = useState('balochistan');
  const [q, setQ] = useState('');
  const shown = useMemo(() => universities.filter(u => {
    const inTab = tab === 'all' || (tab === 'balochistan' ? u.type.includes('Balochistan') : !u.type.includes('Balochistan'));
    const hay = `${u.name} ${u.city} ${u.type} ${u.focus}`.toLowerCase();
    return inTab && hay.includes(q.toLowerCase());
  }), [tab, q]);

  return <>
    <section className="page-hero rich-hero"><div className="container"><span className="eyebrow">🎓 University Explorer · Balochistan → Pakistan</span><h1>Start with the university. Then check the exact degree.</h1><p>Explore major universities in Balochistan first, then selected universities across Pakistan. This is a discovery guide, not a ranking — program eligibility, accreditation, fees and admissions must be checked with the university.</p></div></section>
    <section className="section"><div className="container">
      <div className="university-explorer-head"><div><span className="section-kicker">Explore institutions</span><h2>Universities students commonly need to compare</h2></div></div>
      <div className="search-box wide"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search university, city or field…"/></div>
      <div className="university-tabs">{tabs.map(([label,value])=><button key={value} className={tab===value?'active':''} onClick={()=>setTab(value)}>{label}</button>)}</div>
      <div className="grid-3">
        {shown.map(u=><article className="card university-card" key={u.name}>
          <div className="university-photo-wrap">{u.image ? <img className="university-photo" src={u.image} alt={`${u.name} campus`} loading="lazy" onError={(e)=>{e.currentTarget.src='https://commons.wikimedia.org/wiki/Special:FilePath/Ziarat-Quetta%20Pakistan%20Landscape.jpg?width=900'}}/> : <div className="university-photo-placeholder"><GraduationCap size={38}/><span>Verified campus photo pending</span></div>}</div>
          <div className="university-body"><span className="tag">{u.type}</span><h2>{u.name}</h2><p><b><MapPin size={13}/> {u.city}</b></p><p>{u.focus}</p><div className="card-actions"><a className="btn btn-secondary" href={u.source} target="_blank" rel="noreferrer">Official website <ExternalLink size={13}/></a></div><p className="image-credit">{u.credit}</p></div>
        </article>)}
      </div>
      {!shown.length && <div className="empty-state"><GraduationCap size={28}/><h3>No university found</h3><p>Try a different name or city.</p></div>}
      <div className="notice" style={{marginTop:22}}>TaleemAI does not label one university as universally “best”. Compare the exact program, accreditation, entry test, tuition, hostel, scholarships, distance and career fit for your own situation.</div>
    </div></section>
  </>;
}
