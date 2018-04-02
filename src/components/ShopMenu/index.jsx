import React, { Component } from "react";
import ReactDOM from "react-dom";
import LazyLoad from "react-lazyload";
import "./style.scss";
import getImgSrc from "../../util/getImgSrc";
import throttle from "../../util/throttle";
import Modal from "../Modal";

export default class ShopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 500,
      activityId: 0,
      showModal: false,
      foodInfo: "",
      spec: 0,
      attrs: []
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.getEleTop = this.getEleTop.bind(this);
    this.toggleShowModal = this.toggleShowModal.bind(this);
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
  toggleShowModal(info) {
    const showModal = this.state.showModal;
    if (!showModal) {
      const attrs = [];
      info.attrs.length > 0 &&
        info.attrs.forEach(element => {
          attrs.push({ name: element.name, value: element.values[0] });
        });
      this.setState({
        attrs: attrs,
        showModal: !showModal,
        foodInfo: info
      });
    } else {
      this.setState({
        attrs: [],
        spec: 0,
        showModal: !showModal,
        foodInfo: info
      });
    }
  }
  setSpecState(index) {
    var event = window.event;
    event.preventDefault();
    this.setState({ spec: index });
  }
  setAttrs(name, value) {
    var event = window.event;
    event.preventDefault();
    const attrs = this.state.attrs.map(
      val => (val.name === name ? { name, value } : val)
    );
    this.setState({ attrs: attrs });
  }
  addCart(info, num) {
    var event = window.event;
    event.preventDefault();
    const { spec, attrs } = this.state;
    const { virtual_food_id, specfoods } = info;
    this.setState({
      spec: 0,
      attrs: [],
      showModal: false
    });
    this.props.changeCart(virtual_food_id, num, specfoods[spec], attrs);
  }
  render() {
    const data = this.props.data;
    const { height, activityId, showModal, foodInfo, spec, attrs } = this.state;
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
                  <LazyLoad key={val.virtual_food_id}>
                    <div className="shop-sub-item">
                      <div className="food-img">
                        {val.image_path && (
                          <img
                            src={getImgSrc(val.image_path, 140)}
                            alt="food"
                          />
                        )}
                      </div>
                      <div className="food-detail">
                        <div className="food-name">{val.name}</div>
                        <div className="description">{val.description}</div>
                        <div className="sales">
                          <span>月售{val.month_sales}份</span>&nbsp;
                          <span>好评率{val.satisfy_rate}%</span>
                        </div>
                        <div className="price-wrap">
                          <span className="price">
                            {val.specfoods.length > 1
                              ? `¥${Math.min(
                                  ...val.specfoods.map(item => item.price)
                                )}起`
                              : `¥${val.specfoods[0].price}`}
                          </span>
                          {cart &&
                          cart[val.virtual_food_id] &&
                          (cart[val.virtual_food_id].length > 1
                            ? cart[val.virtual_food_id].reduce(
                                (accumulator, current) =>
                                  accumulator + current.quantity,
                                0
                              )
                            : cart[val.virtual_food_id][0].quantity) > 0 ? (
                            <div className="btn-warp">
                              <span
                                className="decrease-cart-btn"
                                onClick={
                                  cart[val.virtual_food_id].length > 1
                                    ? () => {
                                        console.log(1111111222222);
                                      }
                                    : this.addCart.bind(this, val, -1)
                                }
                              >
                                <i className="iconfont icon-jian1" />
                              </span>
                              <span className="goods-num">
                                {cart[val.virtual_food_id].length > 1
                                  ? cart[val.virtual_food_id].reduce(
                                      (accumulator, current) =>
                                        accumulator + current.quantity,
                                      0
                                    )
                                  : cart[val.virtual_food_id][0].quantity}
                              </span>
                              {val.specfoods.length > 1 ? (
                                <span
                                  className="choose-goods-btn"
                                  onClick={() => {
                                    this.toggleShowModal(val);
                                  }}
                                >
                                  选规格
                                </span>
                              ) : (
                                <span
                                  className="add-cart-btn"
                                  onClick={this.addCart.bind(this, val, 1)}
                                >
                                  <i className="iconfont icon-tianjia" />
                                </span>
                              )}
                            </div>
                          ) : (
                            <div>
                              {val.specfoods.length > 1 ? (
                                <span
                                  className="choose-goods-btn"
                                  onClick={() => {
                                    this.toggleShowModal(val);
                                  }}
                                >
                                  选规格
                                </span>
                              ) : (
                                <span
                                  className="add-cart-btn"
                                  onClick={this.addCart.bind(this, val, 1)}
                                >
                                  <i className="iconfont icon-tianjia" />
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </LazyLoad>
                ))}
              </div>
            ))}
            <div style={{ height: 100 }} />
          </div>
        </div>
        {showModal && (
          <Modal callback={this.toggleShowModal}>
            <div className="specpanle">
              <h2 className="specpanle-title">{foodInfo.name}</h2>
              <div style={{ padding: "0 20px" }}>规格</div>
              <ul className="specpanle-specs">
                {foodInfo.specfoods.map((val, index) => (
                  <li
                    onTouchStart={this.setSpecState.bind(this, index)}
                    className={`spec-item ${
                      spec === index ? "item-activity" : ""
                    }`}
                    key={index}
                  >
                    {val.specs[0].value}
                  </li>
                ))}
              </ul>
              {foodInfo.attrs.length > 0 && (
                <div className="attr-wrap">
                  {foodInfo.attrs.map((val, ind) => (
                    <div key={ind}>
                      <div className="spec-attr-name">{val.name}</div>
                      <ul className="spec-attrs">
                        {val.values.map((attr, index) => (
                          <li
                            onTouchStart={this.setAttrs.bind(
                              this,
                              val.name,
                              attr
                            )}
                            className={`spec-attr-item ${
                              attr === attrs[ind].value ? "item-activity" : ""
                            }`}
                            key={index}
                          >
                            {attr}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <div className="specpanle-footer">
                <div className="price">￥{foodInfo.specfoods[spec].price}</div>
                <div
                  className="submit-btn"
                  onTouchEnd={this.addCart.bind(this, foodInfo, 1)}
                >
                  选好了
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
