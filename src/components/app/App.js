import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/main_page";
import ForYourPleasure from "../../pages/pleasure_page";
import OurCoffee from "../../pages/coffee_page";
import ItemPage from "../../pages/items_page";
import Navigation from "../navigation/navigation";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/ourCoffee"} element={<OurCoffee />} />
            <Route path={"/forYourPleasure"} element={<ForYourPleasure />} />
            <Route path={"/itemPage"} element={<ItemPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
