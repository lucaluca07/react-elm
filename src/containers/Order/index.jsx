import React, { Component } from "react";
import {connect} from "react-redux"
import Header from "../../components/Header";
import {getOrder,getCurrentUser} from "../../actions/userinfo"
import OrderList from "../../components/OrderList"

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
    const {order} = this.props
    return (
      <div>
        <Header title="订单" />
        {!!order&&<OrderList data={order}/>}
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
