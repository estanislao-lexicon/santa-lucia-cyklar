import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (    
      <div>      
        <div className='relative pt-20'>
          <img src={`${process.env.PUBLIC_URL}/img/MOBILVERKSAMHET2_2048x.png`} alt="Santa Lucia Cyklar" className='w-full' />        
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-6xl font-bold">DEN MOBILA <br /> CYKELVERKSTADEN</h1>
            <p className="text-2xl">FÅ DIN LÅDCYKEL/CYKEL SERVAD DIREKT PÅ PLATS ELLER I VÅR<br /> BUTIK I MALMÖ</p>
          </div>
        </div>        
        <div className='container bg-background flex items-center p-32 shadow-2xl z-50 mt-10 pt-20'>        
          <img className='max-h-72 w-auto mr-6' src={`${process.env.PUBLIC_URL}/img/Logo_White_test_2048x.png`} alt="Santa Lucia Cyklar" />
          <div className='flex flex-col justify-center text-left'>
            <h3 className='text-3xl font-bold text-dark-text'>PRAKTISK OCH EFEKTIVT</h3>
            <p className='font-serif text-2xl justify-center text-dark-text'> Mitt namn är Ignacio, jag är från Argentina och har bott i Sverige i 11 år. 
              Sedan barndomen har cyklingen varit min passion och när jag fick möjlighet att arbeta som cykelmekaniker kunde jag göra min passion till min vardag.<br />
              Med ett brinnande intresse för design och estetik startade jag Santa Lucía Cyklar. 
              Målet har från början varit att ge en personaliserad och effektiv service, att skapa cyklar som är enkla, eleganta och exklusiva och att spara på resurser och miljön.<br />
              Santa Lucía vill minska konsumtionen genom att återvända cykeldelar och med din egen gamla cykel vill vi skapa något nytt och annorlunda. Vill du med?
            </p>
          </div>  
        </div>  
        <footer>
          <div className="container flex justify-between bg-secondary-background text-text p-10 text-dark-text">
            <div className="w-1/2 text-left">
              <h3 className='font-title text-2xl'>CONTACT US</h3>
              <a className="font-serif text-xl" href="mailto:info@santaluciacyklar.com">info@santaluciacyklar.com</a>
              <p className="font-serif text-xl">Telefon: 040-92 48 88 (SMS fungerar ej)</p>
              <a className="font-serif text-xl" href='https://maps.app.goo.gl/qdR3KMPmqrYJAPcB9' target="_blank">Mariedalsvägen 46, 217 45 Malmö</a>              
              <p className="h-7"></p>   
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/SantaLuciaCyklar/?ref=aymt_homepage_panel&eid=ARADYi3YgcM3aaBQDoxfkUfk8NSFoTjafyLDFFznrpSYYnkIdEmCflcX9ebJMFG_n1bm8UgMhR83O4NM" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/santaluciacyklar/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="mailto:info@santaluciacyklar.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope" aria-hiden="true"></i>
                </a>
              </div>
            </div>  
            <div className="w-1/2 text-right">                  
              <h3 className='font-title text-2xl'>BUISNESS HOURS</h3>
              <p className="font-serif text-xl justify-center"> Monday to Thursday 9:00 - 17:00</p>            
              <p className="font-serif text-xl justify-center"> Friday 10:00 - 16:00</p>
              <p className="font-serif text-xl justify-center"> Saturday and Sunday Closed</p>
              <p className="h-7"></p>              
              <form id="contact-form" className="flex flex-col max-w-lg mx-auto">              
                <input type="email" name="user_email" placeholder="Subscribe to our Newsletter" required className="p2 border rounded mb-4 text-sm placeholder-gray-500" />
              </form>
            </div>
          </div>        
        </footer>        
    </div>        
  );
}

export default Home;