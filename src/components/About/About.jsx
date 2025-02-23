import React from "react";
import B from "../../assets/b.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>It All Started When I Got Curious</h1>
        <p>
          I'm Real Desmond, the face behind Yellow Queen! I am a Nigerian-based
          freelance Brand Identity and Graphics Designer.
        </p>
        <br />
        <p>
          After 5 years of professional designing experience, I learned that I
          genuinely love helping people and brands look good online, stay
          consistent on social media, and get noticed in a busy market!
        </p>

        <p>
          <br />
          My love for branding and user friendly designs has grown throughout my
          career. Since starting my brand in April 2023, I have worked with many
          clients across diverse industries!
        </p>
        <br />
        <p>
          I would love to expand my network by working with more brands, sharing
          tips, wins, updates, relatable content, and more! I hope you follow
          along for the journey, OR I hope we can work together!
        </p>
      </div>

      <div className="about-image">
        <img src={B} />
      </div>
    </div>
  );
};

export default About;
