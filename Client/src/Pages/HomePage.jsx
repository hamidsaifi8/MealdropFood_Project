import React, { useState } from "react";
import Slider from "../Components/Slider";
import Restaurants from "../Components/Restaurants";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";
import ExploreMenu from "../Components/ExploreMenu";

const HomePage = () => {
     const [category, setCategory] = useState("All")

  return (
    <>
      <Slider />
      <ExploreMenu category ={category} setCategory={setCategory}/>
      <Restaurants />
      <Reviews />
      <Footer />
    </>
  );
};

export default HomePage;
