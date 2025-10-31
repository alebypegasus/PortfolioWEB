import React, { useEffect, useState } from 'react';
import CloseIcon from './icons/CloseIcon';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
    } else {
      // Delay hiding to allow for exit animation
      const timer = setTimeout(() => setIsShowing(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isShowing) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 no-print ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>
      
      <div 
        className={`relative bg-white/30 dark:bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10 transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src="https://picsum.photos/seed/profile-photo/500/500" 
          alt="Alessandro Ramos's profile picture"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors"
          aria-label="Close photo view"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;