import React from "react";

import Banner from "../components/banner/banner";
import AboutUs from "../components/about/about";
import Best from "../components/best/best";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Banner link={"/ourCoffee"} />
        <AboutUs />
        <Best itemsData={this.props.itemsData} />
      </>
    );
  }
}

export default MainPage;
