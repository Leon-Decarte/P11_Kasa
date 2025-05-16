// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO_KASA.png'; // adjust path if needed
import './Navigation.css'; // Import your CSS file for styling

function Navigation() {
  return (
    <section className="navigation">
      <div className="nav-logo">
        <img src={logo} alt="Kasa Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </section>
  );
}

export default Navigation;
