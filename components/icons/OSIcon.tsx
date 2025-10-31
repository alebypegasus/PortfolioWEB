import React from 'react';

const OSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_os)"/>
    <path d="M26 16C22.6863 16 20 18.6863 20 22V27.5C20 28.8807 21.1193 30 22.5 30H29.5C30.8807 30 32 28.8807 32 27.5V22C32 18.6863 29.3137 16 26 16Z" fill="#F47878"/>
    <path d="M26 30V34C26 35.1046 26.8954 36 28 36H29" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M23 36H24C25.1046 36 26 35.1046 26 34V30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="23" r="3" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_os" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4D4D4D"/>
        <stop offset="1" stopColor="#2C2C2C"/>
      </linearGradient>
    </defs>
  </svg>
);

export default OSIcon;