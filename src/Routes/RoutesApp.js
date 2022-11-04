import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Views/Index";
import CheckoutIndex from "../Views/Checkout/CheckoutIndex";
import About from "../Views/About";
import Cart from "../Views/Checkout/Cart";
import Checkout from "../Views/Checkout/Checkout";
import Payment from "../Views/Checkout/Payment";
import Contact from "../Views/Contact";
import Home from "../Views/Home";
import Profile from "../Views/Profile";
import ErrorPage from "../Views/ErrorPage";
import Shop from "../Views/Products/Shop";
import ProductItem from "../Views/Products/Product_item";

const RoutesApp = () => {
   return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="item" element={<ProductItem />} />
        <Route path="*" element={<ErrorPage />} />        
      </Route>

      <Route path="/startpayment" element={<CheckoutIndex />}>
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
