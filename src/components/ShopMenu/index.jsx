import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import getImgSrc from "../../util/getImgSrc";

export default class ShopMenu extends Component {
  constructor() {
    super();
    this.state = { height: 500 };
  }
  componentDidMount() {
    const main = this.refs.main;
    const mainEle = ReactDOM.findDOMNode(main);
    const { top } = mainEle.getBoundingClientRect();
    const { height } = window.screen;
    this.setState({ height: height - top });
  }
  render() {
    const data = this.props.data;
    const { height } = this.state;
    console.log("data", this.props.data);
    return (
      <div className="shop-menu-wrap" style={{ height: height }}>
        <div className="main" ref="main">
          <ul className="shop-main-menu">
            {data.map((val, index) => (
              <li className="main-menu-item" key={index}>
                {val.name}
              </li>
            ))}
          </ul>
          <div className="shop-sub-menu">
            {data.map((val, index) => (
              <div className="shop-sub-list" key={index}>
                <p>{val.description}</p>
                {val.foods.map(val => (
                  <div key={val.virtual_food_id} className="shop-sub-item">
                    <div className="food-img" />
                    <div className="food-info">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
