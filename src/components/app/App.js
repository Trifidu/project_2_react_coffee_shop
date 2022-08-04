import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/main_page";
import ForYourPleasure from "../../pages/pleasure_page";
import OurCoffee from "../../pages/coffee_page";
import ItemPage from "../../pages/item_page";
import Navigation from "../navigation/navigation";

import coffeeImg1 from "../../images/best_item_1.jpg";
import coffeeImg2 from "../../images/best_item_2.jpg";
import coffeeImg3 from "../../images/best_item_3.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData: [
        {
          img: coffeeImg1,
          heading: "Solimo Coffee Beans 2 kg",
          country: "Italia",
          price: "10.73$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg2,
          heading: "Presto Coffee Beans 1 kg",
          country: "France",
          price: "15.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg3,
          heading: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg1,
          heading: "Solimo Coffee Beans 2 kg",
          country: "Italia",
          price: "10.73$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg2,
          heading: "Presto Coffee Beans 1 kg",
          country: "France",
          price: "15.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: coffeeImg3,
          heading: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      filterStatus: false,
    };
    this.filterList = [];
    this.restored = this.state.itemsData;
  }

  searchEmp = (items, term) => {
    if (term.length !== 0) {
      return items.filter((item) => {
        return item.heading.indexOf(term) > -1;
      });
    } else {
      return items;
    }
  };

  searchElement = (e) => {
    this.setState({ itemsData: this.searchEmp(this.restored, e.target.value) });
  };

  filter = () => {
    if (this.filterList.length !== 0) {
      this.setState({
        itemsData: this.restored.filter((item) =>
          this.filterList.includes(item.country)
        ),
      });
    } else {
      this.setState({ itemsData: this.restored });
    }
  };

  addFilter = (country) => {
    if (!this.filterList.includes(country)) {
      this.filterList.push(country);
      this.filter();
    }
  };

  removeFilter = (country) => {
    if (this.filterList.includes(country)) {
      this.filterList = this.filterList.filter((item) => item !== country);
      this.filter();
    }
  };

  toggleFilter = (e, trigger, country) => {
    if (trigger) {
      this.addFilter(country);
    } else {
      this.removeFilter(country);
    }
  };

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              path={"/"}
              element={<MainPage itemsData={this.state.itemsData} />}
            />
            <Route
              path={"/ourCoffee"}
              element={
                <OurCoffee
                  itemsData={this.state.itemsData}
                  searchElement={this.searchElement}
                  toggleFilter={this.toggleFilter}
                />
              }
            />
            <Route
              path={"/forYourPleasure"}
              element={<ForYourPleasure itemsData={this.state.itemsData} />}
            />
            <Route path={"/itemPage"} element={<ItemPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
