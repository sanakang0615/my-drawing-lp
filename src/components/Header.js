// src/components/Header.js
import React from 'react';
import { FaSpotify, FaApple } from 'react-icons/fa';
import { IoSunny, IoMoon } from 'react-icons/io5';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaSpotify size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaApple size={22} />
          </a>
        </div>
        <div className="flex items-center gap-4 sm:gap-5">
          <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            {theme === 'light' ? <IoMoon size={22} /> : <IoSunny size={22} />}
          </button>
          <a href="/" className="hidden sm:block text-gray-600 dark:text-gray-300 text-sm font-medium grey-qo-regular hover:text-gray-900 dark:hover:text-white transition-colors">
            @musicdrawnby
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
