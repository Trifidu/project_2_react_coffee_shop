import React from "react";

import ItemCard from "../item_card/item_card";

import "./best.css";

const Best = (props) => {
  return (
    <section className="best">
      <h2 className="best_title">Our best</h2>
      <div className="best_cards">
        {props.itemsData.slice(3).map((el, index) => {
          return <ItemCard key={index} itemData={el} />;
        })}
      </div>
    </section>
  );
};

export default Best;
