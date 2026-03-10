import React, { useState } from "react";
import Slider from "../Components/Slider";
import RestaurantsList from "./RestaurantsList";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";
import ExploreMenu from "../Components/ExploreMenu";

const HomePage = () => {
     const [category, setCategory] = useState("All")

  return (
    <>
      <Slider />
      <ExploreMenu category ={category} setCategory={setCategory}/>
      <RestaurantsList category={category} />
      <Reviews />
      <Footer />
    </>
  );
};

export default HomePage;
