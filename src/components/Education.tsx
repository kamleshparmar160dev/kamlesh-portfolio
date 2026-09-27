import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-pad relative">
      <div className="container-max">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> Education
          </div>
          <h2 className="section-title">
            Academic <span className="text-gradient-accent">foundation</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} group glass glass-hover rounded-2xl p-6`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} className="text-accent-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-accent-400 mb-1">{edu.year}</div>
                  <h3 className="text-base font-bold text-ink-100 mb-1.5">{edu.degree}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-ink-400">
                    <MapPin size={14} className="text-ink-500" />
                    {edu.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
