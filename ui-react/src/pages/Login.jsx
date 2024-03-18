import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Public/Footer';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === email && userData.password === password) {
      console.log('Logging in with:', email, password);
      onLogin(); 
      window.location.href = '/dashboard';
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#000428] to-[#004e92] min-h-screen">
      <Navbar />
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-30 rounded-lg mt-10 mb-20 p-8 shadow-lg max-w-md w-full">
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
            <button type="submit" className="bg-[#04AECC] hover:bg-[#038BA3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">Login</button>
          </form>
          <p className="text-center">Forgot your password? <Link to="/forgotpassword" className="text-[#04AECC] font-semibold hover:underline">Reset Password</Link></p>
          <p className="text-center">Don't have an account? <Link to="/signup" className="text-[#04AECC] font-semibold hover:underline">Sign Up</Link></p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
