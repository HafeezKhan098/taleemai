'use client';
import {useState} from 'react';
import {Bot,Send,RotateCcw,ShieldCheck,Sparkles} from 'lucide-react';

type Msg={role:'user'|'assistant';text:string};
const starter='Hi! I am TaleemAI Mentor. Tell me your education level, marks/CGPA, district, age and what you want to do. You can also ask a direct question like “I passed Matric with 78% — should I choose FSc or ICS?”';
export default function Mentor(){
 const [profile,setProfile]=useState({education:'FSC',marks:'',district:'Pishin',age:'',goal:'Study / career guidance',language:'English'});
 const [messages,setMessages]=useState<Msg[]>([{role:'assistant',text:starter}]);
 const [input,setInput]=useState(''); const [loading,setLoading]=useState(false);
 const send=async(text=input)=>{if(!text.trim()||loading)return; const next=[...messages,{role:'user' as const,text:text.trim()}];setMessages(next);setInput('');setLoading(true);try{const r=await fetch('/api/mentor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({profile,history:next,message:text})});const d=await r.json().catch(()=>({})); if(!r.ok){ setMessages([...next,{role:'assistant',text:d.answer||'The AI service is not available right now.'}]); } else { setMessages([...next,{role:'assistant',text:d.answer||'Please try again.'}]); }}catch{setMessages([...next,{role:'assistant',text:'I could not connect right now. Please try again.'}]);}finally{setLoading(false)}};
 const quick=['What scholarships fit me?','What can I study after Matric?','Show BS abroad options','What documents should I prepare?'];
 return <><section className="page-hero"><div className="container"><span className="eyebrow"><Bot size={14}/> TaleemAI Mentor</span><h1>Ask questions like you would ask a real counselor.</h1><p>Chat naturally about scholarships, study after Matric, careers, universities, financial support and studying abroad. TaleemAI uses its verified dataset for specific facts and tells you when something needs fresh official verification.</p></div></section>
 <section className="section"><div className="container mentor-shell">
  <aside className="mentor-profile"><div className="mentor-profile-head"><div className="icon-box"><Sparkles/></div><div><strong>Your profile</strong><small>Used only to make the conversation more useful.</small></div></div>
   {Object.entries({education:'Education',marks:'Marks / CGPA',district:'District',age:'Age',goal:'Goal',language:'Language'}).map(([k,l])=><label className="question" key={k}>{l}{k==='education'||k==='district'||k==='goal'||k==='language'?<select value={(profile as any)[k]} onChange={e=>setProfile({...profile,[k]:e.target.value})}>{(k==='education'?['Matric','FSC','ICS','FA','I.Com','DAE','BS','Masters','PhD']:k==='district'?['Pishin','Quetta','Chaman','Killa Abdullah','Zhob','Loralai','Khuzdar','Gwadar','Kech (Turbat)','Awaran','Lasbela / Hub','Other Pakistan']:k==='goal'?['Study / career guidance','Need a scholarship','Study abroad','Choose after Matric','Choose a degree','Find a college','Find a skill']:['English','Urdu']).map(x=><option key={x}>{x}</option>)}</select>:<input value={(profile as any)[k]} onChange={e=>setProfile({...profile,[k]:e.target.value})} placeholder={k==='marks'?'e.g. 78':k==='age'?'e.g. 18':''}/>}</label>)}
   <div className="notice success"><ShieldCheck size={15}/> Verified-source mode is on. Specific scholarship facts come from the TaleemAI dataset and official links.</div>
   <button className="btn btn-secondary full" onClick={()=>{setMessages([{role:'assistant',text:starter}]);setInput('')}}><RotateCcw size={14}/> Reset chat</button>
  </aside>
  <div className="chat-card"><div className="chat-head"><div><strong><Bot size={17}/> TaleemAI Mentor</strong><span>Scholarships • Careers • Abroad • Education</span></div><span className="live-dot">● Online</span></div>
   <div className="quick-prompts">{quick.map(q=><button key={q} onClick={()=>send(q)}>{q}</button>)}</div>
   <div className="chat-messages">{messages.map((m,i)=><div key={i} className={'chat-msg '+m.role}><div className="msg-label">{m.role==='user'?'You':'TaleemAI'}</div><div className="msg-body">{m.text}</div></div>)}{loading&&<div className="chat-msg assistant"><div className="msg-label">TaleemAI</div><div className="msg-body typing">Thinking…</div></div>}</div>
   <div className="chat-input"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}} placeholder="Ask anything about your education…" rows={2}/><button className="btn btn-primary" onClick={()=>send()} disabled={loading||!input.trim()}><Send size={16}/> Send</button></div>
   <div className="source-note">Last dataset verification: 29 September 2026 · AI answers use the verified TaleemAI dataset. Always open the official source before applying.</div>
  </div>
 </div></section></>;
}
