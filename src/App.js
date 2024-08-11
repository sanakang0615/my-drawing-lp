import React, { useState } from 'react';
import PinterestGrid from './components/PinterestGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import items from './items.json'; // Assuming you have the JSON file
import ProfileHeader from './components/ProfileHeader';
import './index.css';

function App() {
  const [currentItem, setCurrentItem] = useState(null);

  const handleItemSelected = (item) => {
    setCurrentItem(item);
  };
  const handleClosePlayer = () => {
    setCurrentItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header artworks={items} items={items} />
      <ProfileHeader/>
      <section id="gallery" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-600 text-center mb-10 grey-qo-regular" style={{fontWeight: 500}}>Track List</h2>
        <PinterestGrid items={items} onItemSelected={handleItemSelected} />
      </section>
      {currentItem && (
        <MusicPlayer
          artwork={items}
          currentItem={currentItem}
          key={currentItem.src}
          onClose={handleClosePlayer}
          // isPlaying={isPlaying}
          // setIsPlaying={setIsPlaying}
          // progress={progress}
          // setProgress={setProgress}
          // volume={volume}
          // setVolume={setVolume}
          // audio={audio}
          // setAudio={setAudio}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
