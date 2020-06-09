import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";

class MyComponent extends Component {
  render() {
    const {id, point, balance, gift_amount} = this.props
    return (
      <div styleName="index">
        <ul styleName="wrap">
          <li>
            {!!id
              ? <div styleName="info burse-color">
                  <span>{parseFloat(balance).toFixed(2)}</span>
                  <span>元</span>
                </div>
              : <div styleName="icon burse">
                <i className="iconfont icon-qian"/>
              </div>}
            <p styleName="name">钱包</p>
          </li>
          <li>
            {!!id
              ? <div styleName="info gift-color">
                  <span>{gift_amount}</span>
                  <span>个</span>
                </div>
              : <div styleName="icon gift_amount">
                <i className="iconfont icon-icon--"/>
              </div>}
            <p styleName="name">红包</p>
          </li>
          <li>
            {!!id
              ? <div styleName="info point-color">
                  <span>{point}</span>
                  <span>个</span>
                </div>
              : <div styleName="icon point">
                <i className="iconfont icon-29"/>
              </div>}
            <p styleName="name">金币</p>
          </li>
        </ul>
        <div styleName="item" onClick={this.props.toAddress}>
          <i className="iconfont icon-dibiao"/>
          <div styleName="content">
            <span>我的地址</span>
            <i className="iconfont icon-jinrujiantou"/>
          </div>
        </div>
        <div styleName="item" onClick={this.props.download}>
          <i className="iconfont icon-changyonglogo40"/>
          <div styleName="content">
            <span>下载饿了么App</span>
            <i className="iconfont icon-jinrujiantou"/>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(MyComponent, styles, {allowMultiple: true});
