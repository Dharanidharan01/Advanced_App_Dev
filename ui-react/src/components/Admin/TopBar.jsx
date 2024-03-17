import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-gray-200 text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="w-40 h-8" />
        </Link>
      </div>
      
      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 text-white py-2 px-4 rounded-full w-64 focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img src="https://www.svgrepo.com/show/532552/search-alt-2.svg" alt="Search" className="w-6 h-6" />
        </div>
      </div>
      
      {/* Right side contents */}
      <div className="flex items-center">
        {/* Notifications */}
        <div className="notifications mr-4">
          <Link to="/notifications">
            <img src="https://www.svgrepo.com/show/495555/notification-favorite.svg" alt="Notifications" className="w-6 h-6" />
          </Link>
        </div>
        
        {/* Messages */}
        <div className="messages mr-4">
          <Link to="/messages">
            <img src="https://www.svgrepo.com/show/495469/message.svg" alt="Messages" className="w-6 h-6" />
          </Link>
        </div>
        
        {/* Profile */}
        <div className="profile">
          <Link to="/profile">
            <img src="https://www.svgrepo.com/show/335455/profile-default.svg" alt="Profile" className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
