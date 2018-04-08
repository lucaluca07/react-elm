import React from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";

class LoginInput extends React.Component {
  static defaultProps = {
    loginByMessage: true
  };
  constructor(props) {
    super(props);
    const loginByMessage = this.props.loginByMessage;
    this.state = {
      loginByMessage,
      mobile: "",
      message: "",
      username: "",
      password: "",
      disabled:"disabled",
      btnText:"获取验证码"
    };
    this.handleMobileChange = this.handleMobileChange.bind(this)
    this.handleMsgChange = this.handleMsgChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePwdChange = this.handlePwdChange.bind(this)
  }
  handleMobileChange(e){
    const value = e.target.value;
    const mobile = this.state.mobile
    console.log(value.length == 1)
    if(mobile.length < 1 && value == 1){
      this.setState({mobile:value})
    }else if(value.length === 11){
      this.setState({mobile:value,disabled:false})
    }else if(mobile.length > 0){
      this.setState({mobile:value,disabled:"disabled"})
    }
  }
  handleClickMessage(){
    let timer = null;
    let index = 30;
    this.setState({disabled:"disabled",btnText:`已发送(${index}s)`})
    timer = setInterval(() => {
      if(index === 0){
        clearTimeout(timer)
        this.setState({btnText:"重新获取",disabled:false})
      }else{
        index--
        this.setState({btnText:`已发送(${index}s)`})
      }
    },1000)
  }
  handleMsgChange(e){
    this.setState({message:e.target.value})
  }
  handleUserChange(e){
    this.setState({username:e.target.value})
  }
  handlePwdChange(e){
    this.setState({password:e.target.value})
  }
  handle
  render() {
    const {loginByMessage, mobile, message, username, password, disabled, btnText} = this.state;
    const tips = this.props.tips;
    return (
      <form styleName="login">
        {loginByMessage
          ? (
            <div>
              <section styleName="message-login">
                <input
                  onChange={this.handleMobileChange}
                  styleName="login-input"
                  type="tel"
                  maxLength="11"
                  placeholder="手机号"
                  value={mobile}/>
                <button style={{color:disabled!=="disabled"?"#2395ff":"#999"}} onClick={this.handleClickMessage} styleName="message-btn" disabled={disabled}>
                  {btnText}
                </button>
              </section>
              <section>
                <input styleName="login-input" type="tel" maxLength="6" placeholder="验证码" onChange={this.handleMsgChange} value={message}/>
              </section>
            </div>
          )
          : (
            <div>
              <section>
                <input styleName="login-input" type="text" placeholder="手机/邮箱/用户名" onChange={this.handleUserChange} username={username}/>
              </section>
              <section>
                <input styleName="login-input" type="password" placeholder="密码" onChange={this.handlePwdChange} password={password}/>
              </section>
            </div>
          )}
        {tips}
        <div>
          <button styleName="login-btn">登录</button>
        </div>
      </form>
    );
  }
}

export default CSSModules(LoginInput, styles, {allowMultiple: true});
