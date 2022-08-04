import React from "react";

import Article from "../components/about_coffee/about_coffee";
import HeadTittle from "../components/head_title/head_title";
import { CatalogueItems } from "../components/catalog_items/catalog_items";
import coffeeImg from "../images/best_item_3.jpg";
import coffeeBg from "../images/pleasure_about.jpg";
import pleasureBg from "../images/oleasure_bg.jpg";

class ForYourPleasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData: [
        {
          img: coffeeImg,
          heading: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg,
          heading: "BROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg,
          heading: "CROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg,
          heading: "DROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg,
          heading: "EROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg,
          heading: "FROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  }

  render() {
    const hrStyle = {
      width: "240px",
      backgroundColor: "black",
    };
    return (
      <>
        <HeadTittle
          backgroundImage={pleasureBg}
          titleText={"For your pleasure"}
        />
        <Article imagePath={coffeeBg} title={"About our goods"} />
        <hr style={hrStyle} />
        <CatalogueItems itemsData={this.state.itemsData} />
      </>
    );
  }
}

export default ForYourPleasure;
