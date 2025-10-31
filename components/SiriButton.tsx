import React, { useState, useRef, useEffect } from 'react';
import SiriIcon from './icons/SiriIcon';

interface SiriButtonProps {
  onClick: () => void;
}

const SiriButton: React.FC<SiriButtonProps> = ({ onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initial position based on viewport
    const initialX = window.innerWidth - 80;
    const initialY = window.innerHeight / 2 - 32;
    setPosition({ x: initialX, y: initialY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(true);
    if (fabRef.current) {
        const rect = fabRef.current.getBoundingClientRect();
        offsetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<Document>) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    });
  };

  const handleMouseUp = (e: React.MouseEvent<Document>) => {
    // Use a small threshold to differentiate between a click and a drag
    if (isDragging) {
      setTimeout(() => setIsDragging(false), 0);
    }
  };
  
  // Attach move and up listeners to the window to handle dragging outside the button
  useEffect(() => {
    const moveHandler = (e: MouseEvent) => handleMouseMove(e as any);
    const upHandler = (e: MouseEvent) => handleMouseUp(e as any);
    
    if (isDragging) {
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('mouseup', upHandler);
    }
    
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
    };
  }, [isDragging]);

  // Use a separate click handler to avoid firing after a drag
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
     if (isDragging) {
        // Prevent click if we were dragging
        e.stopPropagation();
        return;
    }
    onClick();
  }

  return (
    <button
      ref={fabRef}
      className="siri-fab no-print"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: 0,
        top: 0
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      aria-label="Abrir assistente Siri"
    >
      <SiriIcon animated={true} />
    </button>
  );
};

export default SiriButton;