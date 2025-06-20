import React, { useEffect } from 'react';
import { IoClose } from "react-icons/io5";

const ImageModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 md:p-12 pb-24 md:pb-28 animate-fadeIn"
      onClick={onClose}
    >
        <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-full object-contain block rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/40 text-white rounded-full p-1.5 backdrop-blur-sm hover:bg-black/60 transition-colors z-10"
        >
          <IoClose size={28} />
        </button>
    </div>
  );
};

export default ImageModal;
