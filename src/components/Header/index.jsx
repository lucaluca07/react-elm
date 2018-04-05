import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

const Header = ({ title }) => (
  <div styleName="header">
    <div
      styleName="header-back"
      onClick={() => {
        window.history.go(-1);
      }}
    >
      <i className="iconfont icon-fanhuijiantou back" />
    </div>
    <div styleName="header-title">{title}</div>
    <div styleName="add-address" />
  </div>
);

export default CSSModules(Header,styles);