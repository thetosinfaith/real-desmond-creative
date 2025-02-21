import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { Helmet } from "react-helmet-async";
import Logo from "../../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Real Desmond | Branding & Design</title>
        <meta
          name="description"
          content="Helping brands go from ignored to recognized. Work with Real Desmond, a branding expert."
        />
        <meta
          name="keywords"
          content="branding, logo design, brand identity, business growth"
        />
      </Helmet>

      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />

        <div className={`nav-container ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="say-hello">
            <a
              href="https://api.whatsapp.com/message/FWGQWHEY6JQHO1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Design Services <FaArrowRight />
            </a>
          </button>
        </div>

        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={30} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
