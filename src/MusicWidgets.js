import React, { useState, useEffect } from 'react';

export const MusicWidgets = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const playMusic = (trackId) => {
    console.log(`Playing track ${trackId} via Spotify API...`);
    // Here you will integrate the Spotify API
  };
  const musicData = [
    { title: 'Into the groove', artist: 'Madonna', cover: 'cover-url-1' },
    // Add more music items here
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Update the scrollIndex based on scrollPos
      setScrollIndex(Math.floor(scrollPos / 200)); // Adjust this value as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6">
      {musicData.map((music, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-in-out transform ${
            index === scrollIndex ? 'scale-110' : 'scale-95'
          } bg-green-500 text-white p-6 rounded-lg shadow-lg`}
        >
          <img
            src={music.cover}
            alt={music.title}
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg font-bold">{music.title}</h3>
          <p>{music.artist}</p>
          <button
            onClick={() => playMusic(music.trackId)}
            className="mt-4 py-2 px-4 bg-white text-black rounded-full"
          >
            Play
          </button>
        </div>
      ))}
    </div>
  );
};
