import { ArrowRight, Download, Briefcase, GraduationCap, Sparkles, MapPin } from 'lucide-react';

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

            {/* Availability line */}
            <div className="flex">
              <span className="availability-badge">
                <span className="availability-dot" />
                Available for freelance work and internships
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <p className="font-inter text-on-surface-variant text-base">
                Hi, I’m
              </p>

              <h1 className="font-manrope font-bold text-4xl md:text-5xl lg:text-[52px] text-on-surface leading-[1.15] tracking-tight">
                Naqeebullah<br />
                <span className="text-primary">Khan</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-manrope font-semibold text-lg md:text-xl text-on-surface-variant leading-snug">
              BSCS Student · MERN Developer<br className="hidden sm:block" />
              &amp; AI/ML Learner
            </p>

            {/* Description */}
            <p className="font-inter text-on-surface-variant text-base leading-relaxed max-w-[520px]">
              I build clean, responsive websites, MERN applications, WordPress blogs,
              and practical automation workflows. I’m also learning AI/ML with Python
              to create useful, real-world digital products.
            </p>

            {/* Focus tags */}
            <div className="flex flex-wrap gap-2">
              {['MERN Stack', 'WordPress', 'AI/ML with Python', 'Automation'].map((item) => (
                <span key={item} className="simple-chip">
                  {item}
                </span>
              ))}
            </div>

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
                aria-label="Contact me"
              >
                <Briefcase size={15} />
                Contact Me
              </button>

              <a
                href="/CV.pdf"
                className="btn-secondary"
                aria-label="Download CV"
                download
              >
                <Download size={15} />
                Download CV
              </a>
            </div>

            {/* Credibility Row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {[
                { icon: GraduationCap, text: '7th Semester BSCS Student' },
                { icon: Sparkles, text: 'Building practical web projects' },
                { icon: MapPin, text: 'Pakistan' },
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

          {/* Right — Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up stagger-2">
            <div className="profile-card-clean">

              {/* Photo */}
              <div className="relative w-full aspect-[4/5] profile-placeholder overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Naqeebullah Khan"
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
                    <span className="font-manrope font-bold text-3xl text-on-surface-variant/60">
                      NK
                    </span>
                  </div>
                  <p className="font-inter text-xs text-on-surface-variant/60">
                    Replace with your photo
                  </p>
                </div>
              </div>

              {/* Info under photo */}
              <div className="profile-info-clean">
                <p className="font-manrope font-semibold text-lg text-on-surface">
                  Naqeebullah Khan
                </p>

                <p className="font-inter text-sm text-on-surface-variant mt-1">
                  BS Computer Science · Bahria University
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="mini-stat">
                    <span className="mini-stat-label">Focus</span>
                    <span className="mini-stat-value">MERN + AI/ML</span>
                  </div>

                  <div className="mini-stat">
                    <span className="mini-stat-label">Open For</span>
                    <span className="mini-stat-value">Internships</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}