import React from 'react';

const ContactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="52" height="52" rx="12" fill="#38A9E6"/>
    <path d="M14 20C14 18.8954 14.8954 18 16 18H36C37.1046 18 38 18.8954 38 20V32C38 33.1046 37.1046 34 36 34H16C14.8954 34 14 33.1046 14 32V20Z" fill="white"/>
    <path d="M16 20L26 28L36 20" stroke="#38A9E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 16C28.5 16 31.5 13 33 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <defs>
        <filter id="shadow" x="0" y="0" width="100%" height="100%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
    </defs>
  </svg>
);

export default ContactIcon;