import React from 'react';

const ImageModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative p-4">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white text-3xl p-2 focus:outline-none"
        >
          ✕
        </button>
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-full rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ImageModal;
