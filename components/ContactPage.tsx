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
  { href: "https://www.linkedin.com/", icon: <LinkedInIcon className="w-full h-full object-contain" />, name: "LinkedIn", description: texts.linkedIn },
  { href: "https://github.com/", icon: <GitHubIcon className="w-full h-full object-contain" />, name: "GitHub", description: texts.github },
  { href: "https://wa.me/yourphonenumber", icon: <WhatsAppIcon className="w-full h-full object-contain" />, name: "WhatsApp", description: texts.whatsapp },
  { href: "mailto:youremail@example.com", icon: <MailIcon className="w-full h-full object-contain" />, name: "E-mail", description: texts.email },
  { href: "https://www.instagram.com/", icon: <InstagramIcon className="w-full h-full object-contain" />, name: "Instagram", description: texts.instagram },
  { href: "https://www.facebook.com/", icon: <FacebookIcon className="w-full h-full object-contain" />, name: "Facebook", description: texts.facebook },
  { href: "https://www.threads.net/", icon: <ThreadsIcon className="w-full h-full object-contain" />, name: "Threads", description: texts.threads },
  { href: "https://x.com/", icon: <XIcon className="w-full h-full object-contain" />, name: "X", description: texts.x },
];

const ContactPage: React.FC<ContactPageProps> = ({ texts }) => {
  const links = socialLinks(texts.socials);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                className="flex items-center space-x-4 p-3 bg-white/30 dark:bg-black/30 rounded-xl hover:bg-white/50 dark:hover:bg-black/50 transition-all transform hover:scale-105 hover:shadow-xl border border-white/20 dark:border-white/10"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">{link.icon}</div>
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
               <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={texts.form.namePlaceholder} className="w-full p-3 bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm" aria-label={texts.form.namePlaceholder} required />
               <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={texts.form.phonePlaceholder} className="w-full p-3 bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm" aria-label={texts.form.phonePlaceholder} required />
            </div>
             <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={texts.form.emailPlaceholder} className="w-full p-3 bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm" aria-label={texts.form.emailPlaceholder} required />
             <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder={texts.form.subjectPlaceholder} className="w-full p-3 bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm" aria-label={texts.form.subjectPlaceholder} required />
            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={texts.form.messagePlaceholder} rows={4} className="w-full p-3 bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm" aria-label={texts.form.messagePlaceholder} required ></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all transform hover:scale-105" >
                {texts.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;