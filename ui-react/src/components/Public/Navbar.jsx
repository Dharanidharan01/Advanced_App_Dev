import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to track whether the card should be displayed or not
  const [showCard, setShowCard] = useState(false);

  // Function to toggle the state
  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-10 flex justify-between items-center mt-8"> {/* Add px-4 for horizontal padding */}
        <div className="flex items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" /> {/* Adjust the image src and dimensions as needed */}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center mr-20 space-x-6">
          {/* Home Link */}
          <Link to="/" className="text-black hover:text-orange-900">Jobs</Link>

          {/* Contact Link */}
          <Link to="/contact" className="text-black hover:text-orange-900">Companies</Link>
          <Link to="/contact" className="text-black hover:text-orange-900">Services</Link>

          {/* Dropdown for Employees */}
          <div className="relative">
            {/* Link to trigger the dropdown */}
            <button onClick={toggleCard} className="text-black hover:text-orange-900 focus:outline-none">
              Employees
            </button>
            {/* Conditional rendering of the card */}
            {showCard && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg">
                {/* Card content */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Services</h2>
                  {/* Add your service items here */}
                  <ul className="space-y-2">
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

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
