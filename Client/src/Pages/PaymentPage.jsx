import React from 'react'
import { useState } from 'react';

const PaymentPage = () => { 
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b-2 pb-4">
          Choose a Payment Method
        </h1>

        <div className="flex flex-col items-center space-y-5">
          <button
            onClick={() => setSelectedMethod('card')}
            className="w-full bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-900 transition duration-300"
          >
            Pay with Credit/Debit Card
          </button>

          <button
            onClick={() => setSelectedMethod('upi')}
            className="w-full bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-900 transition duration-300"
          >
            Pay with UPI
          </button>

          <button
            onClick={() => setSelectedMethod('cod')}
            className="w-full bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-900 transition duration-300"
          > 
            Cash on Delivery
          </button>
        </div>

       
        {selectedMethod === 'card' && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Card Details</h2>
            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded mb-3" />
            <input type="text" placeholder="Expiry Date" className="w-full p-2 border rounded mb-3" />
            <input type="text" placeholder="CVV" className="w-full p-2 border rounded mb-3" />
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Pay Now
            </button>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Enter UPI ID</h2>
            <input type="text" placeholder="example@upi" className="w-full p-2 border rounded mb-3" />
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Pay via UPI
            </button>
          </div>
        )}

        {selectedMethod === 'cod' && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl shadow-inner text-center">
            <h2 className="text-xl font-semibold mb-2">Cash on Delivery Selected</h2>
            <p className="mb-4 text-gray-700">You can pay when your order is delivered.</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}




export default PaymentPage