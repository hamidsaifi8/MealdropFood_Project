import React, { useState, useEffect } from "react";
import MealDrop_logo from "../assets/logo.png";
import { Menu, X, User, Weight } from "lucide-react";
import SearchBar from "./SearchBar";
import LocationDetect from "./LocationDetect";
import LoginSlide from "../Pages/Login";
import { useNavigate } from "react-router";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCartClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-pink-50/90 backdrop-blur-sm shadow-md"
          : "bg-pink-50 shadow-sm"
          }`}
      >
        <div className="flex justify-between items-center h-18 px-4 sm:px-4 md:px-8 lg:px-14 xl:px-28">
          <div className="flex items-center cursor-pointer">
            <img
              src={MealDrop_logo}
              alt="Meal Drop"
              className="w-26 sm:w-26 transition-transform duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            />
          </div>

          <div className="hidden lg:flex items-center flex-grow justify-center">
            <LocationDetect />
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="cursor-pointer flex relative items-center px-2 py-1 rounded-2xl hover:scale-105 transition-all duration-300 hover:bg-pink-100 hover:text-pink-700 hover:shadow-md shadow-pink-300"
              onClick={handleCartClick}
            >
              <span className="text-2xl">🛒</span>
              {/* <span className="text-md text-pink-700">Cart</span> */}
              <span className="cart-items absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>

            <button
              className="flex items-center text-pink-700 font-medium px-4 py-2 gap-1 rounded-2xl hover:scale-105 duration-300 transition-all hover:bg-pink-100 hover:text-pink-700 hover:shadow-md shadow-pink-300"
              onClick={() => setLoginOpen(true)}
              type="button"
            >
              <User className="w-5 h-5 text-pink-700" />
              <span className="text-md text-pink-700">Sign In</span>
            </button>
            <LoginSlide isOpen={loginOpen} setIsOpen={setLoginOpen} />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>


        {/* Mobile View */}        
        <div
          className={`md:hidden bg-white shadow-md rounded-b-2xl overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[420px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
            }`}
        >
          <div className="flex flex-col items-center space-y-4 px-4">
            <LocationDetect />
          </div>

          <div className="flex flex-col text-center space-y-3 px-6 mt-4">
            <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-1 rounded-lg hover:bg-gray-200 transition">
              🛒 Cart
            </button>


            <button
              className="flex items-center text-center gap-1 text-red-600 font-medium px-4 py-2 rounded-2xl hover:shadow-md hover:scale-105 hover:bg-pink-100 transition-all"
              onClick={() => setLoginOpen(true)}
              type="button"
            >
              <span className="text-xl">👤</span> Sign In
            </button>
            <LoginSlide isOpen={loginOpen} setIsOpen={setLoginOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
