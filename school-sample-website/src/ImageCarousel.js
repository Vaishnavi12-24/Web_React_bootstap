import React, { useState } from 'react';
import './ImageCarousel.css'; // Import custom CSS

const images = [
    'https://svpsrajgarh.co.in/wp-content/uploads/2021/11/thrid.jpg',
  'https://svpsrajgarh.co.in/wp-content/uploads/2021/11/forth.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrAXHf2P-9uOJUNvx2LeQ3dCIkYkAXZ8Xuw&s',
  'https://svpsrajgarh.co.in/wp-content/uploads/2021/11/forth.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-WAW9x11AqgDzSAS2UtzqLcdniVTiT4Ib4ZiFfavg2Pmz9WlLwStWZbjE2ZqB_vSV6U&usqp=CAUg?text=Image+3',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
return (
    <div className="carousel-container">
    <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
    <button className="carousel-button" onClick={nextImage}></button>
  </div>

  );

};

export default ImageCarousel;
