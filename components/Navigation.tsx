import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Language, ThemeSwitcherTexts, DockTexts, PageTitleTexts } from '../translations';
import PdfIcon from './icons/PdfIcon';
import HomeIcon from './icons/HomeIcon';
import MacosIcon from './icons/MacosIcon';

// To keep the number of files manageable, icons are defined here.
// In a larger project, they would be in separate files.
const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-8 h-8 flex items-center justify-center">{children}</div>
);

const AboutIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></Icon>;
const ResumeIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4zM4 10a2 2 0 100 4h12a2 2 0 100-4H4zM4 17a2 2 0 100 4h6a2 2 0 100-4H4z" /></svg></Icon>;
const ProjectsIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></Icon>;
const OSIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-5.571 3m-16.5 4.5l5.571 3 5.571-3m0 0l5.571 3 5.571-3m0 0l-5.571-3 5.571-3" /></svg></Icon>;
const TestimonialsIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.832 8.832 0 01-4.132-.988l-1.332.666a.5.5 0 01-.62-.62l.666-1.332A8.832 8.832 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.416 14.584A6.983 6.983 0 0010 15c3.313 0 6-2.686 6-6s-2.687-6-6-6-6 2.686-6 6c0 1.288.418 2.48 1.133 3.474l-.746.373a.5.5 0 01.11.886l.374-.746z" clipRule="evenodd" /></svg></Icon>;
const NoctoriunsIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5L12 11.25 8.5 15.5 7 14l5-5.5 5 5.5-1.5 1.5z" /></svg></Icon>;
const ContactIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></Icon>;
const LanguageIcon = () => <Icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.944A5.965 5.965 0 0110 8c.482 0 .95.055 1.401.162l-3.036 3.035a.5.5 0 01-.707-.707l3.036-3.035A5.965 5.965 0 0110 6c-3.313 0-6 2.687-6 6 0 1.62.645 3.09 1.697 4.168l-1.023-1.023a.5.5 0 01.707-.707l1.023 1.023A5.94 5.94 0 014 12.5c0-1.045.27-2.02.74-2.844z" clipRule="evenodd" /></svg></Icon>;


const iconMap: { [key: string]: React.FC } = {
  HomeIcon: () => <Icon><HomeIcon className="w-full h-full p-1" /></Icon>,
  AboutIcon,
  ResumeIcon,
  ProjectsIcon,
  HackintoshIcon: () => <Icon><MacosIcon className="w-full h-full p-1" /></Icon>,
  OSIcon,
  TestimonialsIcon,
  NoctoriunsIcon,
  ContactIcon,
};

type Theme = 'light' | 'dark' | 'system';

interface NavigationProps {
  pageConfig: PageTitleTexts[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeTexts: ThemeSwitcherTexts;
  language: Language;
  onSetLanguage: (lang: Language) => void;
  onExportPdf: () => void;
  texts: DockTexts;
}

const Navigation: React.FC<NavigationProps> = ({
  pageConfig,
  currentPage,
  setCurrentPage,
  theme,
  setTheme,
  themeTexts,
  language,
  onSetLanguage,
  texts,
  onExportPdf,
}) => {

  return (
    <div className="dock-container no-print">
      {pageConfig.map((page, index) => {
        const PageIcon = iconMap[page.icon];
        return (
          <button
            key={page.title}
            onClick={() => setCurrentPage(index + 1)}
            className={`dock-item ${currentPage === index + 1 ? 'active' : ''}`}
            aria-label={page.title}
            title={page.title}
          >
            {PageIcon && <PageIcon />}
          </button>
        );
      })}

      <div className="dock-separator"></div>

      <button
        onClick={() => onSetLanguage(language === 'pt' ? 'en' : 'pt')}
        className="dock-item"
        aria-label={`Mudar para ${language === 'pt' ? 'Inglês' : 'Português'}`}
        title={`Mudar para ${language === 'pt' ? 'Inglês' : 'Português'}`}
      >
        <span className="text-xl font-bold">{language === 'pt' ? 'EN' : 'BR'}</span>
      </button>

      <div className="relative">
        <ThemeSwitcher theme={theme} setTheme={setTheme} texts={themeTexts} />
      </div>

       <button
        onClick={onExportPdf}
        className="dock-item"
        aria-label={texts.exportPdf}
        title={texts.exportPdf}
      >
        <Icon><PdfIcon className="w-full h-full p-1" /></Icon>
      </button>
    </div>
  );
};

export default Navigation;