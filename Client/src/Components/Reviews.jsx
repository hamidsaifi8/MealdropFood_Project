import React, { useEffect, useState } from "react";
import { MealDropReviews } from "../data/ReviewsData";

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === MealDropReviews.length - 1 ? 0 : prevCurrent + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mt-4  shadow-lg mx-auto bg-gray-100">
      <h1 className="text-2xl font-extrabold  text-center my-4 ">
        Our Testimonials
      </h1>
      <hr className="w-2/3 mx-auto border-t-3 rounded-2xl border-red-400" />
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out cursor-pointer w-1/2 mx-auto"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {MealDropReviews.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-76 p-2 text-center  m-4 rounded-2xl"
          >
            <div className="w-full flex-shrink-0 h-32 object-fit p-6 bg-pink-100 shadow-lg rounded-2xl">
              <div className="bg-white p-10 rounded-2xl  mx-auto max-w-lg  shadow-md shadow-gray-300">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">"{item.review}"</p>
                <p className="text-yellow-500 text-xl">{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
        {/* {MealDropReviews.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-130 object-fit p-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-xl">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">"{item.review}"</p>
              <p className="text-yellow-500 text-xl">{item.rating}</p>
            </div>
          </div>
        ))} */}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ">
        {MealDropReviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
