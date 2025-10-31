import React, { useState } from 'react';
import { ContactPageTexts } from '../translations';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import MailIcon from './icons/MailIcon';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import ThreadsIcon from './icons/ThreadsIcon';
import XIcon from './icons/XIcon';


interface ContactPageProps {
  texts: ContactPageTexts;
}

const socialLinks = (texts: ContactPageTexts['socials']) => [
  { href: "https://www.linkedin.com/in/alebypegasus", icon: <LinkedInIcon />, name: "LinkedIn", description: texts.linkedIn },
  { href: "https://github.com/alebypegasus", icon: <GitHubIcon />, name: "GitHub", description: texts.github },
  { href: "https://wa.me/5521977181045", icon: <WhatsAppIcon />, name: "WhatsApp", description: texts.whatsapp },
  { href: "mailto:contato.aledev@gmail.com", icon: <MailIcon />, name: "E-mail", description: texts.email },
  { href: "https://www.instagram.com/alebypegasus", icon: <InstagramIcon />, name: "Instagram", description: texts.instagram },
  { href: "https://www.facebook.com/ale.pegasus", icon: <FacebookIcon />, name: "Facebook", description: texts.facebook },
  { href: "https://www.threads.net/@alebypegasus", icon: <ThreadsIcon />, name: "Threads", description: texts.threads },
  { href: "https://x.com/alebypegasus", icon: <XIcon />, name: "X", description: texts.x },
];

const ContactPage: React.FC<ContactPageProps> = ({ texts }) => {
  const links = socialLinks(texts.socials);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\+?[0-9\s-()]{7,}$/;

    if (!formData.name.trim()) newErrors.name = texts.form.errors.nameRequired;
    if (!formData.phone.trim()) {
      newErrors.phone = texts.form.errors.phoneRequired;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = texts.form.errors.phoneInvalid;
    }
    if (!formData.email.trim()) {
      newErrors.email = texts.form.errors.emailRequired;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = texts.form.errors.emailInvalid;
    }
    if (!formData.subject.trim()) newErrors.subject = texts.form.errors.subjectRequired;
    if (!formData.message.trim()) newErrors.message = texts.form.errors.messageRequired;
    
    return newErrors;
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert(texts.form.submitAlert);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="text-gray-900 dark:text-white animate-fade-in-up flex flex-col h-full">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          {texts.title}
        </h2>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-800 dark:text-gray-300">
          {texts.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start flex-grow">
        {/* Left Column: Social Links */}
        <div>
           <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4 text-center md:text-left">{texts.socialTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex items-center space-x-3 p-2 bg-white/20 dark:bg-black/20 rounded-xl hover:bg-white/40 dark:hover:bg-black/40 transition-all transform hover:scale-105 hover:shadow-xl border border-white/20 dark:border-white/10"
              >
                <div className="social-icon-squircle">
                  <div className="w-8 h-8 text-black dark:text-white">{link.icon}</div>
                </div>
                <div>
                    <span className="font-semibold text-gray-900 dark:text-gray-200 text-sm">{link.name}</span>
                    <p className="text-xs text-gray-700 dark:text-gray-400">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4 text-center md:text-left">{texts.form.title}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={texts.form.namePlaceholder} className={`macos-input ${errors.name ? 'error' : ''}`} aria-label={texts.form.namePlaceholder} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={texts.form.phonePlaceholder} className={`macos-input ${errors.phone ? 'error' : ''}`} aria-label={texts.form.phonePlaceholder} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={texts.form.emailPlaceholder} className={`macos-input ${errors.email ? 'error' : ''}`} aria-label={texts.form.emailPlaceholder} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder={texts.form.subjectPlaceholder} className={`macos-input ${errors.subject ? 'error' : ''}`} aria-label={texts.form.subjectPlaceholder} />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={texts.form.messagePlaceholder} rows={4} className={`macos-input ${errors.message ? 'error' : ''}`} aria-label={texts.form.messagePlaceholder} ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="macos-button mt-6" >
                {texts.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;