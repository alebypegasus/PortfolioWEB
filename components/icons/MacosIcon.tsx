import React from 'react';

const MacosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_macos)"/>
    <path d="M30.64,25.464c.14,3.192-2.394,5.316-5.316,5.316-1.462,0-3.058-.798-4.52- .798-1.462,0-3.456.93-5.184.93-2.658,0-5.184-2.128-5.184-5.316,0-3.456,2.79-5.448,5.184-5.448,1.596,0,3.192.798,4.52.798,1.462,0,3.324-.93,5.184-.93,1.462,0,3.324.532,4.52,1.328-.266-.266-3.324,1.86-3.324,5.184,0,1.994.93,3.324,2.526,4.122C29.61,26.794,30.33,26.13,30.64,25.464ZM24.47,14.92c1.196-1.462,1.994-3.456,1.86-5.316-2.128,0-4.254,1.328-5.448,2.79-1.196,1.462-2.26,3.456-1.994,5.448C21.14,17.968,23.27,16.51,24.47,14.92Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_macos" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B3B3B3"/>
        <stop offset="1" stopColor="#6B6B6B"/>
      </linearGradient>
    </defs>
  </svg>
);

export default MacosIcon;