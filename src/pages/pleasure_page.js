import React from "react";

import AboutCoffee from "../components/about_coffee/about_coffee";
import HeadTitle from "../components/head_title/head_title";
import CatalogItems from "../components/catalog_items/catalog_items";
import coffeeBg from "../images/pleasure_about.jpg";
import pleasureBg from "../images/oleasure_bg.jpg";

class ForYourPleasure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hrStyle = {
      width: "240px",
      backgroundColor: "black",
    };
    return (
      <>
        <HeadTitle
          backgroundImage={pleasureBg}
          titleText={"For your pleasure"}
        />
        <AboutCoffee imagePath={coffeeBg} title={"About our goods"} />
        <hr style={hrStyle} />
        <CatalogItems itemsData={this.props.itemsData} />
      </>
    );
  }
}

export default ForYourPleasure;
