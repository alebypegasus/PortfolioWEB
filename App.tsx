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
import Dock from './components/Navigation';
import PrintLayout from './components/PrintLayout';
import PhotoModal from './components/PhotoModal';
import TitleBar from './components/TitleBar';
import IntroAnimation from './components/IntroAnimation';
import { translations, Language } from './translations';

const componentMap = {
  cover: CoverPage,
  about: AboutPage,
  resume: ResumePage,
  projects: ProjectsPage,
  hackintosh: HackintoshPage,
  operatingSystems: OperatingSystemsPage,
  testimonials: TestimonialsPage,
  noctoriunsDesign: NoctoriunsDesignPage,
  contact: ContactPage,
};

type Theme = 'light' | 'dark' | 'system';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [language, setLanguage] = useState<Language>('pt');
  const [theme, setTheme] = useState<Theme>('system');
  const [isPrinting, setIsPrinting] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);

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
    // This effect should only apply the theme class to the body, not html
    // to avoid overriding the intro's black background.
    const applyTheme = () => {
      // Clear previous theme classes
      document.documentElement.classList.remove('light', 'dark');

      const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // We add the class to the html element to be accessible by components
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.add('light');
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

  const handleAnimationComplete = useCallback(() => {
    setIsIntroPlaying(false);
  }, []);

  const renderPage = () => {
    const config = pageConfig.find(p => p.page === currentPage) || pageConfig[0];
    const PageComponent = componentMap[config.titleKey as keyof typeof componentMap];

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
    
    const props: any = {
      key: config.titleKey,
      texts: pageTexts[config.titleKey],
    };

    if (config.titleKey === 'cover') {
      props.language = language;
      props.onPhotoClick = () => setIsPhotoModalOpen(true);
    }
    if (config.titleKey === 'resume') {
      props.theme = theme;
    }
    
    return <PageComponent {...props} />;
  };
    
  if (isPrinting) {
    const pagesToPrintKeys = ['cover', 'about', 'resume', 'contact'];
    
    const pageTextsMap: { [key: string]: any } = {
      cover: texts.cover,
      about: texts.about,
      resume: texts.resume,
      contact: texts.contact,
    };

    const pagesForPdf = pagesToPrintKeys.map(key => {
        const PageComponent = componentMap[key as keyof typeof componentMap];
        if (!PageComponent) return null;

        const props: any = {
          key: key,
          texts: pageTextsMap[key],
        };

        if (key === 'resume') {
            props.theme = 'light';
        }
        if (key === 'cover') {
            props.language = language;
            props.onPhotoClick = () => {};
        }

        return <PageComponent {...props} />;
    }).filter((p): p is React.ReactElement => p !== null);

    const printHeaderTexts = {
        name: texts.cover.name,
        title: texts.cover.title,
    };
    
    return <PrintLayout pages={pagesForPdf} headerTexts={printHeaderTexts} />;
  }
  
  if (isIntroPlaying) {
    return <IntroAnimation onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div className="app-container animate-open-window">
      <main className="w-full macos-window">
        <TitleBar title={pageConfig.find(p => p.page === currentPage)?.title || ''} />
        <div className="flex-grow overflow-y-auto p-8 md:p-10">
           {renderPage()}
        </div>
      </main>
      <Dock
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