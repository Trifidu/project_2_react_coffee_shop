import React from "react";
import logoDark from "../../images/beans_logo_dark.svg";

import "./item_descr.css";

export class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="itemDescription">
          <div className="itemImg">
            <img src={this.props.image} alt="Item Description" />
          </div>
          <article className="itemInfo">
            <div className="descriptionTittle">
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
              <b>Price:</b> {this.props.price}
            </p>
          </article>
        </section>
      </>
    );
  }
}
