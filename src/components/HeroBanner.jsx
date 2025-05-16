// src/components/HeroBanner.jsx
import React from 'react';
import bannerImage from '../assets/Fond1.png';

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <h1 className="hero-title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default HeroBanner;
