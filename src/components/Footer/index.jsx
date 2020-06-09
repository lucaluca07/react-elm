import React from "react";
import CSSModules from 'react-css-modules';
import { NavLink } from "react-router-dom";
import styles from "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div styleName="footer">
          <div styleName="footer-split" />
          <ul styleName="footer-wrap">
            <li styleName="footer-item">
              <NavLink exact={true} to={"/"}>
                <div styleName="home-icon icon-box">
                  <i className="iconfont icon-changyonglogo40" />
                </div>
                <span>首页</span>
              </NavLink>
            </li>
            <li styleName="footer-item">
              <NavLink exact={true} to={"/discover"}>
                <div styleName="discover-icon icon-box">
                  <i className="iconfont icon-compass" />
                </div>
                <span>发现</span>
              </NavLink>
            </li>
            <li styleName="footer-item">
              <NavLink exact={true} to={"/order"}>
                <div styleName="order-icon icon-box">
                  <i className="iconfont icon-wodedingdan" />
                </div>
                <span>订单</span>
              </NavLink>
            </li>
            <li styleName="footer-item">
              <NavLink exact={true} to={"/my"}>
                <div styleName="my-icon icon-box">
                  <i className="iconfont icon-yonghu" />
                </div>
                <span>我的</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div styleName="box" />
      </div>
    );
  }
}

export default CSSModules(Footer,styles,{allowMultiple:true});