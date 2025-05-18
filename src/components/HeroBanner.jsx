// src/components/HeroBanner.jsx
import React from 'react';
import defaultBanner from '../assets/Fond1.png';

function HeroBanner({ backgroundImage }) {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${backgroundImage || defaultBanner})`,
      }}
    >
      <h1 className="hero-title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default HeroBanner;
