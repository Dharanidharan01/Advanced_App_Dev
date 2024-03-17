import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountInformation from './AccountInformation';

function Settings() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // You can add logic to toggle between light and dark themes here
  };

  return (
    <div className="flex">
      {/* Left side - Settings */}
      <div className="flex flex-col w-64">
        <div className="flex items-center justify-center h-16 bg-gray-100 text-white">
          {/* Logo */}
          <a href="/">
            <img src="logo.png" alt="Logo" className="h-8" />
          </a>
        </div>
        <div className="flex flex-col flex-grow p-4 overflow-y-auto bg-gray-100">
          {/* Sidebar links */}
          <Link to="/overview" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
            <img src="https://www.svgrepo.com/show/525388/info-circle.svg" alt="Overview Icon" className="w-5 h-5 mr-2" />
            Account Information
          </Link>

        <Link to="/application-status" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/458915/status.svg" alt="Application Status Icon" className="w-5 h-5 mr-2" />
          Application Settings
        </Link>
        
        <Link to="/privacy-display" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/495440/lock-circle.svg" alt="Privacy & Display Icon" className="w-5 h-5 mr-2" />
          Privacy & Display
        </Link>
        <Link to="/email-notifications" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/488179/email.svg" alt="Email Notifications Icon" className="w-5 h-5 mr-2" />
          Email Notifications
        </Link>
        <Link to="/desktop-notifications" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/495552/notification.svg" alt="Desktop Notifications Icon" className="w-5 h-5 mr-2" />
          Desktop Notifications
        </Link>
        <Link to="/browser-notifications" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/525457/notification-unread-lines.svg" alt="Browser Notifications Icon" className="w-5 h-5 mr-2" />
          Browser Notifications
        </Link>
        <Link to="/communication-privacy" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/483951/communication-2.svg" alt="Communication and Privacy Icon" className="w-5 h-5 mr-2" />
          Communication and Privacy
        </Link>
        <Link to="/job-preferences" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/374703/job-profile.svg" alt="Job Preferences Icon" className="w-5 h-5 mr-2" />
          Job Preferences
        </Link>
        <Link to="/block-companies" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/374703/job-profile.svg" alt="Block Companies Icon" className="w-5 h-5 mr-2" />
          Block Companies
        </Link>
        <Link to="/signup" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/500534/delete-filled.svg" alt="Delete Account Icon" className="w-5 h-5 mr-2" />
          Delete Account
        </Link>
        <div className="mt-20"> {/* Pushes "Settings" and "Logout" to bottom */}
          <button onClick={toggleTheme} className="flex items-center mt-4 bg-gray-200 rounded-full py-1 px-3 hover:bg-gray-300">
            <img src={theme === 'light' ? 'https://www.svgrepo.com/show/523561/moon-stars.svg' : 'https://www.svgrepo.com/show/526043/moon-stars.svg'} alt="Theme Icon" className="w-5 h-5 mr-2" />
            {theme === 'light' ? 'Light' : 'Dark'} Theme
          </button>
          <Link to="/dashboard" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
              <img src="https://www.svgrepo.com/show/495032/back-square.svg" alt="Back Icon" className="w-5 h-5 mr-2" />
              Back
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Account Information */}
      <div className="flex-grow">
        <div className="p-4">
          <AccountInformation />
        </div>
      </div>
    </div>
  );
}


export default Settings;
