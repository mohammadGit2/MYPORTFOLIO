import { useEffect, useState } from 'react';
import type { DemoKind } from '../utils/demo';
import { itemsCsv, makeItems, parseItems, statuses, STORAGE_KEY, type WorkItem } from '../utils/workspace';
const config = {
 social: {number:'01', label:'SOCIAL MEDIA AUTOMATION', title:'A content workflow.\nWithout the busywork.', description:'Turn a campaign brief into editable post drafts. Organize your content, choose planned dates, and export your content calendar.', prompt:'What are you launching?', sample:'a new coffee subscription', stack:'Content planning / Draft editing / CSV export'},
 company: {number:'02', label:'COMPANY MANAGEMENT AGENT', title:'Less chasing updates.\nMore moving forward.', description:'Capture business tasks, assign an owner, set a due date, and track progress in one compact workspace.', prompt:'What needs to get done?', sample:'Prepare the onboarding checklist for a new team member', stack:'Task management / Ownership / Status tracking'}
};
export function FeaturedSystems(){
 const [kind,setKind]=useState<DemoKind>('social');
 const [input,setInput]=useState(config.social.sample);
 const [owner,setOwner]=useState('LinkedIn');
 const [date,setDate]=useState('');
 const [items,setItems]=useState<WorkItem[]>([]);
 const [ready,setReady]=useState(false);
 const [writeAllowed,setWriteAllowed]=useState(false);
 const [saveError,setSaveError]=useState('');
 const [notice,setNotice]=useState('');
 const [editing,setEditing]=useState<string|null>(null);
 const [deleted,setDeleted]=useState<WorkItem|null>(null);
 useEffect(()=>{try{setItems(parseItems(localStorage.getItem(STORAGE_KEY)));setWriteAllowed(true);}catch{setSaveError('Saved data could not be loaded. This session still works; export a backup.');}setReady(true);},[]);
 useEffect(()=>{if(!ready||!writeAllowed)return;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(items));setSaveError('');}catch{setSaveError('Browser storage is unavailable. Your changes are in memory; export before leaving.');}},[items,ready,writeAllowed]);
 function choose(next:DemoKind){setKind(next);setInput(config[next].sample);setOwner(next==='social'?'LinkedIn':'');setEditing(null);setNotice('');}
 function update(id:string,patch:Partial<WorkItem>){setWriteAllowed(true);setItems(prev=>prev.map(x=>x.id===id?{...x,...patch}:x));}
 function remove(item:WorkItem){setWriteAllowed(true);setItems(prev=>prev.filter(x=>x.id!==item.id));setDeleted(item);setNotice('Item removed. You can undo this.');}
 const c=config[kind];
 const visible=items.filter(x=>x.kind===kind);
 function exportCsv(){const url=URL.createObjectURL(new Blob([itemsCsv(visible)],{type:'text/csv;charset=utf-8;'}));const link=document.createElement('a');link.href=url;link.download=kind==='social'?'content-calendar.csv':'company-tasks.csv';document.body.appendChild(link);link.click();link.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1000);setNotice('CSV export prepared.');}
 return <section id="featured" className="featured-section section" aria-labelledby="featured-title" tabIndex={-1}>
  <div className="feature-heading"><span className="eyebrow">01 / Automation in action</span><h2 id="featured-title">Built around<br/><span className="muted">real work.</span></h2><p>Two systems. One goal: make the work flow.<br/>Try the working tools below.</p></div>
  <div className="system-tabs" role="group" aria-label="Choose a featured system">{(['social','company'] as DemoKind[]).map(k=><button key={k} aria-pressed={kind===k} onClick={()=>choose(k)}><span>{config[k].number}</span>{k==='social'?'Social media automation':'Company management'}<span>↗</span></button>)}</div>
  <div className="featured-system"><div className="featured-story"><span className="eyebrow">{c.label}</span><h3>{c.title.split('\n').map(line=><span key={line}>{line}</span>)}</h3><p>{c.description}</p><ul>{(kind==='social'?['Create and edit three starter post drafts','Set planned dates and approve your content','Save on this browser and export a calendar']:['Add tasks with owners and due dates','Track work from To do through Done','Save on this browser and export team tasks']).map(s=><li key={s}><span>↳</span>{s}</li>)}</ul><span className="feature-stack">{c.stack}</span><a href="#contact" className="text-link">Build a system like this ↗</a></div>
   <div className="demo-workbench"><div className="workbench-top"><span><i/> {kind==='social'?'CONTENT PLANNER':'TASK WORKSPACE'}</span><span>{saveError?'SESSION ONLY':'BROWSER STORAGE'}</span></div>
    <form onSubmit={e=>{e.preventDefault();if(!ready||!input.trim())return;const batch=makeItems(kind,input,owner,date,crypto.randomUUID());if(items.length+batch.length>100){setNotice('Workspace limit reached (100 items). Export and remove older items first.');return;}setWriteAllowed(true);setItems(prev=>[...batch,...prev]);setNotice(kind==='social'?'Three editable starter drafts created.':'Task added.');if(kind==='company')setInput('');}}><label htmlFor="demo-input">{c.prompt}</label><div className="demo-input-row"><input id="demo-input" maxLength={240} value={input} onChange={e=>setInput(e.target.value)} required/><button type="submit" disabled={!ready||!input.trim()} aria-label={kind==='social'?'Create post drafts':'Add task'}>+</button></div>
    <div className="workspace-fields"><label>{kind==='social'?'Platform':'Task owner'}{kind==='social'?<select value={owner} onChange={e=>setOwner(e.target.value)}><option>LinkedIn</option><option>Instagram</option><option>Facebook</option></select>:<input value={owner} maxLength={80} placeholder="e.g. Ahsan" onChange={e=>setOwner(e.target.value)}/>}</label><label>{kind==='social'?'Planned date':'Due date'}<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label></div></form>
    <div className="workspace-toolbar"><span>{visible.length} {kind==='social'?'posts':'tasks'} · {visible.filter(x=>x.status===(kind==='social'?'Approved':'Done')).length} {kind==='social'?'approved':'done'}</span><button disabled={!visible.length} onClick={exportCsv}>Export CSV ↓</button></div>
    <div className="demo-results workspace-results">{visible.length?visible.map(r=><article className="demo-result" key={r.id}><span>{r.owner||'UNASSIGNED'}{r.date?` · ${r.date}`:''}</span>{editing===r.id?<div className="item-editor"><label>Title<input maxLength={240} value={r.title} onChange={e=>update(r.id,{title:e.target.value})}/></label><label>{kind==='social'?'Post text':'Notes'}<textarea maxLength={4000} value={r.body} rows={4} onChange={e=>update(r.id,{body:e.target.value})}/></label><div className="workspace-fields"><label>{kind==='social'?'Platform':'Owner'}<input maxLength={80} value={r.owner} onChange={e=>update(r.id,{owner:e.target.value})}/></label><label>Date<input type="date" value={r.date} onChange={e=>update(r.id,{date:e.target.value})}/></label></div><button onClick={()=>setEditing(null)}>Finish editing ✓</button></div>:<><h4>{r.title||'Untitled'}</h4>{r.body&&<p>{r.body}</p>}</>}
      <div className="item-actions"><label><span className="sr-only">Status for {r.title}</span><select value={r.status} onChange={e=>update(r.id,{status:e.target.value as WorkItem['status']})}>{statuses(kind).map(s=><option key={s}>{s}</option>)}</select></label><button onClick={()=>setEditing(editing===r.id?null:r.id)}>{editing===r.id?'Close editor':'Edit'}</button><button aria-label={`Delete ${r.title}`} onClick={()=>remove(r)}>Delete</button></div>
    </article>):<div className="demo-empty"><span aria-hidden="true">{'{ + }'}</span><p>{kind==='social'?'Your content calendar starts here.':'Your next task starts here.'}</p><small>{kind==='social'?'Enter a brief and press + to create editable drafts.':'Add a task, owner, and due date above.'}</small></div>}</div>
    <div className="demo-end"><span role="status">{notice||(!ready?'Loading workspace…':saveError?'Changes kept for this session':'Changes save automatically in this browser')}</span>{deleted&&<button onClick={()=>{if(items.length>=100){setNotice('Remove another item before undoing.');return;}setWriteAllowed(true);setItems(prev=>[deleted,...prev]);setDeleted(null);setNotice('Item restored.');}}>Undo delete ↶</button>}</div>
    <p className="demo-disclosure">{saveError||'Stored on this device only; export for backup. No account sync.'} {kind==='social'?'Starter copy uses templates. Planned dates do not publish posts.':'This is your personal task board; it does not notify teammates.'}</p>
   </div></div>
 </section>;
}
