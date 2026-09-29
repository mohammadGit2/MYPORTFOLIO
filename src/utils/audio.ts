class SoundFX {
    private ctx: AudioContext | null = null;
    private enabled = false;
    constructor() {
        try {
            this.enabled = localStorage.getItem('syed_portfolio_sound_v2') === 'true';
        }
        catch { /* Storage is optional. */ }
    }
    isEnabled() { return this.enabled; }
    toggle() {
        this.enabled = !this.enabled;
        try {
            localStorage.setItem('syed_portfolio_sound_v2', String(this.enabled));
        }
        catch { /* Keep this session's choice. */ }
        if (this.enabled)
            this.playClick();
        return this.enabled;
    }
    private async tone(frequency: number) {
        if (!this.enabled)
            return;
        try {
            this.ctx ??= new AudioContext();
            if (this.ctx.state === 'suspended')
                await this.ctx.resume();
            if (!this.enabled)
                return;
            const oscillator = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;
            oscillator.frequency.setValueAtTime(frequency, now);
            gain.gain.setValueAtTime(0.016, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
            oscillator.connect(gain);
            gain.connect(this.ctx.destination);
            oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
            oscillator.start(now);
            oscillator.stop(now + 0.1);
        }
        catch { /* Unsupported audio must never block an interaction. */ }
    }
    playClick() { void this.tone(440); }
    playSuccess() { void this.tone(660); }
}
export const sound = new SoundFX();
