import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CSSModules from 'react-css-modules';
import SearchComponent from "../SearchComponent";
import styles from "./style.scss";

class SearchHeader extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div styleName="search-header">
        <div styleName="search-back" onClick={this.handleClick.bind(this)}>
          <i className="iconfont icon-fanhuijiantou back" />
        </div>
        <div styleName="search-comp-box">
          <SearchComponent
            value={this.props.value}
            onEnter={this.props.onEnter}
            onChange={this.props.onChange}
            height={5}
            placeholder={"输入商家、商品名称"}
          />
        </div>
        <div styleName="search-btn">搜索</div>
      </div>
    );
  }
}

export default withRouter(CSSModules(SearchHeader,styles));
