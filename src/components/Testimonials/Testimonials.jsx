import React from "react";
import Reviews from "../../assets/sm.png";
import Review from "../../assets/oop.png";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <img
        src={Reviews}
        alt="Reviews"
        className="testimonials-img large-screen"
      />
      <img
        src={Review}
        alt="Review"
        className="testimonials-img small-screen"
      />
    </div>
  );
};

export default Testimonials;
