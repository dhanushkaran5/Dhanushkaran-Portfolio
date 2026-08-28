import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'logeshdhanushkaran@gmail.com',
    href: 'mailto:logeshdhanushkaran@gmail.com',
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'dhanushkaran5',
    href: 'https://github.com/dhanushkaran5',
    color: 'cyan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Dhanushkaran M',
    href: 'https://www.linkedin.com/in/dhanushkaran-m-35ab77330',
    color: 'purple',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    /*
     * INTEGRATION POINT:
     * Replace this section with your preferred email service:
     * - EmailJS: emailjs.send(serviceId, templateId, formData)
     * - Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })
     * - Resend: Use their API endpoint
     *
     * For now, we show a success state and open the user's email client as a fallback.
     */
    const mailtoLink = `mailto:logeshdhanushkaran@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink, '_self');

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-midnight-bg-secondary/50">
      <div className="section-container">
        <div ref={ref}>
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Let's Build Something{' '}
              <span className="gradient-text">Meaningful.</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              I'm always interested in learning, building, and exploring
              meaningful technology solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {CONTACT_METHODS.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label !== 'Email' ? '_blank' : undefined}
                    rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="card card-hover flex items-center gap-4 p-5 group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      method.color === 'purple'
                        ? 'bg-accent-purple/10 group-hover:bg-accent-purple/20'
                        : 'bg-accent-cyan/10 group-hover:bg-accent-cyan/20'
                    }`}>
                      <Icon
                        size={22}
                        className={method.color === 'purple' ? 'text-accent-purple' : 'text-accent-cyan'}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-content-muted uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-content-primary font-medium text-sm sm:text-base">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-content-primary mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg bg-midnight-bg border text-content-primary placeholder:text-content-muted/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-midnight-border focus:border-accent-cyan'
                    }`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-content-primary mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-midnight-bg border text-content-primary placeholder:text-content-muted/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-midnight-border focus:border-accent-cyan'
                    }`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-content-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Your message..."
                    className={`w-full px-4 py-3 rounded-lg bg-midnight-bg border text-content-primary placeholder:text-content-muted/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-midnight-border focus:border-accent-cyan'
                    }`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
