import React from "react";
import "./Showroom.css";
import Stocksavvy from "../../assets/pp.png";
import IncomePilot from "../../assets/oss.png";
import Chisom from "../../assets/chisom.png";
import VS from "../../assets/GT.png";
import Flag from "../../assets/AJ.png";
import Zinny from "../../assets/Zinny.png";

const images = [Stocksavvy, Chisom, IncomePilot, VS,  Zinny, Flag];

const Showroom = () => {
  return (
    <div className="showroom-container">
      <div className="grid-container">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img
              src={src}
              alt={`Showroom ${index + 1}`}
              className="grid-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
