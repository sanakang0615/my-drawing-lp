import React, { useState, useEffect } from 'react';
import { IoPlaySharp } from "react-icons/io5";
import ImageDetail from './ImageDetail';

const PinterestGrid = ({ items, onItemSelected }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClick = (item) => {
    setShowTooltip(false); // Hide tooltip after first interaction

    if (selectedItem === item) {
      setSelectedItem(null);
      onItemSelected(null);
    } else {
      setSelectedItem(item);
      onItemSelected(item);
    }
  };

  return (
    <div className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 ${isMobile ? 'scroll-snap-parent' : ''}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative mb-4 break-inside-avoid overflow-hidden rounded-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fadeInUp group ${isMobile ? 'scroll-snap-child' : ''}`}
          onClick={() => handleClick(item)}
        >
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full h-auto object-cover rounded-xl transition-transform duration-300 ${!isMobile ? 'group-hover:scale-105' : ''}`}
          />
          {!isMobile && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-2xl font-bold gupter-regular text-center">{item.alt}</p>
                <p className="text-md font-bold gupter-regular text-center">{item.artist}</p>
              </div>
            </>
          )}
          {!isMobile && (
            <button
              className="flex items-center justify-center absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 shadow-md"
            >
              <IoPlaySharp className="inline-block mr-1"/> <span className="gupter-regular">Play</span>
            </button>
          )}
          {isMobile && showTooltip && (
            <div className="gupter-regular absolute top-2 left-2 bg-black bg-opacity-20 text-white p-2 rounded-lg text-xs">
              Tap to play music
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PinterestGrid;
