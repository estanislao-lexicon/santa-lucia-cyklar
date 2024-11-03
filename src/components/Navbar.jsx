import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"> {/* Fixed position applied here */}
      <div className=" container grid grid-cols-4 items-center p-4">
        {/* First Column - Logo Image */}
        <div className="col-span-1 flex justify-start">
          <Link to="/about">
            <img src={`${process.env.PUBLIC_URL}/img/Black_Text_280x@2x.png`} alt="Santa Lucia Cyklar" className="h-12" />
          </Link>
        </div>

        {/* Second Column - Spacer */}
        <div></div>        

        {/* Third and Fourth Columns - Navigation Links */}
        <div className="col-span-2 flex justify-end space-x-6">
          <Link to="/" className="text-gray-800">HOME</Link>
          <Link to="/cargo" className="text-gray-800">CARGO</Link>
          <Link to="/restored" className="text-gray-800">RESTORED</Link>
          <Link to="/service" className="text-gray-800">SERVICE</Link>
          <Link to="/renovation" className="text-gray-800">RENOVATION</Link>
          <Link to="/contact" className="text-gray-800">CONTACT</Link>
        </div>
      </div>                
    </div>
  );
}

export default Navbar;
