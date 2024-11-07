import React from 'react';
import ScrollToTop from './ScrollToTop';

function About() {
  return (    
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-grow">              
        <div className="container bg-background p-6 sm:p-16 shadow-2xl z-50 mt-4 pt-10 sm:pt-20 text-dark-text">
          <h3 className="text-2xl sm:text-3xl font-bold">SANTA LUCIA CYKLAR</h3>
          <p className="font-serif text-lg sm:text-xl mt-6 sm:mt-10">Registrerad för F-skatt</p>
          <p className="font-serif text-lg sm:text-xl">Org Nr: 820808-xxxx</p>
          <p className="font-serif text-lg sm:text-xl">Lämnar ut fullständigt Org</p> 
          <p className="font-serif text-lg sm:text-xl">Nr till företagskunder.</p>

          <h3 className="font-title text-xl sm:text-2xl mt-8 sm:mt-10">CONTACT US</h3>
          <a className="font-serif text-lg sm:text-xl" href="mailto:info@santaluciacyklar.com">info@santaluciacyklar.com</a>
          <p className="font-serif text-lg sm:text-xl">Telefon: 040-92 48 88 (SMS fungerar ej)</p>
          <a className="font-serif text-lg sm:text-xl" href="https://maps.app.goo.gl/qdR3KMPmqrYJAPcB9" target="_blank" rel="noopener noreferrer">
            Mariedalsvägen 46, 217 45 Malmö
          </a> 

          <h3 className="font-title text-xl sm:text-2xl mt-8 sm:mt-10">BUSINESS HOURS</h3>
          <p className="font-serif text-lg sm:text-xl">Monday to Thursday 9:00 - 17:00</p>            
          <p className="font-serif text-lg sm:text-xl">Friday 10:00 - 16:00</p>
          <p className="font-serif text-lg sm:text-xl">Saturday and Sunday Closed</p>
        </div>
      </main>
    </div>
  );
}

export default About;
