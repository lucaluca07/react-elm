import React, { Component } from "react";
import "./style.scss";
import { spawn } from "child_process";

export default class Cart extends Component {
  constructor(){
    super()
    // this.getObjInfo = this.getObjInfo.bind(this)
  }
  getObjLength(obj){
    let length = 0;
    Object.keys(obj).forEach(val =>{
      obj[val].forEach(ele => {
        length+=ele.quantity
      })
    })
    return length;
  }
  getMoney(obj){
    let total = 0;
    Object.keys(obj).forEach(val =>{
      obj[val].forEach(ele => {
        total+=(ele.quantity*ele.price)
      })
    })
    return total;
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
    // console.log("data",this.props.data)
    const {data}=this.props
    const arr = data&&this.getObjLength(data)
    const total = (data&&this.getMoney(data))||0;
    const minOrderAmount = this.props.minOrderAmount
    // this.getObjInfo()
    return (
      <div className="cartview">
        <div className="discount-tips">满75减30</div>
        <div className="cartview-body">
          <div className="cartview-main">
            <div className="cartview-total">¥{total}</div>
            <div className="cart-delivery">配送费¥5</div>
          </div>
          <div className={`submit-btn ${total - minOrderAmount >= 0 ?"activity-btn" :""}`}>
          {total > 0
          ? (minOrderAmount - total > 0
            ? `还差¥${minOrderAmount - total}起送`
            : "去结算")
          :`¥${minOrderAmount}起送`
          }
          
          </div>
        </div>
        <div className={`cart ${arr>0?"activity-cart":""}`}>
          <i className="iconfont icon-cartfill" />
          {arr>0&&<div className="badge">{arr}</div>}
        </div>
      </div>
    );
  }
}
