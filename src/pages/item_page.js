import React from "react";
import { useLocation } from "react-router-dom";

import HeadTitle from "../components/head_title/head_title";
import ItemDescription from "../components/item_descr/item_descr";

import coffeeBg from "../images/our_coffee_bg.jpg";

const ItemPage = () => {
  const { image, heading, country, price, description } = useLocation().state;

  return (
    <>
      <HeadTitle backgroundImage={coffeeBg} titleText={"Our Coffee"} />
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
