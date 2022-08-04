import React from "react";

import ItemCard from "../item_card/item_card";

import "./best.css";

const Best = (props) => {
  return (
    <section className="best">
      <h2 className="best_title">Our best</h2>
      <div className="cards">
        {props.itemsData.map((el, id) => {
          return <ItemCard key={id} itemData={el} />;
        })}
      </div>
    </section>
  );
};

export default Best;
