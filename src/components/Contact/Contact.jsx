import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <p className="contact-text">Need a Brand Identity Designer?</p>
        <a 
          href="https://www.linkedin.com/in/realdesmond-branddesigner" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Send a Message
        </a>
      </div>
    </div>
  );
};

export default Contact;
