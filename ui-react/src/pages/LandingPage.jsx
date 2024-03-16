import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';
import Header from '../components/Public/Header';
import imageSrc from '../assets/images/2150010125.jpg';
import lightningFastImg from '../assets/images/lightning_fast.jpg';
import aiPoweredImg from '../assets/images/ai_powered.jpg';
import endlessIntegrationImg from '../assets/images/endless_integration.jpg';

const LandingPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.logwork.com/widget/countdown.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
     
      <div className="bg-gray-100 flex-grow">
        <Navbar />
        <div className=" ml-0 container mx-auto py-12 px-4 mr-0 ">
          <h1 className="text-3xl font-bold text-center mb-6">Unleash Innovation with Our Advanced App Development Platform</h1>
          <p className="text-lg text-center mb-12">Empower your app development journey with state-of-the-art tools and unparalleled support.</p>
          <img src={imageSrc} alt="Description of the image" className="w-full rounded-lg shadow-lg mb-8" style={{ maxHeight: '700px' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src={lightningFastImg} alt="Lightning-Fast Prototyping" className="w-full h-61 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">Lightning-Fast Prototyping</h2>
              <p>Turn your concepts into interactive prototypes in minutes, not days.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src={aiPoweredImg} alt="AI-Powered Code Generation" className="w-full h-70 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">AI-Powered Code Generation</h2>
              <p>Harness the power of AI to generate clean, efficient code tailored to your project's needs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src={endlessIntegrationImg} alt="Endless Integration Possibilities" className="w-full h-70 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">Endless Integration Possibilities</h2>
              <p>Seamlessly connect with popular services and APIs to unlock limitless functionality.</p>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 mr-20 ml-20">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
              <h2 className="text-xl font-semibold mb-10">Basic Plan</h2>
              <p>Price: $29/month</p>
              <p>Features:</p>
              <ul className="list-disc pl-6">
                <li>Rapid Prototyping Tools</li>
                <li>Code Generation</li>
                <li>Basic Integration Support</li>
                <li>Standard Testing Framework</li>
                <li>Limited Collaboration Features</li>
                <li>Email Support</li>
              </ul>
              <br></br>
              <p className='text-yellow-600'>Ideal For: Solo Developers, Small Teams, and Hobbyists</p>
              <Link to="/basic-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
              <h2 className="text-xl font-semibold mb-10">Pro Plan</h2>
              <p>Price: $59/month</p>
              <p>Features:</p>
              <ul className="list-disc pl-6">
                <li>Enhanced Prototyping Options</li>
                <li>Advanced Code Generation</li>
                <li>Full Integration Support</li>
                <li>Enhanced Testing Suite</li>
                <li>Premium Collaboration Tools</li>
                <li>Priority Email Support</li>
              </ul>
              <br></br>
              
              <p className='text-yellow-600'>Ideal For: Growing Startups and Medium-sized Businesses</p>
              <br></br>
              <Link to="/pro-plan" className="block mt-4 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
              <h2 className="text-xl font-semibold mb-10">Enterprise Plan</h2>
              <p>Price: Custom Pricing</p>
              <p>Features:</p>
              <ul className="list-disc pl-6">
                <li>All Pro Plan Features</li>
                <li>Dedicated Account Manager</li>
                <li>Customizable Solutions</li>
                <li>White-labeling Options</li>
                <li>Advanced Analytics and Reporting</li>
                <li>On-site Training and Support</li>
              </ul>
              <br></br>
              <p className='text-yellow-600'>Ideal For: Large Enterprises and Organizations with Complex Requirements</p>
              <Link to="/enterprise-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
            </div>
          </div>

          {/* Limited-Time Offer */}
          <div className=" ml-0 mt-12 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-lg">
  <div className="container ml-0 mr-0  px-4 py-8">
    <h2 className="text-2xl font-semibold text-center mb-6">Limited-Time Offer: Build Faster, Save More!</h2>
    <p className="text-lg text-center mb-6">Hurry! For a limited time only, unlock exclusive savings and accelerate your app development journey with [Your Software]. Sign up now and enjoy:</p>
    <ul className="list-disc pl-6 text-left mb-6">
      <li>20% Off your first three months with any plan!</li>
      <li>Free Access to our premium prototyping templates library.</li>
      <li>Priority Support: Get expedited assistance from our team of experts.</li>
    </ul>
    <div className="text-left mb-6">
      <h3 className="text-lg font-semibold mb-2">Why Act Now?</h3>
      <ul className="list-disc pl-6">
        <li>Maximize Your Savings: Take advantage of this limited-time offer to save big on your subscription fees.</li>
        <li>Access Premium Features: Enjoy complimentary access to exclusive prototyping templates and priority support.</li>
        <li>Start Building Today: Don't miss out on the opportunity to kickstart your app development journey with [Your Software].</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <Link to="/claim-offer" className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">Claim Offer</Link>
    </div>
          </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
