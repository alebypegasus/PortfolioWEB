import React from 'react';

const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_sun)"/>
    <circle cx="26" cy="26" r="9" fill="#FFD60A"/>
    <defs>
      <linearGradient id="paint0_linear_sun" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#64D2FF"/>
        <stop offset="1" stopColor="#3A91FF"/>
      </linearGradient>
    </defs>
  </svg>
);

export default SunIcon;