import React from "react";

import Article from "../components/about_coffee/about_coffee";
import HeadTittle from "../components/head_title/head_title";
import { CatalogueItems } from "../components/catalog_items/catalog_items";
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
        <HeadTittle
          backgroundImage={pleasureBg}
          titleText={"For your pleasure"}
        />
        <Article imagePath={coffeeBg} title={"About our goods"} />
        <hr style={hrStyle} />
        <CatalogueItems itemsData={this.props.itemsData} />
      </>
    );
  }
}

export default ForYourPleasure;
