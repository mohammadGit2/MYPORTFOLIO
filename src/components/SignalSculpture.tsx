/** An original ruled surface: one signal folding into an architectural structure. */
export function SignalSculpture({ className = '' }: { className?: string }) {
  return <svg className={`signal-sculpture ${className}`} viewBox="0 0 800 620" fill="none" aria-hidden="true">
    <defs><linearGradient id="copper" x1="110" y1="90" x2="660" y2="510" gradientUnits="userSpaceOnUse"><stop stopColor="#f7e1bb"/><stop offset=".43" stopColor="#d68858"/><stop offset="1" stopColor="#593e30"/></linearGradient></defs>
    <g stroke="url(#copper)" strokeWidth="1.1">{Array.from({length: 62}, (_, i) => {
      const k=i/61, x=115+k*530;
      return <path key={i} d={`M ${x} ${140+Math.sin(k*3.14)*75} C ${650-k*330} ${-60+k*430}, ${80+k*530} ${570-k*400}, ${180+k*435} ${460+Math.sin(k*3.14)*75}`}/>;
    })}</g>
    <path className="sculpture-trace" d="M115 140C650 -60 80 570 180 460" stroke="#fff4df" strokeWidth="2"/>
    <g stroke="#695647" strokeWidth=".7"><path d="M35 310h40m-20-20v40M725 310h40m-20-20v40"/><circle cx="400" cy="310" r="270" strokeDasharray="1 14"/></g>
  </svg>;
}
