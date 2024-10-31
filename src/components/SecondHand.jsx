import React from 'react';
import { Link } from 'react-router-dom';

function SecondHand() {
  return (
    <div>
      <div className='container relative pt-28'>
          <h3 className='text-2xl font-bold text-dark-text'>SECOND HAND BIKES</h3>
          <p className='font-serif text-xl justify-center text-dark-text mt-5'>There are more bikes in stock, contact us for more info!</p>
      </div>
      
      <h3 className="text-3xl font-bold text-dark-text flex items-center justify-center mt-10">Second Hand</h3>
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
    </div>  
  );
}

export default SecondHand;