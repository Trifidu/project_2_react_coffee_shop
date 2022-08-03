import React from "react";

import "./banner.css";

import beans from "./beans_logo_light.svg";

const Banner = () => {
  return (
    <section className="container">
      <div className="container_content">
        <h1 className="container_title">Everything You Love About Coffee</h1>
        <img src={beans} alt="logo" />
        <h2 className="container_sub_title">
          We makes every day full of energy and taste
        </h2>
        <h2 className="container_sub_title">Want to try our beans?</h2>
        <button className="more_btn btn_mt30">More</button>
      </div>
    </section>
  );
};

export default Banner;
