// src/pages/About.jsx
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import aboutBanner from './../assets/Background_about.png'; // your custom image
import './About.css'; // Import your CSS file for styling
import Navigation from '../components/Navigation'; // Import Navigation component
import Footer from '../components/Footer/Footer.jsx'; // Import Footer component

function About() {
    return (
        <><Navigation />
            <div className="about-container">

                {/* HeroBanner component with custom background image */}
                <HeroBanner backgroundImage={aboutBanner} />
                <h1>About Page</h1>
                <p>This is the About page.</p>

            </div><Footer />
        </>
    );
}

export default About;
