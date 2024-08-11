import React, { useState, useEffect } from 'react';

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
  }, [currentItem]);  // Remove volume from the dependency array

  useEffect(() => {
    if (audio) {
      audio.volume = volume;  // Adjust the volume without affecting playback
    }
  }, [volume]);  // This effect only runs when volume changes

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
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md text-white flex items-center justify-between px-8 py-4 max-h-28 shadow-lg rounded-t-2xl">
      <div className="flex items-center space-x-6">
        <img
          src={currentItem.src}
          alt={currentItem.alt}
          className="w-20 h-20 rounded-lg object-cover shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold">{currentItem.alt}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow mx-4 space-y-2">
        <div className="flex items-center space-x-6">
          <button
            onClick={handlePlayPause}
            className="text-3xl text-white rounded-full shadow-md hover:bg-gray-300"
            style={{width: '50px'}}
          >
            {isPlaying ? '⏸' : '▶️'}
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
            className="w-full h-1 bg-gray-600 rounded-full appearance-none"
          />
          <span className="text-xs text-gray-400">{audio && formatTime(audio.duration)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="text-gray-400 text-sm">🔊</div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-gray-600 rounded-full appearance-none"
        />
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 text-white text-xl bg-transparent hover:bg-gray-700 rounded-full p-2"
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
