import React from 'react';

const PdfIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="url(#paint0_linear_pdf)"/>
    <rect x="14" y="20" width="24" height="18" rx="3" fill="#34C759" transform="rotate(-15 26 26)"/>
    <rect x="14" y="20" width="24" height="18" rx="3" fill="#007AFF" transform="rotate(10 26 26)"/>
     <rect x="16" y="16" width="20" height="20" rx="3" fill="white" stroke="#E5E5E5" strokeWidth="2"/>
    <circle cx="26" cy="26" r="5" fill="#007AFF"/>
    <defs>
      <linearGradient id="paint0_linear_pdf" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A8A8A8"/>
        <stop offset="1" stopColor="#7E7E7E"/>
      </linearGradient>
    </defs>
  </svg>
);

export default PdfIcon;