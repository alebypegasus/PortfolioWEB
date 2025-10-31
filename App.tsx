import React, { useState, useCallback, useEffect } from 'react';
import CoverPage from './components/CoverPage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import HackintoshPage from './components/HackintoshPage';
import OperatingSystemsPage from './components/OperatingSystemsPage';
import TestimonialsPage from './components/TestimonialsPage';
import NoctoriunsDesignPage from './components/NoctoriunsDesignPage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';
import PrintLayout from './components/PrintLayout';
import PhotoModal from './components/PhotoModal';
import { translations, Language } from './translations';

const TOTAL_PAGES = 9;
type Theme = 'light' | 'dark' | 'system';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [language, setLanguage] = useState<Language>('pt');
  const [theme, setTheme] = useState<Theme>('system');
  const [isPrinting, setIsPrinting] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const texts = translations[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);
  
  useEffect(() => {
    const handleAfterPrint = () => {
      setIsPrinting(false);
    };

    if (isPrinting) {
      window.addEventListener('afterprint', handleAfterPrint);
      window.print();
    }
    
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [isPrinting]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES));
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleGoToStart = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);
  
  const handleExportPdf = useCallback(() => {
    setIsPrinting(true);
  }, []);

  const pages: React.ReactElement[] = [
    <CoverPage key="cover" texts={texts.cover} language={language} onPhotoClick={() => setIsPhotoModalOpen(true)} />,
    <AboutPage key="about" texts={texts.about} />,
    <ResumePage key="resume" texts={texts.resume} />,
    <ProjectsPage key="projects" texts={texts.projects} />,
    <HackintoshPage key="hackintosh" texts={texts.hackintosh} />,
    <OperatingSystemsPage key="os" texts={texts.operatingSystems} />,
    <TestimonialsPage key="testimonials" texts={texts.testimonials} />,
    <NoctoriunsDesignPage key="noctoriuns" texts={texts.noctoriunsDesign} />,
    <ContactPage key="contact" texts={texts.contact} />,
  ];
  
  const renderPage = () => {
    const pageIndex = Math.max(0, Math.min(currentPage - 1, pages.length - 1));
    return React.cloneElement(pages[pageIndex], { key: pageIndex });
  };
  
  if (isPrinting) {
    return <PrintLayout pages={pages} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 relative">
      <main className="w-full max-w-4xl liquid-glass-container backdrop-blur-2xl gradient-border shadow-2xl rounded-3xl overflow-hidden h-[85vh] max-h-[900px] flex flex-col">
        <div className="flex-grow overflow-y-auto p-8 md:p-10">
           {renderPage()}
        </div>
      </main>
      <Navigation
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        onGoToStart={handleGoToStart}
        texts={texts.navigation}
        theme={theme}
        setTheme={setTheme}
        themeTexts={texts.themeSwitcher}
        language={language}
        onSetLanguage={handleSetLanguage}
        onExportPdf={handleExportPdf}
        exportPdfText={texts.cover.exportPdf}
      />
      <PhotoModal isOpen={isPhotoModalOpen} onClose={() => setIsPhotoModalOpen(false)} />
    </div>
  );
};

export default App;