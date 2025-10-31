import React from 'react';

const DesktopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_desktop)"/>
    <circle cx="26" cy="26" r="12" fill="url(#paint1_linear_desktop)"/>
    <path d="M26 16V19" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 33V36" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34.3923 17.6077L32.2711 19.7289" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19.7289 32.2711L17.6077 34.3923" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 26L33 26" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19 26L16 26" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34.3923 34.3923L32.2711 32.2711" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19.7289 19.7289L17.6077 17.6077" stroke="#E5E5EE" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="26" r="4" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_desktop" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4D4D4D"/>
        <stop offset="1" stopColor="#2C2C2C"/>
      </linearGradient>
      <linearGradient id="paint1_linear_desktop" x1="26" y1="14" x2="26" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#999999"/>
        <stop offset="1" stopColor="#666666"/>
      </linearGradient>
    </defs>
  </svg>
);

export default DesktopIcon;