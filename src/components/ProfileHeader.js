import React from 'react';
import items from '../items.json';

const ProfileHeader = () => {
  const totalTracks = items.length;

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 animate-fadeIn pt-12 md:pt-16">
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
        <img 
          src='/lp-asset-2.png' 
          alt="Album Art for Music to be Drawn by" 
          className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-200">Album</p>
        <h1 className="text-5xl md:text-7xl font-black my-2 text-gray-800 dark:text-gray-200 ">
          Music to be Drawn by
        </h1>
        <p className="mt-4 text-sm md:text-base">
          <span className="font-bold text-gray-800 dark:text-gray-200">Sana Kang</span>
          <span className="text-gray-500 dark:text-gray-400"> • {`2025 • ${totalTracks} songs`}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
