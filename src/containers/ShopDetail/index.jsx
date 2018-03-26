import React, { Component } from "react";
import { connect } from "react-redux";
// import {ShopDetailTombstone} from '../../components/Tombstone'
import ShopDetailHeader from "../../components/ShopDetailHeader";
import ShopDetailTab from "../../components/ShopDetailTab";
import ShopMenu from "../../components/ShopMenu";
import ShopRating from "../../components/ShopRating";
import ShopInfo from '../../components/ShopInfo';
import Cart from '../../components/Cart'
import {
  getMenu,
  getShopInfo,
  getRating,
  clearRating
} from "../../actions/shopDetail";
import {changeCart} from '../../actions/cart'

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
    this.getRatings = this.getRatings.bind(this);
    this.setTabIndex = this.setTabIndex.bind(this);
    this.increaseDecreaseCart = this.increaseDecreaseCart.bind(this)
    this.shopId = this.props.match.params.id;
  }
  async componentDidMount() {
    const { dispatch, longitude, latitude } = this.props;
    dispatch(clearRating());
    dispatch(await getMenu(this.shopId, longitude, latitude));
    dispatch(await getShopInfo(this.shopId, longitude, latitude));
    this.getRatings();
    dispatch(changeCart(this.shopId,1234,222))
  }
  async getRatings() {
    const { dispatch, longitude, latitude, offset } = this.props;
    dispatch(await getRating(this.shopId, offset, 8, longitude, latitude));
  }
  increaseDecreaseCart(goodsId,num){
    const { dispatch,cart } = this.props;
    console.log("goodsNum",cart[this.shopId][goodsId],num)
    const goodsNum = (cart[this.shopId]&&cart[this.shopId][goodsId])||0
    dispatch(changeCart(this.shopId,goodsId,goodsNum+num))
  }
  setTabIndex(index) {
    this.setState({ tabIndex: index });
  }
  render() {
    const { menu } = this.props;
    const { tabIndex } = this.state;
    const cartData = this.props.cart[this.shopId]
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ShopDetailHeader />
        <ShopDetailTab onClick={this.setTabIndex} />
        {tabIndex === 0 && menu &&
        <div>
          <ShopMenu 
            data={menu} 
            cart={cartData}
            changeCart={this.increaseDecreaseCart} />
          <Cart data={cartData}/>
        </div>
        }
        {tabIndex === 1 &&
          <ShopRating />
        }
        {tabIndex === 2 &&
          <ShopInfo />
        }   
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
