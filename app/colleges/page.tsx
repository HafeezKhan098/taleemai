'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, MapPin, ShieldCheck, Search, GraduationCap, ClipboardCheck } from 'lucide-react';
import { colleges } from '@/lib/data';

const featured = ['science-quetta','islamia-boys-quetta','islamia-girls-quetta','tameer-inau','iqra-residential','city-school-quetta-a','cadet-killa-saifullah','cadet-noshki','cadet-pishin'];
const categories = [
  ['Top Balochistan', 'top'],
  ['BRCs', 'brc'],
  ['Cadet Colleges', 'cadet'],
  ['O / A Level', 'olevel'],
  ['Government / Federal', 'public'],
  ['All listed', 'all'],
] as const;

function categoryMatch(c: typeof colleges[number], category: string) {
  const text = `${c.name} ${c.type} ${c.programs.join(' ')}`.toLowerCase();
  if (category === 'top') return featured.includes(c.id);
  if (category === 'brc') return /residential college|brc/i.test(text);
  if (category === 'cadet') return /cadet|military college/i.test(text);
  if (category === 'olevel') return /o[-/ ]?level|a[-/ ]?level|city school|pak-turk|iqra residential/i.test(text);
  if (category === 'public') return /public|government|federal|cantt/i.test(c.type);
  return true;
}

export default function Colleges() {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('top');
  const shown = useMemo(() => {
    const query = q.toLowerCase().trim();
    return colleges.filter(c => categoryMatch(c, category) && (!query || `${c.name} ${c.district} ${c.type} ${c.programs.join(' ')}`.toLowerCase().includes(query)));
  }, [q, category]);

  return <>
    <section className="page-hero rich-hero">
      <div className="container">
        <span className="eyebrow">🏫 Balochistan College Explorer</span>
        <h1>Find the colleges that actually matter for your next step.</h1>
        <p>We focus on useful institutions first: leading Quetta colleges, BRCs, cadet colleges, O/A Level routes, federal colleges and selected public institutions across Balochistan.</p>
        <div className="hero-stats"><div><b>{colleges.length}+</b><span>verified entries</span></div><div><b>11</b><span>BRC / cadet pathways</span></div><div><b>1</b><span>official source per card</span></div></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="college-guide-banner">
          <div><span className="section-kicker">How TaleemAI helps</span><h2>Don't choose a college from a name alone.</h2><p>Compare the group you need, location, residential option, gender, admission route and official source. Admission rules can change every session.</p></div>
          <a className="btn btn-primary" href="https://portal.chte.gob.pk/" target="_blank" rel="noreferrer"><ClipboardCheck size={16}/> CHTE admissions</a>
        </div>

        <div className="search-box wide"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search college, district, type or program…"/></div>
        <div className="filter-row">{categories.map(([label, value]) => <button key={value} className={`filter-chip ${category===value?'active':''}`} onClick={()=>setCategory(value)}>{label}</button>)}</div>

        {category === 'brc' && <div className="admission-guide card">
          <div className="icon-box"><GraduationCap size={20}/></div>
          <h2>Balochistan Residential Colleges — admission route</h2>
          <p>BRC Loralai's published policy is a useful example of how a residential-college admission cycle can work: eligibility is checked first, an entry test is conducted, and selection follows the current college policy. Its 7th-class policy specifies a Class VI syllabus-based test, while its 1st-year policy uses Matric eligibility and a test based on the prescribed SSC syllabus. Other BRCs can publish different details, so students should always open the current notice.</p>
          <div className="meta"><span>Check current advertisement</span><span>Check age / marks</span><span>Download form</span><span>Prepare for entry test</span></div>
          <a className="source-link" href="https://admin.brcloralai.edu.pk/admission-class-seven" target="_blank" rel="noreferrer">BRC Loralai official admission policy <ExternalLink size={13}/></a>
        </div>}

        <div className="college-grid">
          {shown.map((c, i) => {
            const photo = c.image;
            return <article className={`college-card ${featured.includes(c.id) ? 'featured-college' : ''}`} key={c.id}>
              {photo ? <div className="photo-wrap"><img src={photo} alt={`${c.name} campus`} loading={i < 4 ? 'eager' : 'lazy'} /><span className="photo-credit">Official/source photo</span></div> : <div className="college-photo-placeholder"><GraduationCap size={36}/><span>Campus photo not yet verified</span></div>}
              <div className="college-body">
                <div className="card-top"><span className="tag">{c.type}</span><span className="verified-pill"><ShieldCheck size={12}/> Source checked</span></div>
                <h2>{c.name}</h2>
                <p className="muted"><MapPin size={14}/> {c.district}, Balochistan</p>
                <div className="meta">{c.programs.slice(0,6).map(p=><span key={p}>{p}</span>)}</div>
                <p>{c.note}</p>
                <div className="card-actions"><a className="btn btn-primary" href={c.source} target="_blank" rel="noreferrer">Official source <ExternalLink size={13}/></a></div>
              </div>
            </article>;
          })}
        </div>
        {!shown.length && <div className="empty-state"><Search size={28}/><h3>No matching college found</h3><p>Try another college name, district or category.</p></div>}
      </div>
    </section>

    <section className="section section-alt"><div className="container"><div className="two-col"><div><span className="section-kicker">Province-wide coverage</span><h2>Residential & Cadet Colleges</h2><p>Balochistan's official EMIS list includes cadet and residential institutions across districts including Dera Bugti, Gwadar, Jaffarabad, Killa Saifullah, Kohlu, Mastung, Panjgur, Pishin, Turbat, Loralai and Khuzdar.</p></div><div className="card"><a className="btn btn-secondary" href="https://emis.gob.pk/website/CadetAndResidentialCollages.aspx" target="_blank" rel="noreferrer">Open official EMIS list <ExternalLink size={14}/></a><p className="source-note">Always verify the current admission class, age, test, seats and fee from the institution's current notice.</p></div></div></div></section>
  </>;
}
