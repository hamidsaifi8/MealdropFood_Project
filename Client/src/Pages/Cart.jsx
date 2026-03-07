import React, { useEffect, useState } from "react";
import { MealdropData } from "../data/data";
import { useNavigate } from "react-router";
// import PaymentPage from "./PaymentPage";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const Navigate = useNavigate();

  
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setCartItems(MealdropData.dishes.map((item) => ({ ...item, quantity: 1 })));
    };
    fetchData();

  }, []);

  
  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-pink-50 pt-4 pb-10">
    <div className="max-w-xl mx-auto mt-10 p-6 bg-pink-100 rounded-2xl shadow-lg shadow-purple-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Total items in Cart: - {cartItems.length}  </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-6">Loading items...</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decrementQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  −
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => incrementQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="flex flex-col items-end">
                <p className="font-semibold text-gray-800">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-end items-center gap-4 border-t pt-4">
            <p className="text-lg font-semibold">Total Amount: - </p>
            <p className="text-lg font-bold text-green-600 pr-4">₹{total}</p>
          </div>

          <button className="w-full mt-4 bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition-all" 
            onClick={() => Navigate('/paymentpage')}>
            Proceed to Checkout
          </button>
        </div>
      )}
      
    </div>
    </div>
  );
};

export default Cart;
