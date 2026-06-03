import {
  Globe, Layout, Keyboard, Brain, Zap, Layers, ArrowRight
} from 'lucide-react';
import { projects } from '../data';

const iconMap = { Globe, Layout, Keyboard, Brain, Zap, Layers };

const statusStyles = {
  sage:    'bg-secondary-container/60 text-secondary border-secondary-container',
  blue:    'bg-blue-50 text-primary border-blue-100',
  tan:     'bg-amber-50 text-amber-700 border-amber-100',
  purple:  'bg-purple-50 text-purple-700 border-purple-100',
  outline: 'bg-surface-low text-on-surface-variant border-border',
};

const iconBg = {
  Globe:    'bg-blue-50 text-primary',
  Layout:   'bg-blue-50 text-primary',
  Keyboard: 'bg-amber-50 text-amber-700',
  Brain:    'bg-purple-50 text-purple-700',
  Zap:      'bg-green-50 text-secondary',
  Layers:   'bg-blue-50 text-primary',
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-low" aria-label="Selected projects">
      <div className="container-width">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 max-w-xl">
          <span className="section-label w-fit">Selected Projects</span>
          <h2 className="section-title">A showcase of my work</h2>
          <p className="section-subtitle">
            Recent academic and personal projects I've built or contributed to.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Globe;
            const statusClass = statusStyles[project.statusColor] || statusStyles.outline;
            const iconClass = iconBg[project.icon] || 'bg-surface-mid text-on-surface-variant';

            return (
              <article
                key={project.id}
                className="card-base card-hover flex flex-col p-5"
                style={{ animationDelay: `${i * 0.06}s` }}
                aria-label={`Project: ${project.title}`}
              >
                {/* Icon + Status row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconClass}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`tag-chip border text-xs font-medium ${statusClass}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-manrope font-semibold text-base text-on-surface mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="tag-chip bg-surface-low text-on-surface-variant border border-border text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="btn-ghost text-sm mt-auto group"
                  aria-label={`View details for ${project.title} (placeholder)`}
                  onClick={() => {}}
                >
                  View Details
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
