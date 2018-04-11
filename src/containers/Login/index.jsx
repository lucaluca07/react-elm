import React, { Component } from "react";
import { connect } from "react-redux";
import { getCaptchas, login } from "../../actions/userinfo";
import LoginInput from "../../components/LoginInput";
import LoginHeader from "../../components/LoginHeader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginByMessage: true,
      mobile: "",
      code: false
    };
    this.toggleLoginStyle = this.toggleLoginStyle.bind(this);
    this.getMobile = this.getMobile.bind(this);
    this.getCaptchas = this.getCaptchas.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    const { id, history } = this.props;
    if (!!id) {
      history.push("/my");
    }
  }

  componentDidUpdate() {
    const { id, history } = this.props;
    const router = this.props.match.params.redirect;
    console.log("router",router)
    if (!!id) {
      if (router) {
        //替换router参数中的 && 为 /
        const url = router.replace("&&", "/");
        history.push("/" + url);
      } else {
        history.push("/my");
      }
    }
  }

  getMobile(mobile) {
    this.setState({ mobile });
  }

  async getCaptchas() {
    const { dispatch } = this.props;
    const { mobile } = this.state;
    dispatch(await getCaptchas(mobile));
  }

  async login(mobile, pwd, messageLogin) {
    const { dispatch } = this.props;
    dispatch(await login(mobile, pwd, messageLogin));
  }

  toggleLoginStyle(flag) {
    this.setState({ loginByMessage: flag });
  }

  render() {
    const { loginByMessage } = this.state;
    return (
      <div>
        <LoginHeader onClick={this.toggleLoginStyle} />
        <LoginInput
          loginByMessage={loginByMessage}
          getMobile={this.getMobile}
          msgClick={this.getCaptchas}
          submit={this.login}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { id } = state.userinfo;
  return {
    id
  };
};
export default connect(mapStateToProps)(Login);
