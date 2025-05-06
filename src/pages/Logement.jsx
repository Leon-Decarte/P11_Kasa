// Logement.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import logements from '../logements.json';
import './Logement.css';
import logo from '../assets/LOGO_KASA.png';
import vectorIcon from '../assets/Vector.png'; // Import your arrow icon


function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(item => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) return null;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < parseInt(rating) ? 'filled' : 'empty'}`}>★</span>
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
        <img src={logement.pictures[0]} alt={logement.title} />
        <span className="image-count">1/{logement.pictures.length}</span>
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
        <div className="dropdown">
          <h3>Description</h3>
          <p>{logement.description}</p>
        </div>
        <div className="dropdown">
          <h3>Équipements</h3>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
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
