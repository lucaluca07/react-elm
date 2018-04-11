import React from "react";
import CSSModules from "react-css-modules";
import { withRouter } from "react-router-dom";
import styles from "./style.scss";

const Header = ({ title, link, history }) => (
  <div styleName="header">
    <div
      styleName="header-back"
      onClick={() => {
        if (!!link) {
          history.push(link);
        } else {
          // console.log(1111111,this.props)
          window.history.go(-1);
        }
      }}
    >
      <i className="iconfont icon-fanhuijiantou back" />
    </div>
    <div styleName="header-title">{title}</div>
    <div styleName="add-address" />
  </div>
);

export default withRouter(CSSModules(Header, styles));
