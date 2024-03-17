import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Public/Header';
import Navbar from '../../components/Public/Navbar';
import Footer from '../../components/Public/Footer';

const EmployerSignup = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Your signup logic for employers
  };

  return (
    <div className="bg-gradient-to-r from-[#000428] to-[#004e92] min-h-screen">
      <Navbar />
      <Header />
      <div className="flex justify-center items-center h-full mb-20">
        <div className="bg-white mt-10 p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleSignUpSubmit}>
            <h2 className="text-3xl font-semibold mb-10 text-center">Employer Sign Up</h2>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
              <input type="text" id="companyName" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">Sign Up</button>
          </form>
          <p className="text-center">Already have an account? <Link to="/elogin" className="text-purple-500 font-semibold hover:underline">Login</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerSignup;
