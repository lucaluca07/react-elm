import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

const ShopListTitle = () => (
  <div styleName="shop-list-title">
    <div styleName="title-left" />
    <div styleName="list-title">推荐商家</div>
    <div styleName="title-right" />
  </div>
);

export default CSSModules(ShopListTitle,styles,{allowMultiple:true});