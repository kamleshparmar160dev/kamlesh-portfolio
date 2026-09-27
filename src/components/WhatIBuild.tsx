import { Layers, Server, Brain, Radio, HardDrive, type LucideIcon } from 'lucide-react';
import { capabilities } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Layers, Server, Brain, Radio, HardDrive,
};

export default function WhatIBuild() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="what-i-build" className="section-pad relative">
      <div className="absolute inset-0 tech-grid tech-grid-fade opacity-50" />
      <div className="container-max relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> What I Build
          </div>
          <h2 className="section-title">
            From <span className="text-gradient-accent">code</span> to <span className="text-gradient-accent">hardware</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Server;
            return (
              <div
                key={cap.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} group relative glass glass-hover rounded-2xl p-6 overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl group-hover:bg-accent-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                    <Icon size={24} className="text-accent-400" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-100 mb-2">{cap.title}</h3>
                  <p className="text-ink-400 text-sm leading-relaxed mb-4">{cap.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.items.map((item) => (
                      <span key={item} className="badge-neutral">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
