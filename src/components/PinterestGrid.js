import React, { useState } from 'react';
import ImageDetail from './ImageDetail';

const PinterestGrid = ({ items, onItemSelected }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    onItemSelected(item); // Notify the parent component (App.js) about the selected item
  };

  const handleClose = () => {
    setSelectedItem(null);
  };
  
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative mb-4 break-inside-avoid overflow-hidden rounded-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fadeInUp group"
          onClick={() => handleClick(item)}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <text className="text-lg font-bold gupter-regular">{item.alt}</text>
          </div>
          <button 
            className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
          >
            ▶️ Play
          </button>
        </div>
      ))}
      {/* {selectedItem && (
        <ImageDetail item={selectedItem} onClose={handleClose}/>
      )} */}
    </div>
  );
};

export default PinterestGrid;
