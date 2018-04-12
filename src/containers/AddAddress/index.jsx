import React, { Component } from "react";
import {connect} from 'react-redux';
import {getCurrentUser} from "../../actions/userinfo"
import Header from "../../components/Header";

class AddAddress extends Component {
  async componentDidMount(){
    const {dispatch,history} = this.props
    dispatch(await getCurrentUser())
    const id = this.props.id
    if(!id){
      history.push("/login/my&&address&&add")
    }
  }
  render() {
    return (
      <div>
        <Header title="添加地址" />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {id} = state.userinfo;
  return {
    id
  }
}
export default connect(mapStateToProps)(AddAddress);