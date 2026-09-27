import {
  Code, Plug, Brain, Terminal, MousePointer, Sparkles, Gauge, Workflow, Info,
  type LucideIcon,
} from 'lucide-react';
import { aiAreas, aiPositioning } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Code, Plug, Brain, Terminal, MousePointer, Sparkles, Gauge, Workflow,
};

export default function AIAutomation() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="ai" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> AI & Automation
          </div>
          <h2 className="section-title mb-4">
            AI as an <span className="text-gradient-accent">engineering tool</span>.
          </h2>
          <p className="text-ink-400 max-w-2xl text-lg leading-relaxed">{aiPositioning}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Sparkles;
            return (
              <div
                key={area.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} group glass glass-hover rounded-2xl p-5`}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-accent-400" />
                </div>
                <h3 className="text-base font-bold text-ink-100 mb-1.5">{area.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`reveal ${isVisible ? 'is-visible' : ''} mt-8`}>
          <div className="flex items-start gap-3 px-5 py-4 rounded-xl glass border border-ink-700/50">
            <Info size={18} className="text-accent-400 mt-0.5 shrink-0" />
            <p className="text-sm text-ink-400 leading-relaxed">
              These are personal explorations and development practices — not commercial products or production systems.
              I use AI tools to accelerate development, automate repetitive tasks, and explore new approaches to software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
