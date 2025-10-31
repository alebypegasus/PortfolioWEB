import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const fragments = [
  { text: 'Alessandro', size: '6vw', initialPos: { x: '-20vw', y: '-15vh' } },
  { text: 'Ramos', size: '5vw', initialPos: { x: '25vw', y: '10vh' } },
  { text: 'DESIGN', size: '4vw', initialPos: { x: '15vw', y: '-25vh' } },
  { text: 'FRONTEND', size: '7vw', initialPos: { x: '-10vw', y: '20vh' } },
  { text: 'DEVELOPER', size: '3vw', initialPos: { x: '30vw', y: '-5vh' } },
  { text: 'UI/UX', size: '4.5vw', initialPos: { x: '-25vw', y: '5vh' } },
];

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skipButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onAnimationComplete,
      });

      // Show skip button
      tl.to(skipButtonRef.current, { opacity: 1, duration: 0.5 }, 0.5);
      
      // Phase 1: Fragments appear and drift
      tl.from('.intro-text-fragment', {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.5,
        stagger: 0.1,
        ease: 'power3.out',
      }, 0);
      
      tl.to('.intro-text-fragment', {
        x: '+=random(-30, 30)',
        y: '+=random(-30, 30)',
        rotation: 'random(-20, 20)',
        duration: 2,
        ease: 'none',
      }, 0);

      // Phase 2: Convergence
      tl.to('.intro-text-fragment', {
        opacity: 0,
        filter: 'blur(5px)',
        scale: 0.2,
        x: 0,
        y: 0,
        duration: 0.8, // Faster
        stagger: 0.05,
        ease: 'power2.in',
      }, 1.5); // Starts earlier

      // Phase 3: Formation
      tl.from('.intro-final-name', {
        opacity: 0,
        scale: 0.5,
        filter: 'blur(15px)',
        duration: 1,
        ease: 'back.out(1.7)',
      }, 2.1); // Overlaps
      
      tl.from('.intro-final-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      }, 2.5);
      
      // Phase 4: Transition
      const finalFadeOutTime = 3.5;
      tl.to(skipButtonRef.current, { opacity: 0, duration: 0.3, ease: 'power1.in' }, finalFadeOutTime - 0.2);
      
      // The "zoom through" effect
      tl.to('.intro-final-title', {
         opacity: 0,
         filter: 'blur(20px)',
         scale: 1.5, // Larger scale for more dramatic effect
         duration: 0.8,
         ease: 'power2.in',
      }, finalFadeOutTime);
      
      // Fade out the entire intro container to reveal the app's background underneath
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 1.0, // A bit longer for a smoother fade
        ease: 'power2.inOut',
      }, finalFadeOutTime);


    }, containerRef);

    return () => ctx.revert();
  }, [onAnimationComplete]);

  const handleSkip = () => {
    // Kill all animations on the context and elements
    gsap.killTweensOf(containerRef.current);
    gsap.killTweensOf(skipButtonRef.current);
    gsap.killTweensOf('.intro-text-fragment');
    gsap.killTweensOf('.intro-final-title');
    
    if (containerRef.current) {
        gsap.to(containerRef.current, {
          duration: 0.5,
          opacity: 0,
          ease: 'power2.in',
          onComplete: onAnimationComplete
        });
    } else {
        onAnimationComplete();
    }
  }

  return (
    <div ref={containerRef} className="intro-container">
      <div className="intro-fragments-container">
        {fragments.map((frag, i) => (
          <div
            key={i}
            className="intro-text-fragment"
            style={{
              fontSize: frag.size,
              fontFamily: i % 2 === 0 ? "'Montserrat', sans-serif" : "'Orbitron', sans-serif",
              top: `calc(50% + ${frag.initialPos.y})`,
              left: `calc(50% + ${frag.initialPos.x})`,
            }}
          >
            {frag.text}
          </div>
        ))}
      </div>

      <div className="intro-final-title">
        <h1 className="intro-final-name">Alessandro Ramos</h1>
        <p className="intro-final-subtitle">Frontend Developer & Designer</p>
      </div>

      <button ref={skipButtonRef} className="skip-intro-button" onClick={handleSkip}>
        Pular
      </button>
    </div>
  );
};

export default IntroAnimation;
