import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Globe2, GraduationCap, Mail, Smartphone } from 'lucide-react';

const services = [
  ['School / College Website', 'Admissions, programs, faculty, notices, location, contact and online enquiry.', GraduationCap],
  ['Academy / Institute Website', 'Courses, batches, fees guidance, timetable information, results and WhatsApp/contact CTAs.', Building2],
  ['Local Business Website', 'A clean online presence for shops, restaurants, clinics, services and other local businesses.', Globe2],
];

export default function GetOnline(){
  return <>
    <section className="page-hero get-online-hero">
      <div className="container">
        <span className="eyebrow"><Globe2 size={14}/> For institutions & local businesses</span>
        <h1>Get your school, college or business online.</h1>
        <p>Have an institution or business that people search for but cannot find a proper website for? We can build a fast, mobile-friendly website around your real information, photos and services.</p>
        <div className="get-online-actions">
          <a className="btn btn-primary" href="mailto:hafeezkaka098@gmail.com?subject=Website%20request%20for%20my%20institution%20or%20business">Start a website request <ArrowRight size={15}/></a>
          <Link className="btn btn-secondary" href="/contact">Contact TaleemAI</Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head"><div><span className="section-kicker">What we can build</span><h2>Useful websites, not complicated software.</h2><p>The goal is simple: make your institution or business easier to trust, find and contact on a phone or computer.</p></div></div>
        <div className="grid-3">
          {services.map(([title,text,Icon])=><article className="card get-online-card" key={title as string}><div className="icon-box"><Icon size={20}/></div><h3>{title as string}</h3><p>{text as string}</p><ul className="checklist"><li>Responsive on phones, tablets and laptops</li><li>Clear information and contact actions</li><li>SEO-ready page structure</li></ul></article>)}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container get-online-process">
        <div><span className="section-kicker">Simple process</span><h2>Send the real information. We handle the web side.</h2><p>Share your name, location, photos, services/programs, contact details and any existing social page. A preview can be prepared first so you can see the direction before the full website is developed.</p></div>
        <div className="get-online-steps">
          <div><b>1</b><span>Send details & photos</span></div>
          <div><b>2</b><span>Review the preview</span></div>
          <div><b>3</b><span>Refine the website</span></div>
          <div><b>4</b><span>Publish & keep it updated</span></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="banner get-online-banner"><div><span className="eyebrow"><Smartphone size={14}/> Built for mobile first</span><h2>Your students and customers are already on their phones.</h2><p>A good website should make the important action obvious: call, message, apply, visit, book or learn more.</p></div><a className="btn btn-primary" href="mailto:hafeezkaka098@gmail.com?subject=I%20want%20a%20website"><Mail size={15}/> Email a request</a></div>
      </div>
    </section>
  </>;
}
