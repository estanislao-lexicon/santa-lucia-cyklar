import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cargo from './components/Cargo';
import Restored from './components/Restored';
import Service from './components/Service';
import Renovation from './components/Renovation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoPage from './components/NoPage';
import Contact from './components/Contact';
import PriceList from './components/PriceList';
import About from './components/About';
import CargoDetails from './components/CargoDetails';


function App() {
  return (    
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/santa-lucia-cyklar" element={<Home />} />
          <Route path="/cargo" element={<Cargo />} />
          <Route path="/cargo/:id" element={<CargoDetails />} />
          <Route path="/restored" element={<Restored />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/priceList" element={<PriceList />} />
          <Route path="/renovation" element={<Renovation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
