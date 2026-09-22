import { Mail, Linkedin, Github, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 tech-grid tech-grid-fade opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-3xl mx-auto">
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-accent-400" /> Contact <span className="w-8 h-px bg-accent-400" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-ink-100 mb-4">
              Let's build <span className="text-gradient-accent">something</span>.
            </h2>

            <p className="text-ink-400 text-lg mb-10 max-w-xl mx-auto">
              Open to full-stack engineering roles, IoT projects, and interesting technical collaborations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5"
              >
                <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                Get in Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 glass glass-hover text-ink-200 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={16} className="text-ink-500 group-hover:text-accent-400 transition-colors" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-ink-400">
                <Mail size={16} className="text-accent-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-accent-400 transition-colors font-mono">
                  {profile.email}
                </a>
              </div>
              <div className="hidden sm:block w-px h-4 bg-ink-700" />
              <div className="flex items-center gap-2 text-ink-400">
                <MapPin size={16} className="text-accent-400" />
                <span className="font-mono">{profile.location}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-ink-700" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-400 hover:text-accent-400 transition-colors"
              >
                <Github size={16} />
                <span className="font-mono">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
