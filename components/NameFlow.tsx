import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const nameVariations = [
  { text: 'Alessandro Ramos de Oliveira', font: 'Montserrat, sans-serif', weight: 900, size: 'clamp(1.5rem, 5vw, 4rem)', case: 'uppercase' },
  { text: 'alessandro ramos de oliveira', font: 'Playfair Display, serif', weight: 700, size: 'clamp(2rem, 6vw, 5rem)', case: 'lowercase' },
  { text: 'Alessandro R. Oliveira', font: 'Roboto Condensed, sans-serif', weight: 700, size: 'clamp(2.5rem, 7vw, 6rem)', case: 'uppercase' },
  { text: 'A L E S S A N D R O', font: 'Orbitron, sans-serif', weight: 700, size: 'clamp(1rem, 4vw, 3rem)', case: 'uppercase', spacing: '0.3em' },
];

const finalName = "Alessandro Ramos de Oliveira";

const NameFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = Array.from(containerRef.current?.querySelectorAll('.name-variant') || []);
    const finalNameChars = Array.from(containerRef.current?.querySelectorAll('.final-name .char') || []);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animação 3D das variações do nome
      elements.forEach((el, i) => {
        const delay = 0.5 + i * 0.4;
        tl.fromTo(
          el,
          { z: -1000, opacity: 0, rotateY: gsap.utils.random(-60, 60), rotateX: gsap.utils.random(-40, 40) },
          {
            duration: 3,
            z: 500,
            opacity: 0.7,
            ease: 'power2.out',
            stagger: 0.1,
          },
          delay
        ).to(
          el,
          {
            duration: 1.5,
            z: 1000,
            opacity: 0,
            ease: 'power2.in',
          },
          '>-1'
        );
      });
      
      // Montagem do nome final
      tl.to(finalNameChars, {
          duration: 1,
          opacity: 1,
          x: 0,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: 'back.out(1.7)',
          stagger: {
            each: 0.03,
            from: 'random'
          }
        }, 7.5
      );

      // Brilho final no nome
      const sweep = document.createElement('div');
      sweep.style.position = 'absolute';
      sweep.style.width = '150%';
      sweep.style.height = '150%';
      sweep.style.left = '-25%';
      sweep.style.top = '-25%';
      sweep.style.background = 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)';
      sweep.style.opacity = '0';
      const finalNameEl = containerRef.current?.querySelector('.final-name');
      finalNameEl?.appendChild(sweep);

      tl.to(sweep, {
          duration: 1,
          opacity: 1,
          scale: 1.5,
          ease: 'power2.out'
      }, 8.2)
      .to(sweep, {
          duration: 0.8,
          opacity: 0,
          ease: 'power2.in'
      }, ">-0.5");


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="name-flow-container">
      {nameVariations.map((variant, index) => (
        <div
          key={index}
          className="name-variant"
          style={{
            fontFamily: variant.font,
            fontWeight: variant.weight,
            fontSize: variant.size,
            textTransform: variant.case as 'uppercase' | 'lowercase',
            letterSpacing: variant.spacing || 'normal',
          }}
        >
          {variant.text}
        </div>
      ))}
      <div className="final-name">
        {finalName.split('').map((char, index) => (
          <span
            key={index}
            className="char"
            style={{
              transform: `translateX(${gsap.utils.random(-200, 200)}px) translateY(${gsap.utils.random(-150, 150)}px) translateZ(${gsap.utils.random(-500, 500)}px) rotateX(${gsap.utils.random(-180, 180)}deg) rotateY(${gsap.utils.random(-180, 180)}deg) scale(0)`,
              opacity: 0
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NameFlow;