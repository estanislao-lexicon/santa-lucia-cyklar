import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu after clicking a menu item
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link to="/about">
          <img src={`${process.env.PUBLIC_URL}/img/Black_Text_280x@2x.png`} alt="Santa Lucia Cyklar" className="h-12" />
        </Link>
        
        {/* Hamburger Menu Icon */}
        <button 
          className="text-gray-800 sm:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        {/* Navigation Links */}
        <div className={`flex-col sm:flex sm:flex-row sm:items-center ${isOpen ? 'flex' : 'hidden'} space-y-4 sm:space-y-0 sm:space-x-6`}>
          <Link to="/" className="text-gray-800" onClick={closeMenu}>HOME</Link>
          <Link to="/cargo" className="text-gray-800" onClick={closeMenu}>CARGO</Link>
          <Link to="/restored" className="text-gray-800" onClick={closeMenu}>RESTORED</Link>
          <Link to="/service" className="text-gray-800" onClick={closeMenu}>SERVICE</Link>
          <Link to="/renovation" className="text-gray-800" onClick={closeMenu}>RENOVATION</Link>
          <Link to="/contact" className="text-gray-800" onClick={closeMenu}>CONTACT</Link>
        </div>
      </div>                
    </div>
  );
}

export default Navbar;
