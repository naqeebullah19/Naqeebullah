import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data';

const iconMap = { Mail, Phone, Linkedin, Github };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background" aria-label="Contact">
      <div className="container-width">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 items-center text-center max-w-xl mx-auto">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Open to freelance projects, internships, collaborations, and job opportunities.
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-inter font-semibold text-secondary bg-secondary-container/50 border border-secondary-container rounded-full px-4 py-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Available for freelance work and internships
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-4xl mx-auto">

          {/* Left — Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-manrope font-semibold text-lg text-on-surface mb-1">Get in touch</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Feel free to reach out via email, phone, or connect with me on LinkedIn
                or GitHub. I typically respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => {
                const Icon = iconMap[info.icon] || Mail;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-4 rounded-card border border-border bg-surface hover:border-primary hover:shadow-card transition-all duration-200 group"
                    aria-label={`${info.label}: ${info.value}`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      <Icon size={16} className="text-primary group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="font-inter text-[11px] font-medium text-on-surface-variant uppercase tracking-wide">{info.label}</p>
                      <p className="font-inter text-sm text-on-surface group-hover:text-primary transition-colors duration-200">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="card-base p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary-container/50 flex items-center justify-center">
                  <CheckCircle size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-manrope font-semibold text-base text-on-surface mb-1">Message prepared!</h3>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed max-w-xs">
                    Thanks for reaching out! Your message has been prepared. Please contact
                    me directly by{' '}
                    <a href="mailto:naqeebdr@gmail.com" className="text-primary hover:underline">email</a>
                    {' '}or{' '}
                    <a href="https://www.linkedin.com/in/naqeebullahh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-secondary text-sm mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate aria-label="Contact form">
                <h3 className="font-manrope font-semibold text-base text-on-surface mb-1">Send a message</h3>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block font-inter text-xs font-medium text-on-surface-variant mb-1.5">
                    Full Name <span aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`input-field ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-300' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="mt-1 font-inter text-xs text-red-500" role="alert">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block font-inter text-xs font-medium text-on-surface-variant mb-1.5">
                    Email Address <span aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`input-field ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-300' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="mt-1 font-inter text-xs text-red-500" role="alert">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block font-inter text-xs font-medium text-on-surface-variant mb-1.5">
                    Subject <span aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`input-field ${errors.subject ? 'border-red-300 focus:border-red-400 focus:ring-red-300' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && <p id="subject-error" className="mt-1 font-inter text-xs text-red-500" role="alert">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-inter text-xs font-medium text-on-surface-variant mb-1.5">
                    Message <span aria-hidden>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`input-field resize-none ${errors.message ? 'border-red-300 focus:border-red-400 focus:ring-red-300' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <p id="message-error" className="mt-1 font-inter text-xs text-red-500" role="alert">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary justify-center mt-1">
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
