import { Globe, Search, Monitor, Briefcase, Code2, Zap } from 'lucide-react';
import { services } from '../data';

const iconMap = { Globe, Search, Monitor, Briefcase, Code2, Zap };

const accentStyles = {
  blue: { wrap: 'bg-blue-50 text-primary', border: 'hover:border-blue-200' },
  sage: { wrap: 'bg-green-50 text-secondary', border: 'hover:border-green-200' },
  tan:  { wrap: 'bg-amber-50 text-amber-700', border: 'hover:border-amber-200' },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background" aria-label="Services">
      <div className="container-width">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 max-w-xl">
          <span className="section-label w-fit">Services</span>
          <h2 className="section-title">Services I can help with</h2>
          <p className="section-subtitle">
            Practical digital solutions for your web presence and workflow needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const accent = accentStyles[service.accent] || accentStyles.blue;

            return (
              <article
                key={service.id}
                className={`card-base p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 ${accent.border} group`}
                style={{ animationDelay: `${i * 0.06}s` }}
                aria-label={`Service: ${service.title}`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent.wrap}`}>
                  <Icon size={20} />
                </div>

                {/* Content */}
                <h3 className="font-manrope font-semibold text-base text-on-surface mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
