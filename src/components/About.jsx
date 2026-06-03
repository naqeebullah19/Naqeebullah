import { MapPin, GraduationCap, BookOpen, Code2 } from 'lucide-react';

const quickFacts = [
  { label: 'Education',    value: 'BS Computer Science' },
  { label: 'University',   value: 'Bahria University Islamabad' },
  { label: 'Semester',     value: '7th Semester' },
  { label: 'Location',     value: 'Islamabad, Pakistan' },
  { label: 'Skill Level',  value: 'Intermediate' },
  { label: 'Focus Areas',  value: 'Web Dev, MERN, AI/ML, SEO' },
];

const focusChips = ['MERN Stack', 'WordPress', 'AI/ML with Python', 'Automation'];

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface-low" aria-label="About me">
      <div className="container-width">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3">
          <span className="section-label w-fit">About Me</span>
          <h2 className="section-title">A little about<br className="sm:hidden" /> who I am</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            <p className="font-inter text-on-surface-variant text-base leading-relaxed">
              I am a BS Computer Science student at Bahria University Islamabad, currently
              in my 7th semester. My main focus is web development, MERN stack, AI/ML, SEO,
              blogging, and automation. I enjoy building practical digital solutions that are
              clean, useful, and easy to use.
            </p>
            <p className="font-inter text-on-surface-variant text-base leading-relaxed">
              Beyond coding, I'm focused on building practical skills, improving SEO,
              blogging, and workflow automation. I believe in continuous learning and
              creating tools that solve real problems — not just writing code that works,
              but code that matters.
            </p>

            <blockquote className="border-l-2 border-primary pl-4">
              <p className="font-inter text-sm italic text-on-surface-variant">
                "Built with curiosity, consistency, and practical learning."
              </p>
            </blockquote>

            {/* Focus chips */}
            <div className="flex flex-col gap-3">
              <p className="font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                What I'm focused on
              </p>
              <div className="flex flex-wrap gap-2">
                {focusChips.map(chip => (
                  <span
                    key={chip}
                    className="tag-chip bg-secondary-container/50 text-secondary border border-secondary-container font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Quick Facts Card */}
          <div className="card-base p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={16} className="text-primary" />
              </div>
              <h3 className="font-manrope font-semibold text-base text-on-surface">Quick Facts</h3>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {quickFacts.map(({ label, value }) => (
                <div key={label} className="py-3 flex justify-between items-start gap-4">
                  <span className="font-inter text-xs font-medium text-on-surface-variant uppercase tracking-wide flex-shrink-0">
                    {label}
                  </span>
                  <span className="font-inter text-sm text-on-surface text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 pt-5 border-t border-border flex items-center gap-2 text-on-surface-variant">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <span className="font-inter text-xs">Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
