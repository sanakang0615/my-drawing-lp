// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 text-center animate-fadeIn">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 grey-qo-regular mb-2">
            Music to be Drawn by
          </h3>
        </div>
        
        <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 mx-auto mb-6"></div>
        
        <p className='grey-qo-regular text-gray-700 dark:text-gray-400 mb-4'>
          &copy; {new Date().getFullYear()} Sana Kang. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
