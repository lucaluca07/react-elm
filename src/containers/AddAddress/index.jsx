import React, { Component } from "react";
import {connect} from 'react-redux';
import {getCurrentUser,addAddress,modifyAddress,deleteAddress} from "../../actions/userinfo"
import Header from "../../components/Header";
import AddAddresses from "../../components/AddAddress"

class AddAddress extends Component {
  constructor(){
    super()
    this.state = {title:"添加地址",text:""}
    this.addAddress = this.addAddress.bind(this)
    this.deleteAddress = this.deleteAddress.bind(this)
  }
  componentWillMount(){
    if(this.props.match.path.split("/")[3] === "edit"){
      this.setState({title:"修改地址",text:"删除"})
    }
  }
  async componentDidMount(){
    const {dispatch,history} = this.props
    dispatch(await getCurrentUser())
    const id = this.props.id
    if(!id){
      history.push("/login/my&&address&&add")
    }
  }
  async addAddress(data){
    const {id, dispatch,match,history} = this.props
    if(match.path.split("/")[3] === "edit"){
      console.log(this.props.tempAddress)
      const adId = this.props.tempAddress.id
      dispatch(await modifyAddress(id,data,adId))
    }else{
      dispatch(await addAddress(id, data))
    }
    history.push("/my/address")
  }
  async deleteAddress(){
    const {id, dispatch,match,history} = this.props
    if(match.path.split("/")[3] === "edit"){
      const adId = this.props.tempAddress.id
      dispatch(await deleteAddress(id,adId))
    }
    history.push("/my/address")
  }
  render() {
    const {tempAddress} = this.props
    const {text,title} = this.state
    return (
      <div>
        <Header title={title} link={"/my/address"} btn={text} onClick={this.deleteAddress}/>
        <AddAddresses data={tempAddress} addBtn = {this.addAddress}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {id,tempAddress} = state.userinfo;
  return {
    id,
    tempAddress
  }
}
export default connect(mapStateToProps)(AddAddress);