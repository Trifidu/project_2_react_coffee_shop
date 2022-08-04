import React from "react";

import ItemCard from "../item_card/item_card";

import "./catalog_items.css";

class CatalogItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="itemsCards">
          {this.props.itemsData.map((el, index) => {
            return <ItemCard key={index} itemData={el} />;
          })}
        </section>
      </>
    );
  }
}

export default CatalogItems;
