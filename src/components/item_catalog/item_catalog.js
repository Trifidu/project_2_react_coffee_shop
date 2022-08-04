import React from "react";

import CatalogFilter from "../catalog_filter/catalog_filter";
import CatalogItems from "../catalog_items/catalog_items";

import "./item_catalog.css";

class ItemCatalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="coffee_catalogue">
          <CatalogFilter
            itemsData={this.props.itemsData}
            search={this.props.search}
            toggleFilter={this.props.toggleFilter}
          />
          <CatalogItems itemsData={this.props.itemsData} />
        </section>
      </>
    );
  }
}

export default ItemCatalog;
