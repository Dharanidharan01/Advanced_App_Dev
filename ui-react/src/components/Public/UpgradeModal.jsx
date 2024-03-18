import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/outline';

const UpgradeModal = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handlePayment = () => {
        // Implement your payment logic here
        // For demonstration, we'll just simulate a successful payment after 3 seconds
        setTimeout(() => {
            setPaymentSuccess(true);
        }, 3000);
    };

    const resetPaymentDetails = () => {
        setPaymentDetails({
            cardNumber: '',
            expiryDate: '',
            cvv: '',
        });
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold">Upgrade Your Plan</h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="Enter card number"
                        value={paymentDetails.cardNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-40 focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="MM/YY"
                            value={paymentDetails.expiryDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-20 focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="CVV"
                            value={paymentDetails.cvv}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
                {paymentSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 flex items-center justify-center"
                    >
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 animate-bounce" />
                        <span className="text-green-500 font-medium">Payment successful!</span>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default UpgradeModal;
