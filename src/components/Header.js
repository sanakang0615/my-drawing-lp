// src/components/Header.js
import React from 'react';
import MusicPlayer from './MusicPlayer';

const Header = ({ artworks, spotifyId, items }) => {
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left section (Logo and Home Button) */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-black-500 text-2xl font-semibold grey-qo-regular">@musicdrawnby</a>
        </div>

        {/* Center section (Music Player) */}
        {/* <div className="flex-grow max-w-lg mx-8">
          <MusicPlayer artwork={artworks} spotifyId={spotifyId} items={items} />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
