import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Showroom from "../../components/Showroom/Showroom";
import Carousel from "../../components/Carousel/Carousel";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div>
      <div className="header-bg">
        <Navbar />
        <Hero />
      </div>
      <Carousel />
      <Showroom />
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
