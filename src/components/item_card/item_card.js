import React from "react";

import "./item_card.css";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="card">
          <div className="img_container">
            <img
              className="best_img"
              src={this.props.itemData.img}
              alt="Coffee"
            />
          </div>
          <div className="content_container">
            <h3>{this.props.itemData.title}</h3>
            <h3>{this.props.itemData.price}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default ItemCard;
