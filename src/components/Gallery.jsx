// src/components/Gallery.jsx
import React from 'react';
import logements from '../logements.json';
import Card from './Card';

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </section>
  );
}

export default Gallery;
