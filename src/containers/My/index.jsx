import React, { Component } from "react";
import { connect } from "react-redux";
import {getCurrentUser, getUserinfo} from "../../actions/userinfo"
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";

class My extends Component {
  constructor(){
    super()
    this.handleClickUserInfo = this.handleClickUserInfo.bind(this)
  }
  async componentDidMount(){
    const {dispatch} = this.props
    dispatch(await getCurrentUser())
    const userId = this.props.id
    if(!!userId){
      dispatch(await getUserinfo(userId))
    }
  }
  handleClickUserInfo(){
    const {id,history} = this.props
    if(!!id){
      history.push("/user")
    }else{
      history.push("/login")
    }
  }
  render() {
  const username = this.props.username||"登录/注册"; 
  const mobile = this.props.mobile||"登陆后享受更多特权";
  const avatar = this.props.avatar
    return (
      <div>
        <Header title="我的" />
        <UserInfo name={username} mobile={mobile} avatar={avatar} onClick={this.handleClickUserInfo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { id, username, mobile, address,avatar } = state.userinfo;

  return {
    id,
    username,
    mobile,
    address,
    avatar
  };
};
export default connect(mapStateToProps)(My);
