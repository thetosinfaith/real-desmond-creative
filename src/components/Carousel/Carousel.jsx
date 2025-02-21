import { Helmet } from "react-helmet-async";
import "./Carousel.css";

export default function TextSlider() {
  return (
    <>
      <Helmet>
        <title>Branding & Design Services | Real Desmond</title>
        <meta name="description" content="Discover top-notch branding services including brand identity, personal branding, logo design, and rebranding by Real Desmond." />
        <meta name="keywords" content="brand identity, personal branding, logo design, graphic design, corporate branding, rebranding" />
      </Helmet>

      <div className="slider-container">
        <div className="slider-wrapper">
          <div className="slider-content">
            <span>Brand Identity • </span>
            <span>Personal Branding • </span>
            <span>Logo Design • </span>
            <span>Graphic Design • </span>
            <span>Corporate Branding • </span>
            <span>Rebranding • </span>

            <span>Brand Identity • </span>
            <span>Personal Branding • </span>
            <span>Logo Design • </span>
            <span>Graphic Design • </span>
            <span>Corporate Branding • </span>
            <span>Rebranding • </span>

            <span>Brand Identity • </span>
            <span>Personal Branding • </span>
            <span>Logo Design • </span>
            <span>Graphic Design • </span>
            <span>Corporate Branding • </span>
            <span>Rebranding • </span>
          </div>
        </div>
      </div>
    </>
  );
}
