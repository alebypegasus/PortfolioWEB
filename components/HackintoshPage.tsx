import React from 'react';
import { HackintoshPageTexts } from '../translations';

interface HackintoshPageProps {
  texts: HackintoshPageTexts;
}

const HackintoshPage: React.FC<HackintoshPageProps> = ({ texts }) => {
  return (
    <div className="text-gray-900 dark:text-gray-50 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white border-b-4 border-purple-500 dark:border-purple-400 pb-2 inline-block">
        {texts.title}
      </h2>
      <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-200">
        <p>{texts.p1}</p>
        <p>{texts.p2}</p>
        <div className="flex justify-center pt-4">
            <img src="https://picsum.photos/seed/hackintosh-page/400/250" alt="Custom computer setup with glowing components, representing a Hackintosh build" className="rounded-2xl shadow-lg border border-white/10"/>
        </div>
        <p>{texts.p3}</p>
      </div>
    </div>
  );
};

export default HackintoshPage;