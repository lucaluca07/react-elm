import React from "react";
import CSSModules from "react-css-modules";
import "./style.scss";
import Toast from "../Toast";

class LoginInput extends React.Component {
  static defaultProps = {
    loginByMessage: true
  };
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      message: "",
      username: "",
      password: "",
      disabled: "disabled",
      btnText: "获取验证码"
    };
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickMessage = this.handleClickMessage.bind(this);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  handleMobileChange(e) {
    const value = e.target.value;
    const mobile = this.state.mobile;
    const { getMobile } = this.props;
    console.log(value.length == 1);
    if (mobile.length < 1 && value == 1) {
      this.setState({ mobile: value });
    } else if (value.length === 11) {
      this.setState({ mobile: value, disabled: false });
    } else if (mobile.length > 0) {
      this.setState({ mobile: value, disabled: "disabled" });
    }
    getMobile(value);
  }
  handleClickMessage() {
    let index = 30;
    const { msgClick } = this.props;
    console.log(msgClick);
    msgClick && msgClick();
    this.setState({ disabled: "disabled", btnText: `已发送(${index}s)` });
    this.timer = setInterval(() => {
      if (index === 0) {
        clearInterval(this.timer);
        this.setState({ btnText: "重新获取", disabled: false });
      } else {
        index--;
        this.setState({ btnText: `已发送(${index}s)` });
      }
    }, 1000);
  }
  handleMsgChange(e) {
    this.setState({ message: e.target.value });
  }
  handleUserChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePwdChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit() {
    const { mobile, message, username, password } = this.state;
    const { loginByMessage, submit } = this.props;
    if (loginByMessage) {
      if (!mobile || mobile.length < 11) {
        Toast.info("手机号格式错误错误");
      } else if (!message) {
        Toast.info("请输入验证码");
      }else{
        submit(mobile, message, loginByMessage);
      }
    } else {
      if (!username) {
        Toast.info("请输入用户名");
      } else if (!password) {
        Toast.info("请输入密码");
      }else{
        submit(username, password, loginByMessage);
      }
    }
  }
  render() {
    const {
      mobile,
      message,
      username,
      password,
      disabled,
      btnText
    } = this.state;
    const { tips, loginByMessage } = this.props;
    return (
      <div className="login">
        {loginByMessage ? (
          <div>
            <section className="message-login">
              <input
                onChange={this.handleMobileChange}
                className="login-input"
                type="tel"
                maxLength="11"
                placeholder="手机号"
                value={mobile}
              />
              <button
                style={{
                  color: disabled !== "disabled" ? "#2395ff" : "#999"
                }}
                onClick={this.handleClickMessage}
                className="message-btn"
                disabled={disabled}
              >
                {btnText}
              </button>
            </section>
            <section>
              <input
                className="login-input"
                type="tel"
                maxLength="6"
                placeholder="验证码"
                onChange={this.handleMsgChange}
                value={message}
              />
            </section>
          </div>
        ) : (
          <div>
            <section>
              <input
                className="login-input"
                type="text"
                placeholder="手机/邮箱/用户名"
                onChange={this.handleUserChange}
                value={username}
              />
            </section>
            <section>
              <input
                className="login-input"
                type="password"
                placeholder="密码"
                onChange={this.handlePwdChange}
                value={password}
              />
            </section>
          </div>
        )}
        {tips}
        <div>
          <button className="login-btn" onClick={this.handleSubmit}>
            登录
          </button>
        </div>
      </div>
    );
  }
}

export default LoginInput;
