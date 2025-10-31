import React, { useState, useRef, useEffect, useCallback } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Language, ThemeSwitcherTexts, DockTexts, PageTitleTexts } from '../translations';
import HomeIcon from './icons/HomeIcon';
import AboutIcon from './icons/AboutIcon';
import ResumeIcon from './icons/ResumeIcon';
import ProjectsIcon from './icons/ProjectsIcon';
import MacosIcon from './icons/MacosIcon';
import OSIcon from './icons/OSIcon';
import TestimonialsIcon from './icons/TestimonialsIcon';
import NoctoriunsIcon from './icons/NoctoriunsIcon';
import ContactIcon from './icons/ContactIcon';
import PdfIcon from './icons/PdfIcon';
import { gsap } from 'gsap';

const iconComponentMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  HomeIcon,
  AboutIcon,
  ResumeIcon,
  ProjectsIcon,
  HackintoshIcon: MacosIcon,
  OSIcon,
  TestimonialsIcon,
  NoctoriunsIcon,
  ContactIcon,
};

type Theme = 'light' | 'dark' | 'system';

interface DockProps {
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

const Dock: React.FC<DockProps> = ({
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
  const dockRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dockRef.current) return;
    
    const dock = dockRef.current;
    const icons = Array.from(dock.children) as HTMLElement[];
    const mouseX = e.clientX;
    const dockRect = dock.getBoundingClientRect();
    
    icons.forEach(icon => {
      const iconRect = icon.getBoundingClientRect();
      const iconCenterX = iconRect.left + iconRect.width / 2;
      const distance = Math.abs(mouseX - iconCenterX);

      const maxDistance = iconRect.width * 3;
      const scale = distance < maxDistance ? 1 + (1 - distance / maxDistance) * 0.8 : 1;
      const translateY = distance < maxDistance ? (1 - distance / maxDistance) * -16 : 0;
      
      gsap.to(icon, { 
        scale: scale, 
        y: translateY, 
        duration: 0.1, 
        ease: 'power2.out' 
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!dockRef.current) return;
    const icons = Array.from(dockRef.current.children) as HTMLElement[];
    gsap.to(icons, { 
      scale: 1, 
      y: 0, 
      duration: 0.4, 
      ease: 'elastic.out(1, 0.5)' 
    });
  }, []);


  return (
    <div 
      className="dock-container no-print"
      ref={dockRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {pageConfig.map((page, index) => {
        const IconComponent = iconComponentMap[page.icon];
        return (
          <button
            key={page.title}
            onClick={() => setCurrentPage(index + 1)}
            className={`dock-item ${currentPage === index + 1 ? 'active' : ''}`}
            aria-label={page.title}
            title={page.title}
          >
            {IconComponent && <IconComponent />}
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
        <div className="flex items-center justify-center w-full h-full text-xl font-bold rounded-lg bg-gray-500/10 text-gray-800 dark:text-gray-200">
            {language === 'pt' ? 'EN' : 'BR'}
        </div>
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
        <PdfIcon />
      </button>
    </div>
  );
};

export default Dock;