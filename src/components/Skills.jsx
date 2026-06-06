import {
  Monitor, Server, Database, Brain, Globe, Wrench
} from 'lucide-react';
import { skillCategories } from '../data';

const iconMap = { Monitor, Server, Database, Brain, Globe, Wrench };

const accentClasses = {
  blue: {
    card: 'skill-card-clean',
    icon: 'bg-blue-50 text-primary border-blue-100',
  },
  sage: {
    card: 'skill-card-clean',
    icon: 'bg-green-50 text-secondary border-green-100',
  },
  tan: {
    card: 'skill-card-clean',
    icon: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  purple: {
    card: 'skill-card-clean',
    icon: 'bg-purple-50 text-purple-700 border-purple-100',
  },
};

const levelBadge = {
  Intermediate: 'level-intermediate',
  Learning: 'level-learning',
  Basic: 'level-basic',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background" aria-label="Technical skills">
      <div className="container-width">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 max-w-xl">
          <span className="section-label w-fit">Technical Skills</span>

          <h2 className="section-title">
            Technologies I work with
          </h2>

          <p className="section-subtitle">
            A clear overview of the tools and technologies I use for web development,
            AI/ML learning, WordPress work, and practical digital projects.
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
                className={accent.card}
                aria-label={`${cat.title} skills`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${accent.icon}`}>
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="font-manrope font-semibold text-base text-on-surface">
                      {cat.title}
                    </h3>

                    <p className="font-inter text-xs text-on-surface-variant mt-0.5">
                      {cat.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <span className="font-inter text-sm font-medium text-on-surface">
                        {skill.name}
                      </span>

                      <span className={`level-badge ${levelBadge[skill.level]}`}>
                        {skill.level}
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