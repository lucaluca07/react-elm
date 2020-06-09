import React from "react";
import CSSModules from "react-css-modules";
import { withRouter } from "react-router-dom";
import "./style.scss";

const Header = ({ title, link, history,btn,onClick }) => (
  <div className="header">
    <div
      className="header-back"
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
    <div className="header-title">{title}</div>
    <div className="add-address" onClick={() => {onClick&&onClick()}}>{btn}</div>
  </div>
);

export default withRouter(Header);
