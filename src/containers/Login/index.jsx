import React, { Component } from "react";
import {connect} from 'react-redux';
import LoginInput from "../../components/LoginInput"

class Login extends Component {
  render() {
    return (
      <div>
        <LoginInput/>
      </div>
    );
  }
}

export default connect()(Login)