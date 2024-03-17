// ForgotPassword.js
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false); // State to track whether OTP is sent
  const [otp, setOtp] = useState(''); // State to store OTP entered by the user

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Implement logic to send OTP to the provided email address
    console.log('OTP sent to:', email);
    setOtpSent(true); // Set OTP sent state to true
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Implement logic to verify OTP entered by the user
    if (otp === '123456') { // Replace '123456' with the actual OTP verification logic
      console.log('OTP verified successfully');
      // Redirect the user to password reset page or any other desired action
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white mt-10 p-8 rounded-lg shadow-lg max-w-md w-full">
          {!otpSent ? ( // Render the send OTP form if OTP is not sent yet
            <form onSubmit={handleSendOtp} className="mb-6">
              <h2 className="text-3xl font-semibold mb-4 text-center">Forgot Password</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">Send OTP</button>
            </form>
          ) : ( // Render the verify OTP form if OTP is sent
            <form onSubmit={handleVerifyOtp} className="mb-6">
              <h2 className="text-3xl font-semibold mb-4 text-center">Verify OTP</h2>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-gray-700 font-bold mb-2">OTP</label>
                <input type="text" id="otp" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
              </div>
              <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">Verify OTP</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
