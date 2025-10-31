import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const PARTICLE_COUNT = 150;

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do brilho volumétrico
      gsap.to(sweepRef.current, {
        duration: 5,
        x: '250%',
        ease: 'power1.inOut',
        repeat: -1,
        delay: 0.5,
      });

      // Animação das partículas
      const particles = containerRef.current?.querySelectorAll('.particle');
      particles?.forEach(particle => {
        gsap.set(particle, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          scale: gsap.utils.random(0.5, 1.5),
          opacity: gsap.utils.random(0.1, 0.4),
        });

        const duration = gsap.utils.random(15, 30);
        const parallax = gsap.utils.random(0.2, 0.8);

        gsap.to(particle, {
          duration,
          x: `+=${gsap.utils.random(-100, 100) * parallax}`,
          y: `+=${gsap.utils.random(-100, 100) * parallax}`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="background-container">
      {/* Camada de Partículas */}
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <div key={i} className="particle" />
      ))}
      {/* Luz Volumétrica */}
      <div ref={sweepRef} className="light-sweep"></div>
    </div>
  );
};

export default Background;