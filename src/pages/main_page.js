import React from "react";

import AboutUs from "../components/about/about";
import Banner from "../components/banner/banner";
import Products from "../components/best/best";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Banner link={"/ourCoffee"} />
        <AboutUs />
        <Products itemsData={this.props.itemsData} />
      </>
    );
  }
}

export default MainPage;
