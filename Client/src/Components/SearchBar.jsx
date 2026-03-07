import React, { useState } from "react";
import { Search } from "lucide-react";
import { MealdropData } from "../data/data";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredRestaurants = Array.isArray(MealdropData.restaurants)
        ? MealdropData.restaurants
            .filter(
              (item) =>
                item.name &&
                item.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((item) => ({ ...item, _type: "restaurant" }))
        : [];

      const filteredDishes = Array.isArray(MealdropData.dishes)
        ? MealdropData.dishes
            .filter(
              (item) =>
                item.name &&
                item.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((item) => ({ ...item, _type: "dish" }))
        : [];

      const combined = [...filteredRestaurants, ...filteredDishes].slice(0, 7);

      setData(combined);
    } else {
      setData([]);
    }
  };

  return (
    <div className="relative hidden md:flex items-center bg-gray-50 rounded-r-full shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2 w-[300px] xl:w-[520px]">
      <Search className="text-gray-600 mr-2" size={24} />
      <input
        type="text"
        placeholder="Search restaurants or dishes..."
        value={query}
        onChange={handleInputChange}
        className="bg-transparent flex-1 focus:outline-none text-gray-700"
      />
      {query && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 max-h-80 overflow-y-auto z-50">
          {data.map((item) => (
            <div
              key={item.id || item.name}
              className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setQuery(item.name)}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div className="text-left">
                <p className="font-medium">{item.name}</p>
                <span className="text-sm text-gray-500">
                  {item._type === "restaurant" ? "Restaurant" : "Dish"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
