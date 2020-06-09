import React from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import "./style.scss";

const Item = ({ name, value, link, title }) => (
  <div className="item">
    {title && <h2 className="title">{title}</h2>}
    <Link to={link}>
      <div className="warp">
        <b>{name}</b>
        <div>
          <span>{value}</span>
          <i className="iconfont icon-jinrujiantou" />
        </div>
      </div>
    </Link>
  </div>
);

export default Item;
