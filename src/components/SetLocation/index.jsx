import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

class SetLocation extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.refreshLocation = this.refreshLocation.bind(this);
    this.stopRotate = this.stopRotate.bind(this);
    this.state = { rotate: false };
  }
  handleClick() {
    const { currentAddress, changeAddress } = this.props;
    const { name, longitude, latitude } = currentAddress;
    changeAddress(name, longitude, latitude);
  }
  refreshLocation() {
    this.setState({ rotate: true });
    const { onClick } = this.props;
    onClick(this.stopRotate);
    console.log(onClick)
  }
  stopRotate() {
    this.setState({ rotate: false });
  }

  render() {
    const { currentAddress } = this.props;
    const { name } = currentAddress;
    const rotate = this.state.rotate;
    return (
      <div styleName="current-location">
        <h4 styleName="title">当前位置</h4>
        <div styleName="location">
          <div onClick={this.handleClick}>{name}</div>
          <div styleName="refresh-location" onClick={this.refreshLocation}>
            <div styleName={rotate? "rotate-animate":"rotate-icon"}>
              <i className="iconfont icon-ditudingwei"/>
            </div>
            
            <span>重新定位</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(SetLocation,styles,{allowMultiple:true});