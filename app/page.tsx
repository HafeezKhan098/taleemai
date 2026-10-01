import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, GraduationCap, ShieldCheck, Sparkles, FileText, Search, Building2, BookOpenCheck, BrainCircuit, MapPinned, Landmark } from 'lucide-react';
import { scholarships, careers, skills, boardResources } from '@/lib/data';
import { ScholarshipCard } from '@/components/ScholarshipCard';

export const metadata: Metadata = {
  title: 'Pakistan Education, Scholarships & Career Guidance | Balochistan Students',
  description: 'TaleemAI is a free bilingual education platform for Pakistani students, especially Balochistan: scholarships, BBISE and board results, colleges, careers, tests, skills and study abroad guidance.',
  keywords: ['Balochistan scholarships', 'Pakistan scholarships', 'Balochistan students', 'career counseling Pakistan', 'BBISE result', 'Federal Board result', 'colleges in Balochistan', 'universities in Balochistan', 'study abroad scholarships Pakistan', 'education guidance Pakistan'],
};

const quickCards = [
  { icon: <BrainCircuit />, title: 'Ask Career Counseling AI', text: 'Get practical guidance based on your marks, interests, budget and goals.', href: '/mentor', tone: 'violet' },
  { icon: <GraduationCap />, title: 'Local / Study Abroad Scholarships', text: 'Explore BEEF, HEC, Pakistan and international scholarship routes.', href: '/scholarships', tone: 'mint' },
  { icon: <FileText />, title: 'BBISE & Board Portals', text: 'Direct result links and official board resources, including Federal Board.', href: '/bbise', tone: 'gold' },
  { icon: <Building2 />, title: 'Colleges & Universities', text: 'Explore selected colleges in Balochistan and universities across Pakistan.', href: '/colleges', tone: 'blue' },
  { icon: <BookOpenCheck />, title: 'Tests & Exams', text: 'MDCAT, NUMS, USAT, LAT, ECAT, NET, NAT and Directorate routes.', href: '/tests', tone: 'rose' },
  { icon: <Sparkles />, title: 'Skills Learning', text: 'Free and practical learning routes from DigiSkills, NAVTTC and more.', href: '/skills', tone: 'purple' },
  { icon: <MapPinned />, title: 'Balochistan Info', text: 'Education pathways, top colleges and provincial resources.', href: '/balochistan', tone: 'teal' },
];

const faqs = [
  ['What is TaleemAI?', 'TaleemAI is a free education and career guidance platform for Pakistani students, built Balochistan-first. It brings scholarships, colleges, tests, skills, board resources and study-abroad guidance together in one place.'],
  ['Can Balochistan students find scholarships here?', 'Yes. TaleemAI highlights Balochistan-specific routes such as BEEF, HEC Balochistan opportunities, Directorate pathways and selected international opportunities, with links to official sources.'],
  ['Can I check my BBISE result from TaleemAI?', 'Yes. The BBISE section provides direct links to official SSC and HSSC result portals and board services.'],
  ['Is TaleemAI free?', 'Yes. Students can use the education resources and AI Mentor without a paid membership. Always verify application fees or institutional charges on the official source.'],
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        name: 'TaleemAI',
        url: 'https://taleemai-mu.vercel.app',
        description: 'Free bilingual education, scholarship and career guidance for Pakistani students, especially Balochistan.',
        areaServed: 'Pakistan',
        educationalUse: 'Education and career guidance',
      },
      {
        '@type': 'Article',
        headline: 'Education, Scholarships and Career Guidance for Students in Balochistan and Pakistan',
        description: 'A practical guide to scholarships, colleges, board resources, entrance tests and career planning for Pakistani students.',
        author: { '@type': 'Organization', name: 'TaleemAI' },
        publisher: { '@type': 'Organization', name: 'TaleemAI' },
        mainEntityOfPage: 'https://taleemai-mu.vercel.app/',
        inLanguage: 'en',
      },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    <section className="home-hero-cinematic">
      <div className="home-hero-overlay" />
      <div className="container home-hero-content">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><Sparkles size={14}/> Pakistan's Future · Balochistan First</span>
          <h1>Your Education.<br/><span>Our Mission.</span></h1>
          <p>TaleemAI is a free education platform for Pakistani students — especially from Balochistan — helping you find scholarships, colleges, careers, tests, skills and study-abroad opportunities without getting lost in scattered information.</p>
          <div className="home-search"><Search size={18}/><input aria-label="Search education resources" placeholder="Search scholarships, colleges, careers, tests, skills and more…" /><Link href="/scholarships" aria-label="Explore education resources"><ArrowRight /></Link></div>
          <div className="home-tags"><span>Balochistan</span><span>Scholarships</span><span>Colleges</span><span>Career Guidance</span><span>Study Abroad</span><span>100% Free</span></div>
        </div>
      </div>
    </section>

    <section className="section quick-section">
      <div className="container">
        <div className="section-head"><div><span className="section-kicker">Quick access</span><h2>Find what you need, without the confusion.</h2><p>Simple starting points for the questions students ask every day.</p></div><Link className="text-link" href="/mentor">Ask TaleemAI <ArrowRight size={14}/></Link></div>
        <div className="quick-card-grid">
          {quickCards.map(c => <Link href={c.href} key={c.href} className={`quick-card ${c.tone}`}><div className="quick-icon">{c.icon}</div><div><h3>{c.title}</h3><p>{c.text}</p></div><span className="quick-arrow"><ArrowRight size={16}/></span></Link>)}
        </div>
      </div>
    </section>

    <section className="section colleges-preview-section">
      <div className="container">
        <div className="section-head"><div><span className="section-kicker">Balochistan education</span><h2>Top Colleges in Balochistan</h2><p>Start with institutions students commonly need to compare — not a random directory.</p></div><Link className="btn btn-secondary" href="/colleges">Explore colleges <ArrowRight size={14}/></Link></div>
        <div className="home-college-strip">
          {[
            ['Government Postgraduate Science College Quetta','Public · Quetta','https://gpsc.edu.pk/assets/images/home/college-campus.webp','/colleges'],
            ['Islamia Boys College Quetta','College · Quetta','','/colleges'],
            ['Tameer-i-Nau Public College','Trust · Quetta','https://tameerinau.edu.pk/wp-content/uploads/elementor/thumbs/1779354147500-scaled-rolpct6m0m333vdfhd478ymmk05e9x189zcyrhr470.jpg','/colleges'],
            ['Iqra Residential School & College','Residential · Quetta','https://irsc.edu.pk/wp-content/uploads/2025/11/day1-sports-300x300.jpg','/colleges'],
          ].map(([name,type,image,href]) => <Link href={href} className="home-college-card" key={name}>{image ? <img src={image} alt={`${name} official source photo`} loading="lazy"/> : <div className="home-college-photo-placeholder"><Building2 size={34}/><span>Official photo not verified yet</span></div>}<div><span>{type}</span><h3>{name}</h3><b>View admission guidance <ArrowRight size={13}/></b></div></Link>)}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-head"><div><span className="section-kicker">Boards & results</span><h2>Find your board, then go to the official source.</h2><p>BBISE is the Balochistan focus, but TaleemAI also points students toward Federal and other major board resources.</p></div><Link className="btn btn-secondary" href="/bbise">Open BBISE <ArrowRight size={14}/></Link></div>
        <div className="board-grid">{boardResources.slice(0,6).map(b=><a className="board-card" href={b.url} target="_blank" rel="noreferrer" key={b.name}><Landmark size={21}/><div><h3>{b.name}</h3><p>{b.desc}</p><span>Official portal <ArrowRight size={13}/></span></div></a>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head"><div><span className="section-kicker">Scholarship guide</span><h2>Opportunities worth checking</h2><p>We explain who an opportunity is for and send you to the official source before you apply.</p></div><Link className="btn btn-secondary" href="/scholarships">View scholarships</Link></div>
        <div className="grid-3">{scholarships.slice(0,3).map(s=><ScholarshipCard key={s.id} s={s}/>)}</div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container mentor-home-banner">
        <div><span className="section-kicker">Need a personal answer?</span><h2>Ask TaleemAI about your own situation.</h2><p>Tell it your class, marks, city, subjects, budget and goal. It can help you turn a confusing choice into practical next steps.</p><div className="home-mini-points"><span>✓ Natural conversation</span><span>✓ English + Urdu</span><span>✓ Official links</span><span>✓ No paid membership</span></div></div>
        <Link className="btn btn-primary" href="/mentor"><Bot size={17}/> Open AI Mentor</Link>
      </div>
    </section>

    <section className="section seo-article">
      <div className="container article-card">
        <span className="section-kicker">TaleemAI Education Guide</span>
        <h2>Education, Scholarships and Career Guidance for Students in Balochistan and Pakistan</h2>
        <p>Choosing what to study after Matric or Intermediate can be difficult when scholarship notices, college admissions, board results and entrance-test information are spread across different websites. TaleemAI brings these starting points together in simple language so a student can understand the route first and then open the official source for the final details.</p>
        <h3>Scholarships for Balochistan students</h3>
        <p>Students from Balochistan may need to check provincial opportunities such as BEEF, Higher Education Commission schemes, Directorate pathways and selected international scholarships. Eligibility depends on the individual scheme, so TaleemAI explains the route but keeps the official application source as the final authority.</p>
        <h3>Colleges and universities after Matric and Intermediate</h3>
        <p>After Matric, students can compare FSc, ICS, FA, I.Com, DAE and technical pathways. After Intermediate, they can explore universities in Balochistan such as University of Balochistan, BUITEMS and BUET Khuzdar, as well as universities elsewhere in Pakistan such as NUST, FAST and Punjab University. The right choice depends on the student's subjects, marks, budget, location and intended degree.</p>
        <h3>BBISE, Federal Board and other board information</h3>
        <p>Board information matters for results, certificates, admissions and applications. TaleemAI provides direct official links for BBISE and selected national board resources so students can reach the original portal instead of relying on copied result pages.</p>
        <h3>Career guidance that starts with the student</h3>
        <p>A career choice should not be based only on what sounds popular. Students can use TaleemAI to compare medical, computing, engineering, business, social sciences, education, creative and technical pathways, then check the subjects, tests, degree route, cost and skills required for each.</p>
        <h3>Frequently asked questions</h3>
        <div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </section>

    <section className="section"><div className="container"><div className="banner"><div><span className="eyebrow"><ShieldCheck size={14}/> Built around official sources</span><h2>Simple guidance. Verify before you apply.</h2><p>TaleemAI is a starting point for students — deadlines, fees, seats and eligibility can change, so always check the linked official source.</p></div><Link className="btn btn-primary" href="/contact">Suggest an update <ArrowRight size={14}/></Link></div></div></section>
  </>;
}
