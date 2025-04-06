// P11_KASA/src/pages/Home.jsx
import React from 'react';
import './Home.css';
import logements from '../logements.json';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/Fond1.png'; // Importing the image
import logo from '../assets/LOGO_KASA.png'; // Importing the logo

function Home() {
    return (
        <main className="home-container">

            <section
                className="navigation"
            >
                <div className="nav-logo">
                    <img src={logo} alt="Kasa Logo" className="logo" />
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </section>

            <section
                className="hero-banner"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <h1 className="hero-title">Chez vous, partout et ailleurs</h1>
            </section>

            <section className="gallery">
                {logements.map((logement) => (
                    <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
                        <img src={logement.cover} alt={logement.title} className="card-img" />
                        <div className="card-title">{logement.title}</div>
                    </Link>
                ))}
            </section>
        </main>
    );
}

export default Home;
