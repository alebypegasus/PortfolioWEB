import React from 'react';
import { OperatingSystemsPageTexts } from '../translations';

const OSBadge: React.FC<{ name: string }> = ({ name }) => (
  <span className="inline-block bg-white/30 dark:bg-black/30 text-gray-900 dark:text-gray-200 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-sm">
    {name}
  </span>
);

interface OperatingSystemsPageProps {
  texts: OperatingSystemsPageTexts;
}

const OperatingSystemsPage: React.FC<OperatingSystemsPageProps> = ({ texts }) => {
  return (
    <div className="text-gray-900 dark:text-gray-100 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
        {texts.title}
      </h2>
      
      <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-200">
        {texts.p1}
      </p>

      {/* Desktop Systems */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold border-b-2 border-gray-500/30 dark:border-gray-500/50 pb-2 mb-4 text-black dark:text-white">{texts.desktopTitle}</h3>
        <div>
          {texts.desktopSystems.map((os) => <OSBadge key={os} name={os} />)}
        </div>
      </div>

      {/* Mobile Systems */}
      <div>
        <h3 className="text-2xl font-bold border-b-2 border-gray-500/30 dark:border-gray-500/50 pb-2 mb-4 text-black dark:text-white">{texts.mobileTitle}</h3>
        <div>
          {texts.mobileSystems.map((os) => <OSBadge key={os} name={os} />)}
        </div>
      </div>
    </div>
  );
};

export default OperatingSystemsPage;