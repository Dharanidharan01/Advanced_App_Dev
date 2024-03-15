import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black py-2 text-white text-center fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <p className="text-sm">Download our app from the Play Store and get 20% off your first purchase with code: <strong>APP20</strong></p>
      </div>
    </header>
  );
};

export default Header;
