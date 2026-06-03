import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-on-surface text-white" role="contentinfo">
      <div className="container-width py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-white font-manrope font-bold text-xs">
                NK
              </div>
              <span className="font-manrope font-semibold text-sm text-white">Naqeebullah Khan</span>
            </div>
            <p className="font-inter text-xs text-white/50 max-w-xs text-center sm:text-left">
              Built with a focus on clean design, practical development, and continuous learning.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/naqeebullahh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/naqeebullah19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:naqeebdr@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
              aria-label="Send email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="font-inter text-xs text-white/40">
            &copy; {year} Naqeebullah Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
