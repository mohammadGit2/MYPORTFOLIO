"""Static contract checks on the actual server-rendered React output and built media."""
from html.parser import HTMLParser
from pathlib import Path
import json,subprocess
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.tags=[]
 def handle_starttag(self,tag,attrs):self.tags.append((tag,dict(attrs)))
p=Path('.');doc=Doc();doc.feed((p/'test-results/astra-static.html').read_text());tags=doc.tags;ids=[a['id'] for _,a in tags if 'id' in a];checks={}
checks['unique_ids']=len(ids)==len(set(ids))
checks['all_main_sections_present']=all(x in ids for x in ['home','projects','showreel','ai-agents','architecture','resume','contact'])
checks['internal_anchors_exist']=all(a['href'][1:] in ids for t,a in tags if t=='a' and a.get('href','').startswith('#'))
checks['six_original_projects']=len([a for t,a in tags if t=='article' and 'project' in a.get('class','').split()])==6
checks['one_h1']=len([a for t,a in tags if t=='h1'])==1
v=next(a for t,a in tags if t=='video');checks['film_is_opt_in_and_muted']='src' not in v and 'muted' in v and v.get('preload')=='none' and 'autoplay' not in v
checks['film_captions_exist']=(p/'public/media/astra-film.vtt').exists()
checks['standalone_resume_has_profile_and_contacts']='Syed Muhammad Bin Ali' in (p/'public/resume.html').read_text() and 'mailto:syedmohammadbinali@gmail.com' in (p/'public/resume.html').read_text()
urls=[a.get('src') or a.get('poster') for t,a in tags if (t in ['img','track'] and 'src' in a) or(t=='video' and 'poster' in a)]
checks['local_dist_assets_exist']=all((p/'dist'/url.lstrip('/')).exists() for url in urls if url.startswith('/'))
info=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration,size','-show_entries','stream=codec_name,width,height,r_frame_rate,channels','-of','json','public/media/astra-film.mp4']))
checks['film_is_21_seconds_with_audio']=float(info['format']['duration'])==21 and any(x['codec_name']=='aac' and x['channels']==2 for x in info['streams'])
checks['mp4_under_2mb']=int(info['format']['size'])<2000000
checks['reduced_motion_styles_present']='@media(prefers-reduced-motion:reduce)' in (p/'src/astra.css').read_text()
print(json.dumps(checks,indent=2));assert all(checks.values())
report={'date':'2026-10-10','base_commit':'834c9c92ee497f220d43f1fe93df8aeeecc13c32','typecheck':'passed','production_build':'passed','server_render':'passed','static_checks':checks,'media':info,'visual_review':'Six rendered film frames inspected; website browser screenshots unavailable.','browser_qa':'Not run: supported control-browser capability unavailable under managed Sites workflow.','live_links':'Preserved; external deployment reachability unverified.','resume_pdf':'Browser Print / Save as PDF implemented; print layout unverified in a browser.'}
(p/'docs/ASTRA-VALIDATION.json').write_text(json.dumps(report,indent=2)+'\n')
