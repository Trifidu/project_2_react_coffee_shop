import "./catalog_items.css";
import React from "react";
import ItemCard from "../item_card/item_card";
class CatalogItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="catalog_items">
          {this.props.itemsData.map((el, index) => {
            return <ItemCard key={index} itemData={el} />;
          })}
        </section>
      </>
    );
  }
}

export default CatalogItems;
