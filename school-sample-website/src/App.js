import React from 'react';
import './App.css'; 
import ImageCarousel from './ImageCarousel';
import Announcement from './Announcement';
import CustomNavbar from './CustomNavbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <ImageCarousel />
      </header>
      <Announcement/>
    </div>
  );
}

export default App;
