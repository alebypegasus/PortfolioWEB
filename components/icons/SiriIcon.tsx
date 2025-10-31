import React from 'react';

const SiriIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export default SiriIcon;
