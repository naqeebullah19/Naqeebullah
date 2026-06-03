import {
  Monitor, Server, Database, Brain, Globe, Wrench
} from 'lucide-react';
import { skillCategories } from '../data';

const iconMap = { Monitor, Server, Database, Brain, Globe, Wrench };

const accentClasses = {
  blue:   { card: 'bg-blue-50/60 border-blue-100',   icon: 'bg-blue-100 text-primary',     badge: 'bg-blue-50 text-primary border-blue-100' },
  sage:   { card: 'bg-green-50/60 border-green-100', icon: 'bg-green-100 text-secondary',   badge: 'bg-green-50 text-secondary border-green-100' },
  tan:    { card: 'bg-amber-50/60 border-amber-100', icon: 'bg-amber-100 text-amber-700',   badge: 'bg-amber-50 text-amber-700 border-amber-100' },
  purple: { card: 'bg-purple-50/60 border-purple-100', icon: 'bg-purple-100 text-purple-700', badge: 'bg-purple-50 text-purple-700 border-purple-100' },
};

const levelBadge = {
  Intermediate: 'bg-surface-mid text-on-surface-variant border-border',
  Learning:     'bg-secondary-container/50 text-secondary border-secondary-container',
  Basic:        'bg-surface-high text-on-surface-variant border-border',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background" aria-label="Technical skills">
      <div className="container-width">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 max-w-xl">
          <span className="section-label w-fit">Technical Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Monitor;
            const accent = accentClasses[cat.color] || accentClasses.blue;
            return (
              <article
                key={cat.id}
                className={`rounded-card border p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 ${accent.card}`}
                aria-label={`${cat.title} skills`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${accent.icon}`}>
                    <Icon size={17} />
                  </div>
                  <h3 className="font-manrope font-semibold text-sm text-on-surface">{cat.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 bg-white border border-border rounded-full px-2.5 py-1 text-xs font-inter font-medium text-on-surface-variant">
                        {skill.name}
                        <span className={`text-[10px] font-inter px-1.5 py-0.5 rounded-full border ml-0.5 ${levelBadge[skill.level]}`}>
                          {skill.level}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
