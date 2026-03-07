import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const LoginSlide = ({ isOpen, setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const scrollBarCompensation =
        window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
      
      if (scrollBarCompensation)
        document.body.style.paddingRight = `${scrollBarCompensation}px`;
      document.body.style.overflow = "hidden";

    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end pr-4 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{ transition: "background 0.5s" }}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-108 bg-pink-50  shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"} pointer-events-auto`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-8 shadow-gray-300 mr-16 border-b-2  border-red-500 ml-2">
          <div>
            <h2 className="text-2xl font-semibold transition-all duration-500">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <p className="text-xs text-gray-600 mt-2">
              {isLogin ? (
                <>
                  or{" "}
                  <span
                    className="text-red-600 font-semibold cursor-pointer hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Create an Account
                  </span>
                </>
              ) : (
                <>
                  or{" "}
                  <span
                    className="text-red-600 font-semibold cursor-pointer hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login to your account
                  </span>
                </>
              )}
            </p>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Only render the active form */}
        <div className="p-6">
          {isLogin ? (
            <form className="space-y-8 mr-16 my-8">
              <div>
                <input
                  type="phone"
                  className="mt-1 w-full p-6 border border-gray-300 rounded-sm focus:ring focus:ring-pink-100"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-sm bg-red-600 text-white hover:bg-red-500 transition"
              >
                Login
              </button>
              <p className="text-xs text-gray-600">
                By clicking login, I accept the{" "}
                <span className="font-semibold">
                  Terms & Conditions and Privacy Policy.
                </span>
              </p>
            </form>
          ) : (
            <form className="space-y-2 mr-16 ">
              <div>
                <input
                  type="phone"
                  className="mt-1 w-full p-4 border border-gray-300 rounded-sm focus:ring focus:ring-pink-100"
                  placeholder="Enter your phone number"
                  required
                />

                <input
                  type="text"
                  className="mt-1 w-full p-4 border border-gray-300 rounded-sm focus:ring focus:ring-pink-100"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className=" w-full p-4 border border-gray-300 rounded-sm focus:ring focus:ring-pink-100"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 rounded-sm bg-red-600 text-white hover:bg-red-500 transition"
              >
                Sign Up
              </button>
              <p className="text-xs text-gray-600">
                By signing up, I accept the{" "}
                <span className="font-semibold">
                  Terms & Conditions and Privacy Policy.
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSlide;
