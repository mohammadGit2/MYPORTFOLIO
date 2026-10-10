"""Original 21-second score: evolving suspended harmony, felt attacks, air and scene accents.
Deterministic synthesis; no samples or third-party music. Output is only loaded with the film.
"""
from pathlib import Path
import numpy as np
from scipy.signal import butter,sosfilt
import wave
SR=44100;D=21;n=int(SR*D);t=np.arange(n)/SR;audio=np.zeros((n,2));rng=np.random.default_rng(17)
def add(start,signal,pan=0):
 i=int(start*SR);length=min(len(signal),n-i)
 if length>0:
  audio[i:i+length,0]+=signal[:length]*np.sqrt((1-pan)/2)
  audio[i:i+length,1]+=signal[:length]*np.sqrt((1+pan)/2)
def tone(start,dur,freq,level=.04,pan=0,pluck=False):
 u=np.arange(int(dur*SR))/SR
 env=(1-np.exp(-u/(.008 if pluck else .7)))*np.exp(-u/(1.2 if pluck else 6))*np.minimum(1,(dur-u)/.7)
 sig=(np.sin(2*np.pi*freq*u+.003*np.sin(u*3))+.22*np.sin(2*np.pi*freq*2*u)+.08*np.sin(2*np.pi*freq*3*u))*env*level
 add(start,sig,pan)
chords=[(0,[146.83,220,261.63,329.63]),(3,[174.61,220,261.63,349.23]),(6,[130.81,196,293.66,349.23]),(10,[146.83,220,261.63,329.63]),(14,[116.54,174.61,220,293.66]),(18,[146.83,220,293.66,329.63])]
for start,chord in chords:
 for j,f in enumerate(chord):tone(start,min(6,D-start),f,.043,(-.65+j*.43))
 tone(start,min(4,D-start),chord[0]/2,.06,0)
 for j in range(4):tone(start+.3+j*.3,min(2,D-start-.3-j*.3),chord[j]*2,.029,(-.45+j*.3),True)
 # soft, filtered air swell into the scene; broad texture rather than UI beeps
 dur=.7;u=np.arange(int(SR*dur))/SR;noise=rng.normal(0,1,len(u));noise=sosfilt(butter(2,[450,2300],btype='bandpass',fs=SR,output='sos'),noise)
 add(max(0,start-.3),noise*np.sin(np.pi*u/dur)**2*.045,-.2)
 if start:
  u=np.arange(int(SR*.8))/SR;add(start,np.sin(2*np.pi*(50*u+30*(1-np.exp(-u*20))/20))*np.exp(-u*8)*.12)
# Delicate stereo room, coherent tail across every transition.
for delay,gain in [(.11,.13),(.23,.1),(.37,.07)]:
 k=int(delay*SR);audio[k:]+=audio[:-k,::-1]*gain
fade=np.minimum(1,t/.5)*np.minimum(1,(D-t)/1.1);audio*=fade[:,None]
peak=np.max(np.abs(audio));audio*=.78/max(peak,1e-9)
Path('test-results/film').mkdir(parents=True,exist_ok=True)
with wave.open('test-results/film/score.wav','wb') as w:
 w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((audio*32767).astype('<i2').tobytes())
print(f'Original score: {D}s stereo, peak {np.max(np.abs(audio)):.2f}, no clipping')
