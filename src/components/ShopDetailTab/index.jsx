import React, { Component } from "react";
import "./style.scss";

export default class ShopDetailTab extends Component {
  constructor() {
    super();
    this.state = { activityInx: 0 };
  }
  handleClick(index) {
    this.setState({ activityInx: index });
  }
  render() {
    const tabArr = ["点餐", "评价", "商家"];
    const activityInx = this.state.activityInx;
    return (
      <ul className="shop-detail-tab">
        {tabArr.map((val, index) => (
          <li
            className={activityInx === index ? "activity-tab" : ""}
            onClick={this.handleClick.bind(this, index)}
            key={index}
          >
            {val}
          </li>
        ))}
      </ul>
    );
  }
}
