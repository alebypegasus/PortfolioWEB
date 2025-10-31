import React from 'react';
import { AboutPageTexts } from '../translations';

interface AboutPageProps {
  texts: AboutPageTexts;
}

const AboutPage: React.FC<AboutPageProps> = ({ texts }) => {
  return (
    <div className="text-gray-900 dark:text-gray-50 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white border-b-4 border-blue-500 dark:border-blue-400 pb-2 inline-block">
        {texts.title}
      </h2>
      <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-200">
        <p>{texts.p1}</p>
        <p>{texts.p2}</p>
        <p>{texts.p3}</p>
        <div className="flex justify-center pt-4">
            <img src="https://picsum.photos/seed/about-page/400/300?grayscale" alt="Grayscale photo of a scenic landscape representing personal interests" className="rounded-2xl shadow-lg border border-white/10"/>
        </div>
        <p>{texts.p4}</p>
      </div>
    </div>
  );
};

export default AboutPage;