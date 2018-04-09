import React from "react";
import CSSModules from 'react-css-modules';
import header from "../../static/image/header.png"
import styles from "./style.scss";

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
            <div styleName="header">
                <div styleName="img">
                    <img src={header} alt="header"/>
                </div>
                <ul styleName="switch">
                    <li
                        onClick={this
                        .handleClick
                        .bind(this, 0)}
                        styleName={`item ${index === 0
                        ? "active"
                        : ""}`}>短信登陆</li>
                    <li
                        onClick={this
                        .handleClick
                        .bind(this, 1)}
                        styleName={`item ${index === 1
                        ? "active"
                        : ""}`}>密码登陆</li>
                </ul>
            </div>
        )
    }
}

export default CSSModules(LoginHeader, styles, {allowMultiple: true});