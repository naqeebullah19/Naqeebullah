import { GraduationCap, BookOpen } from 'lucide-react';
import { journeyTimeline } from '../data';

const academicFocus = ['Web Development', 'MERN Stack', 'Python & AI/ML', 'SEO', 'Automation'];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface-low" aria-label="Education and journey">
      <div className="container-width">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 max-w-xl">
          <span className="section-label w-fit">Education & Journey</span>
          <h2 className="section-title">Where I've been,<br className="sm:hidden" /> where I'm going</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Academic Card */}
          <div className="card-base p-6 md:p-8 flex flex-col gap-5">
            {/* Card header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-manrope font-semibold text-base text-on-surface">Academic</h3>
                <p className="font-inter text-xs text-on-surface-variant">Current Education</p>
              </div>
            </div>

            {/* Degree block */}
            <div className="bg-surface-low rounded-xl p-4 border border-border">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-manrope font-semibold text-sm text-on-surface">
                  BS Computer Science
                </h4>
                <span className="tag-chip bg-secondary-container/50 text-secondary border border-secondary-container text-[11px] flex-shrink-0">
                  7th Semester
                </span>
              </div>
              <p className="font-inter text-sm text-on-surface-variant">Bahria University Islamabad</p>
            </div>

            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              Currently studying computer science with a focus on practical web development,
              AI/ML fundamentals, and real-world problem solving. Building skills that matter
              beyond the classroom.
            </p>

            {/* Focus chips */}
            <div className="flex flex-col gap-2">
              <p className="font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                Academic Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {academicFocus.map(area => (
                  <span
                    key={area}
                    className="tag-chip bg-white text-on-surface-variant border border-border text-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Journey Card */}
          <div className="card-base p-6 md:p-8 flex flex-col gap-5">
            {/* Card header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-container/60 flex items-center justify-center">
                <BookOpen size={18} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-manrope font-semibold text-base text-on-surface">Learning Journey</h3>
                <p className="font-inter text-xs text-on-surface-variant">Step by step progress</p>
              </div>
            </div>

            {/* Timeline */}
            <ol className="flex flex-col gap-0" aria-label="Learning timeline">
              {journeyTimeline.map((item, i) => (
                <li key={item.step} className="flex gap-4 relative">
                  {/* Vertical line */}
                  {i < journeyTimeline.length - 1 && (
                    <div className="absolute left-[9px] top-6 bottom-0 w-[2px] bg-secondary-container" />
                  )}

                  {/* Dot */}
                  <div className="timeline-dot relative z-10 mt-1" aria-hidden="true" />

                  {/* Content */}
                  <div className="pb-6 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-inter text-[10px] font-semibold text-on-surface-variant/60 uppercase tracking-wide">
                        Step {item.step}
                      </span>
                    </div>
                    <h4 className="font-manrope font-semibold text-sm text-on-surface">{item.title}</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
