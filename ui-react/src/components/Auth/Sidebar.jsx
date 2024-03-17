import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col w-64">
      <div className="flex items-center justify-center h-16 bg-gray-00 text-white">
  {/* Logo */}
  <a href="/">
    <img src="logo.png" alt="Logo" className="h-8" />
  </a>
</div>
      <div className="flex flex-col flex-grow p-4 overflow-y-auto bg-white">
        {/* Sidebar links */}
        <Link to="/overview" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/459911/dashboard.svg" alt="Overview Icon" className="w-5 h-5 mr-2" />
          Overview
        </Link>
        <Link to="/application-status" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/498451/status.svg" alt="Application Status Icon" className="w-5 h-5 mr-2" />
          Application Status
        </Link>
        <Link to="/pending-actions" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/309975/shifts-pending.svg" alt="Pending Actions Icon" className="w-5 h-5 mr-2" />
          Pending Actions
        </Link>
        <Link to="/career-guidance" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/418824/guide-location-map.svg" alt="Career Guidance Icon" className="w-5 h-5 mr-2" />
          Career Guidance
        </Link>
        <Link to="/certifications" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
          <img src="https://www.svgrepo.com/show/446843/certificate.svg" alt="Certifications Icon" className="w-5 h-5 mr-2" />
          Certifications
        </Link>
        <div className="mt-auto"> {/* Pushes "Settings" and "Logout" to bottom */}
          <Link to="/settings" className="flex items-center mt-4 text-gray-600 hover:text-gray-800">
            <img src="https://www.svgrepo.com/show/498932/settings.svg" alt="Settings Icon" className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link to="/login">
  <button className="flex items-center mt-4 bg-gray-200 rounded-full py-1 px-3 hover:bg-gray-300">
    <img src="https://www.svgrepo.com/show/471638/log-out-01.svg" alt="Logout Icon" className="w-5 h-5 mr-2" />
    Logout
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
