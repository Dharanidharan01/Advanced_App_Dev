// Import necessary modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Public/Footer';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';

// Define Login component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === 'dharanidharans175@gmail.com' && password === 'user1234') {
      console.log('Logging in with:', email, password);
      // Redirect to dashboard page
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Header />
      
      <div className="flex justify-center items-center h-full">
        <div className="bg-white mt-10 p-8 rounded-lg shadow-lg max-w-md w-full">
          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">Login</button>
          </form>
          <p className="text-center">Forgot your password? <Link to="/forgotpassword" className="text-purple-500 font-semibold hover:underline">Reset Password</Link></p>
          <p className="text-center">Don't have an account? <Link to="/signup" className="text-purple-500 font-semibold hover:underline">Sign Up</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
