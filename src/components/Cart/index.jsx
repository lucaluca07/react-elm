import React, { Component } from "react";
import "./style.scss";

export default class Cart extends Component {
  constructor(){
    super()
    this.getObjInfo = this.getObjInfo.bind(this)
  }
  getObjLength(obj){
    let length = 0;
    Object.keys(obj).forEach(val =>{
      length+=obj[val]
    })
    return length
  }
  getObjInfo(){
    const {menu,data} = this.props
    let foods = []
    let info = {}
    const dataKeys = data&&Object.keys(data)
    menu.forEach(val => {
      foods = foods.concat(val.foods)
    })
    if(data){
      console.log(111111)
      foods.forEach(val => {
        const virtual_food_id = val.virtual_food_id
        if(dataKeys.indexOf(virtual_food_id) > -1){
          info[virtual_food_id] = {price:val.specfoods[0].price,name:val.name,num:data[virtual_food_id]}
        }
      })
    }
    console.log(info)
  }
  render() {
    console.log("data",this.props.data)
    const {data}=this.props
    const arr = data&&this.getObjLength(data)
    this.getObjInfo()
    return (
      <div className="cartview">
        <div className="discount-tips">满75减30</div>
        <div className="cartview-body">
          <div className="cartview-main">
            <div className="cartview-total">¥0</div>
            <div className="cart-delivery">配送费¥5</div>
          </div>
          <div className="submit-btn">¥20起送</div>
        </div>
        <div className={`cart ${arr>0?"activity-cart":""}`}>
          <i className="iconfont icon-cartfill" />
          {arr>0&&<div className="badge">{arr}</div>}
        </div>
      </div>
    );
  }
}
