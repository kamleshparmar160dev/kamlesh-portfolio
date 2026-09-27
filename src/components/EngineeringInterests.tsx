import {
  Code, Brain, Radio, Server, Bot, Box,
  Wrench, BookOpen, FlaskConical, GitMerge,
  type LucideIcon,
} from 'lucide-react';
import { engineeringInterests, engineeringPhilosophy } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Code, Brain, Radio, Server, Bot, Box,
  Wrench, BookOpen, FlaskConical, GitMerge,
};

export default function EngineeringInterests() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="interests" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-500/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> Engineering Interests
          </div>
          <h2 className="section-title">
            What drives <span className="text-gradient-accent">my work</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {engineeringInterests.map((interest, i) => {
            const Icon = iconMap[interest.icon] ?? Code;
            return (
              <div
                key={interest.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} group glass glass-hover rounded-2xl p-5`}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-accent-400" />
                </div>
                <h3 className="text-base font-bold text-ink-100 mb-1.5">{interest.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{interest.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringPhilosophy.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} group rounded-2xl p-5 border border-ink-700/30 hover:border-accent-500/30 transition-all duration-300`}
              >
                <Icon size={20} className="text-accent-400 mb-3" />
                <h3 className="text-sm font-bold text-ink-100 mb-1.5">{item.title}</h3>
                <p className="text-xs text-ink-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
