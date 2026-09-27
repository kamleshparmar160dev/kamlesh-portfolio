import { Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '@/content/portfolio';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="container-max px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono font-bold text-ink-100 hover:text-accent-400 transition-colors mb-2"
            >
              <span className="text-accent-400">{'<'}</span>
              KP
              <span className="text-accent-400">{'/>'}</span>
            </button>
            <div className="text-lg font-semibold text-ink-200">{profile.name}</div>
            <div className="text-sm text-ink-400">{profile.title}</div>
            <div className="text-xs font-mono text-ink-500 mt-1">{profile.shortTagline}</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass glass-hover text-ink-400 hover:text-accent-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-lg glass glass-hover text-ink-400 hover:text-accent-400 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500 font-mono">
            © 2026 {profile.name}
          </p>
          <p className="text-xs text-ink-600 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-accent-400 fill-accent-400" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
