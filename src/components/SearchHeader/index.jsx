import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CSSModules from 'react-css-modules';
import SearchComponent from "../SearchComponent";
import styles from "./style.scss";

class SearchHeader extends Component {
  constructor(){
    super();
    this.state = {value:""};
    this.hangleChange = this.hangleChange.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);   
  }
  handleClick() {
    this.props.history.push("/");
  }
  hangleChange(value){
    this.setState({value})
    const onChange = this.props.onChange;
    onChange && onChange(value);
  }
  handleClickSearch(){
    const onEnter = this.props.onEnter;
    const value = this.state.value
    value && onEnter && onEnter(value)
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
            onChange={this.hangleChange}
            height={5}
            placeholder={"输入商家、商品名称"}
          />
        </div>
        <div styleName="search-btn" onClick={this.handleClickSearch}>搜索</div>
      </div>
    );
  }
}

export default withRouter(CSSModules(SearchHeader,styles));
