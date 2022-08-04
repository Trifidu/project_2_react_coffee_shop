import React from "react";

import logoDark from "../../images/beans_logo_dark.svg";

import "./item_descr.css";

class ItemDescription extends React.Component {
  render() {
    return (
      <>
        <section className="item_description">
          <div className="item_img">
            <img src={this.props.image} alt="Item" />
          </div>
          <article className="item_info">
            <div className="item_tittle">
              <h2>{this.props.heading}</h2>
              <img src={logoDark} alt="Logo" />
            </div>
            <p>
              <b>Country:</b> {this.props.country}
            </p>
            <p>
              <b>Description:</b> {this.props.description}
            </p>
            <p>
              <b>Price:</b>{" "}
              <span className="item_price">{this.props.price}</span>
            </p>
          </article>
        </section>
      </>
    );
  }
}

export default ItemDescription;
