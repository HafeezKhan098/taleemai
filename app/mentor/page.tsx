'use client';

import { useState } from 'react';
import { Bot, Send, RotateCcw, ShieldCheck, UserRound } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; text: string };
const starter = 'Hi! I’m TaleemAI Mentor. Tell me what you need help with — for example, choosing a career, finding a scholarship, selecting a college, preparing for a test, learning a skill, or planning study abroad.';

function renderAnswer(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+|www\.[^\s)]+)/g);
  return parts.map((part, i) => {
    if (/^https?:\/\//i.test(part)) return <a key={i} className="answer-link" href={part.replace(/[.,]$/, '')} target="_blank" rel="noreferrer">{part}</a>;
    if (/^www\./i.test(part)) return <a key={i} className="answer-link" href={`https://${part.replace(/[.,]$/, '')}`} target="_blank" rel="noreferrer">{part}</a>;
    return part.split('\n').map((line, j, arr) => <span key={`${i}-${j}`}>{line}{j < arr.length - 1 ? <br/> : null}</span>);
  });
}

export default function Mentor() {
  const [profile, setProfile] = useState({education:'', marks:'', city:'', age:'', subjects:'', budget:'', goal:'', language:'English'});
  const [messages, setMessages] = useState<Msg[]>([{role:'assistant',text:starter}]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async (text = input) => {
    if (!text.trim() || loading) return;
    const next = [...messages, {role:'user' as const, text:text.trim()}];
    setMessages(next); setInput(''); setLoading(true);
    try {
      const r = await fetch('/api/mentor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({profile,history:next,message:text})});
      const d = await r.json().catch(()=>({}));
      setMessages([...next,{role:'assistant',text:d.answer || 'I could not generate an answer right now. Please try again.'}]);
    } catch {
      setMessages([...next,{role:'assistant',text:'I could not connect right now. Please try again in a moment.'}]);
    } finally { setLoading(false); }
  };

  const quick = ['Hey, what can you help me with?','I passed Matric with 78%. What should I choose?','Which scholarships can I apply for after 12th?','I want MBBS. Which tests do I need?','I have almost no budget. What are my options?'];
  const setP = (k:string,v:string) => setProfile(p=>({...p,[k]:v}));

  return <>
    <section className="page-hero rich-hero"><div className="container"><span className="eyebrow"><Bot size={14}/> TaleemAI Mentor</span><h1>Ask naturally. Get an answer that fits your question.</h1><p>You do not need to fill every field before chatting. TaleemAI uses whatever context you provide, asks follow-up questions when needed, and points you to official sources for important details.</p></div></section>
    <section className="section"><div className="container mentor-shell">
      <aside className="mentor-profile">
        <div className="mentor-profile-head"><div className="icon-box"><UserRound/></div><div><strong>Optional student profile</strong><small>Leave anything blank if you prefer.</small></div></div>
        <label className="question">Education<select value={profile.education} onChange={e=>setP('education',e.target.value)}><option value="">Choose</option>{['Matric','FSc','ICS','FA','I.Com','DAE','BS','Masters','PhD'].map(x=><option key={x}>{x}</option>)}</select></label>
        <label className="question">Marks / CGPA<input value={profile.marks} onChange={e=>setP('marks',e.target.value)} placeholder="e.g. 78% or 3.2/4"/></label>
        <label className="question">City / District<input value={profile.city} onChange={e=>setP('city',e.target.value)} placeholder="City (e.g. Pishin)"/></label>
        <label className="question">Age<input value={profile.age} onChange={e=>setP('age',e.target.value)} placeholder="Optional"/></label>
        <label className="question">Subjects / group<input value={profile.subjects} onChange={e=>setP('subjects',e.target.value)} placeholder="e.g. Pre-Medical, ICS, Maths"/></label>
        <label className="question">Budget<select value={profile.budget} onChange={e=>setP('budget',e.target.value)}><option value="">Choose</option><option>Very limited / need full support</option><option>Can manage public university costs</option><option>Can consider paid options</option></select></label>
        <label className="question">Main goal<select value={profile.goal} onChange={e=>setP('goal',e.target.value)}><option value="">Choose</option>{['Study / career guidance','Need a scholarship','Study abroad','Choose after Matric','Choose a degree','Find a college','Find a skill','Prepare for an entrance test'].map(x=><option key={x}>{x}</option>)}</select></label>
        <label className="question">Language<select value={profile.language} onChange={e=>setP('language',e.target.value)}><option>English</option><option>Urdu</option></select></label>
        <div className="notice success"><ShieldCheck size={15}/> Verified-source mode is on.</div>
        <button className="btn btn-secondary full" onClick={()=>{setMessages([{role:'assistant',text:starter}]);setInput('')}}><RotateCcw size={14}/> Reset conversation</button>
      </aside>

      <div className="chat-card">
        <div className="chat-head"><div><strong><Bot size={17}/> TaleemAI Mentor</strong><span>Scholarships · Careers · Tests · Colleges · Abroad · Skills</span></div><span className="live-dot">● Ready</span></div>
        <div className="quick-prompts">{quick.map(q=><button key={q} onClick={()=>send(q)}>{q}</button>)}</div>
        <div className="chat-messages">{messages.map((m,i)=><div key={i} className={'chat-msg '+m.role}><div className="msg-label">{m.role==='user'?'You':'TaleemAI'}</div><div className="msg-body">{m.role==='assistant'?renderAnswer(m.text):m.text}</div></div>)}{loading&&<div className="chat-msg assistant"><div className="msg-label">TaleemAI</div><div className="msg-body typing">Thinking about your question…</div></div>}</div>
        <div className="chat-input"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}} placeholder="Ask anything about your education…" rows={2}/><button className="btn btn-primary" onClick={()=>send()} disabled={loading||!input.trim()}><Send size={16}/> Send</button></div>
        <div className="source-note">Information can change. For live deadlines, fees, admissions and eligibility, open the official source linked in the answer.</div>
      </div>
    </div></section>
  </>;
}
