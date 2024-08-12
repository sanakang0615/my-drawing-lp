import React, { useState, useEffect } from 'react';
import PinterestGrid from './components/PinterestGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import items from './items.json'; // Assuming you have the JSON file
import ProfileHeader from './components/ProfileHeader';
import './index.css';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false); // New state to control rendering

  const handleItemSelected = (item) => {
    setCurrentItem(item);
  };

  const handleClosePlayer = () => {
    setCurrentItem(null);
  };

  // Use useEffect to delay the rendering of PinterestGrid
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 1000); // Delay to ensure other components are loaded first

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header artworks={items} items={items} />
      <ProfileHeader />
      <section id="gallery" className="pb-16 px-6">
        <h2 
          className="text-4xl font-bold text-gray-600 text-center mb-10 grey-qo-regular" 
          style={{ fontWeight: 500, color: '#4B5563', opacity: '0.4' }}
        >
          Track List
        </h2>
        {/* Conditionally render PinterestGrid only after other components are loaded */}
        {isContentLoaded && (
          <PinterestGrid items={items} onItemSelected={handleItemSelected} />
        )}
      </section>
      {currentItem && (
        <MusicPlayer
          artwork={items}
          currentItem={currentItem}
          key={currentItem.src}
          onClose={handleClosePlayer}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
