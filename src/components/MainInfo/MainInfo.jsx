import React from 'react';
import './MainInfo.css';

export default function MainInfo({ title, location, tags, host, rating }) {
  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < parseInt(rating) ? 'filled' : 'empty'}`}>🟊</span>
    ));

  return (
    <section className="main-info">
      <div className="left-column">
        <h1>{title}</h1>
        <p className="location">{location}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="right-column">
        <div className="host-info">
          <div className="host-name">{host.name}</div>
          <img src={host.picture} alt={host.name} className="host-picture" />
        </div>
        <div className="rating">{renderStars(rating)}</div>
      </div>
    </section>
  );
}
