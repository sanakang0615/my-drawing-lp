import React from 'react';

const ImageDetail = ({ item, onClose, setItem }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-5xl w-full p-6 flex">
        <button 
          onClick={onClose} 
          className="absolute top-4 left-4 text-gray-500 hover:text-black bg-white rounded-full p-2 shadow-lg"
        >
          ←
        </button>
        <div className="w-1/2">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">{item.alt}</h2>
          <p className="text-gray-700">Here you can add additional details, comments, or any other content you want to show alongside the image.</p>
          {/* You can add more content here */}
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
