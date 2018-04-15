import React, { Component } from "react";
import {connect} from "react-redux"
import Header from "../../components/Header";
import {getOrder,getCurrentUser} from "../../actions/userinfo"

class Order extends Component {
  async componentDidMount(){
    const {dispatch} = this.props
    dispatch(await getCurrentUser())
    const id = this.props.id
    if(!!id){
      dispatch(await(getOrder(id,8,0)))
    }
  }
  render() {
    return (
      <div>
        <Header title="订单" />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {id, order} = state.userinfo
  return {
    id,
    order
  }
} 
export default connect(mapStateToProps)(Order)
