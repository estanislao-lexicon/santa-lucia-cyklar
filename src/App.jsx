import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cargo from './components/Cargo';
import SecondHand from './components/SecondHand';
import Services from './components/Services';
import Renovation from './components/Renovation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/secondhand" element={<SecondHand />} />
            <Route path="/services" element={<Services />} />
            <Route path="/renovation" element={<Renovation />} />
        </Routes>       
      <Footer />
    </Router>
  );
}

export default App;
