import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";

const Index = () => {
  let location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && <Hero />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
