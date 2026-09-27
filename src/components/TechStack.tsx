import {
  Monitor, Server, Code, Smartphone, TestTube, Wrench, Brain, Cpu, Terminal,
  type LucideIcon,
} from 'lucide-react';
import { skills, techJourney } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Monitor, Server, Code, Smartphone, TestTube, Wrench, Brain, Cpu, Terminal,
};

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-pad relative">
      <div className="absolute inset-0 tech-grid tech-grid-fade opacity-40" />
      <div className="container-max relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> Technology Stack
          </div>
          <h2 className="section-title">
            Tools of the <span className="text-gradient-accent">trade</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code;
            return (
              <div
                key={skill.category}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} group glass glass-hover rounded-2xl p-5`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-accent-400" />
                  </div>
                  <h3 className="text-base font-bold text-ink-100">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className="badge-neutral hover:bg-ink-700 hover:text-ink-200 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div ref={journeyRef} className={`reveal ${journeyVisible ? 'is-visible' : ''}`}>
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-400" /> Technology Journey
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-ink-100 mb-10">
            From PHP to <span className="text-gradient-accent">IoT & AI</span>.
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-ink-700 via-accent-500/30 to-ink-700 hidden md:block" />

          <div className="grid md:grid-cols-5 gap-4">
            {techJourney.map((phase, i) => (
              <div
                key={phase.year}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${journeyVisible ? 'is-visible' : ''} relative`}
              >
                <div className="hidden md:flex justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent-400 ring-4 ring-ink-950" />
                </div>
                <div className="glass glass-hover rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-accent-400 font-mono mb-1">{phase.year}</div>
                  <div className="text-sm font-semibold text-ink-200 mb-3">{phase.title}</div>
                  <div className="space-y-1">
                    {phase.items.map((item) => (
                      <div key={item} className="text-xs text-ink-400 font-mono">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
