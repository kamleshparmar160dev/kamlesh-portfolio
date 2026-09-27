import { Cpu, Server, Brain, Radio } from 'lucide-react';
import { aboutParagraphs, profile } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const stats = [
    { icon: Server, label: 'Years Experience', value: profile.experience },
    { icon: Cpu, label: 'Focus Areas', value: '5+' },
    { icon: Brain, label: 'AI & Automation', value: 'Active' },
    { icon: Radio, label: 'IoT & Hardware', value: 'Active' },
  ];

  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> About
          </div>
          <h2 className="section-title mb-12">
            Engineer, builder, and <span className="text-gradient-accent">experimenter</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            {aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} text-lg text-ink-300 leading-relaxed`}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} glass glass-hover rounded-2xl p-5`}
                >
                  <stat.icon className="text-accent-400 mb-3" size={24} />
                  <div className="text-2xl font-bold text-ink-100 font-mono">{stat.value}</div>
                  <div className="text-sm text-ink-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
