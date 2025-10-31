import React, { useState, useEffect } from 'react';
import { CoverPageTexts, Language } from '../translations';
import LogoIcon from './icons/LogoIcon';

interface CoverPageProps {
  texts: CoverPageTexts;
  language: Language;
  onPhotoClick: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ texts, language, onPhotoClick }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === 'pt' ? 'pt-BR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center p-8 text-shadow animate-fade-in-up relative">
       <button 
          onClick={onPhotoClick}
          className="group w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-100"
          aria-label="View profile picture"
        >
        <LogoIcon className="w-24 h-24 md:w-28 md:h-28 text-white transition-transform duration-300 group-hover:scale-105" />
      </button>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white">
        {texts.name}
      </h1>
      <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 tracking-wider">
        {texts.title}
      </h2>
      <div className="mt-8 text-center">
        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 tracking-wide capitalize">
          {formatDate(currentDateTime)}
        </p>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 font-mono mt-1">
          {formatTime(currentDateTime)}
        </p>
      </div>
    </div>
  );
};

export default CoverPage;