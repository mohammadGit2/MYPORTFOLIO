export type DemoKind = 'social' | 'company';
export function createDemo(kind: DemoKind, raw: string) {
 const input = raw.trim().replace(/\s+/g, ' ').slice(0, 240);
 if (!input) return [];
 return kind === 'social' ? [
  { title: 'Introduce the idea', body: `Meet ${input}. Here’s the idea behind our next launch.`, meta: 'POST 01 · INTRODUCTION' },
  { title: 'Start a conversation', body: `What would you like to know about ${input}? Share your questions below.`, meta: 'POST 02 · ENGAGEMENT' },
  { title: 'Invite the next step', body: `Interested in ${input}? Send us a message to discuss the details.`, meta: 'POST 03 · CALL TO ACTION' },
 ] : [
  { title: 'Request captured', body: input, meta: '01 · INTAKE' },
  { title: 'Task ready for assignment', body: 'Choose an owner, confirm the scope, and set a due date before execution.', meta: '02 · OPERATIONS QUEUE' },
  { title: 'Status update prepared', body: `New request: ${input}. Status: awaiting team review.`, meta: '03 · REVIEW' },
 ];
}
