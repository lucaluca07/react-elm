import React, { Component } from "react";
import { connect } from "react-redux";
// import {ShopDetailTombstone} from '../../components/Tombstone'
import ShopDetailHeader from "../../components/ShopDetailHeader";
import ShopDetailTab from "../../components/ShopDetailTab";
import ShopMenu from "../../components/ShopMenu";
import ShopRating from "../../components/ShopRating";
import ShopInfo from "../../components/ShopInfo";
import Cart from "../../components/Cart";
import { ShopDetailTombstone } from "../../components/Tombstone";
import {
  getMenu,
  getShopInfo,
  getRating,
  clearRating,
  clearMenu
} from "../../actions/shopDetail";
import { changeCart } from "../../actions/cart";

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
    this.getRatings = this.getRatings.bind(this);
    this.setTabIndex = this.setTabIndex.bind(this);
    this.increaseDecreaseCart = this.increaseDecreaseCart.bind(this);
    this.shopId = this.props.match.params.id;
  }
  async componentDidMount() {
    const { dispatch, longitude, latitude } = this.props;
    dispatch(clearMenu());
    dispatch(clearRating());
    dispatch(await getMenu(this.shopId, longitude, latitude));
    dispatch(await getShopInfo(this.shopId, longitude, latitude));
    this.getRatings();
  }
  async getRatings() {
    const { dispatch, longitude, latitude, offset } = this.props;
    dispatch(await getRating(this.shopId, offset, 8, longitude, latitude));
  }
  increaseDecreaseCart(goodsId, num, info, attrs) {
    const { dispatch, cart } = this.props;
    const {
      food_id,
      item_id,
      name,
      sku_id,
      original_price,
      specs,
      weight,
      price,
      packing_fee,
      stock
    } = info;
    const foods = (cart[this.shopId] && cart[this.shopId][goodsId]) || [];
    const quantity = 1;
    const food = {
      id: food_id,
      item_id,
      name,
      sku_id,
      original_price,
      specs,
      weight,
      price,
      packing_fee,
      stock,
      quantity,
      attrs
    };
    const skuIds = foods.map(element => element.sku_id);
    if (skuIds.indexOf(sku_id) > -1) {
      const index = skuIds.indexOf(sku_id);
      const ids = [];
      skuIds.forEach((element, index) => {
        if (element === sku_id) {
          ids.push(index);
        }
      });
      if (attrs.length > 0) {
        const flag = ids.some(id =>
          foods[id].attrs.every(
            (element, index) => element.value === attrs[index].value
          )
        );
        if (flag) {
          foods[index].quantity += num;
        } else {
          foods.push(food);
        }
      } else {
        foods[index].quantity += num;
      }
    } else {
      foods.push(food);
    }
    dispatch(changeCart(this.shopId, goodsId, foods));
  }
  setTabIndex(index) {
    this.setState({ tabIndex: index });
  }
  render() {
    const { menu, shopinfo } = this.props;
    const { tabIndex } = this.state;
    const cartData = this.props.cart[this.shopId];

    return (
      <div>
        {shopinfo ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ShopDetailHeader data={shopinfo} />
            <ShopDetailTab onClick={this.setTabIndex} />
            <ul>
              <li
                style={{
                  height: `${tabIndex !== 0 ? 0 : "auto"}`,
                  visibility: `${tabIndex !== 0 && menu ? "hidden" : "visible"}`
                }}
              >
                <ShopMenu
                  data={menu}
                  cart={cartData}
                  changeCart={this.increaseDecreaseCart}
                />
                <Cart data={cartData} minOrderAmount={shopinfo&&shopinfo.float_minimum_order_amount}/>
              </li>
              <li
                style={{
                  height: `${tabIndex !== 1 ? 0 : "auto"}`,
                  visibility: `${tabIndex !== 1 ? "hidden" : "visible"}`
                }}
              >
                <ShopRating />
              </li>
              <li
                style={{
                  height: `${tabIndex !== 2 ? 0 : "auto"}`,
                  visibility: `${tabIndex !== 2 ? "hidden" : "visible"}`
                }}
              >
                <ShopInfo />
              </li>
            </ul>
          </div>
        ) : (
          <ShopDetailTombstone />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { longitude, latitude } = state.location;
  const { shopinfo, menu, rating } = state.shopDetail;
  const { data, hasMore, offset } = rating;
  const cart = state.cart;
  return {
    longitude,
    latitude,
    shopinfo,
    menu,
    data,
    hasMore,
    offset,
    cart
  };
};

export default connect(mapStateToProps)(ShopDetail);
