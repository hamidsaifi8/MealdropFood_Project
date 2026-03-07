import React, { useState, useEffect } from "react";
import { MealdropData } from "../data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreMenu = ({category, setCategory}) => {
  const [itemsPerRow, setItemsPerRow] = useState(6);
  const [showMore, setShowMore] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  

  const totalItems = MealdropData.dishes.length;
  const slideStep = 3;

  useEffect(() => {
    const updateItemsPerRow = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerRow(6);
      else if (width >= 1024) setItemsPerRow(5);
      else if (width >= 768) setItemsPerRow(4);
      else if (width >= 640) setItemsPerRow(3);
      else setItemsPerRow(2);
    };
    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const handlePrev = () =>
    setStartIndex((prev) => Math.max(prev - slideStep, 0));
  const handleNext = () =>
    setStartIndex((prev) =>
      Math.min(prev + slideStep, totalItems - itemsPerRow)
    );

  const sliderItems = MealdropData.dishes.slice(
    startIndex,
    startIndex + itemsPerRow
  );

  const remainingItems = MealdropData.dishes;
  
  
  const getRowsWithPadding = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      const rowItems = items.slice(i, i + itemsPerRow);
      while (rowItems.length < itemsPerRow) rowItems.push(null);
      rows.push(rowItems);
    }
    return rows;
  };

  const paddedRows = getRowsWithPadding(remainingItems);

  return (
    <div className="categories_container py-14">
      <hr className="w-2/3 mx-auto border-t-3 rounded-2xl border-red-400" />
      <h1 className="text-2xl font-bold text-center my-4">
        What's on your mind?
      </h1>
     
      {!showMore && (
        <div className="relative flex items-center justify-center mt-6 px-20">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`absolute left-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >   
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden w-full px-4 py-2">
            <div className="flex transition-transform duration-500 ease-in-out gap-1 justify-center">
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className="categories_box text-center flex-shrink-0"
                  style={{ width: `${100 / itemsPerRow}%` }}
                  onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`${category === item.name ? 'ring-2 ring-red-500 scale-105' : ''} w-32 h-32 sm:w-28 sm:h-28 rounded-full object-cover mx-auto shadow-xl shadow-gray-600 hover:scale-105 transition-transform duration-300`}
                   
                  />
                  <p className="text-md font-semibold mt-3 text-gray-600">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerRow >= totalItems}
            className={`absolute right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition ${
              startIndex + itemsPerRow >= totalItems
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

     
      <div className="flex justify-center mt-8">
        {!showMore && totalItems > itemsPerRow && (
          <button
            onClick={() => setShowMore(true)}
            className="px-8 py-2 bg-red-500 text-white font-semibold rounded-3xl hover:bg-red-700 transition"
          >
            Show More
          </button>
        )}
        {showMore && (
          <button
            onClick={() => {
              setShowMore(false);
              setStartIndex(0);
            }}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-3xl hover:bg-red-700 transition"
          >
            Show Less
          </button>
        )}
      </div>

      
      {showMore && (
        <div className="mt-8 overflow-hidden transition-all duration-700 px-20">
          {paddedRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-between gap-1 mb-8 last:mb-0 opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${rowIndex * 150}ms` }}
            >
              {row.map((item, index) =>
                item ? (
                  <div
                    key={index}
                    className="categories_box text-center flex-shrink-0"
                    style={{ width: `${100 / itemsPerRow}%` }}
                    onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`${category === item.name ? 'ring-2 ring-red-500 scale-105' : ''} w-32 h-32 sm:w-28 sm:h-28 rounded-full object-cover mx-auto shadow-xl shadow-gray-600 hover:scale-105 transition-transform duration-300`}
                    />
                    <p className="text-md font-semibold mt-3 text-gray-600">
                      {item.name}
                    </p>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="categories_box flex-shrink-0"
                    style={{ width: `${100 / itemsPerRow}%` }}
                  />
                )
              )}
            </div>
          ))}
        </div>
      )}

      
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s forwards;
          }
          
        `}
      </style>
    </div>
  );
};

export default ExploreMenu;
