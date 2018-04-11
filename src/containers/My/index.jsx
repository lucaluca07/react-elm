import React, {Component} from "react";
import {connect} from "react-redux";
import {getCurrentUser, getUserinfo} from "../../actions/userinfo";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import MyComponent from "../../components/MyComponent";
import Toast from "../../components/Toast"

class My extends Component {
  constructor() {
    super();
    this.handleClickUserInfo = this
      .handleClickUserInfo
      .bind(this);
    this.handleDownloadApp = this
      .handleDownloadApp
      .bind(this)
    this.jumpAddress = this
      .jumpAddress
      .bind(this)
  }
  async componentDidMount() {
    const {dispatch} = this.props;
    dispatch(await getCurrentUser());
    const userId = this.props.id;
    if (!!userId) {
      dispatch(await getUserinfo(userId));
    }
  }
  handleClickUserInfo() {
    const {id, history} = this.props;
    if (!!id) {
      history.push("/user");
    } else {
      history.push("/login");
    }
  }
  jumpAddress() {
    const {id, history} = this.props;
    if (!!id) {
      history.push("/my/address");
    } else {
      history.push("/login");
    }
  }
  handleDownloadApp() {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      console.log("安卓")
    } else if (isiOS) {
      console.log("iOS")
    }
    window.location = "https://h5.faas.ele.me/download/"
  }
  render() {
    const username = this.props.username || "登录/注册";
    const mobile = this.props.mobile || "登陆后享受更多特权";
    const {avatar, id, point, balance, gift_amount} = this.props;
    return (
      <div
        style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "#f5f5f5"
      }}>
        <Header title="我的" link="/"/>
        <UserInfo
          name={username}
          mobile={mobile}
          avatar={avatar}
          onClick={this.handleClickUserInfo}/>
        <MyComponent
          download={this.handleDownloadApp}
          toAddress={this.jumpAddress}
          id={id}
          point={point}
          balance={balance}
          gift_amount={gift_amount}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    id,
    username,
    mobile,
    address,
    avatar,
    point,
    balance,
    gift_amount
  } = state.userinfo;

  return {
    id,
    username,
    mobile,
    address,
    avatar,
    point,
    balance,
    gift_amount
  };
};
export default connect(mapStateToProps)(My);
