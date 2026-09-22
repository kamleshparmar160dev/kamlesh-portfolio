import { useState } from 'react';
import {
  Navigation, Lock, Server, Image, Box, Satellite, Radio, Cpu, Cloud,
  Wifi, Code, ToggleRight, Battery, ShieldCheck, Activity, CircuitBoard,
  Zap, ArrowDown, ChevronRight, type LucideIcon,
} from 'lucide-react';
import { iotProjects } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Navigation, Lock, Server, Image, Box,
  Satellite, Radio, Cpu, Cloud, Wifi, Code, ToggleRight,
};

function SignalFlow({ steps }: { steps: { label: string; icon: string }[] }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      className="relative my-5 py-4 px-4 rounded-xl bg-ink-950/60 border border-ink-700/40 overflow-hidden"
      onMouseEnter={() => {
        let i = 0;
        const interval = setInterval(() => {
          i++;
          if (i > steps.length) {
            i = 0;
            setActiveStep(-1);
            setTimeout(() => setActiveStep(0), 200);
          } else {
            setActiveStep(i - 1);
          }
        }, 600);
        setTimeout(() => clearInterval(interval), steps.length * 600 + 2000);
      }}
    >
      {/* Oscilloscope-style grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-0">
        {steps.map((step, i) => {
          const Icon = iconMap[step.icon] ?? Cpu;
          const isActive = activeStep === i;
          return (
            <div key={step.label} className="flex flex-col items-center w-full">
              <div
                className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg border min-w-[210px] transition-all duration-300 ${
                  isActive
                    ? 'border-accent-400/60 bg-accent-500/10 shadow-[0_0_20px_-4px] shadow-accent-500/30'
                    : 'border-ink-700/50 bg-ink-900/60'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-500/20 border border-accent-400/40 scale-110'
                      : 'bg-accent-500/10 border border-accent-500/20'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-accent-300' : 'text-accent-400'} />
                </div>
                <span className={`text-sm font-mono font-medium transition-colors duration-300 ${isActive ? 'text-ink-100' : 'text-ink-300'}`}>
                  {step.label}
                </span>
                {isActive && (
                  <span className="absolute right-3 flex items-center gap-1">
                    <Activity size={12} className="text-accent-400 animate-pulse" />
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="relative flex flex-col items-center py-0.5 h-6 w-px">
                  <div className="absolute inset-0 bg-gradient-to-b from-ink-700 to-ink-700" />
                  <div
                    className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-400 to-accent-500/30 transition-all duration-500 ${
                      activeStep === i ? 'h-full opacity-100' : 'h-0 opacity-0'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LabCard({
  project,
  index,
  isVisible,
  refEl,
}: {
  project: typeof iotProjects[number];
  index: number;
  isVisible: boolean;
  refEl: (el: HTMLDivElement | null) => void;
}) {
  const Icon = iconMap[project.icon] ?? Cpu;
  const hasDiagram = project.diagram !== null;

  return (
    <div
      ref={refEl}
      className={`reveal reveal-delay-${Math.min(index + 1, 5)} ${isVisible ? 'is-visible' : ''} group relative rounded-2xl overflow-hidden`}
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-500/8 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-accent-500/30">
        {/* Top signal bar */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-ink-700/40 bg-ink-900/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon size={16} className="text-accent-400" />
            </div>
            <span className="text-xs font-mono text-ink-500 uppercase tracking-wider">
              {hasDiagram ? 'Signal Flow Diagram' : 'Hardware Project'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-ink-600">LAB-{String(index + 1).padStart(2, '0')}</span>
            <span className="flex items-center gap-1 text-xs font-mono text-green-400/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
              active
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6">
          <h3 className="text-lg font-bold text-ink-100 group-hover:text-white transition-colors duration-300 mb-3">
            {project.name}
          </h3>

          <p className="text-sm text-ink-400 leading-relaxed mb-4">{project.description}</p>

          {project.diagram && <SignalFlow steps={project.diagram} />}

          {project.sideNote && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-800/50 border border-ink-700/50 mb-4">
              <Battery size={14} className="text-accent-400" />
              <span className="text-xs font-mono text-ink-300">{project.sideNote}</span>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge-neutral">{tech}</span>
            ))}
          </div>

          {/* Features as spec list */}
          <div className="pt-3 border-t border-ink-700/40">
            <div className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-2.5 flex items-center gap-1.5">
              <CircuitBoard size={12} className="text-accent-400" />
              Specs
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {project.features.slice(0, 6).map((feat) => (
                <div key={feat} className="flex items-center gap-1.5 text-xs text-ink-400 font-mono">
                  <ChevronRight size={10} className="text-accent-400/60 shrink-0" />
                  {feat}
                </div>
              ))}
              {project.features.length > 6 && (
                <span className="text-xs text-ink-600 font-mono">+{project.features.length - 6} more</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IoTHardwareLab() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="iot-lab" className="section-pad relative overflow-hidden">
      {/* Section accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent-600/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="section-label">
            <span className="w-8 h-px bg-accent-400" /> IoT & Hardware Lab
          </div>
          <h2 className="section-title mb-4">
            Where <span className="text-gradient-accent">software</span> meets <span className="text-gradient-accent">hardware</span>.
          </h2>
          <p className="text-ink-400 max-w-2xl text-lg">
            Personal hardware projects and experiments bridging code, electronics, and the physical world.
          </p>
        </div>

        {/* Lab status bar */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-6 flex flex-wrap items-center gap-4 px-4 py-3 rounded-xl glass border border-ink-700/40`}>
          <div className="flex items-center gap-2 text-xs font-mono text-ink-400">
            <Zap size={14} className="text-accent-400" />
            <span>LAB STATUS</span>
          </div>
          <div className="h-4 w-px bg-ink-700" />
          <div className="flex items-center gap-2 text-xs font-mono text-ink-300">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>{iotProjects.length} projects online</span>
          </div>
          <div className="h-4 w-px bg-ink-700" />
          <div className="flex items-center gap-2 text-xs font-mono text-ink-400">
            <Activity size={14} className="text-accent-400" />
            <span>2 signal flows active</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-ink-700" />
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-ink-500">
            <CircuitBoard size={14} className="text-accent-400" />
            <span>ESP32 · GPS · 4G · WebSocket · Relay</span>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-5">
          {iotProjects.map((project, i) => (
            <LabCard
              key={project.name}
              project={project}
              index={i}
              isVisible={isVisible}
              refEl={(el: HTMLDivElement | null) => {
                if (el) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
              }}
            />
          ))}
        </div>

        {/* Footer note */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mt-8 flex items-center justify-center gap-2 text-sm text-ink-500`}>
          <ShieldCheck size={16} className="text-accent-400" />
          <span className="font-mono">Personal projects — built for learning and practical use</span>
        </div>
      </div>
    </section>
  );
}
