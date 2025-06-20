import React, { useState, useEffect, useRef } from 'react';
import { IoPlaySharp, IoPauseSharp, IoVolumeMediumOutline } from "react-icons/io5";

const formatTime = (time) => {
  if (isNaN(time) || time === 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const MusicPlayer = ({ currentItem, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Cleanup previous audio instance
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    const audio = new Audio(currentItem.music);
    audioRef.current = audio;
    setIsLoading(true);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false); // Default to paused, wait for user or autoplay

    const onLoadedMetadata = async () => {
      setDuration(audio.duration);
      setIsLoading(false);
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Autoplay was prevented:", error);
        setIsPlaying(false); // Stay in paused state if autoplay fails
      }
    };

    const onTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.volume = volume;

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentItem]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlayPause = async () => {
    if (isLoading || !audioRef.current) return;
    const audio = audioRef.current;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error with play/pause:", error);
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    if (isLoading || !audioRef.current?.duration) return;
    const audio = audioRef.current;
    const newProgress = e.target.value;
    setProgress(newProgress);
    audio.currentTime = (newProgress / 100) * audio.duration;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  if (!currentItem) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] animate-fadeInUp">
      <div className="bg-white/90 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">

            {/* Song Info */}
            <div className="flex items-center gap-4 w-1/4 min-w-0">
              <img src={currentItem.src} alt={currentItem.alt} className="w-12 h-12 rounded-md object-cover flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-gray-800 gupter-bold truncate">{currentItem.alt}</p>
                <p className="text-sm text-gray-500 gupter-regular truncate">{currentItem.artist}</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex-grow flex items-center justify-center gap-4 w-1/2">
              <button onClick={handlePlayPause} className="text-gray-700 hover:text-black transition-colors" disabled={isLoading}>
                {isPlaying ? <IoPauseSharp size={30}/> : <IoPlaySharp size={30}/>}
              </button>
              <div className="w-full flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500 w-10 text-center">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  value={progress || 0}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-gray-300 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed"
                  disabled={isLoading}
                />
                <span className="text-xs font-mono text-gray-500 w-10 text-center">{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume & Close */}
            <div className="flex items-center gap-4 w-1/4 justify-end">
               <div className="hidden sm:flex items-center gap-2">
                 <IoVolumeMediumOutline className="text-gray-600" size={20}/>
                 <input
                   type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}
                   className="w-24 h-1.5 bg-gray-300 rounded-full appearance-none cursor-pointer"
                 />
               </div>
               <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors text-2xl font-light">
                 ✕
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
