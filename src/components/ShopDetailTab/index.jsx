import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

class ShopDetailTab extends Component {
  constructor() {
    super();
    this.state = { activityInx: 0 };
  }
  handleClick(index) {
    this.setState({ activityInx: index });
    this.props.onClick(index);
  }
  render() {
    const tabArr = ["点餐", "评价", "商家"];
    const activityInx = this.state.activityInx;
    return (
      <ul styleName="shop-detail-tab">
        {tabArr.map((val, index) => (
          <li
            styleName={activityInx === index ? "activity-tab" : ""}
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

export default CSSModules(ShopDetailTab,styles,{allowMultiple:true});