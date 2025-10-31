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

  // FIX: Store component references instead of rendered elements to avoid typing issues with cloneElement.
  const options: { name: Theme; icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }[] = [
    { name: 'light', icon: SunIcon, label: texts.light },
    { name: 'dark', icon: MoonIcon, label: texts.dark },
    { name: 'system', icon: DesktopIcon, label: texts.system },
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

  const ActiveIcon = () => {
    switch(theme) {
      case 'light': return <SunIcon />;
      case 'dark': return <MoonIcon />;
      case 'system': return <DesktopIcon />;
      default: return <DesktopIcon />;
    }
  };

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
        <ActiveIcon />
      </button>

      <div ref={popoverRef} className={`theme-popover ${isOpen ? 'open' : ''}`}>
        {/* FIX: Render the icon component directly with props instead of using React.cloneElement, resolving the overload error. */}
        {options.map(({ name, icon: IconComponent, label }) => (
          <button
            key={name}
            onClick={() => handleOptionClick(name)}
            className={`theme-option ${theme === name ? 'active' : ''}`}
            aria-label={label}
          >
            <IconComponent className="w-6 h-6" />
            <span className="flex-grow font-medium">{label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ThemeSwitcher;
