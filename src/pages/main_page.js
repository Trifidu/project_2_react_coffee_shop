import React from "react";

import Banner from "../components/banner/banner";
import About from "../components/about/about";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <About />
      </>
    );
  }
}

export default MainPage;
