import React from "react";

import header from "../../static/image/header.png"
import "./style.scss";

class LoginHeader extends React.Component {
    state = {
        index: 0
    }
    handleClick(index) {
        const {onClick} = this.props
        this.setState({index})
        onClick && onClick(!index)
    }
    render() {
        const {index} = this.state
        return (
            <div className="login-header">
                <div className="img">
                    <img src={header} alt="header"/>
                </div>
                <ul className="switch">
                    <li
                        onClick={this
                        .handleClick
                        .bind(this, 0)}
                        className={`item ${index === 0
                        ? "active"
                        : ""}`}>短信登陆</li>
                    <li
                        onClick={this
                        .handleClick
                        .bind(this, 1)}
                        className={`item ${index === 1
                        ? "active"
                        : ""}`}>密码登陆</li>
                </ul>
            </div>
        )
    }
}

export default LoginHeader;