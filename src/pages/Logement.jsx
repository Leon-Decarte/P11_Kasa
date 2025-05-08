// Logement.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import logements from '../logements.json';
import './Logement.css';
import logo from '../assets/LOGO_KASA.png';
import vectorIcon from '../assets/Vector.png'; // Arrow icon
import arrowslider from '../assets/arrow-slider.svg'; // Arrow icon for slider

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(item => item.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!logement) {
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) return null;
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < parseInt(rating) ? 'filled' : 'empty'}`}>🟊</span>
    ));
  };

  return (
    <main className="logement-container">
      <header className="navigation">
        <img src={logo} alt="Kasa Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>

      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePreviousImage}>
          <img src={arrowslider} alt="Previous" className="arrow-icon rotated" />
        </button>
        <img className='carousel-image'
          src={logement.pictures[currentImageIndex]}
          alt={logement.title}
        />
        <button className="arrow right-arrow" onClick={handleNextImage}>
          <img src={arrowslider} alt="Next" className="arrow-icon" />
        </button>
        <span className="image-count">
          {currentImageIndex + 1}/{logement.pictures.length}
        </span>
      </div>

      <section className="main-info">
        <div className="left-column">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="right-column">
          <div className="host-info">
            <div className="host-name">{logement.host.name}</div>
            <img 
              src={logement.host.picture} 
              alt={logement.host.name}
              className="host-picture" 
            />
          </div>
          <div className="rating">{renderStars(logement.rating)}</div>
        </div>
      </section>

      <div className="details-sections">
        {/* Description Dropdown */}
        <div className="dropdown">
          <div className="dropdown-header" onClick={() => setShowDescription(!showDescription)}>
            <h3>Description</h3>
            <img
              src={vectorIcon}
              alt="toggle"
              className={`dropdown-arrow ${showDescription ? 'rotated' : ''}`}
            />
          </div>
          {showDescription && (
            <div className="dropdown-content">
              <p>{logement.description}</p>
            </div>
          )}
        </div>

        {/* Equipments Dropdown */}
        <div className="dropdown">
          <div className="dropdown-header" onClick={() => setShowEquipments(!showEquipments)}>
            <h3>Équipements</h3>
            <img
              src={vectorIcon}
              alt="toggle"
              className={`dropdown-arrow ${showEquipments ? 'rotated' : ''}`}
            />
          </div>
          {showEquipments && (
            <div className="dropdown-content">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>Kasa</p>
        <span>© 2020 Kasa. All rights reserved</span>
      </footer>
    </main>
  );
}

export default Logement;
