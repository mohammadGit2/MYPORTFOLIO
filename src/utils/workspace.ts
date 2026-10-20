import { createDemo, type DemoKind } from './demo';
export type WorkStatus = 'Draft' | 'Approved' | 'To do' | 'In progress' | 'Done';
export interface WorkItem { id: string; kind: DemoKind; title: string; body: string; owner: string; date: string; status: WorkStatus; }
export const STORAGE_KEY = 'syed-portfolio-workspace-v1';
export const statuses = (kind: DemoKind): WorkStatus[] => kind === 'social' ? ['Draft','Approved'] : ['To do','In progress','Done'];
export function makeItems(kind: DemoKind, input: string, owner: string, date: string, id: string): WorkItem[] {
 const title = input.trim().slice(0,240);
 if (!title) return [];
 if (kind === 'company') return [{id,kind,title,body:'',owner:owner.trim().slice(0,80),date,status:'To do'}];
 return createDemo(kind,title).map((r,i)=>({id:`${id}-${i}`,kind,title:r.title,body:r.body,owner,date,status:'Draft'}));
}
export function parseItems(raw: string | null): WorkItem[] {
 if (!raw) return [];
 const data: unknown = JSON.parse(raw);
 if (!Array.isArray(data)) throw new Error('Invalid saved workspace');
 const ids = new Set<string>();
 return data.filter((x): x is WorkItem => {
  if (!x || typeof x !== 'object') return false;
  const a=x as WorkItem;
  if (!['social','company'].includes(a.kind) || !['id','title','body','owner','date','status'].every(k=>typeof (x as Record<string,unknown>)[k]==='string')) return false;
  if (ids.has(a.id) || !statuses(a.kind).includes(a.status)) return false;
  ids.add(a.id);return true;
 }).slice(0,100).map(x=>({...x,title:x.title.slice(0,240),body:x.body.slice(0,4000),owner:x.owner.slice(0,80)}));
}
export function itemsCsv(items: WorkItem[]): string {
 const quote=(value:string)=>'"'+(/^[\s]*[=+\-@]/.test(value)?"'"+value:value).replace(/"/g,'""')+'"';
 const rows=[['Type','Title','Content / notes','Platform / owner','Date','Status'],...items.map(x=>[x.kind,x.title,x.body,x.owner,x.date,x.status])];
 return '\uFEFF'+rows.map(row=>row.map(quote).join(',')).join('\r\n');
}
