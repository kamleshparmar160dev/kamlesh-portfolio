import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, profile } from '@/content/portfolio';
import { useActiveSection, useScrollProgress } from '@/hooks/useScrollReveal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink-950/80 backdrop-blur-lg border-b border-ink-800' : 'bg-transparent'
        }`}
      >
        <nav className="container-max px-6 md:px-10 lg:px-16 flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 font-mono font-bold text-ink-100 hover:text-accent-400 transition-colors"
          >
            <span className="text-accent-400">{'<'}</span>
            KP
            <span className="text-accent-400">{'/>'}</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-accent-400 bg-accent-500/10'
                        : 'text-ink-400 hover:text-ink-100 hover:bg-ink-800/50'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-ink-400 hover:text-accent-400 hover:bg-ink-800/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-ink-400 hover:text-accent-400 hover:bg-ink-800/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg text-ink-400 hover:text-accent-400 hover:bg-ink-800/50 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-ink-300 hover:bg-ink-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className="h-0.5 bg-transparent"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full bg-gradient-to-r from-accent-400 to-accent-600" style={{ width: '100%' }} />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
        <nav className="relative flex flex-col items-center justify-center h-full gap-2 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-2xl font-semibold py-3 transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${
                activeSection === link.href.slice(1) ? 'text-accent-400' : 'text-ink-300'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 50 + 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-accent-400 transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-ink-400 hover:text-accent-400 transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
