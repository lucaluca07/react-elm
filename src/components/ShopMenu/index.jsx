import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import getImgSrc from "../../util/getImgSrc";
import throttle from "../../util/throttle";

export default class ShopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 500, activityId: 0 };
    this.handleScroll = this.handleScroll.bind(this);
    this.getEleTop = this.getEleTop.bind(this);
    this.top = 0;
    this.ids = this.props.data.map(val => val.id);
  }
  componentDidMount() {
    const main = this.refs.main;
    const mainEle = ReactDOM.findDOMNode(main);
    const { top } = mainEle.getBoundingClientRect();
    this.top = top;
    const { height } = window.screen;
    const { id } = this.props.data[0];
    this.setState({ height: height - top, activityId: id });
    this.scroll = throttle(this.handleScroll, 100);
  }
  getEleTop(node) {
    const ele = ReactDOM.findDOMNode(this.refs[node]);
    return ele.getBoundingClientRect().top - this.top <= 10;
  }
  handleScroll() {
    const activityId = this.state.activityId;
    for (let i = this.ids.length - 1; i >= 0; i--) {
      if (this.getEleTop(`ref${this.ids[i]}`)) {
        activityId !== this.ids[i] &&
          this.setState({ activityId: this.ids[i] });
        return;
      }
    }
  }
  handleClick(id) {
    const ele = ReactDOM.findDOMNode(this.refs[`ref${id}`]);
    const subMenu = ReactDOM.findDOMNode(this.refs["sub-menu"]);
    subMenu.scrollTo(0, ele.offsetTop - this.top);
  }
  addCart(id, num) {
    console.log("num", num);
    this.props.changeCart(id, num);
  }
  render() {
    const data = this.props.data;
    const { height, activityId } = this.state;
    const cart = this.props.cart;
    return (
      <div className="shop-menu-wrap" style={{ height: height }}>
        <div className="main" ref="main">
          <ul className="shop-main-menu">
            {data.map((val, index) => (
              <li
                key={index}
                className={`main-menu-item ${
                  activityId === val.id ? "activity-menu" : ""
                }`}
                onClick={this.handleClick.bind(this, val.id)}
              >
                {val.name}
              </li>
            ))}
            <li style={{ height: 100 }} />
          </ul>
          <div className="shop-sub-menu" ref="sub-menu" onScroll={this.scroll}>
            {data.map((foods, index) => (
              <div className="shop-sub-list" key={index}>
                <p ref={`ref${foods.id}`}>
                  <span className="name">{foods.name}</span>
                  {foods.description}
                </p>
                {foods.foods.map(val => (
                  <div key={val.virtual_food_id} className="shop-sub-item">
                    <div className="food-img">
                      <img src={getImgSrc(val.image_path, 140)} alt="food" />
                    </div>
                    <div className="food-detail">
                      <div className="food-name">{val.name}</div>
                      <div className="description">{val.description}</div>
                      <div className="sales">
                        <span>月售{val.month_sales}份</span>&nbsp;
                        <span>好评率{val.satisfy_rate}%</span>
                      </div>
                      <div className="price-wrap">
                        <span className="price">¥{val.specfoods[0].price}</span>
                        {cart && cart[val.virtual_food_id] ? (
                          <div>
                            <span
                              className="decrease-cart-btn"
                              onClick={this.addCart.bind(
                                this,
                                val.virtual_food_id,
                                -1
                              )}
                            >
                              -
                            </span>
                            <span className="goods-num">
                              {cart[val.virtual_food_id]}
                            </span>
                            <span
                              className="add-cart-btn"
                              onClick={this.addCart.bind(
                                this,
                                val.virtual_food_id,
                                1
                              )}
                            >
                              +
                            </span>
                          </div>
                        ) : (
                          <span
                            className="add-cart-btn"
                            onClick={this.addCart.bind(
                              this,
                              val.virtual_food_id,
                              1
                            )}
                          >
                            +
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ height: 100 }} />
          </div>
        </div>
      </div>
    );
  }
}
