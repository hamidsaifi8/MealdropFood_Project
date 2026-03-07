import React from "react";
import { MealdropData } from "../data/data";

const Restaurants = () => {
  return (
    <>
      <div className="restaurant-container py-4">
        <hr className="w-2/3 mx-auto border-t-3 rounded-2xl border-red-400 mb-6" />
        <h1 className="text-2xl font-bold text-center my-8">Top Restaurants</h1>
        <div className="restaurant-list flex flex-wrap justify-center gap-8 mt-6 mx-8 lg:mx-16 md:mx-24 sm:mx-8">
          {MealdropData.restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="restaurant-item rounded-lg w-60 h-auto hover:shadow-lg hover:scale-104 transition-shadow duration-7000 ease-in-out cursor-pointer shadow-lg shadow-gray-500 text-left "
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-36 object-cover mb-2 rounded-t-lg"
              />
              <h2 className="text-lg font-semibold ml-4 ">{restaurant.name}</h2>
              <p className="text-sm text-gray-600 ml-4 my-3">
                {restaurant.cuisine.join(", ")}
              </p>
              <span className="flex items-center gap-5 ml-4 mb-4">
                <p className="text-sm text-yellow-500">{restaurant.rating}</p>
                <p className="text-sm text-gray-500">{restaurant.address}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
