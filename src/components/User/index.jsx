import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import Item from "./Item";

class User extends Component {
  hangleChange(e) {
    let data = new FormData();
    data.append("file", e.target.files[0]);
    this.props.upload(data);
  }
  render() {
    const { avatar } = this.props.userinfo;
    console.log("avatar", avatar);
    return (
      <div styleName="user">
        <div styleName="avatar-upload">
          <div styleName="avatar-warp">
            <b>头像</b>
            <div styleName="avatar-box">
              {!!avatar ? (
                <div styleName="avatar">
                  <img src={avatar} alt="" />
                </div>
              ) : (
                <div styleName="head-icon">
                  <i className="iconfont icon-touxiang" />
                </div>
              )}
              <i className="iconfont icon-jinrujiantou" />
            </div>
          </div>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            name="file"
            styleName="avatar-file"
            onChange={this.hangleChange.bind(this)}
          />
        </div>
        <Item name={"用户名"} value={"15533223"} link={"/user"} />
        <Item name={"手机"} value={"15533223"} title={"账号绑定"} link={"/user"} />
        <Item name={"登录密码"} value={"修改"} title={"安全设置"} link={"/user"} />
        <button styleName="logout" onClick={this.props.signout}>退出登录</button>
      </div>
    );
  }
}
export default CSSModules(User, styles, { allowMultiple: true });
