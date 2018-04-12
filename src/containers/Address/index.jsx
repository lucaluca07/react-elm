import React, { Component } from "react";
import {connect} from 'react-redux';
import {getAddresses,getCurrentUser} from "../../actions/userinfo"
import Addresses from "../../components/Addresses";
import Header from "../../components/Header";

class Address extends Component {
  async componentDidMount(){
    const {dispatch,history} = this.props
    dispatch(await getCurrentUser())
    const id = this.props.id
    console.log("id:::::",id)
    if(!id){
      history.push("/login/my&&address")
    }
    dispatch(await getAddresses(id))
  }
  render() {
    const {address} = this.props
    return (
      <div>
        <Header title="我的地址" />
        <Addresses data={address} />
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
export default connect(mapStateToProps)(Address);