import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCurrentUser,
  getUserinfo,
  uploadAvatar,
  signout
} from "../../actions/userinfo";
import Header from "../../components/Header";
import UserComponent from "../../components/User";

class User extends Component {
  constructor() {
    super();
    this.handleUploadAvatar = this.handleUploadAvatar.bind(this);
    this.signout = this.signout.bind(this);
  }
  async componentDidMount() {
    const { dispatch, username, history } = this.props;
    dispatch(await getCurrentUser());
    const userId = this.props.id;
    if (!userId) {
      history.push("/login");
    }
    if (!!userId && !username) {
      dispatch(await getUserinfo(userId));
    }
  }
  componentDidUpdate(){
    const { id, history } = this.props;
    if (!id) {
      history.push("/my");
    }
  }
  async handleUploadAvatar(data) {
    const { dispatch, history, id } = this.props;
    if (!id) {
      history.push("/login");
    } else {
      dispatch(await uploadAvatar(id, data));
    }
  }
  async signout() {
    const { dispatch } = this.props;
    dispatch(await signout());
  }
  render() {
    const { avatar, username, mobile } = this.props;
    const userinfo = { avatar, username, mobile };
    return (
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "#f5f5f5"
        }}
      >
        <Header title="账户信息" />
        <UserComponent upload={this.handleUploadAvatar} userinfo={userinfo} signout={this.signout}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { id, username, mobile, address, avatar } = state.userinfo;

  return { id, username, mobile, avatar, address };
};
export default connect(mapStateToProps)(User);
