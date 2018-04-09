import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import Toast from "../../components/Toast"

class My extends Component {
  constructor(){
    super()
    this.handleClickUserInfo = this.handleClickUserInfo.bind(this)
  }
  handleClickUserInfo(){
    const {user_id,history} = this.props
    if(!!user_id){
      history.push("/user")
    }else{
      history.push("/login")
    }
  }
  render() {
  const username = this.props.username||"登录/注册"; 
  const mobile = this.props.mobile||"登陆后享受更多特权";
    return (
      <div>
        <Header title="我的" />
        <UserInfo name={username} mobile={mobile} onClick={this.handleClickUserInfo}/>
        {/* <Toast/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user_id, username, mobile, address } = state.userinfo;

  return {
    user_id,
    username,
    mobile,
    address
  };
};
export default connect(mapStateToProps)(My);
