import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Index = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenidos</h1>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
