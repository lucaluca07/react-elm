import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";

class UserInfo extends Component {
  static defaultProps = {
    name: "登录/注册",
    mobile: "登陆后享受更多特权"
  };
  render() {
    const { name, mobile, onClick } = this.props;
    return (
      <div styleName="userinfo" onClick={onClick}>
        <div styleName="head-icon">
          <i className="iconfont icon-touxiang" />
        </div>
        <div styleName="user">
          <div styleName="name">{name}</div>
          <div>
            <i className="iconfont icon-shouji" />
            <span>{mobile}</span>
          </div>
        </div>
        <div styleName="user-btn">
          <i className="iconfont icon-jinrujiantou" />
        </div>
      </div>
    );
  }
}

export default CSSModules(UserInfo, styles, { allowMultiple: true });
