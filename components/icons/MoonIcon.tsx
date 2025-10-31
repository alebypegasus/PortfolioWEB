import React from 'react';

const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_moon)"/>
    <path d="M25.75 16C22.0953 16 19.1667 18.2806 18.25 21.5C17.3333 24.7194 18.5 28.5 21.5 30.5C24.5 32.5 28.5 32.5 31.5 30.5C34.5 28.5 35 24.5 33.5 21C32 17.5 29.4047 16 25.75 16Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_moon" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8A5BF1"/>
        <stop offset="1" stopColor="#6A32E5"/>
      </linearGradient>
    </defs>
  </svg>
);

export default MoonIcon;