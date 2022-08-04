import React from "react";

import HeadTitle from "../components/head_title/head_title";
import AboutCoffee from "../components/about_coffee/about_coffee";
import ItemCatalog from "../components/item_catalog/item_catalog";

import bestImg3 from "./best_item_3.jpg";

class Coffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData: [
        {
          img: bestImg3,
          title: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestImg3,
          title: "BROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestImg3,
          title: "CROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestImg3,
          title: "DROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestImg3,
          title: "EROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: bestImg3,
          title: "FROMISTICO Coffee 1 kg",
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
    const hrStyle = {
      width: "240px",
      backgroundColor: "black",
    };
    return (
      <>
        <HeadTitle />
        <AboutCoffee />
        <hr style={hrStyle} />
        <ItemCatalog
          itemsData={this.state.itemsData}
          search={this.searchElement}
          toggleFilter={this.toggleFilter}
        />
      </>
    );
  }
}

export default Coffee;
