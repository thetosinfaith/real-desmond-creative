import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Showroom from "../../components/Showroom/Showroom";
import Carousel from "../../components/Carousel/Carousel";
import Process from "../../components/Process/Process";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import "./AppLayout.css";
import ProjectCountdown from "../../components/ProjectCountdown/ProjectCountdown";
import Testimonials from "../../components/Testimonials/Testimonials";

const AppLayout = () => {
  return (
    <div>
      <div className="header-bg">
        <Navbar />
        <Hero />
      </div>
      <Carousel />
      <Showroom />
      <ProjectCountdown />
      <About />
      <Testimonials />
      <Process />
      <Contact />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
