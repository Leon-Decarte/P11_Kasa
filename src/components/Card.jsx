// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} className="card-img" />
      <div className="card-title">{logement.title}</div>
    </Link>
  );
}

export default Card;
