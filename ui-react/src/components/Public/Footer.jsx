import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4  w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-white hover:text-gray-400">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <img src="https://www.iconpacks.net/icons/free-icons-6/free-icon-twitter-x-logo-black-square-rounded-20852.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <img src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        {/* Terms and Conditions, Privacy Policy */}
        <div className="flex items-center ml-10">
          <Link to="/terms-and-conditions" className="text-white hover:text-gray-400">Terms and Conditions</Link>
          <Link to="/privacy-policy" className="text-white hover:text-gray-400 ml-4">Privacy Policy</Link>
          <Link to="/privacy-policy" className="text-white hover:text-gray-400 ml-4">FAQ</Link>
        </div>

        {/* Copyright */}
        <div className="ml-auto mr-4">
          <p className="text-sm">© 2024 My Web App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
