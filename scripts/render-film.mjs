import { createRequire } from 'node:module';
import { mkdirSync,writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { drawFrame,DURATION } from './film.mjs';
const require=createRequire(import.meta.url);
const {createCanvas,GlobalFonts}=require(process.env.CANVAS_MODULE||'@napi-rs/canvas');
GlobalFonts.registerFromPath('/usr/share/fonts/opentype/urw-base35/NimbusSans-Regular.otf','Astra Sans');
GlobalFonts.registerFromPath('/usr/share/fonts/opentype/urw-base35/P052-Italic.otf','Astra Serif');
mkdirSync('public/media',{recursive:true});mkdirSync('test-results/film',{recursive:true});
const w=1280,h=720,fps=24,canvas=createCanvas(w,h),ctx=canvas.getContext('2d');
const ff=spawn('ffmpeg',['-y','-f','rawvideo','-pix_fmt','rgba','-s',`${w}x${h}`,'-r',String(fps),'-i','pipe:0','-i','test-results/film/score.wav','-c:v','libx264','-preset','fast','-crf','23','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart','-shortest','public/media/astra-film.mp4'],{stdio:['pipe','ignore','pipe']});
let errors='';ff.stderr.on('data',chunk=>{errors+=chunk.toString();});
for(let f=0;f<DURATION*fps;f++){drawFrame(ctx,w,h,f/fps);if(!ff.stdin.write(Buffer.from(ctx.getImageData(0,0,w,h).data)))await once(ff.stdin,'drain');if(f%120===0)console.log(`Rendered ${f}/${DURATION*fps} frames`);}
ff.stdin.end();const [code]=await once(ff,'close');if(code!==0)throw Error(errors);
for(const t of [1.5,4.5,8,12,16,19.5]){drawFrame(ctx,w,h,t);writeFileSync(`test-results/film/frame-${t}.png`,canvas.toBuffer('image/png'));}
drawFrame(ctx,w,h,1.5);writeFileSync('public/media/astra-poster.webp',canvas.toBuffer('image/webp',90));console.log('21-second film rendered.');
