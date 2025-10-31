import React from 'react';

const GuideIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-6.998l-6.878 3.541M9 6.75h6m-6 3.541l6.878 3.541m0 0L21 12m-6.878 3.541V6.75m-6 3.541h6M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
  </svg>
);

export default GuideIcon;
