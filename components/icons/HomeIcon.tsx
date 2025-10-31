import React from 'react';

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_finder)"/>
    <path d="M19.5 22C19.5 22 20 18.5 22.5 18.5C25 18.5 25.5 22 25.5 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32.5 22C32.5 22 32 18.5 29.5 18.5C27 18.5 26.5 22 26.5 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M21 31.5C22 33 24.5 34.5 26 34.5C27.5 34.5 30 33 31 31.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="paint0_linear_finder" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#55DDFF"/>
        <stop offset="1" stopColor="#0080FF"/>
      </linearGradient>
    </defs>
  </svg>
);

export default HomeIcon;