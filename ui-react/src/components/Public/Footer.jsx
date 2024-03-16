import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mt-10 ml-0 flex flex-wrap justify-center items-center">
       {/* First Column */}
        <div className="w-full lg:w-1/5 mb-4 lg:mb-0 ">
          <ul className="flex flex-col justify-start lg:justify-start">
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Employer Home</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Sitemap</a></li>
          </ul>
        </div>
        
        {/* Second Column */}
        <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
          <ul className="flex flex-col justify-start lg:justify-start">
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Summons/Notices</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Grievances</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Report Issue</a></li>
          </ul>
        </div>
        
        {/* Third Column */}
        <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
          <ul className="flex flex-col justify-start lg:justify-start">
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            <li className="mb-4"><a href="terms" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Fraud Alert</a></li>
            <li className="mb-4"><a href="#" className="text-gray-300 hover:text-white">Trust & Safety</a></li>
          </ul>
        </div>

        {/* Social Media Contacts */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <ul className="flex">
            {/* Instagram Icon */}
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
            {/* Twitter Icon */}
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <img src="https://www.svgrepo.com/show/303364/pinterest-1-logo.svg" alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <img src="https://www.iconpacks.net/icons/free-icons-6/free-icon-twitter-x-logo-black-square-rounded-20852.png" alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
       
      </div>
      <br></br>
      <div className="text-center mt-8 text-gray-400">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;