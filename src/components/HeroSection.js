import React from 'react';
import './HeroSection.css';
import heroHeadphones from '../assets/hero_headphones.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcast episodes</p>
      </div>
      <div className="hero-image">
        <img src={heroHeadphones} alt="Headphones" />
      </div>
    </div>
  );
};

export default HeroSection;
