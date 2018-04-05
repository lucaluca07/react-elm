import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";
import getImgSrc from "../../util/getImgSrc";
import throttle from "../../util/throttle";
import Modal from "../Modal";

class ShopMenu extends Component {
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
    this.setState({ spec: index });
  }
  setAttrs(name, value) {
    const attrs = this.state.attrs.map(
      val => (val.name === name ? { name, value } : val)
    );
    this.setState({ attrs: attrs });
  }
  addCart(info, num) {
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
      <div styleName="shop-menu-wrap" style={{ height: height }}>
        <div styleName="main" ref="main">
          <ul styleName="shop-main-menu">
            {data.map((val, index) => (
              <li
                key={index}
                styleName={`main-menu-item ${
                  activityId === val.id ? "activity-menu" : ""
                }`}
                onClick={this.handleClick.bind(this, val.id)}
              >
                {val.name}
              </li>
            ))}
            <li style={{ height: 100 }} />
          </ul>
          <div styleName="shop-sub-menu" ref="sub-menu" onScroll={this.scroll}>
            {data.map((foods, index) => (
              <div styleName="shop-sub-list" key={index}>
                <p styleName="title" ref={`ref${foods.id}`}>
                  <span styleName="name">{foods.name}</span>
                  {foods.description}
                </p>
                {foods.foods.map(val => (
                  <div styleName="shop-sub-item" key={val.virtual_food_id}>
                    <div styleName="food-img">
                      {val.image_path && (
                        <img src={getImgSrc(val.image_path, 140)} alt="food" />
                      )}
                    </div>
                    <div styleName="food-detail">
                      <div styleName="food-name">{val.name}</div>
                      <div styleName="description">{val.description}</div>
                      <div styleName="sales">
                        <span>月售{val.month_sales}份</span>&nbsp;
                        <span>好评率{val.satisfy_rate}%</span>
                      </div>
                      <div styleName="price-wrap">
                        <span styleName="price">
                          {val.specfoods.length > 1
                            ? `¥${Math.min(
                                ...val.specfoods.map(item => item.price)
                              )}起`
                            : `¥${val.specfoods[0].price}`}
                        </span>

                        {cart &&
                        cart[val.virtual_food_id] &&
                        cart[val.virtual_food_id].length > 0 &&
                        (cart[val.virtual_food_id].length > 1
                          ? cart[val.virtual_food_id].reduce(
                              (accumulator, current) =>
                                accumulator + current.quantity,
                              0
                            )
                          : cart[val.virtual_food_id][0].quantity) > 0 ? (
                          <div styleName="btn-warp">
                            <span
                              styleName="decrease-cart-btn"
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
                            <span styleName="goods-num">
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
                                styleName="choose-goods-btn"
                                onClick={() => {
                                  this.toggleShowModal(val);
                                }}
                              >
                                选规格
                              </span>
                            ) : (
                              <span
                                styleName="add-cart-btn"
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
                                styleName="choose-goods-btn"
                                onClick={() => {
                                  this.toggleShowModal(val);
                                }}
                              >
                                选规格
                              </span>
                            ) : (
                              <span
                                styleName="add-cart-btn"
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
                ))}
              </div>
            ))}
            <div style={{ height: 100 }} />
          </div>
        </div>
        {showModal && (
          <Modal onTouch={false} callback={this.toggleShowModal}>
            <div styleName="specpanle">
              <h2 styleName="specpanle-title">{foodInfo.name}</h2>
              <div style={{ padding: "0 20px" }}>规格</div>
              <ul styleName="specpanle-specs">
                {foodInfo.specfoods.map((val, index) => (
                  <li
                    onClick={this.setSpecState.bind(this, index)}
                    styleName={`spec-item ${
                      spec === index ? "item-activity" : ""
                    }`}
                    key={index}
                  >
                    {val.specs[0].value}
                  </li>
                ))}
              </ul>
              {foodInfo.attrs.length > 0 && (
                <div styleName="attr-wrap">
                  {foodInfo.attrs.map((val, ind) => (
                    <div key={ind}>
                      <div styleName="spec-attr-name">{val.name}</div>
                      <ul styleName="spec-attrs">
                        {val.values.map((attr, index) => (
                          <li
                          onClick={this.setAttrs.bind(
                              this,
                              val.name,
                              attr
                            )}
                            styleName={`spec-attr-item ${
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
              <div styleName="specpanle-footer">
                <div styleName="price">￥{foodInfo.specfoods[spec].price}</div>
                <div
                  styleName="submit-btn"
                  onClick={this.addCart.bind(this, foodInfo, 1)}
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

export default CSSModules(ShopMenu,styles,{allowMultiple:true});