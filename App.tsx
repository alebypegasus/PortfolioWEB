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
import TitleBar from './components/TitleBar';
import { translations, Language } from './translations';

const pages: React.ReactElement[] = [
  <CoverPage key="cover" />,
  <AboutPage key="about" />,
  <ResumePage key="resume" />,
  <ProjectsPage key="projects" />,
  <HackintoshPage key="hackintosh" />,
  <OperatingSystemsPage key="os" />,
  <TestimonialsPage key="testimonials" />,
  <NoctoriunsDesignPage key="noctoriuns" />,
  <ContactPage key="contact" />,
];

type Theme = 'light' | 'dark' | 'system';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [language, setLanguage] = useState<Language>('pt');
  const [theme, setTheme] = useState<Theme>('system');
  const [isPrinting, setIsPrinting] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const texts = translations[language];
  
  const pageConfig = [
    { page: 1, titleKey: 'cover', ...texts.pageTitles.cover },
    { page: 2, titleKey: 'about', ...texts.pageTitles.about },
    { page: 3, titleKey: 'resume', ...texts.pageTitles.resume },
    { page: 4, titleKey: 'projects', ...texts.pageTitles.projects },
    { page: 5, titleKey: 'hackintosh', ...texts.pageTitles.hackintosh },
    { page: 6, titleKey: 'operatingSystems', ...texts.pageTitles.operatingSystems },
    { page: 7, titleKey: 'testimonials', ...texts.pageTitles.testimonials },
    { page: 8, titleKey: 'noctoriunsDesign', ...texts.pageTitles.noctoriunsDesign },
    { page: 9, titleKey: 'contact', ...texts.pageTitles.contact },
  ];

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
    if (isPrinting) {
      const handleAfterPrint = () => {
        setIsPrinting(false);
        window.removeEventListener('afterprint', handleAfterPrint);
      };
      window.addEventListener('afterprint', handleAfterPrint);
      
      // Delay printing to allow React to re-render the print layout
      const timer = setTimeout(() => {
        window.print();
      }, 100);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('afterprint', handleAfterPrint);
      };
    }
  }, [isPrinting]);

  const handleSetPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);
  
  const handleExportPdf = useCallback(() => {
    setIsPrinting(true);
  }, []);

  const renderPage = () => {
    const pageIndex = Math.max(0, Math.min(currentPage - 1, pages.length - 1));
    const pageElement = pages[pageIndex];

    const pageTexts: { [key: string]: any } = {
      cover: texts.cover,
      about: texts.about,
      resume: texts.resume,
      projects: texts.projects,
      hackintosh: texts.hackintosh,
      operatingSystems: texts.operatingSystems,
      testimonials: texts.testimonials,
      noctoriunsDesign: texts.noctoriunsDesign,
      contact: texts.contact,
    };
    
    const currentKey = pageConfig.find(p => p.page === currentPage)?.titleKey || 'cover';

    return React.cloneElement(pageElement, {
      key: pageIndex,
      texts: pageTexts[currentKey],
      language: language,
      ...(currentKey === 'cover' && { onPhotoClick: () => setIsPhotoModalOpen(true) }),
      ...(currentKey === 'resume' && { theme: theme })
    });
  };
  
  if (isPrinting) {
    const pagesToPrintKeys = ['cover', 'about', 'resume', 'contact'];
    
    const pageComponentMap = new Map<string, React.ReactElement>();
    pages.forEach(p => pageComponentMap.set(p.key as string, p));

    const pageTextsMap: { [key: string]: any } = {
      cover: texts.cover,
      about: texts.about,
      resume: texts.resume,
      contact: texts.contact,
    };

    const pagesForPdf = pagesToPrintKeys.map(key => {
        const pageElement = pageComponentMap.get(key);
        if (!pageElement) return null;

        const extraProps: { [key: string]: any } = { language };
        if (key === 'resume') {
            extraProps.theme = 'light';
        }
        if (key === 'cover') {
            extraProps.onPhotoClick = () => {};
        }

        return React.cloneElement(pageElement, { texts: pageTextsMap[key], ...extraProps });
    }).filter((p): p is React.ReactElement => p !== null);

    const printHeaderTexts = {
        name: texts.cover.name,
        title: texts.cover.title,
    };
    
    return <PrintLayout pages={pagesForPdf} headerTexts={printHeaderTexts} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 relative">
      <main className="w-full max-w-4xl macos-window h-[85vh] max-h-[900px]">
        <TitleBar title={pageConfig.find(p => p.page === currentPage)?.title || ''} />
        <div className="flex-grow overflow-y-auto p-8 md:p-10">
           {renderPage()}
        </div>
      </main>
      <Navigation
        pageConfig={pageConfig}
        currentPage={currentPage}
        setCurrentPage={handleSetPage}
        theme={theme}
        setTheme={setTheme}
        themeTexts={texts.themeSwitcher}
        language={language}
        onSetLanguage={handleSetLanguage}
        onExportPdf={handleExportPdf}
        texts={texts.dock}
      />
      <PhotoModal isOpen={isPhotoModalOpen} onClose={() => setIsPhotoModalOpen(false)} />
    </div>
  );
};

export default App;