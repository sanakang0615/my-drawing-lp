// src/components/Footer.js
import React from 'react';
import { FaSpotify, FaApple } from 'react-icons/fa';
import { IoSunny, IoMoon } from 'react-icons/io5';

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer className="bg-transparent text-center py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          
          <a href="/" className="text-gray-600 dark:text-gray-300 text-sm font-medium grey-qo-regular hover:text-gray-900 dark:hover:text-white transition-colors">
            @musicdrawnby
          </a>
        </div>
        
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          &copy; {new Date().getFullYear()} Sana Kang. All Rights Reserved.
        </p>

        <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          {theme === 'light' ? <IoMoon size={22} /> : <IoSunny size={22} />}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
