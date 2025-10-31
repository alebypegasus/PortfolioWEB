import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Title: React.FC = () => {
  const [text, setText] = useState('PORTFÓLIO');
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'PORTFÓLIO' ? 'PORTFOLIO' : 'PORTFÓLIO'));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setChars(text.split(''));
  }, [text]);
  
  useEffect(() => {
      if (chars.length > 0) {
        gsap.fromTo(
          '.title-char',
          { y: '100%', opacity: 0, rotateX: -90 },
          {
            duration: 0.8,
            y: '0%',
            opacity: 1,
            rotateX: 0,
            ease: 'back.out(1.7)',
            stagger: 0.05,
          }
        );
      }
  }, [chars]);

  return (
    <div className="title-container">
      <h1 ref={titleRef} aria-label={text}>
        <span className="sr-only">{text}</span>
        {chars.map((char, index) => (
          <span key={`${text}-${index}`} className="char title-char" style={{ display: 'inline-block' }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Title;