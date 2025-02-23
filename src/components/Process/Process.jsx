import React from "react";
import Rocket from "../../assets/rocket.svg";
import Palette from "../../assets/palette.svg";
import Pennib from "../../assets/pennib.svg";
import Binoculars from "../../assets/binoculars.svg";
import left from "../../assets/up.png";
import right from "../../assets/down.png";

import "./Process.css";

const icons = [Binoculars, Pennib, Palette, Rocket];
const steps = ["Discover", "Plan", "Design", "Launch"];
const descriptions = [
  "I begin by learning about your business, your goals, customers, and what makes you stand out in the market.",
  "Using what we've discovered, I create a rough sketch of your website's look and feel, making sure we're on the same page.",
  "Once we agree on the design direction, I create your website and make any final tweaks based on your feedback.",
  "Once everything looks perfect, your website goes live! I'll also provide you with easy-to-follow guides and 60 days of support.",
];

const Process = () => {
  return (
    <div className="process-container">
      <img src={right} alt="01" className="overlay-left" />
      <img src={left} alt="02" className="overlay-right" />
      <h1 className="process-title">My Design Process</h1>
      <p className="process-description">
        I work by packages (you can choose one of mine or create your own
        depending on your needs).
      </p>

      <div className="line"></div>

      <div className="boxes">
        {icons.map((icon, index) => (
          <div key={index} className="box">
            <div className="icon-circle">
              <img src={icon} alt={steps[index]} className="box-icon" />
            </div>
            <h3 className="box-title">{steps[index]}</h3>
            <p className="box-description">{descriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
