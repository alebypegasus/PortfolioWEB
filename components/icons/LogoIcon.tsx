import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
    style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}
  >
    <text 
      x="50%" 
      y="50%" 
      dy=".35em" 
      textAnchor="middle" 
      fontSize="80" 
      fill="currentColor"
    >
      A
    </text>
  </svg>
);

export default LogoIcon;