import { ArrowRight, Download, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-background"
      aria-label="Hero section"
    >
      <div className="container-width w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <div className="flex flex-col gap-6 animate-fade-up">

            {/* Badge */}
            <div className="flex">
              <span className="inline-flex items-center gap-2 text-xs font-inter font-semibold tracking-wide text-secondary bg-secondary-container/60 border border-secondary-container rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Available for Freelance & Internships
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <p className="font-inter text-on-surface-variant text-base">Hi there, I'm</p>
              <h1 className="font-manrope font-bold text-4xl md:text-5xl lg:text-[52px] text-on-surface leading-[1.15] tracking-tight">
                Naqeebullah<br />
                <span className="text-primary">Khan</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-manrope font-semibold text-lg md:text-xl text-on-surface-variant leading-snug">
              Computer Science Student · MERN Developer<br className="hidden sm:block" />
              &amp; Aspiring AI/ML Engineer
            </p>

            {/* Description */}
            <p className="font-inter text-on-surface-variant text-base leading-relaxed max-w-[480px]">
              I build clean websites, MERN applications, WordPress blogs, and automation
              workflows. I'm also learning AI/ML with Python to create smarter and more
              practical digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('#projects')}
                className="btn-primary"
                aria-label="View my projects"
              >
                View Projects
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-secondary"
                aria-label="Hire me — go to contact section"
              >
                <Briefcase size={15} />
                Hire Me
              </button>
              <a href="#" className="btn-secondary" aria-label="Download CV (placeholder)">
                <Download size={15} />
                Download CV
              </a>
            </div>

            {/* Credibility Row */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: GraduationCap, text: '7th Semester BSCS Student' },
                { icon: Sparkles,      text: 'Intermediate Developer' },
                { icon: Briefcase,     text: 'Open to Internship Opportunities' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-xs font-inter text-on-surface-variant"
                >
                  <Icon size={13} className="text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Card */}
          <div className="flex justify-center lg:justify-end animate-fade-up stagger-2">
            <div className="relative">
              {/* Main profile card */}
              <div className="relative w-[300px] sm:w-[340px] rounded-card-lg overflow-hidden shadow-card-hover border border-border bg-surface">
                {/* Photo area */}
                <div className="relative w-full aspect-[4/5] profile-placeholder overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Naqeebullah Khan — Computer Science Student and MERN Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="absolute inset-0 items-center justify-center flex-col gap-3 hidden"
                    style={{ display: 'none' }}
                  >
                    <div className="w-24 h-24 rounded-full bg-white/40 border-2 border-white/60 flex items-center justify-center">
                      <span className="font-manrope font-bold text-3xl text-on-surface-variant/60">NK</span>
                    </div>
                    <p className="font-inter text-xs text-on-surface-variant/60">Replace with your photo</p>
                  </div>

                  {/* Overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* Name card at bottom */}
                <div className="px-5 py-4 bg-white">
                  <p className="font-manrope font-semibold text-base text-on-surface">Naqeebullah Khan</p>
                  <p className="font-inter text-xs text-on-surface-variant mt-0.5">BS Computer Science · Bahria University</p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -left-10 top-10 bg-white border border-border shadow-card rounded-xl px-3 py-2 flex items-center gap-2 animate-fade-up stagger-3">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-primary text-xs font-bold">M</div>
                <div>
                  <p className="font-inter text-xs font-semibold text-on-surface leading-none">MERN Developer</p>
                  <p className="font-inter text-[10px] text-on-surface-variant mt-0.5 leading-none">Full Stack</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -right-8 top-24 bg-white border border-border shadow-card rounded-xl px-3 py-2 flex items-center gap-2 animate-fade-up stagger-4">
                <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center text-[#4E635A] text-xs font-bold">S</div>
                <div>
                  <p className="font-inter text-xs font-semibold text-on-surface leading-none">SEO & Blogging</p>
                  <p className="font-inter text-[10px] text-on-surface-variant mt-0.5 leading-none">WordPress</p>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -left-8 bottom-24 bg-white border border-border shadow-card rounded-xl px-3 py-2 flex items-center gap-2 animate-fade-up stagger-5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-xs font-bold">AI</div>
                <div>
                  <p className="font-inter text-xs font-semibold text-on-surface leading-none">AI/ML Learner</p>
                  <p className="font-inter text-[10px] text-on-surface-variant mt-0.5 leading-none">Python</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -right-6 bottom-12 bg-white border border-border shadow-card rounded-xl px-3 py-2 flex items-center gap-2 animate-fade-up stagger-6">
                <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 text-xs font-bold">⚡</div>
                <div>
                  <p className="font-inter text-xs font-semibold text-on-surface leading-none">Automation</p>
                  <p className="font-inter text-[10px] text-on-surface-variant mt-0.5 leading-none">Scripts & APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
