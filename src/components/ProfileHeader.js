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
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Album</p>
        <h1 className="text-4xl md:text-6xl font-bold my-2 text-gray-800 dark:text-gray-200 grey-qo-regular">
          Music to be Drawn by
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 font-semibold gupter-medium">
          Sana Kang
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          {`2024 • ${totalTracks} songs`}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
