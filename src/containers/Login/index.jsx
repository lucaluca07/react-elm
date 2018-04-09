import React, {Component} from "react";
import {connect} from 'react-redux';
import {getCaptchas} from "../../actions/userinfo"
import LoginInput from "../../components/LoginInput"
import LoginHeader from "../../components/LoginHeader"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginByMessage: true,
      mobile:"",
      code:false
    }
    this.toggleLoginStyle = this
      .toggleLoginStyle
      .bind(this)
    this.getMobile = this.getMobile.bind(this)
    this.getCaptchas = this.getCaptchas.bind(this) 
  }

  getMobile(mobile){
    this.setState({mobile})
  }
  async getCaptchas(){
    const {dispatch} = this.props
    const {mobile} = this.state
    dispatch(await getCaptchas(mobile))
  }
  toggleLoginStyle(flag) {
    this.setState({loginByMessage: flag})
  }
  render() {
    const {loginByMessage} = this.state
    return (
      <div>
        <LoginHeader onClick={this.toggleLoginStyle}/>
        <LoginInput loginByMessage={loginByMessage} getMobile = {this.getMobile} msgClick={this.getCaptchas}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {captchas} = state.userinfo
  return {
    captchas
  }
}
export default connect()(Login)