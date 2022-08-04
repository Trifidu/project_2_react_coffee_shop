import React from "react";

import AboutUs from "../components/about/about";
import Banner from "../components/banner/banner";
import Products from "../components/best/best";
import bestProd1 from "../images/best_item_1.jpg";
import bestProd2 from "../images/best_item_2.jpg";
import bestProd3 from "../images/best_item_3.jpg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsData: [
        {
          img: bestProd1,
          heading: "Solimo Coffee Beans 2 kg",
          country: "Italia",
          price: "10.73$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestProd2,
          heading: "Presto Coffee Beans 1 kg",
          country: "France",
          price: "15.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestProd3,
          heading: "AROMISTICO Coffee 1 kg",
          country: "Ukraine",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Banner link={"/ourCoffee"} />
        <AboutUs />
        <Products itemsData={this.state.itemsData} />
      </>
    );
  }
}

export default MainPage;
