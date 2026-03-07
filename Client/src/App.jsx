import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import PaymentPage from "./Pages/PaymentPage";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <div>
     <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;
