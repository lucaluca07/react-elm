import React, { Component } from "react";
import {connect} from 'react-redux';
import {getAddresses} from "../../actions/userinfo"
import DevelopmengPending from "../../components/DevelopmentPending";
import Header from "../../components/Header";

class Address extends Component {
  async componentDidMount(){
    const {dispatch,history,id} = this.props
    // if(!id){
    //   history.push("/login/user&&address")
    // }
    dispatch(await getAddresses(id))
  }
  render() {
    return (
      <div>
        <Header title="收货地址" />
        <DevelopmengPending />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {id, address} = state.userinfo;
  return {
    id,
    address
  }
}
export default connect()(Address);
