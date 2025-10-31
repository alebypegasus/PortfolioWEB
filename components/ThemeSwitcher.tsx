import React from 'react';
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
  const options: { name: Theme; icon: React.ReactElement; label: string }[] = [
    { name: 'light', icon: <SunIcon className="w-5 h-5" />, label: texts.light },
    { name: 'dark', icon: <MoonIcon className="w-5 h-5" />, label: texts.dark },
    { name: 'system', icon: <DesktopIcon className="w-5 h-5" />, label: texts.system },
  ];
  
  const activeOption = options.find(opt => opt.name === theme) || options[2];
  const inactiveOptions = options.filter(opt => opt.name !== theme);

  return (
    <div className="group relative">
      {/* Active Icon */}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:bg-white/30 dark:hover:bg-black/30"
        aria-label={activeOption.label}
        title={activeOption.label}
      >
        {activeOption.icon}
      </button>
      
      {/* Inactive Icons - Appear on hover to the right */}
      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-auto invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-20">
        <div className="flex flex-row bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl p-1 space-x-1">
          {inactiveOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => setTheme(option.name)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-black/40"
              aria-label={option.label}
              title={option.label}
            >
              {option.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;