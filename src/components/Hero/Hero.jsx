import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import heroImg from "../../assets/M.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Brand Identity Designer | Real Desmond</title>
        <meta name="description" content="Helping brands go from ignored to recognized. Book a 1:1 Brand Clarity Call with Real Desmond today!" />
        <meta name="keywords" content="Brand Identity, Branding, Personal Brand, Business Growth, Design" />
        <meta property="og:title" content="Brand Identity Designer | Real Desmond" />
        <meta property="og:description" content="Helping brands go from ignored to recognized. Book a 1:1 Brand Clarity Call now!" />
        <meta property="og:image" content={heroImg} />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>

      <div className="hero-main">
        <div className="hero-image">
          <img src={heroImg} alt="Brand Identity Designer" />
        </div>
        <div className="hero-content">
          <h1>Helping Brands Go From Invisible To Unforgettable</h1>
          <h4>Be The Brand They Can't Ignore</h4>
          <p>
          I am a Brand Identity Designer with 5 years of experience. I mix creativity with planning to create logos, colors, & styles that make your brand easy to recognize and remember. I help your business stand out so more people notice and trust it.           </p>
          <button className="click-me">
            <a
              href="https://api.whatsapp.com/message/FWGQWHEY6JQHO1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Available For Hire <FaArrowRight />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
