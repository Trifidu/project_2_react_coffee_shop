import React from "react";
import HeadTittle from "../components/head_title/head_title";
import { ItemDescription } from "../components/item_descr/item_descr";
import { useLocation } from "react-router-dom";
import coffeeBg from "../images/our_coffee_bg.jpg";

const ItemPage = () => {
  const { image, heading, country, price, description } = useLocation().state;

  return (
    <>
      <HeadTittle backgroundImage={coffeeBg} titleText={"Our Coffee"} />
      <ItemDescription
        heading={heading}
        image={image}
        country={country}
        description={description}
        price={price}
      />
    </>
  );
};

export default ItemPage;
