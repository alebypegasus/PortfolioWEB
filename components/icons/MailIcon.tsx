import React from 'react';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="scale(0.85) translate(4, 4)">
    <path d="M16 20C16 18.8954 16.8954 18 18 18H38C39.1046 18 40 18.8954 40 20V36C40 37.1046 39.1046 38 38 38H18C16.8954 38 16 37.1046 16 36V20Z" opacity="0.6"/>
    <path d="M16 20L28 30L40 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

export default MailIcon;