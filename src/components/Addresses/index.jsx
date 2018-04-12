import React from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import styles from "./style.scss";
import Item from "./Item";

const Addresses = ({ data = [] }) => (
  <div>
    {data.map((address, index) => <Item key={index} address={address} />)}
    <Link to={"/my/address/add"}>
      <div styleName="add">
        <i className="iconfont icon-jia" />
        <span>新增收货地址</span>
      </div>
    </Link>
  </div>
);

export default CSSModules(Addresses, styles, { allowMultiple: true });
