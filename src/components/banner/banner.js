import React from "react";
import { NavLink } from "react-router-dom";

import beansLogoDark from "../../images/beans_logo_dark.svg";

import "./banner.css";

const Banner = ({ link }) => {
  return (
    <section className="container">
      <div className="container_content">
        <h1 className="container_title">Everything You Love About Coffee</h1>
        <img src={beansLogoDark} alt="logo" />
        <h2 className="container-sub-title">
          We makes every day full of energy and taste
        </h2>
        <h2 className="container-sub-title">Want to try our beans?</h2>
        <NavLink to={link}>
          <button className="more_btn btn_mt30px">More</button>
        </NavLink>
      </div>
    </section>
  );
};

export default Banner;
