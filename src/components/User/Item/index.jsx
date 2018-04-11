import React from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import styles from "./style.scss";

const Item = ({ name, value, link, title }) => (
  <div styleName="item">
    {title && <h2 styleName="title">{title}</h2>}
    <Link to={link}>
      <div styleName="warp">
        <b>{name}</b>
        <div>
          <span>{value}</span>
          <i className="iconfont icon-jinrujiantou" />
        </div>
      </div>
    </Link>
  </div>
);

export default CSSModules(Item, styles, { allowMultiple: true });
