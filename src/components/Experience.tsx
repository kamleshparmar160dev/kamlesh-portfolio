import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-pad relative">
      <div className="container-max">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> Professional Experience
          </div>
          <h2 className="section-title">
            Nine years of <span className="text-gradient-accent">building</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/30 via-ink-700 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div
                key={job.company}
                ref={ref}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'is-visible' : ''} relative ${
                  i % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:ml-auto'
                } pl-12 md:pl-0`}
              >
                <div
                  className={`absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent-400 ring-4 ring-ink-950 md:-translate-x-1/2 ${
                    job.current ? 'animate-pulse' : ''
                  }`}
                />

                <div className={`glass glass-hover rounded-2xl p-6 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-accent-400" />
                    <span className="text-xs font-mono text-accent-400">{job.duration}</span>
                    {job.current && (
                      <span className="badge-accent text-[10px] px-2 py-0.5">Current</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-ink-100 mb-1">{job.company}</h3>
                  <div className="flex items-center gap-2 text-sm text-ink-400 mb-1">
                    <span className="font-medium">{job.role}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-ink-500 mb-4">
                    <MapPin size={14} />
                    {job.location}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="badge-accent">{tech}</span>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {job.responsibilities.slice(0, 6).map((resp) => (
                      <div key={resp} className="flex items-start gap-2 text-sm text-ink-400">
                        <ChevronRight size={14} className="text-accent-400 mt-0.5 shrink-0" />
                        {resp}
                      </div>
                    ))}
                  </div>

                  {job.workAreas.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-ink-700/50">
                      <div className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-2">Work Areas</div>
                      <div className="flex flex-wrap gap-1.5">
                        {job.workAreas.slice(0, 8).map((area) => (
                          <span key={area} className="badge-neutral">{area}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
