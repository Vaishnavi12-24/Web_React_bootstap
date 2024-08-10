import React from 'react';
import './App.css'; 
import ImageCarousel from './ImageCarousel';
import Announcement from './Announcement';
import CustomNavbar from './CustomNavbar';
import HomeGallery from './HomeGallery';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <ImageCarousel />
      </header>
      <Announcement/>
      {/* <HomeGallery/> */}
    </div>
  );
}

export default App;
