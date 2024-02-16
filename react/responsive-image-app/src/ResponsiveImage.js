// src/ResponsiveImage.js
import React from 'react';
import YourImage from './images/design.jpg'; // image path
import './ResponsiveImage.css';

const ResponsiveImage = () => {
  return (
    <div className="responsive-image-container">
      <img
        className="responsive-image"
        src= {YourImage}  // Replace with your image source
        alt="THIS IS AN IMAGE"
      />
    </div>
  );
};

export default ResponsiveImage;
