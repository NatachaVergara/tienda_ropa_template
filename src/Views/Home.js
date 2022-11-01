import React from "react";
import HomeContainer from "../Components/Home/HomeContainer";

const Home = () => {
  const pageTitle = "Tienda Ropa - Home";
  document.title = pageTitle;
  return (
    <HomeContainer/>
  );
};

export default Home;
