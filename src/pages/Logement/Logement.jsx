import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../logements.json';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import MainInfo from '../../components/MainInfo/MainInfo';
import Dropdown from '../../components/Dropdown/Dropdown';
import './Logement.css'; // Page-level wrapper styles

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(l => l.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!logement) navigate('/404');
  }, [logement, navigate]);

  if (!logement) return null;

  const nextImage = () => {
    setCurrentIndex(prev => (prev === logement.pictures.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? logement.pictures.length - 1 : prev - 1));
  };

  return (
    <div className="logement-page">
      <Navigation />

      <Carousel
        pictures={logement.pictures}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
        title={logement.title}
      />

      <MainInfo
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />

      <div className="details-sections">
        <Dropdown title="Description">
          <p>{logement.description}</p>
        </Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>

      <Footer />
    </div>
  );
}
