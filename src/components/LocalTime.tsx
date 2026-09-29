import { useEffect, useState } from 'react';
const formatter = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: false });
export function LocalTime() {
    const [time, setTime] = useState(() => formatter.format(new Date()));
    useEffect(() => {
        const timer = window.setInterval(() => setTime(formatter.format(new Date())), 10000);
        return () => window.clearInterval(timer);
    }, []);
    return <span className="local-time">Pakistan <span aria-hidden="true">↗</span> <time>{time}</time> PKT</span>;
}
