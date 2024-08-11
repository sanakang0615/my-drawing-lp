// src/components/Header.js
import React from 'react';
import MusicPlayer from './MusicPlayer';
import { IoArrowUpCircle } from "react-icons/io5";
import { GrLinkTop } from "react-icons/gr";
const Header = ({ artworks, spotifyId, items }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left section (Logo and Home Button) */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-black-500 text-2xl font-semibold grey-qo-regular">@musicdrawnby</a>
        </div>
        <div className="flex items-center items-justify space-x-4">
          <button className="text-gray-500 hover:text-black" onClick={scrollToTop}>
            <GrLinkTop size={20} style={{color: 'rgba(75, 85, 99, 0.12)'}}/>
          </button>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
