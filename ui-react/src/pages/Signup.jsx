import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Public/Footer';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', fullName, email, password, confirmPassword);
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <Header />
      <div className="flex justify-center items-center h-full mb-10">
        <div className="bg-white mt-10 p-8 rounded-lg shadow-lg max-w-md w-full">
          {/* Sign-Up Form */}
          <form onSubmit={handleSignUpSubmit}>
            <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input type="text" id="fullName" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
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
          <p className="text-center">Already have an account? <Link to="/login" className="text-purple-500 font-semibold hover:underline">Login</Link></p>
        </div>
      </div>
          <Footer/>
    </div>
  );
};

export default SignUp;
