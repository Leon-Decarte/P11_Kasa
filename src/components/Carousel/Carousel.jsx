import React from 'react';
import arrowslider from '../../assets/arrow-slider.svg';
import './Carousel.css';

export default function Carousel({ pictures, currentIndex, onNext, onPrev, title }) {
  return (
    <div className="carousel">
      <button className="arrow left-arrow" onClick={onPrev}>
        <img src={arrowslider} alt="Previous" className="arrow-icon rotated" />
      </button>
      <img
        className="carousel-image"
        src={pictures[currentIndex]}
        alt={title}
      />
      <button className="arrow right-arrow" onClick={onNext}>
        <img src={arrowslider} alt="Next" className="arrow-icon" />
      </button>
      <span className="image-count">
        {currentIndex + 1}/{pictures.length}
      </span>
    </div>
  );
}
