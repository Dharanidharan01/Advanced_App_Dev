import React from 'react';
import { Link } from 'react-router-dom';
import ContactPage from '../../pages/ContactPage';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">

          <h1 className="text-white font-semibold text-lg">My Web App</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
