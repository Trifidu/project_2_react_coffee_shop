import React from "react";

import ItemCard from "../item_card/item_card";

import "./best.css";

const Products = (props) => {
  return (
    <section className="products">
      <h2 className="products-title">Our best</h2>
      <div className="cards">
        {props.itemsData.map((el, index) => {
          return <ItemCard key={index} itemData={el} />;
        })}
      </div>
    </section>
  );
};

export default Products;
