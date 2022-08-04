import React from "react";

import aboutCoffeeImg from "./about_coffee.jpg";
import beans from "./beans_logo_dark.svg";

import "./about_coffee.css";

const AboutCoffee = () => {
  return (
    <article className="about_coffee">
      <div className="img_box">
        <img src={aboutCoffeeImg} alt="" />
      </div>
      <div className="about_coffee_content">
        <h2>About out beans</h2>
        <img src={beans} alt="Logo" />
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
        </p>
        <p>
          Afraid at highly months do things on at. Situation recommend objection
          do intention so questions. As greatly removed calling pleased improve
          an. Last ask him cold feel met spot shy want. Children me laughing we
          prospect answered followed. At it went is song that held help face.
        </p>
      </div>
    </article>
  );
};

export default AboutCoffee;
