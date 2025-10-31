import React from 'react';

const ResumeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_pages)"/>
    <path d="M19 16H33V20H19V16Z" fill="white" fillOpacity="0.8"/>
    <path d="M19 24H33V28H19V24Z" fill="white" fillOpacity="0.8"/>
    <path d="M19 32H27V36H19V32Z" fill="white" fillOpacity="0.8"/>
    <defs>
      <linearGradient id="paint0_linear_pages" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB867"/>
        <stop offset="1" stopColor="#F2932E"/>
      </linearGradient>
    </defs>
  </svg>
);

export default ResumeIcon;