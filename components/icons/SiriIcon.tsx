import React from 'react';

interface SiriIconProps extends React.SVGProps<SVGSVGElement> {
  animated?: boolean;
}

const SiriIcon: React.FC<SiriIconProps> = ({ animated = false, ...props }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
        ...props.style,
    }}
  >
    <defs>
      <radialGradient id="siri-gradient-1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8A5BF1" />
        <stop offset="100%" stopColor="#6A32E5" />
      </radialGradient>
      <radialGradient id="siri-gradient-2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#55DDFF" />
        <stop offset="100%" stopColor="#0080FF" />
      </radialGradient>
      <radialGradient id="siri-gradient-3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFB867" />
        <stop offset="100%" stopColor="#F2932E" />
      </radialGradient>
      <style>
        {animated && `
          @keyframes siri-pulse-1 {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
            50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
          }
          @keyframes siri-pulse-2 {
            0%, 100% { transform: scale(1) rotate(360deg); opacity: 0.7; }
            50% { transform: scale(0.9) rotate(180deg); opacity: 0.9; }
          }
          .siri-orb-1 {
            animation: siri-pulse-1 8s ease-in-out infinite;
            transform-origin: center;
          }
          .siri-orb-2 {
            animation: siri-pulse-2 10s ease-in-out infinite reverse;
            transform-origin: center;
          }
        `}
      </style>
    </defs>
    
    <g filter="url(#siri-blur)">
      <circle cx="50" cy="50" r="45" fill="url(#siri-gradient-1)" className={animated ? "siri-orb-1" : ""} />
      <circle cx="50" cy="50" r="35" fill="url(#siri-gradient-2)" mixBlendMode="screen" className={animated ? "siri-orb-2" : ""} />
      <circle cx="50" cy="50" r="25" fill="url(#siri-gradient-3)" mixBlendMode="overlay" />
    </g>
    
    <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
);

export default SiriIcon;