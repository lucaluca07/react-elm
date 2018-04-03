import React, { Component } from "react";
import "./style.scss";
import ActivitySheet from "../ActivitySheet";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = { showGoogs: false };
    this.toggleShowGoodsList = this.toggleShowGoodsList.bind(this);
  }
  getObjLength(obj) {
    let length = 0;
    Object.keys(obj).forEach(val => {
      obj[val].forEach(ele => {
        length += ele.quantity;
      });
    });
    return length;
  }
  getMoney(obj) {
    let total = 0;
    Object.keys(obj).forEach(val => {
      obj[val].forEach(ele => {
        total += ele.quantity * ele.price;
      });
    });
    return total;
  }
  toggleShowGoodsList() {
    const { showGoods } = this.state;
    this.setState({ showGoods: !showGoods });
  }
  render() {
    const { data, minOrderAmount, changeCart } = this.props;
    const { showGoods } = this.state;
    const arr = data && this.getObjLength(data);
    const total = (data && this.getMoney(data)) || 0;
    return (
      <div>
        <div className="cartview">
          <div className="discount-tips" />
          <div className="cartview-body">
            <div className="cartview-main">
              <div className="cartview-total">¥{total}</div>
              <div className="cart-delivery">配送费¥5</div>
            </div>
            <div
              className={`submit-btn ${
                total - minOrderAmount >= 0 ? "activity-btn" : ""
              }`}
            >
              {total > 0
                ? minOrderAmount - total > 0
                  ? `还差¥${minOrderAmount - total}起送`
                  : "去结算"
                : `¥${minOrderAmount}起送`}
            </div>
          </div>
          <div
            onClick={total > 0 ? this.toggleShowGoodsList : null}
            className={`cart ${arr > 0 ? "activity-cart" : ""}`}
          >
            <i className="iconfont icon-cartfill" />
            {arr > 0 && <div className="badge">{arr}</div>}
          </div>
        </div>
        {showGoods &&
          arr > 0 && (
            <ActivitySheet
              zIndex={998}
              close={false}
              onClick={this.toggleShowGoodsList}
            >
              <div className="goods-wrap">
                <div className="goods-header">
                  <div className="header-text">已选商品</div>
                  <div className="clear-all">清空</div>
                </div>
                <ul className="goods-list">
                  {data &&
                    Object.keys(data).map(ele =>
                      data[ele].map((val, index) => (
                        <li className="goods-item" key={index}>
                          <div className="goods">
                            <span className="name">{val.name}</span>
                            <span className="price">
                              ￥{val.price * val.quantity}
                            </span>
                            <div className="quantity">
                              <span
                                className="decrease-cart-btn"
                                onClick={() => {
                                  changeCart(ele, -1, val, val.attrs);
                                }}
                              >
                                <i className="iconfont icon-jian1" />
                              </span>
                              <span className="goods-num">{val.quantity}</span>
                              <span
                                className="add-cart-btn"
                                onClick={() => {
                                  changeCart(ele, 1, val, val.attrs);
                                }}
                              >
                                <i className="iconfont icon-tianjia" />
                              </span>
                            </div>
                          </div>
                          {val.specs[0]&&<div className="goods-spec">
                            {val.specs[0].value}
                            /{val.attrs.map(attr => attr.value).join("/")}
                          </div>}
                        </li>
                      ))
                    )}
                  {/* {goods.map((val, index) => (
                  
                ))} */}
                </ul>
                <div className="box" />
              </div>
            </ActivitySheet>
          )}
      </div>
    );
  }
}
