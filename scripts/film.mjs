// Original vector motion design. Shared deterministic renderer for production frames and contact sheets.
export const DURATION=21;
export const cuts=[0,3,6,10,14,18,21];
const clamp=x=>Math.max(0,Math.min(1,x));
const ease=x=>1-Math.pow(1-clamp(x),3);
const blend=(a,b,t)=>a+(b-a)*t;
export function drawFrame(c,w,h,t){
 const sx=w/1280,sy=h/720;c.save();c.scale(sx,sy);
 const bg='#151c19',ink='#eee8dc',copper='#d9a781',muted='#8d9b8e';
 c.fillStyle=bg;c.fillRect(0,0,1280,720);
 c.strokeStyle='#29382e';c.lineWidth=.6;
 for(let x=60;x<1280;x+=80){c.beginPath();c.moveTo(x,0);c.lineTo(x,720);c.stroke();}
 for(let y=40;y<720;y+=80){c.beginPath();c.moveTo(0,y);c.lineTo(1280,y);c.stroke();}
 const scene=Math.min(5,cuts.findIndex((cut,i)=>t>=cut&&t<cuts[i+1]));
 const index=scene<0?5:scene,start=cuts[index],age=t-start,span=cuts[index+1]-start;
 const enter=ease(age/.8),leave=clamp((span-age)/.45);
 c.fillStyle=muted;c.font='13px "DejaVu Sans Mono"';c.fillText('SYED MUHAMMAD BIN ALI',56,44);c.fillText('A STUDY IN CREATIVE ENGINEERING',870,44);
 c.strokeStyle='#52624e';c.beginPath();c.moveTo(56,65);c.lineTo(1224,65);c.stroke();
 c.fillStyle=copper;c.fillRect(56,675,(t/21)*1168,2);c.fillStyle=muted;c.font='12px "DejaVu Sans Mono"';c.fillText(['01 / SIGNAL','02 / IDENTITY','03 / DEVELOPMENT','04 / INTELLIGENCE','05 / DIGITAL PRODUCTS','06 / SIGNATURE'][index],56,651);c.fillText(`${String(Math.floor(t)).padStart(2,'0')} / 21`,1150,651);
 function text(s,x,y,size=70,color=ink,serif=false){c.fillStyle=color;c.font=`${serif?'italic ':'500 '}${size}px "${serif?'Astra Serif':'Astra Sans'}"`;c.fillText(s,x,y);}
 function line(x,y,xx,yy,col=copper,lw=1){c.strokeStyle=col;c.lineWidth=lw;c.beginPath();c.moveTo(x,y);c.lineTo(xx,yy);c.stroke();}
 function rect(x,y,ww,hh,col=copper,lw=1){c.strokeStyle=col;c.lineWidth=lw;c.strokeRect(x,y,ww,hh);}
 c.save();c.globalAlpha=enter*leave;
 if(index===0){
  text('It starts with',70,285,64);text('a signal.',70,373,100,copper,true);text('ONE IDEA. MANY POSSIBILITIES.',74,435,14,muted);
  for(let i=0;i<70;i++){const k=i/69;c.strokeStyle=`rgba(218,171,131,${.15+k*.65})`;c.lineWidth=1;c.beginPath();for(let j=0;j<=110;j++){let u=j/110;let x=650+u*490;let y=355+Math.sin(u*5.4+t*.9+k*2.8)*blend(6,180,enter)*Math.sin(k*Math.PI);j===0?c.moveTo(x,y):c.lineTo(x,y);}c.stroke();}
 }else if(index===1){
  text('Syed Muhammad',70,245+30*(1-enter),67);text('Bin Ali.',64,407+45*(1-enter),172);text('DEVELOPER / AUTOMATION BUILDER / CREATIVE TECHNOLOGIST',75,481,16,copper);
  c.save();c.translate(1040,310);c.rotate(t*.09);for(let i=0;i<26;i++){c.rotate(.07);rect(-100-i*1.2,-100-i*1.2,200+i*2.4,200+i*2.4,i%3===0?copper:'#3e5241');}c.restore();
 }else if(index===2){
  text('Give the idea',65,235,65);text('a structure.',65,316,80,copper,true);text('INTERFACE  /  STATE  /  SYSTEM',70,383,14,muted);
  c.save();c.translate(875,350);c.transform(1,-.12,.22,1,0,0);
  for(let i=2;i>=0;i--){const z=i*42; c.fillStyle='#1d2921';c.fillRect(-185+z,-160-z,300,260);rect(-185+z,-160-z,300,260,i===0?copper:'#52654f');line(-170+z,-126-z,100+z,-126-z,'#52654f');for(let j=0;j<3;j++)line(-160+z,-84-z+j*37,blend(-80,64,ease((age-j*.2)/.8))+z,-84-z+j*37,j===0?copper:'#68785d',j===0?6:3);rect(-160+z,50-z,74,25,'#728065');}
  c.restore();
 }else if(index===3){
  text('Make the',65,189,62);text('connections count.',65,267,75,copper,true);text('INTENT → CONTEXT → DECISION → HUMAN REVIEW → ACTION',70,326,14,muted);
  const xs=[126,376,626,876,1126],labels=['INPUT','CONTEXT','REASON','REVIEW','ACTION'];
  for(let i=0;i<4;i++){line(xs[i],475,xs[i+1],475,'#485743');const q=clamp((age-.3-i*.45)/.5);line(xs[i],475,blend(xs[i],xs[i+1],q),475,copper,2);}
  for(let i=0;i<5;i++){const on=age>.3+i*.45;c.fillStyle=on?'#d9a781':bg;c.beginPath();c.arc(xs[i],475,on?10:5,0,Math.PI*2);c.fill();c.strokeStyle=on?copper:'#596d51';c.beginPath();c.arc(xs[i],475,30,0,Math.PI*2);c.stroke();c.fillStyle=muted;c.font='12px "DejaVu Sans Mono"';c.textAlign='center';c.fillText(labels[i],xs[i],538);c.textAlign='left';}
 }else if(index===4){
  text('Build for',65,232,65);text('the person.',65,318,85,copper,true);text('PRODUCTS. NOT JUST PIXELS.',70,392,14,muted);
  c.save();c.translate(760,150+20*(1-enter));c.fillStyle='#26372a';c.fillRect(0,0,375,340);rect(0,0,375,340,copper);line(0,33,375,33,'#78846a');for(let i=0;i<3;i++){c.fillStyle='#d9a781';c.beginPath();c.arc(16+i*14,16,3,0,6.29);c.fill();}text('Considered commerce.',24,84,25);for(let i=0;i<3;i++){rect(24+i*112,112,94,120,'#718166');c.save();c.translate(71+i*112,167);c.rotate(Math.sin(age+i)*.08);rect(-17,-30,34,60,copper);c.restore();line(24+i*112,251,94+i*112,251,copper,3);}c.fillStyle=copper;c.fillRect(24,280,120,32);text('DISCOVER',38,301,13,bg);c.fillStyle='#17221b';c.fillRect(265,175,134,259);rect(265,175,134,259,copper);line(288,205,372,205,muted,2);rect(284,230,95,110,muted);text('01',300,300,39,copper);c.fillStyle=copper;c.fillRect(284,376,95,29);c.restore();
 }else{
  text('Useful technology.',65,280,98);text('Built with intention.',67,395,94,copper,true);text('SYED MUHAMMAD BIN ALI',72,463,19);text('EXPLORE THE WORK ↗',73,536,17,muted);
  for(let i=0;i<32;i++){const k=i/31;c.strokeStyle=`rgba(218,171,131,${.2+k*.5})`;c.beginPath();c.moveTo(1080+k*80,175);c.bezierCurveTo(980,250+k*180,1170,400-k*80,1050+k*90,480);c.stroke();}
 }
 c.restore();c.restore();
}
