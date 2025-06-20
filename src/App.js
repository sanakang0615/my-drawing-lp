import React, { useState, useEffect } from 'react';
import PinterestGrid from './components/PinterestGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import items from './items.json'; // Assuming you have the JSON file
import ProfileHeader from './components/ProfileHeader';
import ImageModal from './components/ImageModal';
import { useTheme } from './hooks/useTheme';
import './index.css';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false); // New state to control rendering
  const [theme, toggleTheme] = useTheme();

  const handleItemSelected = (item) => {
    setCurrentItem(item);
  };

  const handleClose = () => {
    setCurrentItem(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-16">
        <ProfileHeader />
        
        <section id="gallery" className="py-12 md:py-20 px-6 md:px-12">
          {isContentLoaded && (
            <div className="max-w-7xl mx-auto">
              <div className="w-full border-t border-gray-200 dark:border-gray-700 my-8 md:my-12"></div>
              <PinterestGrid items={items} onItemSelected={handleItemSelected} />
            </div>
          )}
        </section>
      </main>
      
      {currentItem && (
        <>
          <MusicPlayer
            artwork={items}
            currentItem={currentItem}
            key={currentItem.src}
            onClose={handleClose}
          />
          <ImageModal 
            item={currentItem}
            onClose={handleClose}
          />
        </>
      )}
      
      {isContentLoaded && (<Footer />)}
    </div>
  );
}

export default App;
