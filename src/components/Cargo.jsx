import React from 'react';
import { Link } from 'react-router-dom';

function Cargo() {
  return (
    <div>
      <div className='container relative pt-28'>
          <h3 className='text-2xl font-bold text-dark-text'>CARGO</h3>
          <p className='font-serif text-xl justify-center text-dark-text mt-5'>We are authorised dealers of Cargobike, Babboe and Muli in Malmö.<br />
          All bikes are available for testing in our shop. <br /><b>All purchases are made in store.</b></p>
      </div>
      
      <h3 className="text-3xl font-bold text-dark-text flex items-center justify-center mt-10">Babboe</h3>
      <div className="container grid grid-cols-4 items-center p-4">        
    
        {/* First Column - Logo Image */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Babboe/Babboe-Big-E1.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Babboe/Babboe-Carve-Mountain.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Third Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Babboe/Babboe-Curve-E1.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Fourth Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Babboe/Babboe-Dog-E.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-dark-text flex items-center justify-center mt-10">Bullit</h3>
      <div className="container grid grid-cols-4 items-center p-4">        
    
        {/* First Column - Logo Image */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0124-original.jpg`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0108_majortom2.jpeg`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Third Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0026.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Fourth Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/moondog3_4_bullitt_2020_2000by1500__copy.png`} alt="Santa Lucia Cyklar" className="h-auto" />          
        </div>
      </div>
      <div className="container grid grid-cols-4 items-center p-4">        
    
        {/* First Column - Logo Image */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0036.jpg`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0018.jpg`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Third Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0026.jpg`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Fourth Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Bullit/bullitt_2020_0033.jpg`} alt="Santa Lucia Cyklar" className="h-auto" />          
        </div>
      </div>

      <h3 className="text-3xl font-bold text-dark-text flex items-center justify-center mt-10">Cargobike</h3>
      <div className="container grid grid-cols-4 items-center p-4">        
    
        {/* First Column - Logo Image */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Cargobike/Cargobike-Classic2.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Cargobike/Cargobike-Delight2.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Third Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Cargobike/Cargobike-Flex1.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Fourth Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Cargobike/Cargobike-Long-Lite1.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-dark-text flex items-center justify-center mt-10">Muli</h3>
      <div className="container grid grid-cols-4 items-center p-4">        
    
        {/* First Column - Logo Image */}
        <div> </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Muli/Motor.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Third Column - Navigation Links */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Muli/Muskel.png`} alt="Santa Lucia Cyklar" className="h-auto" />
        </div>

        {/* Fourth Column - Navigation Links */}
        <div> </div>
      </div>

    </div>

  );
}

export default Cargo;