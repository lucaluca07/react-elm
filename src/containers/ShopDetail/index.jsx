import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from 'react-dom'
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
import { changeCart, clearCart } from "../../actions/cart";

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
    this.getRatings = this.getRatings.bind(this);
    this.setTabIndex = this.setTabIndex.bind(this);
    this.increaseDecreaseCart = this.increaseDecreaseCart.bind(this);
    this.clearShopCart = this.clearShopCart.bind(this)
    this.height = 300;
    this.shopId = this.props.match.params.id;
  }
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(clearMenu());
    dispatch(clearRating());
  }
  async componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
    document.getElementsByTagName("body")[0].style.height =
      window.screen.height + "px";
    const { dispatch, longitude, latitude } = this.props;
    dispatch(await getMenu(this.shopId, longitude, latitude));
    dispatch(await getShopInfo(this.shopId, longitude, latitude));
    console.log(111111,ReactDOM.findDOMNode(this.refs.tab).getBoundingClientRect().top)
    this.height = window.screen.height - ReactDOM.findDOMNode(this.refs.tab).getBoundingClientRect().top
    this.getRatings();
  }
  
  componentWillUnmount(){
    document.body.style.overflow = "visible";
    document.body.style.position = "";
    document.getElementsByTagName("body")[0].style.height = "auto";
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
      food_id,
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
          if(foods[index].quantity + num === 0){
            foods.splice(index,1)
          }else{
            foods[index].quantity += num;
          }
        } else {
          foods.push(food);
        }
      } else {
        if(foods[index].quantity + num === 0){
          foods.splice(index,1)
        }else{
          foods[index].quantity += num;
        }
      }
    } else {
      foods.push(food);
    }
    dispatch(changeCart(this.shopId, goodsId, foods));
  }
  clearShopCart(){
    const {dispatch} = this.props
    const shopId = this.shopId
    dispatch(clearCart(shopId))
  }
  setTabIndex(index) {
    this.setState({ tabIndex: index });
  }
  render() {
    const { menu, shopinfo, rating } = this.props;
    const { tabIndex } = this.state;
    const cartData = this.props.cart[this.shopId];

    return (
      <div >
        {shopinfo ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ShopDetailHeader data={shopinfo} />
            <ShopDetailTab onClick={this.setTabIndex} />
            <ul ref="tab" style={{height:this.height,overflow:"auto"}}>
              <li
                style={{
                  display: `${tabIndex !== 0 ? "none" : ""}`
                }}
              >
                {menu&&<ShopMenu
                  data={menu}
                  cart={cartData}
                  changeCart={this.increaseDecreaseCart}
                />}
                <Cart 
                  data={cartData} 
                  minOrderAmount={shopinfo&&shopinfo.float_minimum_order_amount}
                  changeCart={this.increaseDecreaseCart}
                  clearCart={this.clearShopCart}
                />
              </li>
              <li
                style={{
                  display: `${tabIndex !== 1 ? "none" : ""}`
                }}
              >
                <ShopRating rating={rating} loadNext={this.getRatings}/>
              </li>
              <li
                style={{
                  display: `${tabIndex !== 2 ? "none" : ""}`
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
    rating:{data,hasMore},
    offset,
    cart
  };
};

export default connect(mapStateToProps)(ShopDetail);
