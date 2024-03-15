import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center mt-8"> {/* Add px-4 for horizontal padding */}
        <div className="flex items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" /> {/* Adjust the image src and dimensions as needed */}
          
          {/* Title */}
          <h1 className="text-black font-semibold text-lg">My Web App</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Home Link */}
          <Link to="/" className="text-black hover:text-orange-900">Home</Link>
          
          {/* Contact Link */}
          <Link to="/contact" className="text-black hover:text-orange-900">Contact</Link>

          {/* Rounded Box with Login and Signup Links */}
          <div className="rounded-full bg-gray-200 px-4 py-2 flex items-center">
            <Link to="/login" className="text-black hover:text-orange-900">Login</Link>
            <span className="text-gray-500 mx-2">|</span> {/* Vertical bar */}
            <Link to="/signup" className="text-black hover:text-orange-900">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
