import React from "react";
import CategoryMonth from "../Components/Home/CategoryMonth";
import FeatureProducts from "../Components/Home/FeatureProducts";
import Hero from "../Components/Home/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoryMonth />
      <FeatureProducts/>
    </main>
  );
};

export default Home;
