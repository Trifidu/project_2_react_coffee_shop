import React from "react";
import "./head_title.css";

const HeadTitle = ({ backgroundImage, titleText }) => {
  return (
    <>
      <style>
        {`
          body {
              background-image: url(${backgroundImage});
              background-attachment: scroll;
          }
        `}
      </style>
      <article className="title">
        <h1>{titleText}</h1>
      </article>
    </>
  );
};

export default HeadTitle;
