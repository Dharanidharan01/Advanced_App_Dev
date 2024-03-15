import React from 'react';
import Header from '../components/Public/Header';
import Footer from '../components/Public/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-gray-100 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/about" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Learn More</a>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
