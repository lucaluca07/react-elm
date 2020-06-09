import React, { Component } from "react";
import CSSModules from "react-css-modules";
import "./style.scss";

class UserInfo extends Component {
  static defaultProps = {
    name: "登录/注册",
    mobile: "登陆后享受更多特权"
  };
  render() {
    const { name, mobile, avatar, onClick } = this.props;
    return (
      <div className="userinfo" onClick={onClick}>
      {!!avatar?<div className="avatar"><img src={avatar} alt=""/></div>
      :<div className="head-icon">
      <i className="iconfont icon-touxiang" />
    </div>}
        
        <div className="user">
          <div className="name">{name}</div>
          <div>
            <i className="iconfont icon-shouji" />
            <span>{mobile}</span>
          </div>
        </div>
        <div className="user-btn">
          <i className="iconfont icon-jinrujiantou" />
        </div>
      </div>
    );
  }
}

export default UserInfo;
