import "./item_catalog.css";

import React from "react";
import CatalogueFilter from "../catalog_filter/catalog_filter";
import CatalogueItems from "../catalog_items/catalog_items";
class ItemCatalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="item_catalog">
          <CatalogueFilter
            itemsData={this.props.itemsData}
            searchElement={this.props.searchElement}
            toggleFilter={this.props.toggleFilter}
          />
          <CatalogueItems itemsData={this.props.itemsData} />
        </section>
      </>
    );
  }
}

export default ItemCatalog;
