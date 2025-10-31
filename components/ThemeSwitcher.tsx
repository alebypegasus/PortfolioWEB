import React, { useState, useRef, useEffect } from 'react';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import DesktopIcon from './icons/DesktopIcon';
import { ThemeSwitcherTexts } from '../translations';

type Theme = 'light' | 'dark' | 'system';

interface ThemeSwitcherProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  texts: ThemeSwitcherTexts;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme, texts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options: { name: Theme; icon: React.ReactElement; label: string }[] = [
    { name: 'light', icon: <SunIcon className="w-5 h-5" />, label: texts.light },
    { name: 'dark', icon: <MoonIcon className="w-5 h-5" />, label: texts.dark },
    { name: 'system', icon: <DesktopIcon className="w-5 h-5" />, label: texts.system },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  const handleOptionClick = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const activeOptionIcon = options.find(opt => opt.name === theme)?.icon || <DesktopIcon className="w-5 h-5" />;

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="dock-item"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Selecionar tema"
        title="Selecionar tema"
      >
        <div className="w-8 h-8 flex items-center justify-center">
            {activeOptionIcon}
        </div>
      </button>

      <div ref={popoverRef} className={`theme-popover ${isOpen ? 'open' : ''}`}>
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => handleOptionClick(option.name)}
            className={`theme-option ${theme === option.name ? 'active' : ''}`}
            aria-label={option.label}
          >
            {option.icon}
            <span className="flex-grow font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ThemeSwitcher;