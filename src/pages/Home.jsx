// src/pages/Home.jsx
import './Home.css';
import Navigation from '../components/Navigation';
import HeroBanner from '../components/HeroBanner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer/Footer.jsx';

function Home() {
  return (
    <main className="home-container">
      <Navigation />
      <div className="home-body">
        <HeroBanner />
        <Gallery />
      </div>
      {Footer()}
    </main>
  );
}

export default Home;
