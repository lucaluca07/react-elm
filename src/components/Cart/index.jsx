import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.scss";
import ActivitySheet from "../ActivitySheet";

class Cart extends Component {
  constructor() {
    super();
    this.state = { showGoogs: false };
    this.toggleShowGoodsList = this.toggleShowGoodsList.bind(this);
    this.clearClick = this.clearClick.bind(this);
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
  handleRemoveClick(ele, val, attrs, arr) {
    if (arr <= 1) {
      this.setState({ showGoods: false });
    }
    this.props.changeCart(ele, -1, val, attrs);
  }
  clearClick() {
    this.setState({ showGoods: false });
    this.props.clearCart();
  }
  render() {
    const { data, minOrderAmount, changeCart } = this.props;
    const { showGoods } = this.state;
    console.log("data", data);
    const arr = data && this.getObjLength(data);
    const total = (data && this.getMoney(data)) || 0;
    return (
      <div>
        <div styleName="cartview">
          <div styleName="discount-tips" />
          <div styleName="cartview-body">
            <div styleName="cartview-main">
              <div styleName="cartview-total">¥{total}</div>
              <div styleName="cart-delivery">配送费¥5</div>
            </div>
            <div
              styleName={`submit-btn ${
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
            styleName={`cart ${arr > 0 ? "activity-cart" : ""}`}
          >
            <i className="iconfont icon-cartfill" />
            {arr > 0 && <div styleName="badge">{arr}</div>}
          </div>
        </div>
        {showGoods && (
          <ActivitySheet
            zIndex={998}
            close={false}
            onClick={this.toggleShowGoodsList}
          >
            <div styleName="goods-wrap">
              <div styleName="goods-header">
                <div styleName="header-text">已选商品</div>
                <div styleName="clear-all" onClick={this.clearClick}>
                  <i className="iconfont icon-lajixiang" />
                  <span>清空</span>
                </div>
              </div>
              <ul styleName="goods-list">
                {data &&
                  Object.keys(data).map(ele =>
                    data[ele].map((val, index) => (
                      <li styleName="goods-item" key={index}>
                        <div styleName="goods">
                          <span styleName="name">{val.name}</span>
                          <span styleName="price">
                            ￥{val.price * val.quantity}
                          </span>
                          <div styleName="quantity">
                            <span
                              styleName="decrease-cart-btn"
                              onClick={this.handleRemoveClick.bind(
                                this,
                                ele,
                                val,
                                val.attrs,
                                arr
                              )}
                            >
                              <i className="iconfont icon-jian1" />
                            </span>
                            <span styleName="goods-num">{val.quantity}</span>
                            <span
                              styleName="add-cart-btn"
                              onClick={() => {
                                changeCart(ele, 1, val, val.attrs);
                              }}
                            >
                              <i className="iconfont icon-tianjia" />
                            </span>
                          </div>
                        </div>
                        {val.specs[0] && (
                          <div styleName="goods-spec">
                            {val.specs[0].value}
                            /{val.attrs.map(attr => attr.value).join("/")}
                          </div>
                        )}
                      </li>
                    ))
                  )}
              </ul>
              <div styleName="box" />
            </div>
          </ActivitySheet>
        )}
      </div>
    );
  }
}
 
export default CSSModules(Cart,style,{allowMultiple:true});
