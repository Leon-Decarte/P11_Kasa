import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import './LogementDetails.css';

function LogementDetails() {
    const { id } = useParams(); // Get the logement ID from the URL
    const logement = logements.find((item) => item.id === id); // Find the logement by ID

    if (!logement) {
        return <div>Logement not found</div>;
    }

    return (
        <main className="logement-details">
            <section className="logement-header">
                <img src={logement.cover} alt={logement.title} className="logement-cover" />
                <h1 className="logement-title">{logement.title}</h1>
            </section>
            <section className="logement-info">
                <p>{logement.description}</p>
                <ul>
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default LogementDetails;