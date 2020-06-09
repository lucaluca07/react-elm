import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

const ShopInfo = () => <div>商户信息</div>;

export default CSSModules(ShopInfo,styles,{allowMultiple:true});