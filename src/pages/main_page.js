import React from "react";

import Banner from "../components/banner/banner";
import About from "../components/about/about";
import Best from "../components/best/best";

import bestImg1 from "./best_item_1.jpg";
import bestImg2 from "./best_item_2.jpg";
import bestImg3 from "./best_item_3.jpg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsData: [
        {
          img: bestImg1,
          title: "Solimo Coffee Beans 2 kg",
          price: "10.73$",
        },
        {
          img: bestImg2,
          title: "Presto Coffee Beans 1 kg",
          price: "15.99$",
        },
        {
          img: bestImg3,
          title: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Banner />
        <About />
        <Best itemsData={this.state.itemsData} />
      </>
    );
  }
}

export default MainPage;
