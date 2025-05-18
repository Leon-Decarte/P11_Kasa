// Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer/Footer';
import './Error404.css'; // Import your CSS file for styling

function Error404() {
  return (
    <div className="error-page">
      <Navigation />
      <div className='error-body'><h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;