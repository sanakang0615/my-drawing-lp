import React, { useState, useEffect } from 'react';
import { IoPlaySharp, IoPauseSharp, IoVolumeMediumOutline } from "react-icons/io5";

const MusicPlayer = ({ currentItem, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5); 
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (currentItem) {
      if (audio) {
        audio.pause();
      }

      const newAudio = new Audio(currentItem.music);
      newAudio.volume = volume;
      setAudio(newAudio);

      const updateProgress = () => {
        setProgress((newAudio.currentTime / newAudio.duration) * 100);
      };

      newAudio.addEventListener('timeupdate', updateProgress);

      newAudio.play()
        .then(() => {
          setIsPlaying(true); 
        })
        .catch((error) => {
          console.error("Error attempting to play audio:", error);
        });

      return () => {
        newAudio.removeEventListener('timeupdate', updateProgress);
        newAudio.pause(); 
      };
    }
  }, [currentItem]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error("Error attempting to play audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  if (!currentItem) {
    return null; 
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 max-h-28 shadow-lg rounded-t-2xl z-50">

      <div className="flex items-center space-x-4 sm:space-x-6 w-full sm:w-auto">
        <div className="flex justify-center w-full sm:w-auto">
          <h2 className="text-base sm:text-lg font-semibold gupter-regular">{currentItem.alt}</h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center flex-grow mx-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="text-lg sm:text-2xl text-white bg-transparent"
            style={{ width: '30px', height: '30px' }}
          >
            {isPlaying ? <IoPauseSharp/> : <IoPlaySharp/>}
          </button>
        </div>
        <div className="w-full flex items-center space-x-3">
          <span className="text-xs text-gray-400">{audio && formatTime(audio.currentTime)}</span>
          <input
            type="range"
            value={progress}
            onChange={(e) => {
              if (audio) {
                audio.currentTime = (e.target.value / 100) * audio.duration;
              }
            }}
            className="w-full h-1 bg-gray-600 rounded-full appearance-none mx-4"
          />
          <span className="text-xs text-gray-400">{audio && formatTime(audio.duration)}</span>
        </div>
      </div>
      <div className="hidden sm:flex items-center space-x-3 w-full sm:w-auto">
        <div className="text-gray-400 text-lg"><IoVolumeMediumOutline/></div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full sm:w-24 h-1 bg-gray-600 rounded-full appearance-none"
        />
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 sm:static text-white text-xl bg-transparent hover:bg-gray-700 rounded-full p-2"
      >
        ✕
      </button>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicPlayer;
