import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Web App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
