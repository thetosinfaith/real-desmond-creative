import React from "react";
import Lg from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-logo">
            <img src={Lg} alt="" />
            <p>Building and Branding One Pixel at a Time.</p>
          </h2>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Me</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Linktree</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {" "}
          &copy; Real Desmond{" "}
          <script>document.write(new Date().getFullYear());</script>| Built with{" "}
          <i class="icon-heart text-danger" aria-hidden="true">
            {" "}
            ❤{" "}
          </i>{" "}
          by{" "}
          <a href="https://wa.me/+2348123539192" target="_blank">
            Tosin Faith
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
