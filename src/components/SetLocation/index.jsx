import React, { Component } from "react";

import "./style.scss";

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
      <div className="current-location">
        <h4 className="title">当前位置</h4>
        <div className="location">
          <div onClick={this.handleClick}>{name}</div>
          <div className="refresh-location" onClick={this.refreshLocation}>
            <div className={rotate? "rotate-animate":"rotate-icon"}>
              <i className="iconfont icon-ditudingwei"/>
            </div>
            
            <span>重新定位</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SetLocation;