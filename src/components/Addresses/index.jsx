import React from "react";
import CSSModules from "react-css-modules";
import "./style.scss";
import Item from "./Item";

const Addresses = ({
  data = [],
  onClick
}) => (
  <div>
    {data.map((address, index) => <Item onClick={onClick} key={index} address={address}/>)}

    <div className="add" onClick={() => {
      onClick && onClick({})
    }}>
      <i className="iconfont icon-jia"/>
      <span>新增收货地址</span>
    </div>
  </div>
);

export default Addresses;
