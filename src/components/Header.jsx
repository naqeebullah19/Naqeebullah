import { useState, useEffect } from 'react';
import { Menu, X, Download, MessageCircle } from 'lucide-react';
import { navLinks } from '../data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-subtle'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Naqeebullah Khan — Home"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-manrope font-bold text-sm flex-shrink-0">
              NK
            </div>
            <span className="font-manrope font-semibold text-on-surface text-sm hidden sm:block group-hover:text-primary transition-colors duration-200">
              Naqeebullah Khan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-1.5 rounded-md font-inter text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-blue-50'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-low'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/cv.pdf"
              aria-label="Download CV (placeholder)"
              className="btn-secondary text-xs px-4 py-2"
            >
              <Download size={14} />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary text-xs px-4 py-2"
            >
              <MessageCircle size={14} />
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-low transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="bg-white border-t border-border px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map(link => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-2.5 rounded-lg font-inter text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-blue-50'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-low'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
            <a href="#" className="btn-secondary justify-center text-sm">
              <Download size={15} />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary justify-center text-sm"
            >
              <MessageCircle size={15} />
              Contact Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
