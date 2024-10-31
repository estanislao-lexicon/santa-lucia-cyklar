import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"> {/* Fixed position applied here */}
      <div className=" container grid grid-cols-4 items-center p-4">
        {/* First Column - Logo Image */}
        <div className="col-span-1 flex justify-start">
          <img src={`${process.env.PUBLIC_URL}/img/Black_Text_280x@2x.png`} alt="Santa Lucia Cyklar" className="h-12" />
        </div>

        {/* Second Column - Spacer */}
        <div></div>        

        {/* Third and Fourth Columns - Navigation Links */}
        <div className="col-span-2 flex justify-end space-x-6">
          <Link to="/" className="text-gray-800">Home</Link>
          <Link to="/cargo" className="text-gray-800">Cargo</Link>
          <Link to="/secondhand" className="text-gray-800">SecondHand</Link>
          <Link to="/services" className="text-gray-800">Services</Link>
          <Link to="/renovation" className="text-gray-800">Renovation</Link>
        </div>
      </div>                
    </div>
  );
}

export default Navbar;
