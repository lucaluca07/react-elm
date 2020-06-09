import React, {Component} from "react";
import CSSModules from "react-css-modules";
import "./style.scss";

class MyComponent extends Component {
  render() {
    const {id, point, balance, gift_amount} = this.props
    return (
      <div className="index">
        <ul className="wrap">
          <li>
            {!!id
              ? <div className="info burse-color">
                  <span>{parseFloat(balance).toFixed(2)}</span>
                  <span>元</span>
                </div>
              : <div className="icon burse">
                <i className="iconfont icon-qian"/>
              </div>}
            <p className="name">钱包</p>
          </li>
          <li>
            {!!id
              ? <div className="info gift-color">
                  <span>{gift_amount}</span>
                  <span>个</span>
                </div>
              : <div className="icon gift_amount">
                <i className="iconfont icon-icon--"/>
              </div>}
            <p className="name">红包</p>
          </li>
          <li>
            {!!id
              ? <div className="info point-color">
                  <span>{point}</span>
                  <span>个</span>
                </div>
              : <div className="icon point">
                <i className="iconfont icon-29"/>
              </div>}
            <p className="name">金币</p>
          </li>
        </ul>
        <div className="item" onClick={this.props.toAddress}>
          <i className="iconfont icon-dibiao"/>
          <div className="content">
            <span>我的地址</span>
            <i className="iconfont icon-jinrujiantou"/>
          </div>
        </div>
        <div className="item" onClick={this.props.download}>
          <i className="iconfont icon-changyonglogo40"/>
          <div className="content">
            <span>下载饿了么App</span>
            <i className="iconfont icon-jinrujiantou"/>
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
