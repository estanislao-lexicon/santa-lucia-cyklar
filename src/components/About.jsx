import React from 'react';


function About() {
  return (    
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">              
        <div className='container bg-background p-16 shadow-2xl z-50 mt-4 pt-20 text-dark-text'>
            <h3 className="text-3xl font-bold ">SANTA LUCIA CYKLAR</h3>
            <p className="font-serif text-xl mt-10">Registrerad för F-skatt </p>
            <p className="font-serif text-xl">Org Nr: 820808-xxxx </p>
            <p className="font-serif text-xl">Lämnar ut fullständigt Org</p> 
            <p className="font-serif text-xl">Nr till företagskunder.</p>
            <h3 className='font-title text-2xl mt-10'>CONTACT US</h3>
            <a className="font-serif text-xl" href="mailto:info@santaluciacyklar.com">info@santaluciacyklar.com</a>
            <p className="font-serif text-xl">Telefon: 040-92 48 88 (SMS fungerar ej)</p>
            <a className="font-serif text-xl" href='https://maps.app.goo.gl/qdR3KMPmqrYJAPcB9' target="_blank">Mariedalsvägen 46, 217 45 Malmö</a> 
            <h3 className='font-title text-2xl mt-10'>BUISNESS HOURS</h3>
            <p className="font-serif text-xl justify-center"> Monday to Thursday 9:00 - 17:00</p>            
            <p className="font-serif text-xl justify-center"> Friday 10:00 - 16:00</p>
            <p className="font-serif text-xl justify-center"> Saturday and Sunday Closed</p>
        </div>
      </main>
    </div>
  );
}

export default About;
