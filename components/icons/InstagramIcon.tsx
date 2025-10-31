import React from 'react';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="56" height="56" rx="12.4444" fill="url(#paint0_radial_instagram)"/>
        <path d="M37.3333 16H18.6667C16.0858 16 14 18.0858 14 20.6667V35.3333C14 37.9142 16.0858 40 18.6667 40H37.3333C39.9142 40 42 37.9142 42 35.3333V20.6667C42 18.0858 39.9142 16 37.3333 16ZM39.6667 35.3333C39.6667 36.6237 38.6237 37.6667 37.3333 37.6667H18.6667C17.3762 37.6667 16.3333 36.6237 16.3333 35.3333V20.6667C16.3333 19.3762 17.3762 18.3333 18.6667 18.3333H37.3333C38.6237 18.3333 39.6667 19.3762 39.6667 20.6667V35.3333Z" fill="white"/>
        <path d="M28 21.9167C24.6467 21.9167 21.9167 24.6467 21.9167 28C21.9167 31.3533 24.6467 34.0833 28 34.0833C31.3533 34.0833 34.0833 31.3533 34.0833 28C34.0833 24.6467 31.3533 21.9167 28 21.9167ZM28 31.75C25.93 31.75 24.25 30.07 24.25 28C24.25 25.93 25.93 24.25 28 24.25C30.07 24.25 31.75 25.93 31.75 28C31.75 30.07 30.07 31.75 28 31.75Z" fill="white"/>
        <path d="M34.5417 21.4583C35.4308 21.4583 36.1667 20.7225 36.1667 19.8333C36.1667 18.9442 35.4308 18.2083 34.5417 18.2083C33.6525 18.2083 32.9167 18.9442 32.9167 19.8333C32.9167 20.7225 33.6525 21.4583 34.5417 21.4583Z" fill="white"/>
        <defs>
            <radialGradient id="paint0_radial_instagram" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5 40.5) rotate(-45) scale(49.4975)">
                <stop stopColor="#FEDA75"/>
                <stop offset="0.2" stopColor="#FA7E1E"/>
                <stop offset="0.4" stopColor="#D62976"/>
                <stop offset="0.6" stopColor="#962FBF"/>
                <stop offset="0.8" stopColor="#4F5BD5"/>
            </radialGradient>
        </defs>
    </svg>
);

export default InstagramIcon;