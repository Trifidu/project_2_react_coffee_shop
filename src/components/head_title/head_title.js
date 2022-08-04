import React from "react";

import coffeeBg from "./our_coffee_bg.jpg";

import "./head_title.css";

const HeadTitle = () => {
  return (
    <>
      <style>
        {`
                    body {
                        background-image: url(${coffeeBg});
                        background-attachment: scroll;
                    }
                `}
      </style>
      <article className="title">
        <h1>Our Coffee</h1>
      </article>
    </>
  );
};

export default HeadTitle;
