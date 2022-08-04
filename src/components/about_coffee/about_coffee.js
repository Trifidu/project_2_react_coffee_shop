import React from "react";
import logoDark from "../../images/beans_logo_dark.svg";

import "./about_coffee.css";

const Article = ({ imagePath, title }) => {
  return (
    <article className="about-coffee-article">
      <div className="img-box">
        <img src={imagePath} alt="" />
      </div>
      <div className="about-coffee-content">
        <h2>{title}</h2>
        <img src={logoDark} alt="Logo" />
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

export default Article;
