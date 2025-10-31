import React from 'react';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="56" height="56" rx="12.4444" fill="url(#paint0_linear_mail)"/>
    <path d="M16 20C16 18.8954 16.8954 18 18 18H38C39.1046 18 40 18.8954 40 20V36C40 37.1046 39.1046 38 38 38H18C16.8954 38 16 37.1046 16 36V20Z" fill="white" fillOpacity="0.8"/>
    <path d="M16 20L28 30L40 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_mail" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3498DB"/>
        <stop offset="1" stopColor="#2980B9"/>
      </linearGradient>
    </defs>
  </svg>
);

export default MailIcon;