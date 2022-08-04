import React, { Component } from "react";
import "./catalog_filter.css";
class CatalogueFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.filterItemsDuplicate("country"),
      btnStatus: false,
      inputValue: "",
    };

    this.filterButtons = document.getElementsByClassName("filer-card");
  }

  filterItemsDuplicate = (prop) => {
    let uniqueIds = [];

    return this.props.itemsData.filter((el) => {
      if (!uniqueIds.includes(el[prop])) {
        uniqueIds.push(el[prop]);

        return true;
      }

      return false;
    });
  };

  changeStatus = (e) => {
    e.target.classList.toggle("filter-selected");
    this.setState({ btnStatus: !this.state.btnStatus });
  };

  resetButtons = () => {
    const elements = this.filterButtons;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("filter-selected")) {
        elements[i].classList.remove("filter-selected");
      }
    }

    this.setState({ btnStatus: false });
  };

  checkClass = (e, itemClass) => {
    return e.target.classList.contains(itemClass);
  };

  btnClick = (e, country) => {
    this.changeStatus(e);
    const trigger = this.checkClass(e, "filter-selected");
    this.props.toggleFilter(e, trigger, country);
  };

  render() {
    return (
      <div className="search-panel">
        <div className="input">
          <label htmlFor="search" className="search-label">
            Looking for
          </label>
          <input
            type="text"
            placeholder="start typing here..."
            id="search"
            className="search-input"
            autoComplete={"off"}
            onChange={(e) => {
              this.resetButtons();
              this.setState({ inputValue: e.target.value });
              this.props.searchElement(e);
            }}
            value={this.state.inputValue}
          />
        </div>
        <div className="filter">
          <div className="filter-title">
            <h4>Or filter</h4>
          </div>
          <div className="filter-cards">
            {this.state.countries.map((el, index) => {
              const country = el["country"];
              return (
                <React.Fragment key={index}>
                  <button
                    className="filer-card"
                    onClick={(e) => {
                      this.btnClick(e, country);
                      this.setState({ inputValue: "" });
                    }}
                  >
                    {country}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogueFilter;
