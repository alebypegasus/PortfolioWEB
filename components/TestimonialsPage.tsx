import React from 'react';
import { TestimonialsPageTexts } from '../translations';
import QuoteIcon from './icons/QuoteIcon';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role }) => (
  <div className="bg-white/20 dark:bg-black/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg border-t border-r border-b border-white/20 dark:border-white/10 relative overflow-hidden">
    <div className="absolute -top-2 -left-2 text-blue-500/10 dark:text-blue-400/10">
      <QuoteIcon className="w-24 h-24" />
    </div>
    <blockquote className="text-gray-900 dark:text-gray-200 italic relative z-10">
      <p>"{quote}"</p>
    </blockquote>
    <footer className="mt-4 text-right">
      <p className="font-bold text-black dark:text-white">{name}</p>
      <p className="text-sm text-gray-700 dark:text-gray-400">{role}</p>
    </footer>
  </div>
);

interface TestimonialsPageProps {
  texts: TestimonialsPageTexts;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ texts }) => {
  return (
    <div className="animate-fade-in-up h-full">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-10">
        {texts.title}
      </h2>
      <div className="space-y-8">
        {texts.testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card-animation" 
            style={{ animationDelay: `${100 + index * 150}ms` }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
       <p className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
        {texts.disclaimer}
      </p>
    </div>
  );
};

export default TestimonialsPage;