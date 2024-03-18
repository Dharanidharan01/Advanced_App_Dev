import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UpgradeModal from '../components/Public/UpgradeModal';

const PremiumPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpgrade = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Render the Premium Plan card only if the modal is not open */}
      {!isModalOpen && (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Premium Plan</h1>
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 text-center">$49/month</h2>
          <ul className="list-disc ml-6 mb-6">
            <li className="flex items-center mb-2"><FaCheck className="text-green-500 mr-2" />Access to Premium Job Listings</li>
            <li className="flex items-center mb-2"><FaCheck className="text-green-500 mr-2" />Full Course Access</li>
            <li className="flex items-center mb-2"><FaCheck className="text-green-500 mr-2" />Premium Customer Support</li>
            <li className="flex items-center mb-2"><FaCheck className="text-green-500 mr-2" />Exclusive Webinars and Workshops</li>
            <li className="flex items-center mb-2"><FaCheck className="text-green-500 mr-2" />Resume Review and Optimization</li>
          </ul>
          <p className="text-lg mb-4">Ideal For: Career Advancers and Serious Learners</p>
          <Link to="/upgrademodel">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Upgrade Now</button>
          </Link>
        </div>
      )}

    </div>
  );
};

export default PremiumPlan;
