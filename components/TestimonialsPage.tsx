import React from 'react';
import { TestimonialsPageTexts } from '../translations';
import QuoteIcon from './icons/QuoteIcon';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl }) => (
  <div className="card-hover-effect bg-white/20 dark:bg-black/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 dark:border-white/10 relative overflow-hidden h-full flex flex-col text-center">
    <div className="absolute -top-4 -left-4 text-blue-500/10 dark:text-blue-400/10">
      <QuoteIcon className="w-20 h-20" />
    </div>
    <div className="relative z-10 flex flex-col items-center flex-grow">
        <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full mb-4 border-2 border-white/50 shadow-lg"/>
        <blockquote className="text-gray-900 dark:text-gray-200 italic flex-grow">
          <p>"{quote}"</p>
        </blockquote>
        <footer className="mt-4">
          <p className="font-bold text-black dark:text-white">{name}</p>
          <p className="text-sm text-gray-700 dark:text-gray-400">{role}</p>
        </footer>
    </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {texts.testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card-animation" 
            style={{ animationDelay: `${100 + index * 100}ms` }}
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