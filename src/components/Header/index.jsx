import React from "react";
import CSSModules from "react-css-modules";
import { withRouter } from "react-router-dom";
import styles from "./style.scss";

const Header = ({ title, link, history,btn,onClick }) => (
  <div styleName="header">
    <div
      styleName="header-back"
      onClick={() => {
        if (!!link) {
          history.push(link);
        } else {
          window.history.go(-1);
        }
      }}
    >
      <i className="iconfont icon-fanhuijiantou back" />
    </div>
    <div styleName="header-title">{title}</div>
    <div styleName="add-address" onClick={() => {onClick&&onClick()}}>{btn}</div>
  </div>
);

export default withRouter(CSSModules(Header, styles));
