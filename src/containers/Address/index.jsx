import React, { Component } from "react";
import {connect} from 'react-redux';
import {getAddresses,getCurrentUser,tempAddress} from "../../actions/userinfo"
import Addresses from "../../components/Addresses";
import Header from "../../components/Header";

class Address extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount(){
    const {dispatch,history} = this.props
    dispatch(await getCurrentUser())
    const id = this.props.id;
    if(!id){
      history.push("/login/my&&address");
    }else{
      dispatch(await getAddresses(id));
    }  
  }

  handleClick(address){
    const {dispatch,history} = this.props
    dispatch(tempAddress(address))
    if(!address.name){
      history.push("/my/address/add")
    }else{
      history.push("/my/address/edit")
    }
    
  }
  render() {
    const {address} = this.props
    return (
      <div>
        <Header title="我的地址" />
        <Addresses data={address} onClick = {this.handleClick}/>
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