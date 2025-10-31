import React from 'react';

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="56" height="56" rx="12.4444" fill="url(#paint0_linear_facebook)"/>
        <path d="M32.0834 29.5833L32.8117 25.0833H28.4167V22.1333C28.4167 20.895 28.9834 19.8333 31.0334 19.8333H33.25V16C32.8441 15.9472 31.545 15.8333 30.0584 15.8333C26.9584 15.8333 24.9167 17.7117 24.9167 21.7V25.0833H20.75V29.5833H24.9167V40.1667H29.4167V29.5833H32.0834Z" fill="white"/>
        <defs>
            <linearGradient id="paint0_linear_facebook" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1877F2"/>
                <stop offset="1" stopColor="#125EBF"/>
            </linearGradient>
        </defs>
    </svg>
);

export default FacebookIcon;