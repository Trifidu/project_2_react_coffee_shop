import React from "react";
import logoDark from "../../images/beans_logo_dark.svg";

import "./about_coffee.css";

const AboutCoffee = ({ imagePath, title }) => {
  return (
    <article className="about_coffee_article">
      <div className="about_coffee_img">
        <img src={imagePath} alt="" />
      </div>
      <div className="about_coffee_content">
        <h2>{title}</h2>
        <img src={logoDark} alt="Logo" />
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
          <br />
          <br />
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
