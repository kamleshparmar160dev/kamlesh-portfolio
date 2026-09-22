import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, Cpu, Radio, Brain } from 'lucide-react';
import { profile } from '@/content/portfolio';

const ROLES = ['Senior Full Stack Software Engineer'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fullText = ROLES[0];
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 tech-grid tech-grid-fade" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/8 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-600/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Corner accents */}
      <div className="absolute top-24 left-6 md:left-10 lg:left-16 hidden lg:block">
        <div className="w-6 h-6 border-l-2 border-t-2 border-accent-500/30" />
      </div>
      <div className="absolute top-24 right-6 md:right-10 lg:right-16 hidden lg:block">
        <div className="w-6 h-6 border-r-2 border-t-2 border-accent-500/30" />
      </div>
      <div className="absolute bottom-24 left-6 md:left-10 lg:left-16 hidden lg:block">
        <div className="w-6 h-6 border-l-2 border-b-2 border-accent-500/30" />
      </div>
      <div className="absolute bottom-24 right-6 md:right-10 lg:right-16 hidden lg:block">
        <div className="w-6 h-6 border-r-2 border-b-2 border-accent-500/30" />
      </div>

      <div className="container-max px-6 md:px-10 lg:px-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Main content */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-ink-900/70 border border-ink-700/60 mb-8 animate-fade-in backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-400" />
              </span>
              <span className="text-xs font-mono text-ink-300 tracking-wide">{profile.location} · {profile.experience}</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-gradient tracking-tight leading-[1.02] mb-5 animate-slide-up">
              Kamlesh Parmar
            </h1>

            {/* Terminal-style role */}
            <div className="flex items-center gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-ink-900/80 border border-ink-700/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <Terminal className="text-accent-400 shrink-0" size={20} />
              <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-accent-300 font-mono whitespace-nowrap overflow-hidden">
                {typed}
                <span className={`inline-block w-[2px] h-5 md:h-6 lg:h-7 bg-accent-400 ml-0.5 align-middle transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg lg:text-xl text-ink-300 max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <button
                onClick={() => scrollTo('#projects')}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_-4px] hover:shadow-accent-500/40 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 glass glass-hover text-ink-200 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} className="group-hover:text-accent-400 transition-colors" />
                Download Resume
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg glass glass-hover text-ink-300 hover:text-accent-400 transition-all"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg glass glass-hover text-ink-300 hover:text-accent-400 transition-all"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg glass glass-hover text-ink-300 hover:text-accent-400 transition-all"
              >
                <Mail size={18} />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right: Code window card */}
          <div className="hidden lg:block lg:col-span-5 animate-slide-in-right" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-500/20 via-transparent to-accent-600/10 rounded-2xl blur-md" />
              <div className="relative glass rounded-2xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-ink-700/50 bg-ink-900/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs font-mono text-ink-500">engineer.ts</span>
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <div className="text-ink-600 select-none text-right shrink-0">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <div key={n}>{n}</div>
                      ))}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div><span className="text-accent-400">const</span> <span className="text-ink-200">engineer</span> <span className="text-ink-500">=</span> <span className="text-ink-300">{'{'}</span></div>
                      <div className="pl-4"><span className="text-accent-300">name</span><span className="text-ink-500">:</span> <span className="text-green-400">'Kamlesh Parmar'</span><span className="text-ink-500">,</span></div>
                      <div className="pl-4"><span className="text-accent-300">role</span><span className="text-ink-500">:</span> <span className="text-green-400">'Full Stack Engineer'</span><span className="text-ink-500">,</span></div>
                      <div className="pl-4"><span className="text-accent-300">location</span><span className="text-ink-500">:</span> <span className="text-green-400">'Vadodara, India'</span><span className="text-ink-500">,</span></div>
                      <div className="pl-4"><span className="text-accent-300">focus</span><span className="text-ink-500">:</span> <span className="text-ink-300">[</span></div>
                      <div className="pl-8 text-ink-300">
                        <span className="text-green-400">'Web'</span><span className="text-ink-500">,</span> <span className="text-green-400">'Mobile'</span><span className="text-ink-500">,</span> <span className="text-green-400">'IoT'</span><span className="text-ink-500">,</span> <span className="text-green-400">'AI'</span>
                      </div>
                      <div className="pl-4"><span className="text-ink-300">]</span><span className="text-ink-500">,</span></div>
                      <div className="pl-4"><span className="text-accent-300">available</span><span className="text-ink-500">:</span> <span className="text-accent-400">true</span></div>
                      <div><span className="text-ink-300">{'}'}</span><span className="text-ink-500">;</span></div>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-ink-700/50 bg-ink-900/50 text-xs font-mono">
                  <div className="flex items-center gap-3 text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <Cpu size={12} className="text-accent-400" /> Full Stack
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Radio size={12} className="text-accent-400" /> IoT
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Brain size={12} className="text-accent-400" /> AI
                    </span>
                  </div>
                  <span className="text-green-400/70">● ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-ink-500">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <div className="relative w-px h-12 bg-gradient-to-b from-ink-600 to-transparent overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-accent-400 to-transparent animate-[float_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
