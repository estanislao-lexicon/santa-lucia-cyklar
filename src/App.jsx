import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cargo from './components/Cargo';
import SecondHand from './components/SecondHand';
import Services from './components/Services';
import Renovation from './components/Renovation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/secondhand" element={<SecondHand />} />
            <Route path="/services" element={<Services />} />
            <Route path="/renovation" element={<Renovation />} />
            <Route path="*" element={<NoPage />} />
        </Routes>       
      <Footer />
    </BrowserRouter>
  );
}

export default App;
