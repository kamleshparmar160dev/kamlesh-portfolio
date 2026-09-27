import { useState } from 'react';
import { ChevronDown, ArrowUpRight, Star, Layers, MapPin, RefreshCw, Navigation, Calendar, Film, type LucideIcon } from 'lucide-react';
import { featuredProjects } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projectIcons: Record<string, LucideIcon> = {
  'Levrx Platform': Layers,
  'WingsTrack': MapPin,
  'Sync': RefreshCw,
  'Kodinar Apps': Navigation,
  'Expolyst': Calendar,
  'Movie Magic': Film,
};

function FeaturedCard({
  project,
  index,
  isExpanded,
  onToggle,
  isVisible,
}: {
  project: typeof featuredProjects[number];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isVisible: boolean;
}) {
  const Icon = projectIcons[project.name] ?? Layers;
  const initials = project.name.split(' ').map((w) => w.charAt(0)).join('').slice(0, 2);

  return (
    <div
      className={`reveal reveal-delay-${Math.min(index + 1, 5)} ${isVisible ? 'is-visible' : ''} group relative md:col-span-2 rounded-2xl overflow-hidden`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent z-20" />

      {/* Glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

      <div className="relative glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-accent-500/30">
        <div className="md:flex">
          {/* Left: Visual monogram panel */}
          <div className="md:w-56 lg:w-64 shrink-0 relative bg-gradient-to-br from-ink-850 to-ink-900 border-r border-ink-700/40 p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
            <div className="absolute inset-0 tech-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-accent-500/5 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1 badge-accent">
                  <Star size={12} className="fill-accent-400" /> Featured
                </span>
                <span className="text-xs font-mono text-ink-600">0{index + 1}</span>
              </div>

              <div className="relative">
                <div className="text-7xl lg:text-8xl font-bold text-ink-800 font-mono leading-none group-hover:text-accent-500/15 transition-colors duration-500">
                  {initials}
                </div>
                <div className="absolute -bottom-1 -left-1 w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                  <Icon size={22} className="text-accent-400" />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-6">
              <div className="text-xs font-mono text-ink-500 uppercase tracking-wider mb-1">{project.tagline}</div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-ink-400 bg-ink-800/60 px-2 py-0.5 rounded border border-ink-700/40">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-[10px] font-mono text-ink-500">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 p-6 md:p-8 lg:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-ink-100 mb-3 group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>

            <p className="text-ink-400 leading-relaxed mb-6 max-w-2xl">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge-accent">{tech}</span>
              ))}
            </div>

            <div className="mb-5">
              <div className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-3">Key Features</div>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-ink-300">
                    <span className="w-1 h-1 rounded-full bg-accent-400 shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {project.details.length > 0 && (
              <>
                <button
                  onClick={onToggle}
                  className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors font-medium"
                  aria-expanded={isExpanded}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                  {isExpanded ? 'Show less' : 'Show implementation details'}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-ink-700/50">
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-3">Implementation Details</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2 text-sm text-ink-400">
                          <ArrowUpRight size={14} className="text-accent-400 mt-0.5 shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StandardCard({
  project,
  index,
  isExpanded,
  onToggle,
  isVisible,
}: {
  project: typeof featuredProjects[number];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isVisible: boolean;
}) {
  const Icon = projectIcons[project.name] ?? Layers;
  const initials = project.name.split(' ').map((w) => w.charAt(0)).join('').slice(0, 2);

  return (
    <div
      className={`reveal reveal-delay-${Math.min(index + 1, 5)} ${isVisible ? 'is-visible' : ''} group relative rounded-2xl overflow-hidden`}
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-500/8 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-accent-500/30 group-hover:-translate-y-1">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-ink-700/40 bg-ink-900/30">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon size={14} className="text-accent-400" />
            </div>
            <span className="text-xs font-mono text-ink-500">{project.tagline}</span>
          </div>
          <span className="text-xs font-mono text-ink-600">0{index + 1}</span>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl font-bold text-ink-800 font-mono leading-none group-hover:text-accent-500/15 transition-colors duration-500 shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-ink-100 group-hover:text-white transition-colors duration-300 mb-1">
                {project.name}
              </h3>
            </div>
          </div>

          <p className="text-sm text-ink-400 leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge-accent">{tech}</span>
            ))}
          </div>

          <div className="mb-4">
            <div className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-2.5">Key Features</div>
            <div className="flex flex-wrap gap-1.5">
              {project.features.slice(0, 5).map((feat) => (
                <span key={feat} className="badge-neutral">{feat}</span>
              ))}
            </div>
          </div>

          {project.details.length > 0 && (
            <>
              <button
                onClick={onToggle}
                className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors font-medium"
                aria-expanded={isExpanded}
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
                {isExpanded ? 'Show less' : 'Show details'}
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-ink-700/50">
                  <div className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-3">Implementation Details</div>
                  <ul className="space-y-2">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-ink-400">
                        <ArrowUpRight size={14} className="text-accent-400 mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 tech-grid tech-grid-fade opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> Featured Projects
          </div>
          <h2 className="section-title mb-4">
            Things I've <span className="text-gradient-accent">shipped</span>.
          </h2>
          <p className="text-ink-400 max-w-2xl text-lg">
            Production applications spanning healthcare, location tracking, legacy migration, and real-time systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => {
            const sharedProps = {
              project,
              index: i,
              isExpanded: expanded === i,
              onToggle: () => setExpanded(expanded === i ? null : i),
              isVisible,
            };

            if (project.featured) {
              return <FeaturedCard key={project.name} {...sharedProps} />;
            }
            return <StandardCard key={project.name} {...sharedProps} />;
          })}
        </div>
      </div>
    </section>
  );
}
