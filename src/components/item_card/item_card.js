import React from "react";
import { NavLink } from "react-router-dom";

import "./item_card.css";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavLink
          to={"/itemPage"}
          className={"nav-link"}
          state={{
            image: this.props.itemData.img,
            heading: this.props.itemData.heading,
            country: this.props.itemData.country,
            price: this.props.itemData.price,
            description: this.props.itemData.description,
          }}
        >
          <div className="item">
            <div className="item_img_box">
              <img
                className="item_product_img"
                src={this.props.itemData.img}
                alt="Coffee"
              />
            </div>
            <div className="item_content_container">
              <h3>{this.props.itemData.heading}</h3>
              <h3>{this.props.itemData.country}</h3>
              <h3>{this.props.itemData.price}</h3>
            </div>
          </div>
        </NavLink>
      </>
    );
  }
}

export default ItemCard;
