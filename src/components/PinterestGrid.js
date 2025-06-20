import React, { useState, useEffect } from 'react';
import { IoPlay } from "react-icons/io5";

const PinterestGrid = ({ items, onItemSelected }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
      onItemSelected(null);
    } else {
      setSelectedItem(item);
      onItemSelected(item);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">
      {items.map((item, index) => (
        <div
          key={index}
          className="group animate-fadeInUp"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div 
            className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <div className="aspect-square w-full bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto aspect-square object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <IoPlay className="text-white text-6xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="pt-4 flex justify-between items-start">
            <div className="flex-grow pr-4">
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 gupter-bold truncate">
                {item.alt}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 gupter-regular truncate mt-1">
                {item.artist}
              </p>
            </div>
            <div className="flex-shrink-0 text-center">
              <p className="text-sm font-mono text-gray-400 dark:text-gray-500 mt-1">
                {String(index + 1).padStart(2, '0')}
              </p>
              {isMobile && (
                <button 
                  onClick={() => handleClick(item)} 
                  className="text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors"
                >
                  <IoPlay size={16} className="mt-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PinterestGrid;
