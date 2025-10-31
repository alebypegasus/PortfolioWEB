import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import HomeIcon from './icons/HomeIcon';
import PdfIcon from './icons/PdfIcon';
import ThemeSwitcher from './ThemeSwitcher';
import { NavigationTexts, Language, ThemeSwitcherTexts } from '../translations';

type Theme = 'light' | 'dark' | 'system';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToStart: () => void;
  texts: NavigationTexts;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeTexts: ThemeSwitcherTexts;
  language: Language;
  onSetLanguage: (lang: Language) => void;
  onExportPdf: () => void;
  exportPdfText: string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onGoToStart,
  texts,
  theme,
  setTheme,
  themeTexts,
  language,
  onSetLanguage,
  onExportPdf,
  exportPdfText
}) => {
  const isLastPage = currentPage === totalPages;

  return (
    <div className="w-full max-w-4xl mt-6 no-print">
      <div className="bg-white/85 dark:bg-black/25 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-xl rounded-full flex items-center justify-between p-2">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className="w-12 h-12 flex items-center justify-center text-black dark:text-gray-100 bg-white/50 dark:bg-gray-800/30 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
          aria-label={texts.prev}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        {currentPage === 1 ? (
          <div className="flex items-center space-x-2 bg-white/85 dark:bg-black/25 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full p-1">
            {/* Language Switcher */}
            <button
              onClick={() => onSetLanguage('pt')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all transform hover:scale-110 active:scale-95 ${
                language === 'pt'
                  ? 'bg-white/40 dark:bg-black/40 text-black dark:text-white'
                  : 'text-gray-900 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-black/20'
              }`}
            >
              BR
            </button>
            <button
              onClick={() => onSetLanguage('en')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all transform hover:scale-110 active:scale-95 ${
                language === 'en'
                  ? 'bg-white/40 dark:bg-black/40 text-black dark:text-white'
                  : 'text-gray-900 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-black/20'
              }`}
            >
              EN
            </button>
            {/* PDF Export */}
            <button
              onClick={onExportPdf}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 hover:bg-white/30 dark:hover:bg-black/30 transition-transform transform hover:scale-110 active:scale-95"
              aria-label={exportPdfText}
              title={exportPdfText}
            >
              <PdfIcon className="w-5 h-5" />
            </button>
             {/* Theme Switcher */}
            <ThemeSwitcher theme={theme} setTheme={setTheme} texts={themeTexts} />
          </div>
        ) : (
          <div className="text-sm font-bold text-gray-900 dark:text-gray-200 tabular-nums tracking-wider">
            <span className="text-black dark:text-white font-black text-base">{currentPage}</span> / {totalPages}
          </div>
        )}

        {isLastPage ? (
          <button
            onClick={onGoToStart}
            className="w-12 h-12 flex items-center justify-center text-black dark:text-gray-100 bg-white/50 dark:bg-gray-800/30 rounded-full hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
            aria-label={texts.goToStart}
          >
            <HomeIcon className="w-6 h-6" />
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={currentPage === totalPages}
            className="w-12 h-12 flex items-center justify-center text-black dark:text-gray-100 bg-white/50 dark:bg-gray-800/30 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
            aria-label={texts.next}
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;