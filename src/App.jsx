import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';


function App() {

    return (
        <div>

            {/* React Router Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                
            </Routes>

            {/* Existing Vite + React content */}
            
        </div>
    );
}

export default App;
