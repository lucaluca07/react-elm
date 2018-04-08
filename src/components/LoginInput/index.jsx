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
    this.state = { loginByMessage };
  }
  render() {
    const loginByMessage = this.state.loginByMessage;
    const tips = this.props.tips;
    return (
      <form styleName="login">
        {loginByMessage ? (
          <div>
            <section styleName="message-login">
              <input
                styleName="login-input"
                type="tel"
                maxLength="11"
                placeholder="手机号"
              />
              <button styleName="message-btn" disabled="disabled">
                获取验证码
              </button>
            </section>
            <section>
              <input
                styleName="login-input"
                type="tel"
                maxLength="6"
                placeholder="验证码"
              />
            </section>
          </div>
        ) : (
          <div>
            <section>
              <input
                styleName="login-input"
                type="text"
                placeholder="手机/邮箱/用户名"
              />
            </section>
            <section>
              <input
                styleName="login-input"
                type="password"
                placeholder="密码"
              />
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

export default CSSModules(LoginInput, styles, { allowMultiple: true });
