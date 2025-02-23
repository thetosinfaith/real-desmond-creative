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
            <span><i>Brand Identity •</i> </span>
            <span><i>Personal Branding •</i> </span>
            <span><i>Logo Design •</i> </span>
            <span><i>Graphic Design • </i></span>
            <span><i>Corporate Branding • </i></span>
            <span><i>Rebranding •</i> </span>

            <span><i>Brand Identity •</i> </span>
            <span><i>Personal Branding •</i> </span>
            <span><i>Logo Design •</i> </span>
            <span><i>Graphic Design • </i></span>
            <span><i>Corporate Branding • </i></span>
            <span><i>Rebranding •</i> </span>

            <span><i>Brand Identity •</i> </span>
            <span><i>Personal Branding •</i> </span>
            <span><i>Logo Design •</i> </span>
            <span><i>Graphic Design • </i></span>
            <span><i>Corporate Branding • </i></span>
            <span><i>Rebranding •</i> </span>
          </div>
        </div>
      </div>
    </>
  );
}
