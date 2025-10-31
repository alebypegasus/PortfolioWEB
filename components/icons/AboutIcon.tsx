import React from 'react';

const AboutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_contacts)"/>
    <circle cx="26" cy="22" r="6" fill="#D9D9D9"/>
    <path d="M16 38C16 32.4772 20.4772 28 26 28C31.5228 28 36 32.4772 36 38H16Z" fill="#D9D9D9"/>
    <defs>
      <linearGradient id="paint0_linear_contacts" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A8A8A8"/>
        <stop offset="1" stopColor="#7E7E7E"/>
      </linearGradient>
    </defs>
  </svg>
);

export default AboutIcon;