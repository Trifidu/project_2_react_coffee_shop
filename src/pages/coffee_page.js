import React from "react";

import AboutCoffee from "../components/about_coffee/about_coffee";
import HeadTitle from "../components/head_title/head_title";
import ItemCatalog from "../components/item_catalog/item_catalog";

import coffeeBg from "../images/our_coffee_bg.jpg";
import aboutCoffeeImg from "../images/about_coffee.jpg";

class OurCoffee extends React.Component {
  render() {
    const hrStyle = {
      width: "240px",
      backgroundColor: "black",
    };
    return (
      <>
        <HeadTitle backgroundImage={coffeeBg} titleText={"Our Coffee"} />
        <AboutCoffee imagePath={aboutCoffeeImg} title={"About out beans"} />
        <hr style={hrStyle} />
        <ItemCatalog
          itemsData={this.props.itemsData}
          searchElement={this.props.searchElement}
          toggleFilter={this.props.toggleFilter}
        />
      </>
    );
  }
}

export default OurCoffee;
