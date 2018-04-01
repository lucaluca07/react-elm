import React, { Component } from "react";
import { connect } from "react-redux";
// import {ShopDetailTombstone} from '../../components/Tombstone'
import ShopDetailHeader from "../../components/ShopDetailHeader";
import ShopDetailTab from "../../components/ShopDetailTab";
import ShopMenu from "../../components/ShopMenu";
import ShopRating from "../../components/ShopRating";
import ShopInfo from "../../components/ShopInfo";
import Cart from "../../components/Cart";
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
    dispatch(clearMenu())
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
    const { food_id,
      item_id,
      name,
      sku_id,
      original_price,
      specs,
      weight,
      price,
      packing_fee,
      stock } = info
    const foods = cart[this.shopId] && cart[this.shopId][goodsId]||[]
    const quantity = 1;
    const food = {
      id:food_id,
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
    // console.log(skuIds)
    if (skuIds.indexOf(sku_id) > -1) {
      const index = skuIds.indexOf(sku_id)
      const ids = skuIds.map((element,index) => {   
        // console.log(element)                                                                                                                                 
        if(element === sku_id){
          return index
        }
      })
      console.log("attrs",attrs)
      console.log("ids",ids)
      if (foods[index].attrs.length > 0 ) {
        const flag = ids.some(id => {
          console.log("id",foods[id].attrs)
          console.log(attrs)
          return (
          foods[id].attrs.every((element,index) =>
            { console.log("attrs index:::",attrs[index])
              return element.value === attrs[index].value})
        )})
        console.log("flag",flag)
        if(flag){
            foods[index].quantity += num
        }else{
            console.log("food",food)
            foods.push(food)
        }
      } else {
        foods[index].quantity += num
      }
    } else {
      foods.push(food)
    }
    dispatch(changeCart(this.shopId, goodsId,foods));
  }
  setTabIndex(index) {
    this.setState({ tabIndex: index });
  }
  render() {
    const { menu } = this.props;
    const { tabIndex } = this.state;
    // const cartData = this.props.cart[this.shopId];
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ShopDetailHeader />
        <ShopDetailTab onClick={this.setTabIndex} />
        {tabIndex === 0 &&
          menu && (
            <div>
              <ShopMenu
                data={menu}
                // cart={cartData}
                changeCart={this.increaseDecreaseCart}
              />
              <Cart />
            </div>
          )}
        {tabIndex === 1 && <ShopRating />}
        {tabIndex === 2 && <ShopInfo />}
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
